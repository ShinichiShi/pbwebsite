import Image from "next/image"; // Assuming you are using next/image for optimization

export default function Share() {
  return (
    <section className="py-12">
      <div className="text-center mb-12">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-100 mt-2 p-2">
          Stay <span className="text-green-500">Connected</span>
        </h1>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-gradient-to-tr from-blue-600 to-blue-300 p-6 shadow-md text-white rounded-xl">
            <div className="flex justify-start mb-4">
              {/* Replace the src with the actual Slack logo you use */}
              <Image
                src="/images/ln.png"
                alt="Slack Logo"
                width={150}
                height={50}
              />
            </div>
            <h3 className="text-lg font-bold mb-2">Follow us on Linkedin</h3>
            <p>
              We post about upcoming events, activities, and other cool stuff on
              Instagram.
            </p>
            <a
              className="btn-sm px-4 py-2 text-l font-bold bg-gradient-to-tr from-blue-600 to-blue-800 mx-3 rounded-xl mt-10"
              href="https://www.linkedin.com/company/point-blank-d"
            >
              Follow Us
            </a>
          </div>

          {/* Card 2 */}
          <div className="bg-gradient-to-tr from-purple-400 to-pink-500 p-6 shadow-md text-white rounded-xl">
            <div className="flex justify-start mb-4">
              {/* Replace with GitHub logo */}
              <Image
                src="/images/ig.png"
                alt="Insta Logo"
                width={150}
                height={50}
              />
            </div>
            <h3 className="text-lg font-bold mb-2">Follow Us On Instagram</h3>
            <p>
              We post about upcoming events, activities, and other cool stuff on
              Instagram.
            </p>
            <a
              className="btn-sm px-4 py-2 text-l font-bold text-white bg-gradient-to-tr from-purple-400 to-pink-500 mx-3 rounded-xl mt-10"
              href="https://www.instagram.com/pointblank_dsce/"
            >
              Follow Us
            </a>
          </div>

          {/* Card 3 */}
          <div className="bg-gradient-to-tr from-green-500 to-green-300 p-6 shadow-md text-white rounded-xl">
            <div className="flex justify-start mb-4">
              <p className="text-2xl font-bold">📄 Brochure </p>
            </div>
            <h3 className="text-lg font-bold mb-2">Download our Brochure</h3>
            <p>
              We have listed all of recent events, activities, and other stats
              in our brochure.
            </p>
            <a
              className="btn-sm px-4 py-2 text-l font-bold bg-gradient-to-tr from-green-500 to-green-300 mx-3 rounded-xl mt-10"
              href="/brochure.pdf"
            >
              Download Now
            </a>
          </div>

          {/* Card 4  */}
          <div className="bg-gradient-to-tr from-purple-500 to-purple-300 p-6 shadow-md text-white rounded-xl md:col-span-1 md:col-start-2">
            <div className="flex justify-start mb-4">
              <p className="text-2xl font-bold mb-2"> Youtube </p>
            </div>
            <h3 className="text-lg font-bold mb-2">Jam to Our Latest Mixtape!</h3>
            <p>
              We include all the tracks, vibes, and energy of our mixtapes - Check it out now!.
            </p>
            <a
              className="btn-sm px-4 py-2 text-l font-bold bg-gradient-to-tr from-purple-500 to-purple-300 mx-3 rounded-xl mt-10"
              href="https://www.youtube.com/watch?v=2vk-hb0quBg&list=PLrHlqWSNnbvTMbGsDrM3Uu_p2o-x4BfSn"
            >
              Tune In
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
