import PropTypes from 'prop-types';
import css from './FriendListItem.module.css';

export const FriendListItem = ({name, isOnline, avatar}) => {
  return (
    <li className={css.item}>
      <span
        className={css.status}
        isonline={isOnline.toString()}
        style={{ backgroundColor:  isOnline ? 'green' : 'red'}}
      ></span>
      <img className={css.avatar} src={avatar} alt={name} width="48" />
      <p className={css.name}>{name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired,
}
