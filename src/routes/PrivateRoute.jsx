import { Navigate } from 'react-router-dom';

export function PrivateRoute({ children }) {
  const signed = true;

  return signed ? children : <Navigate to="/" />;
}
