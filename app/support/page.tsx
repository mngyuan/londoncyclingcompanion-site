'use client';

import {SUPPORT_ADDRESS} from '@/constants/constants';
import Link from 'next/link';
import {useState} from 'react';

export default function PrivacyPolicyPage() {
  const [subject, setSubject] = useState('');
  const [body, setBody] = useState('');
  const mailtoLink = `mailto:${SUPPORT_ADDRESS}?${new URLSearchParams({subject, body})}`;

  return (
    <div
      className={`flex flex-col min-h-screen items-center justify-between bg-grey-300`}
    >
      <main className="grow flex flex-col items-center justify-between p-8 lg:py-32 lg:pb-16 lg:px-16">
        <div className="max-w-3xl bg-white bg-opacity-80 p-8 rounded-lg shadow-lg">
          <div className="flex flex-col gap-4">
            <h1 className="text-3xl font-bold mb-6">Contact Support</h1>
            <label className="flex flex-col">
              <span className="font-semibold mb-2">Subject:</span>
              <input
                type="text"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="p-2 border border-gray-300 rounded"
                required
                placeholder="Help with London Cycling Companion"
              />
            </label>
            <label className="flex flex-col">
              <span className="font-semibold mb-2">Message:</span>
              <textarea
                value={body}
                onChange={(e) => setBody(e.target.value)}
                className="p-2 border border-gray-300 rounded h-32"
                required
                placeholder="Please describe your issue here and include relevant screenshots. You can attach images in your email client."
              />
            </label>
            <a href={mailtoLink} target="_blank" rel="noopener noreferrer">
              <button className="bg-black text-white py-2 px-4 rounded hover:bg-grey-200 transition">
                Send Email
              </button>
            </a>
          </div>
        </div>
      </main>
      <footer className="w-full flex items-center justify-between p-4 lg:p-8 lg:px-16 select-none">
        <div className="flex flex-row items-center gap-8">
          <Link href="/" className="text-sm text-gray-500 hover:underline">
            Home
          </Link>
          <Link
            href="/privacy-policy"
            className="text-sm text-gray-500 hover:underline"
          >
            Privacy Policy
          </Link>
        </div>
        <div className="text-sm text-gray-500">Copyright © 2026</div>
      </footer>
    </div>
  );
}
