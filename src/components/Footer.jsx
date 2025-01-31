import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white border-t border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Logo and Contact Section */}
          <div className="md:col-span-1">
            <div className="mb-6">
              {/* Replace with your actual logo */}
              <div className="bg-gray-700 h-12 w-32 rounded mb-4"></div>
              <p className="text-sm text-gray-400 mt-4">
                Empowering meaningful connections through innovative, empathy-driven solutions
              </p>
            </div>
            <div className="mt-4">
              <p className="text-sm text-gray-400">Kottopakonda Road, Nansuangquatu - 522601</p>
              <p className="text-sm text-gray-400">Palassia Dist. Andrea Pascale 522601</p>
              <Link href="mailto:support@sepmay.com" className="text-blue-400 hover:text-blue-300 text-sm mt-2 block">
                support@sepmay.com
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Privacy Policy', 'Refund Policy', 'Terms & Conditions'].map((link) => (
                <li key={link}>
                  <Link href="#" className="text-gray-400 hover:text-white text-sm">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Offerings */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold mb-4">Explore Our Offerings</h3>
            <ul className="space-y-2">
              {['UI/UX Design', 'Digital Marketing', 'Empathies: AI Solutions', 'AI Chatbots & Automation', 'Custom Web & App Development'].map((service) => (
                <li key={service}>
                  <Link href="#" className="text-gray-400 hover:text-white text-sm">
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="text-gray-400 text-sm mb-4">
              Get Every Single Update to Join Our Newsletter
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Email Address"
                className="bg-gray-800 rounded px-4 py-2 text-sm flex-grow"
              />
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded text-sm">
                Sign Up
              </button>
            </div>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex items-center justify-center gap-6 mb-8">
            {/* Replace these with actual payment icons */}
            <div className="h-8 w-16 bg-gray-700 rounded"></div>
            <div className="h-8 w-16 bg-gray-700 rounded"></div>
            <div className="h-8 w-16 bg-gray-700 rounded"></div>
          </div>
          
          <p className="text-center text-gray-400 text-sm">
            © 2024 Segnoty Technologies Pvt Ltd. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;