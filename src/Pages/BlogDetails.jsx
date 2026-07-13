import { useParams } from "react-router-dom";
import blogData from "../data/blogData";

function BlogDetails() {
  const { id } = useParams();

  const post = blogData.find(
    (blog) => blog.id === Number(id)
  );

  if (!post) {
    return (
      <div className="text-center py-20 text-xl font-semibold">
        Blog Not Found
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">

      {/* Featured Image */}
      <img
        src={post.image}
        alt={post.title}
        className="w-full rounded-xl mb-8"
      />

      {/* Category */}
      <span className="text-[#F09818] font-semibold">
        {post.category}
      </span>

      {/* Title */}
      <h1 className="text-4xl font-bold mt-2">
        {post.title}
      </h1>

      {/* Date */}
      <p className="text-gray-500 mt-2">
        {post.date}
      </p>

      {/* ✅ 3 Extra Images */}
      {post.images && (
        <div className="grid md:grid-cols-3 gap-4 my-8">
          {post.images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`${post.title} ${index + 1}`}
              className="w-full h-60 object-cover rounded-xl shadow-md"
            />
          ))}
        </div>
      )}

      {/* Content */}
      <div className="mt-8">
        <p className="text-gray-700 leading-relaxed whitespace-pre-line">
          {post.content}
        </p>
      </div>

    </div>
  );
}

export default BlogDetails;