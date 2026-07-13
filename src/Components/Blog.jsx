
import { Link } from "react-router-dom";
import blogData from "../data/blogData";

const Blog = () => {
  return (
    <section className="min-h-screen bg-gray-50 py-14 pt-16 sm:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center">
          <span className="text-[#F09818] font-semibold uppercase tracking-wider text-lg sm:text-2lg">
            Our Blog
          </span>

          <h1 className="mt-2 text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 leading-snug">
            Latest Insights & Articles
          </h1>

          <p className="mt-4 text-gray-600 text-sm sm:text-base max-w-2xl mx-auto px-2 sm:px-0">
            Stay updated with technology trends, career tips, industry insights,
            and educational resources from Adefam Computer Infotech.
          </p>
        </div>

        {/* Blog Posts */}
        <div className="mt-10 sm:mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8">

          {blogData.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-xl sm:rounded-2xl overflow-hidden
                         shadow-sm hover:shadow-xl hover:-translate-y-1 sm:hover:-translate-y-2
                         transition-all duration-300"
            >

              {/* Image */}
              <div className="overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-40 sm:h-52 object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="p-4 sm:p-6">

                <span className="text-xs sm:text-sm text-[#F09818] font-medium">
                  {post.category}
                </span>

                <h2 className="mt-2 sm:mt-3 text-lg sm:text-xl font-bold text-slate-900 leading-snug">
                  {post.title}
                </h2>

                <p className="mt-2 sm:mt-3 text-gray-600 text-xs sm:text-sm leading-relaxed">
                  {post.excerpt}
                </p>

                <p className="mt-3 sm:mt-4 text-[11px] sm:text-xs text-gray-500">
                  {post.date}
                </p>

                <Link
  to={`/blog/${post.id}`}
  className="inline-block mt-4 sm:mt-5 text-[#F09818] text-sm font-medium hover:text-[#DD8A16] transition"
>
  Read More →
</Link>

              </div>
            </article>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Blog;