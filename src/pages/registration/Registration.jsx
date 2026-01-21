import React from 'react'
import './registration.css'

const Registration = () => {
  return (
    <>
    <div className="container">
        <div className="main_div flex flex-col justify-center items-center min-h-screen ">
          <a className='py-5 mt-32 px-9 font-nunito bg-brand rounded-[20px] font-semibold text-3xl text-secondary'  href="#">ChatApp</a>
              <h6 className='text-4xl font-nunito font-bold text-primary pt-5 pb-2.75'>Get started with easily register</h6>
              <p className='font-nunito text-[20px] text-primary font-normal'>Free register and you can enjoy it</p>
              <div className='relative mt-18.25 mb-10.5'>
                <input className='text-[34px] font-nunito font-extrabold text-primary pt-6.5 outline-0 pr-64 pb-7 pl-16.5 rounded-xl border-2 border-solid border-primary placeholder:text-primary' type="text" placeholder='saiful151063@gmail.com' />
                <div className="input_text absolute -top-2.5 left-5 bg-secondary px-6">
                  <p  className='font-nunito text-[13px] text-primary font-semibold'>Email Addres</p>
                </div>
              </div>
              <div className='relative mt-18.25 mb-10.5'>
                <input className='text-[34px] font-nunito font-extrabold text-primary pt-6.5 outline-0 pr-64 pb-7 pl-16.5 rounded-xl border-2 border-solid border-primary placeholder:text-primary' type="text" placeholder='Saiful Islam' />
                <div className="input_text absolute -top-2.5 left-5 bg-secondary px-6">
                  <p  className='font-nunito text-[13px] text-primary font-semibold'>Full name</p>
                </div>
              </div>
              <div className='relative mt-18.25 mb-10.5'>
                <input className='text-[34px] font-nunito font-extrabold text-primary pt-6.5 outline-0 pr-64 pb-7 pl-16.5 rounded-xl border-2 border-solid border-primary placeholder:text-primary' type="password" placeholder='......' />
                <div className="input_text absolute -top-2.5 left-5 bg-secondary px-6">
                  <p  className='font-nunito text-[13px] text-primary font-semibold'>Password</p>
                </div>
              </div>
              <a className='py-5 px-52 bg-brand rounded-[86px] mt-12.5 font-nunito text-secondary font-semibold text-[20px]' href="/login">Sign up</a>
        </div>
    </div>
      
    </>
  )
}

export default Registration
