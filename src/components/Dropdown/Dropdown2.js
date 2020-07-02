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
