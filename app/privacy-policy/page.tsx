import {SUPPORT_ADDRESS} from '@/constants/constants';
import Link from 'next/link';

export default function PrivacyPolicyPage() {
  return (
    <div
      className={`flex flex-col min-h-screen items-center justify-between bg-grey-300`}
    >
      <main className="grow flex flex-col items-center justify-between p-8 lg:py-32 lg:pb-16 lg:px-16">
        <div className="max-w-3xl bg-white bg-opacity-80 p-8 rounded-lg shadow-lg">
          <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
          <p className="text-sm text-gray-500 mb-6">
            Last Updated: January 21, 2026
          </p>

          <h2 className="text-2xl font-semibold mb-4">
            Information We Collect
          </h2>
          <p className="mb-2">
            London Cycling Companion does not collect any personally
            identifiable information from its users. The app does not:
          </p>
          <ul className="list-disc list-inside mb-4 ml-4">
            <li>Collect names, email addresses, or contact information</li>
            <li>Track location data</li>
            <li>Access device identifiers</li>
            <li>Store user-generated content</li>
            <li>Enable communication between users</li>
          </ul>

          <h2 className="text-2xl font-semibold mb-4">Data Storage</h2>
          <p className="mb-4">
            London Cycling Companion stores minimal app preferences and settings
            locally on your device. This data never leaves your device and is
            not transmitted to any servers.
          </p>

          <h2 className="text-2xl font-semibold mb-4">Ads and Analytics</h2>
          <p className="mb-4">
            London Cycling Companion contains no advertisements and does not use
            analytics services to track user behavior.
          </p>

          <h2 className="text-2xl font-semibold mb-4">Information Sharing</h2>
          <p className="mb-2">
            We do not share, sell, or transfer any user information to third
            parties, except:
          </p>
          <ul className="list-disc list-inside mb-4 ml-4">
            <li>As required by law or in response to valid legal process</li>
            <li>To protect our rights, property, or safety</li>
            <li>
              In connection with a merger, acquisition, or sale of assets (if
              applicable)
            </li>
          </ul>

          <h2 className="text-2xl font-semibold mb-4">Security</h2>
          <p className="mb-4">
            London Cycling Companion is designed with privacy in mind. The app
            does not make network requests for data collection purposes and does
            not store personal information.
          </p>

          <h2 className="text-2xl font-semibold mb-4">Children's Privacy</h2>
          <p className="mb-4">
            London Cycling Companion does not knowingly collect information from
            children under 13 years of age.
          </p>

          <h2 className="text-2xl font-semibold mb-4">User Consent</h2>
          <p className="mb-4">
            By using London Cycling Companion, you consent to this privacy
            policy.
          </p>

          <h2 className="text-2xl font-semibold mb-4">
            Changes to This Policy
          </h2>
          <p className="mb-4">
            We may update this privacy policy from time to time. Changes will be
            posted on this page with an updated revision date.
          </p>

          <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
          <p>
            If you have questions about this privacy policy, please contact us
            at{' '}
            <a
              href={`mailto:${SUPPORT_ADDRESS}?${new URLSearchParams({subject: 'Help with London Cycling Companion', body: 'Please describe your issue here and include relevant screenshots.'})}`}
              className="text-blue-600 hover:underline"
            >
              {SUPPORT_ADDRESS}
            </a>
            .
          </p>
        </div>
      </main>
      <footer className="w-full flex items-center justify-between p-4 lg:p-8 lg:px-16 select-none">
        <div className="flex flex-row items-center gap-8">
          <Link href="/" className="text-sm text-gray-500 hover:underline">
            Home
          </Link>
          <Link
            href="/support"
            className="text-sm text-gray-500 hover:underline"
          >
            Support
          </Link>
        </div>
        <div className="text-sm text-gray-500">Copyright © 2026</div>
      </footer>
    </div>
  );
}
