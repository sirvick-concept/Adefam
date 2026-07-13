const MissionVision = () => {
  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">

        {/* Mission Card */}
        <div className="bg-gray-50 p-6 sm:p-8 rounded-2xl shadow-sm hover:shadow-md transition">
          <h2 className="text-2xl font-bold text-[#F09818]">Our Mission</h2>
          <p className="mt-4 text-gray-600 leading-relaxed">
            To bridge the digital skills gap by offering comprehensive and accessible
            education and training programs that equip individuals with the latest tools and
            techniques. We promote innovation, diversity, and excellence in the digital
            landscape by fostering a collaborative community.
          </p>
        </div>

        {/* Vision Card */}
        <div className="bg-gray-50 p-6 sm:p-8 rounded-2xl shadow-sm hover:shadow-md transition">
          <h2 className="text-2xl font-bold text-[#F09818]">Our Vision</h2>
          <p className="mt-4 text-gray-600 leading-relaxed">
            Our ultimate vision is to contribute significantly to achieving the United Nations
            Sustainable Development Goals (SDGs) while aligning with the principles and
            goals of the Global Development Group (GDG) in increasing the level of digital
            literacy in the community. Together, we envision a world where empowered
            individuals drive transformative growth, creating a sustainable and inclusive
            global future.
          </p>
        </div>

      </div>
    </section>
  );
};

export default MissionVision;