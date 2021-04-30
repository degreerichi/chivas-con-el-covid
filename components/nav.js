import React from 'react'
import { useRouter } from 'next/router'

export default function Nav() {

   const router = useRouter();

   const returnToHome = ()=>{
      router.push('/');
   }
   
   return (
      <nav className="main-nav">
         <img className="nav-logo" src="/media/chivas-con-el-covid.svg" alt="" data-aos="fade-left" onClick={returnToHome}/>
         <a href="/guia.pdf" className="button pink" target="_blank" data-aos="fade-right" download>PDF</a>
      </nav>
   )
}
