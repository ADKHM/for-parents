import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { useAuth } from '../../../context/AuthContext';
import { gsap } from 'gsap';

const SignIn = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  
  const { login, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  
  const containerRef = useRef(null);
  const formRef = useRef(null);
  const titleRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const buttonRef = useRef(null);
  const backgroundRef = useRef(null);

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/');
      return;
    }

    // Initial animations
    const tl = gsap.timeline();
    
    tl.fromTo(backgroundRef.current, 
      { opacity: 0, scale: 1.1 },
      { opacity: 1, scale: 1, duration: 0.8, ease: "power2.out" }
    )
    .fromTo(titleRef.current,
      { opacity: 0, y: -50, rotationX: -90 },
      { opacity: 1, y: 0, rotationX: 0, duration: 0.6, ease: "back.out(1.7)" },
      "-=0.4"
    )
    .fromTo(formRef.current,
      { opacity: 0, y: 100, scale: 0.8 },
      { opacity: 1, y: 0, scale: 1, duration: 0.6, ease: "back.out(1.7)" },
      "-=0.3"
    );

    // Floating animation for background elements
    gsap.to(".floating-element", {
      y: -20,
      duration: 2,
      ease: "power2.inOut",
      yoyo: true,
      repeat: -1,
      stagger: 0.2
    });
  }, [isAuthenticated, navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
    
    // Animate input focus
    const input = e.target;
    if (value && !errors[name]) {
      gsap.to(input, { scale: 1.02, duration: 0.2 });
    } else {
      gsap.to(input, { scale: 1, duration: 0.2 });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsLoading(true);
    
    // Button loading animation
    gsap.to(buttonRef.current, { scale: 0.95, duration: 0.1 });
    
    try {
      const result = await login(formData.email, formData.password);
      
      if (result.success) {
        // Success animation
        gsap.to(formRef.current, {
          scale: 0.9,
          opacity: 0.8,
          duration: 0.3,
          ease: "power2.in"
        });
        
        gsap.to(formRef.current, {
          scale: 1,
          opacity: 1,
          duration: 0.5,
          ease: "back.out(1.7)",
          delay: 0.3
        });
        
        setTimeout(() => {
          navigate('/');
        }, 1000);
      } else {
        // Error animation
        gsap.to(formRef.current, {
          x: -10,
          duration: 0.1,
          ease: "power2.in",
          repeat: 5,
          yoyo: true
        });
        
        setErrors({ general: result.error });
      }
    } catch (error) {
      setErrors({ general: 'An unexpected error occurred' });
    } finally {
      setIsLoading(false);
      gsap.to(buttonRef.current, { scale: 1, duration: 0.1 });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 relative overflow-hidden flex items-center justify-center" ref={containerRef}>
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="floating-element absolute top-20 left-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="floating-element absolute top-40 right-20 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
        <div className="floating-element absolute bottom-20 left-40 w-80 h-80 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-2000"></div>
      </div>

      {/* Background Image */}
      <div 
        ref={backgroundRef}
        className="absolute inset-0 bg-cover bg-center opacity-10"
        style={{ backgroundImage: 'url(/image.png)' }}
      ></div>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-md mx-4">
        {/* Header */}
        <div className="text-center mb-8">
          <Link to="/" className="inline-block">
            <img src="/image.png" alt="Logo" className="w-32 h-10 mx-auto mb-6 filter brightness-0 invert" />
          </Link>
          <h1 
            ref={titleRef}
            className="text-4xl font-bold text-white mb-2 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
          >
            Welcome Back
          </h1>
          <p className="text-gray-300">Sign in to your account</p>
        </div>

        {/* Form */}
        <form 
          ref={formRef}
          onSubmit={handleSubmit}
          className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-white/20"
        >
          {errors.general && (
            <div className="mb-4 p-3 bg-red-500/20 border border-red-500/50 rounded-xl text-red-200 text-sm animate-pulse">
              {errors.general}
            </div>
          )}

          {/* Email Input */}
          <div className="mb-6">
            <label className="block text-white text-sm font-medium mb-2">
              Email Address
            </label>
            <div className="relative">
              <input
                ref={emailRef}
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-4 py-4 bg-white/10 border ${
                  errors.email ? 'border-red-500' : 'border-white/30'
                } rounded-2xl text-white placeholder-gray-300 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all duration-300 backdrop-blur-sm`}
                placeholder="Enter your email"
              />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 transition-opacity duration-300 pointer-events-none"></div>
            </div>
            {errors.email && <p className="mt-2 text-red-400 text-sm animate-pulse">{errors.email}</p>}
          </div>

          {/* Password Input */}
          <div className="mb-6">
            <label className="block text-white text-sm font-medium mb-2">
              Password
            </label>
            <div className="relative">
              <input
                ref={passwordRef}
                type={showPassword ? 'text' : 'password'}
                name="password"
                value={formData.password}
                onChange={handleChange}
                className={`w-full px-4 py-4 pr-12 bg-white/10 border ${
                  errors.password ? 'border-red-500' : 'border-white/30'
                } rounded-2xl text-white placeholder-gray-300 focus:outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 transition-all duration-300 backdrop-blur-sm`}
                placeholder="Enter your password"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-300 hover:text-white transition-colors"
              >
                {showPassword ? (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                )}
              </button>
            </div>
            {errors.password && <p className="mt-2 text-red-400 text-sm animate-pulse">{errors.password}</p>}
          </div>

          {/* Submit Button */}
          <button
            ref={buttonRef}
            type="submit"
            disabled={isLoading}
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-4 px-6 rounded-2xl hover:from-blue-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-blue-400/50 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl"
          >
            {isLoading ? (
              <div className="flex items-center justify-center">
                <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                Signing In...
              </div>
            ) : (
              'Sign In'
            )}
          </button>

          {/* Divider */}
          <div className="my-6 flex items-center">
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
            <span className="px-4 text-gray-300 text-sm">or</span>
            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
          </div>

          {/* Sign Up Link */}
          <div className="text-center">
            <p className="text-gray-300">
              Don't have an account?{' '}
              <Link 
                to="/signup" 
                className="text-blue-400 hover:text-blue-300 font-semibold transition-colors duration-300 hover:underline"
              >
                Sign up here
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
