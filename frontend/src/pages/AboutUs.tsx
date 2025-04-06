import { useNavigate } from 'react-router-dom';

const AboutUs = () => {
  const navigate = useNavigate(); // Initialize the navigate function

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      {/* Header Section */}
      <div className="bg-black text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold">About UCASH</h1>
          <p className="mt-4 text-lg">
            We're on a mission to revolutionize how people track their expense, making it simpler, smarter, and more secure for everyone.
          </p>
          <p className="mt-2 text-gray-400">— EST. 2023 —</p>
        </div>
      </div>

      {/* Our Story Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-3xl font-bold text-center">Our Story</h2>
        <p className="mt-6 text-lg text-gray-600 text-center">
          UCASH began with a simple observation: too many people struggle with tracking thier finance, not because they lack the ability, but because they lack the right tools.
        </p>
        <p className="mt-4 text-lg text-gray-600 text-center">
          Founded in 2023, we set out to create a platform that would demystify personal finance tracker and empower individuals to take control of their financial future.
        </p>
        <p className="mt-4 text-lg text-gray-600 text-center">
          Today, UCASH is a Website developed by 3 students, assisted by our beloved professor, who are passionate about technology and finance. We are committed to providing our users with the best tools and resources to help them achieve their financial tracks.
        </p>
      </div>

      {/* Core Values Section */}
      <div className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center">Our Values</h2>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold text-blue-600">Customer First</h3>
              <p className="mt-4 text-gray-600">
                Everything we do begins with understanding our users' needs. We're committed to creating solutions that address real financial challenges.
              </p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold text-purple-600">User Friendly</h3>
              <p className="mt-4 text-gray-600">
                We prioritize simplicity and ease of use in our design. Our platform is built to be intuitive, ensuring that anyone can navigate it with confidence.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow">
              <h3 className="text-xl font-bold text-red-600">Continuous Innovation</h3>
              <p className="mt-4 text-gray-600">
                We're constantly exploring new techniques and methodologies to improve our platform and deliver more value to our users.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Meet Our Team Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-3xl font-bold text-center">Meet Our Team</h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
          <div className="text-center">
            <img
              src="/images/abraham.jpg"
              alt="Abraham Ronaldson O. Roxas"
              className="w-24 h-24 mx-auto rounded-full object-cover"
            />
            <h3 className="mt-4 text-lg font-bold">Abraham Ronaldson O. Roxas</h3>
            <p className="text-gray-600">Fullstack Developer</p>
            <p className="mt-2 text-sm text-gray-500">
              Abraham is a Fullstack Developer who loves to learn new things and is a fast learner.
            </p>
          </div>
          
          <div className="text-center">
            <img
              src="/images/ralph.jpg" 
              alt="Ralph Laurenz C. Baring"
              className="w-24 h-24 mx-auto rounded-full object-cover"
            />
            <h3 className="mt-4 text-lg font-bold">Ralph Laurenz C. Baring</h3>
            <p className="text-gray-600">Frontend Developer</p>
            <p className="mt-2 text-sm text-gray-500">
             Is a Frontend Developer who loves to learn new things and is a fast learner.
            </p>
          </div>
          
          <div className="text-center">
            <img
              src="/images/samuel.jpg" 
              alt="Samuel Vincent Y. Aque"
              className="w-24 h-24 mx-auto rounded-full object-cover"
            />
            <h3 className="mt-4 text-lg font-bold">Samuel Vincent Y. Aque</h3>
            <p className="text-gray-600">UI/UX</p>
            <p className="mt-2 text-sm text-gray-500">
              Samuel is a UI/UX designer who loves to learn new things and is a fast learner.
            </p>
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="bg-black text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold">Join Our Journey</h2>
          <p className="mt-4 text-lg">
            We're just getting started. Join so you can start taking control of your financial future with UCASH.
          </p>
          <button
            className="mt-6 bg-blue-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors"
            onClick={() => navigate('/')} // Redirect to the Landing page
          >
            Join us now
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;