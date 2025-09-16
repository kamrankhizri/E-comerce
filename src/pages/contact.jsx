const Contact = () => {
  return (
    <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-gray-200 min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 py-8 sm:py-12">
      {/* Heading */}
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-amber-400 mb-4 sm:mb-6">
        Contact Us
      </h1>

      {/* Intro Text */}
      <p className="text-sm sm:text-base md:text-lg text-center max-w-md sm:max-w-2xl mb-6 sm:mb-8 px-2">
        We’d love to hear from you! Whether you have questions, feedback, or 
        collaboration ideas, feel free to reach out to us anytime via email or phone.
      </p>

      {/* Contact Box */}
      <div className="bg-gray-800 shadow-lg rounded-lg p-4 sm:p-6 w-full max-w-sm sm:max-w-lg space-y-4 sm:space-y-6">
        <div>
          <span className="block text-xs sm:text-sm text-gray-400">G-mail:</span>
          <a
            href="mailto:E-Commerce@gmail.com"
            className="text-amber-400 hover:underline text-sm sm:text-lg break-words"
          >
            E-Commerce@gmail.com
          </a>
        </div>

        <div>
          <span className="block text-xs sm:text-sm text-gray-400">Phone-No:</span>
          <a
            href="tel:+923301234567"
            className="text-amber-400 hover:underline text-sm sm:text-lg"
          >
            +92 330-1234567
          </a>
        </div>
      </div>

      {/* Footer Note */}
      <p className="mt-6 sm:mt-10 text-gray-500 text-xs sm:text-sm text-center px-4">
        We typically respond within 24 hours. Thank you for connecting with us!
      </p>
    </div>
  );
};

export default Contact;
