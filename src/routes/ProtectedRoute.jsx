import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../hooks/authentication/useAuth';

const ProtectedRoute = ({ children }) => {
    const token = useAuth(state => state.token);
    const location = useLocation();

    if (!token) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }

    return children;
};

export default ProtectedRoute;
