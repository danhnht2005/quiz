import { NavLink, Outlet } from "react-router-dom";
import "./layoutDefault.scss"
import { useSelector } from "react-redux";

function LayoutDefault() {
  const isLogin = useSelector(state => state.loginReducer)

  return (
    <>
      <div>
        <div className="layout-default">
          <header className="layout-default__header">
            <div className="layout-default__logo">Quiz</div>
            <div className="layout-default__menu">
              <ul>
                <li>
                  <NavLink to="/">Home</NavLink>
                </li>
                {
                  isLogin ? (
                    <>
                      <li>
                  <NavLink to="/topic">Topic</NavLink>
                </li>
                <li>
                  <NavLink to="/answers">Answers</NavLink>
                </li>
                    </>
                  ) : (
                    <></>
                  )
                }
              </ul>
            </div>
            <div className="layout-default__account">
              {
                isLogin ? (
                  <>
                    <NavLink to="/logout">Đăng xuất</NavLink>
                  </>

                ) : (
                  <>
                    <NavLink to="/login">Đăng nhập</NavLink>
                    <NavLink to="/register">Đăng ký</NavLink>
                  </>

                )
              }
            </div>
          </header>

          <main className="layout-default__main">
            <Outlet />
          </main>

          <footer className="layout-default__footer">
            Copyright @ 2026 by danhnht2005
          </footer>
        </div>

      </div>
    </>
  )
}

export default LayoutDefault;