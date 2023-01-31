import { UnauthorizedError } from "@/presentation/errors"

export type HttpResponse<T = any> = {
  statusCode: number
  body: T
}

export const serverError = (error: Error): HttpResponse => ({
  statusCode: 500,
  body: error.stack
})

export const created = (body: any): HttpResponse => ({
  statusCode: 201,
  body
})

export const ok = (body: any): HttpResponse => ({
  statusCode: 200,
  body
})

export const badRequest = (error: any): HttpResponse => ({
  statusCode: 400,
  body: error
})

export const forbidden = (error: Error): HttpResponse => ({
  statusCode: 403,
  body: error
})

export const unauthorized = (): HttpResponse => ({
  statusCode: 401,
  body: new UnauthorizedError()
})

export const badGateway = (body: any): HttpResponse => ({
  statusCode: 502,
  body
})