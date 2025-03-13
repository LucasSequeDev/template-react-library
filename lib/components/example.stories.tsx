import type { Meta, StoryObj } from "@storybook/react";

import { Example } from "./example";

const meta: Meta<typeof Example> = {
  title: "Example",
  component: Example,
  argTypes: {
    title: { control: "text" },
  },
};

export default meta;
type Story = StoryObj<typeof Example>;

export const Default: Story = {
  args: {
    title: "this is an example",
  },
};
