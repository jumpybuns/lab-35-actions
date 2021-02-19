import React from 'react';
import { useSelector } from 'react-redux';
import { getCount } from '../../selectors/commentSelector';

const Count = () => {
  const count = useSelector(getCount);

  return <p>{count}</p>;
};

export default Count;
