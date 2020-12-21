import './App.css';
import Header from './components/Header/Header';
import Featured from './components/Featured/FeaturedMenu/Featured';
import NewsContent from './components/MainContent/MainContent';
import Footer from './components/Footer/Footer'
import { Component } from 'react';

class App extends Component {



  render() {
    const menuSelectHandler = () => {
      
    }

    return (
      <div className="App">
        <Header />
        <section className="Content">
          <Featured />
          <NewsContent />
          {/* <Footer /> */}
        </section>
      </div>
    );
  }

}

export default App;
