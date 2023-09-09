import { Meta, StoryObj } from '@storybook/react';
import { Modal } from 'shared/ui/Modal/Modal';

const meta: Meta<typeof Modal> = {
    title: 'shared/Modal',
    component: Modal,
    parameters: {
        layout: 'fullscreen',
    },
    tags: ['autodocs'],
    argTypes: {},
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const Prime: Story = {
    args: {
        children: 'Text',
        isOpen: true,
    },
};
