import React from 'react';

const pointsForAccount = () => {
    if ({localStorage.getItem("total")} === 0) {
        return <p>"Go to the home page and log points!"</p>
    }
    else if ({localStorage.getItem("total")} < 100 ) {
        return <p>"Great start, try to log more actions!"</p>
    }
    else {
        return <p>"Way to go, superstar!"</p>;
    }
    // return "Way to go!";
}

export default pointsForAccount;