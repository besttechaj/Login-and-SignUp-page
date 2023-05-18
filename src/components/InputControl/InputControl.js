import React from 'react';
import styles from './InputControl.module.css';
const InputControl = (props) => {
  return (
    <div className={styles.container}>
      {/* if we are getting the label then display it else do nothing */}
      {props.label && <label>{props.label}</label>}
      <input type='text' {...props} />
    </div>
  );
};

export default InputControl;
