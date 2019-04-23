(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    return /** @class */ (function () {
        function AmoSupport() {
        }
        AmoSupport.notDefineException = function (key) {
            throw new Error(key + " IS NOT DEFINED IN THE WINDOW");
        };
        AmoSupport.getProp = function (closure, key) {
            if (closure.hasOwnProperty(key)) {
                return closure[key];
            }
            this.notDefineException(key);
        };
        Object.defineProperty(AmoSupport, "amo", {
            get: function () {
                return this.getProp(window, 'AMOCRM');
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AmoSupport, "data", {
            get: function () {
                return this.getProp(this.amo, 'data');
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AmoSupport, "cardPage", {
            get: function () {
                return this.getProp(this.data, 'card_page');
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AmoSupport, "currentCard", {
            get: function () {
                return this.getProp(this.data, 'current_card');
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AmoSupport, "cardElementType", {
            /**
             * 1 - contact; 2 - lead, 3 - company
             */
            get: function () {
                return this.getProp(this.currentCard, 'element_type');
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AmoSupport, "cardId", {
            get: function () {
                return this.getProp(this.currentCard, 'id');
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AmoSupport, "newCard", {
            get: function () {
                return this.getProp(this.currentCard, 'new_card');
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AmoSupport, "currentEntity", {
            get: function () {
                return this.getProp(this.data, 'current_entity');
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AmoSupport, "entityChanged", {
            get: function () {
                return this.getProp(this.data, 'entity_changed');
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AmoSupport, "isCard", {
            get: function () {
                return this.getProp(this.data, 'is_card');
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AmoSupport, "pageChanged", {
            get: function () {
                return this.getProp(this.data, 'page_changed');
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AmoSupport, "fromCard", {
            get: function () {
                return this.getProp(this.data, 'from_card');
            },
            enumerable: true,
            configurable: true
        });
        return AmoSupport;
    }());
});
