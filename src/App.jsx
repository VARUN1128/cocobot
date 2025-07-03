import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import "./App.css";
import FounderImage from "./assets/images/Founder.jpg";
import CTOImage from "./assets/images/CTO.jpg";
import HeadImage from "./assets/images/head.jpg";
import KAUImage from "./assets/images/KAU.png";
import KSMImage from "./assets/images/ksum.png";
import LivoImage from "./assets/images/livo.png";
import NABARDImage from "./assets/images/NABARD.png";
import MakerVillageImage from "./assets/images/maker.png";
import AchievementOne from "./assets/images/award-1.jpeg";
import AchievementTwo from "./assets/images/award-2.jpeg";
import ImageModal from "./components/ImageModal";
import alterLogo from "./assets/images/alter-logo.jpeg";

function App() {
  const [currentImage, setCurrentImage] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const sponsorImages = [
    MakerVillageImage,
    KAUImage,
    KSMImage,
    LivoImage,
    NABARDImage,
  ];
  const sliderRef = useRef(null);

  const achievements = [
    {
      title: "VAIGA 23",
      description:
        "1st price in the Kerala's largest 36hr non stop agri hackathon VAIGA 23 Organized by department of agriculture development and farmers welfare of Kerala",
      image: AchievementOne,
    },
    {
      title: "Rural Agri-Hackathon",
      description: "1st Place in Rural Agri-Hackathon (RIBC 3.0)",
      image: AchievementTwo,
    },
  ];

  const team = [
    {
      name: "Aswin P Krishna",
      title: "CEO & Founder",
      image: FounderImage,
    },
    {
      name: "Athul Krishna",
      title: "CTO",
      image: CTOImage,
    },
    {
      name: "Alosh Denny",
      title: "Head of AI & ML",
      image: HeadImage,
    },
  ];

  // Auto scroll through partners
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % sponsorImages.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [sponsorImages.length]);

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Add smooth scroll behavior
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    return () => {
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, []);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  // Add this function to handle image clicks
  const handleImageClick = (imageUrl) => {
    setSelectedImage(imageUrl);
  };

  // Add this function to close the modal
  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - sliderRef.current.offsetLeft);
    setScrollLeft(sliderRef.current.scrollLeft);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const distance = (x - startX) * 2;
    sliderRef.current.scrollLeft = scrollLeft - distance;
  };

  return (
    <div className="bg-gradient-to-r from-black via-gray-900 to-black text-white min-h-screen">
      {/* Hero Section with gradient */}
      <header className="bg-gradient-to-r from-black via-gray-900 to-black text-white">
        <div className="container mx-auto px-4 py-8 md:py-12">
          <nav className="flex justify-between items-center mb-16 ">
            <div className="text-2xl font-bold">Alter Sage Innovations</div>
            <div className="hidden md:flex space-x-8">
              <a
                href="#vision"
                className="hover:text-green-400 transition cursor-pointer"
                aria-label="Vision section"
              >
                Vision
              </a>
              <a
                href="#about"
                className="hover:text-green-400 transition cursor-pointer"
                aria-label="About section"
              >
                About
              </a>
              <a
                href="#partners"
                className="hover:text-green-400 transition cursor-pointer"
                aria-label="Partners section"
              >
                Partners
              </a>
              <a
                href="#achievements"
                className="hover:text-green-400 transition cursor-pointer"
                aria-label="Achievements section"
              >
                Achievements
              </a>
              <a
                href="#team"
                className="hover:text-green-400 transition cursor-pointer"
                aria-label="Team section"
              >
                Team
              </a>
              <a
                href="#contact"
                className="hover:text-green-400 transition cursor-pointer"
                aria-label="Contact section"
              >
                Contact
              </a>
            </div>
            <button
              className="md:hidden cursor-pointer"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </nav>

          {/* Mobile Menu with blur effect */}
          {isMenuOpen && (
            <div className="md:hidden fixed top-0 left-0 right-0 z-50 backdrop-blur-lg bg-black/90 h-screen">
              <div className="flex flex-col space-y-6 p-8 mt-20">
                <a
                  href="#vision"
                  className="hover:text-green-400 transition cursor-pointer py-2"
                  onClick={toggleMenu}
                >
                  Vision
                </a>
                <a
                  href="#about"
                  className="hover:text-green-400 transition cursor-pointer py-2"
                  onClick={toggleMenu}
                >
                  About
                </a>
                <a
                  href="#partners"
                  className="hover:text-green-400 transition cursor-pointer py-2"
                  onClick={toggleMenu}
                >
                  Partners
                </a>
                <a
                  href="#achievements"
                  className="hover:text-green-400 transition cursor-pointer py-2"
                  onClick={toggleMenu}
                >
                  Achievements
                </a>
                <a
                  href="#team"
                  className="hover:text-green-400 transition cursor-pointer py-2"
                  onClick={toggleMenu}
                >
                  Team
                </a>
                <a
                  href="#contact"
                  className="hover:text-green-400 transition cursor-pointer py-2"
                  onClick={toggleMenu}
                >
                  Contact
                </a>
              </div>
            </div>
          )}
        </div>
      </header>

      <motion.div
        className="max-w-4xl px-5 mx-20"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1
          className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-gray-300 via-green-400 to-gray-100 bg-clip-text text-transparent"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Let's Explore the Future of Agricultural Robotics
        </motion.h1>

        <p className="text-xl md:text-4xl mb-10 text-gray-300 font-poppins">
          With advanced robotics and AI, we're revolutionizing agriculture for a
          smarter, faster, and more sustainable future.
        </p>
        <button className="bg-green-500 hover:bg-green-400 text-white px-10 py-4 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
          Learn More
        </button>
      </motion.div>

      {/* About Us Section */}
      <motion.section
        id="vision"
        className="py-20 md:py-28 100 flex justify-center items-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <div className="container mx-auto px-4">
          <motion.div
            className="max-w-3xl mx-auto  shadow-2xl rounded-xl p-8 md:p-12 border border-gray-200 relative overflow-hidden"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            whileHover={{
              scale: 1.02,
              boxShadow: "0px 10px 30px rgba(0,0,0,0.15)",
            }}
          >
            {/* Floating Gradient Effects */}
            <motion.div
              className="absolute -top-6 -left-6 w-32 h-32 bg-blue-300 rounded-full opacity-20 blur-3xl"
              animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            ></motion.div>
            <motion.div
              className="absolute bottom-0 right-0 w-24 h-24 bg-indigo-400 rounded-full opacity-20 blur-3xl"
              animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.5, 0.2] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
            ></motion.div>

            {/* Heading with Animation */}
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-center text-gray-200"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            >
              About Us
            </motion.h2>

            {/* Animated Paragraph */}
            <motion.p
              className="text-lg md:text-xl leading-relaxed text-gray-200 text-center mt-6 px-2 md:px-6"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
            >
              At <span className="font-semibold text-blue-600">Altersage</span>,
              we believe in fostering an environment of innovation,
              collaboration, and continuous growth. Our culture is built on the
              foundation of mutual respect, creative thinking, and a commitment
              to excellence in agricultural technology.
            </motion.p>
          </motion.div>
        </div>
      </motion.section>

 {/* Marquee Section */}
