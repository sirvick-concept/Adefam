import AboutHero1 from "../assets/about-hero1.jpg";

const AboutHero = () => {
  return (
    <section className="pt-28 pb-16 bg-gray-50 overflow-x-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Mobile: image on top | Desktop: side by side */}
        <div className="flex flex-col-reverse lg:flex-row items-center gap-10">

          {/* TEXT */}
          <div className="w-full text-center lg:text-left">
            <h2 className="text-xl sm:text-4xl font-bold text-gray-900">
              ADEFAM Computer Infotech
            </h2>

            <p className="mt-6 text-gray-600 max-w-xl mx-auto lg:mx-0 text-base sm:text-lg leading-relaxed">
              Adefam Computer Infotech (ACI) is a dynamic IT hub offering
              comprehensive training and consulting in computing and IT services.
              Our mission is to provide high-quality, flexible education and
              services, fostering individual and organizational potential in a
              secure environment.
            </p>
          </div>

          {/* IMAGE */}
          <div className="w-full flex justify-center lg:justify-end">
            <div className="w-full max-w-60 sm:max-w-70 md:max-w-[320px]">
              <img
                src={AboutHero1}
                alt="Student Learning"
                className="w-64 h-64 rounded-full object-cover shadow-lg"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutHero;