import React, { useContext } from "react"
import { Context } from "../index"
import { Button, Container, Nav, Navbar } from "react-bootstrap"
import { NavLink } from "react-router-dom"
import { ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from "../utils/consts"
import { observer } from "mobx-react-lite"
import { useNavigate } from "react-router-dom"

const NavBar = observer(() => {
    const navigate = useNavigate()

    const { user } = useContext(Context)
    return (
        <Navbar bg="dark" data-bs-theme="dark">
            <Container>
                <NavLink style={{ color: "white" }} to={SHOP_ROUTE}>
                    DNDS
                </NavLink>
                {user.isAuth ? (
                    <Nav className="ml-auto" style={{ color: "white" }}>
                        <Button variant={"outline-light"} onClick={() => navigate(ADMIN_ROUTE)}>
                            Админ панель
                        </Button>
                        <Button
                            variant={"outline-light"}
                            style={{ marginLeft: "20px" }}
                            onClick={() => navigate(LOGIN_ROUTE)}
                        >
                            Выйти
                        </Button>
                    </Nav>
                ) : (
                    <Nav className="ml-auto" style={{ color: "white" }}>
                        <Button variant={"outline-light"} onClick={() => user.setIsAuth(true)}>
                            Авторизация
                        </Button>
                    </Nav>
                )}
            </Container>
        </Navbar>
    )
})

export default NavBar
