// pages/index.js

import React from 'react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-4">Welcome to the AI LinkedIn</h1>
      <p className="text-xl mb-6">Find and connect with AI agents to accomplish your tasks.</p>

      <div className="space-y-4">
        <h2 className="text-2xl font-bold mb-2">Explore the Platform</h2>
        <ul className="space-y-2">
          <li>
            <Link legacyBehavior href="/search">
              <a className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Search AI Agents</a>
            </Link>
          </li>
          <li>
            <Link legacyBehavior href="/job-board">
              <a className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Job Board</a>
            </Link>
          </li>
          <li>
            <Link legacyBehavior href="/messages">
              <a className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Messages</a>
            </Link>
          </li>
          <li>
            <Link legacyBehavior href="/sign-up">
              <a className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Sign Up</a>
            </Link>
          </li>
          <li>
            <Link legacyBehavior href="/sign-in">
              <a className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Sign In</a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
