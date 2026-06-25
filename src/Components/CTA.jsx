import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section className="relative py-16 sm:py-20 px-4 overflow-hidden">

      {/* Background Glow */}
      <div className="absolute inset-0 bg-linear-to-r from-blue-600 via-indigo-600 to-purple-600"></div>
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top,white,transparent_60%)]"></div>

      <div className="relative max-w-5xl mx-auto text-center text-white">

        {/* Heading */}
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold leading-snug sm:leading-tight">
          Start Learning Today & Build Your Future
        </h2>

        {/* Text */}
        <p className="mt-4 sm:mt-5 text-blue-100 text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-2 sm:px-0">
          Join thousands of learners gaining real-world tech skills in Web Development,
          Design, and Data. Your tech journey starts here.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">

          <Link
            to="/register"
            className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-white text-blue-600 rounded-xl font-semibold
                       hover:scale-105 hover:shadow-lg transition-all duration-300 text-center"
          >
            Register Now
          </Link>

          <Link
            to="/login"
            className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 border border-white/70 text-white rounded-xl font-semibold
                       hover:bg-white hover:text-blue-600 hover:scale-105 transition-all duration-300 text-center"
          >
            Login
          </Link>

        </div>

        {/* Trust line */}
        <p className="mt-6 sm:mt-8 text-[11px] sm:text-xs text-blue-100/80 px-4">
          No credit card required • Flexible learning • Beginner friendly
        </p>

      </div>
    </section>
  );
};

export default CTA;