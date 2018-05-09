import React from 'react';

import Searchbar from './Searchbar.js';

import { Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle } from 'material-ui/Toolbar';
import './Header.css';

  const Header = () => {
    return (
      <div>
        <Toolbar style={{backgroundColor: '#232323'}}>
          <ToolbarGroup className="app-title-header">
            <div style={{position: 'absolute'}}>
              <ToolbarTitle text="Statdota" style={{color: '#ffffff',fontSize: 25}}/>
            </div>
          </ToolbarGroup>
          <ToolbarGroup className="search-bar-field" style={{width: '100%'}}>
            <Searchbar />
          </ToolbarGroup>
        </Toolbar>
        <Toolbar style={{backgroundColor: '#272727', height: 15}}></Toolbar>
      </div>
  )}

export default Header;
