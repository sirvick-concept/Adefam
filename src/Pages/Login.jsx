
import { useNavigate } from "react-router-dom";


const Login = () => {

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Temporary login
    navigate("/student-dashboard");
  };


  return (
    <div className="min-h-screen bg-linear-to-br from-orange-50 via-white to-orange-100 pt-20 px-4 flex items-center justify-center">
  <div className="w-full max-w-4xl bg-white/80 backdrop-blur-xl border border-white/20 rounded-4xl shadow-2xl overflow-hidden grid md:grid-cols-2">

    {/* Left Side */}
    <div className="relative hidden md:block">
      <img
        src="/Graphics.png"
        alt="Login"
        className="w-full h-64 md:h-full object-cover"
      />

      <div className="absolute inset-0 bg-linear-to-br from-black/60 to-orange-900/40 flex flex-col justify-center p-10">
        <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
          Welcome Back 
        </h2>

        <p className="mt-3 text-white/90 text-lg max-w-md">
          Continue your learning journey and access all your courses,
          resources, and progress in one place.
        </p>
      </div>
    </div>

    {/* Right Side */}
    <div className="flex items-center justify-center p-6 md:p-8">
      <div className="w-full max-w-md">

        <h1 className="text-3xl font-bold text-gray-900">
          Login
        </h1>

        <p className="mt-2 text-gray-500">
          Welcome back! Please enter your details.
        </p>

        
       

        <form onSubmit={handleLogin} className="space-y-5">

          <div>
            <label className="text-sm font-medium text-gray-700">
              Email Address
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              className="mt-2 w-full rounded-2xl border border-gray-200 bg-gray-50 px-4 py-2.5 focus:border-orange-500 focus:ring-4 focus:ring-orange-100 outline-none transition"
            />
          </div>

          <div>
            <div className="flex justify-between mb-2">
              <label className="text-sm font-medium text-gray-700">
                Password
              </label>

              <a
                href="#"
                className="text-sm text-[#F09818] hover:text-[#DD8A16]"
              >
                Forgot Password?
              </a>
            </div>

            <input
              type="password"
              placeholder="Enter your password"
              className="w-full rounded-2xl border border-gray-200 bg-gray-50 px-4 py-3 focus:border-orange-500 focus:ring-4 focus:ring-orange-100 outline-none transition"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-2xl bg-[#F09818] hover:bg-[#DD8A16] text-white py-3 font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-orange-200"
          >
            Login
          </button>
        </form>

         {/* Divider */}
        <div className="relative my-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-200"></div>
          </div>

          <div className="relative flex justify-center text-sm">
            <span className="bg-white px-4 text-gray-400">
              OR
            </span>
          </div>
        </div>

        {/* Google Button */}
        <button
          type="button"
          className="mt-8 w-full flex items-center justify-center gap-3 border border-gray-200 rounded-2xl py-3 font-medium text-gray-700 hover:bg-gray-50 transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 48 48"
            className="w-5 h-5"
          >
            <path
              fill="#FFC107"
              d="M43.6 20.5H42V20H24v8h11.3C33.6 32.7 29.2 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3 0 5.7 1.1 7.8 3l5.7-5.7C34.1 6.1 29.3 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.3-.4-3.5z"
            />
            <path
              fill="#FF3D00"
              d="M6.3 14.7l6.6 4.8C14.7 15.2 19 12 24 12c3 0 5.7 1.1 7.8 3l5.7-5.7C34.1 6.1 29.3 4 24 4 16.3 4 9.6 8.3 6.3 14.7z"
            />
            <path
              fill="#4CAF50"
              d="M24 44c5.2 0 10-2 13.6-5.2l-6.3-5.3c-2.1 1.6-4.7 2.5-7.3 2.5-5.2 0-9.6-3.3-11.2-8l-6.5 5C9.5 39.5 16.2 44 24 44z"
            />
            <path
              fill="#1976D2"
              d="M43.6 20.5H42V20H24v8h11.3c-1.1 3.2-3.4 5.5-6.3 7l6.3 5.3C39.8 36.4 44 30.8 44 24c0-1.3-.1-2.3-.4-3.5z"
            />
          </svg>

          Continue with Google
        </button>


        <p className="mt-8 text-center text-gray-500">
          Don't have an account?{" "}
          <a
            href="/register"
            className="font-semibold text-[#F09818] hover:text-[#DD8A16]"
          >
            Create Account
          </a>
        </p>

      </div>
    </div>
  </div>
</div>
  )
}

export default Login