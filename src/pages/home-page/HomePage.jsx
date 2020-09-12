import React from 'react';
import { Link } from 'react-router-dom';
import AppIcon from '@material-ui/icons/Apps';
import { Avatar } from '@material-ui/core';

import Search from '../../components/Search';

import './HomePage.css';

function HomePage() {
  return (
    <div className="homePage">
      <div className="homePage__header">
        <div className="homePage__headerLeft">
          <Link to="/about">About</Link>
          <Link to="/store">Store</Link>
        </div>
        <div className="homePage__headerRight">
          <Link to="/gmail">Gmail</Link>
          <Link to="/images">Images</Link>
          <AppIcon />
          <Avatar />
        </div>
      </div>
      <div className="homePage__body">
        <img
          src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
          alt=""
        />
        <div className="homePage__inputContainer">
          <Search />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
