import { useEffect } from 'react'
import Head from 'next/head'
import Rellax from 'rellax'

export default function Home() {

   useEffect(()=>{
      
      new Rellax('.rellax', {
         speed: -2,
         // center: true,
      });

   }, []);

  return (
    <div>
      <Head>
         <title>Chivas con el covid</title>
         <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="position-relative">
         <nav className="main-nav">
            <img className="nav-logo" src="/media/chivas-con-el-covid.svg" alt=""/>
            <a href="#!" className="button pink">PDF</a>
         </nav>
         <div className="lefttitle">
            <span className="outline">NO. 001</span> CÁMARA DE COMERCIO E INDUSTRIA DE TEGUCIGALPA
         </div>
         <div className="banner">
            <img className="germen1 rellax" data-rellax-speed="-3" data-rellax-percentage="0.2" src="/media/germen.svg" alt=""/>
            <img className="germen2 rellax" data-rellax-speed="-7" data-rellax-percentage="0.1" src="/media/germen.svg" alt=""/>
            <img className="germen3 rellax" data-rellax-speed="-5" data-rellax-percentage="0.9" src="/media/germen.svg" alt=""/>
            <div className="logo-wrapper">
               <img className="germen4 rellax" data-rellax-speed="-5" data-rellax-percentage="1" src="/media/germen.svg" alt=""/>
               <img className="germen" src="/media/germen-vivo.svg" alt=""/>
               <img className="logo w-100" src="/media/chivas-con-el-covid-grande.svg" alt=""/>
               <img className="germen-inferior" src="/media/germen-vivo.svg" alt=""/>
            </div>
            <div className="container">
               <div className="infoblocks">
                  <div className="infoblock yellow">
                     <span>TODOS PONGAMONOS</span>
                     <span className="outline chivas">CHIVAS</span>
                  </div>
                  <div className="infoblock">
                     <span>TODO EL MERCADO ESTÁ</span>
                     <span className="outline chivas">CHIVAS</span>
                  </div>
                  <div className="infoblock pink">
                     <span>PONÉ</span>
                     <span className="outline chivas">CHIVAS</span>
                     <span>A TUS COLABORADORES</span>
                  </div>
               </div>
            </div>
            <a href="#!" className="downloadbutton">
               <img src="/media/descargar.svg" alt=""/>
            </a>
         </div>
      </div>

      <footer>
         <img src="/media/footer-logos.png" alt=""/>
      </footer>

    </div>
  )
}
