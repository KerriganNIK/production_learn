import type { Meta, StoryObj } from '@storybook/react';

import { Input } from 'shared/ui/Input/Input';

const meta: Meta<typeof Input> = {
    title: 'shared/Input',
    component: Input,
    parameters: {
        layout: 'fullscreen',
    },
    tags: ['autodocs'],
    argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
    args: {
        value: 'Text',
    },
};
