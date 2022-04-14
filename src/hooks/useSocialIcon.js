import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import auth from "../Firebase/firebase.init";

const useSocialIcon = () => {
    const navigate = useNavigate(auth)
    
    //private route
    let location = useLocation();

    let from = location.state?.from?.pathname || "/";
    const [signInWithGoogle, googleUser,  googleError] = useSignInWithGoogle(auth);
    const handleGoogle = () => {
        signInWithGoogle()
            .then(() => {
                navigate(from)
            })
    }
    return {
        googleUser,
        googleError,
        handleGoogle,
    }
}

export default useSocialIcon;