"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const database_1 = require("./database");
const comment_1 = __importDefault(require("./models/comment"));
const sentiment_1 = require("./sentiment");
const app = (0, express_1.default)();
const port = 3000;
app.get('/admin/comments', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const comments = yield database_1.BSD.comments.find().toArray();
    res.json(comments);
}));
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield database_1.BSD.comments.drop();
            const text1 = 'Dont like it';
            const text2 = 'Love it';
            console.log('PRETEST');
            yield (0, sentiment_1.giveSentiment)(text1);
            console.log('TEST');
            yield database_1.BSD.comments.insertMany([
                new comment_1.default('user35678', text1, yield (0, sentiment_1.giveSentiment)(text1)),
                new comment_1.default('user456', text2, yield (0, sentiment_1.giveSentiment)(text2)),
            ]);
            app.listen(port, () => {
                return console.log(`🚀 Express is listening at http://localhost:${port}`);
            });
        }
        catch (err) {
            console.error('error:', JSON.stringify(err));
        }
    });
}
main().catch((err) => {
    console.error(JSON.stringify(err));
});
//# sourceMappingURL=app.js.map