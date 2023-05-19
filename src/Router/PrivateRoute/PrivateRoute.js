import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContex } from "../../context/AuthProvider/AuthProvider";
import Loading from "../../shared/Loading/Loading";


const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContex);
    const location = useLocation();
    // console.log(loading)
    // console.log(user)

    if (loading) {
        return <Loading></Loading>
    }

    if (!user) {
        return <Navigate to='/login' state={{ from: location }} replace></Navigate>
    }

    return children;
};

export default PrivateRoute;