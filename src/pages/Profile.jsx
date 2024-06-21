import { useContext } from "react";
import { GlobalContext } from "../components/authProvider/AuthProvider";
import { CgProfile } from "react-icons/cg";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Profile = () => {
    const { visitor, updateVisitorProfile,setVisitor,dataLoading,setDataLoading } = useContext(GlobalContext);
const updateProfileFunction = (e) => {
        const updateName = e.target.name.value
        const updatePhoto = e.target.photo.value
        updateVisitorProfile(updateName,updatePhoto)
        .then(result => {
                setVisitor(result.user)
                setDataLoading(true)
        })
        .catch(error => {
            console.error(error)
        })
        if(dataLoading){
            return <div className="flex justify-center"><span className="loading loading-spinner text-info"></span></div>
}

}
    return (
        <div className="px-1 md:px-[20px] lg:px-[70px] pt-10 bg-gradient-to-r from-sky-500 to-indigo-500 min-h-[calc(100vh-256px)] ">
            <Helmet>
                <title>Profile | TheAabash</title>
            </Helmet>
            <div className="bg-white py-8 px-[48px] rounded-lg">
                <h1 data-aos="fade-up" data-aos-duration="1000" className="text-center text-3xl font-semibold font-Poppins text-[#131313]">Your Profile</h1>

                <div className="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                    <div data-aos="fade-right" data-aos-duration="1400" className="flex flex-col items-center w-[20vw]">
                        <h1 className="text-[#131313] text-3xl font font-semibold font-Poppins">Your Photo</h1>
                        <div className="mt-4">
                            {
                                visitor?.photoURL ? <img className="rounded-full w-[10vw]" src={visitor.photoURL} alt="" /> : <div
                                    className="tooltip"
                                    data-tip="No photo available">
                                    <CgProfile className="text-[100px]"></CgProfile>
                                </div>
                            }
                        </div>
                    </div>

                    <div data-aos="zoom-in" data-aos-duration="1800" className="lg:ml-[-80px]">
                        <h1 className="text-4xl text-[#131313] font-semibold font-Poppins">Personal Details</h1>
                        <div className="mt-5">
                            <div>
                                <h1 className="text-xl text-black font-semibold font-Poppins">Name:</h1>
                                <div>
                                    {
                                        visitor?.displayName ? <h1 className="text-[#131313] font-Poppins text-lg">{visitor.displayName}</h1> : <h1 className="text-[#131313] font-Poppins font-medium text-lg">Name unavailable now</h1>
                                    }
                                </div>
                            </div>

                            <div className="mt-3">
                                <h1 className="text-xl text-black font-semibold font-Poppins">Email:</h1>
                                <div>
                                    {
                                        visitor?.email ? <h1 className="text-[#131313] font-Poppins text-lg">{visitor.email}</h1> : <h1 className="text-[#131313] font-Poppins font-medium text-lg">Name unavailable now</h1>
                                    }
                                </div>
                            </div>

                            <div className="mt-3">
                                <h1 className="text-xl text-black font-semibold font-Poppins">PhotoURL:</h1>
                                <div>
                                    {
                                        visitor?.photoURL ? <Link className="text-blue-600 font-Poppins text-lg ">{visitor.photoURL}</Link> : <h1 className="text-[#131313] font-Poppins font-medium text-lg">Photo URL unavailable now</h1>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>

                    <div data-aos="fade-left" data-aos-duration="1000">
                        <h1 className="text-4xl text-[#131313] font-semibold font-Poppins">Edit your info</h1>
                        <div>
                            <form onSubmit={updateProfileFunction} className="mt-3">
                                <div className="form-control">
                                    <input type="text" name="name" placeholder="Enter Your New Name" className="input input-bordered" />
                                </div>
                                <div className="form-control mt-2">
                                    <input type="text" name="photo" placeholder="Enter Your New Photo URL" className="input input-bordered" />
                                </div>
                                <div className="form-control mt-3">
                                    <button type='submit' className="btn bg-[#006aff] text-white border-none hover:bg-black text-xl font-semibold font-Poppins">Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default Profile;