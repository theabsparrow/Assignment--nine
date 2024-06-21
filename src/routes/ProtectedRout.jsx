import { useContext } from "react";
import { GlobalContext } from "../components/authProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from 'prop-types';

const ProtectedRout = ({children}) => {
const {visitor, dataLoading} = useContext(GlobalContext);
const theLocation = useLocation()
if(dataLoading){
    return <div className="flex justify-center"><span className="loading loading-spinner text-info"></span></div>
}
if(visitor){
    return children
}
    return <Navigate state={theLocation.pathname} to='/login'></Navigate>
};

ProtectedRout.propTypes = {
    children:PropTypes.node
}

export default ProtectedRout;