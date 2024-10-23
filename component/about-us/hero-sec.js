import { Poppins, Quicksand } from 'next/font/google';
import Image from 'next/image';
import React, { Component } from 'react'
import { motion } from 'framer-motion';
import Link from 'next/link';
import WordChanging from '../word-changing';
import EnquiryForm from '../popup-form';
import { MdOutlineArrowForward } from 'react-icons/md';
const popins = Poppins({weight:"500",subsets:['latin']})
const extrapopins = Poppins({weight:"600", subsets:['latin']});
const quickSand = Quicksand({weight:"400",subsets:['latin']})
class HeroSec extends Component {
  constructor(props){
    super(props);
    this.state={
        showForm: false,
    };
    this.formRef = React.createRef();
} 
handleFormPopup=()=>{
  this.setState({showForm:true});
  document.addEventListener('mousedown',this.handleClickOutside);
  }
  
  handleCloseForm =()=>{
      this.setState({showForm:false})
      document.removeEventListener('mousedown', this.handleClickOutside);
  }
  
  handleClickOutside=(event)=>{
      if(this.formRef.current && !this.formRef.current.contains(event.target)){
          this.handleCloseForm();
      }
  }
  render() {
    const { courseName } = this.props;



  
    const BoxContainerData = [
        {
        icon:"/master-training/academy.svg",
        title:"Learn",
        cnt:"Choose the right academy"
       },
       {
        icon:"/master-training/improve.svg",
        title:"Improve",
        cnt:"Practice as much as possible"
       },
       {
        icon:"/master-training/prepare.svg",
        title:"Prepare",
        cnt:"Acquire the interview Skills"
       },
    ]

  return (
    <>
    <section className='bg-img mt70'>
        <div className='container'>
            <div className='df fjsb fac fw mfdc tfdc '>
                 
                 {/* content Div */}

                <div className='box-container pd20'>
              <div className='df  fdc gap20 mgap5 mbdf'>
                {BoxContainerData.map((items,index)=>{
                    return(
                 <div className='df gap16 mpdt10' key={index}>
                    <Image src={items.icon} width={24} height={23} alt='Learn-Icon' loading='lazy'/>
                    <div className=''>
                        <p className={`fs-28 mfs-14 ${extrapopins.className}`}>{items.title}</p>
                        <p className={`fs-16 mfs-12 dim-clr pdt8 ${quickSand.className}`}>{items.cnt}</p>
                    </div>

                 </div>
                 )
                })}
              </div>
            </div>
            
            <div className='mpdt40'>
                {/* <h4 className={`fs-45 mfs-24  ${extrapopins.className}`}>Become <span className='ylw-clr'> A proffesional <br/> </span>UI UX Designer</h4> */}
                
                   <h4 className={`fs-33`}>Becom a Website</h4>
                <div className='total-box mt32 pos-r'>
                    <div className='df fjsa mfw'>
                       <div className=''>
                        <p className={`fs-28 mfs-19 tac ${extrapopins.className}`}>500+</p>
                        <p className={`fs-24 mfs-16 pdt20 mpdt10 ${quickSand.className}`}>Hiring Partners</p>
                        </div> 
                        <div className='line'></div>
                        <div className=''>
                        <p className={`fs-28 mfs-19 tac ${extrapopins.className}`}>100%</p>
                        <p className={`fs-24 mfs-16 pdt20 mpdt10 ${quickSand.className}`}>Job Assistance</p>
                        </div> 
                        <div className='line'></div>
                        <div className=''>
                        <p className={`fs-28 mfs-19 tac ${extrapopins.className}`}>3500+</p>
                        <p className={`fs-24 mfs-16 pdt20 mpdt10 ${quickSand.className}`}>Student Placed</p>
                        </div> 
                        
                    </div>
                    <div className={`prem-box pos-a tac cw  mfs-16 ${quickSand.className}`}>Premium Course</div>

                </div>

                <div className='df  mt32 mfw fjs gap20 mfji ' >
                    <div className='df fdc '>
                <div className='df gap20 fac'>
                     <Image  src="/assets/images/tick.svg" width={32} height={32} alt='Tick Icon' loading='lazy'/>
                     <p className={`fs-14 ${popins.className}`}>Industry Based Training</p> 
                 </div> 
                 <div className='df gap20 fac mt32 mmt10'>
                     <Image  src="/assets/images/tick.svg" width={32} height={32} alt='Tick Icon' loading='lazy'/>
                     <p className={`fs-14 ${popins.className}`}>Regular Assessments & Feedback</p> 
                 </div>   
                 </div>

                 <div className='df fdc mmt10'>
                <div className='df gap20 fac'>
                     <Image  src="/assets/images/tick.svg" width={32} height={32} alt='Tick Icon' loading='lazy'/>
                     <p className={`fs-14 ${popins.className}`}>Extra Doubt Clearance Sessions</p> 
                 </div> 
                 <div className='df gap20 fac mt32 mmt10'>
                     <Image  src="/assets/images/tick.svg" width={32} height={32} alt='Tick Icon' loading='lazy'/>
                     <p className={`fs-14 ${popins.className}`}>Resume & Portfolio Guidance</p> 
                 </div>   
                 </div>

                 </div>
                 
                 {/* Button Div */}

                 <div className='mt32 df gap20 fjfe'>

                    <div className='enrl-btn'>
                    <p onClick={this.handleFormPopup} className={` cursor cw fs-18 mfs-16 fwb ${quickSand.className}`}>Get It Now
                       &nbsp;
                       <span className=''>
                      <MdOutlineArrowForward size={34} />
                      </span>
                      </p> 
                      </div>
                 </div>
               
                </div>
            </div>

        </div>
    </section>
    {this.state.showForm && <div ref={this.formRef}><EnquiryForm close={this.handleCloseForm}/></div>}
    <style jsx>
        {`
        .hvz:hover{
        color: #000 !important;
        }
        .box-container{
        background-color: #FFFFFF;
        box-shadow: 0px 2px 8px 3px #00000040;
        border-radius: 10px;
        }
        .prem-box{
        padding: 10px;
        border-radius: 8px;
        background-color: #04AF00;
        width: 225px;
        top: -20%;
        left: 55%;
        font-size: 24px;
        line-height: 27px;
        }
        .bg-img{
            background-image: url('/master-training/prev-page/hero-section/bg-img.webp');
            width:100%;
            height: 100%;
            background-size: cover;
            background-repeat: no-repeat;
            background-position: center;
            background-position: cover;
            background-size: 100% 100%;
            
        }
            .enrl-btn{
            background-color: #D0AB17;
            border-radius: 8px;
            padding: 10px 29px;
            border:1px solid #D0AB17;
             transition: all 0.4s linear;
            }
             .enrl-btn:hover {
             background-color: transparent;
             border: 1px solid #D0AB17;
             color: #e9c751;
             }
              .enrl-btn:hover p,span{
               color: #e9c751;
               
             }
             .demo-btn{
            background-color: transparent;
            border-radius: 8px;
            padding: 10px 29px;
            transition: all 0.4s linear;
            border : 1px solid;
            
            }
            .demo-btn:hover{
            background-color: #FDBB39;
            color: #FFFFFF;
            border: 1px solid #FDBB39;
            }
        .total-box{
        background-color: #FFFFFF;
        box-shadow: 0px 4px 30px 0px #0000004D;
        border-radius: 8px;
        width: 700px;
        padding: 24px 10px 24px 10px;
        }
        .line{
        border-right: 1px solid #000000;
        }
        @media only screen and (max-width: 800px){
        
                .total-box{
        background-color: #FFFFFF;
        box-shadow: 0px 4px 30px 0px #0000004D;
        border-radius: 8px;
        width: 100%;
        padding: 24px 10px 24px 10px;
        }
        
        }
         @media only screen and (max-width: 665px){
         .total-box{
           background-color: #FFFFFF;
        box-shadow: 0px 4px 30px 0px #0000004D;
        border-radius: 8px;
        width: auto;
        padding: 24px 0px 24px 10px;
         }
        .prem-box{
        padding: 5px;
        border-radius: 8px;
        background-color: #04AF00;
        width: 180px;
        top: -20%;
        left: 15%;
        font-size: 19px;
        line-height: 27px;
        }
        }
          @media only screen and (max-width: 400px){
         .total-box{
           background-color: #FFFFFF;
        box-shadow: 0px 4px 30px 0px #0000004D;
        border-radius: 8px;
        width: auto;
        padding: 24px 0px 24px 10px;
        
         }
          .box-container{
        background-color: #FFFFFF;
        box-shadow: 0px 2px 8px 3px #00000040;
        border-radius: 10px;
        width: auto;
       
        }
        .pd20{
        padding: 10px;
        }
        .mbdf{
        flex-direction: column;
        }
        .prem-box{
        padding: 5px;
        border-radius: 8px;
        background-color: #04AF00;
        width: 180px;
        top: -10%;
        left: 20%;
        font-size: 19px;
        line-height: 27px;
        }
        }
           @media only screen and (max-width: 1255px){
          .tfdc{
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          }
               .bg-img{
            background-image: url('/master-training/prev-page/hero-section/bg-img.webp');
            width:100%;
            height: auto;
            background-size: cover;
            background-repeat: no-repeat;
            background-position: center;
            background-position: cover;
            background-size: 100% 100%;
            
        }
        }
        `}
    </style>
    </>
  )
  
  }}export default HeroSec;

