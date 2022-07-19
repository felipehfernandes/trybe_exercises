import './App.css';
import React from 'react';
import Header from './Header.jsx';
import Content from './Content.jsx';
import Footer from './Footer.jsx';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Content />
        <Footer />
      </div>
    )
  }
}

export default App;
