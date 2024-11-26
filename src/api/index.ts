import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBg99i79LkvfNe9_drz5c0mBtUkFT96wss',
  authDomain: 'grocery-app-4df19.firebaseapp.com',
  projectId: 'grocery-app-4df19',
  storageBucket: 'grocery-app-4df19.firebasestorage.app',
  messagingSenderId: '851741126952',
  appId: '1:851741126952:web:2b7120378a3221ab37a01d',
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, app };
