// import PropTypes from 'prop-types';
import css from './FriendList.module.css';
import { FriendListItem } from 'components/FriendListItem/FriendListItem';

export const FriendList = ({ friends }) => {
  return (
    <ul className={css.friendList}>
      {friends.map(friend => (
        <FriendListItem
          name={friend.name}
          key={friend.id}
          isOnline={friend.isOnline}
          avatar={friend.avatar}
        />
      ))}
    </ul>
  );
};
