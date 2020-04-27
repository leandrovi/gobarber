import React from 'react';

import SignIn from './pages/SignIn';
import GlobalStyle from './styles/global';

const App: React.FC = () => {
  return (
    <>
      <SignIn>Hello World</SignIn>
      <GlobalStyle />
    </>
  );
};

export default App;
