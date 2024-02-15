const multer  = require('multer');
const path=require('path') 

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      return cb(null, "./album")
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      const taille = path.extname( file.originalname)
      return cb(null, file.fieldname + '-' + uniqueSuffix + taille)
    }
  })
  
  const upload = multer({ storage: storage })

  module.exports = {upload}