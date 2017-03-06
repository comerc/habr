import React from 'react'
import { Link } from 'react-router'

const UserMenu = () => (
  <dl className="user">
    <dt><Link to="/users/comerc/">comerc</Link></dt>
    <dd><Link to="/feed/">Лента</Link></dd>
    <dd><Link to="/tracker/">Трекер</Link></dd>
    <dd><Link to="/topic/add/">Написать</Link></dd>
    <dd><Link to="/conversations/">Диалоги</Link></dd>
    <dd><Link to="/auth/settings/">Настройки</Link></dd>
    <dd><Link to="/ppa/">ППА</Link></dd>
  </dl>
)

export default UserMenu
