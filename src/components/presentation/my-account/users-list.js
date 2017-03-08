import React, { Component, PropTypes } from 'react'
import Heading from 'components/presentation/heading'
import Loading from 'components/presentation/loading'
import UsersListItem from 'components/presentation/my-account/users-list-item'
import UsersListNav from 'components/presentation/my-account/users-list-nav'
import { t } from 'core/i18n'

class UsersList extends Component {
  renderUsersList() {
    const { users, onDelete } = this.props
    return (
      <div className='users-list'>
        <div className='user-list-header'>
          <Heading type='gamma'>{t('my-account.users.title')}</Heading>
          <a href='/my-account/users/new' className='button button-secondary button-large'>
            {t('my-account.users.new.title')}
          </a>
        </div>
        {users.map(user => (
          <UsersListItem key={user.email} user={user} onDelete={onDelete} />
        ))}
      </div>
    )
  }
  render() {
    const { isReady, fetchUsers, currentPage, totalUsers } = this.props
    return (
      <div className='account-contents wrapper'>
        <UsersListNav fetchPage={fetchUsers} pageNumber={currentPage} total={totalUsers} />
        {isReady ? this.renderUsersList() : <Loading />}
      </div>
    )
  }
}

UsersList.propTypes = {
  isReady: PropTypes.bool,
  fetchUsers: PropTypes.func.isRequired,
  currentPage: PropTypes.number.isRequired,
  totalUsers: PropTypes.number.isRequired,
  onDelete: PropTypes.func.isRequired,
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      email: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      surname: PropTypes.string.isRequired,
      role: PropTypes.string.isRequired
    })
  ).isRequired
}

export default UsersList
