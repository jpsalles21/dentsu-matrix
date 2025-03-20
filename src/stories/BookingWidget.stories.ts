import { Meta, StoryObj } from "@storybook/react";
import BookingWidget from "@/components/BookingWidget/BookingWidget";

const meta: Meta<typeof BookingWidget> = {
    title: "Components/BookingWidget",
    component: BookingWidget,
};

export default meta;
type Story = StoryObj<typeof BookingWidget>;

export const Default: Story = {
    
};
