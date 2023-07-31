import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemDecorator';
import { Loader } from 'shared/ui/Loader/Loader';
import { Theme } from 'app/providers/ThemeProviders/lib/ThemeContext';

const meta: Meta<typeof Loader> = {
    title: 'shared/Loader',
    component: Loader,
    parameters: {
        layout: 'fullscreen',
    },
    tags: ['autodocs'],
    argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Loader>;

export const Normal: Story = {
    args: {
    },
};

export const Dark: Story = {
    args: {
    },
    decorators: [ThemeDecorator(Theme.Dark)],
};
