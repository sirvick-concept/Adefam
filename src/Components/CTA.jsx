import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section className="relative overflow-hidden py-20 px-6 bg-white">

  {/* Optional subtle glow */}
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#FDE7C0,transparent_70%)] opacity-60"></div>

  <div className="relative max-w-5xl mx-auto text-center">

    {/* Heading */}
    <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold leading-snug sm:leading-tight text-slate-900">
      Start Learning Today & Build Your Future
    </h2>

    {/* Text */}
    <p className="mt-4 sm:mt-5 text-slate-600 text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-2 sm:px-0">
      Join thousands of learners gaining real-world tech skills in Web Development,
      Design, and Data. Your tech journey starts here.
    </p>

    {/* Buttons */}
    <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">

      <Link
        to="/register"
        className="w-full sm:w-auto px-8 py-4
                   bg-[#F09818]
                   hover:bg-[#DD8A16]
                   text-white
                   rounded-xl
                   font-semibold
                   transition-all
                   duration-300
                   hover:shadow-lg
                   hover:-translate-y-1"
      >
        Register Now
      </Link>

      <Link
        to="/login"
        className="w-full sm:w-auto px-8 py-4
                   border-2
                   border-[#F09818]
                   text-[#F09818]
                   hover:bg-[#F09818]
                   hover:text-white
                   rounded-xl
                   font-semibold
                   transition-all
                   duration-300"
      >
        Login
      </Link>

    </div>

    {/* Trust line */}
    <p className="mt-8 text-xs text-slate-500">
      No credit card required • Flexible learning • Beginner friendly
    </p>

  </div>
</section>
  );
};

export default CTA;