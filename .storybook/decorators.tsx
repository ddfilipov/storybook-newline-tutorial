import { DecoratorFn} from '@storybook/react'

// Receive a component and apply a bordered container with max width of 400px
export const withMaxWidth: DecoratorFn = (Story) => (
    <div style={{ maxWidth: 400, margin: 'auto', border:'1px solid #fab' }}>
        <Story />
    </div>
)

export const withAvgWidth: DecoratorFn = (Story) => (
    <div style={{ maxWidth: 200, margin: 'auto', border:'1px solid #fab' }}>
        <Story />
    </div>
)

export const withMinWidth: DecoratorFn = (Story) => (
    <div style={{ maxWidth: 50, margin: 'auto', border:'1px solid #fab' }}>
        <Story />
    </div>
)