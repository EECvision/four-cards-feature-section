import React from 'react';
import FourCardFeatureSection from './four-card-feature-section/components/four-card/four-card-feature-section.component';
import FourCardFeatureHeader from './four-card-feature-section/components/four-card-feature-header.component';

const App =()=>{
    return (
        <div className="w-full flex flex-col justify-around items-center">
            <FourCardFeatureHeader/>
            <FourCardFeatureSection/>
        </div>
    )
}

export default App;
