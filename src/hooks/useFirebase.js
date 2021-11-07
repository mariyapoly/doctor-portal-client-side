import initializeAuthentication from "../pages/Login/Firebase/firbase.init";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged, signInWithPopup, GoogleAuthProvider, updateProfile, getIdToken } from "firebase/auth";
import { useEffect, useState } from "react";

// initailize firebase app
initializeAuthentication();

const useFirebase = () => {

    const [user, setUser] = useState({});
    const [authError, setAuthError] = useState('')
    const [isLoading, setIsLoading] = useState(true);
    const [isAdmin, setIsAdmin] = useState(true);
    const [token, setToken] = useState('');

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    // funtion for register user
    const registerUser = (email, password, name, history) => {
        setIsLoading(true)
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                const newUser = { email, displayName: name };
                setUser(newUser)
                // saved user
                saveUser(email, name, 'POST')
                // send name to firebase after creation
                updateProfile(auth.currentUser, {
                    displayName: name,
                }).then(() => {
                }).catch((error) => {
                });
                history.replace('/')
                setAuthError('')
            })
            .catch((error) => {
                setAuthError(error.message)
            })
            .finally(() => setIsLoading(false));
    }
    // function for login user
    const logIn = (email, password, location, history) => {
        setIsLoading(true)
        const distination = location?.state?.from || '/'
        signInWithEmailAndPassword(auth, email, password)
            .then((result) => {
                history.replace(distination)
                setAuthError('')
            })
            .catch((error) => {
                setAuthError(error.message)
            })
            .finally(() => setIsLoading(false));
    }

    // google signin
    const signInUsingGoogle = (location, history) => {
        setIsLoading(true);
        const distination = location?.state?.from || '/';
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const user = result.user
                saveUser(user.email, user.displayName, 'PUT')
                history.push(distination);
                setAuthError('')
            }).catch((error) => {
                setAuthError(error.message)
            }).finally(() => setIsLoading(false));
    }

    // observered user state changed
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
                getIdToken(user)
                    .then(idToken => {
                        setToken(idToken)
                    })
            } else {
                setUser({})
            }
            setIsLoading(false)
        });
        return () => unsubscribed;
    }, [])

    // admin data loaded
    useEffect(() => {
        fetch(`https://shielded-shore-60672.herokuapp.com/users/${user.email}`)
            .then(res => res.json())
            .then(data => {
                setIsAdmin(data.admin)
            })
    }, [user.email])
    // function for user logout
    const logOut = () => {
        setIsLoading(true)
        signOut(auth).then(() => {
            setUser({})
        }).catch((error) => {
            setAuthError(error.message)
        }).finally(() => setIsLoading(false));
    }

    // saved user
    const saveUser = (email, displayName, method) => {

        const user = { email, displayName }
        fetch('https://shielded-shore-60672.herokuapp.com/users', {
            method: method,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
    }

    return {
        user,
        setUser,
        registerUser,
        logIn,
        logOut,
        isLoading,
        setIsLoading,
        authError,
        signInUsingGoogle,
        isAdmin,
        token
    }

}


export default useFirebase;