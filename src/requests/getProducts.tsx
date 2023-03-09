export default async function getProducts(host: string | null =''){
    const apiUrlEndpoint = host + '/services/products/getProducts';
    console.log(apiUrlEndpoint);
    const response = await fetch(apiUrlEndpoint);
    const json = await response.json();
    return json;
}