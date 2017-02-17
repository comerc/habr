import React from 'react'
import { connect } from 'react-redux'
import { createSelector } from 'reselect'

import { urlencode } from '../utils'

import PostHeader from './PostHeader'
import PostInfoPanel from './PostInfoPanel'
import FormAdminCauses from './FormAdminCauses'
import PostType from './PostType'
import AuthorInfoByCompany from './AuthorInfoByCompany'
import AuthorInfo from './AuthorInfo'

const PostFull = ({ id, published, flow, hubs, title, author, company, tags, content, viewsCount, favoritesCount }) => (
  <div>
    <div className="tabs"></div>{/* TODO убрать, добавил для отступа, пока не реализован PageHeader */}
    <div className={ !!company ? 'company_post' : 'post_show' }>
      <div className="post post_full" id={`post_${id}`}>
        <PostHeader isTeaser={false} {...{ id, published, flow, hubs, title }} />
        <div className="post__body post__body_full">
          <div className="content html_format">{content}</div>
          { !!tags && tags.length > 0 &&
            <div className="post__tags">
              <ul className="tags icon_tag">
                { tags.map(tag => <li><a href={`/#/search/?q=%5B${urlencode(tag)}%5D&target_type=posts`} rel="tag">{tag}</a></li>)}
              </ul>
            </div>
          }
        </div>
      </div>
      <div className="post-additionals">
        <PostInfoPanel isTeaser={false} {...{ id, author, viewsCount, favoritesCount }} />
        <FormAdminCauses />
        <PostType {...{ author }} />
        { !!company ? <AuthorInfoByCompany {...{ company }} /> : <AuthorInfo {...{ author }} /> }
      </div>
    </div>
  </div>
)

const getPostId = (state, props) =>
  parseInt(props.params.postId, 10)

const getPosts = (state) =>
  state.posts

const getPost = createSelector(
  [getPosts, getPostId],
  (posts, postId) =>
    posts.find(element =>
      element.id === postId)
)

const mapStateToProps = (state, ownProps) => {
  const post = getPost(state, ownProps)
  return {...post}
}

const mapDispatchToProps = (dispatch) => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(PostFull)
