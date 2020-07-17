import React from 'react'
import { Route, Redirect } from 'react-router-dom'
// import auth from "./auth";

export default function ProtectedRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (localStorage.getItem('token')) {
          return <Component {...props} />
        } else {
          return (
            <Redirect
              to={{
                pathname: '/login',
                state: {
                  from: props.location,
                },
              }}
            />
          )
        }
      }}
    />
  )
}
