import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-[#0B0F19] text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        {/* Main Grid with Custom Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-[2fr,2fr,120px,3fr] gap-8 mb-12">
          {/* Column 1: Logo, Contact & Follow Us */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <img src="/SepnotyLogo.png" alt="Sepnoty Logo" className="h-12 w-auto" />
              <span className="text-2xl font-bold">SEPNOTY</span>
            </div>
            <p className="text-sm text-gray-400">
              Empowering meaningful connections through innovative, empathy-driven solutions in AI, design, and digital services.
            </p>
            <div className="space-y-3">
              <h3 className="text-lg font-semibold">Contact Us</h3>
              <p className="text-sm text-gray-400">📍 Kotappakonda Road, Narasaraopeta - 522601</p>
              <p className="text-sm text-gray-400">Palnadu Dist, Andhra Pradesh 522601</p>
              <Link href="mailto:support@sepnoty.com" className="text-blue-400 hover:text-blue-300 text-sm">
                ✉️ support@sepnoty.com
              </Link>
              <p className="text-sm text-gray-400">📞 +91 9347199424</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-semibold">Follow Us</h3>
              <div className="flex space-x-3">
                <img src="/Twitter.svg" alt="Social Icon 1" className="h-6 w-6" />
                <img src="/icon.svg" alt="Social Icon 2" className="h-6 w-6" />
                <img src="/Instagram.svg" alt="Social Icon 3" className="h-6 w-6" />
              </div>
            </div>
          </div>

          {/* Column 2: Explore Our Offerings */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Explore Our Offerings</h3>
            <ul className="space-y-3">
              {[
                'UI/UX Design',
                'Digital Marketing',
                'Empathetic AI Solutions',
                'AI Chatbots & Automation',
                'Custom Web & App Development'
              ].map((service) => (
                <li key={service}>
                  <Link href="#" className="text-sm text-gray-400 hover:text-white">
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Center Logo (Fixed Width) */}
          <div className="flex ">
            <img
              src="/Shapes.png"
              alt="Centered Logo"
              className="h-20 w-auto object-contain"
            />
          </div>

          {/* Column 4: Newsletter, Secure Payment & Flagship App */}
          <div className="flex flex-col md:flex-row md:space-x-4">
            {/* Newsletter & Secure Payment Options */}
            <div className="md:w-1/2 space-y-4">
              <h3 className="text-lg font-semibold">Newsletter</h3>
              <p className="text-sm text-gray-400">
                Get Every Single Update to Join Our Newsletter
              </p>
              <div className="flex items-center bg-gray-800 rounded-lg p-2">
                <input
                  type="email"
                  placeholder="Email Address"
                  className="bg-transparent text-sm px-2 w-full focus:outline-none"
                />
                <button className="text-blue-400 hover:text-blue-300 text-sm">SignUp</button>
              </div>
              <div className="space-y-2">
                <h3 className="text-lg font-semibold">Secure Payment Options</h3>
                <div className="flex space-x-2">
                <img src="/masterCard.svg" alt="Visa" className="h-6" />
                  <img src="/mastercard-SC.svg" alt="Visa" className="h-6" />
                  <img src="/googlePay.svg" alt="MasterCard" className="h-6" />
                  <img src="/paypal.svg" alt="Google Pay" className="h-6" />
                  <img src="/paypass.svg" alt="PayPal" className="h-6" />
                </div>
              </div>
            </div>
            {/* Flagship App */}
            <div className="md:w-1/2 mt-6 md:mt-0 flex flex-col space-y-4">
              <h3 className="text-lg font-semibold">Our Flagship App: Tepnoty</h3>
              <div className="flex flex-col space-y-3">
                <img src="/Group.svg" alt="Google Play" className="h-10" />
                <img src="/Group.svg" alt="App Store" className="h-10" />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex space-x-6">
              {['Privacy Policy', 'Refund Policy', 'Terms & Conditions'].map((link) => (
                <Link key={link} href="#" className="text-sm text-gray-400 hover:text-white">
                  {link}
                </Link>
              ))}
            </div>
            <p className="text-sm text-gray-400">
              © 2024 Sepnoty Technologies Pvt Ltd. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
