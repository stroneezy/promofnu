// src/App.tsx
import { Link, BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
//import Create from "./pages/Create";
import "./styles/app.scss";
import Subscription from "./pages/Subscription";
import Settings from "./pages/Settings";
import Dashboard from "./pages/Dashboard";
import Create from "./pages/Create";

const App: React.FC = () => {
  return (
    <Router>
      <div className="wrapper">
        <nav id="sidebar" className="sidebar js-sidebar">
          <div className="sidebar-content js-simplebar">
            <a className="sidebar-brand" href="/">
              <img src="images/logo.png" height="38" alt="" />
            </a>
            <ul className="sidebar-nav">
              <li className="sidebar-item mt-4">
                <Link className="sidebar-link" to="/">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-house" viewBox="0 0 16 16">
                    <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L2 8.207V13.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V8.207l.646.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293zM13 7.207V13.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V7.207l5-5z" />
                  </svg>
                  <span className="align-middle">Home</span>
                </Link>
              </li>
              <li className="sidebar-header">Administration</li>

              <li className="sidebar-item">
                <a className="sidebar-link" href="/subscription">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16">
                    <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                    <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z" />
                  </svg>
                  <span className="align-middle">Subscription</span>{" "}
                </a>
              </li>
              <li className="sidebar-item">
                <a className="sidebar-link" href="/settings">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-sliders" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M11.5 2a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M9.05 3a2.5 2.5 0 0 1 4.9 0H16v1h-2.05a2.5 2.5 0 0 1-4.9 0H0V3zM4.5 7a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M2.05 8a2.5 2.5 0 0 1 4.9 0H16v1H6.95a2.5 2.5 0 0 1-4.9 0H0V8zm9.45 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m-2.45 1a2.5 2.5 0 0 1 4.9 0H16v1h-2.05a2.5 2.5 0 0 1-4.9 0H0v-1z" />
                  </svg>
                  <span className="align-middle">Settings</span>
                </a>
              </li>
              <li className="sidebar-header">Content</li>
              <li className="sidebar-item">
                <Link className="sidebar-link" to="/create">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-newspaper" viewBox="0 0 16 16">
                    <path d="M0 2.5A1.5 1.5 0 0 1 1.5 1h11A1.5 1.5 0 0 1 14 2.5v10.528c0 .3-.05.654-.238.972h.738a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 1 1 0v9a1.5 1.5 0 0 1-1.5 1.5H1.497A1.497 1.497 0 0 1 0 13.5zM12 14c.37 0 .654-.211.853-.441.092-.106.147-.279.147-.531V2.5a.5.5 0 0 0-.5-.5h-11a.5.5 0 0 0-.5.5v11c0 .278.223.5.497.5z" />
                    <path d="M2 3h10v2H2zm0 3h4v3H2zm0 4h4v1H2zm0 2h4v1H2zm5-6h2v1H7zm3 0h2v1h-2zM7 8h2v1H7zm3 0h2v1h-2zm-3 2h2v1H7zm3 0h2v1h-2zm-3 2h2v1H7zm3 0h2v1h-2z" />
                  </svg>
                  <span className="align-middle">Create</span>
                </Link>
              </li>
              <li className="sidebar-item">
                <Link className="sidebar-link" to="/dashboard">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-newspaper" viewBox="0 0 16 16">
                    <path d="M0 2.5A1.5 1.5 0 0 1 1.5 1h11A1.5 1.5 0 0 1 14 2.5v10.528c0 .3-.05.654-.238.972h.738a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 1 1 0v9a1.5 1.5 0 0 1-1.5 1.5H1.497A1.497 1.497 0 0 1 0 13.5zM12 14c.37 0 .654-.211.853-.441.092-.106.147-.279.147-.531V2.5a.5.5 0 0 0-.5-.5h-11a.5.5 0 0 0-.5.5v11c0 .278.223.5.497.5z" />
                    <path d="M2 3h10v2H2zm0 3h4v3H2zm0 4h4v1H2zm0 2h4v1H2zm5-6h2v1H7zm3 0h2v1h-2zM7 8h2v1H7zm3 0h2v1h-2zm-3 2h2v1H7zm3 0h2v1h-2zm-3 2h2v1H7zm3 0h2v1h-2z" />
                  </svg>
                  <span className="align-middle">Flyers</span>
                </Link>
              </li>
              <li className="sidebar-item">
                <a className="sidebar-link" href="/">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-cart" viewBox="0 0 16 16">
                    <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
                  </svg>
                  <span className="align-middle">Products</span>
                </a>
              </li>
              <li className="sidebar-item">
                <a className="sidebar-link" href="/">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-layout-three-columns" viewBox="0 0 16 16">
                    <path d="M0 1.5A1.5 1.5 0 0 1 1.5 0h13A1.5 1.5 0 0 1 16 1.5v13a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 14.5zM1.5 1a.5.5 0 0 0-.5.5v13a.5.5 0 0 0 .5.5H5V1zM10 15V1H6v14zm1 0h3.5a.5.5 0 0 0 .5-.5v-13a.5.5 0 0 0-.5-.5H11z" />
                  </svg>
                  <span className="align-middle">Templates</span>
                </a>
              </li>
              <li className="sidebar-header">Addons</li>
              <li className="sidebar-item">
                <a className="sidebar-link" href="/">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-graph-up" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M0 0h1v15h15v1H0zm14.817 3.113a.5.5 0 0 1 .07.704l-4.5 5.5a.5.5 0 0 1-.74.037L7.06 6.767l-3.656 5.027a.5.5 0 0 1-.808-.588l4-5.5a.5.5 0 0 1 .758-.06l2.609 2.61 4.15-5.073a.5.5 0 0 1 .704-.07" />
                  </svg>
                  <span className="align-middle">Analytics</span>
                </a>
              </li>
              <li className="sidebar-item">
                <a className="sidebar-link" href="/">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-lightbulb" viewBox="0 0 16 16">
                    <path d="M2 6a6 6 0 1 1 10.174 4.31c-.203.196-.359.4-.453.619l-.762 1.769A.5.5 0 0 1 10.5 13a.5.5 0 0 1 0 1 .5.5 0 0 1 0 1l-.224.447a1 1 0 0 1-.894.553H6.618a1 1 0 0 1-.894-.553L5.5 15a.5.5 0 0 1 0-1 .5.5 0 0 1 0-1 .5.5 0 0 1-.46-.302l-.761-1.77a2 2 0 0 0-.453-.618A5.98 5.98 0 0 1 2 6m6-5a5 5 0 0 0-3.479 8.592c.263.254.514.564.676.941L5.83 12h4.342l.632-1.467c.162-.377.413-.687.676-.941A5 5 0 0 0 8 1" />
                  </svg>
                  <span className="align-middle">AI Suggestions</span>
                </a>
              </li>
            </ul>
          </div>
        </nav>
        <div className="main">
          <nav className="navbar navbar-expand navbar-light navbar-bg">
            <a className="sidebar-toggle js-sidebar-toggle">
              <i className="hamburger align-self-center"></i>
            </a>

            <div className="navbar-collapse collapse">
              <ul className="navbar-nav navbar-align">
                <li className="nav-item dropdown">
                  <a className="nav-icon dropdown-toggle" href="#" id="alertsDropdown" data-bs-toggle="dropdown">
                    <div className="position-relative">
                      <i className="align-middle" data-feather="bell"></i>
                      <span className="indicator">4</span>
                    </div>
                  </a>
                  <div className="dropdown-menu dropdown-menu-lg dropdown-menu-end py-0" aria-labelledby="alertsDropdown">
                    <div className="dropdown-menu-header">4 New Notifications</div>
                    <div className="list-group">
                      <a href="#" className="list-group-item">
                        <div className="row g-0 align-items-center">
                          <div className="col-2">
                            <i className="text-danger" data-feather="alert-circle"></i>
                          </div>
                          <div className="col-10">
                            <div className="text-dark">Update completed</div>
                            <div className="text-muted small mt-1">Restart server 12 to complete the update.</div>
                            <div className="text-muted small mt-1">30m ago</div>
                          </div>
                        </div>
                      </a>
                      <a href="#" className="list-group-item">
                        <div className="row g-0 align-items-center">
                          <div className="col-2">
                            <i className="text-warning" data-feather="bell"></i>
                          </div>
                          <div className="col-10">
                            <div className="text-dark">Lorem ipsum</div>
                            <div className="text-muted small mt-1">Aliquam ex eros, imperdiet vulputate hendrerit et.</div>
                            <div className="text-muted small mt-1">2h ago</div>
                          </div>
                        </div>
                      </a>
                      <a href="#" className="list-group-item">
                        <div className="row g-0 align-items-center">
                          <div className="col-2">
                            <i className="text-primary" data-feather="home"></i>
                          </div>
                          <div className="col-10">
                            <div className="text-dark">Login from 192.186.1.8</div>
                            <div className="text-muted small mt-1">5h ago</div>
                          </div>
                        </div>
                      </a>
                      <a href="#" className="list-group-item">
                        <div className="row g-0 align-items-center">
                          <div className="col-2">
                            <i className="text-success" data-feather="user-plus"></i>
                          </div>
                          <div className="col-10">
                            <div className="text-dark">New connection</div>
                            <div className="text-muted small mt-1">Christina accepted your request.</div>
                            <div className="text-muted small mt-1">14h ago</div>
                          </div>
                        </div>
                      </a>
                    </div>
                    <div className="dropdown-menu-footer">
                      <a href="#" className="text-muted">
                        Show all notifications
                      </a>
                    </div>
                  </div>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-icon dropdown-toggle" href="#" id="messagesDropdown" data-bs-toggle="dropdown">
                    <div className="position-relative">
                      <i className="align-middle" data-feather="message-square"></i>
                    </div>
                  </a>
                  <div className="dropdown-menu dropdown-menu-lg dropdown-menu-end py-0" aria-labelledby="messagesDropdown">
                    <div className="dropdown-menu-header">
                      <div className="position-relative">4 New Messages</div>
                    </div>
                    <div className="list-group">
                      <a href="#" className="list-group-item">
                        <div className="row g-0 align-items-center">
                          <div className="col-2">
                            <img src="images/avatars/avatar-5.jpg" className="avatar img-fluid rounded-circle" alt="Vanessa Tucker" />
                          </div>
                          <div className="col-10 ps-2">
                            <div className="text-dark">Vanessa Tucker</div>
                            <div className="text-muted small mt-1">Nam pretium turpis et arcu. Duis arcu tortor.</div>
                            <div className="text-muted small mt-1">15m ago</div>
                          </div>
                        </div>
                      </a>
                      <a href="#" className="list-group-item">
                        <div className="row g-0 align-items-center">
                          <div className="col-2">
                            <img src="images/avatars/avatar-2.jpg" className="avatar img-fluid rounded-circle" alt="William Harris" />
                          </div>
                          <div className="col-10 ps-2">
                            <div className="text-dark">William Harris</div>
                            <div className="text-muted small mt-1">Curabitur ligula sapien euismod vitae.</div>
                            <div className="text-muted small mt-1">2h ago</div>
                          </div>
                        </div>
                      </a>
                      <a href="#" className="list-group-item">
                        <div className="row g-0 align-items-center">
                          <div className="col-2">
                            <img src="images/avatars/avatar-4.jpg" className="avatar img-fluid rounded-circle" alt="Christina Mason" />
                          </div>
                          <div className="col-10 ps-2">
                            <div className="text-dark">Christina Mason</div>
                            <div className="text-muted small mt-1">Pellentesque auctor neque nec urna.</div>
                            <div className="text-muted small mt-1">4h ago</div>
                          </div>
                        </div>
                      </a>
                      <a href="#" className="list-group-item">
                        <div className="row g-0 align-items-center">
                          <div className="col-2">
                            <img src="images/avatars/avatar-3.jpg" className="avatar img-fluid rounded-circle" alt="Sharon Lessman" />
                          </div>
                          <div className="col-10 ps-2">
                            <div className="text-dark">Sharon Lessman</div>
                            <div className="text-muted small mt-1">Aenean tellus metus, bibendum sed, posuere ac, mattis non.</div>
                            <div className="text-muted small mt-1">5h ago</div>
                          </div>
                        </div>
                      </a>
                    </div>
                    <div className="dropdown-menu-footer">
                      <a href="#" className="text-muted">
                        Show all messages
                      </a>
                    </div>
                  </div>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-icon dropdown-toggle d-inline-block d-sm-none" href="#" data-bs-toggle="dropdown">
                    <i className="align-middle" data-feather="settings"></i>
                  </a>

                  <a className="nav-link dropdown-toggle d-none d-sm-inline-block" href="#" data-bs-toggle="dropdown">
                    {" "}
                    <img src="images/avatars/avatar.jpg" className="avatar img-fluid rounded me-1" alt="Charles Hall" /> <span className="text-dark">Charles Hall</span>{" "}
                  </a>
                  <div className="dropdown-menu dropdown-menu-end">
                    <a className="dropdown-item" href="pages-profile.html">
                      <i className="align-middle me-1" data-feather="user"></i> Profile
                    </a>
                    <a className="dropdown-item" href="#">
                      <i className="align-middle me-1" data-feather="pie-chart"></i> Analytics
                    </a>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item" href="index.html">
                      <i className="align-middle me-1" data-feather="settings"></i> Settings & Privacy
                    </a>
                    <a className="dropdown-item" href="#">
                      <i className="align-middle me-1" data-feather="help-circle"></i> Help Center
                    </a>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item" href="#">
                      Log out
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </nav>
          <main className="content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/subscription" element={<Subscription />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/about" element={<About />} />
              <Route path="/create" element={<Create />} />
            </Routes>
          </main>
          <footer className="footer">
            <div className="container-fluid">
              <div className="row text-muted">
                <div className="col-12 text-end">
                  <ul className="list-inline">
                    <li className="list-inline-item">
                      <a className="text-muted" href="#" target="_blank">
                        Support
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a className="text-muted" href="#" target="_blank">
                        Privacy
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a className="text-muted" href="#" target="_blank">
                        Terms
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
      {/* <nav className="container">
        <Link to="/">Home</Link> | <Link to="/about">About</Link>
      </nav> */}
    </Router>
  );
};

export default App;
