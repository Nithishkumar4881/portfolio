import {Link} from 'react-router-dom';
import { useState, useEffect } from 'react';
import { HomeIcon, PhoneIcon, EnvelopeIcon} from '@heroicons/react/24/solid'

export const Contact = () => {
  const [msg, setMsg] = useState(false);
  const [emsg, seteMsg] = useState(false);
 const [formData, setFormData] = useState({
    
    email: '',
    subject: '',
    message: ''
  });
  const [info, setInfo] = useState('');
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  const handleSubmit = (e) => {
  e.preventDefault();
    // Validate form data
    if (formData.email === '' || formData.subject === '' || formData.message === '') {
      seteMsg(true);
      setTimeout(() => {
        seteMsg(false);
      }, 3000);

      return; 
    }
  fetch('https://portfolio-back-rbhr.onrender.com/mailer', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
        setInfo(data);
    }).catch((error) => {
        console.log('Error:', error)})

    setFormData({
        
        email: '',
        subject: '',
        message: ''
      });

      setMsg(true);
      setTimeout(() => {
        setMsg(false);
      }, 3000);



  };

  return (
    <>
    <h1 className='text-4xl font-bold text-center mt-3'>Contact <span className='text-yellow-600'>Me</span></h1>

    <div className="flex flex-col items-center justify-center">
      <form className='flex flex-col items-center justify-center gap-3 p-5'>
        
        <input onChange={(e)=>handleChange(e)} type="email" name='email' value={formData.email} placeholder='Enter your email' className='border-[1px] border-sky-500 rounded-md p-2 w-[300px] md:w-[500px]'/>
        <input onChange={(e)=>handleChange(e)} type="text" name='subject' value={formData.subject} placeholder='Enter your subject' className='border-[1px] border-sky-500 rounded-md p-2 w-[300px] md:w-[500px]'/>
        <textarea onChange={(e)=>handleChange(e)} name="message" value={formData.message} placeholder='Enter your message' className='border-[1px] border-sky-500 rounded-md p-2 w-[300px] md:w-[500px] h-[200px]'></textarea>
        <button onClick={(e)=>handleSubmit(e)} className='bg-yellow-600 text-white px-4 py-2 rounded-md hover:bg-yellow-700 duration-200'>Send</button>
      </form>
      {msg && <p className='text-white bg-green-800 p-3 rounded-sm absolute top-25'>Message sent !</p>}
      {emsg && <p className='text-white bg-red-700 p-3 rounded-sm absolute top-25'>Fill the all fields !</p>}
    
      
      <div className='flex flex-col md:flex-row items-center justify-center gap-3'>
      <div className='flex flex-row '><PhoneIcon className='size-8 text-sky-500' /><p className='text-xl px-2'>+91 9047544881</p></div>
      <div className='flex flex-row'><EnvelopeIcon className='size-8 text-sky-500' /><p className='text-xl px-2'>nithisk72@gmail.com</p>
      </div>
      </div>
      

    </div>


    <Link to="/" className='text-xl font-light rounded-full bg-yellow-600 px-3 py-3 fixed top-[85%] right-0'><HomeIcon className=' text-white size-8'/></Link>

    </>
  )
}

export default Contact;