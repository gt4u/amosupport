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
        function AmoHelper() {
        }
        AmoHelper.notDefineException = function (key) {
            return new Error(key + " IS NOT DEFINED IN THE WINDOW");
        };
        Object.defineProperty(AmoHelper, "window", {
            get: function () {
                return window;
            },
            enumerable: true,
            configurable: true
        });
        AmoHelper.getProp = function (closure, key) {
            if (closure().hasOwnProperty('key')) {
                return closure()[key];
            }
            this.notDefineException(key);
        };
        Object.defineProperty(AmoHelper, "amo", {
            get: function () {
                return this.getProp(this.window, 'AMOCRM');
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AmoHelper, "data", {
            get: function () {
                return this.getProp(this.amo, 'data');
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AmoHelper, "cardPage", {
            get: function () {
                return this.getProp(this.data, 'card_page');
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AmoHelper, "currentCard", {
            get: function () {
                return this.getProp(this.data, 'current_card');
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AmoHelper, "cardElementType", {
            /**
             * 1 - contact; 2 - lead, 3 - company
             */
            get: function () {
                return this.getProp(this.currentCard, 'element_type');
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AmoHelper, "cardId", {
            get: function () {
                return this.getProp(this.currentCard, 'id');
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AmoHelper, "newCard", {
            get: function () {
                return this.getProp(this.currentCard, 'new_card');
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AmoHelper, "currentEntity", {
            get: function () {
                return this.getProp(this.currentCard, 'current_entity');
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AmoHelper, "entityChanged", {
            get: function () {
                return this.getProp(this.currentCard, 'entity_changed');
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AmoHelper, "isCard", {
            get: function () {
                return this.getProp(this.currentCard, 'is_card');
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AmoHelper, "pageChanged", {
            get: function () {
                return this.getProp(this.currentCard, 'page_changed');
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AmoHelper, "fromCard", {
            get: function () {
                return this.getProp(this.currentCard, 'from_card');
            },
            enumerable: true,
            configurable: true
        });
        return AmoHelper;
    }());
});
