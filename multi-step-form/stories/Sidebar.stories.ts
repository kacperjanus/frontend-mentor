import type { Meta, StoryObj } from '@storybook/react';
import Sidebar from '@/app/_components/Sidebar';

const meta = {
    title: 'Example/Sidebar',
    component: Sidebar,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
        layout: 'centered',
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ['autodocs']
    // More on argTypes: https://storybook.js.org/docs/api/argtypes
} satisfies Meta<typeof Sidebar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const FirstStep: Story = {
    args: {
        stepNumber: 1,
        stepsData: ["Your info", "Select plan", "Add-ons"]
    }
};

export const SecondStep: Story = {
    args: {
        stepNumber: 2,
        stepsData: ["Your info", "Select plan", "Add-ons"]
    },
};

export const ThirdStep: Story = {
    args: {
        stepNumber: 3,
        stepsData: ["Your info", "Select plan", "Add-ons"]
    },
};

export const ForthStep: Story = {
    args: {
        stepNumber: 4,
        stepsData: ["Your info", "Select plan", "Add-ons"]
    },
};