import {GoogleAuthProvider, signInWithPopup} from "firebase/auth";
import auth from "../../config/firebaseConfig.js";

export const useLoginGoogle = () => {
    async function loginGoogle(){
        var provider = new GoogleAuthProvider();
        provider.addScope('profile');
        provider.addScope('email');
        signInWithPopup(auth, provider).then(function
            (result) {
            // This gives you a Google Access Token.
            var name = result.user.displayName;
            // The signed-in user info.
            var email = result.user.email;
            console.log(name);
            console.log(email);
        });
    }
    return {loginGoogle}
}