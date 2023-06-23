import PropTypes from 'prop-types';
import { FriendCard, Status, Avatar, FriendName } from './FriendListItem.styled';

export const FriendListItem = ({name, isOnline, avatar}) => {
  return (
    <FriendCard>
      <Status isonline={isOnline.toString()}></Status>
      <Avatar src={avatar} alt={name} width="48" />
      <FriendName>{name}</FriendName>
    </FriendCard>
  );
};

FriendListItem.propTypes = {
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired,
}
