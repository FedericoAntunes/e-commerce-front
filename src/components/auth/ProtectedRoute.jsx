import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = ({ redirectPath }) => {
  const sessionStatus = useSelector((state) => {
    return state.session.status;
  });

  if (!sessionStatus) {
    return <Navigate to={redirectPath} replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
