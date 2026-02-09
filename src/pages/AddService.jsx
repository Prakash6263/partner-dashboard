import { Link } from 'react-router-dom'
import Sidebar from '../components/Sidebar'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function AddService() {
  return (
    <div className="admin-app d-flex">
      <Sidebar />
      <div className="content w-100">
        <Header title="Partner Panel" />
        <main className="p-3">
          <div className="card mb-3">
            <div className="card-header d-flex justify-content-between align-items-center">
              <strong>Add New Service</strong>
              <div>
                <Link to="/services" className="btn btn-primary">
                  <i className="fa fa-eye"></i> View All
                </Link>
              </div>
            </div>

            <div className="card-body">
              <form className="row g-3">
                <div className="col-md-12">
                  <label className="form-label">Service Name</label>
                  <input type="text" className="form-control" placeholder="e.g. Consultation" />
                </div>
                <div className="col-md-6">
                  <label className="form-label">Category</label>
                  <select className="form-select">
                    <option>Medical</option>
                    <option>Wellness</option>
                    <option>Therapy</option>
                  </select>
                </div>
                <div className="col-md-6">
                  <label className="form-label">Duration (minutes)</label>
                  <input type="number" className="form-control" placeholder="30" />
                </div>
                <div className="col-md-6">
                  <label className="form-label">Price (₹)</label>
                  <input type="number" className="form-control" placeholder="500" />
                </div>
                <div className="col-md-6">
                  <label className="form-label">Assigned Staff</label>
                  <select className="form-select">
                    <option>Dr. Ravi</option>
                    <option>Dr. Anita</option>
                    <option>Dr. Karan</option>
                  </select>
                </div>
                <div className="col-md-6">
                  <label className="form-label">Status</label>
                  <select className="form-select">
                    <option>Active</option>
                    <option>Inactive</option>
                  </select>
                </div>
                <div className="col-12">
                  <button className="btn btn-success mt-2">Save Service</button>
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
