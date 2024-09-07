import type { Args, Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Button, ButtonProps } from 'components/ui/button/button';
import { SIZES, VARIANT } from 'constant/themes';

type ButtonPageProps = React.ComponentProps<typeof Button> & {
  footer?: string;
};

const meta = {
  component: Button,
  title: 'Buttons/Button',
  render: ({ footer, ...args }) => (
    <>
      <Button {...args}>button</Button>
      <footer>{footer}</footer>
    </>
  ),
  tags: ['autodocs'],
  args: { children: 'button' },
  argTypes: {
    variant: {
      options: Object.keys(VARIANT),
      control: { type: 'radio' },
    },
    children: { control: 'text' },
    onClick: { action: fn() },
    fullWidth: { active: { control: 'boolean' } },
    disabled: { control: 'boolean' },
    asChild: { table: { disable: true } },
    size: {
      options: Object.keys(SIZES),
      control: { type: 'radio' },
    },
    iconOnly: { control: 'boolean' },
  },
  parameters: {
    controls: { expanded: true },
    layout: 'centered',
  },
} satisfies Meta<ButtonPageProps>;

export default meta;

type Story = StoryObj<Omit<ButtonPageProps, 'isIconOnly'>>;

export const buttonDefaultArgs = {
  disabled: false,
} as ButtonProps;

export const Default: Story = {
  args: {
    ...buttonDefaultArgs,
    footer: 'Built with Storybook',
  },
};

export const Destructive = {
  args: {
    ...buttonDefaultArgs,
    variant: 'error',
  },
};

export const Text = {
  args: {
    ...buttonDefaultArgs,
    variant: 'text',
  },
};
export const Link = {
  render: (args: Args) => (
    <Button asChild {...args} variant="link">
      <a href="@gmail.com">link to some where</a>
    </Button>
  ),
  args: {
    ...buttonDefaultArgs,
    variant: 'link',
  },
};
export const Secondary = {
  args: {
    ...buttonDefaultArgs,
    variant: 'secondary',
  },
};
export const Outline = {
  args: {
    ...buttonDefaultArgs,
    variant: 'outline',
  },
};
export const Info = {
  args: {
    ...buttonDefaultArgs,
    variant: 'info',
  },
};
