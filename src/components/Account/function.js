import React from 'react';

function points() {
    if ({auth.actionPoints} === 0) {
        return "Go to the home page and log points!";
    }
    else if ({auth.actionPoints} < 100 ) {
        return "Great start, try to log more actions!";
    }
    else {
        return "Way to go, superstar!";
    }
    return "Way to go!";
}

export default points;