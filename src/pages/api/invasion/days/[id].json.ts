import type { APIRoute } from 'astro';

const usernames = ["Sarah", "Chris", "Dan"]

export const get: APIRoute = ({ params }) => {
    let id = params.id as number;

    return {
        body: JSON.stringify({
            name: usernames[id]
        })
    }
};

export function getStaticPaths() {
    return [
        { params: { id: '1' } },
        { params: { id: '2' } },
        { params: { id: '3' } }
    ];
}