<div className="bg-[#1e1e1e] h-24 overflow-hidden whitespace-nowrap flex items-center relative">
  <div className="flex min-w-full animate-marquee space-x-12 text-white text-3xl font-medium mx-4 items-center">
    <span>Agricultural Innovation</span>
    <span>•</span>
    <span>Robotic Solutions</span>
    <span>•</span>
    <span>Smart Farming</span>
    <span>•</span>
    <span>Sustainable Agriculture</span>
    <span>•</span>
    <span>AI-Powered Systems</span>
    <span>•</span>
    <span>Precision Farming</span>
    <span>•</span>
    <span>Future of Agriculture</span>
    <span>•</span>
    <span>Farm Automation</span>
    <span>•</span>
    <span>Tech Innovation</span>
    <span>•</span>
    <span>Eco-Friendly Solutions</span>
  </div>

  {/* Duplicate content for seamless effect */}
  <div className="flex min-w-full animate-marquee space-x-12 text-white text-3xl font-medium mx-4 items-center">
    <span>Agricultural Innovation</span>
    <span>•</span>
    <span>Robotic Solutions</span>
    <span>•</span>
    <span>Smart Farming</span>
    <span>•</span>
    <span>Sustainable Agriculture</span>
    <span>•</span>
    <span>AI-Powered Systems</span>
    <span>•</span>
    <span>Precision Farming</span>
    <span>•</span>
    <span>Future of Agriculture</span>
    <span>•</span>
    <span>Farm Automation</span>
    <span>•</span>
    <span>Tech Innovation</span>
    <span>•</span>
    <span>Eco-Friendly Solutions</span>
  </div>
