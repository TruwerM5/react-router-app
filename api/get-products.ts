

export default async function getProducts(cb: (json: any) => void) {
    try {
        const req = await fetch('https://jsonplaceholder.typicode.com/posts');
        const json = await req.json();
        console.log(json);
        cb(json);
    } catch(err) {
        throw new Error('Service unavailable');
    }
}