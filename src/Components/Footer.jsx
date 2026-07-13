import { Link } from "react-router-dom";

import {
  FaFacebookF,
  FaLinkedinIn,
  FaWhatsapp,
  FaYoutube,
  FaInstagram,
  // FaTiktok,
} from "react-icons/fa";

import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-[#F09818] text-white pt-14 sm:pt-20 pb-6 px-4 sm:px-6 lg:px-12">

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-12">

        {/* Brand Section */}
        <div>
          <Link to="/" className=" ">
            <img src="/ADEFAM LOGO.png" alt="logo" className="h-10 w-32 bg-white px-3.5 py-1 rounded-md" />
            {/* <h2 className="text-slate-800">ADEFAM</h2>
            <span className="text-white">Computer Infotech</span> */}
          </Link>

          <p className="mt-4 sm:mt-5 text-sm text-white leading-relaxed">
            We believe in the power of innovation! <br />
            Built by passionate people shaping the future of tech.
          </p>
        </div>

        {/* Quick Links */}
        <div className="lg:pl-15">
          <h3 className="text-white font-semibold mb-4 sm:mb-5 text-base sm:text-lg">
            Quick Links
          </h3>

          <ul className=" space-y-2 sm:space-y-3 text-sm">
            <li>
              <Link to="/" className="hover:text-white transition">
                Home
              </Link>
            </li>

            <li>
              <Link to="/about" className="hover:text-white transition">
                About
              </Link>
            </li>

            <li>
              <Link to="/courses" className="hover:text-white transition">
                Courses
              </Link>
            </li>

            <li>
              <Link to="/blog" className="hover:text-white transition">
                Blog
              </Link>
            </li>

            <li>
              <Link to="/contact" className="hover:text-white transition">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Social */}
        <div>
          <h3 className="text-white font-semibold mb-4 sm:mb-5 text-base sm:text-lg">
            Stay Connected
          </h3>

          <div className="grid grid-cols-3 gap-3 text-xl">
            {/* Facebook */}
            <a
              href="https://www.facebook.com/share/1CKkr7GgBr/?mibextid=wwXIfr"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-md hover:scale-110 transition"
            >
              <FaFacebookF className="text-blue-600 hover:text-blue-500 transition" />
            </a>

            {/* Twitter */}
            <a
              href="https://twitter.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-md hover:scale-110 transition"
            >
              <FaXTwitter className="text-black hover:text-gray-700 transition" />
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/company/adefamcomputerinfotech/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-md hover:scale-110 transition"
            >
              <FaLinkedinIn className="text-blue-700 hover:text-blue-600 transition" />
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/2348012345678"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-md hover:scale-110 transition"
            >
              <FaWhatsapp className="text-[#25D366]" />
            </a>

            {/* YouTube */}
            <a
              href="https://youtube.com/@yourchannel"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-md hover:scale-110 transition"
            >
              <FaYoutube className="text-[#FF0000]" />
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/adefaminfotech?igsh=ODA3ZTZxbmJic3Y="
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-md hover:scale-110 transition"
            >
              <FaInstagram className="text-[#E4405F]" />
            </a>

            {/* TikTok */}
            {/* <a
              href="https://tiktok.com/@yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-md hover:scale-110 transition"
            >
              <FaTiktok className="text-black" />
            </a> */}
          </div>
        </div>

        {/* Contact */}
        <div className="lg:pl-15">
          <h3 className="text-white font-semibold mb-4 sm:mb-5 text-base sm:text-lg">
            Contact Info
          </h3>

          <p className="text-sm text-white leading-relaxed">
            Osogbo, Osun State <br />
            Nigeria <br />
            support@adefam.com <br />
            +234 8032366804
          </p>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-700 mt-10 sm:mt-12 pt-5 sm:pt-6 text-center text-xs sm:text-sm text-white px-2">
        © {new Date().getFullYear()} AdefamInfoTech. All rights reserved.
      </div>

    </footer>
  );
};

export default Footer;