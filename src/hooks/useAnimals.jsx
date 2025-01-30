import { useState, useEffect } from 'react';

const API_BASE = process.env.NEXT_PUBLIC_API_BASE;

const useAnimals = (limit = 10, page = 1) => {
  const [animals, setAnimals] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAnimals = async () => {
      try {
        const response = await fetch(`${API_BASE}/api/pets?limit=${limit}&page=${page}`);
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
  }, [limit, page]);

  return { animals, loading, error };
};

export default useAnimals;