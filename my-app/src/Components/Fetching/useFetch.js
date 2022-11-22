import React, { useState, useEffect } from "react";

const useFetch = (url) => {
    const [data, setData] = useState();
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState();

    useEffect(() => {
        setTimeout(() => {
            fetch(url)
            .then((res) => {
                if(!res.ok){
                    throw Error("fetching is not successful")
                }else{
                    return res.json()
                }
            })
            .then((data) => {
                setData(data);
                setIsLoading(false);
                setError();
            })
            .catch((err) => {
                setError(err.message);
                setIsLoading(false);
            })
        },2000)
    })

    return {data, isLoading, error}
}

export default useFetch;