import { Navigate, createBrowserRouter } from 'react-router-dom';

import AdminLayout from '@layout/admin/AdminLayout';
import WorkerLayout from '@layout/worker/WorkerLayout';

import adminRoutes from './routes/admin';
import workerRoutes from './routes/worker';

const router = createBrowserRouter([
  {
    children: [
      { path: '', element: <Navigate to="admin/dashboard" /> },
      {
        path: '/admin',
        element: <AdminLayout />,
        children: adminRoutes,
      },
      {
        path: '/worker',
        element: <WorkerLayout />,
        children: workerRoutes,
      },
    ],
  },
]);

export default router;
