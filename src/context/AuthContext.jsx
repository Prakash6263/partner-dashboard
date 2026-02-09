'use client';

import { createContext, useState, useContext, useEffect } from 'react'
import { authAPI } from '../api/auth'

const AuthContext = createContext()

export function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [loading, setLoading] = useState(true)
  const [user, setUser] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    const authToken = localStorage.getItem('authToken')
    if (authToken) {
      validateToken(authToken)
    } else {
      setLoading(false)
    }
  }, [])

  const validateToken = async (token) => {
    try {
      const response = await authAPI.getProfile(token)
      if (response.success && response.partner) {
        setUser(response.partner)
        setIsAuthenticated(true)
      } else {
        localStorage.removeItem('authToken')
        setIsAuthenticated(false)
      }
    } catch (err) {
      console.error('Token validation failed:', err)
      localStorage.removeItem('authToken')
      setIsAuthenticated(false)
    } finally {
      setLoading(false)
    }
  }

  const login = async (email, password) => {
    try {
      setError(null)
      const response = await authAPI.login(email, password)
      
      if (!response.success) {
        throw new Error(response.message || 'Login failed')
      }

      const { token, partner } = response
      localStorage.setItem('authToken', token)
      localStorage.setItem('userEmail', email)
      setUser(partner)
      setIsAuthenticated(true)
      return response
    } catch (err) {
      const errorMessage = err.message || 'Login failed. Please try again.'
      setError(errorMessage)
      throw err
    }
  }

  const logout = async () => {
    try {
      const token = localStorage.getItem('authToken')
      if (token) {
        await authAPI.logout(token)
      }
    } catch (err) {
      console.error('Logout API error:', err)
    } finally {
      localStorage.removeItem('authToken')
      localStorage.removeItem('userEmail')
      setUser(null)
      setIsAuthenticated(false)
      setError(null)
    }
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, loading, login, logout, user, error }}>
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
