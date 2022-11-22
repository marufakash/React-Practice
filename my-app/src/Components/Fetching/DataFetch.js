import React from "react";
import useFetch from "./useFetch";

const DataFetch = () => {

    const {data, isLoading, error} = useFetch("https://jsonplaceholder.typicode.com/posts/1/comments")

    const loadingMessage = <h3>Data is loading</h3>
    const errorMessage = <h3>{error}</h3>
    const dataElement = data && data.map((x) => {
                            return (
                                <div key={x.id}>
                                    <h3>Name : {x.name}</h3>
                                    <h4>Email : {x.email}</h4>
                                    <p>Body : {x.body}</p>
                                </div>
                            )
                        })

    return (
        <div className="card">
            <h2 className="cardTitle">Data Fetching using useEffect</h2>
            {error && errorMessage}
            {isLoading && loadingMessage}
            {dataElement}
        </div>
    )
}

export default DataFetch;