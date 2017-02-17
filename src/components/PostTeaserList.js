import React from 'react'
import { connect } from 'react-redux'
// import { Link } from 'react-router'
import { createSelector } from 'reselect'

import PostTeaser from './PostTeaser'

// TODO при скролировании страницы, зачем-то присваивается класс focus для <div class="post post_teaser shortcuts_item"/>

/*
<ul>
  {Object.keys(flows).map(key =>
    <li key={key}>
      <Link to={`/flows/${key}`}>{flows[key].name}</Link>
    </li>
  )}
</ul>
*/

const PostTeaserList = ({ postTeaserList, flows }) => (
  <div>{/* TODO может перенести сюда родительский className="content_left"? */}
    <div className="tabs"></div>
    <div className="posts_list">
      <div className="posts shorcuts_items">
        {postTeaserList.map((postTeaser) => (
          <PostTeaser key={postTeaser.id} {...postTeaser}/>
        ))}
      </div>
    </div>
  </div>
)

const getSelectedFlow = (state, props) =>
  props.params.selectedFlow

const getPostTeaserList = (state) =>
  state.posts

const filteredPostTeaserList = createSelector(
  [getPostTeaserList, getSelectedFlow],
  (posts, selectedFlow) => {
    if (selectedFlow) {
      return posts.filter(element =>
        element.flow.id === selectedFlow)
    } else {
      return posts
    }
  }
)

const mapStateToProps = (state, ownProps) => {
  return {
    postTeaserList: filteredPostTeaserList(state, ownProps),
    flows: state.flows
  }
}

const mapDispatchToProps = (dispatch) => {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(PostTeaserList)
