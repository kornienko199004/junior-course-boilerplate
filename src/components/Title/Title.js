import React from 'react';
import s from './index.module.css';

export default function Title(props) {
  return <h1 className={s.title}>{props.content}</h1>;
}
