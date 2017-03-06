import React from 'react'
import { Link } from 'react-router'

import { ga, plural } from '../utils'

const AuthorInfo = ({ author: { id , nick, name, avatar, specialization, contacts, votingCounter, karma, rating } }) => {

  const karmaVote = () => {
    // TODO реализовать userKarmaVote
    alert('голосование за карму')
  }

  const karmaVotePlus = (event) => {
    karmaVote(event, id, 1, 1)
    ga('author_info_bottom', 'vote_plus', nick)
  }

  const karmaVoteMinus = (event) => {
    karmaVote(event, id, 1, -1)
    ga('author_info_bottom', 'vote_minus', nick)
  }

  return (
    <div className="author-info author-info_top">
      <Link to={`/users/${nick}/`} className="author-info__image" onClick={ga('author_info_bottom', 'profile', nick)}>
        <img src={avatar} className="author-info__image-pic" alt={name} />
      </Link>
      <div className="author-info__desc">{/* убрал css-класс js-user_${id} */}
        <div className="author-info__username">
          <Link to={`/users/${nick}/`} className="author-info__name" onClick={ga('author_info_bottom', 'profile', nick)}>{name}</Link>
          &nbsp;
          <Link to={`/users/${nick}/`} className="author-info__nick" onClick={ga('author_info_bottom', 'profile', nick)}>{`@${nick}`}</Link>
          <div className="karma__widjet voting-wjt voting-wjt_small js-karma" title="Карма пользователя">
            <button type="button" className="voting-wjt__button voting-wjt__button_plus js-vote_plus" onClick={karmaVotePlus} title="Повысить карму">
              <span>↑</span>
            </button>
            <div className="voting-wjt__counter js-karma-mark voting-wjt__counter_positive" title={plural(votingCounter, 'голос', 'голоса', 'голосов')}>
              <div className="voting-wjt__label">карма</div>
              <div className="voting-wjt__counter-score js-karma_num">{karma.toFixed(1)}</div>
            </div>
            <button type="button" className="voting-wjt__button voting-wjt__button_minus js-vote_minus" onClick={karmaVoteMinus} title="Понизить карму">
              <span>↓</span>
            </button>
          </div>
          <div className="user-rating" title="Рейтинг пользователя">
            <span className="user-rating__label">рейтинг</span>
            <span className="user-rating__value">{rating.toFixed(1)}</span>
          </div>
          <div className="author-info__buttons buttons">
            <Link to={`/conversations/${nick}`} className="button" title="Написать письмо" onClick={ga('author_info_bottom', 'write_message', nick)}>Написать</Link>
          </div>
        </div>
        { !!specialization && <div className="author-info__specialization">{specialization}</div> }
        { !!contacts && contacts.length > 0 &&
          <ul className="author-info__contacts user-contacts">
            { contacts.map(contact => <li className="user-contacts__item" key={contact.type}><Link to={contact.url} target="_blank">{contact.type}</Link></li>) }
          </ul>
        }
      </div>
    </div>
  )
}

export default AuthorInfo
