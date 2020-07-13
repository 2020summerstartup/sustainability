import React from 'react';
// import { render } from "react-dom";

import Tabs from "./tabs";
// require('./styles.css');

const TabPage = () => (

    <div>
      
     <Tabs>
      <div label="Gator">
        See ya later, <em>Alligator</em>!
      </div>
      <div label="Croc">
        After 'while, <em>Crocodile</em>!
      </div>
      <div label="Sarcosuchus">
        Nothing to see here, this tab is <em>extinct</em>!
      </div>

    </Tabs>
    </div>

)

export default TabPage;
