import { useEffect } from 'react'
import Head from 'next/head'
import Rellax from 'rellax'
import AOS from "aos"

import "aos/dist/aos.css";

export default function Home() {

   useEffect(()=>{
      
      new Rellax('.rellax', {
         speed: -2,
         // center: true,
      });
      
      AOS.init();

   }, []);

   var openPdf = ()=>{
      window.open('/guia.pdf', '_blank').focus();
   }

  return (
    <div>
      <Head>
         <title>Chivas con el covid</title>
         <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="position-relative">
         <nav className="main-nav">
            <img className="nav-logo" src="/media/chivas-con-el-covid.svg" alt="" data-aos="fade-left"/>
            <a href="/guia.pdf" className="button pink" target="_blank" data-aos="fade-right">PDF</a>
         </nav>
         <div className="lefttitle">
            <span data-aos="fade-left"><span className="outline">NO. 001</span> CÁMARA DE COMERCIO E INDUSTRIA DE TEGUCIGALPA</span>
         </div>
         <div className="banner">
            <img className="germen1 rellax" data-rellax-speed="-3" data-rellax-percentage="0.2" src="/media/germen.svg" alt=""/>
            <img className="germen2 rellax" data-rellax-speed="-7" data-rellax-percentage="0.1" src="/media/germen.svg" alt=""/>
            <img className="germen3 rellax" data-rellax-speed="-5" data-rellax-percentage="0.9" src="/media/germen.svg" alt=""/>
            <div className="logo-wrapper" data-aos="fade-left">
               <img className="germen4 rellax" data-rellax-speed="-5" data-rellax-percentage="1" src="/media/germen.svg" alt=""/>
               <img className="germen" src="/media/germen-vivo.svg" alt=""/>
               <img className="logo w-100" src="/media/chivas-con-el-covid-grande.svg" alt=""/>
               <img className="germen-inferior" src="/media/germen-vivo.svg" alt=""/>
            </div>
            <div className="container">
               <div className="infoblocks">
                  <div className="infoblock yellow" data-aos="fade-up" data-aos-delay="200" onClick={()=>{openPdf()}}>
                     <span>TODOS PONGAMONOS</span>
                     <span className="outline chivas">CHIVAS</span>
                  </div>
                  <div className="infoblock" data-aos="fade-up" data-aos-delay="400" onClick={()=>{openPdf()}}>
                     <span>TODO EL MERCADO ESTÁ</span>
                     <span className="outline chivas">CHIVAS</span>
                  </div>
                  <div className="infoblock pink" data-aos="fade-up" data-aos-delay="600" onClick={()=>{openPdf()}}>
                     <span>PONÉ</span>
                     <span className="outline chivas">CHIVAS</span>
                     <span>A TUS COLABORADORES</span>
                  </div>
               </div>
            </div>
            <a href="/guia.pdf" target="_blank" className="downloadbutton" data-aos="fade-up">
               <img src="/media/descargar.svg" alt=""/>
            </a>
         </div>
      </div>

      <footer>
         <img src="/media/footer-logos.png" alt="" data-aos="fade-up"/>
      </footer>

    </div>
  )
}
