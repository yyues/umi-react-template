import React, { FC, Fragment } from 'react';

export const Layout: FC = (props) => {
  console.log({ layout: '2' });
  return (
    <Fragment>
      <div className="header h-14 shadow w-full"></div>
      <div className="content">{props.children}</div>
    </Fragment>
  );
};

export default Layout;
