import Layout from "../layouts/Layout";

const Subscription: React.FC = () => {
  return (
    <Layout>
      <div className="container-fluid p-0">
        <h1 className="h3 mb-3">Subscription</h1>

        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="card-body m-sm-3 m-md-5">
                <div className="row mb-4">
                  <div className="col-md-6">
                    <div className="text-muted">Client</div>
                    <strong>Charles Hall</strong>
                    <p>
                      4183 Forest Avenue <br />
                      New York City <br />
                      10011 <br />
                      USA <br />
                      <a href="#">chris.wood@gmail.com</a>
                    </p>
                  </div>
                  <div className="col-md-6 text-md-end">
                    <div className="text-muted">Payment To</div>
                    <strong>AdminKit Demo LLC</strong>
                    <p>
                      354 Roy Alley <br />
                      Denver <br />
                      80202 <br />
                      USA <br />
                      <a href="#">info@adminkit.com</a>
                    </p>
                  </div>
                </div>

                <table className="table table-sm">
                  <thead>
                    <tr>
                      <th>Description</th>
                      <th>Quantity</th>
                      <th className="text-end">Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>AdminKit Demo Theme Customization</td>
                      <td>2</td>
                      <td className="text-end">$150.00</td>
                    </tr>
                    <tr>
                      <td>Monthly Subscription </td>
                      <td>3</td>
                      <td className="text-end">$25.00</td>
                    </tr>
                    <tr>
                      <td>Additional Service</td>
                      <td>1</td>
                      <td className="text-end">$100.00</td>
                    </tr>
                    <tr>
                      <th>&nbsp;</th>
                      <th>Subtotal </th>
                      <th className="text-end">$275.00</th>
                    </tr>
                    <tr>
                      <th>&nbsp;</th>
                      <th>Shipping </th>
                      <th className="text-end">$8.00</th>
                    </tr>
                    <tr>
                      <th>&nbsp;</th>
                      <th>Discount </th>
                      <th className="text-end">5%</th>
                    </tr>
                    <tr>
                      <th>&nbsp;</th>
                      <th>Total </th>
                      <th className="text-end">$268.85</th>
                    </tr>
                  </tbody>
                </table>

                <div className="text-center">
                  <p className="text-sm">
                    <strong>Extra note:</strong>
                    Please send all items at the same time to the shipping address. Thanks in advance.
                  </p>

                  <a href="#" className="btn btn-primary">
                    Print this receipt
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

export default Subscription;
