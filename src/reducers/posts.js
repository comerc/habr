const initialState = [
  {
    id: 1741,
    published: '1 сентября 2006 в 14:05',
    viewsCount: 95700,
    favoritesCount: 18,
    author: {
      id: 3678,
      nick: 'alizar',
      name: 'Анатолий Ализар',
      avatar: '//habrastorage.org/getpro/habr/avatars/b23/82c/caa/b2382ccaa0679cd72813ba9f6a207133.jpg',
      specialization: 'Пользователь',
      contacts: [
        { type: 'Facebook', url: 'http://facebook.com/anatol.alizar' },
        { type: 'Twitter', url: 'http://twitter.com/alizar1' },
        { type: 'Google+', url: 'https://plus.google.com/109929493370452160902' },
        { type: 'Skype', url: 'skype:aalizar' },
      ],
      votingCounter: 3472,
      karma: 752.5,
      rating: 87.8
    },
    flow: { id: 'develop', name: 'Разработка' },
    hubs: [{ id: 'gamedev', name: 'Разработка игр' }],
    title: 'Крупнейшая афера в истории виртуальных миров',
    content: 'В виртуальном мире EVE Online была провернута грандиозная афера, в результате которой мошенник завладел игровой валютой на сумму $170.000. Вероятно, он останется безнаказанным и сможет свободно обменять украденную валюту на реальные доллары.',
  },
  {
    id: 308228,
    published: '22 августа 2016 в 17:14',
    viewsCount: 9000,
    favoritesCount: 55,
    author: {
      id: 3678,
      nick: 'comerc',
      name: 'comerc',
      avatar: '//habrastorage.org/getpro/habr/avatars/29a/d0a/09c/29ad0a09c3fa9790266c746e43635ca7.jpg',
      specialization: 'Пользователь',
      contacts: [
        { type: 'GitHub', url: 'https://github.com/comerc' }
      ],
      votingCounter: 50,
      karma: 8.0,
      rating: -2.35
    },
    flow: { id: 'develop', name: 'Разработка' },
    hubs: [{ id: 'funcprog', name: 'Функциональное программирование' }],
    title: 'Как Clojure помогает ускорить написание Selenium-тестов',
    content: 'Привет, читатель! Если доводилось писать Selenuim-тесты чуть сложнее чем на пару полей ввода и одну кнопку, то эта статья может пригодиться.',
  },
  {
    id: 321894,
    published: '15 февраля в 15:19',
    viewsCount: 3200,
    favoritesCount: 47,
    author: {
      avatar: 'https://habrastorage.org/getpro/habr/avatars/11d/cd5/156/11dcd5156965ea37622a22ddadcc12eb.jpg',
      nick: 'Talik0507',
      name: 'Talik',
      votingCounter: 5,
      karma: 5.0,
      rating: 12.0
    },
    company: {
      id: 3349,
      nick: 'at_consulting',
      name: 'AT Consulting',
      avatar: '//habrastorage.org/getpro/habr/company/df6/980/676/df6980676ad0cfc3224ee7a6629d996b.jpg',
      specialization: '',
      contacts: [
        { type: 'Facebook', url: 'http://facebook.com/atconsulting.ru' },
        { type: 'Вконтакте', url: 'http://vk.com/atconsulting_ru' }
      ],
      rating: 90.165
    },
    flow: { id: 'admin', name: 'Администрирование' },
    hubs: [{ id: 'db_admins', name: 'Администрирование баз данных' }],
    title: 'Zabbix-мониторинг данных в БД Oracle без unixODBC',
    content: 'Была поставлена задача: реализовать мониторинг БД Oracle средствами Zabbix, а именно — отслеживать параметры табличных пространств на определенном инстансе. Раз задача поставлена, значит делаем. Как известно, Zabbix предоставляет возможность через предопределенный тип данных осуществлять запросы к базам данным и получать результат запроса.'
  },
  // {
  //   id: 321564,
  //   published: 'сегодня в 12:00',
  //   viewsCount: 10400,
  //   favoritesCount: 61,
  //   author: {
  //     avatar: 'https://hsto.org/getpro/habr/avatars/f89/cd2/7e9/f89cd27e95dc7b8c1e3db4d56c77309b.png',
  //     nick: 'Halt',
  //     name: 'Дмитрий Каши́цын',
  //   },
  //   flow: { id: 'develop', name: 'Разработка' },
  //   hubs: [{ id: 'webdev', name: 'Разработка веб-сайтов' }],
  //   title: 'Процедурные макросы в Rust 1.15',
  //   content: 'Ребята, свершилось! После долгих шести недель ожидания наконец вышла версия Rust 1.15 с блекджеком и процедурными макросами.'
  // },
  // {
  //   id: 321560,
  //   published: '10 февраля в 20:02',
  //   viewsCount: 12300,
  //   favoritesCount: 163,
  //   author: {
  //     avatar: 'https://habrastorage.org/getpro/habr/avatars/45f/298/67b/45f29867be422cdd754bd2c1a413028a.png',
  //     nick: 'TM_content',
  //     name: 'Контент-студия',
  //   },
  //   flow: { id: 'develop', name: 'Разработка' },
  //   hubs: [{ id: 'webdev', name: 'Разработка веб-сайтов' }],
  //   title: 'Сравнение решений по балансировке высоконагруженных систем',
  //   content: 'И вновь мы публикуем расшифровки выступлений с конференции HighLoad++, которая прошла в подмосковном Сколково 7—8 ноября 2016 года. Сегодня Евгений Пивень знакомит нас с решениями балансировки в облаках.'
  // },
  // {
  //   id: 321606,
  //   published: '10 февраля в 18:21',
  //   viewsCount: 11700,
  //   favoritesCount: 168,
  //   author: {
  //     avatar: 'https://habrastorage.org/getpro/habr/avatars/10c/966/59f/10c96659ff7013592cdf926e17e2195f.jpg',
  //     nick: 'conspiratus',
  //     name: 'Константин',
  //     specialization: 'PM, Analyst, Developer, AVR Developer.',
  //     votingCounter: 7,
  //     karma: 7.0,
  //     rating: 21.6
  //   },
  //   flow: { id: 'develop', name: 'Разработка' },
  //   hubs: [{ id: 'webdev', name: 'Разработка веб-сайтов' }],
  //   title: 'Home Assistant или еще один «мозг» для проекта типа «Умный Дом»',
  //   content: 'Добрый день, уважаемый читатель.'
  // },
  {
    id: 321622,
    published: '11 февраля в 12:18',
    viewsCount: 3100,
    favoritesCount: 24,
    author: {
      nick: 'GoTech-vc',
      votingCounter: 7,
      karma: 1.0,
      rating: 10.9
    },
    company: {
      id: 4276,
      avatar: 'https://habrastorage.org/getpro/megamozg/company/f56/5c9/167/f565c9167c57d06069e63e0fd461ccbc.png',
      name: 'GoTech.vc',
      specialization: 'GoTech – занимаемся поиском и развитием технологий',
      rating: 40.01,
      contacts: [
        { type: 'Сайт', url: 'http://www.gotech.vc/' }
      ]
    },
    flow: { id: 'management', name: 'Управление' },
    hubs: [{ id: 'webdev', name: 'Разработка веб-сайтов' }],
    title: 'Корпорации и стартапы: модели успешного сотрудничества',
    content: 'Фонд развития инноваций GoTech продолжает рассказывать о том, каким образом корпорации видят успешное сотрудничество со стартапами в российском и международном масштабе.'
  },
]

export default (state = initialState, action) => {
  return state
}
