import type { Preview } from '@storybook/react';
import { RouterDecorator } from '../../src/shared/config/storybook/RouterDecorator/RouterDecorator';
import { Theme } from '../../src/app/providers/ThemeProviders/lib/ThemeContext';
import { ThemeDecorator } from '../../src/shared/config/storybook/ThemeDecorator/ThemDecorator';
import { StyleDecorator } from '../../src/shared/config/storybook/StyleDecorator/StyleDecorator';

const decorators = [
    StyleDecorator,
    ThemeDecorator(Theme.Light),
    RouterDecorator,
];

const preview: Preview = {
    parameters: {
        actions: { argTypesRegex: '^on[A-Z].*' },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/,
            },
        },
    },
};

export { decorators };
export const { parameters } = preview;
