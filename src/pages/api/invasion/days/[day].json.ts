import type {APIRoute} from 'astro';
import type {CasualtiesTypes, ApiCasualties_Index} from "types/invasion";

export const get: APIRoute = (params) => {
    const id = {params};

    return {
        body: JSON.stringify( {
            day: id,
            casualties: {
                personnel: {
                    total: 0,
                    increase: 300
                }
            }
        } )
    }
};

export function getStaticPaths(params) {
    return [
        {params: {day: 1}},
        {params: {day: 1}},
    ]
}