import {
  Globe,
  Palette,
  Code,
  Layout,
  PenTool,
  BarChart3,
  Database,
} from "lucide-react";

const courses = [
  { title: "Web Development", level: "Advanced", color: "bg-blue-100", icon: Globe },
  { title: "Graphics Design", level: "Intermediate", color: "bg-red-100", icon: Palette },
  { title: "Software Development", level: "Advanced", color: "bg-green-100", icon: Code },
  { title: "UI/UX Design", level: "Intermediate", color: "bg-purple-100", icon: Layout },
  { title: "Product Design", level: "Intermediate", color: "bg-yellow-100", icon: PenTool },
  { title: "Data Analysis", level: "Advanced", color: "bg-green-100", icon: BarChart3 },
  { title: "Data Science", level: "Intermediate", color: "bg-blue-100", icon: Database },
];

const FeaturedCourses = () => {
  return (
    <section className="py-14 sm:py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center">
          Featured Courses
        </h2>

        {/* Grid */}
        <div className="mt-8 sm:mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">

          {courses.map((course, index) => {
            const Icon = course.icon;

            return (
              <div
                key={index}
                className="group bg-white rounded-xl sm:rounded-2xl
                           p-4 sm:p-6 shadow-sm border border-transparent
                           hover:border-blue-200 hover:shadow-xl
                           hover:-translate-y-1 sm:hover:-translate-y-2
                           transition-all duration-300 cursor-pointer"
              >

                {/* Icon */}
                <div
                  className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl ${course.color}
                              flex items-center justify-center
                              group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon size={20} className="sm:size-24 text-slate-700" />
                </div>

                {/* Title */}
                <h3 className="mt-3 sm:mt-4 font-semibold text-base sm:text-lg
                               group-hover:text-orange-600 transition-colors">
                  {course.title}
                </h3>

                {/* Level */}
                <p className="text-xs sm:text-sm text-gray-500 mt-1">
                  {course.level}
                </p>

              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
};

export default FeaturedCourses;