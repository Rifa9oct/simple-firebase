import { useState } from "react";
import app from "../firebase/firebase.config";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";

const Login = () => {
    const [user, setUser] = useState(null);
    const auth = getAuth(app);
    const Googleprovider = new GoogleAuthProvider();

    const handleGoogleSignIn = () => {
        signInWithPopup(auth, Googleprovider)
            .then(result => {
                const logInUser = result.user;
                setUser(logInUser);
                // console.log(user);
            })
            .catch(error => {
                console.log(error);
            })
    }
    return (
        <div>
            <div className="flex justify-center mt-10">
                <button onClick={handleGoogleSignIn} className="bg-purple-500 text-xl text-white font-bold px-4 py-3 rounded-lg">Google login</button>
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