import Layout from "../layouts/Layout";

const Settings: React.FC = () => {
  return (
    <Layout>
      <div className="container-fluid p-0">
        <h1 className="mb-3">Settings</h1>

        <div className="row">
          <div className="col">
            <div className="card">
              <div className="card-header">
                <h5 className="card-title mb-0">Organization info</h5>
              </div>
              <div className="card-body">
                <form>
                  <div className="row">
                    <div className="col-md-8">
                      <div className="mb-3">
                        <label className="form-label" htmlFor="inputUsername">
                          Name
                        </label>
                        <input type="text" className="form-control" id="inputUsername" placeholder="Organization name" />
                      </div>
                      <div className="mb-3">
                        <label className="form-label" htmlFor="inputUsername">
                          Description
                        </label>
                        <textarea rows={2} className="form-control" id="inputBio" placeholder="Organization description"></textarea>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="text-center">
                        <label className="form-label" htmlFor="inputUsername">
                          Logo
                        </label>
                        <div className="mt-2">
                          <span className="btn btn-primary">
                            <i className="fas fa-upload"></i> Upload
                          </span>
                        </div>
                        <small>For best results, use an image at least 128px by 128px in .jpg format</small>
                      </div>
                    </div>
                  </div>

                  <button type="submit" className="btn btn-primary">
                    Save changes
                  </button>
                </form>
              </div>
            </div>

            <div className="card">
              <div className="card-header">
                <h5 className="card-title mb-0">Theme</h5>
              </div>
              <div className="card-body">
                <div className="card">
                  <div className="card-body">
                    <div className="mb-3">
                      <div className="alert alert-primary alert-outline alert-dismissible" role="alert">
                        <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                        <div className="alert-icon">
                          <i className="far fa-fw fa-bell"></i>
                        </div>
                        <div className="alert-message">
                          <strong>Primary</strong>
                        </div>
                      </div>
                      <div className="alert alert-secondary alert-outline alert-dismissible" role="alert">
                        <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                        <div className="alert-icon">
                          <i className="far fa-fw fa-bell"></i>
                        </div>
                        <div className="alert-message">
                          <strong>Secondary</strong>
                        </div>
                      </div>
                      <div className="alert alert-success alert-outline alert-dismissible" role="alert">
                        <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                        <div className="alert-icon">
                          <i className="far fa-fw fa-bell"></i>
                        </div>
                        <div className="alert-message">
                          <strong>Tertiary</strong>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Settings;
