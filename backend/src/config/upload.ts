<<<<<<< HEAD
import { request } from 'express';
import multer from 'multer';
import path from 'path';

export default {
  storage: multer.diskStorage({
    destination: path.join(__dirname, '..', '..', 'uploads'),
    filename: (request, file, cb) => {
      const fileName = `${Date.now()}-${file.originalname}`;
      
      cb(null, fileName);
    },
  })
};
=======
import multer from 'multer';
import { join } from 'path';

export default {
  storage: multer.diskStorage({
    destination: join(__dirname, '..', '..', 'uploads'),
    filename: (request, file, cb) => {
      const fileName = `${Date.now()}-${file.originalname.trim()}`;

      cb(null, fileName);
    },
  }),
};
>>>>>>> 6645203565b2ebcabceac73ad18154a34b2c81e3
