import type { Configuration as DevServerConfiguration } from 'webpack-dev-server';
import { BuildOptions } from './type/config';

export function buildDevServer(option: BuildOptions): DevServerConfiguration {
    return {
        port: option.port,
        open: true,
        historyApiFallback: true,
        hot: true,
    };
}
