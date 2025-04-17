'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const navigation = [
    { name: 'Accueil', href: '/' },
    { name: 'Catégories', href: '/categories' },
    { name: 'Comment ça marche', href: '/how-it-works' },
    { name: 'Tutoriels', href: '/tutorials' },
    { name: 'À propos', href: '/about' },
  ];

  const isActive = (path: string) => {
    return pathname === path;
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container flex items-center justify-between py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          {/* Placeholder for logo - replace with actual logo */}
          <div className="w-10 h-10 bg-primary-500 rounded-lg flex items-center justify-center text-white font-bold">
            FT
          </div>
          <span className="text-xl font-heading font-bold text-gray-900">FixTogether</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`text-sm font-medium ${
                isActive(item.href)
                  ? 'text-primary-600 font-semibold'
                  : 'text-gray-700 hover:text-primary-500'
              }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Authentication Links */}
        <div className="hidden md:flex items-center gap-4">
          <Link href="/auth/login" className="text-sm font-medium text-gray-700 hover:text-primary-500">
            Connexion
          </Link>
          <Link href="/auth/register" className="btn btn-primary text-sm">
            Inscription
          </Link>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 rounded-md text-gray-500 hover:text-gray-700 hover:bg-gray-100"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className="sr-only">Open menu</span>
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden px-2 pt-2 pb-4 bg-white border-t border-gray-200">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                isActive(item.href)
                  ? 'text-primary-600 bg-primary-50'
                  : 'text-gray-700 hover:text-primary-500 hover:bg-gray-50'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <div className="mt-4 pt-4 border-t border-gray-100 flex flex-col gap-2">
            <Link 
              href="/auth/login" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary-500 hover:bg-gray-50"
              onClick={() => setIsMenuOpen(false)}
            >
              Connexion
            </Link>
            <Link 
              href="/auth/register" 
              className="block px-3 py-2 rounded-md text-base font-medium bg-primary-500 text-white hover:bg-primary-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Inscription
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
