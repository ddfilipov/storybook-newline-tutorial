import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Button } from './Button';

export default {
  title: 'Components/MyButton',
  component: Button
} as ComponentMeta<typeof Button> // ComponentMeta automatically infers the props from Button

export const Primary: ComponentStory<typeof Button> = () => (
  <Button primary label="Primary Button" />
)

export const Secondary: ComponentStory<typeof Button> = () => (
  <Button label="Secondary Button" />
)

export const Small: ComponentStory<typeof Button> = () => (
  <Button label="small button" size="small" />
)

export const Large : ComponentStory<typeof Button> = () => (
  <Button label="Large Button" size="large"/>
)