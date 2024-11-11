import { createBrowserRouter } from 'react-router-dom';

/**
 * import PublicLayout from '@layout/public/PublicLayout';
 * import publicRoutes from './routes/public';
 */

const router = createBrowserRouter([
  {
    children: [
      /* {
        path: '/',
        element: <PublicLayout />,
        children: publicRoutes,
      }, */
    ],
  },
]);

export default router;
