const LearnTechSkills = () => {
  return (
    <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-3xl sm:text-5xl font-bold text-gray-900">
          Learn Tech Skills That Shape Your Future
        </h1>

        <p className="mt-4 text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
          Upgrade your career with practical, hands-on courses in Web Development,
          Design, Data, and more.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition">
            Get Started
          </button>
          <button className="border border-blue-600 text-blue-600 px-6 py-3 rounded-xl hover:bg-blue-50 transition">
            Explore Courses
          </button>
        </div>
      </div>
    </section>
  );
};

export default LearnTechSkills;