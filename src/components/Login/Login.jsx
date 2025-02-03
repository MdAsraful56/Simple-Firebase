import { FaGoogle } from "react-icons/fa";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import auth from "../../Firebase/firebase.init";
import { useState } from "react";



const Login = () => {

    let [user, setUser] = useState(null);

    const provider = new GoogleAuthProvider();

    const handleGoogleSignIn = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                console.log(result);
                setUser(result.user);
            })
            .catch(error => {
                console.log('ERROR', error);
                setUser(null);
            })
    }


    return (
        <div>
            <div className="Container text-center mx-50% mt-20">
                <button onClick={handleGoogleSignIn} className="btn"> <FaGoogle /> Login With Google</button>
            </div>
            {
                user && <div className="ml-20 mt-10 space-y-2">
                    <h2 className="text-xl font-semibold">Welcome to {user.displayName}</h2>
                    <h4 className="text-lg font-semibold">Email : {user.email} </h4>
                    <img src={user.photoURL} alt="" />
                </div>
            }
        </div>
    );
};

export default Login;