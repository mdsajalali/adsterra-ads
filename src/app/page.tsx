"use client";
import { useEffect, useState } from "react";

const AdsterraAds = () => {
  const [videoAdLoaded, setVideoAdLoaded] = useState(false);
  useEffect(() => {
    // Add Popunder Script
    const popunderScript = document.createElement("script");
    popunderScript.src = "YOUR_POPUNDER_AD_URL"; // Replace with Popunder ad script
    popunderScript.async = true;

    // Add Interstitial Script
    const interstitialScript = document.createElement("script");
    interstitialScript.src = "YOUR_INTERSTITIAL_AD_URL"; // Replace with Interstitial ad script
    interstitialScript.async = true;

    document.body.appendChild(popunderScript);
    document.body.appendChild(interstitialScript);

    return () => {
      document.body.removeChild(popunderScript);
      document.body.removeChild(interstitialScript);
    };
  }, []);

  return (
    <>
      <div className="space-y-8">
        {/* Banner Ads */}
        <div className="space-y-4">
          <h2 className="text-lg font-bold">Banner Ads</h2>
          <div className="flex justify-center items-center bg-gray-100 p-4">
            <iframe
              src="YOUR_BANNER_AD_728x90_URL" // Replace with your 728x90 Banner Ad URL
              width="728"
              height="90"
              className="w-full max-w-2xl h-24 border-none"
              title="Leaderboard Banner Ad"
            ></iframe>
          </div>
          <div className="flex justify-center items-center bg-gray-100 p-4">
            <iframe
              src="YOUR_BANNER_AD_300x250_URL" // Replace with your 300x250 Banner Ad URL
              width="300"
              height="250"
              className="w-full max-w-sm h-64 border-none"
              title="Medium Rectangle Banner Ad"
            ></iframe>
          </div>
          <div className="flex justify-center items-center bg-gray-100 p-4">
            <iframe
              src="YOUR_BANNER_AD_160x600_URL" // Replace with your 160x600 Banner Ad URL
              width="160"
              height="600"
              className="h-full max-h-screen w-40 border-none"
              title="Skyscraper Banner Ad"
            ></iframe>
          </div>
        </div>

        {/* Native Ads */}
        <div className="p-4 bg-white border border-gray-200 shadow-md rounded-lg">
          <h2 className="text-lg font-bold mb-4">Native Ad</h2>
          <iframe
            src="YOUR_NATIVE_AD_URL" // Replace with Native Ad URL
            width="300"
            height="250"
            className="w-full max-w-sm h-64 border-none"
            title="Native Ad"
          ></iframe>
        </div>

        {/* Video Ads */}
        <div className="flex justify-center items-center bg-black p-4">
          <h2 className="text-lg font-bold text-white mb-4">Video Ad</h2>
          <iframe
            src="YOUR_VIDEO_AD_URL" // Replace with Video Ad URL
            width="640"
            height="360"
            className="w-full max-w-lg h-auto border-none"
            title="Video Ad"
            allow="autoplay; fullscreen"
          ></iframe>
        </div>

        {/* Direct Link Ads */}
        <div className="p-4">
          <h2 className="text-lg font-bold">Direct Link Ad</h2>
          <a
            href="YOUR_DIRECT_LINK_URL" // Replace with Direct Link URL
            className="text-blue-500 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Click here for the Direct Link Ad
          </a>
        </div>

        {/* Social Bar Ads */}
        <div className="flex justify-center items-center bg-gray-100 p-4">
          <h2 className="text-lg font-bold">Social Bar Ad</h2>
          {/* Placeholder for Social Bar functionality */}
          <iframe
            src="YOUR_SOCIAL_BAR_URL" // Replace with Social Bar Ad URL
            className="w-full max-w-md h-20"
            title="Social Bar Ad"
          ></iframe>
        </div>

        {/* Push Notification Ads */}
        <div>
          <h2 className="text-lg font-bold">Push Notification Ad</h2>
          <p>
            Push notifications will appear on the user's device when configured.
          </p>
        </div>

        {/* In-Page Push Ads */}
        <div className="p-4">
          <h2 className="text-lg font-bold">In-Page Push Ad</h2>
          <iframe
            src="YOUR_IN_PAGE_PUSH_AD_URL" // Replace with In-Page Push Ad URL
            className="w-full max-w-md h-20 border-none"
            title="In-Page Push Ad"
          ></iframe>
        </div>

        {/* Smart Link Ads */}
        <div className="p-4">
          <h2 className="text-lg font-bold">Smart Link Ad</h2>
          <a
            href="YOUR_SMART_LINK_URL" // Replace with Smart Link URL
            className="text-blue-500 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Click here for the Smart Link Ad
          </a>
        </div>

        {/* Skim Ads */}
        <div className="p-4">
          <h2 className="text-lg font-bold">Skim Ad</h2>
          <a
            href="YOUR_SKIM_AD_URL" // Replace with Skim Ad URL
            className="text-blue-500 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Click here for the Skim Ad
          </a>
        </div>

        {/* Floating Banner Ads */}
        <div className="fixed bottom-0 left-0 right-0 bg-gray-800 text-white p-4">
          <iframe
            src="YOUR_FLOATING_BANNER_URL" // Replace with Floating Banner Ad URL
            className="w-full h-16 border-none"
            title="Floating Banner Ad"
          ></iframe>
        </div>
      </div>

      <div className="space-y-8">
        {/* Video Ad with Skeleton Loader */}
        <div className="flex justify-center items-center bg-black p-4">
          <h2 className="text-lg font-bold text-white mb-4">
            Real-Time Video Ad
          </h2>
          <div className="w-full max-w-lg h-auto">
            {!videoAdLoaded && (
              <div className="animate-pulse bg-gray-700 w-full h-[360px]"></div>
            )}
            <iframe
              src="YOUR_REAL_TIME_VIDEO_AD_URL" // Replace with real-time video ad URL
              width="640"
              height="360"
              className="w-full h-auto border-none"
              title="Video Ad"
              allow="autoplay; fullscreen"
              onLoad={() => setVideoAdLoaded(true)}
            ></iframe>
          </div>
        </div>

        {/* Banner Ads with Skeleton Loader */}
        <div className="space-y-4">
          <h2 className="text-lg font-bold">Banner Ads</h2>
          {[728, 300, 160].map((size, index) => (
            <div
              key={index}
              className="flex justify-center items-center bg-gray-100 p-4"
            >
              <div className="w-full max-w-lg h-auto">
                <div className="animate-pulse bg-gray-300 w-full h-24 mb-4"></div>
                <iframe
                  src={`YOUR_BANNER_AD_${size}x90_URL`} // Replace with your Banner Ad URL
                  width={size === 728 ? "728" : size === 300 ? "300" : "160"}
                  height={size === 728 ? "90" : size === 300 ? "250" : "600"}
                  className="w-full h-24 border-none"
                  title={`Banner Ad ${size}`}
                ></iframe>
              </div>
            </div>
          ))}
        </div>

        {/* Native Ads with Skeleton */}
        <div className="p-4 bg-white border border-gray-200 shadow-md rounded-lg">
          <h2 className="text-lg font-bold mb-4">Native Ad</h2>
          <div className="relative">
            <div className="animate-pulse bg-gray-300 w-full h-64"></div>
            <iframe
              src="YOUR_NATIVE_AD_URL" // Replace with Native Ad URL
              width="300"
              height="250"
              className="absolute top-0 left-0 w-full max-w-sm h-64 border-none"
              title="Native Ad"
            ></iframe>
          </div>
        </div>

        {/* Popunder and Interstitial Scripts */}
        <div className="hidden">
          {/* These ads are managed by external scripts */}
        </div>
      </div>
    </>
  );
};

export default AdsterraAds;
