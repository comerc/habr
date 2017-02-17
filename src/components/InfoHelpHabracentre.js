import React from 'react'
// TODO React ругается на аттрибуты таблицы: colspan, border, align, valign
export default () => (
  <div className="info_page">
    <p>Это страница вида <i>habrahabr.ru/users/имя_пользователя</i>, которая содержит:</p>

    <ul>
      <li>Аватар пользователя, его никнейм&nbsp;и (если указано) настоящее имя.</li>
      <li>Значения кармы и&nbsp;рейтинга, а&nbsp;также занимаемое на&nbsp;текущий момент место в&nbsp;рейтинге.</li>
      <li>Значки пользователя, которые он&nbsp;заработал благодаря своей активности на&nbsp;ресурсе.</li>
      <li>Ссылки на&nbsp;социальные аккаунты, мессенджеры, личные сайты.</li>
      <li>Даты регистрации на&nbsp;ресурсе, получения приглашения и&nbsp;последнего посещения сайта.</li>
      <li>Список хабов, на&nbsp;которые подписан пользователь.</li>
      <li>Иная информация «О&nbsp;себе», которую он&nbsp;пожелал указать.</li>
    </ul>

    <p>Ряд информации из&nbsp;профиля выводится на&nbsp;специально созданной плашке автора, которая отображается под каждой публикацией пользователя. Чтобы выбрать, что именно отображать в&nbsp;своей плашке, нужно отметить соответствующие контакты чекбоксом на&nbsp;странице <a href="/#/auth/settings/profile/">настроек профиля.</a></p>

    <h2>Как изменить информацию о&nbsp;себе?</h2>

    <p>Очень просто. Авторизируйтесь&nbsp;— ссылка на&nbsp;<a href="/#/auth/settings/">страницу настроек</a> будет видна в&nbsp;левом меню.</p>

    <h2 id="badgets">Что такое значки?</h2>

    <p>За&nbsp;время своего пребывания пользователи зарабатывают различные значки, которые потом отображаются в&nbsp;хабрацентре. Значки зависят от&nbsp;поведения пользователя, отношения к&nbsp;нему сообщества и&nbsp;его активности на&nbsp;сайте.</p>

    <p>Некоторые значки являются артефактами и&nbsp;дают своим владельцам дополнительные возможности:</p>

    <table border="0">
      <tbody><tr>
        <td width="140" className="habr-badge__title" align="center" valign="top"><span className="habr-badge">Захабренный</span></td>
        <td valign="top" className="habr-badge__desc">Пользователь с&nbsp;положительной <a title="Карма" href="/#/info/help/karma/#karma">кармой</a> (больше 0). В&nbsp;зависимости от&nbsp;величины кармы может размещать <a title="Публикация" href="/#/info/help/posts/#habratopics">публикации</a> в&nbsp;различные <a title="Хабы" href="/#/info/help/hubs/">хабы</a>,  писать комментарии и&nbsp;голосовать. Может использовать в&nbsp;комментариях <a title="HTML-теги" href="/#/info/help/posts/#allowed_tags">HTML-теги</a>.</td>
      </tr>
      <tr>
        <td width="140" className="habr-badge__title" align="center" valign="top"><span className="habr-badge">Отхабренный</span></td>
        <td valign="top" className="habr-badge__desc">Пользователь с&nbsp;отрицательной <a title="Карма" href="/#/info/help/karma/#karma">кармой</a> (меньше 0). В&nbsp;зависимости от&nbsp;«глубины погружения» начинает испытывать трудности с&nbsp;комментированием. Более того, не&nbsp;может размещать <a title="Публикация" href="/#/info/help/posts/#habratopics">публикации</a>, голосовать и&nbsp;использовать <a title="HTML-теги" href="/#/info/help/posts/#allowed_tags">HTML-теги</a> в&nbsp;комментариях.</td>
      </tr>
      <tr>
        <td width="140" className="habr-badge__title" align="center" valign="top"><span className="habr-badge">Комментатор</span></td>
        <td valign="top" className="habr-badge__desc">Пользователь, на&nbsp;счету которого имеется более 5&nbsp;очень полезных или удачных комментариев (с&nbsp;рейтингом более +50&nbsp;каждый).</td>
      </tr>
      <tr>
        <td width="140" className="habr-badge__title" align="center" valign="top"><span className="habr-badge">Переводчик</span></td>
        <td valign="top" className="habr-badge__desc">Пользователь, на&nbsp;счету которого имеется более 5&nbsp;публикаций-переводов (с&nbsp;рейтингом более +50&nbsp;каждый). По&nbsp;праву гордится своим значком.</td>
      </tr>
      <tr>
        <td width="140" className="habr-badge__title" align="center" valign="top"><span className="habr-badge">Старожил</span></td>
        <td valign="top" className="habr-badge__desc">Пользователь, зарегистрированный более 3&nbsp;лет назад и&nbsp;имеющий карму +50&nbsp;и&nbsp;выше. Может участвовать в&nbsp;<a title="Программа Поощрения Авторов" href="/#/info/help/posts/#ppa">ППА</a>. Вес положительного голоса за публикацию равен&nbsp;+2.</td>
      </tr>
      <tr>
        <td width="140" className="habr-badge__title" align="center" valign="top"><span className="habr-badge">Автор</span></td>
        <td valign="top" className="habr-badge__desc">Пользователь, на счету которого от 10 публикаций, тепло встреченных хабрасообществом (от +50 голосов за каждый). Имеет карму +50 и выше, может участвовать в <a title="Программа Поощрения Авторов" href="/#/info/help/posts/#ppa">ППА</a> и получает ещё одно особо секретное преимущество.  Вес положительного голоса за публикацию равен&nbsp;+2.</td>
      </tr>
      <tr>
        <td width="140" className="habr-badge__title" align="center" valign="top"><span className="habr-badge">Звезда</span></td>
        <td valign="top" className="habr-badge__desc">Карандашик подлиннее выдаётся за карму от +50 и 20+ публикаций с рейтингом от +50 баллов каждый. Может всё то же самое, что и «Автор». Вес положительного голоса за публикацию равен&nbsp;+2.</td>
      </tr>
      <tr>
        <td width="140" className="habr-badge__title" align="center" valign="top"><span className="habr-badge">Легенда</span></td>
        <td valign="top" className="habr-badge__desc">Усовершенствованная версия «Звезды». Самый длинный карандаш, даётся за карму от +50 при 30+ публикациях с рейтингом от +50 каждый. Может всё то же самое, что и «Автор». Вес положительного голоса за публикацию равен&nbsp;+3.</td>
      </tr>
      <tr>
        <td colspan="2" className="habr-badge__info">Значки «Автор», «Звезда» и&nbsp;«Легенда» поглощают друг друга в&nbsp;процессе самосовершенствования Автора.</td>
      </tr>
      <tr>
        <td width="140" className="habr-badge__title" align="center" valign="top"><span className="habr-badge">Тролль</span></td>
        <td valign="top" className="habr-badge__desc">С&nbsp;таким значком на&nbsp;сайте особо нечего делать&nbsp;— он&nbsp;даётся за&nbsp;падение на&nbsp;дно кармической бездны (-100 и&nbsp;ниже). Один шанс стать белым и&nbsp;пушистым всё&nbsp;же есть, но&nbsp;если им&nbsp;вовремя не&nbsp;воспользоваться, то&nbsp;аккаунт может быть заблокирован НЛО без каких-либо уведомлений. Троллем быть фуфуфу, заметите их&nbsp;— не&nbsp;кормите.<p></p></td>
      </tr>
    </tbody></table>
        </div>
)
