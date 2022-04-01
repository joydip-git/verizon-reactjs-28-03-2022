import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { appRoutes } from './approutes'
import ProtectedRoute from './ProtectedRoute'

const RouteGenerator = () => {
    return (
        <Routes>
            {
                appRoutes.map(route => {
                    if (route.routePath === '' || route.routePath === '/home' || route.routePath === '*' || route.routePath === '/login') {
                        return <Route path={route.routePath} element={<route.routeElement />} key={route.routeId} />
                    } else {
                        return (

                            <Route path={route.routePath} element={
                                <ProtectedRoute>
                                    <route.routeElement />
                                </ProtectedRoute>
                            }
                                key={route.routeId} />
                        )
                    }
                })
            }
        </Routes>
    )
}

export default RouteGenerator