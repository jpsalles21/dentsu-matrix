import { Meta, StoryObj } from "@storybook/react";
import Button from "@/components/Button/Button";


const meta: Meta<typeof Button> = {
    title: "Example/Button",
    component: Button,
    argTypes: {
        variant: {
            table: {
                disable: true
            }
        }
    }
};

export default meta;
type Story = StoryObj<typeof Button>;

export const WhiteButton: Story = {
    args: {
        children: 'Sign in / Join',
        variant: 'white',
        width: '123px',
        height: '40px'
    },
};

export const BlackButton: Story = {
    args: {
        children: 'Sign in / Join',
        variant: 'black',
        width: '123px',
        height: '40px'
    },
}