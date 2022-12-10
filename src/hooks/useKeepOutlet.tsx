import { useContext } from 'react';
import { useLocation, useOutlet, matchPath } from 'react-router-dom';
import KeepAliveContext from '../components/Context';
import { isKeepPath } from '../utils';

function useKeepOutlet() {
  const location = useLocation();
  const outlet = useOutlet();
  const { keepAlive, keepElements } = useContext(KeepAliveContext);

  const isKeep = isKeepPath(keepAlive, location.pathname);

  if (isKeep) {
    keepElements.current[location.pathname] = outlet;
  }

  return (
    <>
      {Object.entries(keepElements.current).map(([pathname, element]: any) => (
        <div
          key={pathname}
          hidden={!matchPath(location.pathname, pathname)}
          className="keep-alive-layout"
        >
          {element}
        </div>
      ))}

      <div hidden={isKeep} className="keep-alive-layout-no">
        {!isKeep ? outlet : null}
      </div>
    </>
  );
}

export default useKeepOutlet;
