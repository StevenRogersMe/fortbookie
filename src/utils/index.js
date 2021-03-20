import { matchPath } from 'react-router-dom';

export const isMathcingPath = (location, path, exact = false) => {
  const match = matchPath(location.pathname, {
    path,
    exact
  });
  return match ? 'is-active' : '';
};
