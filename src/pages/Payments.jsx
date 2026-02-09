import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Payments() {
  return (
    <div className="admin-app d-flex">
      <Sidebar />
      <div className="content w-100">
        <Header title="Partner Panel" />
        <main className="p-3">
          <div className="card mb-3">
            <div className="card-header d-flex justify-content-between align-items-center">
              <strong>Payments</strong>
            </div>
            <div className="table-responsive">
              <table className="table table-hover align-middle datatable">
                <thead>
                  <tr>
                    <th>Transaction ID</th>
                    <th>Customer</th>
                    <th>Service</th>
                    <th>Amount</th>
                    <th>Method</th>
                    <th>Date</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>#TXN10231</td>
                    <td>Amit Sharma</td>
                    <td>Consultation</td>
                    <td>₹500</td>
                    <td>UPI</td>
                    <td>15 Jan 2026</td>
                    <td><span className="badge bg-success">Paid</span></td>
                  </tr>
                  <tr>
                    <td>#TXN10232</td>
                    <td>Neha Verma</td>
                    <td>Therapy</td>
                    <td>₹1,200</td>
                    <td>Card</td>
                    <td>14 Jan 2026</td>
                    <td><span className="badge bg-success">Paid</span></td>
                  </tr>
                  <tr>
                    <td>#TXN10233</td>
                    <td>Rahul Mehta</td>
                    <td>Checkup</td>
                    <td>₹800</td>
                    <td>Cash</td>
                    <td>14 Jan 2026</td>
                    <td><span className="badge bg-warning">Pending</span></td>
                  </tr>
                  <tr>
                    <td>#TXN10234</td>
                    <td>Pooja Singh</td>
                    <td>Follow-up</td>
                    <td>₹300</td>
                    <td>UPI</td>
                    <td>13 Jan 2026</td>
                    <td><span className="badge bg-success">Paid</span></td>
                  </tr>
                  <tr>
                    <td>#TXN10235</td>
                    <td>Vikas Jain</td>
                    <td>Consultation</td>
                    <td>₹500</td>
                    <td>Card</td>
                    <td>12 Jan 2026</td>
                    <td><span className="badge bg-danger">Failed</span></td>
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
