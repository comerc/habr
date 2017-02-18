import React, { Component } from 'react'
// import ReactDOM from 'react-dom'
import Helmet from 'react-helmet'

import { ga } from '../utils'

import MainNavBar from './MainNavBar'
import UserMenu from './UserMenu'
import DefaultPageHeader from './DefaultPageHeader'

// TODO при переходе на страницу назад в браузе, не нужно выполнять скроллинг

class App extends Component {

  componentDidUpdate() {
    // ReactDOM.findDOMNode(this).scrollIntoView()
    window.scrollTo(0, 0)
  }

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
    const title = this.props.children.props.route.title
    return (
      <div className="layout">
        <Helmet
          title={title}
          titleTemplate="%s / Хабрахабр"
          defaultTitle="Хабрахабр"
        />
        <div className="layout__navbar">
          <MainNavBar></MainNavBar>
        </div>
        <div className="layout__base">
          <div className="column-wrapper">{/* TODO на некоторых страницах замечено добавление css-класса js-sticky-wrapper */}{/* убрал css-класс column-wrapper_content - нигде не используется */}
            <div className="content_left">{/* TODO на некоторых страницах замечено добавление css-класса js-content_left */}
              {!!title && <DefaultPageHeader title={title}/>}
              {this.props.children}
            </div>
            <div className="sidebar_right">
            </div>
          </div>
        </div>
        <div className="layout__footer">
          <div className="footer_panel">
            <div id="footer">
              <UserMenu></UserMenu>
              <dl>
                <dt>Разделы</dt>
                <dd><a href="/#/posts/top/">Публикации</a></dd>
                <dd><a href="/#/hubs/">Хабы</a></dd>
                <dd><a href="/#/companies/">Компании</a></dd>
                <dd><a href="/#/users/">Пользователи</a></dd>
                <dd><a href="https://toster.ru/?_aa=press_anykey">Q&A</a></dd>
                <dd><a href="/#/sandbox/">Песочница</a></dd>
              </dl>
              <dl>
                <dt>Инфо</dt>
                <dd><a href="/#/info/about/">О сайте</a></dd>
                <dd><a href="/#/info/help/rules/">Правила</a></dd>
                <dd><a href="/#/info/help/">Помощь</a></dd>
                <dd><a href="/#/info/agreement/">Соглашение</a></dd>
              </dl>
              <dl>
                <dt>Услуги</dt>
                <dd><a href="https://special.habrahabr.ru/advertising/">Реклама</a></dd>
                <dd><a href="https://special.habrahabr.ru/corporate/">Тарифы</a></dd>
                <dd><a href="https://special.habrahabr.ru/content/">Контент</a></dd>
                <dd><a href="https://special.habrahabr.ru/workshops/">Семинары</a></dd>
              </dl>
              <dl>
                <dt>Разное</dt>
                <dd><a href="https://appmetrica.yandex.com/serve/240693928167260216?utm_source=HH_desktop&utm_medium=button&utm_campaign=appiOS" target="_blank" onClick={ga.bind(void 0, 'footer', 'links', 'ios_app')}>iOS приложение</a></dd>
                <dd>
                  <a href="https://appmetrica.yandex.com/serve/745097116363323173?id=ru.habrahabr&utm_source=HH_desktop&utm_medium=button&utm_campaign=appAndroid" target="_blank"
                    onClick={ga.bind(void 0, 'footer', 'links', 'android_app')}>Android приложение</a>
                </dd>
                <dd><a href="https://special.habrahabr.ru/hello_startup/habrahabr/" target="_blank">Помощь стартапам</a></dd>
              </dl>
              <div className="copyright">
                <div className="about">
                  <a href="https://tmtm.ru/">© TM</a>
                  <br />
                  <br />
                  <a href="/#/feedback/">Служба поддержки</a>
                  <br />
                  <br />
                  <a href="https://m.habrahabr.ru/?mobile=yes">Мобильная версия</a>
                  <br />
                  <br />
                  <div className="social_accounts">
                    <a href="https://twitter.com/habrahabr" target="_blank" onClick={ga.bind(void 0, 'footer', 'Social_icons', 'twitter')}>
                      <svg className="icon-svg icon-svg_twitter" aria-hidden="true" aria-labelledby="title" version="1.1" role="img" width={ 24 } height={ 24 }
                        viewBox="0 0 24 24">
                        <path d="M12 24c-6.616 0-12-5.384-12-12s5.384-12 12-12 12 5.384 12 12-5.384 12-12 12zm0-22.909c-6.015 0-10.909 4.894-10.909 10.909s4.894 10.909 10.909 10.909 10.909-4.894 10.909-10.909-4.894-10.909-10.909-10.909zM18.04 8.253c-.445.197-.922.331-1.424.391.512-.307.904-.792 1.09-1.371-.479.284-1.009.49-1.574.601-.452-.481-1.096-.782-1.809-.782-1.369 0-2.479 1.109-2.479 2.479 0 .194.022.383.064.565-2.06-.104-3.887-1.091-5.109-2.59-.214.365-.336.792-.336 1.246 0 .86.437 1.619 1.103 2.063-.406-.013-.789-.124-1.123-.31v.031c0 1.201.854 2.203 1.989 2.431-.207.057-.427.087-.653.087-.159 0-.314-.015-.466-.045.315.985 1.231 1.702 2.316 1.721-.849.664-1.917 1.061-3.079 1.061-.2 0-.397-.012-.591-.035 1.095.704 2.398 1.114 3.799 1.114 4.559 0 7.052-3.777 7.052-7.053l-.008-.321c.484-.349.904-.785 1.237-1.283z"
                        />
                        </svg>
                    </a>
                    <a href="https://www.facebook.com/habrahabr.ru" target="_blank" onClick={ga.bind(void 0, 'footer', 'Social_icons', 'facebook')}>
                      <svg className="icon-svg icon-svg_fb" aria-hidden="true" aria-labelledby="title" version="1.1" role="img" width={ 24 } height={ 24 }
                        viewBox="0 0 24 24">
                        <path d="M12 24c-6.616 0-12-5.384-12-12s5.384-12 12-12 12 5.384 12 12-5.384 12-12 12zm0-22.909c-6.015 0-10.909 4.894-10.909 10.909s4.894 10.909 10.909 10.909 10.909-4.894 10.909-10.909-4.894-10.909-10.909-10.909zM14.727 8.798h-1.558c-.184 0-.389.242-.389.566v1.125h1.947v1.604h-1.948v4.816h-1.839v-4.816h-1.667v-1.604h1.668v-.944c0-1.354.939-2.455 2.229-2.455h1.558v1.707z"
                        />
                        </svg>
                    </a>
                    <a href="https://vk.com/habr" target="_blank" onClick={ga.bind(void 0, 'footer', 'Social_icons', 'vkontakte')}>
                      <svg className="icon-svg icon-svg_vk" aria-hidden="true" aria-labelledby="title" version="1.1" role="img" width={ 24 } height={ 24 }
                        viewBox="0 0 24 24">
                        <path d="M12 24c-6.616 0-12-5.384-12-12s5.384-12 12-12 12 5.384 12 12-5.384 12-12 12zm0-22.909c-6.015 0-10.909 4.894-10.909 10.909s4.894 10.909 10.909 10.909 10.909-4.894 10.909-10.909-4.894-10.909-10.909-10.909zM16.33 11.926s1.725-2.433 1.896-3.232c.057-.286-.069-.445-.365-.445h-1.497c-.343 0-.468.148-.572.365 0 0-.809 1.724-1.793 2.81-.316.351-.477.457-.651.457-.141 0-.205-.118-.205-.434v-2.776c0-.388-.046-.503-.365-.503h-2.399c-.183 0-.297.106-.297.251 0 .365.56.448.56 1.439v2.044c0 .411-.023.572-.217.572-.514 0-1.737-1.771-2.422-3.781-.137-.41-.286-.525-.674-.525h-1.496c-.217 0-.377.148-.377.365 0 .399.468 2.251 2.307 4.729 1.234 1.668 2.856 2.57 4.318 2.57.891 0 1.108-.148 1.108-.526v-1.28c0-.32.125-.457.309-.457.205 0 .568.067 1.416.902 1.005.96 1.073 1.359 1.622 1.359h1.679c.171 0 .332-.08.332-.365 0-.377-.491-1.051-1.245-1.85-.309-.411-.811-.856-.971-1.063-.229-.239-.16-.376 0-.627z"
                        />
                        </svg>
                    </a>
                    <a href="https://telegram.me/habr_ru" target="_blank" onClick={ga.bind(void 0, 'footer', 'Social_icons', 'telegram')}>
                      <svg className="icon-svg icon-svg_telegram" aria-hidden="true" aria-labelledby="title" version="1.1" role="img" width={ 24 } height={ 24 }
                        viewBox="0 0 24 24">
                        <path d="M12.048.002c-6.616 0-12 5.384-12 12s5.384 12 12 12 12-5.384 12-12-5.384-12-12-12zm0 22.909c-6.015 0-10.909-4.894-10.909-10.909s4.894-10.909 10.909-10.909 10.909 4.894 10.909 10.909c0 6.015-4.894 10.909-10.909 10.909zM10.093 16.753c0 .164.092.209.219.094l1.891-1.697-2.11-1.092v2.696zM17.816 7.116c-.228.081-11.491 4.049-11.712 4.127-.189.067-.23.229-.007.319l2.518 1.009 1.493.598s7.189-5.28 7.287-5.351c.098-.072.211.063.14.14l-5.222 5.648-.3.334.397.214 3.304 1.779c.192.104.443.017.499-.223.065-.283 1.887-8.134 1.928-8.308.052-.226-.097-.364-.325-.285z"
                        />
                        </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <a href="#" className="layout__elevator hidden" id="scroll_to_top" title="Наверх" onClick={ga.bind(void 0, 'navigation_button', 'down', window.location.href)}>
          <svg className="icon-svg icon-svg_scroll-up" width={ 32 } height={ 32 } viewBox="0 0 32 32" aria-hidden="true" version="1.1" role="img">
            <path d="M16 0C7.164 0 0 7.164 0 16s7.164 16 16 16 16-7.164 16-16S24.836 0 16 0zm8.412 19.523c-.517.512-1.355.512-1.872 0L16 13.516l-6.54 6.01c-.518.51-1.356.51-1.873 0-.516-.513-.517-1.343 0-1.855l7.476-7.326c.517-.512 1.356-.512 1.873 0l7.476 7.327c.516.513.516 1.342 0 1.854z"
            />
          </svg>
        </a>
      </div>
    )
  }
}

export default App
