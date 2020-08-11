import {getDorm} from "../../services/Firebase";

function assignRanking(data) {
    localStorage.setItem('ranking', data.rank)
  }  
// I'm guessing Jess wrote this? Can you comment it bc I don't fully understand what's going on -Kobe
function leaderBoardUpdate() {
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
        })
        })
        .catch(err => {
        console.error(err);
        });
}

export { assignRanking };
export default leaderBoardUpdate;