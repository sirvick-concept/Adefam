const partners = [
  { name: "Google", logo: "/logos/google.avif" },
  { name: "Microsoft", logo: "/logos/microsoft.avif" },
  { name: "Amazon", logo: "/logos/amazon.avif" },
  { name: "Meta", logo: "/logos/meta.avif" },
  { name: "DNS", logo: "/logos/google1.avif" },
];

const Partners = () => {
  return (
    <section className="py-16 sm:py-20 bg-linear-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center">
          <span className="text-orange-600 font-semibold uppercase tracking-wider text-xs sm:text-sm">
            Trusted By
          </span>

          <h2 className="mt-2 text-2xl sm:text-4xl md:text-5xl font-bold text-slate-900">
            Our Partners
          </h2>

          <p className="mt-3 sm:mt-4 text-gray-600 text-sm sm:text-base max-w-2xl mx-auto">
            We collaborate with leading organizations and technology companies
            to provide world-class learning opportunities and career growth.
          </p>
        </div>

        {/* Partners Grid */}
        <div className="mt-10 sm:mt-14 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">

          {partners.map((partner, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6
                         border border-gray-100 shadow-sm
                         hover:shadow-xl hover:-translate-y-1 sm:hover:-translate-y-2
                         transition-all duration-300 cursor-pointer"
            >

              <div className="flex flex-col items-center justify-center gap-2 sm:gap-3">

                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="h-10 w-10 sm:h-14 sm:w-14 rounded-full object-cover
                             group-hover:scale-110 transition-transform duration-300"
                />

                <p className="text-xs sm:text-sm font-medium text-slate-700 text-center">
                  {partner.name}
                </p>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Partners;