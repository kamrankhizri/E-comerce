const About = () => {
  return (
    <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-gray-200 min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 md:px-12 py-8 sm:py-12">
      <div className="max-w-4xl text-center">
        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-amber-400 mb-6">
          About Us
        </h1>

        {/* Paragraphs */}
        <p className="text-base sm:text-lg md:text-xl text-gray-400 leading-relaxed mb-6">
          Welcome to our website! We are dedicated to creating high-quality
          digital experiences that are both functional and visually appealing.
          Our team believes in innovation, teamwork, and attention to detail.
        </p>
        <p className="text-base sm:text-lg md:text-xl text-gray-400 leading-relaxed mb-6">
          Our mission is to deliver modern, user-friendly, and scalable solutions
          that meet the needs of our clients. Whether it's web development,
          design, or digital strategy, we strive to go above and beyond expectations.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="/team"
            className="px-5 py-2 sm:px-6 sm:py-3 bg-amber-400 hover:bg-amber-500 text-gray-900 font-semibold rounded-lg transition duration-300 text-sm sm:text-base"
          >
            Meet Our Team
          </a>
          <a
            href="/contact"
            className="px-5 py-2 sm:px-6 sm:py-3 border border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-gray-900 font-semibold rounded-lg transition duration-300 text-sm sm:text-base"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
