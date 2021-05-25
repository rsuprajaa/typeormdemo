import cloudinary from 'cloudinary'
console.log(process.env.CLOUDINARY_NAME)
cloudinary.v2.config({
	cloud_name: 'ytclone',
	api_key: '512963291731931',
	api_secret: 'Qr-TVvVnbF_FkFDwqCCg_NLADpI',
})

export default cloudinary
