"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const passwordSchema = new mongoose_1.Schema({
    password: {
        type: String,
        required: true
    }
});
const passwordModel = (0, mongoose_1.model)('uniquePassword', passwordSchema);
exports.default = passwordModel;
