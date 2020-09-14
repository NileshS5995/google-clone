import React from 'react';
import './Home.css';
import SearchIcon from '@material-ui/icons/Search';
import AppsIcon from '@material-ui/icons/Apps';
import { Apps } from '@material-ui/icons/Apps';
import Search  from './../components/Search'

import {
    Link
  } from "react-router-dom";
import { Avatar } from '@material-ui/core';

function Home() {
    return (
        <div className="home">
            {/* <h1>his is home page</h1> */}
            <div className="home__header">
                <div className="home__headerLeft">
                    <Link to='/about'>About</Link>
                    <Link to='/store'>Store</Link>
                </div>
                <div className="home__headerRight">
                    <Link to='/gmail'>Gmail</Link>
                    <Link to='/images'>Images</Link>
                    <AppsIcon></AppsIcon>
                    <Avatar/>
                </div>

            </div>
            <div className="home__body">
                <img src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" alt="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"></img>
                <div className="home__inputContainer">
                    <Search />
                </div>
            </div>
        </div>
    )
}

export default Home;