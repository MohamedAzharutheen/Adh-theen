import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import SidebarMenu from './mobile-nav';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <section className='header'>
        <div className='container-fluid'>
          <div className='df fac fjse fjc mdn'>
          <Link className='' href={"/"}><p className='fs-16 fwb'>Home</p></Link>
          <Link href={"/package"}><p className='fs-16 fwb'>Packages</p></Link>
            <Link href={"/gallery"}><p className='fs-16 fwb'>Gallery</p></Link>

            <div className=''>
              <Image className='logo-scale' src={"/assets/images/logos/logo.svg"} width={80} height={80} alt='Logo' loading='lazy' quality={100} />
            </div>
            <Link href={"/service"}><p className='fs-16 fwb'>Services</p></Link>
            <Link href={"/guidenece"}><p className='fs-16 fwb'>Guidence</p></Link>
            <Link href={"/contact"}><p className='fs-16 fwb btn-cnt cw'>Contact Us</p></Link>
          </div>

          <div className='mdf fjsb fac dn mdb'>
            <div className=''>
              <Image src={"/assets/images/logos/logo.svg"} width={60} height={60} alt='Logo' loading='lazy' quality={100} />
            </div>

            {/* Burger icon for mobile */}
            <div className="burger-menu" onClick={toggleMenu}>
              <span></span>
              <span></span>
              <span></span>
            </div>

          </div>
        </div>

        {/* Off-canvas sidebar */}
        {/* <motion.div
          className='side-bar'
          initial={{ x: '-100%' }}
          animate={{ x: isMenuOpen ? 0 : '-100%' }}
          transition={{ type: 'tween', duration: 0.3 }}
        >
         {isMenuOpen &&( <div className={` df fdc gap8 dn mdb`}>
            <Link href={"/"}><p className='fs-19 '>Home</p></Link>
            <Link href={"/"}><p className='fs-19 '>Packages</p></Link>
            <Link href={"/gallery"}><p className='fs-19 '>Gallery</p></Link>

            <Link href={"/"}><p className='fs-19 '>About Us</p></Link>
            <Link href={"/service"}><p className='fs-19 '>Services</p></Link>
            <Link href={"/"}><p className='fs-19 '>Packages</p></Link>
          </div>
          )}
        </motion.div> */}
      </section>


    {isMenuOpen &&
       <SidebarMenu toggleMenu={toggleMenu} isMenuOpen={isMenuOpen}/>
}
       
      <style jsx>{`
        .header {
          background: linear-gradient(90deg, #e9c751 0%, #ffffff 100%);
          border-bottom: 1px solid #ffffff;
          width: 100%;
        }
             p {
              position: relative;
            }

            p::before {
              content: '';
              position: absolute;
              bottom: -8px;
              left: 0;
              width: 0;
              height: 3px;
              background-color: #006c35;
              transition: all 0.5s;
            }

            p:hover::before {
              width: 100%;
            }

            .active::before {
              width: 100%;
            }
            .active{
            color: #006c35;
            }

            p:hover {
              color: #006c35;
              transition: 0.3s;
            }
            .active::before {
              width: 100%;
            }

        .btn-cnt{
        background: #006C35;
        padding: 10px 20px;
        border-radius: 8px;
        transition: all 0.3s 
        }
        @media only screen and (max-width: 1023px) {
                .header {
          background: linear-gradient(90deg, #e9c751 0%, #ffffff 100%);
          border-bottom: 1px solid #ffffff;
          width: 100%;
          padding: 5px;
        }
          .burger-menu {
            cursor: pointer;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
        width: 40px;
            height: 33px;
        z-index: 100;
        border: 1px solid #D0AB17;
        padding: 5px;
        border-radius: 5px;
          }

          .burger-menu span {
            height: 3px;
            width: 100%;
            background: #D0AB17;
            border-radius: 10px;
          }

          .side-bar {
            position: fixed;
            top: 0;
            left: 0;
            width: 270px;
            height: 100%;
            background: #ffffff;
            box-shadow: 2px 0 5px rgba(0, 0, 0, 0.2);
            z-index: 1000;
            padding: 20px;
          }
        }

      `}</style>
    </>
  );
}
