import { initializeApp} from  'firebase/app';
import { getFirestore} from  'firebase/firestore'


const firebaseConfig = {
    apiKey: "ADD INFO",
    authDomain: "ADD INFO",
    databaseURL: "ADD INFO",
    projectId: "ADD INFO",
    storageBucket: "ADD INFO",
    messagingSenderId: "ADD INFO",
    appId: "ADD INFO"
  };

  const app = initializeApp(firebaseConfig);
  export const db = getFirestore(app);