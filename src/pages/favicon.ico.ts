import {APIContext} from "astro";

export default async function get(/*{ params, request } : APIContext*/) {
    const response = await fetch("https://digitalandy.eu/favicon.ico");
    const buffer = Buffer.from(await response.arrayBuffer());
    return {
        body: buffer,
        encoding: 'binary',
    };
}