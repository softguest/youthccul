"use client";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
        
        {/* Column 1: Logo + Summary */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-4">YOUTHCCUL</h2>
          <p className="text-gray-400 leading-relaxed">
            Youthccul is committed to empowering communities by 
            providing accessible microfinance solutions that help individuals 
            build sustainable businesses and achieve economic independence.
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-3">
            <li><Link href="/" className="hover:text-yellow-400">Home</Link></li>
            <li><Link href="/about" className="hover:text-yellow-400">About Us</Link></li>
            <li><Link href="/projects" className="hover:text-yellow-400">Projects</Link></li>
            <li><Link href="/services" className="hover:text-yellow-400">Services</Link></li>
            <li><Link href="/contact" className="hover:text-yellow-400">Contact</Link></li>
          </ul>
        </div>

        {/* Column 3: Resources */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Resources</h3>
          <ul className="space-y-3">
            <li><Link href="/blog" className="hover:text-yellow-400">Blog</Link></li>
            <li><Link href="/faqs" className="hover:text-yellow-400">FAQs</Link></li>
            <li><Link href="/funding" className="hover:text-yellow-400">Funding</Link></li>
            <li><Link href="/reports" className="hover:text-yellow-400">Annual Reports</Link></li>
            <li><Link href="/support" className="hover:text-yellow-400">Support</Link></li>
          </ul>
        </div>

        {/* Column 4: Get Involved */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Get Involved</h3>
          <ul className="space-y-3">
            <li><Link href="/donate" className="hover:text-yellow-400">Donate</Link></li>
            <li><Link href="/volunteer" className="hover:text-yellow-400">Volunteer</Link></li>
            <li><Link href="/partnerships" className="hover:text-yellow-400">Partnerships</Link></li>
            <li><Link href="/careers" className="hover:text-yellow-400">Careers</Link></li>
            <li><Link href="/newsletter" className="hover:text-yellow-400">Newsletter</Link></li>
          </ul>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="mt-10 border-t border-gray-700 pt-6 text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} YOUTHCCUL. All rights reserved.
      </div>
    </footer>
  );
}
