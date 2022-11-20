export async function get() {

    // console.log({params, request});

    return {
        body: JSON.stringify({
            name: 'Astro',
            url: 'https://astro.build/',
        }),
    };
}