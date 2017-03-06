import React from 'react'
import { Link } from 'react-router'

export default () => (
  <div className="info_page">
    <ul>
      <li><Link title="Правила" to="/info/help/rules/">Правила</Link></li>
      <li><Link title="Регистрация" to="/info/help/registration/">Регистрация и приглашения</Link></li>
      <li><Link title="Хабрацентр" to="/info/help/habracentre/">Хабрацентр</Link></li>
      <li><Link title="Карма и рейтинг" to="/info/help/karma/">Карма и рейтинг</Link></li>
      <li><Link title="Настройки" to="/info/help/settings/">Настройки</Link></li>
      <li><Link title="Хабы" to="/info/help/hubs/">Хабы</Link></li>
      <li><Link title="Лента" to="/info/help/lenta/">Лента</Link></li>
      <li><Link title="Публикации" to="/info/help/posts/">Публикации</Link></li>
      <li><Link title="Трекер" to="/info/help/tracker/">Трекер</Link></li>
      <li><Link title="Хабрапочта" to="/info/help/habramail/">Хабрапочта</Link></li>
      <li><Link title="Компании" to="/info/help/companies/">Компании</Link></li>
      <li><Link title="Разное" to="/info/help/other/">Разное</Link></li>
    </ul>
  </div>
)
