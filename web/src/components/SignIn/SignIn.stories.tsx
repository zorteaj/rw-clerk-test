// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof SignIn> = (args) => {
//   return <SignIn {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import SignIn from './SignIn'

export const generated = () => {
  return <SignIn />
}

export default {
  title: 'Components/SignIn',
  component: SignIn,
} as ComponentMeta<typeof SignIn>
