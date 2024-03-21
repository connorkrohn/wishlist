import type { LayoutServerLoad } from "./$types";

export const load: LayoutServerLoad = async ({isDataRequest}) => {
    return {
        splashScreen: !isDataRequest,
    }
};