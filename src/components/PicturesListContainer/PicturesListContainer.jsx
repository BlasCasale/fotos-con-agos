import React from 'react';
import useGetAllPictures from '../../hooks/useGetAllPictures';
import PicturesList from '../PicturesList/PicturesList';
import './PicturesListContainer.css';
import Dedication from '../Dedication/Dedication';

const PicturesListContainer = () => {
  const photos = useGetAllPictures();

  const { bosque, casa, otras, parque, privadas, rio } = photos;

  return (
    <main>
      <h2>Una colección de fotitos nuestras</h2>
      <section>
        <div>
          {photos && <PicturesList photos={bosque} />}
        </div>

        <div>
          {photos && <PicturesList photos={casa} />}
        </div>

        <div>
          {photos && <PicturesList photos={otras} />}
        </div>

        <div>
          {photos && <PicturesList photos={parque} />}
        </div>

        <div>
          {photos && <PicturesList photos={privadas} />}
        </div>

        <div>
          {photos && <PicturesList photos={rio} />}
        </div>
      </section>

      <Dedication/>
    </main>
  );
};

export default PicturesListContainer;
// {
// bosque && bosque.map(pic => {
//   return (
//     <li key={pic.id}>
//       <img src={`./public/${pic.path}`} />
//     </li>);
// })
// }