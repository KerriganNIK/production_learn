import type { Meta, StoryObj } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemDecorator';
import { Theme } from 'app/providers/ThemeProviders/lib/ThemeContext';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';

const meta: Meta<typeof AppLink> = {
    title: 'shared/AppLink',
    component: AppLink,
    parameters: {
        layout: 'fullscreen',
    },
    tags: ['autodocs'],
    argTypes: {},
    args: {
        to: '/',
    },
};

export default meta;
type Story = StoryObj<typeof AppLink>;

export const Primary: Story = {
    args: {
        theme: AppLinkTheme.PRIMARY,
        children: 'Primary',
    },
};

export const PrimaryDark: Story = {
    args: {
        theme: AppLinkTheme.PRIMARY,
        children: 'Primary',
    },
    decorators: [ThemeDecorator(Theme.Dark)],
};

export const Secondary: Story = {
    args: {
        theme: AppLinkTheme.SECONDARY,
        children: 'Secondary',
    },
};

export const SecondaryDark: Story = {
    args: {
        theme: AppLinkTheme.SECONDARY,
        children: 'Secondary',
    },
    decorators: [ThemeDecorator(Theme.Dark)],
};
