import React, { FC, Fragment } from 'react';

export const Layout: FC = (props) => {
  console.log({ layout: '2' });
  return (
    <div className="flex flex-col h-screen">
      <div className="h-16 shadow w-full"></div>
      <div className="flex-1">{props.children}</div>
    </div>
  );
};

export default Layout;
