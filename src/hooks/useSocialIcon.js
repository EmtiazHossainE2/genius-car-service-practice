import { useSignInWithGithub, useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import auth from "../Firebase/firebase.init";

const useSocialIcon = () => {
    const navigate = useNavigate(auth)
    
    //private route
    let location = useLocation();

    let from = location.state?.from?.pathname || "/";

    //google
    const [signInWithGoogle, googleUser,  googleError] = useSignInWithGoogle(auth);
    const handleGoogle = () => {
        signInWithGoogle()
            .then(() => {
                navigate(from)
            })
    }

    // //github 
    // const [signInWithGithub, githubUser,  githubError] = useSignInWithGithub(auth);
    // const handleGithub = () => {
    //     signInWithGithub()
    //     .then(() => {
    //         navigate(from)
    //     })
    // }


    return {
        googleUser,
        googleError,
        handleGoogle,
        // handleGithub,
        // githubUser,
        // githubError
    }
}

export default useSocialIcon;