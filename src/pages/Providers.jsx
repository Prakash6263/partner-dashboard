import { Link } from 'react-router-dom'
import Sidebar from '../components/Sidebar'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Providers() {
  return (
    <div className="admin-app d-flex">
      <Sidebar />
      <div className="content w-100">
        <Header title="Partner Panel" />
        <main className="p-3">
          <div className="card mb-3">
            <div className="card-header d-flex justify-content-between align-items-center">
              <strong>Service Provider List</strong>
              <div>
                <Link to="/add-provider" className="btn btn-primary"><i className="fa fa-plus"></i> Add New Provider</Link>
              </div>
            </div>
            <div className="table-responsive">
              <table className="table table-hover align-middle datatable">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Role</th>
                    <th>Phone</th>
                    <th>Email</th>
                    <th>Commission</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Dr. Ravi Kumar</td>
                    <td>Doctor</td>
                    <td>+91 9876543210</td>
                    <td>ravi@example.com</td>
                    <td>15%</td>
                    <td><span className="badge bg-success">Active</span></td>
                  </tr>
                  <tr>
                    <td>Dr. Anita Verma</td>
                    <td>Therapist</td>
                    <td>+91 9823456712</td>
                    <td>anita@example.com</td>
                    <td>12%</td>
                    <td><span className="badge bg-success">Active</span></td>
                  </tr>
                  <tr>
                    <td>Dr. Karan Shah</td>
                    <td>Doctor</td>
                    <td>+91 9786541230</td>
                    <td>karan@example.com</td>
                    <td>10%</td>
                    <td><span className="badge bg-warning">Inactive</span></td>
                  </tr>
                  <tr>
                    <td>Neha Singh</td>
                    <td>Assistant</td>
                    <td>+91 9765432109</td>
                    <td>neha@example.com</td>
                    <td>5%</td>
                    <td><span className="badge bg-success">Active</span></td>
                  </tr>
                  <tr>
                    <td>Rahul Mehta</td>
                    <td>Therapist</td>
                    <td>+91 9812345678</td>
                    <td>rahul@example.com</td>
                    <td>12%</td>
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
