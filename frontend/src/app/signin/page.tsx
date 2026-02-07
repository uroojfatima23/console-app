'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';

export default function SigninPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:8000'}/auth/login`,
        {
          username: email, // Backend treats username as email
          password
        },
        {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          }
        }
      );

      // Store the token
      localStorage.setItem('access_token', response.data.access_token);

      // Fetch user profile and store user data
      try {
        const { fetchAndStoreUserProfile } = await import('../../lib/auth');
        await fetchAndStoreUserProfile();
      } catch (profileError) {
        console.error('Error fetching user profile:', profileError);
        // Continue to dashboard even if profile fetch fails
      }

      // Redirect to main page
      router.push('/dashboard');
    } catch (err) {
      setError('Invalid email or password');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#faf5ef] via-[#f5ede3] to-[#f0e5d8] relative overflow-hidden">
      {/* Decorative stars */}
      <div className="absolute top-12 left-16 text-[#d4a574] opacity-30 text-3xl">✦</div>
      <div className="absolute top-32 right-24 text-[#d4a574] opacity-30 text-2xl">✦</div>
      <div className="absolute bottom-24 left-32 text-[#d4a574] opacity-30 text-3xl">✦</div>
      <div className="absolute bottom-12 right-16 text-[#d4a574] opacity-30 text-2xl">✦</div>

      {/* Cookie decorations */}
      <div className="absolute top-20 left-1/4 hidden lg:block">
        <div className="w-16 h-16 rounded-full bg-[#d4a574] relative opacity-40">
          <div className="absolute inset-2 rounded-full bg-[#c9985f]"></div>
          <div className="absolute top-4 left-5 w-2 h-2 rounded-full bg-[#8b6f47]"></div>
          <div className="absolute top-7 left-6 w-2 h-2 rounded-full bg-[#8b6f47]"></div>
          <div className="absolute top-9 left-3 w-2 h-2 rounded-full bg-[#8b6f47]"></div>
        </div>
      </div>

      <div className="absolute bottom-32 right-1/4 hidden lg:block">
        <div className="w-14 h-14 rounded-full bg-[#d4a574] relative opacity-40">
          <div className="absolute inset-2 rounded-full bg-[#c9985f]"></div>
          <div className="absolute top-3 left-4 w-2 h-2 rounded-full bg-[#8b6f47]"></div>
          <div className="absolute top-6 left-5 w-2 h-2 rounded-full bg-[#8b6f47]"></div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-md w-full mx-4 relative z-10">
        {/* Sign In Card */}
        <div className="bg-white/80 backdrop-blur-sm p-10 rounded-3xl shadow-xl border border-[#e8dcc8]">
          {/* Header with Bear Icon */}
          <div className="flex flex-col items-center mb-8">
            {/* Mini Bear Icon */}
            <div className="w-16 h-16 mb-4">
              <div className="absolute inset-0 bg-[#a67c52] rounded-full w-16 h-16"></div>
              {/* Left ear */}
              <div className="absolute -top-1 left-3 w-6 h-6 bg-[#a67c52] rounded-full">
                <div className="absolute inset-1 bg-[#8b6f47] rounded-full"></div>
              </div>
              {/* Right ear */}
              <div className="absolute -top-1 right-3 w-6 h-6 bg-[#a67c52] rounded-full">
                <div className="absolute inset-1 bg-[#8b6f47] rounded-full"></div>
              </div>
              {/* Belly */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-10 h-12 bg-[#e8d4b8] rounded-t-full"></div>
              {/* Eyes */}
              <div className="absolute top-5 left-1/2 -translate-x-1/2 flex gap-2">
                <div className="w-1.5 h-1.5 bg-[#4a3829] rounded-full"></div>
                <div className="w-1.5 h-1.5 bg-[#4a3829] rounded-full"></div>
              </div>
              {/* Nose */}
              <div className="absolute top-7 left-1/2 -translate-x-1/2 w-2 h-1.5 bg-[#4a3829] rounded-full"></div>
            </div>

            <h1 
              className="text-3xl font-bold text-[#5a4a3a]"
              style={{ fontFamily: 'Quicksand, sans-serif' }}
            >
              Welcome Back!
            </h1>
            <p className="text-[#7a6a5a] mt-2">Sign in to your planner</p>
          </div>

          {/* Error Message */}
          {error && (
            <div className="mb-6 p-4 bg-[#f0d9d5] border border-[#d4a89f] text-[#8b4a4a] rounded-2xl">
              <div className="flex items-center gap-2">
                <span>⚠️</span>
                <span>{error}</span>
              </div>
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit}>
            {/* Email Field */}
            <div className="mb-6">
              <label 
                htmlFor="email" 
                className="block text-sm font-semibold text-[#5a4a3a] mb-2"
                style={{ fontFamily: 'Quicksand, sans-serif' }}
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-3 border-2 border-[#e8dcc8] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#a67c52] focus:border-transparent bg-white/50 text-[#5a4a3a] placeholder-[#a89a8a]"
                placeholder="your@email.com"
                style={{ fontFamily: 'Quicksand, sans-serif' }}
              />
            </div>

            {/* Password Field */}
            <div className="mb-6">
              <label 
                htmlFor="password" 
                className="block text-sm font-semibold text-[#5a4a3a] mb-2"
                style={{ fontFamily: 'Quicksand, sans-serif' }}
              >
                Password
              </label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full px-4 py-3 border-2 border-[#e8dcc8] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#a67c52] focus:border-transparent bg-white/50 text-[#5a4a3a] placeholder-[#a89a8a]"
                placeholder="••••••••"
                style={{ fontFamily: 'Quicksand, sans-serif' }}
              />
            </div>

            {/* Forgot Password Link */}
            <div className="text-right mb-6">
              <a 
                href="/forgot-password" 
                className="text-sm text-[#a67c52] hover:text-[#8b6f47] font-medium"
                style={{ fontFamily: 'Quicksand, sans-serif' }}
              >
                Forgot password?
              </a>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className={`w-full py-4 px-6 rounded-xl text-white font-semibold shadow-lg transition-all duration-200 ${
                loading
                  ? 'bg-[#c9a687] cursor-not-allowed'
                  : 'bg-gradient-to-r from-[#a67c52] to-[#8b6f47] hover:shadow-xl hover:scale-105'
              }`}
              style={{ fontFamily: 'Quicksand, sans-serif' }}
            >
              {loading ? (
                <span className="flex items-center justify-center gap-2">
                  <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Signing in...
                </span>
              ) : (
                'Sign In'
              )}
            </button>
          </form>

          {/* Sign Up Link */}
          <div className="mt-6 text-center">
            <p className="text-[#7a6a5a]" style={{ fontFamily: 'Quicksand, sans-serif' }}>
              Don&apos;t have an account?{' '}
              <a 
                href="/signup" 
                className="text-[#a67c52] hover:text-[#8b6f47] font-semibold"
              >
                Sign up
              </a>
            </p>
          </div>
        </div>

        {/* Bottom decoration */}
        <div className="text-center mt-6 text-[#8a7a6a] text-sm" style={{ fontFamily: 'Quicksand, sans-serif' }}>
          <p>✨ Organize your life with ease ✨</p>
        </div>
      </div>

      {/* Add Google Font */}
      <link
        href="https://fonts.googleapis.com/css2?family=Quicksand:wght@400;500;600;700&display=swap"
        rel="stylesheet"
      />
    </div>
  );
}