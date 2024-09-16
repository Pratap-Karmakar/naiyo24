import React from 'react';
import { BackgroundLines } from './ui/background-lines';

const AboutText = () => {
  return (
    <div>
      <BackgroundLines className="flex items-center justify-center w-full flex-col px-4">
        <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-xl sm:text-3xl md:text-4xl lg:text-6xl xl:text-7xl font-sans py-4 md:py-8 lg:py-10 relative z-20 font-bold tracking-tight">
          Welcome to NAIYO24 PRIVATE LIMITED<br />
        </h2>
        <h2 className="bg-clip-text text-transparent text-center bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-xs sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-sans py-2 md:py-6 lg:py-8 relative z-20 font-bold tracking-tight">
          Innovating Your Digital Presence
        </h2>
        <p className="max-w-xl mx-auto text-xs sm:text-base md:text-lg lg:text-xl text-neutral-700 dark:text-neutral-400 text-center py-4 md:py-6 lg:py-8">
          At NAIYO24 PRIVATE LIMITED, we’re committed to transforming your digital dreams into reality. As a leading provider of online application and website development services, our mission is to deliver cutting-edge solutions that propel your business forward in the digital world.
        </p>
      </BackgroundLines>
    </div>
  );
};

export default AboutText;
