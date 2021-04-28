import { useState, useEffect } from 'react';
import axios from '../axios';

const useFetch = (url) => {
    const [state, setstate] = useState({
        data: [],
        error: false,
        loading: true,
    });
    useEffect(() => {
        axios
            .get(url)
            .then((res) => {
                setstate({
                    data: res.data,
                    error: false,
                    loading: false,
                });
            })
            .catch(() => {
                setstate({
                    data: [],
                    error: true,
                    loading: false,
                });
            });
    }, [url]);
    return state;
};

export default useFetch;
