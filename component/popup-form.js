import axios from 'axios';
import React, { useState } from 'react';
import { IoCloseSharp } from 'react-icons/io5';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const   EnquiryForm = ({close}) => {
  const [formData, setFormData] = useState({
    name: '',
    mobileNumber: '',
    email: '',
    packages: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [submissionSuccess, setSubmissionSuccess] = useState(false);
  const [closeForm, setCloseForm] = useState(true);

  const handleInputChange = (field, value) => {

    setFormData((prevData) => ({ ...prevData, [field]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault()
    const { name, mobileNumber, packages } = formData;

    // Validate the form fields
    const validationErrors = {};
    if (!name.trim()) {
      validationErrors.name = 'Name is required';
    }
    if (!mobileNumber.trim()) {
      validationErrors.mobileNumber = 'Mobile Number is required';
    }
    if (!packages.trim()) {
      validationErrors.course = 'Please Select Your Package';
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSubmissionSuccess(false);
      return;
    }
 
    setFormData({
        name: '',
        phone: '',
        email: '',
        service: '',
        message:''
    })
    console.log("Data",formData)
    

      // Reset form data after submission
      setFormData({
        name: '',
        mobileNumber: '',
        email: '',
        packages: '',
        message: '',
      });
      setErrors({});
      toast.success('Your form has been submitted successfully!');

      setTimeout(() => {
        setCloseForm(false);
      }, 6000);

  };

  if (!closeForm) {
    return null; // Hide the form if closeForm is false
  }

  return (
    <>
      <section className='df fjc fac'>
        <div className='form-center '>
          <div className={`form-box`}>
            <div className='form-rad-box'>
              <h6 className={`fs-19 mfs-14 cw `}>Begin Your Spiritual Journey: Hajj Registration Open</h6>
              <div className="icon-pos cursor" onClick={close} >
             <IoCloseSharp className="fwb" size={24} color='#000'/>
             </div>
            </div>
            <div className='df fdc fac mt24 mmt0'>
              <input
                className={`inp-box mt12`}
                type='text'
                placeholder='Name'
                value={formData.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
              />
              {errors.name && <span className="red-clr fs-12 ">{errors.name}</span>}

              <input
                className={`inp-box mt12`}
                type='text'
                placeholder='Course'
                value={formData.course}
                onChange={(e) => handleInputChange('message', e.target.value)}
              />
              {errors.course && <span className="red-clr fs-12 mfs-10 pdt10 mpdt5">{errors.course}</span>}

              <input
                className={`inp-box mt12`}
                type='tel'
                placeholder='Mobile No'
                value={formData.mobileNumber}
                onChange={(e) => handleInputChange('mobileNumber', e.target.value)}
              />
              {errors.mobileNumber && <span className="red-clr fs-12 mfs-10 pdt10 mpdt5">{errors.mobileNumber}</span>}

              <input
                className={`inp-box mt12`}
                type='email'
                placeholder='Email'
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
              />

              <select
                className={`opt-box mt12`}
                value={formData.packages}
                onChange={(e) => handleInputChange('packages', e.target.value)}
              >
                <option className={`opt-value`} >Packages Type</option>
                <option value="online" className={`opt-value`}>Semi Delux</option>
                <option value="offline" className={`opt-value`}>Economy</option>
              </select>

              <div className={`mt20`}>
                <button className={`sub-btn fs-16 cw`} onClick={handleSubmit}> Submit </button>
              </div>
              {submissionSuccess && <div className="success-message fs-19 tac ">Registration successful!</div>}
            </div>
          </div>
        </div>

        <style jsx>{`
          .success-message {
            color: #FFA900;
          }
                    .icon-pos{
        background: #fff;
        border-radius: 10px;
        position: absolute;
        padding: 5px;
        top: -19px;
        left: 76%;
        }
          .form-center {
            width: 500px;
            height: 280px;
            z-index: 1000;
            display: flex;
            flex-direction: column;
            position: fixed;
            top: 27%;
            left: 50%;
            transform: translate(-50%, -50%);
          }
          .form-box {
            width: 400px;
            padding: 0px 0px 20px 0px;
            border-radius: 20px;
            background-color: #FFFFFF;
            box-shadow: 0px 8px 16px 0px #00000040;
          }
          .form-rad-box {
            width: 400px;
            height: 80px;
            border-radius: 20px 20px 0px 0px;
            background-color: #006c35;
            text-align: center;
            padding-top: 15px;
            padding-bottom: 15px;
          }
          .opt-box {
            width: 300px;
            height: 48px;
            border-radius: 8px;
            border: 1px solid #333333;
            color: #333333;
            font-size: 16px;
            line-height: 24px;
            letter-spacing: 0.5px;
            padding: 0px 8px 0px 8px;
          }
          .inp-box {
            width: 295px;
            height: 48px;
            border-radius: 8px;
            border: 1px solid #333333;
            color: #333333;
            font-size: 16px;
            line-height: 24px;
            letter-spacing: 0.5px;
            padding: 0px 8px 0px 8px;
          }
          .sub-btn {
            width: 101px;
            height: 40px;
            border-radius: 12px;
            background-color: #d0ab17;
            border: none;
            cursor: pointer;
          }
          .opt-value {
            width: 295px;
            height: 96px;
          }
            @media only screen and (max-width: 468px) {
                .icon-pos{
        background: #fff;
        border-radius: 10px;
        position: absolute;
        padding: 5px;
        top: -23% !important;
        left: 74% !important;
        }
            }
          @media only screen and (max-width: 1023px) {
            .form-center {
              z-index: 1000;
              display: flex;
              justify-content: center;
              align-items: center;
              flex-direction: column;
              position: fixed;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
            }
      .icon-pos{
        background: #fff;
        border-radius: 10px;
        position: absolute;
        padding: 5px;
        top: -20%;
        left: 70%;
        }
            .form-box {
              width: 290px;
              height: auto;
              padding: 0px 0px 40px 0px;
              border-radius: 25px;
              gap: 0px;
              background-color: #FFFFFF;
              box-shadow: 0px 8px 16px 0px #00000040;
            }
            .form-rad-box {
              width: 290px;
              height: auto;
              border-radius: 25px 25px 0px 0px;
              background-color: #006c35;
              text-align: center;
              padding-top: 15px;
               padding-bottom: 7px;
            }
            .inp-box {
              width: 170px;
              height: 28px;
              border-radius: 4px;
              border: 1px solid #333333;
              color: #333333;
              font-size: 16px;
              line-height: 24px;
              letter-spacing: 0.5px;
              padding: 0px 8px 0px 8px;
            }
            .opt-box {
              width: 170px;
              height: 28px;
              border-radius: 4px;
              border: 1px solid #333333;
              color: #333333;
              font-size: 16px;
              line-height: 24px;
              letter-spacing: 0.5px;
              padding: 0px 8px 0px 8px;
            }
          }
        `}
        </style>
      </section>
      <ToastContainer />
    </>
  );
};

export default EnquiryForm;
