import React, { Component } from 'react'
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
            {rel: 'stylesheet', href: process.env.PUBLIC_URL + '/styles/access_deny.css', media: 'all'}
          ]}
        />
        <div className="main">
          <div className="logo">
            <a href="/#/" title="На главную страницу"><img alt="" src="https://habrahabr.ru/images/logo.svg"/></a>
          </div>

          <h1>Страница не найдена</h1>
          <p>Страница устарела, была удалена или не существовала вовсе</p>

          <div className="buttons">
            <a href="/#/" className="button">Вернуться на главную</a>
          </div>
        </div>
      </div>
    )
  }
}

export default NotFound
