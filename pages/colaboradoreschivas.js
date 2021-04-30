import React, { useEffect } from 'react'
import Nav from '../components/nav'
import { SRLWrapper } from "simple-react-lightbox"
import Footer from '../components/footer'
import Rellax from 'rellax'

export default function Colaboradoreschivas() {

   useEffect(()=>{
      
      new Rellax('.rellax', {
         speed: -2,
         // center: true,
      });

   }, []);

   return (
      <>
         <img className="germen1 rellax" data-rellax-speed="-3" data-rellax-percentage="0.2" src="/media/germen.svg" alt=""/>
         <img className="germen2 rellax" data-rellax-speed="-7" data-rellax-percentage="0.1" src="/media/germen.svg" alt=""/>
         <img className="germen3 rellax" data-rellax-speed="-5" data-rellax-percentage="0.9" src="/media/germen.svg" alt=""/>
         <Nav/>
         <div className="container mt-4 w-100 d-flex flex-column align-items-center justify-content-center">
            <SRLWrapper className="">
               <img className="leimage" src="/03.jpg" alt=""/>
            </SRLWrapper>
         </div>
         <Footer/>
      </>
   )
}
