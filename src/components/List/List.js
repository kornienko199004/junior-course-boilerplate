import React from 'react';
import s from './index.module.css';

export default function List(props) {
  return <div className={s['goods-list']}>{props.children}</div>;
}
