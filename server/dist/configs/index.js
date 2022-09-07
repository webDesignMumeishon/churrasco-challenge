"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
require("reflect-metadata");
const dotenv_1 = __importDefault(require("dotenv"));
const database_config_1 = require("./database.config");
dotenv_1.default.config();
exports.default = (app) => {
    app.disable('x-powered-by');
    app.set('env', process.env.NODE_ENV);
    if (process.env.NODE_ENV !== 'test')
        app.use((0, morgan_1.default)('dev'));
    app.use(express_1.default.json());
    app.use(express_1.default.urlencoded({ extended: false }));
    app.use((0, cors_1.default)());
    (0, database_config_1.run)()
        .then(() => console.log('Database initializated'))
        .catch(err => console.error('Error during database initialization: ', err));
};
