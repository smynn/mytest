import logo from './logo.svg';
import './App.css';
import {getUsers, getUser} from "./services/user.services";
import {useEffect, useState} from "react";
import UserComponents from "./components/UserComponents";
import {Link, Route ,Routes} from "react-router-dom";
import Home from "./home/Home";
import Todo from "./components/todo/Todo";
import Albums from "./components/Album/album";
import Comments from "./components/Comments/comments";
function App(){

    return (<div>
        <ul>
            <li><Link to={'/'}>Home page</Link></li>
            <li><Link to={'/albums'}>albums page</Link></li>
            <li><Link to={'/todos'}>todos posts</Link></li>
            <li><Link to={'/comments'}>comments posts</Link></li>
        </ul>
        <Routes>
            <Route path={'/users'} element={<Home/>}/>
            <Route path={'/todos'} element={<Todo/>}/>
            <Route path={'/albums'} element={<Albums/>}/>
            <Route path={'/comments'} element={<Comments/>}/>
        </Routes>

    </div>)
}
export default App;
