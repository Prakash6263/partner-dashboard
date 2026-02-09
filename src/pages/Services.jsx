import { Link } from 'react-router-dom'
import Sidebar from '../components/Sidebar'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Services() {
  return (
    <div className="admin-app d-flex">
      <Sidebar />
      <div className="content w-100">
        <Header title="Partner Panel" />
        <main className="p-3">
          <div className="card mb-3">
            <div className="card-header d-flex justify-content-between align-items-center">
              <strong>Service List</strong>
              <div>
                <Link to="/add-service" className="btn btn-primary"><i className="fa fa-plus"></i> Add New Service</Link>
              </div>
            </div>
            <div className="table-responsive">
              <table className="table table-hover align-middle datatable">
                <thead>
                  <tr>
                    <th>Service</th>
                    <th>Category</th>
                    <th>Duration</th>
                    <th>Price</th>
                    <th>Providers</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Consultation</td>
                    <td>Medical</td>
                    <td>30 min</td>
                    <td>₹500</td>
                    <td>Dr. Ravi</td>
                    <td><span className="badge bg-success">Active</span></td>
                  </tr>
                  <tr>
                    <td>Therapy Session</td>
                    <td>Therapy</td>
                    <td>60 min</td>
                    <td>₹1,200</td>
                    <td>Dr. Anita</td>
                    <td><span className="badge bg-success">Active</span></td>
                  </tr>
                  <tr>
                    <td>Health Checkup</td>
                    <td>Medical</td>
                    <td>45 min</td>
                    <td>₹800</td>
                    <td>Dr. Ravi</td>
                    <td><span className="badge bg-warning">Inactive</span></td>
                  </tr>
                  <tr>
                    <td>Follow-up</td>
                    <td>Medical</td>
                    <td>20 min</td>
                    <td>₹300</td>
                    <td>Dr. Karan</td>
                    <td><span className="badge bg-success">Active</span></td>
                  </tr>
                  <tr>
                    <td>Wellness Consultation</td>
                    <td>Wellness</td>
                    <td>40 min</td>
                    <td>₹700</td>
                    <td>Dr. Anita</td>
                    <td><span className="badge bg-success">Active</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}
