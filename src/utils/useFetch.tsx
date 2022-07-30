import { useState, useEffect, useRef } from 'react';

export const useFetch = (url:string) => {
    const cache = useRef<any>({});
    const [adres,setAdres] = useState(url);
    const [status, setStatus] = useState('idle');
    const [data, setData] = useState([]);


    useEffect(() => {
        if(!adres || !adres.trim()) return;

        const fetchData = async () => {
            setStatus('fetching');
            if (cache.current[adres]) {
                const data = cache.current[adres];
                setData(data);
                setStatus('fetched');
            } else {
                const response = await fetch(adres);
                const data = await response.json();
                cache.current[adres] = data; // set response in cache;
                setData(data);
                setStatus('fetched');
            }
        };
       fetchData();
    },[adres]);
    return [data,status,setAdres];
}








