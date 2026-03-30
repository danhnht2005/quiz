import { useNavigate } from "react-router-dom";
import { deleteCookie } from "../../helpers/cookie";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { checkedLogin } from "../../actions/login";

function Logout(){
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkedLogin(false));
    deleteCookie("user");
    deleteCookie("email");
    deleteCookie("token");
    deleteCookie("id");
    navigate("/login");
  }, [dispatch, navigate]);

  return (
    <>
    </>
  );
}

export default Logout;