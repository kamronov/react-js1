import { useState } from 'react';
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
    const [dark, setDark] = useState(true);

  return (
    <div className="App">
      <Header setData = {setDark} change={dark}/>
      <Hero setData = {setDark} change={dark}/>
      <Course setData = {setDark} change={dark}/>
      <Trending setData = {setDark} change={dark}/>
      <Join setData = {setDark} change={dark}/>
      <Benefit setData = {setDark} change={dark}/>
      <Comment setData = {setDark} change={dark}/>
      <Blog setData = {setDark} change={dark}/>
      <Start setData = {setDark} change={dark}/>
      <Footer setData = {setDark} change={dark}/>
    </div>
  );
}

export default App;
