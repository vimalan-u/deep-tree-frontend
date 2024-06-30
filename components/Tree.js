import React, { useContext } from 'react';
import TreeNode from './TreeNode';
import TreeContext from '../context/TreeContext';
import { FixedSizeList as List } from 'react-window';
import styles from '../styles/Tree.module.css';

const Tree = () => {
  const { nodes, updateNode } = useContext(TreeContext);

  const handleNodeClick = (index) => {
    const newValue = prompt("Enter new value for node:", nodes[index].value);
    if (newValue !== null) {
      updateNode(index, parseInt(newValue, 10));
    }
  };

  return (
    <List
      height={600}
      itemCount={nodes.length}
      itemSize={35}
      width={300}
    >
      {({ index, style }) => (
        <div style={style}>
          <TreeNode value={nodes[index].value} onClick={() => handleNodeClick(index)} />
        </div>
      )}
    </List>
  );
};

export default Tree;
