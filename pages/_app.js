import React from 'react';
import { UserProvider } from '../context/UserContext';
import { TreeProvider } from '../context/TreeContext';
import '../src/app/globals.css';

const MyApp = ({ Component, pageProps }) => (
  <UserProvider>
    <TreeProvider>
      <Component {...pageProps} />
    </TreeProvider>
  </UserProvider>
);

export default MyApp;
