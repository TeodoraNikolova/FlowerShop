import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { LinkContainer } from 'react-router-bootstrap'
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap'
import { logout } from '../actions/userActions'

const Header = () => {

  const dispatch = useDispatch()

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const logoutHandler = () => {
    dispatch(logout())
  }

  return (
 <Navbar bg="light" expand="lg" collapseOnSelect>
  <Container>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">

      <Nav className="mx-auto">
           <LinkContainer to='/products'>
        <Nav.Link>Аранжировки</Nav.Link>
        </LinkContainer>
      <LinkContainer to='/wizard'>
        <Nav.Link>Wizard</Nav.Link>
        </LinkContainer>
        <Navbar.Brand href="/">
      <img
        src="/logo1.ico"
        alt=""
        className="d-inline-block align-top"
      />
    </Navbar.Brand>
    <LinkContainer to='/tenzorflow'>
        <Nav.Link>TenzorFlow</Nav.Link>
        </LinkContainer>
      <LinkContainer to='/contacts'>
        <Nav.Link>Контакти</Nav.Link>
        </LinkContainer>
      </Nav>

      <Nav className="mr-auto">
      <LinkContainer to='/cart'>
        <Nav.Link><i className='fas fa-shopping-cart'></i></Nav.Link></LinkContainer>
        {userInfo ? (
          <NavDropdown title={
            <span><i className="fas fa-user fa-fw"></i></span>
          }id='username'>
            <LinkContainer to='/profile'>
                    <NavDropdown.Item>Профил</NavDropdown.Item>
                  </LinkContainer>
                  <NavDropdown.Item onClick={logoutHandler}>
                    Изход
                  </NavDropdown.Item>
                </NavDropdown>
              ) : (
          <LinkContainer to='/login'>
            <Nav.Link><i className='fas fa-user'></i></Nav.Link></LinkContainer>
        )}
{userInfo && userInfo.isAdmin && (
                <NavDropdown title='Админ' id='adminmenu'>
                  <LinkContainer to='/admin/userlist'>
                    <NavDropdown.Item>Потребители</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to='/admin/productlist'>
                    <NavDropdown.Item>Продукти</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to='/admin/orderlist'>
                    <NavDropdown.Item>Поръчки</NavDropdown.Item>
                  </LinkContainer>
                </NavDropdown>
              )}
        </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
  );
}

export default Header