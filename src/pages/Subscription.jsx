import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Subscription() {
  return (
    <div className="admin-app d-flex">
      <Sidebar />
      <div className="content w-100">
        <Header title="Partner Panel" />
        <main className="p-3">
          <div className="mb-4">
            <h4 className="fw-bold">Subscription</h4>
            <small className="text-muted mb-0">Manage your plan and billing</small>
          </div>

          <div className="card p-4 mb-4">
            <h6 className="fw-semibold mb-3">Current Plan</h6>
            <div className="row align-items-center">
              <div className="col-md-8">
                <h5 className="mb-1">Professional Plan</h5>
                <p className="text-muted mb-0">
                  ₹2,999 / month · Unlimited bookings · Priority support
                </p>
              </div>
              <div className="col-md-4 text-md-end mt-3 mt-md-0">
                <button className="btn btn-outline-primary">Upgrade Plan</button>
              </div>
            </div>
          </div>

          <div className="card p-4 mb-4">
            <h6 className="fw-semibold mb-3">Usage This Month</h6>
            <div className="row g-4">
              <div className="col-md-4">
                <p className="mb-1 text-muted">Appointments</p>
                <div className="progress">
                  <div className="progress-bar" style={{ width: '70%' }}></div>
                </div>
                <small className="text-muted">700 / Unlimited</small>
              </div>
              <div className="col-md-4">
                <p className="mb-1 text-muted">Staff Members</p>
                <div className="progress">
                  <div className="progress-bar bg-success" style={{ width: '60%' }}></div>
                </div>
                <small className="text-muted">12 / Unlimited</small>
              </div>
              <div className="col-md-4">
                <p className="mb-1 text-muted">Customers</p>
                <div className="progress">
                  <div className="progress-bar bg-info" style={{ width: '80%' }}></div>
                </div>
                <small className="text-muted">850 / Unlimited</small>
              </div>
            </div>
          </div>

          <div className="card p-4">
            <h6 className="fw-semibold mb-3">Billing History</h6>
            <table className="table table-hover align-middle">
              <thead>
                <tr>
                  <th>Invoice</th>
                  <th>Plan</th>
                  <th>Amount</th>
                  <th>Billing Date</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>#INV-1025</td>
                  <td>Professional</td>
                  <td>₹2,999</td>
                  <td>01 Jan 2026</td>
                  <td><span className="badge bg-success">Paid</span></td>
                </tr>
                <tr>
                  <td>#INV-1024</td>
                  <td>Professional</td>
                  <td>₹2,999</td>
                  <td>01 Dec 2025</td>
                  <td><span className="badge bg-success">Paid</span></td>
                </tr>
                <tr>
                  <td>#INV-1023</td>
                  <td>Professional</td>
                  <td>₹2,999</td>
                  <td>01 Nov 2025</td>
                  <td><span className="badge bg-success">Paid</span></td>
                </tr>
                <tr>
                  <td>#INV-1022</td>
                  <td>Professional</td>
                  <td>₹2,999</td>
                  <td>01 Oct 2025</td>
                  <td><span className="badge bg-success">Paid</span></td>
                </tr>
                <tr>
                  <td>#INV-1021</td>
                  <td>Starter</td>
                  <td>₹999</td>
                  <td>01 Sep 2025</td>
                  <td><span className="badge bg-success">Paid</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}
