import React, { Component } from 'react'
import { Link } from 'react-router'
import Helmet from 'react-helmet'

class NotFound extends Component {

  componentWillMount() {
    document.body.style.display = 'none'
  }

  componentDidMount() {
    // HACK стили подключаются в Helmet после рендеринга страницы
    setTimeout(
      () => document.body.style.display = 'block'
    , 100)
  }

  render() {
    return (
      <div id="layout">
        <Helmet
          defaultTitle="Хабрахабр"
          link={[
            {rel: 'stylesheet', href: '/styles/access_deny.css', media: 'all'}
          ]}
        />
        <div className="main">
          <div className="logo">
            <Link to="/" title="На главную страницу"><img alt="" src="https://habrahabr.ru/images/logo.svg"/></Link>
          </div>

          <h1>Страница не найдена</h1>
          <p>Страница устарела, была удалена или не существовала вовсе</p>

          <div className="buttons">
            <Link to="/" className="button">Вернуться на главную</Link>
          </div>
        </div>
      </div>
    )
  }
}

export default NotFound