</div>


      {/* Our Mission Section */}
      <motion.section
        id="about"
        className="py-16 md:py-24 50 flex justify-center items-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <div className="container mx-auto px-4">
          {/* Animated Heading */}
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center text-gray-200 mb-12"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          >
            Our Mission
          </motion.h2>

          {/* Mission Card */}
          <motion.div
            className="max-w-3xl mx-auto  shadow-lg rounded-xl p-8 md:p-12 border border-gray-200 relative overflow-hidden"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            whileHover={{
              scale: 1.02,
              boxShadow: "0px 10px 30px rgba(0,0,0,0.15)",
            }}
          >
            {/* Floating Gradient Effects */}
            <motion.div
              className="absolute -top-6 -left-6 w-32 h-32 bg-green-300 rounded-full opacity-20 blur-3xl"
              animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            ></motion.div>
            <motion.div
              className="absolute bottom-0 right-0 w-24 h-24 bg-indigo-400 rounded-full opacity-20 blur-3xl"
              animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.5, 0.2] }}
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
            ></motion.div>

            {/* Mission Text */}
            <motion.p
              className="text-lg md:text-xl leading-relaxed text-gray-200 text-center"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
            >
              At{" "}
              <span className="font-semibold text-green-600">
                Altersage Innovations
              </span>
              , our mission is to revolutionize agriculture by developing
              intelligent robotic solutions that empower farmers with
              automation, precision, and efficiency. We strive to integrate
              AI-driven technology to optimize resource usage, reduce
              environmental impact, and ensure sustainable farming for future
              generations.
            </motion.p>
          </motion.div>
        </div>
      </motion.section>

      {/* Partners Section with improved animation */}
      <motion.section
        id="Partners"
        className="mt-20 md:mt-10 50 text-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        transition={{ duration: 0.8 }}
      >
        <div className=" mx-auto px-4">
          <h2 className="text-4xl font-bold mb-16 text-center">Our Partners</h2>
          <div
            className="relative h-40 md:h-48 overflow-hidden cursor-grab active:cursor-grabbing"
            ref={sliderRef}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onMouseMove={handleMouseMove}
          >
            <div
              className="flex justify-center items-center space-x-24 transition-transform duration-1000 ease-in-out"
              style={{ transform: `translateX(-${currentImage * 25}%)` }}
            >
              {[...Array(4)].map(() =>
                sponsorImages.map((image, index) => (
                  <div
                    className="min-w-64 min-h-32  border-2 p-5
                                flex items-center justify-center
                                bg-white backdrop-blur-5xl rounded-3xl"
                  >
                    <img
                      key={index}
                      src={image}
                      alt={`Sponsor ${index + 1}`}
                      className="h-32 md:h-32  transition-opacity duration-300 select-none object-contain"
                      draggable="false"
                    />
                  </div>
                )),
              )}
            </div>
          </div>
        </div>
      </motion.section>

      {/* Achievements Section */}
      <motion.section
        id="achievements"
        className="py-16 md:pt-10 text-white "
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-4xl font-bold mb-16 text-center"
            variants={fadeIn}
          >
            Our Achievements
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                className="group  border rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                variants={fadeIn}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div
                  className="relative w-full h-64 overflow-hidden cursor-pointer"
                  onClick={() => handleImageClick(achievement.image)}
                >
                  <img
                    src={achievement.image}
                    alt={achievement.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-4 text-gray-100">
                    {achievement.title}
                  </h3>
                  <p className="text-gray-200 text-lg leading-relaxed">
                    {achievement.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Add the modal component */}
      <ImageModal
        isOpen={!!selectedImage}
        onClose={handleCloseModal}
        imageUrl={selectedImage}
      />

      {/* Team Section with hover effects */}
      <motion.section
        id="team"
        className="py-20 md:py-16 50"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-4xl font-bold mb-16 text-center"
            variants={fadeIn}
          >
            Our Team
          </motion.h2>
          <div className="flex justify-center items-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 max-w-6xl">
              {team.map((member, index) => (
                <motion.div
                  key={index}
                  className="flex flex-col items-center justify-center text-center  shadow-lg rounded-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                  variants={fadeIn}
                  whileHover={{ y: -8 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="w-full h-56">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover rounded-t-lg transition duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-semibold mb-2">
                      {member.name}
                    </h3>
                    <p className="text-gray-600 text-lg">{member.title}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* Footer with gradient */}
      <motion.footer
        id="contact"
        className="bg-gradient-to-b from-black to-gray-900 text-white py-16"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
      >
        <div className=" mx-auto px-4">
          <div className="flex justify-between mx-10">
            <div className="text-center flex flex-col items-center justify-center">
              <h3 className="text-xl font-bold mb-4">Alter Sage Innovations</h3>
            </div>
            <div className="text-right">
              <h3 className="text-xl font-bold mb-4">Contact Us</h3>

              <p className="mb-2">Phone: 9847429917</p>
              <p>Email: altersageinnovations@gmail.com</p>
              <p className="mb-2 w-7xl">
                Top Floor, Computer Centre Building, IIMK Campus, PO, Kozhikode,
                Kerala 673570
              </p>
            </div>
          </div>
        </div>
        <div className="text-center mt-8">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Alter Sage Innovations. All rights
            reserved.
          </p>
        </div>
      </motion.footer>
    </div>
  );
}

export default App;
