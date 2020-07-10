// import React, { useState } from "react";
// import onClickOutside from "react-onclickoutside";

// // This file exports everything to maindd.js
// function Dropdown({ title, items, multiSelect = false }) {
//   const [open, setOpen] = useState(false);
//   const [selection, setSelection] = useState([]);
//   const toggle = () => setOpen(!open);
//   Dropdown.handleClickOutside = () => setOpen(false);


//   function handleOnClick(item) {
//     if (!selection.some((current) => current.id === item.id)) {
//       if (!multiSelect) {
//         setSelection([item]);
//       } else if (multiSelect) {
//         setSelection([...selection, item]);
//       }
//     } else {
//       let selectionAfterRemoval = selection;
//       selectionAfterRemoval = selectionAfterRemoval.filter(
//         (current) => current.id !== item.id
//       );
//       setSelection([...selectionAfterRemoval]);
//     }
//   }

// // Choose your dorm!
// const dorms = [
//   {
//     value: 1,
//     label: "Atwood",
//     //isDisabled: true,
//   },
//   {
//     value: 2,
//     label: "Case",
//   },
//   {
//     value: 3,
//     label: "Drinkward",
//   },
//   {
//     value: 4,
//     label: "East",
//   },
//   {
//     value: 5,
//     label: "Linde",
//     //isDisabled: true,
//   },
//   {
//     value: 6,
//     label: "North",
//   },
//   {
//     value: 7,
//     label: "Sontag",
//   },
//   {
//     value: 8,
//     label: "South",
//   },
//   {
//     value: 9,
//     label: "West",
//   },
// ];


//   function isItemInSelection(item) {
//     if (selection.some((current) => current.id === item.id)) {
//       return true;
//     }
//     return false;
//   }

//   return (
//     <div className="dd-wrapper">
//       <div
//         tabIndex={0}
//         className="dd-header"
//         role="button"
//         onKeyPress={() => toggle(!open)}
//         onClick={() => toggle(!open)}
//       >
//         <div className="dd-header__title">
//           <p className="dd-header__title--bold">{title}</p>
//         </div>
//         <div className="dd-header__action">
//           <p>{open ? "▲" : "▼"}</p>
//         </div>
//       </div>
//       {open && (
//         <ul className="dd-list">
//           {items.map((item) => (
//             <li className="dd-list-item" key={item.id}>
//               <button
//                 className="dd-list-btn"
//                 type="button"
//                 onClick={() => handleOnClick(item)}
//               >
//                 <span>{item.value}</span>
//                 <span>{isItemInSelection(item) && "Selected"}</span>
//               </button>
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// }

// const clickOutsideConfig = {
//   handleClickOutside: () => Dropdown.handleClickOutside,
// };


// export default onClickOutside(Dropdown, clickOutsideConfig);
// // export { Dropdown2 };

  //     "&:hover": {
  //       borderColor: state.isFocused ? "#24a113" : "#24a113",
  //     },
  //   }),
  // };

  // Note from Katie: I was working on saving dorm info here, but it didn't seem to work. Unsure if I'll come back to this code tbqh.
  // var userDorm =  toString({selectedValue});
  // localStorage.setItem("userDorm", userDorm);
  // console.log('userDorm', localStorage.getItem(userDorm));

//   return (
//     <div>
//       <h1 style={{ textAlign: "center" }}>Earn Points for Your Dorm! </h1>{" "}
//       <br />
//       <Select
//         styles={customStyles}
//         value={dorms.find((x) => x.label === selectedValue)}
//         options={dorms}
//         onChange={handleChange}
//         isOptionDisabled={(option) => option.isDisabled}
//         placeholder="Select your dorm..."
//       />
//       <br />
//       <b>Your dorm: {JSON.stringify(selectedValue, null, 2)}</b>
//       <h1></h1>
//     </div>
//   );
// }

// export default Dropdown2;
