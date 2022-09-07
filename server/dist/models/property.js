"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Property = void 0;
const typeorm_1 = require("typeorm");
const picture_1 = require("./picture");
const state_1 = require("./state");
const tag_1 = require("./tag");
const user_1 = require("./user");
let Property = class Property {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Property.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Property.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Property.prototype, "location", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Property.prototype, "adress", void 0);
__decorate([
    (0, typeorm_1.Column)('text'),
    __metadata("design:type", String)
], Property.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Property.prototype, "price", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], Property.prototype, "published_until", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Property.prototype, "createdDate", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], Property.prototype, "updatedDate", void 0);
__decorate([
    (0, typeorm_1.DeleteDateColumn)(),
    __metadata("design:type", Date)
], Property.prototype, "deletedDate", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_1.User, (user) => user.properties),
    __metadata("design:type", typeof (_a = typeof user_1.User !== "undefined" && user_1.User) === "function" ? _a : Object)
], Property.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => state_1.State, (state) => state.properties),
    __metadata("design:type", state_1.State)
], Property.prototype, "state", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => picture_1.Picture, (picture) => picture.property),
    __metadata("design:type", Array)
], Property.prototype, "pictures", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => tag_1.Tag, (tag) => tag.properties),
    (0, typeorm_1.JoinTable)(),
    __metadata("design:type", Array)
], Property.prototype, "tags", void 0);
Property = __decorate([
    (0, typeorm_1.Entity)()
], Property);
exports.Property = Property;
