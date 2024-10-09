import React from 'react';
import MovingCrousel from './MovingCrousel'
import ShortIntro from './ShortIntro';
import CounterName from './CounterName';
import VisaCategories from './VisaCategories';
import Features from './Features';
import ClientReviews from './ClientReviews';
import HomeBlog from './HomeBlog';
import HomeNews from './HomeNews';
import BestImmigrationConsultant from './BestImmigrationConsultant';
import ImmigrationConsultantBanner from './ImmigrationConsultantBanner';
import ProgramsOverview from './ProgramsOverview';

const Home = () => {
  return (
    <div>
        <MovingCrousel/>
        <ShortIntro/>
        <CounterName/>
        <VisaCategories/>
        <Features/>
        <ClientReviews/>
        <HomeNews />
        <HomeBlog/>
        <BestImmigrationConsultant/>
        <ImmigrationConsultantBanner/>
        <ProgramsOverview/>
    </div>
  );
};

export default Home;