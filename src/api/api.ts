import { AxiosInstance } from 'axios'
import { GraphQLClient } from 'graphql-request'

import { IApi } from './api.interface'
import { mocks } from './mocks'
import { someMutation } from './mutations'

// Passed in are client instances with Authorization header configured from the store
export const createApi = (useMocks: boolean, _axios: AxiosInstance, gql: GraphQLClient): IApi => {
  if (useMocks) {
    // Typecheck all requests have mock version
    return mocks
  }

  // prettier-ignore
  return {
    someMutation: () => gql.request(someMutation).then(),
  }
}
