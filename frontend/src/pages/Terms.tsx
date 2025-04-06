import { useNavigate } from 'react-router-dom';

const Terms = () => {
  const navigate = useNavigate();

  const handleAccept = () => {
    navigate('/register');
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-8 px-4">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-4xl">
        <h1 className="text-3xl font-extrabold mb-4 text-gray-900 text-center">
          Terms, Conditions, and Policies
        </h1>
        <p className="text-base text-gray-800 text-center mb-6">
          Last updated: June 1, 2025
        </p>

        <div className="space-y-8">
          {/* Section 1 */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">1. Introduction</h2>
            <p className="text-base text-gray-800 leading-relaxed">
              Welcome to UCASH ("we," "our," or "us"). By accessing or using our financial management services, you agree to be bound by these Terms and Conditions ("Terms"). Please read these Terms carefully.
            </p>
          </div>

          {/* Section 2 */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">2. Account Registration and Security</h2>
            <p className="text-base text-gray-800 leading-relaxed">
              To use our services, you must create an account with accurate, complete, and updated information. You are responsible for maintaining the confidentiality of your account credentials.
            </p>
            <p className="text-base text-gray-800 leading-relaxed">
              You agree to notify us immediately of any unauthorized use of your account or any other breach of security. We will not be liable for any loss that you may incur as a result of someone else using your account.
            </p>
          </div>

          {/* Section 3 */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">3. Privacy Policy</h2>
            <p className="text-base text-gray-800 leading-relaxed">
              Our Privacy Policy describes how we handle the information you provide to us when you use our services. By using our services, you agree that we can use such information in accordance with our Privacy Policy.
            </p>
            <div className="bg-gray-100 p-4 rounded-md mt-3">
              <h3 className="text-lg font-bold text-gray-900 mb-2">Data We Collect:</h3>
              <ul className="list-disc list-inside text-base text-gray-800 leading-relaxed">
                <li>Personal identification information (name, email address, phone number)</li>
                <li>Financial information (transaction history, account balances)</li>
                <li>Usage data (how you interact with our services)</li>
                <li>Device information (IP address, browser type, operating system)</li>
              </ul>
            </div>
          </div>

          {/* Section 4 */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">4. Financial Data and Accuracy</h2>
            <p className="text-base text-gray-800 leading-relaxed">
              While we strive to provide accurate financial information, we cannot guarantee the accuracy of all data. You should verify all information and consult with a financial advisor for professional advice.
            </p>
            <p className="text-base text-gray-800 leading-relaxed">
              We are not responsible for any financial decisions you make based on the information provided through our platform.
            </p>
          </div>

          {/* Section 5 */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">5. Intellectual Property Rights</h2>
            <p className="text-base text-gray-800 leading-relaxed">
              Our platform and its contents are protected by copyright, trademark, and other laws. You may not modify, reproduce, distribute, create derivative works, publicly display or perform, or in any way exploit any of our content without express permission.
            </p>
          </div>

          {/* Section 6 */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">6. Termination</h2>
            <p className="text-base text-gray-800 leading-relaxed">
              We reserve the right to suspend or terminate your account and access to our services at any time for any reason, including but not limited to a violation of these Terms.
            </p>
          </div>

          {/* Section 7 */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">7. Changes to Terms</h2>
            <p className="text-base text-gray-800 leading-relaxed">
              We may revise these Terms from time to time. The most current version will always be posted on our website. By continuing to use our services after any changes, you accept the revised Terms.
            </p>
          </div>

          {/* Section 8 */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-3">8. Contact Information</h2>
            <p className="text-base text-gray-800 leading-relaxed">
              If you have any questions about these Terms, please contact us at support@ucash.com.
            </p>
          </div>
        </div>

        {/* Checkbox and Button */}
        <div className="mt-8 flex items-center justify-center">
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              className="h-5 w-5 text-blue-500 border-gray-300 rounded focus:ring-blue-500"
              onChange={handleAccept}
            />
            <span className="text-sm text-gray-800">
              I have read and accept the Terms, Conditions, and Policies
            </span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Terms;