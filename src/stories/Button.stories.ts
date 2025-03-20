import { Meta, StoryObj } from "@storybook/react";
import Button from "@/components/Button/Button";


const meta: Meta<typeof Button> = {
    title: "Components/Button",
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
        disabled: false,
    },
};

export const BlackButton: Story = {
    args: {
        children: 'Sign in / Join',
        variant: 'black',
        disabled: false, 
    },
}