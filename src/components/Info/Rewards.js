import React, { Component } from "react";
import { Spring } from "react-spring/renderprops";

export default function Rewards() {
  return (
    <Spring
      from={{ opacity: 0, marginTop: -500 }}
      to={{ opacity: 1, marginTop: 0 }}
      config={{ delay: 3000, duration: 1000 }}
    >
      {(props) => (
        <div style={props}>
          <div style={goal}>
            <h1>Current Rewards</h1>
            <p>Coming soon... :)</p>
          </div>
        </div>
      )}
    </Spring>
  );
}

const goal = {
  background: "#00a8bf",
  color: "white",
  padding: "1.5rem",
  borderRadius: "10px",
};

// import React, { Component } from "react";
// import { Spring } from "react-spring/renderprops";

// const goal = {
//   background: "#00a8bf",
//   color: "white",
//   padding: "1.5rem",
//   borderRadius: "10px",
// };

// export default function Rewards() {
//   return (
//     <Spring from={{ opacity: 0 }} from={{ opacity: 1 }}>
//       {(props) => (
//         <div style={props}>
//           <div style={goal}>
//             <h1>Current Rewards</h1>
//             <p>Coming soon... :)</p>
//           </div>
//         </div>
//       )}
//     </Spring>
//   );
// }
