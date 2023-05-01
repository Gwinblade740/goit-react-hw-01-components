import PropTypes from 'prop-types';
import css from 'components/FriendListItem/FriendListItem.module.css';
import React from 'react';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <>
      <li className={css.item}>
      {isOnline ? (
        <span className={`${css.status} ${css.status_onLine}`}></span>
      ) : (
        <span className={css.status}></span>
      )}
      <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={css.name}>{name}</p>
      </li>
    </>
  );
};
FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnLine: PropTypes.bool,
};
export default FriendListItem;
