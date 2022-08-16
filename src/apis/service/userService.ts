import { addDoc, collection, getDocs, query, where } from 'firebase/firestore';
import { db } from 'firebaseConfig';

const userCollection = collection(db, 'users');

// 중복복이라면 true, 아니라면 false를 리턴
export const checkDuplicateId = async (email: string) => {
  const q = query(userCollection, where('email', '==', email));
  const snap = await getDocs(q);
  return !snap.empty;
};

// 회원가입시 중복이 아니라면 db에 유저 정보를 넣음
// 중복이라면 false를 리턴, 성공시 true를 리턴
export const createUser = async (id: string, password: string) => {
  const isDuplicate = await checkDuplicateId(id);

  // 중복된 아이디라면
  if (isDuplicate) {
    return false;
  }

  await addDoc(userCollection, {
    id,
    password,
  });
  return true;
};
