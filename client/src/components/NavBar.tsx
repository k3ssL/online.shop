import React, {useContext} from 'react';
import {Context} from "../index";
import {Button, Container, Nav, Navbar} from "react-bootstrap";
import {NavLink} from "react-router-dom";
import {SHOP_ROUTE} from "../utils/consts";
import {observer} from "mobx-react-lite";

const NavBar = observer(() => {
    const {user} = useContext(Context)
    return (
        <Navbar bg="dark" data-bs-theme="dark">
            <Container>
                <NavLink style={{color: 'white'}} to={SHOP_ROUTE}>DNDS</NavLink>
                {user.isAuth ?
                    <Nav className="ml-auto" style = {{color: 'white'}}>
                        <Button variant={'outline-light'}>Админ панель</Button>
                        <Button variant={'outline-light'} style={{ marginLeft:'20px' }} onClick = {() => user.setIsAuth(false)}>Выйти</Button>
                    </Nav>
                    :
                    <Nav className="ml-auto" style = {{color: 'white'}}>
                        <Button variant={'outline-light'} onClick = {() => user.setIsAuth(true)}>Авторизация</Button>
                    </Nav>
                }

            </Container>
        </Navbar>
    );
});


export default NavBar;