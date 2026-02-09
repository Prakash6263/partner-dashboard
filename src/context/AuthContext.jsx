'use client';

import { createContext, useState, useContext, useEffect } from 'react'

const AuthContext = createContext()

export function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const authToken = localStorage.getItem('authToken')
    if (authToken) {
      setIsAuthenticated(true)
    }
    setLoading(false)
  }, [])

  const login = (email, password) => {
    localStorage.setItem('authToken', 'user_token_' + Date.now())
    localStorage.setItem('userEmail', email)
    setIsAuthenticated(true)
    return true
  }

  const logout = () => {
    localStorage.removeItem('authToken')
    localStorage.removeItem('userEmail')
    setIsAuthenticated(false)
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider')
  }
  return context
}
