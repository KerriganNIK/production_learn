import {ResolveOptions} from "webpack";
import {BuildOptions} from "./type/config";

export function buildResolves(option: BuildOptions): ResolveOptions{
    return {
        extensions: ['.tsx', '.ts', '.js'],
        // preferAbsolute: true,
        // modules: [option.paths.src, 'node_modules'],
        // mainFields: ['index'],
        // alias: {}
    }
}