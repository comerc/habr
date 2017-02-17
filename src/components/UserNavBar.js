import React from 'react'
import TrackerButton from './TrackerButton'
import WriteTopicButton from './WriteTopicButton'
import UserDropdown from './UserDropdown'

const UserNavBar = () => (
  <div className="main-navbar__section main-navbar__section_right" data-style="display: flex;">
    <TrackerButton></TrackerButton>
    <WriteTopicButton></WriteTopicButton>
    <UserDropdown></UserDropdown>
  </div>
)

export default UserNavBar
