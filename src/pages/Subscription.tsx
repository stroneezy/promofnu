import Layout from "../layouts/Layout";

const Subscription: React.FC = () => {
  return (
    <Layout>
      <div className="container-fluid p-0">
        <h1 className="mb-3">Subscription</h1>
        <div className="card">
          <div className="card-body">
            <form>
              <div className="row">
                <div className="col">
                  <h3 className="mb-3">
                    <i className="bi bi-globe"></i> Current subscription
                  </h3>
                  <h5>
                    <strong>Status:</strong> Free
                  </h5>
                  <h5>
                    <strong>Users:</strong> 4
                  </h5>
                </div>
                <div className="col">
                  <h3 className="mb-3">
                    <i className="bi bi-clipboard-check"></i> Subscription type
                  </h3>
                  <div className="input-group">
                    <select className="form-select valid">
                      <option value="Free">Free</option>
                      <option value="Standard">Standard</option>
                      <option value="Premium">Premium</option>
                    </select>
                  </div>
                  <div className="btn-row mt-4">
                    <button className="btn btn-primary" type="submit">
                      <i className="bi bi-credit-card"></i>
                      <span> Update</span>
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Subscription;
