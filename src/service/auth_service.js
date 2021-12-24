import firebaseApp from './firebase';
import { GoogleAuthProvider,signInWithPopup ,getAuth,GithubAuthProvider } from "firebase/auth";

class AuthService{
  login(providerName){
    let authProvider = '';
    if(providerName === 'Google'){
      authProvider = new GoogleAuthProvider(firebaseApp);
    }else if(providerName === 'GitHub'){
      authProvider = new GithubAuthProvider(firebaseApp);
    }else{
      console.log('Error')
    }

    const auth = getAuth();
    signInWithPopup(auth, authProvider)
  }
}

export default AuthService;