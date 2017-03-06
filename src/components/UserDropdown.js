import React from 'react'
import { Link } from 'react-router'

const UserDropdown = () => (
  <div className="dropdown dropdown_user">
    <button type="button" className="btn btn_x-large btn_navbar_user-dropdown" data-toggle="dropdown" aria-haspopup="true" role="button" aria-expanded="false" tabIndex={ 0 }
      title="comerc">
      <img src="//habrastorage.org/getpro/habr/avatars/29a/d0a/09c/29ad0a09c3fa9790266c746e43635ca7.jpg" width={ 36 } height={ 36 } alt="user avatar" />
      </button>
      <div className="dropdown-container dropdown-container_white" aria-hidden="true" role="menu">
        <Link to="/users/comerc/" className="dropdown__user-info user-info">
          <span className="user-info__nickname">comerc</span>
          <br />
          <span className="user-info__special">Профиль</span>
        </Link>
        <br />
        <span className="dropdown__user-stats">У вас <strong>8</strong> голосов за карму и публикации, и еще <strong>16</strong> за комментарии</span>
        <ul className="n-dropdown-menu n-dropdown-menu_profile">
          <li className="n-dropdown-menu__item">
            <Link to="/users/comerc/topics/" className="n-dropdown-menu__item-link">Публикации</Link>
          </li>
          <li className="n-dropdown-menu__item">
            <Link to="/users/comerc/comments/" className="n-dropdown-menu__item-link">Комментарии</Link>
          </li>
          <li className="n-dropdown-menu__item">
            <Link to="/conversations/" className="n-dropdown-menu__item-link">Диалоги </Link>
          </li>
          <li className="n-dropdown-menu__item">
            <Link to="/users/comerc/favorites/" className="n-dropdown-menu__item-link">Избранное</Link>
          </li>
          <li className="n-dropdown-menu__item n-dropdown-menu__item_border">
            <Link to="/auth/settings/profile/" className="n-dropdown-menu__item-link">Настройки</Link>
          </li>
          <li className="n-dropdown-menu__item">
            <Link to="/logout/comerc/687631967/" className="n-dropdown-menu__item-link">Выйти</Link>
          </li>
        </ul>
      </div>
  </div>
)

export default UserDropdown
