import multer from 'multer'
import path from 'path'

// Multer config
export default multer({
	storage: multer.diskStorage({}),
	fileFilter: (req, file, cb: any) => {
		let ext = path.extname(file.originalname)
		if (ext !== '.mp4') {
			return cb(new Error('File type is not supported'), false)
		}
		cb(null, true)
	},
})
