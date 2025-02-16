import Layout from "../layouts/Layout";

const Home: React.FC = () => {
  return (
    <Layout>
      <div className="container-fluid p-0">
        <div className="pp-splash">
          <div className="card p-5">
            <div className="align-middle mb-4">
              <img src="images/white-logo.png" height="60" alt="" />
              <h1 className="mt-5 mb-3">Welcome back, where to?</h1>
              <div className="row mt-5">
                <div className="col">
                  <a className="card p-3">
                    <div className="mb-4">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-sliders align-middle">
                        <line x1="4" y1="21" x2="4" y2="14"></line>
                        <line x1="4" y1="10" x2="4" y2="3"></line>
                        <line x1="12" y1="21" x2="12" y2="12"></line>
                        <line x1="12" y1="8" x2="12" y2="3"></line>
                        <line x1="20" y1="21" x2="20" y2="16"></line>
                        <line x1="20" y1="12" x2="20" y2="3"></line>
                        <line x1="1" y1="14" x2="7" y2="14"></line>
                        <line x1="9" y1="8" x2="15" y2="8"></line>
                        <line x1="17" y1="16" x2="23" y2="16"></line>
                      </svg>
                    </div>
                    <h3 className="h4">Visit Dashboard</h3>
                  </a>
                </div>
                <div className="col">
                  <a className="card p-3">
                    <div className="mb-4">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" classNa="feather feather-layout">
                        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                        <path d="M3 9h18M9 21V9" />
                      </svg>
                    </div>
                    <h3 className="h4">Create Flyer</h3>
                  </a>
                </div>
                <div className="col">
                  <a className="card p-3">
                    <div className="mb-4">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" classNa="feather feather-layout">
                        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                        <path d="M3 9h18M9 21V9" />
                      </svg>
                    </div>
                    <h3 className="h4">View Past Flyers</h3>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
