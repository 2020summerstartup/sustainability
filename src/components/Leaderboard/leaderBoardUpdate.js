import React from "react";

import {getDorm} from "../Firebase";

function assignRanking(data) {
    localStorage.setItem('ranking', data.rank)
  }  

export default function leaderBoardUpdate() {
    const updates = []

    return getDorm()
        .orderBy('score')
        .get()
        .then((snapshot) => {
        let i = 0;
        let length = snapshot.docs.length
        snapshot.docs.forEach(doc => {
            updates.push(getDorm().doc(doc.id).update({
                rank: length - i,
            }));
            i++;
        });
        return Promise.all(updates);
        })
        .then(() => {
        getDorm().doc(localStorage.getItem('dorm')).get().then((snapShot) => {
            assignRanking(snapShot.data())
            console.log('dorm ranking uploaded')
        })
        console.log('dorm ranks updated');
        })
        .catch(err => {
        console.error(err);
        });
}

export {assignRanking}