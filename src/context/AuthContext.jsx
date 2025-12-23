import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [token, setToken] = useState(localStorage.getItem('token'));

  useEffect(() => {
    // Check if user is already logged in
    const savedToken = localStorage.getItem('token');
    const savedUser = localStorage.getItem('user');
    
    if (savedToken && savedUser) {
      setToken(savedToken);
      setUser(JSON.parse(savedUser));
    }
    setIsLoading(false);
  }, []);


  const login = async (email, password) => {
    try {
      // Mock authentication - simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Check for valid credentials (mock)
      const validCredentials = [
        { email: 'admin@test.com', password: 'password123' },
        { email: 'user@test.com', password: 'password123' },
        { email: 'test@example.com', password: 'password123' }
      ];
      
      const isValid = validCredentials.some(cred => 
        cred.email === email && cred.password === password
      );
      
      if (isValid) {
        const userData = {
          id: Math.random().toString(36).substr(2, 9),
          email: email,
          name: email.split('@')[0],
          loginTime: new Date().toISOString()
        };
        
        const mockToken = `mock_token_${Date.now()}`;
        
        setUser(userData);
        setToken(mockToken);
        localStorage.setItem('token', mockToken);
        localStorage.setItem('user', JSON.stringify(userData));
        return { success: true };
      } else {
        return { success: false, error: 'Invalid email or password' };
      }
    } catch (error) {
      return { success: false, error: 'Network error occurred' };
    }
  };


  const register = async (email, password, name) => {
    try {
      // Mock registration - simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Simple email validation
      if (!email || !email.includes('@')) {
        return { success: false, error: 'Please enter a valid email address' };
      }
      
      // Simple password validation
      if (!password || password.length < 6) {
        return { success: false, error: 'Password must be at least 6 characters long' };
      }
      
      // Simple name validation
      if (!name || name.trim().length < 2) {
        return { success: false, error: 'Please enter a valid name' };
      }
      
      // Simulate successful registration
      const userData = {
        id: Math.random().toString(36).substr(2, 9),
        email: email,
        name: name.trim(),
        registrationTime: new Date().toISOString()
      };
      
      const mockToken = `mock_token_${Date.now()}`;
      
      setUser(userData);
      setToken(mockToken);
      localStorage.setItem('token', mockToken);
      localStorage.setItem('user', JSON.stringify(userData));
      return { success: true };
      
    } catch (error) {
      return { success: false, error: 'Network error occurred' };
    }
  };

  const logout = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  };

  const value = {
    user,
    token,
    isLoading,
    login,
    register,
    logout,
    isAuthenticated: !!user
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};
