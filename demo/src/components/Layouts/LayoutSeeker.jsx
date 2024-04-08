
import React from 'react';
import HeaderSeeker from './HeaderSeeker';
import FooterSeeker from './FooterSeeker';

function LayoutSeeker ({children}) {
  return (
    <>
    <HeaderSeeker/>
    <div>{children}</div>
    <FooterSeeker/>
    </>
  );
}

export default LayoutSeeker;