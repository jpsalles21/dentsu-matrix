import { Meta, StoryObj } from "@storybook/react";
import Card from "@/components/Card/Card";
import Tag from '../../public/Tag.svg'

const meta: Meta<typeof Card> = {
    title: "Components/Card",
    component: Card,
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
    args: {
        title: 'Best Deal',
        content: 'We have the best deals and promotions. Check our reservations to find the right vehicle at everyday low rates.',
        icon: Tag,
    },
};