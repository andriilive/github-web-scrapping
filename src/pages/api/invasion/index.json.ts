export async function get( {params, request} : {params: {id: string}, request: Request} ) {

    console.log({params, request});

    return {
        body: JSON.stringify({
            name: 'Astro',
            url: 'https://astro.build/',
        }),
    };
}