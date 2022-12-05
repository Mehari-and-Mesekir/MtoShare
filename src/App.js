// import logo from './logo.svg';
import './App.css';
// import Header from '../components/Header/Header';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Hero from "./components/Hero/Hero";
import Post from './components/post/Post';
// import About from '../components/About/About';
// import Contact from '../components/Contact/Contact';
import VideoPost from './components/VideoPost/VideoPost';
import ArticlePost from './components/ArticlePost/ArticlePost';

function App() {
    return ( <
        BrowserRouter >
        <
        div className = "App" >
        <
        Routes >
        <
        Route exact path = "/"
        element = { < Hero / > }
        /> <
        Route path = "/post"
        element = { < Post / > }
        /> <
        Route path = "/post/video"
        element = { < VideoPost / > }
        /> <
        Route path = "/post/article"
        element = { < ArticlePost / > }
        /> < /
        Routes > <
        /div> < /
        BrowserRouter >
    );
}

export default App;