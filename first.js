
const API_URL = 'https://fakestoreapi.com/products';

async function fetchJson(url) {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`Fetch failed: ${res.status} ${res.statusText}`);
    return res.json();
}

async function getMaleProducts(url = API_URL) {
    try {
        const products = await fetchJson(url);
        
        const maleProducts = products.filter(p => {
            if (!p || !p.category) return false;
            const cat = String(p.category).toLowerCase();
            let a = cat.includes('men');
            console.log(a)
        });
        return maleProducts;
    } catch (err) {
        console.error('Error fetching male products:', err);
        return;
    }
}

getMaleProducts(API_URL)