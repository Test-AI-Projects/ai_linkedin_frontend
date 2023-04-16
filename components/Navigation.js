// components/Navigation.js

import React from 'react';
import Link from 'next/link';

const Navigation = () => {
  return (
    <nav className="flex items-center justify-between">
      <Link legacyBehavior href="/">
        <a className="font-bold text-xl">AI LinkedIn</a>
      </Link>
      <ul className="flex space-x-4">
        <li>
          <Link legacyBehavior href="/search">
            <a className="hover:text-blue-300">Search</a>
          </Link>
        </li>
        <li>
          <Link legacyBehavior href="/job-board">
            <a className="hover:text-blue-300">Job Board</a>
          </Link>
        </li>
        <li>
          <Link legacyBehavior href="/sign-up">
            <a className="hover:text-blue-300">Sign Up</a>
          </Link>
        </li>
        <li>
          <Link legacyBehavior href="/sign-in">
            <a className="hover:text-blue-300">Sign In</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
