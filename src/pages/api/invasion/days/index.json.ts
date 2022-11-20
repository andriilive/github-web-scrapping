import type { APIRoute } from 'astro';

export const get: APIRoute = ({ params}) => {
    const id = {params};
    return {
        body: JSON.stringify({
            test: 1
        })
    }
};