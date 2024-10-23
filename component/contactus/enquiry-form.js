import Image from 'next/image';
import React, { useState } from 'react';

export default function EnquiryForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message:''
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

const handleSubmit = (e)=>{
e.preventDefault()
setFormData({
    name: '',
    phone: '',
    email: '',
    service: '',
    message:''
})
console.log("Data",formData)
}

  return (
    <>
      <section className="container mt40 mb-5">
      <div className='df fac fjc gap32 mgap0 tfdc'>
        <div className=''>
            <Image className='br20' style={{width:"100%",height:'auto'}} src={"/assets/images/contact/hijab-contactus.jpg"} width={460} height={300} alt='Contactus-Img' loading='lazy' quality={100}/>
            {/* <Image layout='responsive' className='br20 dn mdb' src={"/assets/images/contact/hijab-contactus.jpg"} width={560} height={340} alt='Contactus-Img' loading='lazy' quality={100}/> */}
        </div>
        <form className='mt20 mmt32'onSubmit={handleSubmit} >

            <h6 className='fs-24 mfs-19 fwb'>Your Details</h6>
            <p className='fs-19 mfs-16 dim-clr pdt10'>Let us know how to get back to you</p>

          <div className="df mfdc gap20 mgap0">
            <div className="input-container">
              <input
                type="text"
                name="name"
                value={formData.name}
                className={`input ${formData.name ? 'input--filled' : ''}`}
                onChange={handleChange}
              required/>
              <label className={`label ${formData.name ? 'label--filled' : ''}`}>
                Enter Your Name
              </label>
            </div>
            <div className="input-container">
              <input
                type="text"
                name="phone"
                value={formData.phone}
                className={`input ${formData.phone ? 'input--filled' : ''}`}
                onChange={handleChange}
                required/>
              <label className={`label ${formData.phone ? 'label--filled' : ''}`}>
                Mobile Number
              </label>
            </div>
          </div>
          <div className="df mfdc gap20 mgap0">
            <div className="input-container">
              <input
                type="email"
                name="email"
                value={formData.email}
                className={`input ${formData.email ? 'input--filled' : ''}`}
                onChange={handleChange}
              />
              <label className={`label ${formData.email ? 'label--filled' : ''}`}>
                Email Address
              </label>
            </div>
            <div className="input-container">
              <select
                name="service"
                value={formData.service}
                className={`input ${formData.service ? 'input--filled' : ''}`}
                onChange={handleChange}
                required >
                <option  value="" disabled>Select Service</option>
                <option value="Service1">Service 1</option>
                <option value="Service2">Service 2</option>
                <option value="Service3">Service 3</option>
              </select>
              <label className={`label ${formData.service ? 'label--filled' : 'dn'}`}>
                Services
              </label>
            </div>
          </div>
          <div className="input-container">
            <textarea
              className="text-box"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Enter your message here"
            ></textarea>
          </div>
          <div className=''>
            <button  className='submit-btn fs-19 pd10'>Submit</button>
          </div>
        </form>
        </div>
      </section>

      <style jsx>
        {`
         .submit-btn{
         width: 100%;
         background: lightgreen;
         border-radius: 10px;
         border: none;

         }
          .input-container {
            position: relative;
            margin: 10px 0px;
          }

          .input {
            width: 300px;
            padding: 10px;
            font-size: 16px;
            border: 1px solid #ccc;
            border-radius: 4px;
            outline: none;
            transition: border-color 0.2s;
            appearance: none;
            background: #fff;
          }

          .label {
            position: absolute;
            top: 60%;
            left: 10px;
            font-size: 16px;
            color: #666;
            pointer-events: none;
            transition: all 0.2s ease;
            transform: translateY(-80%);
          }

          /* Label moves to the top when input is filled */
          .input--filled + .label,
          .label--filled {
            top: 5px;
            font-size: 12px;
            color: #27ae60;
            background: #ffffff;
            padding: 0 4px;
          }

          /* Specific style for select dropdown */
          select.input {
            padding: 10px;
          }

          /* Full-width textarea styling */
          .text-box {
            width: 620px;
            padding: 10px;
            font-size: 16px;
            border: 1px solid #ccc;
            border-radius: 4px;
            resize: vertical;
          }
        @media only screen and (max-width: 1023px){
            .text-box {
            width: 290px !important;
            padding: 10px;
            font-size: 16px;
            border: 1px solid #ccc;
            border-radius: 4px;
            resize: vertical;
          }
         .submit-btn{
         width: 290px;
         background: lightgreen;
         border-radius: 10px;
         border: none;

         }
        .input {
            width: 290px;
            padding: 10px;
            font-size: 16px;
            border: 1px solid #ccc;
            border-radius: 4px;
            outline: none;
            transition: border-color 0.2s;
            appearance: none;
            background: #fff;
          }

        }
           @media only screen and (max-width: 1250px){
       .tfdc{
         display: flex;
         flex-wrap: wrap;
         align-items: center;
         justify-content: center;
         }
           } 

        `}
      </style>
    </>
  );
}
