import React from 'react';
import AboutIntro from './AboutIntro';
import {images} from '~/config/images';
import IntroBanner from './IntroBanner';
import StoryBanner from './StoryBanner';
import MeetTeam from './MeetTeam';
import CommittedExcellence from './CommittedExcellence';
import Features from './Features';
import MessageSection from './MessageSection';

const AboutPage = () => {
  return (
    <div className="w-full">
      <div className="grid lg:grid-cols-2 lg:px-[50px] md:px-[40px] gap-[100px] mt-[100px]">
        <AboutIntro />
        <div className="flex justify-end">
          <img src={images.aboutUsImage} />
        </div>
      </div>
      <div className="w-full mt-[100px]">
        <IntroBanner />
      </div>
      <div className="w-full mt-[30px]">
        <StoryBanner />
      </div>
      <MeetTeam />
      <div className="w-full mt-[100px]">
        <CommittedExcellence />
      </div>
      <div className="w-full mt-[250px]">
        <Features />
      </div>
      <div className="w-full mt-[100px]">
        <MessageSection />
      </div>
    </div>
  );
};

export default AboutPage;
