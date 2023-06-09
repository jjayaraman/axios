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
exports.getPrice = void 0;
const axios_1 = __importDefault(require("axios"));
const ioredis_1 = __importDefault(require("ioredis"));
const redis = new ioredis_1.default();
const getPrice = () => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield axios_1.default.get('https://api.coindesk.com/v1/bpi/currentprice.json');
    console.log(response === null || response === void 0 ? void 0 : response.data);
    const key = 'currency:cache';
    yield redis.set(key, JSON.stringify(response.data));
    const data = yield redis.get(key);
    console.log('Data from Cache::: ', data);
    return response === null || response === void 0 ? void 0 : response.data;
});
exports.getPrice = getPrice;
void (0, exports.getPrice)();
//# sourceMappingURL=index.js.map