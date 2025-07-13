import { useState, useEffect } from 'react';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import { firebaseApp } from '../utils/firebaseConfig';

export default function useGPA() {
  const [gpa, setGpa] = useState(null);

  useEffect(() => {
    const db = getFirestore(firebaseApp);
    const docRef = doc(db, 'students', 'michelle123');
    getDoc(docRef).then((docSnap) => {
      if (docSnap.exists()) setGpa(docSnap.data().gpa);
    });

    //Temporary hardcoded fallback
    //setGpa('3.84');
  }, []);

  return gpa;
}
