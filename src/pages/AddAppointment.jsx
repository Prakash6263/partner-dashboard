import { Link } from 'react-router-dom'
import Sidebar from '../components/Sidebar'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function AddAppointment() {
  return (
    <div className="admin-app d-flex">
      <Sidebar />
      <div className="content w-100">
        <Header title="Admin Panel" />
        <main className="p-3">
          <div className="card mb-3">
            <div className="card-header d-flex justify-content-between align-items-center">
              <strong>Add Appointment</strong>
              <div>
                <Link to="/appointments" className="btn btn-primary">
                  <i className="fa fa-eye"></i> View All
                </Link>
              </div>
            </div>

            <div className="card-body">
              <form className="row g-3">
                <div className="col-md-6">
                  <label className="form-label">Customer</label>
                  <input type="text" className="form-control" placeholder="Customer name" />
                </div>
                <div className="col-md-6">
                  <label className="form-label">Service</label>
                  <select className="form-select">
                    <option>Consultation</option>
                    <option>Therapy</option>
                    <option>Checkup</option>
                  </select>
                </div>
                <div className="col-md-6">
                  <label className="form-label">Provider</label>
                  <select className="form-select">
                    <option>Dr. Ravi</option>
                    <option>Dr. Anita</option>
                    <option>Dr. Karan</option>
                  </select>
                </div>
                <div className="col-md-6">
                  <label className="form-label">Date</label>
                  <input type="date" className="form-control" />
                </div>
                <div className="col-md-6">
                  <label className="form-label">Time</label>
                  <input type="time" className="form-control" />
                </div>
                <div className="col-md-6">
                  <label className="form-label">Status</label>
                  <select className="form-select">
                    <option>Booked</option>
                    <option>Completed</option>
                    <option>Cancelled</option>
                  </select>
                </div>
                <div className="col-12">
                  <button className="btn btn-success mt-2">Save Appointment</button>
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
