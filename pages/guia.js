import { useEffect, useState } from 'react'
import React from 'react'
import { useRouter } from 'next/router'
import Footer from '../components/footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { Document, Page, pdfjs } from 'react-pdf'
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`

export default function Guia() {

   const router = useRouter();

   const [numPages, setNumPages] = useState(1);
   const [page, setPage] = useState(1);

   const onSuccess = (pdf)=>{
      setNumPages(pdf._transport._numPages);
   }

   const nextPage = ()=>{
      setPage(page + 1);
   }

   const prevPage = ()=>{
      setPage(page - 1);
   }

   const returnToHome = ()=>{
      router.push('/');
   }

   return (
      <>
         <nav className="main-nav">
            <img className="nav-logo" src="/media/chivas-con-el-covid.svg" alt="" data-aos="fade-left" onClick={returnToHome}/>
            <a href="/guia.pdf" className="button pink" target="_blank" data-aos="fade-right" download>PDF</a>
         </nav>
         <div className="container">
            <div className="w-100 d-flex justify-content-center flex-column align-items-center position-relative my-5">
               <h3 className="mb-3">Guía para empleadores del sector del comercio</h3>
               <Document file="/guia.pdf" width={1000} className="pdf">
                  <Page pageNumber={page} onLoadSuccess={onSuccess}/>
                  <div className="pdfarrows">
                     <div className="mt-3 d-flex w-100 flex-direction-column justify-content-center align-items-center">
                        <ul class="pagination pagination-lg">
                           <li class="page-item">
                              <a class="page-link" href="#!" onClick={prevPage}><FontAwesomeIcon icon={faChevronLeft}/></a>
                           </li>
                           <li class="page-item"><a class="page-link" href="#!">{page}</a></li>
                           <li class="page-item">
                              <a class="page-link" href="#!" onClick={nextPage}><FontAwesomeIcon icon={faChevronRight}/></a>
                           </li>
                        </ul>
                     </div>
                  </div>
               </Document>
            </div>
         </div>
         <Footer/>
      </>
   )
}
