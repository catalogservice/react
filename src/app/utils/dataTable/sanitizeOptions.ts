import { TOptions } from "./dataTable";

const sanitizeOptions = (options: (TOptions | undefined)): TOptions => {
    if (!options) {
        return {};
    }
    return options;
}

export default sanitizeOptions;