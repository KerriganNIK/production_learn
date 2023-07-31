import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemDecorator';
import { Theme } from 'app/providers/ThemeProviders/lib/ThemeContext';
import { Button, ThemeButton } from './Button';

const meta: Meta<typeof Button> = {
    title: 'shared/Button',
    component: Button,
    parameters: {
        layout: 'fullscreen',
    },
    tags: ['autodocs'],
    argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
    args: {
        children: 'Text',
    },
};

export const PrimaryDark: Story = {
    args: {
        children: 'Text',
    },
    decorators: [ThemeDecorator(Theme.Dark)],
};

export const Clear: Story = {
    args: {
        children: 'Text',
        theme: ThemeButton.CLEAR,
    },
};

export const ClearDark: Story = {
    args: {
        children: 'Text',
        theme: ThemeButton.CLEAR,
    },
    decorators: [ThemeDecorator(Theme.Dark)],
};

export const Outline: Story = {
    args: {
        children: 'Text',
        theme: ThemeButton.OUTLINE,
    },
};

export const OutlineDark: Story = {
    args: {
        children: 'Text',
        theme: ThemeButton.OUTLINE,
    },
    decorators: [ThemeDecorator(Theme.Dark)],
};
