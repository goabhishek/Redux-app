import Badge from '@mui/material/Badge';

import React, { useState } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { NavLink } from 'react-router-dom';

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Navbar bg='dark' variant='dark' style={{ height: '60px' }}>
      <Container>
        <NavLink to='/' className='text-decoration-none text-light mx-3'>
          Add to card
        </NavLink>
        <Nav className='me-auto'>
          <NavLink to='/' className='text-decoration-none text-light'>
            Home
          </NavLink>
        </Nav>

        <Badge
          badgeContent={4}
          color='primary'
          id='fade-button'
          aria-controls={open ? 'fade-menu' : undefined}
          aria-haspopup='true'
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
        >
          <i class='fa-solid fa-cart-shopping text-light' style={{ fontSize: 25, cursor: 'pointer' }}></i>
        </Badge>
      </Container>

      <Menu
        id='fade-menu'
        MenuListProps={{
          'aria-labelledby': 'fade-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        // TransitionComponent={Fade}
      >
        <div className='cart_details'>
          <i
            className='fas fa-close smallclose'
            style={{ positio: 'absolute', top: 2, right: 20, fontSize: 23, cursor: 'pointer' }}
          ></i>
          <p>Your carts is empty</p>
          <img
            src='https://media2.giphy.com/media/fscIxPfKjPyShbwUS5/giphy.gif?cid=6c09b952l4b0gdxxnkbhmb4eunmzxw8jnud2spbhxr7daels&rid=giphy.gif&ct=s'
            alt='cart'
          />
        </div>
      </Menu>
    </Navbar>
  );
};

export default Header;
