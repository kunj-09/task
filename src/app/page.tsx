'use client'

import Image from "next/image";
import { useState } from "react";
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import { motion } from "framer-motion";


export default function Home() {
  // section icons 
  const icons = [
    "/React.svg",
    "React.svg",
    "React.svg",
    "React.svg",
    "DarkGithub.svg",
    "React.svg",
    "React.svg",
  ];
  const [position, setPosition] = useState(0);
  const totalIcons = icons.length;

  const handleNext = () => {
    setPosition((prev) => (prev + 1) % totalIcons); // Loop to the start after the last icon
  };

  const handlePrev = () => {
    setPosition((prev) => (prev - 1 + totalIcons) % totalIcons); // Loop to the end after the first icon
  };



  const testimonials = [
    {
      quote:
        "Sepnoty's app and website development exceeded our expectations, delivering exactly what we needed!",
      name: 'Ananya Sharma',
      role: 'Client (UI/UX Design & App Development)',
    },
    {
      quote:
        'Their digital marketing strategies helped us reach new audiences and significantly grow our business.',
      name: 'Priya Desai',
      role: 'Client (Digital Marketing)',
    },
    
  ];
  const services = [
    { title: 'UI/UX Design', desc: 'Creating engaging, user-friendly experiences for all.', img: 'UIUX.svg' },
    { title: 'Custom Web & App Development', desc: 'Tailored digital platforms to meet your needs.', img: 'service-icon-CustomWeb.svg' },
    { title: 'Empathetic AI Solutions', desc: 'AI that fosters genuine connections and support.', img: 'service-icon-EmpathyAi.svg' },
    { title: 'AI Chatbots & Automation', desc: 'Automated tools for seamless customer interactions.', img: 'service-icon-AIChat.svg' },
    { title: 'Digital Marketing', desc: 'Strategies to boost brand visibility and growth.', img: 'service-icon-Digital.svg' }
  ];

  

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqItems = [
    {
      question: "What is Sapnoy?",
      answer: "Add your answer about Sapnoy here..."
    },
    {
      question: "How can I join the Sepnetian Club?",
      answer: (
        <>
          Our membership plan, priced at {' '}
          <span className="line-through text-red-600">₱34,450</span>{' '}
          is currently available at an{' '}
          <span className="font-bold text-blue-600">80% discount</span>{' '}
          for {' '}
          <span className="font-bold text-green-600">₱14,890</span>. 
          Sign up on our Sapnoy Club page to enjoy exclusive benefits.
        </>
      )
    }
  ];
  const [index, setIndex] = useState(0);

  const nextTestimonial = () => {
    setIndex((prev) => (prev + 1) % testimonials.length);
  };
  const prevTestimonial = () => {
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };
  
  return (
    <section className="min-h-screen relative overflow-hidden">
     <Navbar/>
     
      {/* Hero Section */}
      <div className="container mx-auto px-8 pt-32 pb-24 relative">
        {/* Wave Background */}
        <div className="absolute bottom-0 left-0 w-full -z-10">
          <Image 
            src="/Vector.png" 
            alt="Wave Background" 
            className="w-full h-auto"
            style={{ transform: 'translateY(40%)' }}
          />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 relative z-10">
            <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
              Connect <span className="bg-gradient-to-r from-[#A1F609] to-[#00DEEB] bg-clip-text text-transparent">
                SHARE</span><br />
              <span className="text-white">Grow <span className="text-[#B933EA]">Instantly</span></span>
            </h1>

            <p className="text-white/80 text-lg max-w-xl">
              Join a community that values empathy, connection, and meaningful support.
              Discover AI-driven solutions designed to split and empower every interaction.
            </p>

            <div className="flex space-x-4">
              <button className="bg-[#9333EA] text-white px-8 py-3 rounded-lg hover:bg-[#00C4D6] transition-colors">
                Sign Up
              </button>
              <button className="text-white border-b border-transparent hover:border-white transition-colors">
                See How It Works
              </button>
            </div>

            {/* Features */}
            <div className="flex flex-wrap gap-4 pt-8">
              <div className="bg-white/10 text-white px-4 py-2 rounded-full">
                Instant Empathy Chats
              </div>
              <div className="bg-white/10 text-white px-4 py-2 rounded-full">
                Secure AI Conversations
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="relative z-10">
            {/* Main Image */}
            <div className="relative w-full aspect-square">
              <Image 
                src="/Forground.png"
                alt="Main Visual"
                
              />

            </div>

            {/* Cloud Placeholder */}
            <Image src="Cloud2.png" alt="" className="absolute -top-20 -right-20 w-64 h-64 bg-white/10 rounded-full blur-xl opacity-50" />
            <Image src="Cloud1.png" alt=""/>

{/* Bulb Image */}
<div className="absolute top-[-100] left-[-10] w-40 md:w-40">
  <Image src="Bulb.png" alt="Bulb Icon" />
  </div> 

          </div>
        </div>
      </div>

      {/* Connection Experience Section */}
      
      <div className="bg-[#000A1F] text-white p-8 rounded-xl">
  {/* Main Section */}
  <div className="relative w-full">
    {/* Background Text */}
    <div className="absolute text-[8rem] [-webkit-text-stroke:1px_rgba(255,255,255,0.3)] font-bold text-transparent top-[-100] left-20 w-full text-left select-none max-lg:text-[4rem] max-lg:left-10">
      BRAND
    </div>

    {/* Left Side - Heading */}
    <div className="flex flex-col lg:flex-row justify-center items-center text-center lg:text-left"> 
      {/* Left Side - Heading */}
      <Image className="h-3 w-13 absolute left-20 top-[-20] max-lg:left-10 max-lg:top-[-10]" src="Pseudo.png" alt="" />
      <div className="max-w-xl px-4 lg:px-0">
        <h1 className="text-4xl font-bold relative mb-2 max-lg:text-2xl"> 
          Sepnoty: <span className="text-green-400">Building</span> Meaningful Connections 
          <span className="text-purple-500">Worldwide..!</span>
        </h1>
      </div>

      {/* Right Side - Description */}
      <div className="max-w-lg mt-1 px-4 lg:px-0"> 
        <p className="text-gray-300">
          At Sepnoty, we're dedicated to creating impactful, empathetic AI solutions that
          connect people and brands across the globe, fostering growth and meaningful interactions.
        </p>
      </div>
    </div>
  </div>
  <hr className="border-t border-gray-700 flex justify-center mt-6 w-full"/>

  <div className="mt-6 flex justify-center items-center gap-4 w-full overflow-hidden">
      {/* Left Arrow */}
      <button onClick={handlePrev} className="p-2 rounded-full bg-gray-700 hover:bg-gray-600">
        <Image src="Left.png" alt="" />
      </button>

      {/* Icons List - Swiper */}
      <div className="w-64 md:w-96 flex overflow-hidden relative bg-[#fff]">
        <motion.div
          className="flex gap-4"
          animate={{ x: `-${position * 60}px` }} // Moves icons left/right
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          {icons.concat(icons).map((icon, index) => ( // Duplicate for looping effect
            <div key={index} className="p-3 rounded-lg">
              <Image src={icon} alt="" className="w-12 h-12" />
            </div>
          ))}
        </motion.div>
      </div>

      {/* Right Arrow */}
      <button onClick={handleNext} className="p-2 rounded-full bg-gray-700 hover:bg-gray-600">
        <Image src="Right.png" alt="" />
      </button>
    </div>
</div>

    

{/* second section  */}


<section className="relative bg-[#0b0d1c] text-white py-20 px-6">
      <div className="container mx-auto flex flex-col lg:flex-row items-center lg:items-start">
        {/* Left Side Image */}
        <div className="lg:w-1/2 flex justify-center">
          <Image 
            src="Human.png" // REPLACE WITH ACTUAL IMAGE
            alt="Illustration of a person working on a laptop"
            width={500} 
            height={500} 
            className="w-full max-w-sm"
          />
        </div>

        {/* Right Side Content */}
        <div className="lg:w-1/2 text-center lg:text-left mt-10 lg:mt-0 relative w-full">
  <Image className="h-3 w-13 absolute left-20 top-[-20]" src="Pseudo.png" alt="" />

  {/* Background Text */}
  <span className="absolute text-[7rem] font-bold text-transparent  [-webkit-text-stroke:1px_rgba(255,255,255,0.3)] top-[-100px] select-none">
    FEATURES 
</span>
          <h2 className="text-4xl font-bold">
            <span className="text-green-400">Explore</span> Our Professional <br /> Business <span className="text-purple-400">Solutions</span>
          </h2>
          
          {/* Features List */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-center space-x-4">
              <Image 
                src="Empathy.svg" // REPLACE WITH ACTUAL IMAGE
                alt="Empathetic AI Icon"
                width={40} 
                height={40} 
              />
              <div>
                <h3 className="text-lg font-semibold">Empathetic AI</h3>
                <p className="text-gray-400">Human-Centered Innovation</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <Image  
                src="Web.svg" // REPLACE WITH ACTUAL IMAGE
                alt="Web & App Development Icon"
                width={40} 
                height={40} 
              />
              <div>
                <h3 className="text-lg font-semibold">Web & App Development</h3>
                <p className="text-gray-400">Tailored Solutions</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <Image
                src="Digital.svg" // REPLACE WITH ACTUAL IMAGE
                alt="Digital Marketing Icon"
                width={40} 
                height={40} 
              />
              <div>
                <h3 className="text-lg font-semibold">Digital Marketing</h3>
                <p className="text-gray-400">Brand Growth</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <Image  
                src="UIUX.svg" // REPLACE WITH ACTUAL IMAGE
                alt="UI/UX Design Icon"
                width={40} 
                height={40} 
              />
              <div>
                <h3 className="text-lg font-semibold">UI/UX Design</h3>
                <p className="text-gray-400">Intuitive Experiences</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>


{/* Third section  */}


<section className="relative bg-[#0b0d1c] text-white py-16 px-20 ">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center  justify-between ">
        {/* Left Content */}
        
        <div className="absolute text-[6rem] font-bold text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.3)] top-20 select-none">
    WHO WE ARE? 
</div>
<Image className="h-3 w-13 absolute  top-40" src="Pseudo.png" alt="" />
        <div className="md:w-1/2 text-center md:text-left ">
         
          <h2 className="text-5xl font-bold uppercase relative text-gray-800">
     
          </h2>
          <p className="mt-4 text-lg font-medium">
            We blend <span className="text-green-400 font-bold">Empathy</span> &
            <span className="text-purple-400 font-bold"> innovation</span> to drive
            business growth with AI and <span className="text-blue-400 font-bold">digital solutions</span>.
          </p>

          {/* Feature List */}
          <div className="mt-6 flex flex-wrap gap-4">
            {['Tech Solutions', 'IT Consulting', 'Web Solutions', 'Business Growth', 'Product Design'].map(
              (item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 bg-gray-900 text-white py-2 px-4 rounded-lg shadow-md"
                >
                  <Image 
                    src="/Check.svg" // REPLACE WITH ACTUAL IMAGE
                    alt="Check"
                    width={20}
                    height={20}
                  />
                  <span className="font-medium">{item}</span>
                </div>
              )
            )}
          </div>
        </div>

        {/* Right Image */}
        <div className="md:w-1/2 flex justify-center mt-10 md:mt-0">
          <Image 
            src="About.png" // REPLACE WITH ACTUAL IMAGE
            alt="Who We Are Illustration"
            width={450}
            height={450}
          />
        </div>
      </div>
    </section>




    {/* fourth section   */}

    <section className="relative bg-[#0b0d1c] text-white py-16 px-20 text-center">
  {/* Background Text */}
  <div className="relative w-full ">
  {/* Background Text */}
  <div className="absolute text-[8rem] [-webkit-text-stroke:1px_rgba(255,255,255,0.3)] font-bold text-transparent  top-[-100] text-center w-full text-left select-none">
    SERVICE 
  </div>
  <div className="flex justify-center "> {/* Added gap-x-8 */}
  {/* Left Side - Heading */}
  <Image className="h-3 w-13 absolute top-[-10] " src="Pseudo.png" alt="" />
  </div> 
  </div>   
  {/* Heading */}
  <h2 className="relative z-10 text-4xl font-semibold mb-10">
    <span className="text-green-400">Powerful</span> Features to Fuel Your Business<br></br> Growth and <span className="text-purple-400">Success</span>
  </h2>
  
  {/* Services Grid */}
  <div className="relative flex flex-wrap justify-center items-center gap-10 px-10">
    {/* Left Side Items */}
    <div className="flex flex-col gap-8">
      {services.slice(2, 4).map((service, index) => (
        <div key={index} className="flex items-center gap-4 bg-gray-800 rounded-lg px-6 py-4 w-80 shadow-md relative">
          <Image src={service.img} alt={service.title} width={50} height={50} />
          <div className="text-left">
            <h3 className="text-lg font-semibold">{service.title}</h3>
            <p className="text-sm text-gray-400">{service.desc}</p>
          </div>
          <span className="absolute right-4 text-gray-400">➝</span>
        </div>
      ))}
    </div>
    
    {/* Center Column with Top Card and Image */}
    <div className="flex flex-col gap-8">
      {/* Moved Bottom Service to Top */}
      <div className="flex items-center gap-4 bg-gray-800 rounded-lg px-6 py-4 w-80 shadow-md relative">
        <Image src={services[4].img} alt={services[4].title} width={50} height={50} />
        <div className="text-left">
          <h3 className="text-lg font-semibold">{services[4].title}</h3>
          <p className="text-sm text-gray-400">{services[4].desc}</p>
        </div>
        <span className="absolute right-4 text-gray-400">➝</span>
      </div>
      
      {/* Center Image */}
      <div className="relative w-72 h-72">
        <Image src="Service.png" alt="Graph Illustration" />
      </div>
    </div>
    
    {/* Right Side Items */}
    <div className="flex flex-col gap-8">
      {services.slice(0, 2).map((service, index) => (
        <div key={index} className="flex items-center gap-4 bg-gray-800 rounded-lg px-6 py-4 w-80 shadow-md relative">
          <Image src={service.img} alt={service.title} width={50} height={50} />
          <div className="text-left">
            <h3 className="text-lg font-semibold">{service.title}</h3>
            <p className="text-sm text-gray-400">{service.desc}</p>
          </div>
          <span className="absolute right-4 text-gray-400">➝</span>
        </div>
      ))}
    </div>
  </div>
</section>



   


{/* fifth section  */}


<section className="bg-[#0b0d1c] relative flex flex-col items-center py-16 px-4 md:px-8 lg:px-16 text-center">
      {/* Background Text */}
      <div className="absolute text-[6rem] font-bold text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.3)] top-[-20] text-center select-none">
    SEPNOTY CLUB 
</div>
      {/* Main Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
  <Image className="h-3 w-13 absolute left-20 top-[-20]" src="Pseudo.png" alt="" />

        <h1 className="text-4xl font-bold text-white mb-4 py-10">
    Join Sepnoty Club<br></br> for exclusive  <span className="text-[#F3CA49]">resources growth</span>
  </h1>
  {/* Membership and Payment Cards */}
  <div className="relative z-10 flex justify-between mt-12">  {/* Changed justify-center to justify-between */}
  {/* <Image
    src="glass.png"
    width={200}
    height={50}
    alt="Membership Card"
  />
  <Image
    src="glass2.png"
    width={200}
    height={50}
    alt="Payment Card"
  /> */}
</div>

        <div className="flex items-center justify-center gap-4 mt-6">
          <span>Monthly</span>
          {/* <Switch
            checked={billingCycle === "yearly"}
            onCheckedChange={() =>
              setBillingCycle(billingCycle === "monthly" ? "yearly" : "monthly")
            }
          /> */}
          <span>Yearly</span>
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="relative flex items-center justify-center mt-12 gap-6">
        {/* <FaArrowLeft className="text-blue-500 cursor-pointer" size={24} /> */}
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Basic Plan */}
          <div className="bg-white text-black rounded-xl p-6 w-64 shadow-lg">
            <h3 className="text-lg font-semibold">Basic</h3>
            <p className="text-2xl font-bold">$19 <span className="text-sm">/month</span></p>
            <ul className="mt-4 space-y-2 text-sm">
              <li>✅ Consequat ex proident</li>
              <li>✅ Deserunt sit cupidatat</li>
              <li>✅ Amet id ea et nisi cillum</li>
            </ul>
            <button className="mt-4 w-full py-2 bg-blue-500 text-white rounded-lg">
              Get started
            </button>
          </div>

          {/* Essential Plan */}
          <div className="bg-blue-500 text-white rounded-xl p-6 w-64 shadow-lg transform scale-105">
            <h3 className="text-lg font-semibold">Most popular ✨</h3>
            <h3 className="text-lg font-semibold">Essential</h3>
            <p className="text-2xl font-bold">$59 <span className="text-sm">/month</span></p>
            <ul className="mt-4 space-y-2 text-sm">
              <li>✅ Consequat ex proident</li>
              <li>✅ Deserunt sit cupidatat adipiscing</li>
              <li>✅ Amet id ea et nisi cillum consectetur</li>
              <li>✅ Excepteur nisi eiusmod proident</li>
              <li>✅ Magna eu anim commodo qui nisif</li>
            </ul>
            <button className="mt-4 w-full py-2 bg-white text-blue-500 rounded-lg">
              Get started
            </button>
          </div>

          {/* Premium Plan */}
          <div className="bg-white text-black rounded-xl p-6 w-64 shadow-lg">
            <h3 className="text-lg font-semibold">Premium</h3>
            <p className="text-2xl font-bold">$119 <span className="text-sm">/month</span></p>
            <ul className="mt-4 space-y-2 text-sm">
              <li>✅ Consequat ex proident</li>
              <li>✅ Deserunt sit cupidatat</li>
              <li>✅ Amet id ea et nisi cillum</li>
            </ul>
            <button className="mt-4 w-full py-2 bg-blue-500 text-white rounded-lg">
              Get started
            </button>
          </div>
        </div>
        
        {/* <FaArrowRight className="text-blue-500 cursor-pointer" size={24} /> */}
      </div>

      
    </section>




    {/* sixth section  */}

    <section className="min-h-screen bg-[#0b0d1c] py-24 px-6 sm:px-8 lg:px-16 xl:px-20 relative overflow-hidden">
      {/* Background FAQ Text */}
      <div className="relative ">
      <div className="absolute text-[6rem] font-bold text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.3)] top-[-20] text-center select-none">
            FAQ 
      </div>
      </div>
      

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-start gap-16 lg:gap-24">
          {/* Left Content Column */}
          <div className="lg:w-[55%] space-y-9 pt-4">
            {/* Header Section */}
            <div className="space-y-7 relative">
              <div className="flex items-center gap-5">
                <Image 
                  src="Pseudo.png"
                  alt="FAQ Icon"
                  className="w-7 h-3 left-[-20]"
                />
                {/* <h1 className="text-5xl font-bold text-gray-900 tracking-tight">
                  FAQ
                </h1> */}
              </div>
              
              <h2 className="text-3xl font-semibold text-white leading-[1.4]">
                Find answers to common questions<br />about our services.
              </h2>

              <p className="text-lg text-white leading-relaxed">
                Got questions? Our FAQ section provides quick answers to help you
                understand our services and how we can support your business goals.
              </p>
            </div>

            {/* FAQ Items */}
            <div className="space-y-8">
              {faqItems.map((item, index) => (
                <div 
                  key={index}
                  className="bg-[#292738] p-8 rounded-2xl shadow-lg border border-gray-100 transition-all"
                >
                  <button
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    className="w-full flex justify-between items-start gap-4"
                  >
                    <h3 className="text-2xl font-bold text-gray-900 text-left">
                      {item.question}
                    </h3>
                    <div className={`transform transition-transform duration-300 ${
                      openIndex === index ? 'rotate-180' : 'rotate-0'
                    }`}>
                      <Image 
                        src="arrow.svg"
                        alt="Toggle"
                        width={24}
                        height={24}
                        className="w-6 h-6 mt-1"
                      />
                    </div>
                  </button>
                  
                  <div className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? 'mt-6 opacity-100' : 'mt-0 h-0 opacity-0'
                  }`}>
                    <div className="text-gray-600 text-lg leading-relaxed">
                      {item.answer}
                      {index === 1 && (
                        <button className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-[2rem] text-lg font-medium flex items-center gap-3 transition-colors mt-6">
                          <Image 
                            src="/images/button-arrow.svg"
                            alt="Arrow"
                            width={24}
                            height={24}
                          />
                          Sign Up Now
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image Column */}
          <div className="lg:w-[45%] w-full relative aspect-square lg:aspect-[0.8/1]">
            <Image 
              src="faq.png"
              alt="FAQ Illustration"
              className="object-contain object-center"
              
            />
          </div>
        </div>
      </div>
    </section>

    {/* Seventh section  */}

    <section className="relative bg-[#0D0D1E] text-white py-10 px-20 md:px-12 ">
      {/* Background Text */}
      <Image 
                  src="Pseudo.png"
                  alt="FAQ Icon"
                  className="w-7 h-3  "
                />
       <h1 className="absolute text-[6rem] font-bold text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.3)] top-[-20] left-40 right-40 text-center select-none">
            ACHIEVEMNETS 
      </h1>
     
      
      {/* Heading and Description */}
      <div className="text-center mb-12 relative z-10">
        <h2 className="text-xl font-bold text-white ">Explore Our Company</h2>
        <h3 className="text-3xl font-bold text-purple-400">Milestones</h3>
        <p className="mt-4 text-gray-300 max-w-xl mx-auto">
          Discover the milestones that have shaped our journey. Our achievements reflect our
          commitment to innovation, empathy, and creating meaningful impact.
        </p>
      </div>
      
      {/* Achievements Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-4">
  {/* Card 1 */}
  <div className="bg-[#1E1E30] p-8 rounded-xl text-center shadow-xl hover:transform hover:scale-105 transition-transform duration-300 group">
    <div className="mb-6 inline-flex items-center justify-center w-20 h-20 rounded-full bg-[#2D2D42] group-hover:bg-[#3A3A5A] transition-colors">
      <Image 
        src="feature-icon-1.png.png" 
        width={40} 
        height={40} 
        alt="Projects" 
        className="text-blue-500"
      />
    </div>
    <h3 className="text-4xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
      017+
    </h3>
    <p className="text-gray-300 uppercase text-sm tracking-widest font-medium">
      Project Completed
    </p>
  </div>

  {/* Card 2 */}
  <div className="bg-[#1E1E30] p-8 rounded-xl text-center shadow-xl hover:transform hover:scale-105 transition-transform duration-300 group">
    <div className="mb-6 inline-flex items-center justify-center w-20 h-20 rounded-full bg-[#2D2D42] group-hover:bg-[#3A3A5A] transition-colors">
      <Image 
        src="feature-icon-2.png.png" 
        width={40} 
        height={40} 
        alt="Clients" 
      />
    </div>
    <h3 className="text-4xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
      087+
    </h3>
    <p className="text-gray-300 uppercase text-sm tracking-widest font-medium">
      Satisfied Clients
    </p>
  </div>

  {/* Card 3 */}
  <div className="bg-[#1E1E30] p-8 rounded-xl text-center shadow-xl hover:transform hover:scale-105 transition-transform duration-300 group">
    <div className="mb-6 inline-flex items-center justify-center w-20 h-20 rounded-full bg-[#2D2D42] group-hover:bg-[#3A3A5A] transition-colors">
      <Image 
        src="feature-icon-3.png.png" 
        width={40} 
        height={40} 
        alt="Teams" 
      />
    </div>
    <h3 className="text-4xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
      09+
    </h3>
    <p className="text-gray-300 uppercase text-sm tracking-widest font-medium">
      Expert Teams
    </p>
  </div>
</div>
    </section>


{/* eight section  */}


<section className="relative bg-[#0b0d1c] text-white py-20 px-6 md:px-16">
      {/* Background Text "SAY'S" */}
      <h1 className="absolute text-[6rem] font-bold text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.3)] top-[-20] left-40 right-40 text-center select-none">
            SAY'S 
      </h1>
      <div className="flex justify-center "> {/* Added gap-x-8 */}
  {/* Left Side - Heading */}
  <Image className="h-3 w-13 absolute top-10 " src="Pseudo.png" alt="" />
  </div> 
                       
      <h2 className="text-center text-2xl md:text-3xl font-semibold">
        People's Say About Our <br /> Support & Services
      </h2>

      {/* Left Side Icons */}
      <div className="absolute left-0 top-0 bottom-0 w-100">
    <Image 
      src="bg-pattern-8.png" 
      alt="Left Icons" 
      className="opacity-80 h-full w-auto object-cover"
    />
  </div>

      {/* Right Side Icons */}
      <div className="absolute right-0 top-0 bottom-0 w-100">
    <Image 
      src="bg2.png" 
      alt="Right Icons" 
      className="opacity-80 h-full w-auto object-cover"
    />
  </div>

      <div className="flex justify-center items-center mt-12 relative">
        {/* Left Button */}
        <button onClick={prevTestimonial} className="absolute left-0 md:left-10 text-xl">
          <Image src="Buttonleft.png" alt="" className="text-purple-400 hover:text-white" />
        </button>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
          {testimonials.map((testimonial, i) => (
            <div
              key={i}
              className={`bg-[#1A1A1A] p-6 rounded-lg transition-all duration-300 ${
                i === index ? 'opacity-100' : 'opacity-40'
              }`}
            >
              <blockquote className="text-lg italic relative">
              <Image src="span.icon.svg" alt="" className="p-3"/>
                <span className="text-purple-400 text-3xl">&ldquo;</span>
                {testimonial.quote}
              </blockquote>
              <div className="mt-4">
                <p className="font-bold text-white">{testimonial.name}</p>
                <p className="text-sm text-gray-400">{testimonial.role}</p>
              </div>
              {/* Placeholder for Chat Icon */}
              <div className="flex justify-end mt-4">
                <Image src="icon-chat.svg" alt="Chat Icon" width={38} height={38} />
              </div>
            </div>
          ))}
        </div>

        {/* Right Button */}
        <button onClick={nextTestimonial} className="absolute right-0 md:right-10 text-xl">
          <Image src="Buttonright.png" alt="" className="text-purple-400 hover:text-white" />
        </button>
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center mt-6">
        {testimonials.map((_, i) => (
          <div
            key={i}
            className={`w-3 h-3 mx-1 rounded-full transition-all duration-300 ${
              i === index ? 'bg-purple-400' : 'bg-gray-600'
            }`}
          ></div>
        ))}
      </div>
    </section>
      
      {/* contact section  */}

      <section className="relative bg-[#0b0d1c] text-white py-20 px-6 md:px-16 flex flex-col md:flex-row items-center justify-between">
      <h1 className="absolute text-[6rem] font-bold text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.3)] top-[-20] left-40  text-center select-none">
            CALL 
      </h1>
      <div className="flex justify-center "> {/* Added gap-x-8 */}
  {/* Left Side - Heading */}
  <Image className="h-3 w-13 absolute top-[-10] left-[170] " src="Pseudo.png" alt="" />
  </div> 
      {/* Left Side: Illustration */}
      <div className="w-full md:w-1/2 flex justify-center">
        {/* Replace this image with your actual one */}
        <Image 
          src="WomanContact.png" // TODO: Replace with actual image
          alt="Woman working on laptop"
          width={500}
          height={400}
          className="max-w-full"
        />
      </div>
      
      {/* Right Side: Form */}
      <div className="w-full md:w-1/2 mt-10 md:mt-0">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">Ready to Work Together <br /> In News Projects ?</h2>
        
        <form className="space-y-4">
          <div className="flex space-x-4">
            <input 
              type="text" 
              placeholder="Last Name" 
              className="w-1/2 p-3 bg-gray-800 rounded-md outline-none"
            />
            <input 
              type="text" 
              placeholder="First Name" 
              className="w-1/2 p-3 bg-gray-800 rounded-md outline-none"
            />
          </div>
          <input 
            type="email" 
            placeholder="Email" 
            className="w-full p-3 bg-gray-800 rounded-md outline-none"
          />
          <input 
            type="text" 
            placeholder="Phone Number" 
            className="w-full p-3 bg-gray-800 rounded-md outline-none"
          />
          <textarea 
            placeholder="Message" 
            className="w-full p-3 bg-gray-800 rounded-md outline-none h-28"
          ></textarea>
          
          <button 
            type="submit" 
            className="w-full p-3 bg-purple-600 rounded-md text-white font-semibold hover:bg-purple-700 transition">
            Send it to the moon 🚀
          </button>
        </form>
      </div>
    </section>


    


    



    <Footer/>
    </section>
    








  )
}