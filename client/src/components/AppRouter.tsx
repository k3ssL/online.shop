import React, { useContext } from "react"
import { Route, Routes, Navigate } from "react-router-dom"
import { authRoutes, publicRoutes } from "../routes"
import { SHOP_ROUTE } from "../utils/consts"
import { Context } from "../index"

const AppRouter = () => {
    const { user } = useContext(Context)
    return (
        <Routes>
            {publicRoutes.map(({ path, Component }) => (
                <Route key={path} path={path} element={<Component />} />
            ))}
            {user.isAuth &&
                authRoutes.map(({ path, Component }) => <Route key={path} path={path} element={<Component />} />)}
            <Route path="*" element={<Navigate to={SHOP_ROUTE} />} />A
        </Routes>
    )
}

export default AppRouter
