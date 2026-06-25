import heroImage1 from "../assets/hero-image1.jpg";

import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen bg-linear-to-b from-blue-50 to-white pt-22 lg:pt-24 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left Content */}
          <div className="text-center lg:text-left order-2 lg:order-1">

            {/* <span className="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-xs sm:text-sm font-medium mb-5">
              
            </span>*/}

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
              Learn In-Demand
              <span className="block text-orange-600">
                Tech Skills
              </span>
            </h1>

            <p className="mt-5 text-base sm:text-lg text-slate-600 max-w-lg mx-auto lg:mx-0">
              We believe in the power of innovation!
              <span className="block text-orange-600">
                coming from passionate people & creative thinkers.
              </span>
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center lg:justify-start">

              <Link
                to="/register"
                className="w-full sm:w-auto px-8 py-4 bg-orange-600 text-white rounded-xl font-medium hover:bg-orange-700 transition text-center"
              >
                Register Now
              </Link>

              <Link
                to="/courses"
                className="w-full sm:w-auto px-8 py-4 border border-slate-300 rounded-xl font-medium hover:bg-slate-100 transition text-center"
              >
                Explore Courses
              </Link>

            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-10 text-center lg:text-left">
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                  5000+
                </h3>
                <p className="text-xs sm:text-sm text-slate-500">
                  Students
                </p>
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                  50+
                </h3>
                <p className="text-xs sm:text-sm text-slate-500">
                  Expert Courses
                </p>
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                  95%
                </h3>
                <p className="text-xs sm:text-sm text-slate-500">
                  Success Rate
                </p>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="relative flex flex-col items-center justify-center order-1 lg:order-2 py-8">

            {/* Background Circle */}
            <div className="absolute w-56 h-56 sm:w-72 sm:h-72 lg:w-112.5 lg:h-112.5 bg-blue-100 rounded-full blur-3xl opacity-70"></div>

            {/* Main Image */}
            <img
              src={heroImage1}
              alt="Student Learning"
              className="relative z-10 w-full max-w-62.5 sm:max-w-[320px] md:max-w-100 lg:max-w-125 object-contain"
            />

            {/* Mobile Cards */}
            <div className="flex md:hidden gap-3 mt-4 z-20">
              <div className="bg-white shadow-lg rounded-xl px-4 py-3">
                <h4 className="font-bold text-orange-600">5000+</h4>
                <p className="text-xs text-slate-500">Students</p>
              </div>

              <div className="bg-white shadow-lg rounded-xl px-4 py-3">
                <h4 className="font-bold text-green-600">95%</h4>
                <p className="text-xs text-slate-500">Success Rate</p>
              </div>
            </div>

            {/* Desktop Floating Card 1 */}
            <div className="hidden md:block absolute top-16 left-0 lg:left-5 bg-white shadow-xl rounded-2xl px-4 py-3 z-20">
              <h4 className="text-xl font-bold text-orange-600">5000+</h4>
              <p className="text-sm text-slate-500">Students</p>
            </div>

            {/* Desktop Floating Card 2 */}
            <div className="hidden md:block absolute bottom-16 right-0 lg:right-5 bg-white shadow-xl rounded-2xl px-4 py-3 z-20">
              <h4 className="text-xl font-bold text-green-600">95%</h4>
              <p className="text-sm text-slate-500">Success Rate</p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;