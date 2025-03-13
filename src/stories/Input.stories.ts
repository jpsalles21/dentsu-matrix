import { Meta, StoryObj } from "@storybook/react";
import Input from "@/components/Input/Input";

const meta: Meta<typeof Input> = {
    title: "Components/Input",
    component: Input,
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
    args: {
        label: 'Required field',
        placeholder: 'Provide a location',
        required: true,
    },
};

