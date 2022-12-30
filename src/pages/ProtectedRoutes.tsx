import { Navigate, Outlet } from "react-router-dom";
import { useAppSelector } from "../app/hooks";
import { selectUserToken } from "../features/authSlice";
const ProtectedRoutes = () => {
  const toke = useAppSelector(selectUserToken);
  return toke ? <Outlet /> : <Navigate to='/auth' replace />;
};

export default ProtectedRoutes;
