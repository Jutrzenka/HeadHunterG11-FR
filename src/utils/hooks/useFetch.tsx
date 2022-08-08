import { useState, useEffect, useRef } from 'react';

export enum HttpMethod {
  GET = 'GET',
  POST = 'POST',
  DELETE = 'DELETE',
  PUT = 'PUT',
}

const initOptions = {
  method: HttpMethod.GET,
  headers: {
    'content-type': 'application/json;charset=UTF-8',
  },
  body: {},
};
// useFetch

export const useFetch = (url = '', value = initOptions) => {
  const cache = useRef<any>({}); // pamieć podręczna żeby nie pobierać dwa razy tego samego
  const [address, setAddress] = useState<string>(url); // adress https
  const [status, setStatus] = useState('idle'); // status określa co się dzieje czy dane sa pobierane/pobrane
  const [form, setForm] = useState(value); // formularz  z metodan nagłowkami i danymi do wysłania na backend
  const [data, setData] = useState([]); // dane które otrzymujemy

  const fetchData = (url: string, value = initOptions) => {
    setAddress(url);
    setForm(value);
  };

  useEffect(() => {
    if (!address || !address.trim()) return;

    const fetchDataGet = async () => {
      setStatus('fetching');
      if (cache.current[address]) {
        const data = cache.current[address];
        setData(data);
        setStatus('fetched');
      } else {
        const response = await fetch(address, {
          method: form.method,
          headers: form.headers,
          body:
            form.method === HttpMethod.GET ? null : JSON.stringify(form.body),
        });
        const data = await response.json();
        cache.current[address] = data; // set response in cache;
        setData(data);
        setStatus('fetched');
      }
    };
    fetchDataGet();
  }, [address, form.method]);
  return [data, status, fetchData, cache] as const;
};

////////////// użycie
/*
    Użycie nr:
*   1. const [data,status,fetchData] = useFetch();
*   - nie podajemy nic i korzystamy z funkcji fetchData
*   * Przykład
*   - <button onClick={()=> fetchData(`http://localhost:5000/categories/test`,{method: HttpMethod.GET, headers: {'content-type': 'application/json;charset=UTF-8'},body: {}})}>pobieram test GET</button>
*   - do funkcji fetchData podadjemy url i obiekt z metoda, nagłowek jako json, body - dane które chcemy wysłać;
*
*
*   2. const [data,status] = useFetch(url);
        - Jeżeli chcemy użyć jednorazowo aby coś wczytać
        - Domyślnie jest get więć wystarczy podac url i pod data mamy dane z backendu
* */
