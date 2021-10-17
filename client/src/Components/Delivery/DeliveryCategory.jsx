import React from 'react';

const DeliverySmCard = ({ title, image }) => {
  return (
    <>
      <div className='lg:hidden bg-white shadow rounded-md w-24 md:w-56'>
        <div className='w-24 h-24'>
          <img
            src={image}
            alt='food'
            className='w-full h-full object-cover rounded-t-md'
          />
        </div>
        <div>
          <h3 className='text-sm my-1 text-center font-light text-black'>
            {title}
          </h3>
        </div>
      </div>
    </>
  );
};
const DeliveryLgCard = ({ image, title }) => {
  return (
    <>
      <div className='hidden lg:block w-64 h-full px-9'>
        <div className='w-full h-48'>
          <img
            src={image}
            alt='food'
            className='w-full h-full object-cover rounded-md'
          />
        </div>
        <div>
          <h3 className='text-xl my-1 font-medium text-black'>{title}</h3>
        </div>
      </div>
    </>
  );
};

const DeliveryCategory = (props) => {
  return (
    <div>
      <DeliveryLgCard {...props} />
      <DeliverySmCard {...props} />
    </div>
  );
};

export default DeliveryCategory;
