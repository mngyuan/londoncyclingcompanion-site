import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div
      className={`flex flex-col min-h-screen items-center justify-between bg-grey-300`}
    >
      <main className="grow flex flex-col items-center justify-between p-8 lg:py-32 lg:pb-16 lg:px-16 select-none">
        <div className="grow flex flex-col items-center justify-center">
          <Image
            src="/lcc.png"
            alt="Screenshot of London Cycling Companion"
            width={400}
            height={800}
            className="w-full h-full"
          />
        </div>
        <div className="flex flex-row gap-4 lg:gap-16">
          <Link href="https://testflight.apple.com/join/gZUwDgTJ">
            <Image
              src="/app-store-badge.svg"
              alt="Download on the App Store"
              width={150}
              height={50}
            />
          </Link>
        </div>
      </main>
      <footer className="w-full flex items-center justify-between p-4 lg:p-8 lg:px-16 select-none">
        <div className="flex flex-row items-center gap-8">
          <Link
            href="/privacy-policy"
            className="text-sm text-gray-500 hover:underline"
          >
            Privacy Policy
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
