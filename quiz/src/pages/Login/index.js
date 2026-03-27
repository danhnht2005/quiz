function Login() {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
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