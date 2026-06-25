const Contacts = () => {
   return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10">
        <div>
          <h2 className="text-3xl font-bold">Contact Us</h2>
          <p className="mt-3 text-gray-600">
            Have questions? Send us a message and we’ll respond quickly.
          </p>

          <div className="mt-6 text-gray-600 space-y-2">
            <p>Email: AdefamInfotech@gmail.com </p>
            <p>Phone: +234 8032366804</p>
          </div>
        </div>

        <form className="bg-gray-50 p-6 rounded-2xl space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 rounded-lg border"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 rounded-lg border"
          />
          <textarea
            placeholder="Message"
            rows="4"
            className="w-full p-3 rounded-lg border"
          ></textarea>

          <button className="w-full bg-blue-600 text-white py-3 mt-5 rounded-lg hover:bg-blue-700">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};


export default Contacts