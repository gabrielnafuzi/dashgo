import { useQuery, UseQueryOptions, UseQueryResult } from 'react-query'

import { api } from '@/services/api'

type GetUserResponse = {
  users: User[]
  totalCount: number
}

export type User = {
  id: string
  name: string
  email: string
  createdAt: string
}

export const getUsers = async (page: number): Promise<GetUserResponse> => {
  const { data, headers } = await api.get<{ users: User[] }>('/users', {
    params: { page }
  })

  const totalCount = Number(headers['x-total-count'])

  const users: User[] = data.users.map((user) => ({
    ...user,
    createdAt: new Date(user.createdAt).toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: 'long',
      year: 'numeric'
    })
  }))

  return { users, totalCount }
}

export const useUsers = (page: number, options?: UseQueryOptions) => {
  return useQuery(['users', page], () => getUsers(page), {
    staleTime: 1000 * 60 * 10, // 10 minutes
    ...(options ?? {})
  }) as UseQueryResult<GetUserResponse, unknown>
}
