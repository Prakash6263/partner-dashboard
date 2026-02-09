import { Link } from 'react-router-dom'
import Sidebar from '../components/Sidebar'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function Appointments() {
  const appointments = [
    {
      id: 1,
      customer: 'Amit Sharma',
      service: 'Consultation',
      provider: 'Dr. Ravi',
      date: '12 Jan 2026',
      time: '10:00 AM',
      status: 'Booked',
      statusBg: 'bg-primary',
    },
    {
      id: 2,
      customer: 'Neha Verma',
      service: 'Therapy',
      provider: 'Dr. Anita',
      date: '13 Jan 2026',
      time: '11:30 AM',
      status: 'Completed',
      statusBg: 'bg-success',
    },
    {
      id: 3,
      customer: 'Rahul Mehta',
      service: 'Checkup',
      provider: 'Dr. Ravi',
      date: '14 Jan 2026',
      time: '01:00 PM',
      status: 'Pending',
      statusBg: 'bg-warning',
    },
    {
      id: 4,
      customer: 'Pooja Singh',
      service: 'Follow-up',
      provider: 'Dr. Karan',
      date: '15 Jan 2026',
      time: '03:30 PM',
      status: 'Booked',
      statusBg: 'bg-primary',
    },
    {
      id: 5,
      customer: 'Vikas Jain',
      service: 'Consultation',
      provider: 'Dr. Anita',
      date: '16 Jan 2026',
      time: '05:00 PM',
      status: 'Cancelled',
      statusBg: 'bg-danger',
    },
  ]

  return (
    <div className="admin-app d-flex">
      <Sidebar />
      <div className="content w-100">
        <Header title="Partner Panel" />
        <main className="p-3">
          <div className="card mb-3">
            <div className="card-header d-flex justify-content-between align-items-center">
              <strong>Appointments</strong>
              <Link to="/add-appointment" className="btn btn-primary">
                Add Appointment
              </Link>
            </div>
            <div className="table-responsive">
              <table className="table table-hover align-middle datatable">
                <thead>
                  <tr>
                    <th>Customer</th>
                    <th>Service</th>
                    <th>Provider</th>
                    <th>Date</th>
                    <th>Time</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {appointments.map((appointment) => (
                    <tr key={appointment.id}>
                      <td>{appointment.customer}</td>
                      <td>{appointment.service}</td>
                      <td>{appointment.provider}</td>
                      <td>{appointment.date}</td>
                      <td>{appointment.time}</td>
                      <td>
                        <span className={`badge ${appointment.statusBg}`}>{appointment.status}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </div>
  )
}
