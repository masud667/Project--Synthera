'use client'
import { useState } from 'react'
import { FaGoogle, FaFacebook, FaEye, FaEyeSlash } from 'react-icons/fa'

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false)

  const handleRegister = (e) => {
    e.preventDefault()
    const name = e.target.name.value
    const email = e.target.email.value
    const password = e.target.password.value

    console.log('Register with:', name, email, password)
    // TODO: Connect with Firebase / NextAuth / your backend
  }

  const handleGoogleRegister = () => {
    console.log('Google signup clicked')
  }

  const handleFacebookRegister = () => {
    console.log('Facebook signup clicked')
  }

  return (
    <main className="bg-background flex min-h-screen w-full flex-col items-center justify-center sm:px-4">
      <div className="w-full space-y-4 sm:max-w-md">
        {/* Logo + Title */}
        <div className="text-center">
          <img
            src="https://i.postimg.cc/2SRcktkT/Mvpblocks.webp"
            width={80}
            className="mx-auto"
            alt="logo"
          />
          <div className="mt-5 space-y-2">
            <h3 className="text-2xl font-bold sm:text-3xl">
              Create a new account
            </h3>
            <p>
              Already have an account?{' '}
              <a
                href="/login"
                className="font-medium text-rose-600 hover:text-rose-500"
              >
                Log in
              </a>
            </p>
          </div>
        </div>

        {/* Social Signups */}
        <div className="space-y-6 p-4 py-6 shadow sm:rounded-lg sm:p-6">
          <div className="grid grid-cols-2 gap-x-3">
            <button
              onClick={handleGoogleRegister}
              className="hover:bg-secondary active:bg-secondary/40 flex items-center justify-center rounded-lg border py-2.5 duration-150"
            >
              <FaGoogle className="text-red-500 text-lg" />
            </button>

            <button
              onClick={handleFacebookRegister}
              className="hover:bg-secondary active:bg-secondary/40 flex items-center justify-center rounded-lg border py-2.5 duration-150"
            >
              <FaFacebook className="text-blue-600 text-lg" />
            </button>
          </div>

          {/* Divider */}
          <div className="relative">
            <span className="bg-secondary block h-px w-full"></span>
            <p className="absolute inset-x-0 -top-2 mx-auto inline-block w-fit px-2 text-sm">
              Or sign up with
            </p>
          </div>

          {/* Register Form */}
          <form onSubmit={handleRegister} className="space-y-5">
            <div>
              <label className="font-medium">Full Name</label>
              <input
                type="text"
                name="name"
                required
                className="mt-2 w-full rounded-lg border bg-transparent px-3 py-2 shadow-sm outline-none focus:border-rose-600"
              />
            </div>

            <div>
              <label className="font-medium">Email</label>
              <input
                type="email"
                name="email"
                required
                className="mt-2 w-full rounded-lg border bg-transparent px-3 py-2 shadow-sm outline-none focus:border-rose-600"
              />
            </div>

            <div>
              <label className="font-medium">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  required
                  className="mt-2 w-full rounded-lg border bg-transparent px-3 py-2 shadow-sm outline-none focus:border-rose-600"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 mt-2 mr-3 flex items-center"
                >
                  {showPassword ? (
                    <FaEyeSlash className="text-secondary" />
                  ) : (
                    <FaEye className="text-secondary" />
                  )}
                </button>
              </div>
            </div>

            <button className="w-full rounded-lg bg-rose-600 px-4 py-2 font-medium text-white duration-150 hover:bg-rose-500 active:bg-rose-600">
              Sign up
            </button>
          </form>
        </div>
      </div>
    </main>
  )
}
