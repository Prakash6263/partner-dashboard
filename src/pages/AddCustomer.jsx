import { Link } from 'react-router-dom'
import Sidebar from '../components/Sidebar'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function AddCustomer() {
  return (
    <div className="admin-app d-flex">
      <Sidebar />
      <div className="content w-100">
        <Header title="Partner Panel" />
        <main className="p-3">
          <div className="card mb-3">
            <div className="card-header d-flex justify-content-between align-items-center">
              <strong>Add Customer</strong>
              <div>
                <Link to="/customers" className="btn btn-primary">
                  <i className="fa fa-eye"></i> View All
                </Link>
              </div>
            </div>

            <div className="card-body">
              <form className="row g-3">
                <div className="col-md-6">
                  <label className="form-label">Full Name</label>
                  <input type="text" className="form-control" placeholder="Customer name" />
                </div>
                <div className="col-md-6">
                  <label className="form-label">Phone</label>
                  <input type="text" className="form-control" placeholder="+91 9XXXXXXXXX" />
                </div>
                <div className="col-md-6">
                  <label className="form-label">Email</label>
                  <input type="email" className="form-control" placeholder="email@example.com" />
                </div>
                <div className="col-md-6">
                  <label className="form-label">Gender</label>
                  <select className="form-select">
                    <option>Male</option>
                    <option>Female</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="col-md-6">
                  <label className="form-label">Date of Birth</label>
                  <input type="date" className="form-control" />
                </div>
                <div className="col-md-6">
                  <label className="form-label">Status</label>
                  <select className="form-select">
                    <option>Active</option>
                    <option>Inactive</option>
                  </select>
                </div>
                <div className="col-12">
                  <button className="btn btn-success mt-2">Save Customer</button>
                </div>
              </form>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  )
}
