import React from 'react';

const StepForAccount = () => {
    return (
        <>

        <div className='mt-15 text-center'>
            <h1 className='text-[40px] font-bold'>Get Started in 3 Steps</h1>
            <p className='text-[13px] text-gray-400'>Start using premium digital tools in minutes, not hours.</p>
        </div>

        <div className='h-[300px]  mt-15 mb-20 flex flex-row space-x-5 items-center justify-center mx-auto'>
            <div className='h-full relative flex flex-col items-center justify-center border border-solid border-amber-300 shadow-2xl
             rounded-2xl space-y-3 p-10'>
               <img src='/assets/user.png' alt='Step 1' className='w-20 h-20 p-2 mb-2 bg-gray-200 rounded-full'/>
                 <h1 className='text-white absolute flex justify-center items-center top-3 right-3 bg-[#4F39F6] rounded-full h-10 w-10 p-4 text-center'>01</h1>
                <h2 className='text-lg font-semibold'>Create an Account</h2>
                <p className='text-sm text-gray-600'>Sign up for a free account to get started.</p>
            </div>

                        <div className='h-full relative flex flex-col items-center justify-center border border-solid border-amber-300 shadow-2xl
             rounded-2xl space-y-3 p-10'>
               <img src='/assets/package.png' alt='Step 1' className='w-20 h-20 p-2 mb-2 bg-gray-200 rounded-full'/>
                 <h1 className='text-white absolute flex justify-center items-center top-3 right-3 bg-[#4F39F6] rounded-full h-10 w-10 p-4 text-center'>02</h1>
                <h2 className='text-lg font-semibold'>Choose Products</h2>
                <p className='text-sm text-gray-600 text-center'>Browse our catalog and select the tools<br></br> that fit your needs.</p>
            </div>

                        <div className='h-full relative flex flex-col items-center justify-center border border-solid border-amber-300 shadow-2xl
             rounded-2xl space-y-3 p-10'>
               <img src='/assets/rocket.png' alt='Step 1' className='w-20 h-20 p-4 mb-2 bg-gray-200 rounded-full'/>
                 <h1 className='text-white absolute flex jus    tify-center items-center top-3 right-3 bg-[#4F39F6] rounded-full h-10 w-10 p-4 text-center'>03</h1>
                <h2 className='text-lg font-semibold'>Start Creating</h2>
                <p className='text-sm text-gray-600 text-center'>Download and start using your premium<br></br> tools immediately.</p>
            </div>
        </div>
        </>



  
    );
};

export default StepForAccount;