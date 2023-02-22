import './App.css';
import Benefit from './components/Benefit/Benefit';
import Comment from './components/Comment/Comment';
import Course from './components/Course/Course';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Join from './components/Join/Join';
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
    </div>
  );
}

export default App;
