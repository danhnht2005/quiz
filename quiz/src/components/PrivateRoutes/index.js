import { Navigate, Outlet } from "react-router-dom";

function PrivateRoutes() {
  const isLogin = false;

  console.log(isLogin);
  return(
    <>
      {isLogin ? (<Outlet />) : (<Navigate to={"/login"} />)}
    </>
  );
}

export default PrivateRoutes;