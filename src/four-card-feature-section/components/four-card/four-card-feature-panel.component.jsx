import React from 'react';

import CalculatorIcon from '../../images/icon-calculator.svg'
import KarmaIcon from '../../images/icon-karma.svg'
import SupervisorIcon from '../../images/icon-supervisor.svg'
import TeamBuilderIcon from '../../images/icon-team-builder.svg'

const icons = [SupervisorIcon, TeamBuilderIcon, KarmaIcon, CalculatorIcon];
const borderColor = ['green', 'red', 'yellow', 'blue']

const FourCardFeaturePanel =({id, title, subtitle, width})=>{
    return(
        <div className={`w-5/6 lg:w-${width} max-w-sm h-64 flex flex-col justify-around bg-white shadow-xl rounded px-12 py-2 mb-8 md:mx-8 border-t-4 border-${borderColor[id-1]}-500 `}>
            <div className="">
                <p className="text-lg font-bold opacity-75">{title}</p>
                <p className="font-thin opacity-50">{subtitle}</p>
            </div>
            <div className="w-full flex justify-end">
                <img className="w-12 h-12" src={icons[id-1]} alt=""/>
            </div>
        </div>
    )
}

export default FourCardFeaturePanel;