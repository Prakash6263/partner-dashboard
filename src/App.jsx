import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
import ProtectedRoute from './components/ProtectedRoute'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import Appointments from './pages/Appointments'
import AddAppointment from './pages/AddAppointment'
import Customers from './pages/Customers'
import AddCustomer from './pages/AddCustomer'
import Services from './pages/Services'
import AddService from './pages/AddService'
import Providers from './pages/Providers'
import AddProvider from './pages/AddProvider'
import Payments from './pages/Payments'
import Subscription from './pages/Subscription'

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
          <Route path="/appointments" element={<ProtectedRoute><Appointments /></ProtectedRoute>} />
          <Route path="/add-appointment" element={<ProtectedRoute><AddAppointment /></ProtectedRoute>} />
          <Route path="/customers" element={<ProtectedRoute><Customers /></ProtectedRoute>} />
          <Route path="/add-customer" element={<ProtectedRoute><AddCustomer /></ProtectedRoute>} />
          <Route path="/services" element={<ProtectedRoute><Services /></ProtectedRoute>} />
          <Route path="/add-service" element={<ProtectedRoute><AddService /></ProtectedRoute>} />
          <Route path="/providers" element={<ProtectedRoute><Providers /></ProtectedRoute>} />
          <Route path="/add-provider" element={<ProtectedRoute><AddProvider /></ProtectedRoute>} />
          <Route path="/payments" element={<ProtectedRoute><Payments /></ProtectedRoute>} />
          <Route path="/subscription" element={<ProtectedRoute><Subscription /></ProtectedRoute>} />
        </Routes>
      </AuthProvider>
    </Router>
  )
}

export default App
