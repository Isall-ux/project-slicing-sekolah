import React from "react";
import { Mail, Phone } from "lucide-react"; // optional icons

const FooterTop = () => {
  return (
    <div className="bg-gray-50 pt-12 pb-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6 text-center md:text-left">
        
        {/* Left - Logo + Contact Info */}
        <div className="space-y-4">
          {/* Logo + Brand inline */}
          <div className="flex items-center justify-center md:justify-start gap-3">
            <img src="https://smkyadikasoreang.sch.id/Assets/img/logo/logo yadika.png" alt="SMK Yadika Soreang" className="w-14 h-14" />
            <h3 className="text-xl font-bold">SMK Yadika Soreang</h3>
          </div>

          <p className="text-gray-600">
            Jl. Raya Soreang, Cingcin, Kec. Soreang, Kabupaten Bandung, Jawa Barat 40921
          </p>

          {/* Google Maps */}
          <div>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15839.500485967868!2d107.537212!3d-7.023962!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68ed28408eab67%3A0xc39aa21e7016ed40!2sSMA%20YADIKA%20SOREANG!5e0!3m2!1sen!2sus!4v1757859112098!5m2!1sen!2sus" 
                width="100%"
                height="200"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg"
            ></iframe>
          </div>

          {/* Contact */}
          <div className="space-y-2 text-gray-700">
            <p className="flex items-center justify-center md:justify-start gap-2">
              <Mail className="w-4 h-4" /> unityadikasoreang@gmail.com
            </p>
            <p className="flex items-center justify-center md:justify-start gap-2">
              <Phone className="w-4 h-4" /> 08112228128
            </p>
          </div>
        </div>

        {/* Middle - Link Helper */}
        <div>
          <h4 className="font-semibold text-lg mb-4">Link Helper</h4>
          <ul className="space-y-2 text-gray-600">
            <li><a href="/Home" className="hover:text-blue-600">Home</a></li>
            <li><a href="/Profile" className="hover:text-blue-600">Profile</a></li>
            <li><a href="/Kelulusan" className="hover:text-blue-600">Kelulusan</a></li>
            <li><a href="/PPDB" className="hover:text-blue-600">PPDB</a></li>
          </ul>
        </div>

        {/* Right - Need Help (centered on mobile) */}
        <div>
          <h4 className="font-semibold text-lg mb-4">Need Help?</h4>
          <ul className="space-y-2 text-gray-600">
            <li><a href="/Contact" className="hover:text-blue-600">Contact Us</a></li>
            <li><a href="/Help" className="hover:text-blue-600">Help</a></li>
            <li><a href="/FAQ" className="hover:text-blue-600">FAQ's</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FooterTop;
