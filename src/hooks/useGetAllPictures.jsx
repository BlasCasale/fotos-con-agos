import { useState, useEffect } from 'react';
import pictures from '../pictures';

const useGetAllPictures = () => {
    const [photos, setPhotos] = useState({});

    useEffect(() => {
        setPhotos(pictures);
    }, []);

    return photos;
};

export default useGetAllPictures;