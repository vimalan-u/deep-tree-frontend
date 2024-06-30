import React from 'react';
import styles from '../styles/TreeNode.module.css';

const TreeNode = ({ value, onClick }) => (
  <div className={styles.node} onClick={onClick}>
    {value}
  </div>
);

export default TreeNode;
