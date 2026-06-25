const testimonials = [
  {
    name: "Ayo Johnson",
    text: "This platform helped me land my first developer job!",
  },
  {
    name: "Mary David",
    text: "The courses are very practical and easy to follow.",
  },
  {
    name: "Samuel Peter",
    text: "I love how structured and beginner-friendly it is.",
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold">What Students Say</h2>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-gray-50 p-6 rounded-2xl shadow-sm"
            >
              <p className="text-gray-600">"{t.text}"</p>
              <h4 className="mt-4 font-semibold">{t.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;