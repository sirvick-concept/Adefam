import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section className="relative overflow-hidden py-20 px-6 bg-[#F09818]">

  {/* Background Glow */}
  <div className="absolute inset-0 bg-gradient-to-r from-[#C9780F] via-[#DD8A16] to-[#F09818]"></div>
  <div className="absolute inset-0 opacity-15 bg-[radial-gradient(circle_at_top,white,transparent_60%)]"></div>

  <div className="relative max-w-5xl mx-auto text-center">

    {/* Heading */}
    <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold leading-snug sm:leading-tight text-slate-900">
      Start Learning Today & Build Your Future
    </h2>

    {/* Text */}
    <p className="mt-4 sm:mt-5 text-slate-800 text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-2 sm:px-0">
      Join thousands of learners gaining real-world tech skills in Web Development,
      Design, and Data. Your tech journey starts here.
    </p>

    {/* Buttons */}
    <div className="mt-8 flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">

      {/* Primary */}
      <Link
        to="/register"
        className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4
                   bg-slate-900 text-white rounded-xl font-semibold
                   hover:bg-slate-800 hover:scale-105 hover:shadow-xl
                   transition-all duration-300 text-center"
      >
        Register Now
      </Link>

      {/* Secondary */}
      <Link
        to="/login"
        className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4
                   border-2 border-slate-900 text-slate-900 rounded-xl font-semibold
                   hover:bg-slate-900 hover:text-white
                   hover:scale-105 transition-all duration-300 text-center"
      >
        Login
      </Link>

    </div>

    {/* Trust line */}
    <p className="mt-6 sm:mt-8 text-xs text-slate-700">
      No credit card required • Flexible learning • Beginner friendly
    </p>

  </div>
</section>
  );
};

export default CTA;