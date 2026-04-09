import { NavLink, Outlet } from "react-router-dom";
import "./layoutDefault.scss"
import { useSelector } from "react-redux";
import 'bootstrap/dist/css/bootstrap.min.css';

function LayoutDefault() {
  const isLogin = useSelector(state => state.loginReducer)

  const navLinkActive = (e) => {
    return e.isActive ? "menu__link--active" : "menu__link";
  }

  return (
    <>
      <div>
        <div className="layout-default">
          <header className="layout-default__header">
            <div className="container d-flex  justify-content-between align-items-center">
              <div className="layout-default__logo">
                <NavLink to="/">Quiz</NavLink>
              </div>
              <div className="layout-default__menu">
                <ul>
                  {
                    isLogin ? (
                      <>
                        <li>
                          <NavLink to="/" className={navLinkActive}>Home</NavLink>
                        </li>
                        <li>
                          <NavLink to="/topic" className={navLinkActive}>Topic</NavLink>
                        </li>
                        <li>
                          <NavLink to="/answers" className={navLinkActive}>Answers</NavLink>
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
                      <NavLink to="/logout" className={navLinkActive}>Logout</NavLink>
                    </>

                  ) : (
                    <>
                      <NavLink to="/login" className={navLinkActive}>Login</NavLink>
                      <NavLink to="/register" className={navLinkActive}>Register</NavLink>
                    </>

                  )
                }
              </div>
            </div>
          </header>

          <main className="layout-default__main">
            <div className="container">
              <Outlet />
            </div>
          </main>

          <footer className="layout-default__footer fixed-bottom">
            Copyright @ 2026 by danhnht2005
          </footer>
        </div>

      </div>
    </>
  )
}

export default LayoutDefault;