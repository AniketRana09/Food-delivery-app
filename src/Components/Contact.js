import React from "react";

const Contact = () => {
  return (
    <div>
      <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
        <div className="bg-white shadow-2xl rounded-2xl max-w-2xl w-full p-8">
          <h2 className="text-3xl font-bold text-center text-orange-600 mb-6">
            Contact Us
          </h2>

          <form className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <input
                type="text"
                className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm p-3"
                placeholder="Your Name"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm p-3 focus:ring-blue-500 focus:border-blue-500"
                placeholder="you@example.com"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <textarea
                rows="5"
                className="mt-1 block w-full border border-gray-300 rounded-lg shadow-sm p-3 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Your message here..."
                required
              ></textarea>
            </div>

            <div>
              <button
                type="submit"
                className="w-full bg-orange-600 text-white font-bold py-3 rounded-lg hover:bg-orange-700 transition"
              >
                Send Message
              </button>
            </div>
          </form>

          <div className="mt-8 text-sm text-gray-500 text-center">
            You can also reach us at: <br />
            📧
            <a href="mailto:contact@rsct.com" className="text-orange-600">
              aniketrana7681@gmail.com
            </a>
            <br />
            📞 +91 12345678
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
