import React from 'react';
import s from './index.module.css';

export default function Title(props) {
  return React.createElement(
    props.titleTag,
    {
      className: s.title,
    },
    props.content
  );
}
