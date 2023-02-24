import './App.css';
import Benefit from './components/Benefit/Benefit';
import Blog from './components/Blog/Blog';
import Comment from './components/Comment/Comment';
import Course from './components/Course/Course';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Join from './components/Join/Join';
import Start from './components/Start/Start';
import Trending from './components/Trending/Trending';

function App() {
  return (
    <div className="App">
      <Header/>
      <Hero/>
      <Course/>
      <Trending/>
      <Join/>
      <Benefit/>
      <Comment/>
      <Blog/>
      <Start/>
      <Footer/>
    </div>
  );
}

export default App;
