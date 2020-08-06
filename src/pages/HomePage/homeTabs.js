// import React from 'react';

// import { makeStyles, fade } from "@material-ui/core/styles";
// import Tabs from "@material-ui/core/Tabs";
// import Tab from "@material-ui/core/Tab";
// import Typography from "@material-ui/core/Typography";
// import Box from "@material-ui/core/Box";
// import PropTypes from "prop-types";

// function TabPanel(props) {
//     const { children, value, index, ...other } = props;

//     return (
//         <div
//             role="tabpanel"
//             hidden={value !== index}
//             id={`scrollable-force-tabpanel-${index}`}
//             aria-labelledby={`scrollable-force-tab-${index}`}
//             {...other}
//         >
//             {value === index && (
//                 <Box p={3}>
//                     <Typography component={"span"}>{children}</Typography>
//                 </Box>
//             )}
//         </div>
//     );
// }

// TabPanel.propTypes = {
//     children: PropTypes.node,
//     index: PropTypes.any.isRequired,
//     value: PropTypes.any.isRequired,
// };

// const useStyles = makeStyles((theme) => ({
//     tabs: {
//         // flexGrow: 1,
//         // backgroundColor: "primary",
//         [theme.breakpoints.up("sm")]: {
//             marginLeft: "6.5rem",
//             marginTop: "0.5rem",
//         },
//         // styles for mobile landscape
//         [`${theme.breakpoints.down(767)} and (orientation: landscape)`]: {
//             marginLeft: "0",
//         },
//     },
//     root: {
//         minWidth: "280",
//         // maxHeight: "168px",
//         backgroundColor: theme.palette.divider,
//         // height: "100%",
//         display: "flex",
//         flexDirection: "column",
//     },
//     actionContainer: {
//         padding: "0",
//     },
//     media: {
//         height: 0,
//         paddingTop: "56.25%", // 16:9
//         marginBottom: "1rem",
//     },
//     expand: {
//         transform: "rotate(0deg)",
//         marginLeft: "auto",
//         transition: theme.transitions.create("transform", {
//             duration: theme.transitions.duration.shortest,
//         }),
//     },
//     expandOpen: {
//         transform: "rotate(180deg)",
//     },
//     avatar: {
//         backgroundColor: "var(--theme)",
//     },
//     cardContent: {
//         textAlign: "left",
//         paddingBottom: "0",
//     },
//     cardActions: {
//         display: "flex",
//         flex: "1 0 auto",
//         alignItems: "flex-end",
//         justifyContent: "center",
//     },
//     card: {
//         borderRadius: "1rem",
//         boxShadow: "none",
//         position: "relative",
//         margin: "auto",
//         marginBottom: "1rem",
//         maxWidth: "36rem",
//         minHeight: "15rem",
//         zIndex: 0,
//         [theme.breakpoints.up("sm")]: {
//             maxWidth: "75vh",
//             minHeight: "40vh",
//         },
//         "&:after": {
//             content: '""',
//             display: "block",
//             position: "absolute",
//             width: "100%",
//             height: "100%",
//             bottom: 0,
//             zIndex: 1,
//             background: "linear-gradient(to top, #f48fb1, rgba(0,0,0,0))",
//         },
//     },
//     card2: {
//         borderRadius: "1rem",
//         boxShadow: "none",
//         position: "relative",
//         margin: "auto",
//         marginBottom: "1rem",
//         maxWidth: "36rem",
//         minHeight: "15rem",
//         zIndex: 0,
//         [theme.breakpoints.up("sm")]: {
//             maxWidth: "75vh",
//             minHeight: "40vh",
//         },
//         "&:after": {
//             content: '""',
//             display: "block",
//             position: "absolute",
//             width: "100%",
//             height: "100%",
//             bottom: 0,
//             zIndex: 1,
//             background: "linear-gradient(to top, #000, rgba(0,0,0,0))",
//         },
//     },
//     content: {
//         position: "absolute",
//         zIndex: 2,
//         bottom: 0,
//         width: "100%",
//     },
//     appbar: {
//         boxShadow: "2px 2px 6px #242424",
//     },
//     bar: {
//         padding: 0,
//     },
//     tabIcon: {
//         position: "relative",
//         top: "0.4rem",
//     },
//     tabText: {
//         [theme.breakpoints.up("sm")]: {
//             fontSize: "17px",
//             fontWeight: "bold",
//             marginBottom: "1rem",
//         },
//     },
//     indicator: {
//         height: "3px",
//         backgroundColor: "#FFFFFF",
//         [theme.breakpoints.up("sm")]: {
//             height: "5px",
//         },
//     },
//     search: {
//         position: "absolute",
//         top: "0.75rem",
//         right: "1rem",
//         borderRadius: theme.shape.borderRadius,
//         backgroundColor: fade(theme.palette.common.white, 0.15),
//         "&:hover": {
//             backgroundColor: fade(theme.palette.common.white, 0.25),
//         },
//         marginLeft: 0,
//         width: "12rem",
//         [theme.breakpoints.up("sm")]: {
//             marginLeft: theme.spacing(1),
//             width: "auto",
//             top: "1rem",
//         },
//     },
//     searchIcon: {
//         color: "#fff",
//         padding: theme.spacing(0, 2),
//         height: "100%",
//         position: "absolute",
//         pointerEvents: "none",
//         display: "flex",
//         alignItems: "center",
//         justifyContent: "center",
//     },
//     inputRoot: {
//         color: "#fff",
//         display: "flex",
//     },
//     inputInput: {
//         padding: theme.spacing(1, 1, 1, 0),
//         // vertical padding + font size from searchIcon
//         paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
//         transition: theme.transitions.create("width"),
//         width: "100%",
//         [theme.breakpoints.up("sm")]: {
//             width: "12ch",
//             "&:focus": {
//                 width: "20ch",
//             },
//         },
//         [theme.breakpoints.up("md")]: {
//             width: "20ch",
//             "&:focus": {
//                 width: "28ch",
//             },
//         },
//     },
//     fab: {
//         backgroundColor: "secondary",
//         right: "1rem",
//         bottom: "4.5rem",
//         position: "fixed",
//         zIndex: "1",
//         [theme.breakpoints.up("sm")]: {
//             display: "none",
//         },
//     },
//     checkProgress: {
//         backgroundColor: "secondary",
//         display: "none",
//         [theme.breakpoints.up("sm")]: {
//             backgroundColor: "secondary",
//             display: "flex",
//             marginTop: theme.spacing(2),
//         },
//     },
//     dialogPaper: {
//         overflow: "hidden !important",
//         backgroundColor: "secondary",
//     },
//     buttonModal: {
//         marginTop: theme.spacing(2),
//     },
//     dialogTitle: {
//         textAlign: "center",
//         fontWeight: "bold",
//     },
//     textTitle: {
//         color: "black",
//     },
//     badgeImg: {
//         width: "50%",
//         height: "50%",
//         margin: "1rem",
//     },
//     textBody: {
//         color: "black",
//     },
//     buttonClose: {
//         marginTop: theme.spacing(2),
//     },
//     totalPoints: {
//         position: "relative",
//         top: "0.5rem",
//         fontWeight: "bold",
//     },
//     logo: {
//         width: "3rem",
//         height: "100%",
//         paddingRight: "0.5rem",
//         padding: "0",
//         margin: "0",
//         [theme.breakpoints.up("sm")]: {
//             marginLeft: "6.5rem",
//         },
//         // styles for mobile landscape
//         [`${theme.breakpoints.down(767)} and (orientation: landscape)`]: {
//             marginLeft: "0",
//         },
//     },
//     title: {
//         fontWeight: "bold",
//         display: "inline",
//         marginRight: "2rem",
//         [theme.breakpoints.up("sm")]: {
//             display: "block",
//             margin: "0",
//         },
//     },
// }));

