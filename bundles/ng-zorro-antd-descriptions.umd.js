(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/common'), require('@angular/cdk/layout'), require('@angular/cdk/platform'), require('@angular/core'), require('rxjs'), require('rxjs/operators'), require('ng-zorro-antd/core')) :
    typeof define === 'function' && define.amd ? define('ng-zorro-antd/descriptions', ['exports', '@angular/common', '@angular/cdk/layout', '@angular/cdk/platform', '@angular/core', 'rxjs', 'rxjs/operators', 'ng-zorro-antd/core'], factory) :
    (factory((global['ng-zorro-antd'] = global['ng-zorro-antd'] || {}, global['ng-zorro-antd'].descriptions = {}),global.ng.common,global.ng.cdk.layout,global.ng.cdk.platform,global.ng.core,global.rxjs,global.rxjs.operators,global['ng-zorro-antd'].core));
}(this, (function (exports,common,layout,platform,core,rxjs,operators,core$1) { 'use strict';

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
    var NzDescriptionsItemComponent = /** @class */ (function () {
        function NzDescriptionsItemComponent() {
            this.nzSpan = 1;
            this.nzTitle = '';
        }
        NzDescriptionsItemComponent.decorators = [
            { type: core.Component, args: [{
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        encapsulation: core.ViewEncapsulation.None,
                        selector: 'nz-descriptions-item',
                        template: "<!-- Use a template to wrap contents so contents wouldn't be displayed. -->\r\n<ng-template>\r\n  <ng-content></ng-content>\r\n</ng-template>\r\n",
                        exportAs: 'nzDescriptionsItem',
                        preserveWhitespaces: false
                    }] }
        ];
        NzDescriptionsItemComponent.propDecorators = {
            content: [{ type: core.ViewChild, args: [core.TemplateRef,] }],
            nzSpan: [{ type: core.Input }],
            nzTitle: [{ type: core.Input }]
        };
        __decorate([
            core$1.InputNumber(),
            __metadata("design:type", Object)
        ], NzDescriptionsItemComponent.prototype, "nzSpan", void 0);
        return NzDescriptionsItemComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var defaultColumnMap = {
        xxl: 3,
        xl: 3,
        lg: 3,
        md: 3,
        sm: 2,
        xs: 1
    };
    var NzDescriptionsComponent = /** @class */ (function () {
        function NzDescriptionsComponent(cdr, ngZone, mediaMatcher, platform$$1) {
            this.cdr = cdr;
            this.ngZone = ngZone;
            this.mediaMatcher = mediaMatcher;
            this.platform = platform$$1;
            this.nzBordered = false;
            this.nzColumn = defaultColumnMap;
            this.nzSize = 'default';
            this.nzTitle = '';
            this.itemMatrix = [];
            this.realColumn = 3;
            this.destroy$ = new rxjs.Subject();
            this.resize$ = new rxjs.Subject();
        }
        /**
         * @param {?} changes
         * @return {?}
         */
        NzDescriptionsComponent.prototype.ngOnChanges = /**
         * @param {?} changes
         * @return {?}
         */
            function (changes) {
                if (changes.nzColumn) {
                    this.resize$.next();
                }
            };
        /**
         * @return {?}
         */
        NzDescriptionsComponent.prototype.ngAfterContentInit = /**
         * @return {?}
         */
            function () {
                var _this = this;
                rxjs.merge(this.items.changes.pipe(operators.startWith(this.items), operators.takeUntil(this.destroy$)), this.resize$)
                    .pipe(operators.takeUntil(this.destroy$))
                    .subscribe(( /**
             * @return {?}
             */function () {
                    _this.prepareMatrix();
                    _this.cdr.markForCheck();
                }));
                if (this.platform.isBrowser) {
                    this.ngZone.runOutsideAngular(( /**
                     * @return {?}
                     */function () {
                        rxjs.fromEvent(window, 'resize')
                            .pipe(operators.auditTime(16), operators.takeUntil(_this.destroy$))
                            .subscribe(( /**
                     * @return {?}
                     */function () {
                            _this.ngZone.run(( /**
                             * @return {?}
                             */function () {
                                _this.resize$.next();
                            }));
                        }));
                    }));
                }
            };
        /**
         * @return {?}
         */
        NzDescriptionsComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
            function () {
                this.destroy$.next();
                this.destroy$.complete();
                this.resize$.complete();
            };
        /**
         * Prepare the render matrix according to description items' spans.
         */
        /**
         * Prepare the render matrix according to description items' spans.
         * @private
         * @return {?}
         */
        NzDescriptionsComponent.prototype.prepareMatrix = /**
         * Prepare the render matrix according to description items' spans.
         * @private
         * @return {?}
         */
            function () {
                /** @type {?} */
                var currentRow = [];
                /** @type {?} */
                var width = 0;
                /** @type {?} */
                var column = (this.realColumn = this.getColumn());
                /** @type {?} */
                var items = this.items.toArray();
                /** @type {?} */
                var matrix = [];
                /** @type {?} */
                var flushRow = ( /**
                 * @return {?}
                 */function () {
                    matrix.push(currentRow);
                    currentRow = [];
                    width = 0;
                });
                items.forEach(( /**
                 * @param {?} item
                 * @return {?}
                 */function (item) {
                    var title = item.nzTitle, content = item.content, span = item.nzSpan;
                    currentRow.push({ title: title, content: content, span: span });
                    width += span;
                    // If the last item make the row's length exceeds `nzColumn`, the last
                    // item should take all the space left. This logic is implemented in the template.
                    // Warn user about that.
                    if (width >= column) {
                        if (width > column && core.isDevMode()) {
                            console.warn("\"nzColumn\" is " + column + " but we have row length " + width);
                        }
                        flushRow();
                    }
                }));
                if (currentRow.length) {
                    flushRow();
                }
                this.itemMatrix = matrix;
            };
        /**
         * @private
         * @return {?}
         */
        NzDescriptionsComponent.prototype.matchMedia = /**
         * @private
         * @return {?}
         */
            function () {
                var _this = this;
                /** @type {?} */
                var bp = core$1.Breakpoint.md;
                Object.keys(core$1.responsiveMap).map(( /**
                 * @param {?} breakpoint
                 * @return {?}
                 */function (breakpoint) {
                    /** @type {?} */
                    var castBP = ( /** @type {?} */(breakpoint));
                    /** @type {?} */
                    var matchBelow = _this.mediaMatcher.matchMedia(core$1.responsiveMap[castBP]).matches;
                    if (matchBelow) {
                        bp = castBP;
                    }
                }));
                return bp;
            };
        /**
         * @private
         * @return {?}
         */
        NzDescriptionsComponent.prototype.getColumn = /**
         * @private
         * @return {?}
         */
            function () {
                if (typeof this.nzColumn !== 'number') {
                    return this.nzColumn[this.matchMedia()];
                }
                return this.nzColumn;
            };
        NzDescriptionsComponent.decorators = [
            { type: core.Component, args: [{
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        encapsulation: core.ViewEncapsulation.None,
                        selector: 'nz-descriptions',
                        template: "<div *ngIf=\"nzTitle\"\r\n     class=\"ant-descriptions-title\">\r\n  <ng-container *nzStringTemplateOutlet=\"nzTitle\">{{ nzTitle }}</ng-container>\r\n</div>\r\n<div class=\"ant-descriptions-view\">\r\n  <table>\r\n    <tbody>\r\n      <tr class=\"ant-descriptions-row\"\r\n          *ngFor=\"let row of itemMatrix; let i = index\">\r\n        <ng-container *ngFor=\"let item of row; let isLast = last\">\r\n          <ng-container *ngIf=\"!nzBordered\">\r\n            <td class=\"ant-descriptions-item\"\r\n                [colSpan]=\"isLast ? (realColumn - (row.length - 1)) * 2 - 1 : item.span\">\r\n              <span class=\"ant-descriptions-item-label\">{{ item.title }}</span>\r\n              <span class=\"ant-descriptions-item-content\">\r\n                <ng-template [ngTemplateOutlet]=\"item.content\"></ng-template>\r\n              </span>\r\n            </td>\r\n          </ng-container>\r\n          <ng-container *ngIf=\"nzBordered\">\r\n            <td class=\"ant-descriptions-item-label\"\r\n                *nzStringTemplateOutlet=\"item.title\">{{ item.title }}</td>\r\n            <td class=\"ant-descriptions-item-content\"\r\n                [colSpan]=\"isLast ? (realColumn - (row.length - 1)) * 2 - 1 : item.span\">\r\n              <ng-template [ngTemplateOutlet]=\"item.content\"></ng-template>\r\n            </td>\r\n          </ng-container>\r\n        </ng-container>\r\n      </tr>\r\n    </tbody>\r\n\r\n  </table>\r\n</div>\r\n",
                        exportAs: 'nzDescriptions',
                        preserveWhitespaces: false,
                        host: {
                            class: 'ant-descriptions',
                            '[class.bordered]': 'nzBordered',
                            '[class.middle]': 'nzSize === "middle"',
                            '[class.small]': 'nzSize === "small"'
                        },
                        styles: ["\n      nz-descriptions {\n        display: block;\n      }\n    "]
                    }] }
        ];
        /** @nocollapse */
        NzDescriptionsComponent.ctorParameters = function () {
            return [
                { type: core.ChangeDetectorRef },
                { type: core.NgZone },
                { type: layout.MediaMatcher },
                { type: platform.Platform }
            ];
        };
        NzDescriptionsComponent.propDecorators = {
            items: [{ type: core.ContentChildren, args: [NzDescriptionsItemComponent,] }],
            nzBordered: [{ type: core.Input }],
            nzColumn: [{ type: core.Input }],
            nzSize: [{ type: core.Input }],
            nzTitle: [{ type: core.Input }]
        };
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Object)
        ], NzDescriptionsComponent.prototype, "nzBordered", void 0);
        return NzDescriptionsComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NzDescriptionsModule = /** @class */ (function () {
        function NzDescriptionsModule() {
        }
        NzDescriptionsModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [common.CommonModule, core$1.NzAddOnModule],
                        declarations: [NzDescriptionsComponent, NzDescriptionsItemComponent],
                        exports: [NzDescriptionsComponent, NzDescriptionsItemComponent]
                    },] }
        ];
        return NzDescriptionsModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.NzDescriptionsModule = NzDescriptionsModule;
    exports.NzDescriptionsComponent = NzDescriptionsComponent;
    exports.NzDescriptionsItemComponent = NzDescriptionsItemComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=ng-zorro-antd-descriptions.umd.js.map