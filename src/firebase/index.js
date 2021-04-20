import firebase from 'firebase/app';
import 'firebase/firestore';

const app = firebase.initializeApp({
  apiKey: 'AIzaSyDuK90st5ZS13CAuI-HPqDrpuJbJYtXrLE',
  authDomain: 'ecommerce-coder-38fc2.firebaseapp.com',
  projectId: 'ecommerce-coder-38fc2',
  storageBucket: 'ecommerce-coder-38fc2.appspot.com',
  messagingSenderId: '887409650033',
  appId: '1:887409650033:web:c2b2cbda2b42db732deed0',
});

export const getFirebase = () => {
  return app;
};

export const getFirestore = () => {
  return firebase.firestore(app);
};
