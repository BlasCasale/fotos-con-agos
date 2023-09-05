import React from 'react';
import { useState } from 'react';
import './PicturesList.css';
import ArrowLeft from '../ArrowLeft/ArrowLeft';
import ArrowRigth from '../ArrowRigth/ArrowRigth';

const PicturesList = ({ photos }) => {
  const [index, setIndex] = useState(0);
  const length = photos && photos.length - 1;

  const handlePrev = () => index == 0 ? setIndex(length) : setIndex(index - 1);
  const handleNext = () => index == length ? setIndex(0) : setIndex(index + 1);

  return (
    <>
        <ArrowLeft handlePrev={handlePrev}/>
        {photos && (<img src={`./public/${photos[index]}`} alt="Amor" className='img' />)}
        <ArrowRigth handleNext={handleNext}/>
    </>
  );
};

export default PicturesList;


// {
//   photos && photos.map((pic) => {
//     return (
//       <Pictures key={pic.id} {...pic} />
//     )
//   })
// }