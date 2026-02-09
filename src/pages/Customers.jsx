import { Link } from 'react-router-dom'
import Sidebar from '../components/Sidebar'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Customers() {
  return (
    <div className="admin-app d-flex">
      <Sidebar />
      <div className="content w-100">
        <Header title="Partner Panel" />
        <main className="p-3">
          <div className="card mb-3">
            <div className="card-header d-flex justify-content-between align-items-center">
              <strong>Customers List</strong>
              <div>
                <Link to="/add-customer" className="btn btn-primary"><i className="fa fa-plus"></i> Add Customer</Link>
              </div>
            </div>
            <div className="table-responsive">
              <table className="table table-hover align-middle datatable">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Phone</th>
                    <th>Email</th>
                    <th>Last Visit</th>
                    <th>Total Visits</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Amit Sharma</td>
                    <td>+91 9876543210</td>
                    <td>amit@example.com</td>
                    <td>15 Jan 2026</td>
                    <td>8</td>
                    <td><span className="badge bg-success">Active</span></td>
                  </tr>
                  <tr>
                    <td>Neha Verma</td>
                    <td>+91 9823456712</td>
                    <td>neha@example.com</td>
                    <td>13 Jan 2026</td>
                    <td>5</td>
                    <td><span className="badge bg-success">Active</span></td>
                  </tr>
                  <tr>
                    <td>Rahul Mehta</td>
                    <td>+91 9786541230</td>
                    <td>rahul@example.com</td>
                    <td>10 Jan 2026</td>
                    <td>3</td>
                    <td><span className="badge bg-warning">Inactive</span></td>
                  </tr>
                  <tr>
                    <td>Pooja Singh</td>
                    <td>+91 9765432109</td>
                    <td>pooja@example.com</td>
                    <td>14 Jan 2026</td>
                    <td>6</td>
                    <td><span className="badge bg-success">Active</span></td>
                  </tr>
                  <tr>
                    <td>Vikas Jain</td>
                    <td>+91 9812345678</td>
                    <td>vikas@example.com</td>
                    <td>12 Jan 2026</td>
                    <td>4</td>
                    <td><span className="badge bg-danger">Blocked</span></td>
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
