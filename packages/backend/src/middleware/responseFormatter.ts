import type { NextFunction, Request, Response } from 'express'

export const responseFormatter = (_req: Request, res: Response, next: NextFunction): void => {
  res.success = <T>(data: T): void => {
    res.status(200).json({
      status: 200,
      success: true,
      data,
    })
  }

  res.error = (message: string, statusCode = 400): void => {
    res.status(statusCode).json({
      status: statusCode,
      success: false,
      message,
    })
  }

  next()
}
