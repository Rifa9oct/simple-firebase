import { useState } from "react";
import app from "../firebase/firebase.config";
import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup, signOut } from "firebase/auth";

const Login = () => {
    const [user, setUser] = useState(null);
    const auth = getAuth(app);
    const GoogleProvider = new GoogleAuthProvider();
    const GithubProvider = new GithubAuthProvider();

    const handleGoogleSignIn = () => {
        signInWithPopup(auth, GoogleProvider)
            .then(result => {
                const logInUser = result.user;
                setUser(logInUser);
                // console.log(user);
            })
            .catch(error => {
                console.log(error);
            })
    }

    const handleGithubSignIn = () => {
        signInWithPopup(auth, GithubProvider)
            .then(result => {
                const logInUser = result.user;
                setUser(logInUser);
                // console.log(user);
            })
            .catch(error => {
                console.log(error);
            })
    }

    const handleSignOut = () => {
        signOut(auth)
            .then(result => {
                setUser(null)
            })
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <div>
            <div className="flex justify-center mt-10">
                {
                    user ?
                        <button onClick={handleSignOut} className="bg-purple-500 text-xl text-white font-bold px-4 py-3 rounded-lg">Sign out</button> :
                        <div>
                            <button onClick={handleGoogleSignIn} className="mr-6 bg-purple-500 text-xl text-white font-bold px-4 py-3 rounded-lg">Google login</button>
                            <button onClick={handleGithubSignIn} className="mr-6 bg-purple-500 text-xl text-white font-bold px-4 py-3 rounded-lg">Github login</button>
                        </div>
                }
            </div>
            {
                user && <div className="mt-10">
                    <h1 className="text-xl font-bold text-center">User: {user.displayName}</h1>
                    <p className="text-xl font-bold text-center">Email: {user.email}</p>
                    <img className="mx-auto mt-5" src={user.photoURL} />

                </div>
            }
        </div>
    );
};

export default Login;