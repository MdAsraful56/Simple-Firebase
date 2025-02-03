import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { GithubAuthProvider, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import auth from "../../Firebase/firebase.init";
import { useState } from "react";



const Login = () => {

    let [user, setUser] = useState(null);

    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const handleGoogleSignIn = () => {
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                console.log(result);
                setUser(result.user);
            })
            .catch(error => {
                console.log('ERROR', error);
                setUser(null);
            })
    };


    const handleGitHubSignIn = () => {
        signInWithPopup(auth, githubProvider)
            .then((result) => {
                console.log(result);
                setUser(result.user);
            })
            .catch(error => {
                console.log('ERROR', error);
                setUser(null);
            })
    };


    const handleSignOut = () => {
        signOut(auth)
            .then(() => {
                setUser(null);
            })
            .catch(error => {
                console.log('ERROR', error);
                setUser(null);
            })
    };


    return (
        <div>
            <div className="Container text-center mx-50% mt-20">
                {/* <button onClick={handleGoogleSignIn} className="btn"> <FaGoogle /> Login With Google</button>
                <button onClick={handleSignOut} className="btn">Sign Out</button> */}
                {
                    user ? 
                        <button onClick={handleSignOut} className="btn">Sign Out</button> :
                        <div className="flex flex-col text-center items-center gap-3 mt-20">
                            <button onClick={handleGoogleSignIn} className="btn"> <FaGoogle /> Login With Google</button>
                            <button onClick={handleGitHubSignIn} className="btn"> <FaGithub /> Login With GitHub</button>
                        </div>
                }
            </div>
            {
                user && <div className="ml-20 mt-10 space-y-2">
                    <h2 className="text-xl font-semibold">Welcome to {user.displayName}</h2>
                    <h4 className="text-lg font-semibold">Email : {user.email || user.providerData[0].email} </h4>
                    <img src={user.photoURL} alt="" />
                </div>
            }
        </div>
    );
};

export default Login;