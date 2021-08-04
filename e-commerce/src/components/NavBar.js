import React from 'react';
import { AppBar, Toolbar, IconButton, Badge, Typography } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import './style.css';

class NavBar extends React.Component {
  // constructor(props) {
  //   super(props);

  // }

  render () {
    return (
      <div>
        <AppBar>
          <Toolbar>
            <Typography variant='h6' color='inherit'>
              NavBar
            </Typography>
            <div className='grow'/>
            <div>
              <IconButton arial-label='Show cart items' color='inherit'>
                <Badge badgeContent={2} color='secondary'>
                  <ShoppingCart />
                </Badge>
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
      </div>
    )
  }
};

export default NavBar;