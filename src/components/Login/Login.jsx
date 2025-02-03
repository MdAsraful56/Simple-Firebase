import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import auth from "../../Firebase/firebase.init";


const Login = () => {

    const provider = new GoogleAuthProvider();

    const handleGoogleSignIn = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                console.log(result);
            })
            .catch(error => {
                console.log('ERROR', error);
            })
    }


    return (
        <div>
            <div className="Container text-center mx-50% mt-20">
                <button onClick={handleGoogleSignIn} className="btn btn-accent">Login With Google</button>
            </div>
        </div>
    );
};

export default Login;