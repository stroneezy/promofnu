import Layout from "../layouts/Layout";

const Settings: React.FC = () => {
  return (
    <Layout>
      <div className="container-fluid p-0">
        <h1 className="h3 mb-3">Settings</h1>

        <div className="row">
          <div className="col-md-3 col-xl-2">
            <div className="card">
              <div className="card-header">
                <h5 className="card-title mb-0">Organization Settings</h5>
              </div>

              <div className="list-group list-group-flush" role="tablist">
                <a className="list-group-item list-group-item-action" data-bs-toggle="list" href="#password" role="tab" aria-selected="false" tabindex="-1">
                  Theme
                </a>
                <a className="list-group-item list-group-item-action" data-bs-toggle="list" href="#" role="tab" aria-selected="false" tabindex="-1">
                  Email notifications
                </a>
                <a className="list-group-item list-group-item-action" data-bs-toggle="list" href="#" role="tab" aria-selected="false" tabindex="-1">
                  Delete account
                </a>
              </div>
            </div>
          </div>

          <div className="col-md-9 col-xl-10">
            <div className="tab-content">
              <div className="tab-pane fade show active" id="account" role="tabpanel">
                <div className="card">
                  <div className="card-header">
                    <h5 className="card-title mb-0">Public info</h5>
                  </div>
                  <div className="card-body">
                    <form>
                      <div className="row">
                        <div className="col-md-8">
                          <div className="mb-3">
                            <label className="form-label" for="inputUsername">
                              Username
                            </label>
                            <input type="text" className="form-control" id="inputUsername" placeholder="Username" />
                          </div>
                          <div className="mb-3">
                            <label className="form-label" for="inputUsername">
                              Biography
                            </label>
                            <textarea rows="2" className="form-control" id="inputBio" placeholder="Tell something about yourself"></textarea>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <div className="text-center">
                            <img alt="Charles Hall" src="img/avatars/avatar.jpg" className="rounded-circle img-responsive mt-2" width="128" height="128" />
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
                    <h5 className="card-title mb-0">Private info</h5>
                  </div>
                  <div className="card-body">
                    <form>
                      <div className="row">
                        <div className="mb-3 col-md-6">
                          <label className="form-label" for="inputFirstName">
                            First name
                          </label>
                          <input type="text" className="form-control" id="inputFirstName" placeholder="First name" />
                        </div>
                        <div className="mb-3 col-md-6">
                          <label className="form-label" for="inputLastName">
                            Last name
                          </label>
                          <input type="text" className="form-control" id="inputLastName" placeholder="Last name" />
                        </div>
                      </div>
                      <div className="mb-3">
                        <label className="form-label" for="inputEmail4">
                          Email
                        </label>
                        <input type="email" className="form-control" id="inputEmail4" placeholder="Email" />
                      </div>
                      <div className="mb-3">
                        <label className="form-label" for="inputAddress">
                          Address
                        </label>
                        <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" />
                      </div>
                      <div className="mb-3">
                        <label className="form-label" for="inputAddress2">
                          Address 2
                        </label>
                        <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
                      </div>
                      <div className="row">
                        <div className="mb-3 col-md-6">
                          <label className="form-label" for="inputCity">
                            City
                          </label>
                          <input type="text" className="form-control" id="inputCity" />
                        </div>
                        <div className="mb-3 col-md-4">
                          <label className="form-label" for="inputState">
                            State
                          </label>
                          <select id="inputState" className="form-control">
                            <option selected="">Choose...</option>
                            <option>...</option>
                          </select>
                        </div>
                        <div className="mb-3 col-md-2">
                          <label className="form-label" for="inputZip">
                            Zip
                          </label>
                          <input type="text" className="form-control" id="inputZip" />
                        </div>
                      </div>
                      <button type="submit" className="btn btn-primary">
                        Save changes
                      </button>
                    </form>
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
