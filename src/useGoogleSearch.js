import {useState, useEffect } from 'react';
import API_KEY from './keys'
const CONTEXT_KEY = "";
// const {data} = useGoogleSearch(term);

// https://developers.google.com/custom-search/v1/introduction#identify_your_application_to_google_with_api_key
// Custom Search JSON API for the API Key
// https://developers.google.com/custom-search/v1/using_rest

// for context key
// https://programmablesearchengine.google.com/cse/setup/basic?cx=
// https://cse.google.com/cse/create/new
const useGoogleSearch = (term) => {
        const [data, setData] = useState(null);
        useEffect(() => {
            const fetchData = async() => {
                fetch(
                    `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`
                ).then(response => response.json()
                )
                .then(result => {
                    setData(result);
                })
            }
            fetchData();
        },[term]);
        return {data}
};

export default useGoogleSearch;

//export default useGoogleSearch;