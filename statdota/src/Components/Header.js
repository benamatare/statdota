import React from 'react';
import Searchbar from './Searchbar.js';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';
import './Header.css';

  const Header = () => {
    return (<div>
    <Toolbar zDepth={5} style={{backgroundColor: 'rgb(48, 48, 48)'}}>
      <ToolbarGroup className="app-title-header">
        <ToolbarTitle text="Statdota" style={{color: 'red',fontSize: 25}}/></ToolbarGroup>
      <ToolbarGroup className="search-bar-field" style={{width: '100%'}}>
        <Searchbar />
      </ToolbarGroup>
    </Toolbar>
    </div>)}

export default Header;
