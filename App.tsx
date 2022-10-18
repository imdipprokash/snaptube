import * as React from 'react';
import {Provider} from 'react-redux';
import AuthCheck from './AuthCheck';
import ChatPage from './pages/ChatPage';
import {store} from './Redux/store';
const App = () => {
  return (
    <Provider store={store}>
      <ChatPage />
    </Provider>
  );
};

export default App;
