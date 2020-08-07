import React, { useState, useEffect } from 'react';
import styles from "../HomePage/modal.module.css";
// import DarkLogo from "../../img/darkMode.png";
import { AddHomeOpened } from "../../services/Firebase";
import addHomeGif from "../../img/add.gif";

import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";

import badge from "../../sounds/hero_simple-celebration-01.wav";

const useStyles = makeStyles((theme) => ({
    buttonModal: {
        marginTop: theme.spacing(2),
    },
    dialogTitle: {
        textAlign: "center",
        fontWeight: "bold",
    },
    textTitle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center",
    },
    badgeImg: {
        width: "40%",
        height: "40%",
        position: "relative",
        left: "50%",
        transform: "translate(-50%, 0)",
    },
    textEntireBody: {
        color: "white",
        marginTop: "1rem"
    },
    textBody: {
        color: "white",
        margin: "0.5rem",
        [theme.breakpoints.up('sm')]:{
            fontSize: "16px"
        }
    },
    buttonClose: {
        margin: "1rem auto",
        display: "flex",
    },
}));

// localStorage.setItem("addHomePop_done", false);

export default function DarkModeModal() {
    const classes = useStyles();
    const [visible, setVisible] = useState(false);
    const [open, setOpen] = React.useState(true);

    const handleClose = () => {
        setOpen(false);
    };

    // sound play for certain buttons
    const badgeAudio = new Audio(badge);

    // called by onclick to play the audio file
    const playSound = (audioFile) => {
        audioFile.play();
    };

    useEffect(() => {
        let addHomePop_done = JSON.parse(localStorage.getItem('addHomePop_done'));
        let email = localStorage.getItem('email');
        if (!addHomePop_done) {
            setVisible(true);
            playSound(badgeAudio);
            AddHomeOpened(email);
        }
        
    }, [])
    if (!visible) return null;

    return (
        <div>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                {/* NOTE: dialogContent is styles in module.css, background wouldn't work otherwise */}
                <DialogContent className={styles.dialogContentAddHome}>
                    <DialogContentText id="alert-dialog-description">
                        {/* RIBBON */}
                        {/* <div className={styles.nonSemanticProtector}> */}
                            {/* <h1 className={styles.ribbon}> */}
                                {/* <strong className={styles.ribbonContent}> */}
                                    <Typography variant="h5" className={classes.textTitle}>Hey {localStorage.getItem('name')}! Make sure you add our app to your homescreen!</Typography>
                                {/* </strong> */}
                            {/* </h1> */}
                        {/* </div> */}
                    </DialogContentText>
                    <img alt="dark logo" src={addHomeGif} className={classes.badgeImg} />
                    {/* <DarkLogo className={classes.badgeImg} /> */}
                    <DialogContentText id="alert-dialog-description" className={classes.textEntireBody}>
                        {/* <Typography variant="h6" className={classes.textTitle}>Make sure you add our app to your homescreen!</Typography> */}
                        <Typography variant="body2" className={classes.textBody}>
                            <strong>For IOS devices: </strong> Make sure you're on Safari and then tap the Share
                            button at the bottom of your screen. Then tap on the "Add to Home
                            Screen" button and our app will appear!
                        </Typography>
                        <Typography variant="body2" className={classes.textBody}>
                            <strong>For Andriod devices: </strong>In Chrome, go to Settings in the rop right
                            corner, then slide down and tap "Add to Home Screen".
                        </Typography>
                    </DialogContentText>
                    <Button
                        onClick={() => { handleClose(); setVisible(false); }}
                        variant="contained"
                        color="secondary"
                        autoFocus
                        className={`${classes.buttonClose} ${styles.buttonBackground}`}
                    >
                        Got it!
                    </Button>
                </DialogContent>
            </Dialog>
        </div>
    )
} 
