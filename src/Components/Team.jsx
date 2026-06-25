const team = [
  {
    name: "John Doe",
    role: "Founder & CEO",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Mary Johnson",
    role: "Lead Instructor",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "David Smith",
    role: "UI/UX Designer",
    image: "https://randomuser.me/api/portraits/men/65.jpg",
  },
  {
    name: "Sarah Williams",
    role: "Frontend Developer",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
  },
];

const Team = () => {
  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900">Meet Our Team</h2>
        <p className="mt-3 text-gray-600">
          Passionate people behind ADEFAM Computer Infotech
        </p>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-sm hover:shadow-md transition p-6 text-center"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-24 h-24 mx-auto rounded-full object-cover"
              />

              <h3 className="mt-4 font-semibold text-lg text-gray-900">
                {member.name}
              </h3>

              <p className="text-gray-500 text-sm">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;