// // Idk who wrote this or what it does -Katie
// function a11yProps(index) {
//     return {
//         id: `scrollable-force-tab-${index}`,
//         "aria-controls": `scrollable-force-tabpanel-${index}`,
//     };
// }

// function HomeTabs(props) {
//     const classes = useStyles();
//     const [value, setValue] = React.useState(indexToTabName[page]);

//       // nested routing
//   let { match, history } = props;
//   let { params } = match;
//   let { page } = params;
//   const tabNameToIndex = {
//     0: "actions",
//     1: "favorites",
//   };

//   const indexToTabName = {
//     actions: 0,
//     favorites: 1,
// };

//     const handleChange = (event, newValue) => {
//         setValue(newValue);
//         history.push(`/home/${tabNameToIndex[newValue]}`);
//     };
    
//     return (
//         <Tabs
//             value={value}
//             onChange={handleChange}
//             variant="fullWidth"
//             scrollButtons="off"
//             aria-label="scrollable tabs"
//             className={classes.tabs}
//             TabIndicatorProps={{ className: classes.indicator }}
//         >
//             <Tab
//                 label={
//                     <div className={classes.tabText}>
//                         {/* <EcoIcon className={classes.tabIcon} />  */}
//                   Actions{" "}
//                     </div>
//                 }
//                 {...a11yProps(0)}
//             />
//             <Tab
//                 label={
//                     <div className={classes.tabText}>
//                         {/* <FavoriteIcon className={classes.tabIcon} />  */}
//                   Favorites{" "}
//                     </div>
//                 }
//                 {...a11yProps(1)}
//             />
//         </Tabs>
//     )
// }

// export default HomeTabs;