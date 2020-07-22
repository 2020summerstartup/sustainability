import {getDorm} from "../../services/Firebase";

function assignRanking(data) {
    localStorage.setItem('ranking', data.rank)
  }  

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
            console.log('dorm ranking uploaded')
        })
        console.log('dorm ranks updated');
        })
        .catch(err => {
        console.error(err);
        });
}

export { assignRanking };
export default leaderBoardUpdate;