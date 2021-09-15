import { Meta, Story } from '@storybook/react';
import { Button, ButtonProps } from './Button';

export default {
  title: 'Components/MyButton',
  component: Button,
  args: {
    primary: true,
    label: "Hello World"
  },
} as Meta


// Defina a template function
const Template: Story<ButtonProps> = (args) => <Button {...args}/>


export const Primary =  Template.bind({})

export const Secondary = Template.bind({})
Secondary.args = {
  primary: false,
}

export const Small = Template.bind({})
Small.args = {
  size: "small",
}

export const Large = Template.bind({})
Large.args = {
  size: "large",
}