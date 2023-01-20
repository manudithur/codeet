import {getAuth, signInWithEmailAndPassword} from 'firebase/auth'

export function login(email: string, password: string){
    const auth = getAuth()
    return signInWithEmailAndPassword(auth, email, password);
}