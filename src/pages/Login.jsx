import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { useContext, useRef, useState } from "react";
import { IoEye } from "react-icons/io5";
import { IoEyeOff } from "react-icons/io5";
import { GlobalContext } from "../components/authProvider/AuthProvider";
import toast from "react-hot-toast";
import 'animate.css';
import { sendPasswordResetEmail } from "firebase/auth";
import auth from "../firebase/firebase.config";

const Login = () => {

    const [displayPassword, setDisplayPassword] = useState(false);
    const { loginVisitor, loginWithGoogle, setVisitor, loginWithGithub } = useContext(GlobalContext)
    const navigateHome = useNavigate()
    const theLocation = useLocation()
    const [errorMessage, setErrorMessage] = useState(null);
    const emailRef = useRef();

    const functionLogin = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        const checkBox = e.target.terms.checked;

        setErrorMessage("")

        if (!checkBox) {
            setErrorMessage("please accept our terms and service")
            return;
        }

        loginVisitor(email, password)
            .then(result => {
                setVisitor(result.user)
                if (result.user.emailVerified) {
                    toast.success("login successfully")
                }
                else {
                    toast.error("please verify your email at first")
                    return
                }
                e.target.reset()
                navigateHome(theLocation?.state ? theLocation.state : '/')
            })
            .catch(error => {
                console.error(error.message)
                // setErrorMessage(error.message)
                toast.error("invalid email or password")
            })

    }
    const handleResetPassword = () => {
        const emailData = emailRef.current.value;
        if(!emailData){
            toast.error("please provide an email address")
            return;
        }
        else if (!/^[\w.-]+@+[a-zA-Z\d+-]+\.[a-zA-Z]{2,}$/.test(emailData)){
            toast.error("please provide a valid email address")
            return;
        }
        sendPasswordResetEmail(auth,emailData)
        .then( () => {
            alert("please check your email");
        })
        .catch ( error => {
            console.error(error.message);
        })
    }
    const functionGoogleLogin = () => {
        loginWithGoogle()
            .then(result => {
                setVisitor(result.user)
                navigateHome(theLocation?.state ? theLocation.state : '/')
            })
            .catch(error => {
                console.error(error)
            })
    }

    const functionGithubLogin = () => {
        loginWithGithub()
            .then(result => {
                const displayResult = result.user
                setVisitor(displayResult)
                navigateHome(theLocation?.state ? theLocation.state : '/')
            })
            .catch(error => {
                console.error(error)
            })
    }
    return (
        <div className="bg-base-200 flex justify-center min-h-[calc(100vh-256px)]">
            <div className="shadow-2xl bg-base-100 w-[90vw] lg:w-[40vw]">
                <h1 className="text-center mt-8 md:mt-10 lg:mt-3 text-[24px] lg:text-[24px] md:text-6xl text-[#131313] font-Poppins font-semibold leading-6 animate__animated animate__bounce">Login to <span className="text-[24px] lg:text-[24px] md:text-6xl font-bold text-[#006aff]">TheAabash</span></h1>
                <form onSubmit={functionLogin} className="mt-8 lg:mt-4">
                    <div className="form-control animate__animated animate__pulse ">
                        <input
                            type="email"
                            name="email"
                            ref={emailRef}
                            placeholder="Enter Your Email Address"
                            className="input input-bordered"
                            required />
                    </div>
                    <div className="form-control relative mt-7 lg:mt-3 animate__animated animate__heartBeat">
                        <input
                            type={displayPassword ? "text" : "password"}
                            name='password'
                            placeholder="Password"
                            id="password"
                            className="input input-bordered" required />
                        <span className="absolute top-[15px] right-3 text-lg"
                            onClick={() => setDisplayPassword(!displayPassword)}>
                            {displayPassword ? <IoEyeOff></IoEyeOff> : <IoEye></IoEye>}
                        </span>
                    </div>
                    <div className="form-control mt-8 lg:mt-0">
                        <label className="space-x-1">
                            <input type="checkbox" name="terms" id="terms" />
                            <span className="text-[#3c4043] md:text-xl lg:text-base font-medium">Accept our <Link className="text-blue-700">Terms and service</Link></span>
                        </label>
                        <label className="mt-7">
                            <Link onClick={handleResetPassword} className="text-blue-700 font-medium md:text-xl lg:text-base font-Poppins">Forgot password ?</Link>
                        </label>
                    </div>
                    <div className="mt-8 lg:mt-0">
                        {
                            errorMessage && <span className="text-lg md:text-xl lg:text-lg text-red-600 font-Poppins font-medium">{errorMessage}</span>
                        }
                    </div>
                    <div className="form-control mt-10 lg:mt-4 animate__animated animate__headShake">
                        <button className="btn bg-[#006aff] text-white border-none hover:bg-black text-xl font-semibold font-Poppins">Login</button>
                    </div>
                    <p className="text-lg font-medium font-Poppins text-[#3c4043] md:text-xl lg:text-lg mt-8 lg:mt-0">New to this website? Please <Link className="text-blue-700" to='/signUp'>Sign Up</Link></p>
                </form>

                <div className="mt-8 lg:mt-4">
                    <div className="form-control animate__animated animate__shakeY">
                        <button onClick={functionGithubLogin} className="btn bg-[#131313] text-white hover:bg-white hover:text-black border-[1px] border-black text-xl  font-semibold font-Poppins"><FaGithub></FaGithub> <span>Login with Github</span></button>
                    </div>
                    <div className="mt-8 lg:mt-2 animate__animated animate__shakeX">
                        <button onClick={functionGoogleLogin} className="btn w-full text-[#3c4043] border-[1px] space-x-16 border-[#dadce0] hover:bg-white text-2xl font-semibold font-Poppins"> <FcGoogle className="-ml-10"></FcGoogle><span className="text-xl">Login with Google</span></button>
                    </div>
                </div>
            </div>

        </div>

    );
};

export default Login;