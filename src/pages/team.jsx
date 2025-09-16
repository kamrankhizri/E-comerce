const Team = () => {
  const members = [
    { name: "Kamran Khizri", role: "Founder & CEO" },
    { name: "Whab Ch", role: "Marketing Head" },
    { name: "Qumar Ch", role: "Lead Developer" },
    { name: "Chat-GPT", role: "UI/UX Designer" },
  ];

  return (
    <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-gray-200 min-h-screen flex flex-col items-center px-6 py-12">
      <h1 className="text-4xl font-bold text-amber-400 mb-6">Meet Our Team</h1>
      <p className="text-lg text-center max-w-2xl mb-8">
        We’re a passionate group of professionals dedicated to bringing you the
        best e-commerce experience. Our team combines creativity, technology,
        and customer focus to make shopping seamless and enjoyable.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-5xl">
        {members.map((member, index) => (
          <div
            key={index}
            className="bg-gray-800 p-6 rounded-lg shadow-lg text-center hover:scale-105 transform transition duration-300"
          >
            <h2 className="text-xl font-semibold text-amber-400">
              {member.name}
            </h2>
            <p className="text-gray-400">{member.role}</p>
          </div>
        ))}
      </div>

      <p className="mt-10 text-gray-500 text-sm">
        Together, we aim to make your shopping journey smooth and delightful.
      </p>
    </div>
  );
};

export default Team;
