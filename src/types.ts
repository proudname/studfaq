

export type SuccessResponse<T=any> = {
  ok: 1,
  data?: T
}

export type FailedResponse = {
  ok: 0,
  message: string,
  code: number
}