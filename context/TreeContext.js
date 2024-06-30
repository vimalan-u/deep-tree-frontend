import React, { createContext, useState } from 'react';

const TreeContext = createContext();

export const TreeProvider = ({ children }) => {
  const [nodes, setNodes] = useState(Array(10000).fill({ value: 1 }));
  const [history, setHistory] = useState([]);
  const [redoStack, setRedoStack] = useState([]);

  const updateNode = (index, newValue) => {
    const updatedNodes = [...nodes];
    updatedNodes[index].value = newValue;
    setHistory([...history, nodes]);
    setRedoStack([]);
    setNodes(updatedNodes);
  };

  const undo = () => {
    if (history.length > 0) {
      const previousState = history.pop();
      setRedoStack([...redoStack, nodes]);
      setNodes(previousState);
    }
  };

  const redo = () => {
    if (redoStack.length > 0) {
      const nextState = redoStack.pop();
      setHistory([...history, nodes]);
      setNodes(nextState);
    }
  };

  return (
    <TreeContext.Provider value={{ nodes, updateNode, undo, redo }}>
      {children}
    </TreeContext.Provider>
  );
};

export default TreeContext;
