import React,{useState} from 'react';

import FourCardFeaturePanel from './four-card-feature-panel.component';

import {FOUR_CARD_DATA} from './four-card-data'

const FourCardFeatureSection =()=>{
    const [fourCardData,] = useState(FOUR_CARD_DATA);
    return(
        <div className=" w-full flex flex-col items-center lg:flex-row lg:justify-evenly lg:items-center px-32 mb-6">
            <FourCardFeaturePanel {...fourCardData[0]}/>
            <div className="w-full flex flex-col items-center">
                <FourCardFeaturePanel {...fourCardData[1]} width="full"/>
                <FourCardFeaturePanel {...fourCardData[2]} width="full"/>
            </div>
            <FourCardFeaturePanel {...fourCardData[3]}/>
        </div>
    )
}

export default FourCardFeatureSection;