(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('rxjs'), require('rxjs/operators'), require('ng-zorro-antd/core'), require('@angular/common'), require('@angular/core'), require('@angular/forms'), require('ng-zorro-antd/i18n'), require('ng-zorro-antd/icon'), require('ng-zorro-antd/select')) :
    typeof define === 'function' && define.amd ? define('ng-zorro-antd/pagination', ['exports', 'rxjs', 'rxjs/operators', 'ng-zorro-antd/core', '@angular/common', '@angular/core', '@angular/forms', 'ng-zorro-antd/i18n', 'ng-zorro-antd/icon', 'ng-zorro-antd/select'], factory) :
    (factory((global['ng-zorro-antd'] = global['ng-zorro-antd'] || {}, global['ng-zorro-antd'].pagination = {}),global.rxjs,global.rxjs.operators,global['ng-zorro-antd'].core,global.ng.common,global.ng.core,global.ng.forms,global['ng-zorro-antd'].i18n,global['ng-zorro-antd'].icon,global['ng-zorro-antd'].select));
}(this, (function (exports,rxjs,operators,core,common,core$1,forms,i18n,icon,select) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
            r = Reflect.decorate(decorators, target, key, desc);
        else
            for (var i = decorators.length - 1; i >= 0; i--)
                if (d = decorators[i])
                    r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }
    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
            return Reflect.metadata(metadataKey, metadataValue);
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NzPaginationComponent = /** @class */ (function () {
        function NzPaginationComponent(i18n$$1, cdr) {
            this.i18n = i18n$$1;
            this.cdr = cdr;
            // tslint:disable-next-line:no-any
            this.locale = {};
            this.firstIndex = 1;
            this.pages = [];
            this.$destroy = new rxjs.Subject();
            this.nzPageSizeChange = new core$1.EventEmitter();
            this.nzPageIndexChange = new core$1.EventEmitter();
            this.nzInTable = false;
            this.nzSize = 'default';
            this.nzPageSizeOptions = [10, 20, 30, 40];
            this.nzShowSizeChanger = false;
            this.nzHideOnSinglePage = false;
            this.nzShowQuickJumper = false;
            this.nzSimple = false;
            this.nzTotal = 0;
            this.nzPageIndex = 1;
            this.nzPageSize = 10;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        NzPaginationComponent.prototype.validatePageIndex = /**
         * @param {?} value
         * @return {?}
         */
            function (value) {
                if (value > this.lastIndex) {
                    return this.lastIndex;
                }
                else if (value < this.firstIndex) {
                    return this.firstIndex;
                }
                else {
                    return value;
                }
            };
        /**
         * @param {?} page
         * @return {?}
         */
        NzPaginationComponent.prototype.updatePageIndexValue = /**
         * @param {?} page
         * @return {?}
         */
            function (page) {
                this.nzPageIndex = page;
                this.nzPageIndexChange.emit(this.nzPageIndex);
                this.buildIndexes();
            };
        /**
         * @param {?} value
         * @return {?}
         */
        NzPaginationComponent.prototype.isPageIndexValid = /**
         * @param {?} value
         * @return {?}
         */
            function (value) {
                return this.validatePageIndex(value) === value;
            };
        /**
         * @param {?} index
         * @return {?}
         */
        NzPaginationComponent.prototype.jumpPage = /**
         * @param {?} index
         * @return {?}
         */
            function (index) {
                if (index !== this.nzPageIndex) {
                    /** @type {?} */
                    var pageIndex = this.validatePageIndex(index);
                    if (pageIndex !== this.nzPageIndex) {
                        this.updatePageIndexValue(pageIndex);
                    }
                }
            };
        /**
         * @param {?} diff
         * @return {?}
         */
        NzPaginationComponent.prototype.jumpDiff = /**
         * @param {?} diff
         * @return {?}
         */
            function (diff) {
                this.jumpPage(this.nzPageIndex + diff);
            };
        /**
         * @param {?} $event
         * @return {?}
         */
        NzPaginationComponent.prototype.onPageSizeChange = /**
         * @param {?} $event
         * @return {?}
         */
            function ($event) {
                this.nzPageSize = $event;
                this.nzPageSizeChange.emit($event);
                this.buildIndexes();
                if (this.nzPageIndex > this.lastIndex) {
                    this.updatePageIndexValue(this.lastIndex);
                }
            };
        /**
         * @param {?} _
         * @param {?} input
         * @param {?} clearInputValue
         * @return {?}
         */
        NzPaginationComponent.prototype.handleKeyDown = /**
         * @param {?} _
         * @param {?} input
         * @param {?} clearInputValue
         * @return {?}
         */
            function (_, input, clearInputValue) {
                /** @type {?} */
                var target = input;
                /** @type {?} */
                var page = core.toNumber(target.value, this.nzPageIndex);
                if (core.isInteger(page) && this.isPageIndexValid(page) && page !== this.nzPageIndex) {
                    this.updatePageIndexValue(page);
                }
                if (clearInputValue) {
                    target.value = '';
                }
                else {
                    target.value = "" + this.nzPageIndex;
                }
            };
        /** generate indexes list */
        /**
         * generate indexes list
         * @return {?}
         */
        NzPaginationComponent.prototype.buildIndexes = /**
         * generate indexes list
         * @return {?}
         */
            function () {
                /** @type {?} */
                var pages = [];
                if (this.lastIndex <= 9) {
                    for (var i = 2; i <= this.lastIndex - 1; i++) {
                        pages.push(i);
                    }
                }
                else {
                    /** @type {?} */
                    var current = +this.nzPageIndex;
                    /** @type {?} */
                    var left = Math.max(2, current - 2);
                    /** @type {?} */
                    var right = Math.min(current + 2, this.lastIndex - 1);
                    if (current - 1 <= 2) {
                        right = 5;
                    }
                    if (this.lastIndex - current <= 2) {
                        left = this.lastIndex - 4;
                    }
                    for (var i = left; i <= right; i++) {
                        pages.push(i);
                    }
                }
                this.pages = pages;
                this.cdr.markForCheck();
            };
        Object.defineProperty(NzPaginationComponent.prototype, "lastIndex", {
            get: /**
             * @return {?}
             */ function () {
                return Math.ceil(this.nzTotal / this.nzPageSize);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NzPaginationComponent.prototype, "isLastIndex", {
            get: /**
             * @return {?}
             */ function () {
                return this.nzPageIndex === this.lastIndex;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NzPaginationComponent.prototype, "isFirstIndex", {
            get: /**
             * @return {?}
             */ function () {
                return this.nzPageIndex === this.firstIndex;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NzPaginationComponent.prototype, "ranges", {
            get: /**
             * @return {?}
             */ function () {
                return [(this.nzPageIndex - 1) * this.nzPageSize + 1, Math.min(this.nzPageIndex * this.nzPageSize, this.nzTotal)];
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NzPaginationComponent.prototype, "showAddOption", {
            get: /**
             * @return {?}
             */ function () {
                return this.nzPageSizeOptions.indexOf(this.nzPageSize) === -1;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        NzPaginationComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                var _this = this;
                this.i18n.localeChange.pipe(operators.takeUntil(this.$destroy)).subscribe(( /**
                 * @return {?}
                 */function () {
                    _this.locale = _this.i18n.getLocaleData('Pagination');
                    _this.cdr.markForCheck();
                }));
            };
        /**
         * @return {?}
         */
        NzPaginationComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
            function () {
                this.$destroy.next();
                this.$destroy.complete();
            };
        /**
         * @param {?} changes
         * @return {?}
         */
        NzPaginationComponent.prototype.ngOnChanges = /**
         * @param {?} changes
         * @return {?}
         */
            function (changes) {
                if (changes.nzTotal || changes.nzPageSize || changes.nzPageIndex) {
                    this.buildIndexes();
                }
            };
        NzPaginationComponent.decorators = [
            { type: core$1.Component, args: [{
                        selector: 'nz-pagination',
                        exportAs: 'nzPagination',
                        preserveWhitespaces: false,
                        encapsulation: core$1.ViewEncapsulation.None,
                        changeDetection: core$1.ChangeDetectionStrategy.OnPush,
                        template: "<ng-template #renderItemTemplate let-type let-page=\"page\">\r\n  <a class=\"ant-pagination-item-link\" *ngIf=\"type==='pre'\"><i nz-icon type=\"left\"></i></a>\r\n  <a class=\"ant-pagination-item-link\" *ngIf=\"type==='next'\"><i nz-icon type=\"right\"></i></a>\r\n  <a *ngIf=\"type=='page'\">{{ page }}</a>\r\n</ng-template>\r\n<ng-container *ngIf=\"nzHideOnSinglePage && (nzTotal > nzPageSize) || !nzHideOnSinglePage\">\r\n  <ul class=\"ant-pagination\"\r\n    [class.ant-table-pagination]=\"nzInTable\"\r\n    [class.ant-pagination-simple]=\"nzSimple\"\r\n    [class.mini]=\"(nzSize === 'small') && !nzSimple\">\r\n    <ng-container *ngIf=\"nzSimple; else normalTemplate\">\r\n      <li class=\"ant-pagination-prev\"\r\n        [attr.title]=\"locale.prev_page\"\r\n        [class.ant-pagination-disabled]=\"isFirstIndex\"\r\n        (click)=\"jumpDiff(-1)\">\r\n        <ng-template [ngTemplateOutlet]=\"nzItemRender\" [ngTemplateOutletContext]=\"{ $implicit: 'pre'}\"></ng-template>\r\n      </li>\r\n      <li [attr.title]=\"nzPageIndex+'/'+lastIndex\" class=\"ant-pagination-simple-pager\">\r\n        <input #simplePagerInput [value]=\"nzPageIndex\" (keydown.enter)=\"handleKeyDown($event,simplePagerInput,false)\" size=\"3\">\r\n        <span class=\"ant-pagination-slash\">\uFF0F</span>\r\n        {{ lastIndex }}\r\n      </li>\r\n      <li class=\"ant-pagination-next\"\r\n        [attr.title]=\"locale.next_page\"\r\n        [class.ant-pagination-disabled]=\"isLastIndex\"\r\n        (click)=\"jumpDiff(1)\">\r\n        <ng-template [ngTemplateOutlet]=\"nzItemRender\" [ngTemplateOutletContext]=\"{ $implicit: 'next'}\"></ng-template>\r\n      </li>\r\n    </ng-container>\r\n    <ng-template #normalTemplate>\r\n      <li class=\"ant-pagination-total-text\" *ngIf=\"nzShowTotal\">\r\n        <ng-template [ngTemplateOutlet]=\"nzShowTotal\" [ngTemplateOutletContext]=\"{ $implicit: nzTotal,range:ranges }\"></ng-template>\r\n      </li>\r\n      <li class=\"ant-pagination-prev\"\r\n        [attr.title]=\"locale.prev_page\"\r\n        [class.ant-pagination-disabled]=\"isFirstIndex\"\r\n        (click)=\"jumpDiff(-1)\">\r\n        <ng-template [ngTemplateOutlet]=\"nzItemRender\" [ngTemplateOutletContext]=\"{ $implicit: 'pre'}\"></ng-template>\r\n      </li>\r\n      <li class=\"ant-pagination-item\"\r\n        [attr.title]=\"firstIndex\"\r\n        [class.ant-pagination-item-active]=\"isFirstIndex\"\r\n        (click)=\"jumpPage(firstIndex)\">\r\n        <ng-template [ngTemplateOutlet]=\"nzItemRender\" [ngTemplateOutletContext]=\"{ $implicit: 'page',page: firstIndex }\"></ng-template>\r\n      </li>\r\n      <li class=\"ant-pagination-jump-prev\"\r\n        *ngIf=\"(lastIndex > 9) && (nzPageIndex - 3 > firstIndex)\"\r\n        [attr.title]=\"locale.prev_5\"\r\n        (click)=\"jumpDiff(-5)\">\r\n        <a class=\"ant-pagination-item-link\">\r\n          <div class=\"ant-pagination-item-container\">\r\n            <i nz-icon type=\"double-left\" class=\"ant-pagination-item-link-icon\"></i>\r\n            <span class=\"ant-pagination-item-ellipsis\">\u2022\u2022\u2022</span>\r\n          </div>\r\n        </a>\r\n      </li>\r\n      <li class=\"ant-pagination-item\"\r\n        *ngFor=\"let page of pages\"\r\n        [attr.title]=\"page\"\r\n        [class.ant-pagination-item-active]=\"nzPageIndex === page\"\r\n        (click)=\"jumpPage(page)\">\r\n        <ng-template [ngTemplateOutlet]=\"nzItemRender\" [ngTemplateOutletContext]=\"{ $implicit: 'page',page: page }\"></ng-template>\r\n      </li>\r\n      <li class=\"ant-pagination-jump-next ant-pagination-item-link-icon\"\r\n        [attr.title]=\"locale.next_5\"\r\n        (click)=\"jumpDiff(5)\"\r\n        *ngIf=\"(lastIndex > 9) && (nzPageIndex + 3 < lastIndex)\">\r\n        <a class=\"ant-pagination-item-link\">\r\n          <div class=\"ant-pagination-item-container\">\r\n            <i nz-icon type=\"double-right\" class=\"ant-pagination-item-link-icon\"></i>\r\n            <span class=\"ant-pagination-item-ellipsis\">\u2022\u2022\u2022</span>\r\n          </div>\r\n        </a>\r\n      </li>\r\n      <li class=\"ant-pagination-item\"\r\n        [attr.title]=\"lastIndex\"\r\n        (click)=\"jumpPage(lastIndex)\"\r\n        *ngIf=\"(lastIndex > 0) && (lastIndex !== firstIndex)\"\r\n        [class.ant-pagination-item-active]=\"isLastIndex\">\r\n        <ng-template [ngTemplateOutlet]=\"nzItemRender\" [ngTemplateOutletContext]=\"{ $implicit: 'page',page: lastIndex }\"></ng-template>\r\n      </li>\r\n      <li class=\"ant-pagination-next\"\r\n        [title]=\"locale.next_page\"\r\n        [class.ant-pagination-disabled]=\"isLastIndex\"\r\n        (click)=\"jumpDiff(1)\">\r\n        <ng-template [ngTemplateOutlet]=\"nzItemRender\" [ngTemplateOutletContext]=\"{ $implicit: 'next'}\"></ng-template>\r\n      </li>\r\n      <div class=\"ant-pagination-options\" *ngIf=\"nzShowQuickJumper || nzShowSizeChanger\">\r\n        <nz-select class=\"ant-pagination-options-size-changer\"\r\n          *ngIf=\"nzShowSizeChanger\"\r\n          [nzSize]=\"nzSize\"\r\n          [ngModel]=\"nzPageSize\"\r\n          (ngModelChange)=\"onPageSizeChange($event)\">\r\n          <nz-option *ngFor=\"let option of nzPageSizeOptions\"\r\n            [nzLabel]=\"option + locale.items_per_page\"\r\n            [nzValue]=\"option\">\r\n          </nz-option>\r\n          <nz-option *ngIf=\"showAddOption\"\r\n            [nzLabel]=\"nzPageSize + locale.items_per_page\"\r\n            [nzValue]=\"nzPageSize\">\r\n          </nz-option>\r\n        </nz-select>\r\n        <div class=\"ant-pagination-options-quick-jumper\" *ngIf=\"nzShowQuickJumper\">\r\n          {{ locale.jump_to }}\r\n          <input #quickJumperInput (keydown.enter)=\"handleKeyDown($event,quickJumperInput,true)\">\r\n          {{ locale.page }}\r\n        </div>\r\n      </div>\r\n    </ng-template>\r\n  </ul>\r\n</ng-container>"
                    }] }
        ];
        /** @nocollapse */
        NzPaginationComponent.ctorParameters = function () {
            return [
                { type: i18n.NzI18nService },
                { type: core$1.ChangeDetectorRef }
            ];
        };
        NzPaginationComponent.propDecorators = {
            nzPageSizeChange: [{ type: core$1.Output }],
            nzPageIndexChange: [{ type: core$1.Output }],
            nzShowTotal: [{ type: core$1.Input }],
            nzInTable: [{ type: core$1.Input }],
            nzSize: [{ type: core$1.Input }],
            nzPageSizeOptions: [{ type: core$1.Input }],
            nzItemRender: [{ type: core$1.Input }, { type: core$1.ViewChild, args: ['renderItemTemplate',] }],
            nzShowSizeChanger: [{ type: core$1.Input }],
            nzHideOnSinglePage: [{ type: core$1.Input }],
            nzShowQuickJumper: [{ type: core$1.Input }],
            nzSimple: [{ type: core$1.Input }],
            nzTotal: [{ type: core$1.Input }],
            nzPageIndex: [{ type: core$1.Input }],
            nzPageSize: [{ type: core$1.Input }]
        };
        __decorate([
            core.InputBoolean(),
            __metadata("design:type", Object)
        ], NzPaginationComponent.prototype, "nzShowSizeChanger", void 0);
        __decorate([
            core.InputBoolean(),
            __metadata("design:type", Object)
        ], NzPaginationComponent.prototype, "nzHideOnSinglePage", void 0);
        __decorate([
            core.InputBoolean(),
            __metadata("design:type", Object)
        ], NzPaginationComponent.prototype, "nzShowQuickJumper", void 0);
        __decorate([
            core.InputBoolean(),
            __metadata("design:type", Object)
        ], NzPaginationComponent.prototype, "nzSimple", void 0);
        __decorate([
            core.InputNumber(),
            __metadata("design:type", Object)
        ], NzPaginationComponent.prototype, "nzTotal", void 0);
        __decorate([
            core.InputNumber(),
            __metadata("design:type", Object)
        ], NzPaginationComponent.prototype, "nzPageIndex", void 0);
        __decorate([
            core.InputNumber(),
            __metadata("design:type", Object)
        ], NzPaginationComponent.prototype, "nzPageSize", void 0);
        return NzPaginationComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NzPaginationModule = /** @class */ (function () {
        function NzPaginationModule() {
        }
        NzPaginationModule.decorators = [
            { type: core$1.NgModule, args: [{
                        declarations: [NzPaginationComponent],
                        exports: [NzPaginationComponent],
                        imports: [common.CommonModule, forms.FormsModule, select.NzSelectModule, i18n.NzI18nModule, icon.NzIconModule]
                    },] }
        ];
        return NzPaginationModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.NzPaginationComponent = NzPaginationComponent;
    exports.NzPaginationModule = NzPaginationModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=ng-zorro-antd-pagination.umd.js.map