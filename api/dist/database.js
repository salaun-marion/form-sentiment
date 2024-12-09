"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.BSD = void 0;
const mongodb_1 = require("mongodb");
class BSD {
}
exports.BSD = BSD;
_a = BSD;
BSD.COMMENTS = 'comments';
//TODO : move username and password
BSD.client = new mongodb_1.MongoClient('mongodb+srv://marionsl:1zASYZAgg2C8VSrl@cluster0.x1fo0.mongodb.net/');
BSD.database = _a.client.db('bsd');
BSD.comments = _a.database.collection(_a.COMMENTS);
//# sourceMappingURL=database.js.map