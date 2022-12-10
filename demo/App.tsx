import { createBrowserRouter, RouterProvider, Link } from 'react-router-dom';
import { KeepAliveProvider, useOutlet } from '../src';

import PageA from './routes/PageA';
import PageB from './routes/PageB';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <PageA />,
      },
      {
        path: 'page-b',
        element: <PageB />,
      },
    ],
  },
]);

function Layout() {
  const outlet = useOutlet();

  return (
    <div>
      <ul>
        <li>
          <Link to="/">page a</Link>
        </li>
        <li>
          <Link to="/page-b">page b</Link>
        </li>
      </ul>

      <div>{outlet}</div>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <h1>React Keep Alive</h1>

      <KeepAliveProvider keepAlive={[/./]}>
        <RouterProvider router={router} />
      </KeepAliveProvider>
    </div>
  );
}

export default App;
