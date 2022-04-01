import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { appRoutes } from './approutes'

const RouteGenerator = () => {
    return (
        <Routes>
            {
                appRoutes.map(route => {
                    return <Route path={route.routePath} element={<route.routeElement />} key={route.routeId} />
                })
            }
        </Routes>
    )
}

export default RouteGenerator