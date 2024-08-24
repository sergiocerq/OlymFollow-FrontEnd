import {GoogleAuthProvider, signInWithPopup} from "firebase/auth";
import auth from "../../config/firebaseConfig.js";
import {FetcherFactory} from "../../data/fetchers/FetcherFactory.js";
import {useNavigate} from "react-router-dom";
import {toast} from "sonner";
import {styleToastError} from "../../styles.js";
import {handleToken} from "../../utils.js";

const fetcherFactory = new FetcherFactory();

/**
 * Hook customizado que retorna a função de login com o Google.
 * 
 * 
 * @ example
 * const {loginGoogle} = useLoginGoogle();
 * 
 * @returns {Object} Objeto contendo a função de login com o Google.
 */
export const useLoginGoogle = () => {
    const navigate = useNavigate();

    async function loginGoogle(){
        var provider = new GoogleAuthProvider();
        provider.addScope('profile');
        provider.addScope('email');
        signInWithPopup(auth, provider).then( async function
            (result) {
            let user = result.user;
            const loginFetcher = fetcherFactory.createLoginFetcher();
            const response = await loginFetcher.loginWithGoogle(user.accessToken);
            if(response.status === 200){
                let token = handleToken(response.headers['authorization']);
                let userID = response.headers['userid'];
                sessionStorage.setItem("token", token);
                sessionStorage.setItem("userID", userID);

                if (token) {
                    navigate("/");
                }
            }
            toast.error("Erro ao logar", {
                style: styleToastError,
                duration: 3000,
            });
        });
    }
    return {loginGoogle}
}