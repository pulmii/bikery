import React from 'react';
import { Link } from 'react-router-dom';

import Motorcycle from '@material-ui/icons/Motorcycle';
import ViewList from '@material-ui/icons/ViewList';
import Timeline from '@material-ui/icons/Timeline';
import Settings from '@material-ui/icons/Settings';

import './Menu.css';

function Menu(props) {
    return (
       <div className="menu">
        <Link to="/"><div className="menu__nappi"><Motorcycle nativeColor='#fff'/></div></Link>
        <Link to="/"><div className="menu__nappi"><ViewList nativeColor='#fff'/></div></Link>
        <Link to="/stats"><div className="menu__nappi"><Timeline nativeColor='#fff'/></div></Link>
        <Link to="/settings"><div className="menu__nappi"><Settings nativeColor='#fff'/></div></Link>
       </div>
    );
  }

export default Menu;