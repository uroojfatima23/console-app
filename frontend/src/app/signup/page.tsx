'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';

export default function SignupPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    setError('');
    setLoading(true);

    try {
      await axios.post(
        `${process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:8000'}/auth/signup`,
        {
          email,
          password,
          name: name || undefined
        },
        {
          headers: {
            'Content-Type': 'application/json',
          }
        }
      );

      // Redirect to signin after successful signup
      router.push('/signin');
    } catch (err) {
      setError('Failed to create account. Email may already be registered.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#faf5ef] via-[#f5ede3] to-[#f0e5d8] relative overflow-hidden py-12">
      {/* Decorative stars */}
      <div className="absolute top-12 left-16 text-[#d4a574] opacity-30 text-3xl">✦</div>
      <div className="absolute top-32 right-24 text-[#d4a574] opacity-30 text-2xl">✦</div>
      <div className="absolute bottom-24 left-32 text-[#d4a574] opacity-30 text-3xl">✦</div>
      <div className="absolute bottom-12 right-16 text-[#d4a574] opacity-30 text-2xl">✦</div>

      {/* Cookie decorations */}
      <div className="absolute top-20 right-1/4 hidden lg:block">
        <div className="w-16 h-16 rounded-full bg-[#d4a574] relative opacity-40">
          <div className="absolute inset-2 rounded-full bg-[#c9985f]"></div>
          <div className="absolute top-4 left-5 w-2 h-2 rounded-full bg-[#8b6f47]"></div>
          <div className="absolute top-7 left-6 w-2 h-2 rounded-full bg-[#8b6f47]"></div>
          <div className="absolute top-9 left-3 w-2 h-2 rounded-full bg-[#8b6f47]"></div>
        </div>
      </div>

      <div className="absolute bottom-32 left-1/4 hidden lg:block">
        <div className="w-14 h-14 rounded-full bg-[#d4a574] relative opacity-40">
          <div className="absolute inset-2 rounded-full bg-[#c9985f]"></div>
          <div className="absolute top-3 left-4 w-2 h-2 rounded-full bg-[#8b6f47]"></div>
          <div className="absolute top-6 left-5 w-2 h-2 rounded-full bg-[#8b6f47]"></div>
        </div>
      </div>

      {/* Book decoration */}
      <div className="absolute top-1/3 left-12 hidden xl:block opacity-40">
        <div className="relative w-16 h-14">
          <div className="absolute inset-0 bg-white border-2 border-[#8b6f47] rounded-r-lg">
            <div className="absolute inset-1 flex flex-col gap-1 p-1">
              <div className="h-0.5 bg-[#d4a574] rounded w-3/4"></div>
              <div className="h-0.5 bg-[#d4a574] rounded w-full"></div>
              <div className="h-0.5 bg-[#d4a574] rounded w-2/3"></div>
            </div>
          </div>
          <div className="absolute left-0 top-0 bottom-0 w-2 bg-[#8b6f47] rounded-l-lg"></div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-md w-full mx-4 relative z-10">
        {/* Sign Up Card */}
        <div className="bg-white/80 backdrop-blur-sm p-10 rounded-3xl shadow-xl border border-[#e8dcc8]">
          {/* Header with Bear Icon */}
          <div className="flex flex-col items-center mb-8">
            {/* Mini Bear Icon */}
            <div className="w-16 h-16 mb-4 relative">
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
              Join My Planner
            </h1>
            <p className="text-[#7a6a5a] mt-2">Create your account to get started</p>
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
            {/* Name Field */}
            <div className="mb-5">
              <label 
                htmlFor="name" 
                className="block text-sm font-semibold text-[#5a4a3a] mb-2"
                style={{ fontFamily: 'Quicksand, sans-serif' }}
              >
                Name <span className="text-[#a89a8a] font-normal">(Optional)</span>
              </label>
              <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-3 border-2 border-[#e8dcc8] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#a67c52] focus:border-transparent bg-white/50 text-[#5a4a3a] placeholder-[#a89a8a]"
                placeholder="Your name"
                style={{ fontFamily: 'Quicksand, sans-serif' }}
              />
            </div>

            {/* Email Field */}
            <div className="mb-5">
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
            <div className="mb-5">
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
                minLength={6}
                className="w-full px-4 py-3 border-2 border-[#e8dcc8] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#a67c52] focus:border-transparent bg-white/50 text-[#5a4a3a] placeholder-[#a89a8a]"
                placeholder="••••••••"
                style={{ fontFamily: 'Quicksand, sans-serif' }}
              />
              <p className="text-xs text-[#a89a8a] mt-1" style={{ fontFamily: 'Quicksand, sans-serif' }}>
                Minimum 6 characters
              </p>
            </div>

            {/* Confirm Password Field */}
            <div className="mb-6">
              <label 
                htmlFor="confirmPassword" 
                className="block text-sm font-semibold text-[#5a4a3a] mb-2"
                style={{ fontFamily: 'Quicksand, sans-serif' }}
              >
                Confirm Password
              </label>
              <input
                id="confirmPassword"
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                minLength={6}
                className="w-full px-4 py-3 border-2 border-[#e8dcc8] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#a67c52] focus:border-transparent bg-white/50 text-[#5a4a3a] placeholder-[#a89a8a]"
                placeholder="••••••••"
                style={{ fontFamily: 'Quicksand, sans-serif' }}
              />
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
                  Creating account...
                </span>
              ) : (
                'Create Account'
              )}
            </button>
          </form>

          {/* Sign In Link */}
          <div className="mt-6 text-center">
            <p className="text-[#7a6a5a]" style={{ fontFamily: 'Quicksand, sans-serif' }}>
              Already have an account?{' '}
              <a 
                href="/signin" 
                className="text-[#a67c52] hover:text-[#8b6f47] font-semibold"
              >
                Sign in
              </a>
            </p>
          </div>
        </div>

        {/* Bottom decoration */}
        <div className="text-center mt-6 text-[#8a7a6a] text-sm" style={{ fontFamily: 'Quicksand, sans-serif' }}>
          <p>✨ Start organizing your life today ✨</p>
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