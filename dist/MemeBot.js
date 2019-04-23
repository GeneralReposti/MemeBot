"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MemeBot = /** @class */ (function () {
    function MemeBot(name) {
        if (name === void 0) { name = 'MemeBot'; }
        this.name = name;
    }
    MemeBot.prototype.run = function () {
        return this.name + " started";
    };
    return MemeBot;
}());
exports.MemeBot = MemeBot;
//# sourceMappingURL=MemeBot.js.map