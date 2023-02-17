/*

This is a simple fetcher for the WordPress GraphQL API.
Makes a POST request to the WP_API endpoint with the query and variables.

*/



const WP_API = process.env.WP_URL;


async function fetcher(query, {variables} = {}) {


    const res = await fetch(WP_API, {
        method: 'POST',
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({query, variables}),
    });

    const json = await res.json();

    return json



}


export default fetcher;