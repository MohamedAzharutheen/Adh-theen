import Image from 'next/image';
import React from 'react'
import { IoCloseSharp } from "react-icons/io5";
import { FiPhoneCall } from "react-icons/fi";
export default function PackageCard({closeCard}) {
  return (
    <>
    <section className='container'>
        <div className='popup-card'>
        <div className='package-card pos-r'>
          <div className='df fjfe icon-bg pd10 cursor' onClick={closeCard}>
             <div className="icon-pos">
             <IoCloseSharp className="fwb" size={24} color='#000'/>
             </div>
             </div>
            <div className='head pdtb5'>
                <Image src={"/assets/images/logos/logo.svg"} width={80} height={80} alt='Logo' loading='lazy' quality={100}/>
            </div>
            <div className='insd-card pdtb20'>
             <h4 className='fs-24 fwb mb20 cw'>Umrah Packages</h4>
             <p className='fs-16  cw mb20'>Departure In October</p>
             <p className='fs-19 fwb  pdt20' style={{color:'#fcc305'}}> ₹ 78,000/-</p>
             </div>
             <div className='footer df fac fdc fjc pd10'>
               <p className='fs-16 '>ContactUs On Whatsapp</p> 
               <div className='df gap8 pd10 fac'>
             <FiPhoneCall />
                <p className='fs-14 fwb'>
                    +91 81242 89972
                </p>
                </div>
             </div>
        </div>
        </div>
    </section>

    <style jsx>{`
         .popup-card{
              position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.4);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
        }
        .icon-bg{
        background-color: #006C35;
        border-radius: 10px 10px 0px 0px;
        }
        .icon-pos{
        background: #fff;
        border-radius: 10px;
        position: absolute;
        padding: 5px;
        top: -15px;
        left: 95%;
        }
        .head{
        background-color: #ffffff;
        width: 100%;

        }
        .package-card {
         
            width: 360px;   
            border-radius: 12px;
            background-color: white;
            box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
            transition: transform 0.3s ease, box-shadow 0.3s ease;
            text-align: center;
        }
        .insd-card{
        background-color: #006C35;
        // background-image: url('/assets/images/packages/package-card-bg.png');
        width: 100%;
        
        }
        .package-card:hover {
            transform: translateY(-10px);
            box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
        }
        
        .card-subtitle {
            color: #ffffff;
            text-transform: uppercase;
            letter-spacing: 1px;
            margin-bottom: 10px;
        }

                @media only screen and (max-width: 420px){
         .package-card {
            width: auto;   
            border-radius: 12px;
            background-color: white;
            box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
            transition: transform 0.3s ease, box-shadow 0.3s ease;
            text-align: center;
        }
        }
        @media (max-width: 768px) {

        }

            
    `}</style>
    </>
  )
}
