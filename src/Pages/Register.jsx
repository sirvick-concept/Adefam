const Register = () => {
  return (
    <div className="min-h-screen bg-linear-to-br from-orange-50 via-white to-orange-100 px-4 py-20 flex items-center justify-center">
      <div className="w-full max-w-4xl bg-white/90 backdrop-blur-xl border border-white/20 rounded-3xl shadow-xl overflow-hidden grid md:grid-cols-2">

        {/* Image Side */}
        <div className="relative hidden md:block">
          <img
            src="/Graphics.png"
            alt="Register"
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-linear-to-br from-black/60 to-orange-900/40 flex flex-col justify-center p-8">
            <h2 className="text-3xl font-bold text-white">
              Join Us Today
            </h2>

            <p className="mt-3 text-white/90">
              Create your account and start learning valuable tech skills with
              Adefam Computer Infotech.
            </p>
          </div>
        </div>

        {/* Form Side */}
        <div className="p-6 md:p-8 flex items-center">
          <div className="w-full">

            <h1 className="text-3xl font-bold text-gray-900">
              Create Account
            </h1>

            <p className="mt-2 text-gray-500">
              Get started in just a few minutes.
            </p>

            {/* Google Signup */}
            <button
              type="button"
              className="mt-6 w-full flex items-center justify-center gap-3 border border-gray-200 rounded-xl py-3 font-medium text-gray-700 hover:bg-gray-50 transition"
            >
              <img
                src="https://www.svgrepo.com/show/475656/google-color.svg"
                alt="Google"
                className="w-5 h-5"
              />

              Continue with Google
            </button>

            {/* Divider */}
            <div className="relative my-5">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200"></div>
              </div>

              <div className="relative flex justify-center text-sm">
                <span className="bg-white px-4 text-gray-400">
                  OR
                </span>
              </div>
            </div>

            <form className="space-y-4">

              <div>
                <label className="text-sm font-medium text-gray-700">
                  Full Name
                </label>

                <input
                  type="text"
                  placeholder="Enter your name"
                  className="mt-2 w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-2.5 focus:border-orange-500 focus:ring-4 focus:ring-orange-100 outline-none transition"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-gray-700">
                  Email Address
                </label>

                <input
                  type="email"
                  placeholder="Enter your email"
                  className="mt-2 w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-2.5 focus:border-orange-500 focus:ring-4 focus:ring-orange-100 outline-none transition"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-gray-700">
                  Password
                </label>

                <input
                  type="password"
                  placeholder="Enter your password"
                  className="mt-2 w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-2.5 focus:border-orange-500 focus:ring-4 focus:ring-orange-100 outline-none transition"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-gray-700">
                  Confirm Password
                </label>

                <input
                  type="password"
                  placeholder="Confirm Password"
                  className="mt-2 w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-2.5 focus:border-orange-500 focus:ring-4 focus:ring-orange-100 outline-none transition"
                />
              </div>

              <label className="flex items-start gap-3 text-sm text-gray-600">
                <input
                  type="checkbox"
                  className="mt-1 accent-orange-600"
                />

                <span>
                  I agree to the{" "}
                  <a
                    href="/terms"
                    className="text-orange-600 hover:text-orange-700"
                  >
                    Terms & Conditions
                  </a>
                </span>
              </label>

              <button
                type="submit"
                className="w-full rounded-xl bg-orange-600 hover:bg-orange-700 text-white py-3 font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-orange-200"
              >
                Create Account
              </button>
            </form>

            <p className="mt-6 text-center text-gray-500 text-sm">
              Already have an account?{" "}
              <a
                href="/login"
                className="font-semibold text-orange-600 hover:text-orange-700"
              >
                Login
              </a>
            </p>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;