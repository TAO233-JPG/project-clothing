import { initializeApp } from 'firebase/app'
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  User,
  NextOrObserver,
} from 'firebase/auth'
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  writeBatch,
  getDocs,
  query,
  QueryDocumentSnapshot,
} from 'firebase/firestore'
import { CategoryType } from '../store/categorise/categorise.type'

const firebaseConfig = {
  apiKey: 'AIzaSyBLF-Fq09zM4U1ZF8h4LfsFB4QzLdkSCB0',
  authDomain: 'project-clothing-db.firebaseapp.com',
  projectId: 'project-clothing-db',
  storageBucket: 'project-clothing-db.appspot.com',
  messagingSenderId: '442506915747',
  appId: '1:442506915747:web:0b4dab920fc69a9d6a3416',
}

export const firebaseApp = initializeApp(firebaseConfig)

const Googleprovider = new GoogleAuthProvider()

Googleprovider.setCustomParameters({
  prompt: 'select_account',
})

export const auth = getAuth()
export const signInWithGooglePopup = () => signInWithPopup(auth, Googleprovider)
export const signINWithGoogleRedirect = () => signInWithRedirect(auth, Googleprovider)

export const db = getFirestore()

export const addCollectionAndDocuments = async (collectionKey: string, objectsToAdd: any[]) => {
  const batch = writeBatch(db)
  const collectionRef = collection(db, collectionKey)

  objectsToAdd.forEach((object: { title: string }) => {
    const docRef = doc(collectionRef, object.title.toLowerCase())
    batch.set(docRef, object)
  })

  await batch.commit()
}

export const getCategoriesAndDocuments = async (): Promise<CategoryType[]> => {
  const collectionRef = collection(db, 'categories')
  const q = query(collectionRef)

  const querySnapshot = await getDocs(q)

  const categories = querySnapshot.docs.map((docSnapshot) => docSnapshot.data() as CategoryType)

  // const categoryMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
  //   const { title, items } = docSnapshot.data();
  //   acc[title.toLowerCase()] = items;
  //   return acc;
  // }, {});

  return categories
}

export type AdditionalInfoType = {
  displayName?: string
}

export type UserDataType = {
  createdAt: Date
  displayName: string
  email: string
}

export const createUserDocumentFromAuth = async (
  userAuth: User,
  additionInformation = {} as AdditionalInfoType,
): Promise<QueryDocumentSnapshot<UserDataType> | void> => {
  if (!userAuth) return

  const userDocRef = doc(db, 'users', userAuth.uid)

  const userSnapshot = await getDoc(userDocRef)

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth
    const createdAt = new Date()

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionInformation,
      })
    } catch (error) {
      console.log('error creating the user', error)
    }
  }

  return userSnapshot as QueryDocumentSnapshot<UserDataType>
}

export const createAuthUserWithEmailAndPassword = async (email: string, password: string) => {
  return createUserWithEmailAndPassword(auth, email, password)
}

export const signInAuthUserWithEmailAndPassword = async (email: string, password: string) => {
  return signInWithEmailAndPassword(auth, email, password)
}

export const signOutAuth = async () => {
  return signOut(auth)
}

export const onAuthStateChangedListener = (callback: NextOrObserver<User>) => onAuthStateChanged(auth, callback)

export const getCurrentUser = (): Promise<User | null> => {
  return new Promise((resolve, reject) => {
    const unsubscribe = onAuthStateChanged(
      auth,
      (userAuth) => {
        unsubscribe()
        resolve(userAuth)
      },
      reject,
    )
  })
}
