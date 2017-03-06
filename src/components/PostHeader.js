import React from 'react'
import { Link } from 'react-router'

import { ga, formatDateTime } from '../utils'

// TODO получать flow в props, как объект (нужна нормализация данных)
// TODO хаб "Блок компании Рога и копыта" для собственнных хабов компании
// TODO флажки к названию: Tutorial, Recovery mode, Из песочницы, Перевод
// TODO кнопка редактирования для собственных статей

const PostHeader = ({ isTeaser, id, title, published, flow, hubs }) => (
  <div className="post__header">
    <span className="post__time_published">{formatDateTime(published)}</span>
    <h2 className="post__title">
      { isTeaser ? <div><Link to={`/flows/${flow.id}/`} className="post__flow" onClick={ga('flow', 'feed page', flow.name)}>{flow.name}</Link><span className="post__title-arrow"> → </span><Link to={`/post/${id}/`} className="post__title_link">{title}</Link></div> : <span>{title}</span> }
    </h2>
    <div className="hubs">{/* TODO добавить запятые между элементами списка посредством CSS */}
      {/* TODO обернуть каждый хаб в <div> для отображения .profiled_hub */}
      {/* hub.isProfiled && <span className="profiled_hub" title="Профильный хаб">*</span> */}
      {hubs.map(hub =>
        <Link key={hub.id} to={`/hub/${hub.id}/`} className={`hub${hub.isSubscribed ? ' subscribed' : ''}`} title={hub.isSubscribed ? 'Вы подписаны на этот хаб' : 'Вы не подписаны на этот хаб'} onClick={ga('hub', 'feed page', hub.name)}>{hub.name}</Link>
      )}
    </div>
  </div>
)

export default PostHeader
