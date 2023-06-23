import PropTypes from 'prop-types';
import { FriendCards } from './FriendList.styled';
import { FriendListItem } from 'components/FriendListItem/FriendListItem';

export const FriendList = ({ friends }) => {
  return (
    <FriendCards>
      {friends.map(friend => (
        <FriendListItem
          name={friend.name}
          key={friend.id}
          isOnline={friend.isOnline}
          avatar={friend.avatar}
        />
      ))}
    </FriendCards>
  );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};
