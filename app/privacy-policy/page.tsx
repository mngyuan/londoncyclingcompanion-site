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
            Last Updated: February 24, 2026
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
            <li>Store user-generated content</li>
            <li>Enable communication between users</li>
          </ul>
          <p className="mb-2">
            However, we do collect some non-personal information for analytics
            purposes:
          </p>
          <ul className="list-disc list-inside mb-4 ml-4">
            <li>
              Usage data: We collect anonymous data about how the app is used,
              such as which features are accessed and how often.
            </li>
            <li>
              Device ID: We collect a unique identifier for your device for
              analytics purposes.
            </li>
          </ul>
          <p className="mb-4">
            Neither of these types of data are linked to you personally nor
            contain any personal information.
          </p>

          <h2 className="text-2xl font-semibold mb-4">Data Storage</h2>
          <p className="mb-4">
            London Cycling Companion stores minimal app preferences and settings
            locally on your device. This data never leaves your device and is
            not transmitted to any servers.
          </p>

          <h2 className="text-2xl font-semibold mb-4">Advertising</h2>
          <p className="mb-2">
            London Cycling Companion uses Google AdMob, a third-party
            advertising service provided by Google, to serve non-personalized
            ads within the app. Ad personalization is disabled, and the app does
            not access your device&apos;s advertising identifier (IDFA). AdMob
            may still collect limited information to serve non-personalized ads,
            including:
          </p>
          <ul className="list-disc list-inside mb-4 ml-4">
            <li>Device information (device type, operating system version)</li>
            <li>IP address (used for approximate geolocation)</li>
            <li>Ad interaction data (impressions and clicks)</li>
          </ul>
          <p className="mb-4">
            For more information about how Google uses your data, please visit{' '}
            <a
              href="https://policies.google.com/privacy"
              className="text-blue-600 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google&apos;s Privacy Policy
            </a>{' '}
            and{' '}
            <a
              href="https://policies.google.com/technologies/partner-sites"
              className="text-blue-600 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              how Google uses data from partner apps
            </a>
            .
          </p>

          <h2 className="text-2xl font-semibold mb-4">
            How We Use Information
          </h2>
          <p className="mb-2">
            We use the collected information for the following purposes:
          </p>
          <ul className="list-disc list-inside mb-4 ml-4">
            <li>To analyze app usage patterns and improve user experience</li>
            <li>To identify and fix potential issues or bugs</li>
            <li>
              To make data-driven decisions about future app development and
              feature prioritization
            </li>
            <li>To serve advertisements through Google AdMob</li>
          </ul>

          <h2 className="text-2xl font-semibold mb-4">Information Sharing</h2>
          <p className="mb-2">
            We do not sell or transfer any user information to third parties,
            except in the following circumstances:
          </p>
          <ul className="list-disc list-inside mb-4 ml-4">
            <li>
              With Google AdMob for the purpose of serving advertisements, as
              described in the Advertising section above
            </li>
            <li>As required by law or in response to valid legal process</li>
            <li>To protect our rights, property, or safety</li>
            <li>
              In connection with a merger, acquisition, or sale of assets (if
              applicable)
            </li>
          </ul>

          <h2 className="text-2xl font-semibold mb-4">Data Security</h2>
          <p className="mb-4">
            We are committed to safeguarding any information collected through
            the app and employ appropriate technical and organisational measures
            to do so. That said, no data transmission or storage method can be
            guaranteed to be completely secure.
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
