import { withMaxWidth } from "./decorators"

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

// using the following line of code will apply the style form decorators withMaxWidth to all our stories
//export const decorators = [withMaxWidth]