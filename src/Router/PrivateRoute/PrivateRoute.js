import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContex } from "../../context/AuthProvider/AuthProvider";
import Loading from "../../shared/Loading/Loading";


const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContex);
    const location = useLocation();

    if (loading) {
        return <Loading></Loading>
    }

    if (user) {
        return children;
    }
    return <Navigate to='/signin' state={{ from: location }} replace />


};

export default PrivateRoute;