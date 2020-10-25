// TODO: https://mswjs.io/ would be much better for this

import { IApi } from './api.interface'

export const mocks: IApi = {
  someMutation: () => Promise.resolve(),
}
