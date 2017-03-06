import React from 'react'
import { Link } from 'react-router'
import styled from 'styled-components'

const InfoHelpPosts = () => (
  <div className="info_page">
    <p>Самое важное, что есть на&nbsp;сайте&nbsp;— это публикации. Создавать их&nbsp;могут пользователи с&nbsp;полноценными аккаунтами и&nbsp;положительной кармой (для ряда хабов входной порог по&nbsp;карме может отличаться).</p>

    <h2>Создание публикации</h2>

    <p>Сам процесс создания публикации довольно прост:</p>
    <ul>
      <li>кликните по&nbsp;иконке карандаша в&nbsp;левом меню&nbsp;— <Link to="/topic/add/">{window.location.origin}/topic/add/</Link>;</li>
      <li>выберите поток, в&nbsp;который будет размещена публикация;</li>
      <li>выберите хаб, лучше всего подходящий по&nbsp;тематике (или нескольких хабов);</li>
      <li>если ваша публикация является обучающей, уроком или how-to&nbsp;— отметьте чекбокс «Обучающий материал», это поможет визуально выделить ее&nbsp;среди прочих;</li>
      <li>дайте публикации понятный заголовок, заполните тело публикации, используя нужные теги или markdown-разметку для форматирования текста, и&nbsp;не&nbsp;забудьте указать метки;</li>
      <li>при желании&nbsp;— добавьте опрос с&nbsp;вариантами ответа;</li>
      <li>c&nbsp;помощью кнопки «Предпросмотр» оцените&nbsp;то, что у&nbsp;вас получилось (возможно, где-то не&nbsp;закрыт тег, не&nbsp;вставилась картинка или еще что-то);</li>
      <li>если всё в&nbsp;порядке&nbsp;— нажмите зеленую кнопку «Опубликовать»;</li>
      <li>если захочется внести в&nbsp;публикацию какие-то изменения&nbsp;— воспользуйтесь иконкой карандаша справа от&nbsp;её&nbsp;заголовка, это позволит отредактировать ее&nbsp;или убрать ее&nbsp;в&nbsp;черновики.</li>
    </ul>

    <p>Черновики видны только вам (о&nbsp;статусе черновика говорит иконка замка слева от&nbsp;заголовка публикации).</p>

    <h2>Перевод</h2>

    <p>Если нажать на&nbsp;слово «Публикацию» во&nbsp;фразе «Хочу опубликовать публикацию», то&nbsp;ниспадающее меню предложит вам выбрать второй доступный для создания вид записи&nbsp;— «Перевод». Механизм создания тот&nbsp;же, что и&nbsp;у&nbsp;публикации, но&nbsp;есть два дополнительных поля&nbsp;— «Автор оригинала» (тут надо указать имя автора оригинального текста) и&nbsp;«Ссылка на&nbsp;оригинал» (здесь&nbsp;— URL страницы оригинала).</p>

    <h2 id="black-and-white">Признаки хорошей и&nbsp;плохой публикации</h2>
    <p><b>Хорошая публикация:</b></p>
    <ul><li>Содержит авторский контент;</li>
      <li>Удобна для чтения, разбита на&nbsp;абзацы и&nbsp;в&nbsp;целом хорошо отформатирована. Картинки залиты на&nbsp;<Link to="https://habrastorage.org">Habrastorage</Link>;</li>
      <li>Написана максимально грамотным для индивида русским языком;</li>
      <li>Не&nbsp;содержит того, что есть в&nbsp;плохих публикациях.</li>
    </ul>

    <p><b>Плохая публикация:</b></p>
    <ul><li>Имеет кричащий заголовок вида «Шок! ВИДЕО! ВИРУСЫ В&nbsp;МАКАХ!»;</li>
      <li>Переполнена грамматическими и&nbsp;орфографическими ошибками, игнорирует правила русского языка в&nbsp;общем;</li>
      <li>Содержит слова из&nbsp;«падонкаффского» сленга и&nbsp;прочую нечисть;</li>
      <li>Содержит изображения с&nbsp;нестабильных фотохостингов;</li>
      <li>Состоит из&nbsp;информации с&nbsp;других ресурсов;</li>
      <li>Является жалобой на&nbsp;что-либо;</li>
      <li>Содержит реферальные ссылки на&nbsp;что угодно;</li>
      <li>Содержит запрещённый или просто нелицеприятный контент;</li>
      <li>Является рекламой своего или чужого проекта, сервиса, приложения, сайта, etc.</li>
    </ul>

    <h2 id="allowed_tags">Разрешённые html-теги</h2>
    <p>При написании <Link title="Публикация" to="/info/help/posts/#habratopics">публикаций</Link> и&nbsp;комментариев можно использовать следующие html- и&nbsp;не&nbsp;совсем html-теги:</p>

    <div className="help_holder">

      <p><strong>Стандартные</strong></p>
      <table className="table table_simple">
        <tbody><tr className="table__head">
          <th className="table__column table__column_html">Тег</th>
          <th className="table__column table__column_desc">Описание</th>
        </tr>
        <tr>
          <td>
           <code>&lt;h1&gt;&lt;/h1&gt;...&lt;h4&gt;&lt;/h4&gt;</code>
          </td>
          <td>
            <p>Заголовки разного уровня.</p>
            <pre><code className="hljs twig"><span className="xml"><span className="hljs-tag">&lt;<span className="hljs-name">h1</span>&gt;</span>Заголовок первого уровня<span className="hljs-tag">&lt;/<span className="hljs-name">h1</span>&gt;</span>...<span className="hljs-tag">&lt;<span className="hljs-name">h4</span>&gt;</span>Заголовок четвертого уровня<span className="hljs-tag">&lt;/<span className="hljs-name">h4</span>&gt;</span></span></code></pre>
          </td>
        </tr>

        <tr>
          <td><code>&lt;img/&gt;</code></td>
          <td>
            <p>Вставка изображения, в атрибуте <code>src</code> нужно указывать полный путь к изображению. Возможно выравнивание картинки атрибутом <code>align</code>.</p>
            <pre><code className="hljs stylus">&lt;<span className="hljs-selector-tag">img</span> src=<span className="hljs-string">""</span> alt=<span className="hljs-string">"image alt"</span> align=<span className="hljs-string">"left"</span> /&gt;</code></pre>
          </td>
        </tr>

        <tr>
          <td><code>&lt;a&gt;&lt;/a&gt;</code></td>
          <td>
            <p>Вставка ссылки, в атрибуте <code>href</code> указывается желаемый интернет-адрес или якорь (anchor) для навигации по странице.</p>
            <pre><code className="hljs livecodeserver">&lt;<span className="hljs-keyword">a</span> to=<span className="hljs-string">"http://your_link_path.ru"</span>&gt;Текст ссылки&lt;/<span className="hljs-keyword">a</span>&gt;</code></pre>
          </td>
        </tr>

        <tr>
          <td><code>&lt;anchor&gt;&lt;/anchor&gt;</code></td>
          <td>
            <p>Тег для указания якоря. Для вызова используйте тег вставки ссылок.</p>
            <pre><code className="hljs livecodeserver">&lt;<span className="hljs-keyword">a</span> to=<span className="hljs-string">"#example"</span>&gt;Example&lt;/<span className="hljs-keyword">a</span>&gt;</code></pre>
          </td>
        </tr>

        <tr>
          <td><code>&lt;strong&gt;&lt;/strong&gt;</code></td>
          <td>
            <p>Выделение важного текста, на странице выделяется жирным начертанием. Также возможно использование альтернативного тега <code>&lt;b&gt;&lt;/b&gt;</code></p>
            <pre><code className="hljs twig"><span className="xml"><span className="hljs-tag">&lt;<span className="hljs-name">strong</span>&gt;</span>Жирное начертание<span className="hljs-tag">&lt;/<span className="hljs-name">strong</span>&gt;</span></span></code></pre>
          </td>
        </tr>

        <tr>
          <td><code>&lt;em&gt;&lt;/em&gt;</code></td>
          <td>
            <p>Выделение важного текста, на странице выделяется курсивом. Также возможно использование альтернативного тега <code>&lt;i&gt;&lt;/i&gt;</code></p>
            <pre><code className="hljs vim">&lt;<span className="hljs-keyword">em</span>&gt;Курсивное начертание&lt;/<span className="hljs-keyword">em</span>&gt;</code></pre>
          </td>
        </tr>

        <tr>
          <td><code>&lt;strike&gt;&lt;/strike&gt;</code></td>
          <td>
            <p>Текст между этими тегами будет отображаться как зачеркнутый. Также возможно использование альтернативного тега <code>&lt;s&gt;&lt;/s&gt;</code></p>
            <pre><code className="hljs twig"><span className="xml"><span className="hljs-tag">&lt;<span className="hljs-name">strike</span>&gt;</span>Зачеркнутый текст<span className="hljs-tag">&lt;/<span className="hljs-name">strike</span>&gt;</span></span></code></pre>
          </td>
        </tr>

        <tr>
          <td><code>&lt;u&gt;&lt;/u&gt;</code></td>
          <td>
            <p>Текст между этими тегами будет отображаться как подчеркнутый.</p>
            <pre><code className="hljs twig"><span className="xml"><span className="hljs-tag">&lt;<span className="hljs-name">u</span>&gt;</span>Подчеркнутый текст<span className="hljs-tag">&lt;/<span className="hljs-name">u</span>&gt;</span></span></code></pre>
          </td>
        </tr>

        <tr>
          <td><code>&lt;hr/&gt;</code></td>
          <td>
            <p>Тег для вставки горизонтальной линии.</p>
            <pre><code className="hljs twig"><span className="xml"><span className="hljs-tag">&lt;<span className="hljs-name">hr</span>/&gt;</span></span></code></pre>
          </td>
        </tr>

        <tr>
          <td><code>&lt;blockquote&gt;&lt;/blockquote&gt;</code></td>
          <td>
            <p>Используйте этот тег для выделения цитат.</p>
            <pre><code className="hljs twig"><span className="xml"><span className="hljs-tag">&lt;<span className="hljs-name">blockquote</span>&gt;</span>Текст цитаты<span className="hljs-tag">&lt;/<span className="hljs-name">blockquote</span>&gt;</span></span></code></pre>
          </td>
        </tr>

        <tr>
          <td>
            <code>&lt;table&gt;&lt;/table&gt;<br/></code>
          </td>
          <td>
            <p>Набор тегов для создания таблицы. Тег <code>&lt;td&gt;</code> обозначает ячейку таблицы, тег &lt;th&gt; - ячейку в заголовке, <code>&lt;tr&gt;</code> - строчку таблицы. Все содержимое таблицы помещайте в тег <code>&lt;table&gt;</code>.</p>

            <pre><code className="hljs twig"><span className="xml"><span className="hljs-tag">&lt;<span className="hljs-name">table</span>&gt;</span></span><br/><span className="xml">  <span className="hljs-tag">&lt;<span className="hljs-name">tr</span>&gt;</span></span><br/><span className="xml">    <span className="hljs-tag">&lt;<span className="hljs-name">th</span>&gt;</span>Колонка 1<span className="hljs-tag">&lt;/<span className="hljs-name">th</span>&gt;</span></span><br/><span className="xml">    <span className="hljs-tag">&lt;<span className="hljs-name">th</span>&gt;</span>Колонка 2<span className="hljs-tag">&lt;/<span className="hljs-name">th</span>&gt;</span></span><br/><span className="xml">     <span className="hljs-tag">&lt;<span className="hljs-name">th</span>&gt;</span>Колонка 3<span className="hljs-tag">&lt;/<span className="hljs-name">th</span>&gt;</span></span><br/><span className="xml">  <span className="hljs-tag">&lt;/<span className="hljs-name">tr</span>&gt;</span></span><br/><span className="xml">  <span className="hljs-tag">&lt;<span className="hljs-name">tr</span>&gt;</span></span><br/><span className="xml">    <span className="hljs-tag">&lt;<span className="hljs-name">td</span>&gt;</span>Ячейка 1<span className="hljs-tag">&lt;/<span className="hljs-name">td</span>&gt;</span></span><br/><span className="xml">    <span className="hljs-tag">&lt;<span className="hljs-name">td</span>&gt;</span>Ячейка 2<span className="hljs-tag">&lt;/<span className="hljs-name">td</span>&gt;</span></span><br/><span className="xml">    <span className="hljs-tag">&lt;<span className="hljs-name">td</span>&gt;</span>Ячейка 3<span className="hljs-tag">&lt;/<span className="hljs-name">td</span>&gt;</span></span><br/><span className="xml">  <span className="hljs-tag">&lt;/<span className="hljs-name">tr</span>&gt;</span></span><br/><span className="xml">  <span className="hljs-tag">&lt;<span className="hljs-name">tr</span>&gt;</span> </span><br/><span className="xml">    <span className="hljs-tag">&lt;<span className="hljs-name">td</span>&gt;</span>Ячейка 1<span className="hljs-tag">&lt;/<span className="hljs-name">td</span>&gt;</span></span><br/><span className="xml">    <span className="hljs-tag">&lt;<span className="hljs-name">td</span>&gt;</span>Ячейка 2<span className="hljs-tag">&lt;/<span className="hljs-name">td</span>&gt;</span></span><br/><span className="xml">    <span className="hljs-tag">&lt;<span className="hljs-name">td</span>&gt;</span>Ячейка 3<span className="hljs-tag">&lt;/<span className="hljs-name">td</span>&gt;</span></span><br/><span className="xml">  <span className="hljs-tag">&lt;/<span className="hljs-name">tr</span>&gt;</span></span><br/><span className="xml"><span className="hljs-tag">&lt;/<span className="hljs-name">table</span>&gt;</span></span></code></pre>
          </td>
        </tr>

        <tr>
          <td><code>&lt;sup&gt;&lt;/sup&gt;</code>,<br/> <code>&lt;sub&gt;&lt;/sub&gt;</code></td>
          <td>
            <p>Текст, заключенный в тег <code>&lt;sup&gt;</code> отображается в виде надстрочного, <code>&lt;sub&gt;</code> - в виде подстрочного.</p>
            <pre><code className="hljs twig"><span className="xml"><span className="hljs-tag">&lt;<span className="hljs-name">sup</span>&gt;</span>надстрочный<span className="hljs-tag">&lt;/<span className="hljs-name">sup</span>&gt;</span>, <span className="hljs-tag">&lt;<span className="hljs-name">sub</span>&gt;</span>подстрочный<span className="hljs-tag">&lt;/<span className="hljs-name">sub</span>&gt;</span></span></code></pre>
          </td>
        </tr>

        <tr>
          <td><code>&lt;abbr&gt;&lt;/abbr&gt;<br/></code></td>
          <td>
            <p>Тегом <code>&lt;abbr&gt;</code> выделяется аббревиатура, в атрибуте <code>title=""</code>указывайте её расшифровку. Используйте тег <code>&lt;acronym&gt;</code> для устоявшихся аббревиатур.</p>
            <pre><code className="hljs livecodeserver">&lt;<span className="hljs-keyword">abbr</span> title=<span className="hljs-string">"ABBR"</span>&gt;Рашифровка аббревиатуры&lt;/<span className="hljs-keyword">abbr</span>&gt;</code></pre>
            <pre><code className="hljs twig"><span className="xml"><span className="hljs-tag">&lt;<span className="hljs-name">acronym</span> <span className="hljs-attr">title</span>=<span className="hljs-string">"Accronym"</span>&gt;</span>Рашифровка аббревиатуры<span className="hljs-tag">&lt;/<span className="hljs-name">acronym</span>&gt;</span></span></code></pre>
          </td>
        </tr>

        <tr>
          <td><code>&lt;pre&gt;&lt;/pre&gt;</code></td>
          <td>
            <p>Текст в теге <code>&lt;pre&gt;</code> не форматируется автоматически.</p>
            <pre><code className="hljs vim">&lt;<span className="hljs-keyword">pre</span>&gt;Неформатированный текст&lt;/<span className="hljs-keyword">pre</span>&gt;</code></pre>
          </td>
        </tr>

        <tr>
          <td><code>&lt;nobr&gt;&lt;/nobr&gt;</code></td>
          <td>
            <p>Текст, помещенный в тег <code>&lt;nobr&gt;</code>, не переносится на странице; для принудительного переноса текста используйте тег <code>&lt;br/&gt;</code> ; для аккуратного выравнивания изображений используйте атрибут <code>clear="all|left||right"</code> в теге <code>&lt;br /&gt;</code>.</p>
            <pre><code className="hljs twig"><span className="xml"><span className="hljs-tag">&lt;<span className="hljs-name">nobr</span>&gt;</span>Текст без переносов<span className="hljs-tag">&lt;/<span className="hljs-name">nobr</span>&gt;</span>, <span className="hljs-tag">&lt;<span className="hljs-name">br</span> <span className="hljs-attr">clear</span>=<span className="hljs-string">"all|left||right"</span> /&gt;</span></span></code></pre>
          </td>
        </tr>

        <tr>
          <td>
            <code>
              &lt;ul&gt;&lt;/ul&gt;
            </code>
          </td>
          <td>
            <p>Ненумерованный список; каждый элемент списка задается тегом <code>&lt;li&gt;</code>, набор элементов списка помещайте в тег <code>&lt;ul&gt;</code>.</p>
            <pre><code className="hljs twig"><span className="xml"><span className="hljs-tag">&lt;<span className="hljs-name">ul</span>&gt;</span></span><br/><span className="xml">  <span className="hljs-tag">&lt;<span className="hljs-name">li</span>&gt;</span>Пункт 1<span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span></span><br/><span className="xml">  <span className="hljs-tag">&lt;<span className="hljs-name">li</span>&gt;</span>Пункт 2<span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span></span><br/><span className="xml">  <span className="hljs-tag">&lt;<span className="hljs-name">li</span>&gt;</span>Пункт 3<span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span></span><br/><span className="xml"><span className="hljs-tag">&lt;/<span className="hljs-name">ul</span>&gt;</span></span></code></pre>
          </td>
        </tr>

        <tr>
          <td>
            <code>&lt;ol&gt;&lt;/ol&gt;</code>
          </td>
          <td>
            <p>Нумерованный список; каждый элемент списка задается тегом &lt;li&gt;, набор элементов списка помещайте в тег &lt;ol&gt;.</p>
            <pre><code className="hljs twig"><span className="xml"><span className="hljs-tag">&lt;<span className="hljs-name">ol</span>&gt;</span></span><br/><span className="xml">  <span className="hljs-tag">&lt;<span className="hljs-name">li</span>&gt;</span>Пункт 1<span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span></span><br/><span className="xml">  <span className="hljs-tag">&lt;<span className="hljs-name">li</span>&gt;</span>Пункт 2<span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span></span><br/><span className="xml">  <span className="hljs-tag">&lt;<span className="hljs-name">li</span>&gt;</span>Пункт 3<span className="hljs-tag">&lt;/<span className="hljs-name">li</span>&gt;</span></span><br/><span className="xml"><span className="hljs-tag">&lt;/<span className="hljs-name">ol</span>&gt;</span></span></code></pre>
          </td>
        </tr>
      </tbody></table><br/><br/>

      <p><strong>Теги Хабрахабра</strong></p>
      <table className="table table_simple">
        <tbody><tr className="table__head">
          <th className="table__column table__column_html">Тег</th>
          <th className="table__column table__column_desc">Описание</th>
        </tr>
        <tr>
          <td><code>&lt;cut/&gt;</code>

          </td><td>
            <p>Используется только в текстах <Link to="/info/help/posts/#habratopics">публикаций</Link>, скрывает под кат часть текста, следующую за тегом (появится кнопка с текстом «Читать дальше»). Чтобы изменить текст в кнопке, используйте аттрибут <code>text="..."</code></p>
            <pre><code className="hljs twig"><span className="xml"><span className="hljs-tag">&lt;<span className="hljs-name">cut</span>/&gt;</span>, <span className="hljs-tag">&lt;<span className="hljs-name">cut</span> <span className="hljs-attr">text</span>=<span className="hljs-string">"Ваш текст"</span>/&gt;</span></span></code></pre>
          </td>
        </tr>

        <tr>
          <td><code>&lt;source&gt;&lt;/source&gt;</code>
          </td><td>
            <p>Подсвечивает исходный код. Для поддержки конккретного синтаксиса, используйте аттрибут <code>lang=""</code></p>
            <pre><code className="hljs vim">&lt;<span className="hljs-keyword">source</span> lang=<span className="hljs-string">"javascript"</span>&gt;Исходный код&lt;/<span className="hljs-keyword">source</span>&gt;</code></pre>
          </td>
        </tr>

        <tr>
          <td><code>&lt;oembed&gt;&lt;/oembed&gt;</code></td>
          <td>
            <p>Вставка интерактивного слайд-шоу. Пока поддерживается только сервис <Link to="http://slideshare.net">Slideshare.net</Link> и <Link to="http://scribd.com">Scribd.com</Link>.</p>
            <pre><code className="hljs twig"><span className="xml"><span className="hljs-tag">&lt;<span className="hljs-name">oembed</span>&gt;</span>http://slideshare.net/<span className="hljs-tag">&lt;/<span className="hljs-name">oembed</span>&gt;</span></span></code></pre>
          </td>
        </tr>

        <tr>
          <td><code>&lt;spoiler&gt;&lt;/spoiler&gt;</code></td>
          <td>
            <p>Вставка спойлера (разворачиваемый блок информации). Чтобы изменить текст заголовка спойлера используйте аттрибут <code>title="…"</code></p>
            <pre><code className="hljs twig"><span className="xml"><span className="hljs-tag">&lt;<span className="hljs-name">spoiler</span> <span className="hljs-attr">title</span>=<span className="hljs-string">"Заголовок спойлера"</span>&gt;</span>Содержимое спойлера<span className="hljs-tag">&lt;/<span className="hljs-name">spoiler</span>&gt;</span></span></code></pre>
          </td>
        </tr>

        <tr>
          <td><code>@username</code></td>
          <td>
            <p>Выводит имя пользователя в тексте и отправляет пользователю уведомление о том, что его упомянули в публикации/комментарии. Вы можете использовать конструкцию <code>@username</code>, где <em>username</em> — это имя пользователя.</p>
            <pre><code className="hljs aspectj"><span className="hljs-meta">@username</span></code></pre>
          </td>
        </tr>
      </tbody></table>
    </div><br/><br/>

    <h2 id="formula">Добавление формул</h2>

    <p>Вы также можете добавлять в свои публикации математические формулы, используя язык разметки <Link to="https://ru.wikipedia.org/wiki/LaTeX">LaTeX</Link>.</p>
    <p>Для отрисовки формул на странице мы используем библиотеку <Link to="https://www.mathjax.org/">MathJax</Link>.</p>

    <p>Чтобы добавить формулу нажмите на иконку <code>Σ</code> в тулбаре. В появившемся модальном окне выберите строчный или блочный тип формулы.</p>
    <ul>
      <li>cтрочная формула используется для вставки формулы в абзац текста</li>
      <li>блочная формула используется для вставки формулы с новой строки</li>
    </ul>

    <p>После составления формулы нажмите на кнопку «Добавить формулу» и она появится в тексте публикации.</p>

    <h2 id="ppa">ППА</h2>
    <p>Аббревиатура «<b>ППА</b>» на&nbsp;Хабрахабре расшифровывается как Программа Поощрения Авторов. Помимо признания аудитории, авторы могут получать денежное вознаграждение за&nbsp;хорошие публикации&nbsp;— очевидно&nbsp;же!</p>

    <p>В&nbsp;программе могут принимать участие пользователи, обладающие хотя&nbsp;бы одним из&nbsp;<Link title="Значки" to="/info/help/habracentre/#badgets">значков</Link>: «Автор», «Звезда», «Легенда» и&nbsp;«Старожил». А&nbsp;дальше, всё, что надо&nbsp;— просто размещать интересные публикации или переводы в&nbsp;<Link title="Хабы" to="/info/help/hubs/#hubs">профильные хабы</Link>, не&nbsp;более того. Более подробно узнать о&nbsp;ППА можно на&nbsp;<Link title="ППА" to="/ppa/faq/">отдельной странице</Link>.</p>



  </div>
)

export default styled(InfoHelpPosts)`
  .table{
    table-layout: fixed;
  }
  .table__head th{
    background-color: #eaecea!important;
  }
  .table__column_html{
    width: 25%;
  }
  .table__column_desc{
     width: 75%;
  }
`
