import React from 'react';
import { Provider } from 'react-redux';
import Navbar from './components/navbar/Navbar';
import Search from './components/search/Search';
import store from './reduxController/store';
import { ThemeProvider } from "@chakra-ui/core";
import './App.css';


function App() {
  
  return (
    <Provider store={store}>
      <ThemeProvider>
        <div>
          <Navbar />
            <Search />
        </div>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
