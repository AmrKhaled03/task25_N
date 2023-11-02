import React from "react";
import { Route } from "react-router-dom";

const ProtectedRoute = ({ component: Component, user, fallback: Fallback, ...rest }) => {
  return (
    <>

     <Route
      {...rest}
      render={(props) =>
        user ? <Component {...props} /> : <Fallback {...props} />
      }
    />
    </>
   
  );
};

export default ProtectedRoute;
