import type {Meta, StoryObj} from '@storybook/react';
import ProductHighlight from "@/app/_components/ProductHighlight";
import {CartProvider} from "@/app/_lib/contexts/CartContext";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
    title: 'ProductHighlight',
    component: ProductHighlight,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
        layout: 'centered',
        nextjs: {
            appDirectory: true
        }
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
    tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/api/argtypes
    decorators: [
        (Story) => <div className="w-[375px] bg-red-500"><Story/></div>,
    ]
} satisfies Meta<typeof ProductHighlight>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
    args: {
        type: "primary",
        description: "Upgrade to premium speakers that are phenomenally built to deliver truly remarkable sound.",
        image: ["/assets/home/mobile/image-speaker-zx9.png", "/assets/home/tablet/image-speaker-zx9.png", "/assets/home/desktop/image-speaker-zx9.png"],
        slug: "/xt",
        name: "ZX9 SPEAKER"
    }
};

export const Secondary: Story = {
    args: {
        type: "secondary",
        image: ["/assets/home/mobile/image-speaker-zx7.jpg", "/assets/home/tablet/image-speaker-zx7.jpg", "/assets/home/desktop/image-speaker-zx7.jpg"],
        slug: "/xt",
        name: "ZX7 SPEAKER"
    }
};

export const Tertiary: Story = {
    args: {
        type: "tertiary",
        image: ["/assets/home/mobile/image-earphones-yx1.jpg", "/assets/home/tablet/image-earphones-yx1.jpg", "/assets/home/desktop/image-earphones-yx1.jpg"],
        slug: "/xt",
        name: "YX1 EARPHONES"
    }
};