import React from 'react';

const Home = () => {
  return (
    <div>
      <div className='relative'>
        {/* Background Image */}
        <img
          src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrrD5fr9W7KMDphFQtJO5uQ2XtFJ60DEPK3w&s'
          alt='Construction Background'
          className='w-full h-[500px] object-cover'
        />

        {/* Main Heading */}
        <p className='absolute bottom-40 sm:bottom-36 left-5 sm:left-20 text-3xl sm:text-5xl md:text-6xl text-purple-700 text-left sm:text-center font-semibold'>
          This is <span className='text-orange-500 font-bold'>Construction</span><br className='hidden sm:block' /> Site Template
        </p>

        {/* Truck Image */}
        <img
          src='/Truck.png'
          alt='Truck'
          className='absolute bottom-0 right-4 sm:right-10 w-32 sm:w-52 h-auto'
        />
      </div>
    </div>
  );
};

export default Home;
