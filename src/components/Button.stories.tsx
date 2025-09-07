import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "./Button";
const meta = {
  title: "Components/Button",
  component: Button,
  tags: ['autodocs'],
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    children: "Show more",
    appearance: 'primary'
  },
};

export const Secondary: Story = {
  args: {
    children: "Load more",
    appearance: 'secondary'
  },
};
