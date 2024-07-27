import type {Meta, StoryObj} from '@storybook/react';
import {fn} from '@storybook/test';
import Cart from "@/app/_components/Cart";
import {CartProvider} from "@/app/_lib/contexts/CartContext";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: 'Cart',
    component: Cart,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
        layout: 'centered',
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/api/argtypes
    decorators: [
        (Story) => <CartProvider><Story/></CartProvider>
    ]
} satisfies Meta<typeof Cart>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {};