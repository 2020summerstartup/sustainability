import FirebaseContext, { withFirebase } from './context';
import Firebase from './firebase';
import {
    firestore, createUser, getUser, updateUserPoint, uploadUserPoint, uploadUserTotalPoint, updateUserDorm, updateDormPoint, getDorm, addFav, deleteFav, actionMastered, getUserImpact, updateUserImpact, DarkModeOpened, AddHomeOpened,
} from './firebase';

export default Firebase;

export { FirebaseContext, withFirebase };

export { firestore, createUser, getUser, updateUserPoint, uploadUserPoint, uploadUserTotalPoint, updateUserDorm, updateDormPoint, getDorm, addFav, deleteFav, actionMastered, getUserImpact, updateUserImpact, DarkModeOpened, AddHomeOpened, };