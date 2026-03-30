import { useDispatch } from "react-redux";
import { setCookie } from "../../helpers/cookie";
import { login } from "../../services/usersService";
import { useNavigate } from "react-router-dom";
import { checkedLogin } from "../../actions/login";

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;
    const response = await login(email, password);
    if (response.length > 0) {
      navigate("/");
      setCookie("user", response[0].fullName, 7);
      setCookie("email", response[0].email, 7);
      setCookie("token", response[0].token, 7);
      setCookie("id", response[0].id, 7);
      dispatch(checkedLogin(true));
    } else {
      alert("Đăng nhập thất bại");
    }
  }


  return (
    <>
      <form onSubmit={handleSubmit}>
        <h2>Login Quiz</h2>
        <div>
          <input type="email" placeholder="Nhập email" />
        </div>
        <div>
          <input type="password" placeholder="Nhập mật khẩu" />
        </div>
        <div>
          <button type="submit">Đăng nhập</button>
        </div>
      </form>
    </>
  );
}

export default Login;