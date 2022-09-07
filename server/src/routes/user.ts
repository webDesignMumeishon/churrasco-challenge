import express from 'express';
import multer from 'multer';
import mimeTypes from 'mime-types';
import moment from 'moment';

import { createUser } from '../controllers/user';
import { authenticate } from '../middlewares/authenticate';


const router = express.Router()

const storage = multer.diskStorage({
  destination: 'uploads/',
  filename: (_, file, cb) => {
    cb(null, `${ moment.now().toString() }.${ mimeTypes.extension(file.mimetype) }`)
  },

})

const upload = multer({
  dest: "uploads/",
  storage
})

router
  .post('/', createUser)
  // .get('/', getUsers)
  // .get('/:id', getUser)
  // .put('/:id', [ authenticate ], updateUser)
  // .put('/update_avatar/:id', [ authenticate, upload.single('avatar') ], updateUserAvatar)
  // .get('/get_avatar/:id', getAvatar)


export default router
