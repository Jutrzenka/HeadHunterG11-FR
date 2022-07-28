import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { config } from '../../../config.env';

export const StudentView = () => {
  const [form, setForm] = useState({ name: '' });

  const { id } = useParams();

  useEffect(() => {
    (async () => {
      const res = await fetch(`${config.apiURL}/student/${id}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': `${config.apiURL}`,
        },
        referrerPolicy: 'no-referrer',
        credentials: 'include',
        mode: 'cors',
      });
      const data = await res.json();

      setForm({ name: data.name });
    })();
  }, []);

  return (
    <>
      <h2>Student</h2>
      <p>Dane studenta: {form.name}</p>
      <p>ID studenta: {id}</p>
    </>
  );
};
