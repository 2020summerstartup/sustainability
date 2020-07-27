import {useState, useEffect} from "react";
// set & check timestaps
import moment from "moment";

function checkForIOS() {
    // check if user already installed the app
    if (navigator.standalone) {
        return false;
    }
    // check day/time 
    const today = moment().toDate(); // moment converts it to a Data object
    const lastPrompt = moment(localStorage.getItem("installPrompt"));
    const days = moment(today).diff(lastPrompt, "days");
    // check what kind of device
    const ua = window.navigator.userAgent;
    const webkit = !!ua.match(/WebKit/i);
    const isIPad = !!ua.match(/iPad/i);
    const isIPhone = !!ua.match(/iPhone/i)
    const isIOS = isIPad || isIPhone;
    const isSafari = isIOS && webkit && !ua.match(/CriOS/i);

    // if user doesn't have timestamp or haven't sent prompt in over 30 days
    // and on ios and safari, then send prompt!
    const prompt = (isNaN(days) || days > 30) && isIOS && isSafari;

    if (prompt && "localStorage" in window) {
        localStorage.setItem("installPrompt", today);
    }

    return {isIOS, isSafari, prompt};
}

export default function useIsIOS() {
    const [isIOS, setIsIOS] = useState({});

    useEffect(() => {
        setIsIOS(checkForIOS());
        return() => console.log("CLEANUP INSTALL PROMPT", isIOS);
    }, []);

    return isIOS;
}
