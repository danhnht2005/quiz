import { useNavigate } from "react-router-dom";
import { deleteCookie } from "../../helpers/cookie";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { checkedLogin } from "../../actions/login";

function Logout(){
  const navigate = useNavigate();
  const dipatch = useDispatch();

  useEffect(() => {
    deleteCookie("user");
    deleteCookie("token");
    navigate("/login");
    dipatch(checkedLogin(false));
  }, []);

  return (
    <>
    </>
  );
}

export default Logout;