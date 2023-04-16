// components/Layout.js

import React from 'react';
import Navigation from './Navigation';

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-blue-500 text-white">
        <div className="container mx-auto px-4 py-2">
          <Navigation />
        </div>
      </header>
      <main className="flex-grow container mx-auto px-4 py-4">
        {children}
      </main>
      <footer className="bg-gray-200 text-center py-4">
        {/* Footer content */}
        <p>© AI LinkedIn</p>
      </footer>
    </div>
  );
};

export default Layout;
