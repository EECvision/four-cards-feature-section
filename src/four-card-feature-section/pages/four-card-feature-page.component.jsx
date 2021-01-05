import React from 'react';
import FourCardFeatureSection from '../components/four-card/four-card-feature-section.component';
import FourCardFeatureHeader from '../components/four-card-feature-header.component';

const FourCardFeaturePage =()=>{
    return (
        <div className="w-full flex flex-col justify-around items-center">
            <FourCardFeatureHeader/>
            <FourCardFeatureSection/>
        </div>
    )
}

export default FourCardFeaturePage;