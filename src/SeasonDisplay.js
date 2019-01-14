import React from 'react';

const getSeason = (lath, mounth) => {
    if (mounth > 2 && mounth < 9) {
        return lath > 0 ? 'summer' : 'winter';
    }
    else {
        return lath > 0 ? 'winter' : 'summer';
    }
}
const SeasonDisplay = props => {
    const season = getSeason(props.lat, new Date().getMonth());
    console.log(props.lat);
    console.log(season)
    return <div>
        Season Display : {props.lat}
        <br/>
        <span> Season Name : {season}</span>
    </div>
}


export default SeasonDisplay;
