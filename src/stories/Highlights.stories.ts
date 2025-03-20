import { Meta, StoryObj } from "@storybook/react";
import Highlights from "@/components/Highlights/Highlights";

const meta: Meta<typeof Highlights> = {
    title: "Components/Highlights",
    component: Highlights,
};

export default meta;
type Story = StoryObj<typeof Highlights>;

export const Default: Story = {
    args: {
        cards: [
            {
                title: 'Best deals',
                content: 'We have the best deals and promotions. Check our reservations to find the right vehicle at everyday low rates.',
                icon: '/Tag.svg',
            },
            {
                title: 'Rent after an accident',
                content: 'Need to rent a vehicle after an accident? Let us help you get back on the road.',
                icon: '/Tool.svg',
            },
            {
                title: 'Sign Up for Specials',
                content: 'Sign up and get notified of our special offers.',
                icon: '/Mail.svg',
            },
            {
                title: 'Plus Your Points',
                content: 'You\'re automatically enrolled in our loyalty program. Enjoy your benefits!',
                icon: '/Star.svg',
            },
        ],
    },
};
