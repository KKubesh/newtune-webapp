import { initializeApp } from "firebase/app";
import {
    getFirestore,
    collection,
    getDoc,
    getDocs,
    doc,
} from "firebase/firestore";
import { getAuth, signInAnonymously } from "firebase/auth";

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export const auth = getAuth(app);

export const authenticateAnonymously = async () => {
    console.log("Now Authenticating")
    return await signInAnonymously(getAuth(app));
};

export const useFirestoreService = () => {

    const getSongs = async () => {
        return await getDocs(collection(db, "songs"))
    }

    const getArrayValues = async ({ stringArray }: { stringArray: string[] }) => {
        console.log("arrayvalues", stringArray);

        if (!stringArray || stringArray.length) {
            console.log("RETURN NOTHING")
            return [];
        }
        const output = stringArray.map(async string => {
            const stringRef = doc(db, string);
            const output = await getDoc(stringRef);
            console.log("in OUTPUT")
            console.log(output.data());
            return output.data();
        })
        return output;
    }

    const getSongDetails = async ({ song }: { song: string }) => {
        const songRef = doc(db, song);
        const output = await getDoc(songRef);
        return output
    }

    const getSavedSongs = ({ userSongListId }: { userSongListId: string }) => {
        const userSongListDocRef = doc(db, 'userSongList', userSongListId)
        return getDoc(userSongListDocRef);
    };

    return {
        getArrayValues,
        getSavedSongs,
        getSongs,
        getSongDetails,
    };
}; 