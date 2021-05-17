import { NextFunction, Request, Response } from 'express'

export default (req: Request, _: Response, next: NextFunction) => {
	Object.keys(req.body).forEach((key) => {
		const exceptions = ['password', 'confirmPassword']
		if (!exceptions.includes(key) && typeof req.body.key === 'string') {
			req.body.key = req.body.trim()
		}
	})
	next()
}
