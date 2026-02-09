import { Link } from 'react-router-dom'

export default function Sidebar() {
  return (
    <nav id="sidebar" className="sidebar text-white">
      <div className="sidebar-header p-3 d-flex align-items-center">
        <img src="/assets/images/logo.png" alt="logo" style={{ width: '150px' }} />
      </div>
      <ul className="nav flex-column px-2 pt-3">
        <li className="nav-item">
          <Link className="nav-link text-white" to="/">
            <i className="fa fa-home"></i> Dashboard
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" to="/appointments">
            <i className="fa fa-calendar"></i> Appointments
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" to="/services">
            <i className="fa fa-cog"></i> Services
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" to="/providers">
            <i className="fa fa-user-check"></i> Providers
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" to="/customers">
            <i className="fa fa-users"></i> Customers
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" to="/subscription">
            <i className="fa fa-id-card"></i> Subscription
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" to="/payments">
            <i className="fa fa-credit-card"></i> Payments
          </Link>
        </li>
        <li className="nav-item mt-3">
          <a className="nav-link text-white" href="/">
            <i className="fa fa-sign-in-alt"></i>
            <span className="nav-text">Logout</span>
          </a>
        </li>
      </ul>
    </nav>
  )
}
