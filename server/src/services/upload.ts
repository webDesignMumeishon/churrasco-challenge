import  { bufferToDataURI } from '../utils/file'

import  multer from "multer"
import {v2 as cloudinary } from "cloudinary"
// const { ErrorHandler } = require("../utils/errorHandler");

// @ts-ignore
cloudinary.config({
  cloud_name: 'tomasmacchi-muma',
  api_key: "718889228812439",
  api_secret: "6W_isy5uJtfRz1p0hKdK_gUi0fg",
  secure: true
});

const memoryStorage = multer.memoryStorage();

export const upload = multer({
  storage: memoryStorage,
});

export const uploadToCloudinary = async (fileString, format) => {
  try {

    const options = {
      use_filename: true,
      unique_filename: false,
      overwrite: true,
    };
    
    // @ts-ignore
    const { uploader } = cloudinary;
    
    console.log(1)
    console.log(process.env.CLOUDINARY_API_KEY, uploader)

    const res = await uploader.upload(
      `data:image/${format};base64,${fileString}`,
      options
    );

    return res;
  } catch (error) {
    throw new Error(error);
  }
};


// const uploadImage = async (req, res, next) => {
//   try {

//     // const { file } = req

//     // if (!file) throw new ErrorHandler(400, 'Image is required')

//     // const fileFormat = file.mimetype.split('/')[1]
//     // const { base64 } = bufferToDataURI(fileFormat, file.buffer)

//     // const imageDetails = await uploadToCloudinary(base64, fileFormat)

//     // res.json({
//     //   status: 'success',
//     //   message: 'Upload successful',
//     //   data: imageDetails,
//     // })

//   } catch (error) {
//     next(new ErrorHandler(error.statusCode || 500, error.message))
//   }
// }

// module.exports = {
//     upload,
//     uploadToCloudinary,
// };

// module.exports = {
//   uploadImage,
// }