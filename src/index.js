import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import { Router, Route, IndexRoute, Redirect, hashHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import createLogger from 'redux-logger'

import reducer from './reducers'

import App from './components/App'
import PostTeaserList from './components/PostTeaserList'
import PostFull from './components/PostFull'
import Feedback from './components/Feedback'
import TopicAdd from './components/TopicAdd'
import NotFound from './components/NotFound'
import InfoHelp from './components/InfoHelp'
import InfoAbout from './components/InfoAbout'
import InfoHelpRules from './components/InfoHelpRules'
import InfoHelpOther from './components/InfoHelpOther'
import InfoHelpRegistration from './components/InfoHelpRegistration'
import InfoHelpHabracentre from './components/InfoHelpHabracentre'
import InfoHelpKarma from './components/InfoHelpKarma'
import InfoHelpSettings from './components/InfoHelpSettings'
import InfoHelpHubs from './components/InfoHelpHubs'
import InfoHelpLenta from './components/InfoHelpLenta'
import InfoHelpPosts from './components/InfoHelpPosts'

const logger = createLogger()
const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk, logger)))
const history = syncHistoryWithStore(hashHistory, store)

// TODO при переходе на страницу поста по хештегам #habracut или #comments, происходит редирект с вырезанием этого хештега (чтобы дальше поделиться правильным URL)

// TODO react-router/examples/huge-apps - Partial App Loading

// TODO /help/... > page-header__title > `Помощь -> ${title}` со ссылкой

// TODO /topic/add/ > page-header__title > "Хочу разместить публикацию"

// TODO настроить редирект url без оконечного / на уровне насторек сервера nginx

// TODO редирект, если блог компании: `/#/post/${id}/` > `/#/company/${nick}/blog/${id}/`

render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={PostTeaserList} />
        <Route path="flows" component={PostTeaserList}>
          <Route path=":selectedFlow" />
        </Route>
        <Route path="post" component={PostFull}>
          <Route path=":postId" />
        </Route>
        <Route path="topic/add" component={TopicAdd} title="Новая публикация" />
        <Route path="feedback" component={Feedback} title="Обратная связь" />
        <Redirect from="info" to="info/help/" />
        <Route path="info">
          <Route path="about" component={InfoAbout} title="О сайте" />
          <Route path="help">
            <IndexRoute component={InfoHelp} title="Помощь" />
            <Route path="rules" component={InfoHelpRules} title="Помощь → Правила сайта" />
            <Route path="other" component={InfoHelpOther} title="Помощь → Разное" />
            <Route path="registration" component={InfoHelpRegistration} title="Помощь → Регистрация" />
            <Route path="habracentre" component={InfoHelpHabracentre} title="Помощь → Хабрацентр" />
            <Route path="karma" component={InfoHelpKarma} title="Помощь → Карма" />
            <Route path="settings" component={InfoHelpSettings} title="Помощь → Настройки" />
            <Route path="hubs" component={InfoHelpHubs} title="Помощь → Хабы" />
            <Route path="lenta" component={InfoHelpLenta} title="Помощь → Лента" />
            <Route path="posts" component={InfoHelpPosts} title="Помощь → Публикации" />
          </Route>
        </Route>
      </Route>
      <Route path="*" component={NotFound} />
    </Router>
  </Provider>,
  document.getElementById('root')
)
