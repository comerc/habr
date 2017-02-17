import React from 'react'

export default () => (
  <div className="info_page">
    <p><strong>Лента</strong>&nbsp;— это поток публикаций, настроенный в&nbsp;соответствии с&nbsp;вашими интересами. Собственно, все <a href="/#/info/help/hubs/">хабы</a>, на&nbsp;которые вы&nbsp;подписаны&nbsp;— это и&nbsp;есть&nbsp;то, что формирует вашу ленту (если вы&nbsp;залогинены на&nbsp;ресурсе). Настроить ленту под себя за&nbsp;пару минут можно <a href="/#/feed/settings/">тут</a>.</p>

    <p>Если&nbsp;же вы&nbsp;любите читать сайт как гость, то&nbsp;по&nbsp;умолчанию вам будет выдаваться лента <a href="/#/interesting/">«Интересное»</a>&nbsp;— это те&nbsp;публикации, которые по&nbsp;оценкам пользователей получили такой статус (их&nbsp;рейтинг больше или равен +5). При этом вы&nbsp;можете переключиться на&nbsp;<a href="/#/all/">«Всё&nbsp;подряд»</a> (выводятся по&nbsp;дате публикации) или <a href="/#/top/">«Лучшее за&nbsp;сутки</a>&nbsp;/ <a href="/#/top/weekly/">неделю</a>&nbsp;/ <a href="/#/top/monthly/">месяц</a>&nbsp;/ <a href="/#/top/alltime/">все время»</a>.</p>

    <p>Обратите внимание&nbsp;— в&nbsp;таком случае вам показываются публикации из&nbsp;всех существующих хабов, фильтрация ленты работает только для авторизованных пользователей.</p>

    <h2>RSS</h2>

    <p>У&nbsp;каждой из&nbsp;этих лент, включая вашу собственную, есть RSS. Как и&nbsp;у&nbsp;каждого хаба. Ссылку на RSS можно найти в исходном коде страницы ленты. Например: <br/><br/>
    <a href="https://habrahabr.ru/rss/feed/posts/6266e7ec4301addaf92d10eb212b4546">https://habrahabr.ru/rss/feed/posts/6266e7ec4301addaf92d10eb212b4546</a></p>

    <p>Кроме этого, вы&nbsp;можете использовать ключи <strong>?with_hubs=true:</strong> и <strong>?with_tags=true:</strong>, если вам хочется видеть в&nbsp;RSS еще и&nbsp;хабы и&nbsp;теги публикации соответственно.</p>
  </div>
)
