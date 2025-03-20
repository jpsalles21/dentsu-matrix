import { Meta, StoryObj } from '@storybook/react';
import Checkbox from '@/components/Checkbox/Checkbox';

const meta: Meta<typeof Checkbox> = {
  title: 'Components/Checkbox',
  component: Checkbox,
  argTypes: {
    label: {
      control: 'text', 
    },
    checked: {
      control: 'boolean',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Checkbox>;

export const DefaultCheckbox: Story = {
  args: {
    label: 'Return to a different location',
    checked: false,
    id: 'checkbox'
  },
};

export const CheckedCheckbox: Story = {
  args: {
    label: 'Return to a differente location',
    checked: true,
    id: 'checkbox'
  },
};

