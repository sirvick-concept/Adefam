const testimonials = [
  {
    name: "Ayo Johnson",
    text: "AdefamInfoTech transformed my curiosity into real skills. As a beginner, I now have the confidence to build websites and continue my journey in tech.",
  },
  {
    name: "Mary David",
    text: "I started this journey with zero coding knowledge. Thanks to the practical training and guidance at AdefamInfoTech, I've gained valuable web development skills and the confidence to keep growing in tech.",
  },
  {
    name: "Samuel Peter",
    text: "As a beginner, I had no experience in tech, but the lessons are easy to understand and the instructors are very supportive. I'm now building websites with confidence.",
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