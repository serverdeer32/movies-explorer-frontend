import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ element, loggedIn }) => {
  return (
    loggedIn ? element : <Navigate to="/" replace />
  )
}

export default ProtectedRoute; 