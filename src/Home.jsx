import React from 'react';
import MovingCrousel from './MovingCrousel'
import ShortIntro from './ShortIntro';
import CounterName from './CounterName';
import VisaCategories from './VisaCategories';
import Features from './Features';
import ClientReviews from './ClientReviews';
import HomeBlog from './HomeBlog';

const Home = () => {
  return (
    <div>
        <MovingCrousel/>
        <ShortIntro/>
        <CounterName/>
        <VisaCategories/>
        <Features/>
        <ClientReviews/>
        <HomeBlog/>
    </div>
  );
};

export default Home;