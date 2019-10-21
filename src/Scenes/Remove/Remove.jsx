/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { GridList } from '../../components/index';
import { getItem } from '../../utils/helperMethods';

const Remove = () => {
  const { userName } = getItem('currentUser');
  const users = getItem('users');
  let currentUserIndex = users.findIndex(item => item.userName === userName);
  let { favourites } = { ...users[currentUserIndex] };
  return(
    <GridList data={[...favourites]} showHeart />
  );
}


export default Remove;
