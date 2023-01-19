import { QueryFunction, useQuery as useReactQuery } from 'react-query'
import { QueryKey } from './query-key'

function useQuery<TData>(
  queryKey: QueryKey | QueryKey[],
  queryFn: QueryFunction<TData, QueryKey | QueryKey[]>
) {
  return useReactQuery(queryKey, queryFn, {
    // TODO: Implement optimistic update.
  })
}

export default useQuery
