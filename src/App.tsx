/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { CoverHeroSection } from './components/CoverHeroSection';
import { WhyExploreSection } from './components/WhyExploreSection';
import { AboutMeProfileSection } from './components/AboutMeProfileSection';
import { ThingsILoveSection } from './components/ThingsILoveSection';
import { FeaturedProjectsSection } from './components/FeaturedProjectsSection';
import { PersonalQuoteSection } from './components/PersonalQuoteSection';
import { ContactFooterSection } from './components/ContactFooterSection';

export default function App() {
  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <main className="max-w-[1150px] mx-auto space-y-12 sm:space-y-16">
        <CoverHeroSection />
        <WhyExploreSection />
        <AboutMeProfileSection />
        <ThingsILoveSection />
        <FeaturedProjectsSection />
        <PersonalQuoteSection />
        <ContactFooterSection />
      </main>
    </div>
  );
}
