import Layout from "../layouts/Layout";

const Home: React.FC = () => {
  return (
    <Layout>
      <div className="container-fluid p-0">
        <h1 className="h3 mb-3">
          <strong>Dashboard</strong>
        </h1>
        <div className="row">
          <div className="col-12 col-lg-8 col-xxl-9 d-flex">
            <div className="card flex-fill">
              <div className="card-header">
                <h5 className="card-title mb-0">Latest Flyers</h5>
              </div>
              <table className="table table-hover my-0">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th className="d-none d-xl-table-cell">Start Date</th>
                    <th className="d-none d-xl-table-cell">End Date</th>
                    <th>Status</th>
                    <th className="d-none d-md-table-cell">Assignee</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>New years flyer</td>
                    <td className="d-none d-xl-table-cell">01/01/2023</td>
                    <td className="d-none d-xl-table-cell">31/06/2023</td>
                    <td>
                      <span className="badge bg-warning">In progress</span>
                    </td>
                    <td className="d-none d-md-table-cell">Vanessa Tucker</td>
                  </tr>
                  <tr>
                    <td>Boxing day flyer</td>
                    <td className="d-none d-xl-table-cell">01/01/2023</td>
                    <td className="d-none d-xl-table-cell">31/06/2023</td>
                    <td>
                      <span className="badge bg-success">Done</span>
                    </td>
                    <td className="d-none d-md-table-cell">William Harris</td>
                  </tr>
                  <tr>
                    <td>Christmas flyer</td>
                    <td className="d-none d-xl-table-cell">01/01/2023</td>
                    <td className="d-none d-xl-table-cell">31/06/2023</td>
                    <td>
                      <span className="badge bg-success">Done</span>
                    </td>
                    <td className="d-none d-md-table-cell">Sharon Lessman</td>
                  </tr>
                  <tr>
                    <td>December flyer</td>
                    <td className="d-none d-xl-table-cell">01/01/2023</td>
                    <td className="d-none d-xl-table-cell">31/06/2023</td>
                    <td>
                      <span className="badge bg-warning">Draft</span>
                    </td>
                    <td className="d-none d-md-table-cell">Vanessa Tucker</td>
                  </tr>
                  <tr>
                    <td>Black friday flyer</td>
                    <td className="d-none d-xl-table-cell">01/01/2023</td>
                    <td className="d-none d-xl-table-cell">31/06/2023</td>
                    <td>
                      <span className="badge bg-success">Done</span>
                    </td>
                    <td className="d-none d-md-table-cell">William Harris</td>
                  </tr>
                  <tr>
                    <td>November flyer</td>
                    <td className="d-none d-xl-table-cell">01/01/2023</td>
                    <td className="d-none d-xl-table-cell">31/06/2023</td>
                    <td>
                      <span className="badge bg-success">Done</span>
                    </td>
                    <td className="d-none d-md-table-cell">Sharon Lessman</td>
                  </tr>
                  <tr>
                    <td>Fall flyer</td>
                    <td className="d-none d-xl-table-cell">01/01/2023</td>
                    <td className="d-none d-xl-table-cell">31/06/2023</td>
                    <td>
                      <span className="badge bg-success">Done</span>
                    </td>
                    <td className="d-none d-md-table-cell">Christina Mason</td>
                  </tr>
                  <tr>
                    <td>Thanksgiving flyer</td>
                    <td className="d-none d-xl-table-cell">01/01/2023</td>
                    <td className="d-none d-xl-table-cell">31/06/2023</td>
                    <td>
                      <span className="badge bg-success">Done</span>
                    </td>
                    <td className="d-none d-md-table-cell">William Harris</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
