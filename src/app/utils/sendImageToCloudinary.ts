import { v2 as cloudinary } from 'cloudinary';
import multer from 'multer';
export const sendImageToCloudinary = async () => {
  // Configuration
  cloudinary.config({
    cloud_name: 'dxtlikvzz',
    api_key: '338778633758566',
    api_secret: '<your_api_secret>', // Click 'View API Keys' above to copy your API secret
  });

  // Upload an image
  const uploadResult = await cloudinary.uploader
    .upload(
      'https://res.cloudinary.com/demo/image/upload/getting-started/shoes.jpg',
      {
        public_id: 'shoes',
      },
    )
    .catch((error) => {
      console.log(error);
    });

  console.log(uploadResult);
};
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, process.cwd() + '/uploads/');
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    cb(null, file.fieldname + '-' + uniqueSuffix);
  },
});

export const upload = multer({ storage: storage });
