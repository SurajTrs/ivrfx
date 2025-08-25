"use client";
import WebPlatformHero from 'app/webplatformpage/WebPlatformHero';
import WebPlatformHighlights from 'app/webplatformpage/WebPlatformHighlights';
import WebPlatformTools from 'app/webplatformpage/WebPlatformTools';
import WebPlatformFAQs from 'app/webplatformpage/WebPlatformFAQs';
import WebPlatformCTA from 'app/webplatformpage/WebPlatformCTA';
import WebPlatformOverview from 'app/webplatformpage/WebPlatformOverview';

export default function Page() {
  return (
    <main className="bg-white text-black" aria-label="Web Platform page">
      <div className="text-white">
        <WebPlatformHero />
      </div>
      <WebPlatformOverview />
      <WebPlatformHighlights />
      <WebPlatformTools />
      <WebPlatformFAQs />
      <WebPlatformCTA />
    </main>
  );
}
