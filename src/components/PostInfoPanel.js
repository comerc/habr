import React from 'react'
import { Link } from 'react-router'

import { ga } from '../utils'

// TODO через трое суток вводится запрет на голосование и отображаются результаты

// TODO format viewsCount & favoritesCount

// TODO исправить выравнивание "-" между стрелочек голосования за статью

const PostInfoPanel = ({ id, author, viewsCount, favoritesCount, isTeaser }) => {

  const postsAddToFavorites = (event) => {
    // TODO posts_add_to_favorite}(this, '2', id)
    alert('postsAddToFavorite')
  }

  const postsVotePlus = (event) => {
    // TODO posts_vote(this, id, '2', 1)
    alert('postsVotePlus')
    ga('voting_location', 'plus', window.location.href)
  }

  const postsVoteMinus = (event) => {
    // TODO posts_vote(this, id, '2', -1)
    alert('postsVoteMinus')
    ga('voting_location', 'minus', window.location.href)
  }

  const postsVoteZero = (event) => {
    // TODO posts_vote(this, id, '2', 0)
    alert('postsVoteZero')
    ga('voting_location', 'zero', window.location.href)
  }

  return (
    <div className="infopanel_wrapper">{/* убрал js-user_ */}
      <ul className={`postinfo-panel${isTeaser ? '' : ' postinfo-panel_post'}`} id={`infopanel_post_${id}`}>
        <li className="postinfo-panel__item">
          <div className="voting-wjt voting-wjt_infopanel js-voting">
            <button type="button" className="voting-wjt__button voting-wjt__button_plus js-plus" title="Нравится" onClick={postsVotePlus}>
              <span>↑</span>
            </button>
            <div className="voting-wjt__counter js-mark">
              <button type="button" className="voting-wjt__button voting-wjt__button_score js-score" title="Посмотреть результат" onClick={postsVoteZero}>—</button>
            </div>
            <button type="button" className="voting-wjt__button voting-wjt__button_minus js-minus" title="Не нравится" onClick={postsVoteMinus}>
              <span>↓</span>
            </button>
          </div>
        </li>
        <li className="postinfo-panel__item">
          <div className="views-count_post" title="Просмотры публикации">{viewsCount}</div>
        </li>
        <li className="postinfo-panel__item">
          <div className="favorite-wjt favorite">
            <button type="button" className="favorite-wjt__button add" title="Добавить в избранное" onClick={postsAddToFavorites}>
              <span>В избранное</span>
            </button>
            <span className="favorite-wjt__counter js-favs_count" title="Количество пользователей, добавивших публикацию в избранное">{favoritesCount}</span>
          </div>
        </li>
        {isTeaser &&
          <li className="postinfo-panel__item post-author">
            <Link title="Автор публикации" className="post-author__link" to={`/users/${author.nick}/`}>
              {!!author.avatar ? <img src={author.avatar} className="post-author__pic" alt={author.name} /> : <span className="post-author__pic_default user-pic_blue"></span>}@{author.nick}
            </Link>
          </li>
        }
        {isTeaser &&
          <li className="postinfo-panel__item postinfo-panel__item_comments">
            <div className="post-comments">
              <Link to={`/post/${id}/#comments`} className="post-comments__link" title="Комментировать">
                <span className="post-comments_all">Комментировать</span>
              </Link>
            </div>
          </li>
        }
        <li className="postinfo-panel__item postinfo-panel__item_align-right">
          {!isTeaser &&
            <ul className="post-share">{/* TODO реализовать шеринг в соцсети, пока удалил код из якорей */}
              <li className="post-share__item">
                <Link to="#" className="post-share__item-link twitter" title="Опубликовать ссылку в Twitter" />
              </li>
              <li className="post-share__item">
                <Link to="#" className="post-share__item-link vkontakte" title="Опубликовать ссылку во ВКонтакте" />
              </li>
              <li className="post-share__item">
                <Link to="#" className="post-share__item-link facebook" title="Опубликовать ссылку в Facebook" />
              </li>
              <li className="post-share__item">
                <Link to="#" target="_blank" className="post-share__item-link pocket" title="Добавить ссылку в Pocket" />
              </li>
            </ul>
          }
        </li>
      </ul>
    </div>
  )
}

export default PostInfoPanel
