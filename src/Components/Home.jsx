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
        <p className='text-6xl text-purple-700 text-center absolute bottom-50 left-20'>This is <span className='text-orange-500 font-bold'> Construction </span> Site<br/> Template</p>

        {/* Truck Image on Top */}
        <img
          src='/Truck.png'
          alt='Truck'
          className='absolute bottom-0 right-10 w-100 h-100'
        />
      </div>
    </div>
  );
};

export default Home;
