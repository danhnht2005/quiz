import { useNavigate } from "react-router-dom";
import { generateToken } from "../../helpers/generateToken";
import { checkExits, register } from "../../services/usersService";

function Register() {
  const navigattion = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const fullName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;

    const checkExitsEmail = await checkExits("email", email);

    if (checkExitsEmail.length > 0) {
      alert("Email đã tồn tại");
    } else {
      const response = await register({ fullName, email, password, token: generateToken() });

      if (response) {
        navigattion("/login");
      } else {
        alert("Đăng ký thất bại");
      }
    }
  }


  return (
    <>
      <form onSubmit={handleSubmit}>
        <h2>Register Quiz</h2>
        <div>
          <input type="text" placeholder="Nhập họ tên" />
        </div>
        <div>
          <input type="email" placeholder="Nhập email" />
        </div>
        <div>
          <input type="password" placeholder="Nhập mật khẩu" />
        </div>
        <div>
          <button type="submit">Đăng ký</button>
        </div>
      </form>
    </>
  );
}

export default Register;