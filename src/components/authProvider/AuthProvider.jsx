import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import auth from "../../firebase/firebase.config";


export const GlobalContext = createContext(null);
const googleProvider = new GoogleAuthProvider()
const githubProvider = new GithubAuthProvider()

const AuthProvider = ({ children }) => {

    const [estateCard, setEstateCard] = useState([])
    const [visitor, setVisitor] = useState(null);
    const [dataLoading, setDataLoading] = useState(true);


    // use effect for estate data
    useEffect(() => {
        fetch('/data.json')
            .then(response => response.json())
            .then(data => setEstateCard(data))
    }, [])


// creating user function
    const creatVisitor = (email, password) => {
        setDataLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    // update profile function
    const updateVisitorProfile = (name, photo) => {
       return updateProfile(auth.currentUser, {
                displayName: name,
                photoURL: photo
        })
    }
// login user function
    const loginVisitor = (email,password) => {
        setDataLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    // login with google function
    const loginWithGoogle = () => {
        setDataLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    // login with github function
    const loginWithGithub = () => {
        setDataLoading(true)
        return signInWithPopup(auth, githubProvider)
    }

    // logout function
    const logOut = () => {
        setDataLoading(true)
        return signOut(auth)
    }


    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, presentVisitor => {
            setVisitor(presentVisitor);
            setDataLoading(false)
        })
        return () => {
            unSubscribe()
        }
    },[])

    // contex api info
    const authContextInfo = {
        estateCard,
        creatVisitor,
        loginVisitor,
        visitor,
        setVisitor,
        logOut,
        dataLoading,
        setDataLoading,
        loginWithGoogle,
        loginWithGithub,
        updateVisitorProfile,
    };

    return (
        <GlobalContext.Provider value={authContextInfo}>
            {children}
        </GlobalContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node
}
export default AuthProvider;