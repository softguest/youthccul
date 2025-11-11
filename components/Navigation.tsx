"use client"
import { useState } from 'react';
import { usePathname } from "next/navigation";

import { Menu, X } from 'lucide-react';
import Link from 'next/link';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border shadow-sm">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href ="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-900/90 via-black/50 to-green-900/70 rounded-lg flex items-center justify-center">
              {/* <span className="text-primary-foreground font-bold text-lg">Y</span> */}
              <img src="/img/logo.jpeg" alt="logo" width={50} height={50}/>
            </div>
            <div className="hidden sm:block">
              <span className="text-xl font-bold bg-gradient-to-r from-green-500 to-yellow-500 bg-clip-text text-transparent">
                YOUTHCCUL
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={`font-medium transition-colors duration-200 hover:text-primary ${
                  isActive(link.path)
                    ? 'text-primary border-b-2 border-primary'
                    : 'text-foreground'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="https://youthccul.balaanz.com/login"
              className="text-white font-bold bg-gradient-to-r from-yellow-500 to-yellow-300 py-3 px-6 rounded-md"
            >
              Online Banking
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  href={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`font-medium py-2 transition-colors duration-200 hover:text-primary ${
                    isActive(link.path) ? 'text-primary' : 'text-foreground'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="https://youthccul.balaanz.com/login"
                onClick={() => setIsOpen(false)}
                className="btn-accent self-start"
              >
                Online Banking
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;