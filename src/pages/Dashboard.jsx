import { useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Dashboard() {
  console.log("Chart loaded:", Chart);
  const revenueChartRef = useRef(null);
  const bookingChartRef = useRef(null);
  const revenueCanvasRef = useRef(null);
  const bookingCanvasRef = useRef(null);

useEffect(() => {
  if (!revenueCanvasRef.current || !bookingCanvasRef.current) return;

  if (revenueChartRef.current) {
    revenueChartRef.current.destroy();
  }
  if (bookingChartRef.current) {
    bookingChartRef.current.destroy();
  }

  const revCtx = revenueCanvasRef.current.getContext("2d");
  const bookCtx = bookingCanvasRef.current.getContext("2d");

  revenueChartRef.current = new Chart(revCtx, {
    type: "line",
    data: {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
      datasets: [
        {
          label: "Revenue (₹)",
          data: [120000, 150000, 180000, 210000, 240000, 280000],
          borderWidth: 3,
          tension: 0.4,
          fill: true
        }
      ]
    },
    options: {
      responsive: true,
      plugins: {
        legend: { display: false }
      }
    }
  });

  bookingChartRef.current = new Chart(bookCtx, {
    type: "bar",
    data: {
      labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      datasets: [
        {
          label: "Bookings",
          data: [25, 32, 28, 40, 45, 55, 30]
        }
      ]
    },
    options: {
      responsive: true,
      plugins: {
        legend: { display: false }
      }
    }
  });

  return () => {
    if (revenueChartRef.current) {
      revenueChartRef.current.destroy();
    }
    if (bookingChartRef.current) {
      bookingChartRef.current.destroy();
    }
  };
}, []);

  return (
    <div className="admin-app d-flex">
      <Sidebar />
      <div className="content w-100">
        <Header title="Partner Panel" />
        <main className="p-3">
          <section id="dashboard" className="mb-4">
            <div className="row g-4">
              <div className="col-md-3">
                <div className="card bg-primary">
                  <div className="card-body">
                    <p className="text-white">Total Bookings</p>
                    <h4 className="text-white">1,284</h4>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="card bg-warning">
                  <div className="card-body">
                    <p className="text-white">Monthly Revenue</p>
                    <h4 className="text-white">₹3,42,000</h4>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="card bg-success">
                  <div className="card-body">
                    <p className="text-white">Active Customers</p>
                    <h4 className="text-white">892</h4>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="card bg-info">
                  <div className="card-body">
                    <p className="text-white">Staff Members</p>
                    <h4 className="text-white">14</h4>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section id="analytics" className="mb-4">
            <div className="row mt-4 g-4">
<div className="col-md-7">
  <div className="card p-4">
    <h6 className="fw-semibold mb-3">Revenue Trend</h6>
    <canvas ref={revenueCanvasRef} id="revenueChart"></canvas>
  </div>
</div>
<div className="col-md-5">
  <div className="card p-4">
    <h6 className="fw-semibold mb-3">Weekly Bookings</h6>
    <canvas ref={bookingCanvasRef} id="bookingChart"></canvas>
  </div>
  </div>
            </div>

            <div className="card shadow-sm mt-4">
              <div className="card-body">
                <h6>Recent Appointments</h6>
                <table className="table table-bordered mt-3">
                  <thead className="table-light">
                    <tr>
                      <th>Customer</th>
                      <th>Service</th>
                      <th>Date</th>
                      <th>Provider</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Amit Sharma</td>
                      <td>Consultation</td>
                      <td>12 Jan 2026</td>
                      <td>Dr. Ravi</td>
                      <td><span className="badge bg-success">Completed</span></td>
                    </tr>
                    <tr>
                      <td>Neha Verma</td>
                      <td>Therapy</td>
                      <td>13 Jan 2026</td>
                      <td>Dr. Anita</td>
                      <td><span className="badge bg-primary">Booked</span></td>
                    </tr>
                    <tr>
                      <td>Rahul Mehta</td>
                      <td>Checkup</td>
                      <td>14 Jan 2026</td>
                      <td>Dr. Ravi</td>
                      <td><span className="badge bg-warning">Pending</span></td>
                    </tr>
                    <tr>
                      <td>Pooja Singh</td>
                      <td>Follow-up</td>
                      <td>15 Jan 2026</td>
                      <td>Dr. Karan</td>
                      <td><span className="badge bg-primary">Booked</span></td>
                    </tr>
                    <tr>
                      <td>Vikas Jain</td>
                      <td>Consultation</td>
                      <td>16 Jan 2026</td>
                      <td>Dr. Anita</td>
                      <td><span className="badge bg-success">Completed</span></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </div>
  );
}
