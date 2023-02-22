import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { DefaultLayout } from '../components/DefaultLayout';
import { Dashboard } from '../pages/Dashboard';
import { Login } from '../pages/Login';
import { Page404 } from '../pages/Page404';
import { PrivateRoute } from './PrivateRoute';

export function RoutesApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route path="/" element={<Login />} />
          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />
        </Route>
        <Route path="*" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  );
}
