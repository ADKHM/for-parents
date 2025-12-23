# Task: Add Animated SignIn/SignUp Page with Authentication

## Goal
Create a beautiful animated SignIn/SignUp page using GSAP and Tailwind CSS, integrate with authentication API, and manage login state across the application.

## Steps
1. **Create Auth Context and Provider**
   - Create authentication context for managing user login state
   - Add methods for login/logout
   - Store authentication tokens

2. **Create Authentication API Service**
   - Create service for API calls to https://69205f4131e684d7bfccc336.mockapi.io/react-auth/
   - Implement login and registration functions

3. **Create Animated Auth Pages**
   - Create SignIn page with beautiful GSAP animations
   - Create SignUp page with smooth transitions
   - Use Tailwind CSS for styling
   - Add form validation

4. **Update App Router**
   - Add routes for /signin and /signup
   - Protect routes if needed

5. **Update Header Component**
   - Remove "Войти" button when user is logged in
   - Add user menu or logout option when logged in

6. **Update Existing Pages**
   - Check for other "Войти" buttons in the project
   - Hide them when user is authenticated

7. **Test Authentication Flow**
   - Test login functionality
   - Test logout functionality
   - Verify UI updates based on auth state

## Files to Create/Modify
- `src/context/AuthContext.jsx` (new)
- `src/services/authService.js` (new)
- `src/components/pages/Auth/SignIn.jsx` (new)
- `src/components/pages/Auth/SignUp.jsx` (new)
- `src/components/pages/Partners/Header.jsx` (modify)
- `src/App.jsx` (modify)

## API Integration
- Base URL: https://69205f4131e684d7bfccc336.mockapi.io/react-auth/
- Expected endpoints for login and registration
