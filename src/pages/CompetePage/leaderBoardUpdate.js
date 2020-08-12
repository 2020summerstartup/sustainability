// commented by JM (written by LL I think?)
import {getDorm} from "../../services/Firebase";

// this function is called whenever we need to display the user's dorm ranking --> account & dorm pages & dorm select
// sets local storage to the ranking value reflects the ranking of the dorm
function assignRanking(dormData) { // param is snapshot of user's dorm doc in dorms collection
    localStorage.setItem('ranking', dormData.rank)
  }  

// this function is called when 
//
function leaderBoardUpdate() {
    const updates = [] // defines update --> var that 

    return getDorm()
        .orderBy('score') // to arrange output of dorm docs by score (increasing order)
        .get()
        .then((snapshot) => {
        let i = 0; // tracks count --> used as way to determine rank
        let length = snapshot.docs.length // length = # of docs w/ field 'score' in dorm collection (ie. 9)
        snapshot.docs.forEach(doc => {
            updates.push(getDorm().doc(doc.id).update({
                rank: length - i, // rank = total number of dorms - where we are at in the count 
            }));
            i++; // increase the count 
        });
        // return Promise.all(updates); // not entirely sure what this does but pretty sure its not necessary 
        })
        .then(() => {
        getDorm().doc(localStorage.getItem('dorm')).get().then((snapShot) => {
            assignRanking(snapShot.data()) // this will set LS ranking value with new/updated firestore ranking once ranking are reevaluated 
        })
        })
        .catch(err => {
        console.error(err);
        });
}

export { assignRanking };
export default leaderBoardUpdate;