"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const multer_1 = __importDefault(require("multer"));
const mime_types_1 = __importDefault(require("mime-types"));
const moment_1 = __importDefault(require("moment"));
const user_1 = require("../controllers/user");
const router = express_1.default.Router();
const storage = multer_1.default.diskStorage({
    destination: 'uploads/',
    filename: (_, file, cb) => {
        cb(null, `${moment_1.default.now().toString()}.${mime_types_1.default.extension(file.mimetype)}`);
    },
});
const upload = (0, multer_1.default)({
    dest: "uploads/",
    storage
});
router
    .post('/', user_1.createUser);
// .get('/', getUsers)
// .get('/:id', getUser)
// .put('/:id', [ authenticate ], updateUser)
// .put('/update_avatar/:id', [ authenticate, upload.single('avatar') ], updateUserAvatar)
// .get('/get_avatar/:id', getAvatar)
exports.default = router;
