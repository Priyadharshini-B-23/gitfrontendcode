
import React from 'react';
import LayoutProvider from '../../components/Layouts/LayoutProvider';
import SectionProvider1 from './SectionProvider1';
import "../../styles/HomeStyleProvider.css";
import SectionProvider2 from './SectionProvider2';
import SectionProvider3 from './SectionProvider3';
import SectionProvider4 from './SectionProvider4';

function HomeProvider () {
  return (
    <>
     <LayoutProvider>
     <SectionProvider1/>
      <SectionProvider2/>
       <SectionProvider4/>
     </LayoutProvider>
    </>
  )
}

export default HomeProvider