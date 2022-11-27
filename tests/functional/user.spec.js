"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const app_1 = __importDefault(require("../../dist/main/config/app"));
describe('POST user', () => {
    it('works', () => (0, supertest_1.default)(app_1.default)
        .post('/api/users/')
        .expect('Content-Type', /json/)
        .expect(200));
});
