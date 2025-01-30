"use client"
import { useState, useEffect } from 'react';

const API_BASE = process.env.NEXT_PUBLIC_API_BASE;

const useAnimal = (id) => {
  const [animal, setAnimal] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAnimal = async () => {
      try {
        const response = await fetch(`${API_BASE}/api/pets/${id}`);
        if (!response.ok) {
          throw new Error('Error en la conexion a la API de mascotas');
        }
        const data = await response.json();
        console.log(data);
        setAnimal(data.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchAnimal();
  }, [id]);

  return { animal, loading, error };
};

export default useAnimal;