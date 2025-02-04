import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-[#0B0F19] text-white border-t border-gray-700">
<div className="max-w-6xl mx-auto px-6 lg:px-8 py-12">
<div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          
          {/* Logo and Contact Section */}
          <div className="md:col-span-1">
            <div className="mb-6">
              <div className="mb-4 flex text-center">
                <img src="/SepnotyLogo.png" alt="Sepnoty Logo" className="h-12 w-auto" />
                SEPNOTY 
              </div>
              <p className="text-sm text-gray-400">
                Empowering meaningful connections through innovative, empathy-driven solutions in AI, design, and digital services.
              </p>
            </div>
            <div className="mt-4 space-y-2">
              <p className="text-sm text-gray-400">📍 Address: Kotappakonda Road, Narasaraopeta - 522601</p>
              <p className="text-sm text-gray-400">Palnadu Dist, Andhra Pradesh 522601</p>
              <Link href="mailto:support@sepnoty.com" className="text-blue-400 hover:text-blue-300 text-sm">
                ✉️ support@sepnoty.com
              </Link>
              <p className="text-sm text-gray-400">📞 +91 9347199424</p>
            </div>
          </div>

          {/* Explore Our Offerings */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold mb-4">Explore Our Offerings</h3>
            <ul className="space-y-2">
              {['UI/UX Design', 'Digital Marketing', 'Empathetic AI Solutions', 'AI Chatbots & Automation', 'Custom Web & App Development'].map((service) => (
                <li key={service}>
                  <Link href="#" className="text-gray-400 hover:text-white text-sm">
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Center Logo (Image) */}
         {/* Center Logo (Image) */}
<div className="md:col-span-1 flex justify-center items-center ml-[-20px]">
  <img src="Shapes.png" alt="Centered Logo" className="h-24 w-24 object-cover" />
</div>


          {/* Newsletter and App Download (Side by Side on Desktop) */}
          <div className="md:col-span-1 flex flex-col md:flex-row md:space-x-4">
            {/* Newsletter */}
            <div className="md:w-1/2">
              <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
              <p className="text-sm text-gray-400 mb-2">Get Every Single Update to Join Our Newsletter</p>
              <div className="flex items-center bg-gray-800 rounded-lg p-2">
                <input
                  type="email"
                  placeholder="Email Address"
                  className="bg-transparent text-sm px-2 w-full focus:outline-none"
                />
                <button className="text-blue-400 hover:text-blue-300 text-sm">Sign Up »</button>
              </div>
            </div>

            {/* Flagship App */}
            <div className="md:w-1/2">
              <h3 className="text-lg font-semibold mt-6 md:mt-0">Our Flagship App: Tepnoty</h3>
              <div className="flex-col  space-x-2 mt-3 ">
                <img src="/Group.svg" alt="Google Play" className="h-10" />
                <img src="/Group.svg" alt="App Store" className="h-10 mt-4" />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-center">
          {/* Quick Links */}
          <div className="flex space-x-6">
            {['Privacy Policy', 'Refund Policy', 'Terms & Conditions'].map((link) => (
              <Link key={link} href="#" className="text-gray-400 hover:text-white text-sm">
                {link}
              </Link>
            ))}
          </div>

          {/* Secure Payment Options */}
          <div className="mt-4 md:mt-0">
            <h3 className="text-sm font-semibold text-gray-400 mb-2">Secure Payment Options</h3>
            <div className="flex space-x-2">
              <img src="/visa.png" alt="Visa" className="h-6" />
              <img src="/mastercard.png" alt="MasterCard" className="h-6" />
              <img src="/gpay.png" alt="Google Pay" className="h-6" />
              <img src="/paypal.png" alt="PayPal" className="h-6" />
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-4 md:mt-0">
            <p className="text-gray-400 text-sm">
              © 2024 Sepnoty Technologies Pvt Ltd. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
