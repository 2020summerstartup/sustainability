import FirebaseContext, { withFirebase } from './context';
import Firebase from './firebase';
import {
    firestore, createUser, assignData, getUser, updateUserPoint, updateUserDorm, updateDormPoint, getDorm, addFav, deleteFav, actionMastered, getUserImpact, updateUserImpact, DarkModeOpened, AddHomeOpened, getSchoolImpact, updateSchoolImpact
} from './firebase';

export default Firebase;

export { FirebaseContext, withFirebase };

export { firestore, createUser, assignData, getUser, updateUserPoint, updateUserDorm, updateDormPoint, getDorm, addFav, deleteFav, actionMastered, getUserImpact, updateUserImpact, DarkModeOpened, AddHomeOpened, getSchoolImpact , updateSchoolImpact};
