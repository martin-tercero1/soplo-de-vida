import { useState, useEffect } from 'react';

const useAnimals = () => {
  const [animals, setAnimals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAnimals = async () => {
      try {
        const response = await fetch('/api/pets');
        if (!response.ok) {
          throw new Error('Error en la conexion a la API de mascotas');
        }
        const data = await response.json();
        setAnimals(data.data.pets);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchAnimals();
  }, []);

  return { animals, loading, error };
};

export default useAnimals;