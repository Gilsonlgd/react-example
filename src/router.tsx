import { Navigate, createBrowserRouter } from 'react-router-dom';

import AdminLayout from '@layout/admin/AdminLayout';
/* import WorkerLayout from '@layout/worker/WorkerLayout'; */

import adminRoutes from './routes/admin';
/* import workerRoutes from './routes/worker'; */

const router = createBrowserRouter([
  {
    children: [
      /* Ignore esta linha */
      { path: '', element: <Navigate to="admin/dashboard" /> },
      {
        path: '/admin',
        element: <AdminLayout />,
        children: adminRoutes,
      },
      /* Adicione aqui o workerRoutes, seguindo o padrão utilizado para adminRoutes. */
    ],
  },
]);

export default router;
