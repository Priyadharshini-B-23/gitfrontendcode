
import React from 'react';
import LayoutSeeker from '../../components/Layouts/LayoutSeeker';
import SectionSeeker1 from './SectionSeeker1';
import "../../styles/HomeStyle.css";
import SectionSeeker2 from './SectionSeeker2';
import SectionSeeker3 from './SectionSeeker3';
import SectionSeeker4 from './SectionSeeker4';

function HomeSeeker () {
  return (
    <>
     <LayoutSeeker>
     <SectionSeeker1/>
      <SectionSeeker2/>
       <SectionSeeker4/>
     </LayoutSeeker>
    </>
  )
}

export default HomeSeeker;