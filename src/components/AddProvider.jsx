import { Link } from 'react-router-dom'
import Sidebar from './Sidebar'
import Header from './Header'
import Footer from './Footer'

export default function AddProvider() {
  return (
    <div className="admin-app d-flex">
      <Sidebar />
      <div className="content w-100">
        <Header title="Partner Panel" />
        <main className="p-3">
          <div className="card mb-3">
            <div className="card-header d-flex justify-content-between align-items-center">
              <strong>Add New Provider</strong>
              <div>
                <a href="#providers" className="btn btn-primary">
                  <i className="fa fa-eye"></i> View All
                </a>
              </div>
            </div>

            <div className="card-body">
              <form className="row g-3">
                <div className="col-md-12">
                  <label className="form-label">Full Name</label>
                  <input type="text" className="form-control" placeholder="Provider name" />
                </div>
                <div className="col-md-6">
                  <label className="form-label">Role</label>
                  <select className="form-select">
                    <option>Doctor</option>
                    <option>Therapist</option>
                    <option>Assistant</option>
                  </select>
                </div>
                <div className="col-md-6">
                  <label className="form-label">Phone</label>
                  <input type="text" className="form-control" placeholder="" />
                </div>
                <div className="col-md-6">
                  <label className="form-label">Email</label>
                  <input type="email" className="form-control" placeholder="" />
                </div>
                <div className="col-md-6">
                  <label className="form-label">Commission (%)</label>
                  <input type="number" className="form-control" placeholder="" />
                </div>
                <div className="col-md-6">
                  <label className="form-label">Status</label>
                  <select className="form-select">
                    <option>Active</option>
                    <option>Inactive</option>
                  </select>
                </div>
                <div className="col-12">
                  <button className="btn btn-success mt-2">Submit</button>
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
