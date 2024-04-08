
import React from 'react';
import HeaderProvider from './HeaderProvider';
import FooterProvider from './FooterProvider';

function LayoutProvider ({children}) {
  return (
    <>
    <HeaderProvider/>
    <div>{children}</div>
    {/* <FooterProvider/> */}
    </>
  );
}

export default LayoutProvider;