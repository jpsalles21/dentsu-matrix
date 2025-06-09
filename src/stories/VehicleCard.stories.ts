import { Meta, StoryObj } from "@storybook/react";
import { VehicleCard } from "@/components";

const meta: Meta<typeof VehicleCard> = {
    title: "Components/VehicleCard",
    component: VehicleCard,
};

export default meta;
type Story = StoryObj<typeof VehicleCard>;

export const Default: Story = {
    parameters: {
        nextjs: {
            appDirectory: true,
        }
    },
    args: {
        id: 2,
        model: 'Ford Ka',
        price: 200,
    },
};

