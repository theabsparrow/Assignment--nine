import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { IoEye } from "react-icons/io5";
import { IoEyeOff } from "react-icons/io5";
import { GlobalContext } from "../components/authProvider/AuthProvider";
import toast from "react-hot-toast";
import 'animate.css';
import { sendEmailVerification } from "firebase/auth";

const SignUp = () => {

    const [displayPass, setDisplayPass] = useState(false);
    const [displayConfirmPass, setDisplayConfirmPass] = useState(false);
    const { creatVisitor, setVisitor, updateVisitorProfile } = useContext(GlobalContext);
    const navigateHome = useNavigate()
    const [errorAlert, setErrorAlert] = useState(null)
    const [verrified, setVerrified] = useState(null)

    const functionSignUp = (e) => {

        e.preventDefault();
        const Name = e.target.name.value;
        const photourl = e.target.photo.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const confirmPassword = e.target.confirmPassword.value;
        const signUpTerms = e.target.signUpTerms.checked;
        setErrorAlert("")

        if (password.length < 6) {
            setErrorAlert("your password should be at least six characters")
            return
        }
        else if (!/[A-Z]/.test(password)) {
            setErrorAlert("your password should be at least one uppercase letter")
            return
        }
        else if (!/[a-z]/.test(password)) {
            setErrorAlert("your password should be at least one lowercase lettet")
            return
        }

        else if (confirmPassword !== password) {
            setErrorAlert("password and confirm password doesn't match")
            return
        }
        else if (!signUpTerms) {
            setErrorAlert("please accept our terms and service")
            return
        }

        creatVisitor(email, password)
            .then((result) => {
                setVisitor(result.user)
                updateVisitorProfile(Name, photourl)
                .then( () => {
                    console.log("profile updated")
                })
                    console.log(result.user)
                sendEmailVerification(result.user)
                    .then( () => {
                        setVerrified(result.user.emailVerified)
                        alert("please verify your email at first and then try to login again" )
                    })
                toast.success("creat account successfully")
                navigateHome('/login')
            })
            .catch((error) => {
                setErrorAlert(error.message)
            })
    }
    return (
        <div className="bg-base-200 flex justify-center min-h-[calc(100vh-256px)]">
            <div className="shadow-2xl bg-base-100 w-[90vh] lg:w-[40vw]">
                <form onSubmit={functionSignUp} className="mt-6 md:mt-10 lg:mt-0">
                    <div className="form-control">
                        <h1 className="mt-1 text-3xl md:text-5xl text-[#3c4043] font-Poppins font-medium text-center animate__animated animate__bounce">Sign Up</h1>
                    </div>
                    <div className="form-control lg:mt-2 animate__animated animate__pulse mt-8 ">
                        <input type="Name" placeholder="Your name" name="name" className="input input-bordered" required />
                    </div>
                    <div className="form-control mt-6 lg:mt-2 animate__animated animate__rubberBand">
                        <input type="Photo Url" placeholder="Place your photo URL" name="photo" className="input input-bordered"/>
                    </div>
                    <div className="form-control mt-6 lg:mt-2 animate__animated animate__headShake">
                        <input type="email" placeholder="Enter Your Email Address" name="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control mt-6 lg:mt-2 relative animate__animated animate__shakeX">
                        <input type={displayPass ? "text" : "password"}
                            placeholder="Password"
                            name="password"
                            className="input input-bordered" required />
                        <span className="absolute top-5 right-2" onClick={() => setDisplayPass(!displayPass)}>{displayPass ? <IoEyeOff className="text-xl"></IoEyeOff> : <IoEye className="text-xl"></IoEye>}</span>
                    </div>
                    <div className="form-control mt-6 lg:mt-2 relative animate__animated animate__shakeY">
                        <input type={displayConfirmPass ? "text" : "password"}
                            placeholder="Confirm Password"
                            name="confirmPassword"
                            className="input input-bordered" required />
                        <span className="absolute top-5 right-2" onClick={() => setDisplayConfirmPass(!displayConfirmPass)}>{displayConfirmPass ? <IoEyeOff className="text-xl"></IoEyeOff> : <IoEye className="text-xl"></IoEye>}</span>
                    </div>
                    <div className="form-control mt-6 lg:mt-0">
                        <label className="space-x-1">
                            <input type="checkbox" name="signUpTerms" id="terms" />
                            <span className="text-[#3c4043] md:text-2xl lg:text-base">Accept our <Link className="text-blue-700">Terms and service</Link></span>
                        </label>
                    </div>
                    <div className="mt-4 md:mt-6 lg:mt-0">
                        {
                            errorAlert && <span className="text-lg lg:text-lg md:text-2xl text-red-600 font-Poppins font-medium">{errorAlert}</span>
                        }
                    </div>
                    <div className="form-control mt-8 lg:mt-4 animate__animated animate__heartBeat">
                        <button className="btn bg-[#006aff] text-white border-none hover:bg-black text-xl font-semibold font-Poppins">Sign Up</button>
                    </div>
                    <p className="text-lg mt-8 lg:mt-0 font-medium font-Poppins md:text-2xl lg:text-base text-[#3c4043]">Already have an account? Please <Link className="text-blue-700" to='/login'>Login</Link></p>
                </form>

                

               
            
            </div>

        </div>
    );
};

export default SignUp;