import React, { useContext, useState } from 'react';
import axios from 'axios';
import UserContext from '../context/UserContext';
import Tree from '../components/Tree';
import styles from '../styles/Home.module.css';

const Home = () => {
  const { user, setUser } = useContext(UserContext);
  const [username, setUsername] = useState('');
  const [nodes, setNodes] = useState(Array(10000).fill({ value: 1 }));

  const handleLogin = async () => {
    setUser(username);
    try {
      const response = await axios.get(`/api/users/${username}/tree`);
      setNodes(response.data);
    } catch (error) {
      console.error('Error fetching tree:', error);
    }
  };

  const handleSave = async () => {
    if (user) {
      try {
        await axios.post(`/api/users/${user}/tree`, { tree: nodes });
        alert('Tree saved successfully');
      } catch (error) {
        console.error('Error saving tree:', error);
      }
    }
  };

  return (
    <div className={styles.container}>
      {!user ? (
        <div className={styles.login}>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter username"
          />
          <button onClick={handleLogin}>Login</button>
        </div>
      ) : (
        <>
          <Tree />
          <button onClick={handleSave}>Save</button>
        </>
      )}
    </div>
  );
};

export default Home;
