import * as React from 'react';
import { useLocation } from 'react-router-dom';

interface Props {
}

export default function ScrollToTop(props: Props) {

  const location = useLocation();
  React.useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  
  return <></>;
}