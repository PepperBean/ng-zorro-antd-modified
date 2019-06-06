(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/common'), require('ng-zorro-antd/icon'), require('@angular/core'), require('ng-zorro-antd/core')) :
    typeof define === 'function' && define.amd ? define('ng-zorro-antd/progress', ['exports', '@angular/common', 'ng-zorro-antd/icon', '@angular/core', 'ng-zorro-antd/core'], factory) :
    (factory((global['ng-zorro-antd'] = global['ng-zorro-antd'] || {}, global['ng-zorro-antd'].progress = {}),global.ng.common,global['ng-zorro-antd'].icon,global.ng.core,global['ng-zorro-antd'].core));
}(this, (function (exports,common,icon,core,core$1) { 'use strict';

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
    var NzProgressComponent = /** @class */ (function () {
        function NzProgressComponent() {
            this.nzShowInfo = true;
            this.nzWidth = 132;
            this.nzType = 'line';
            this.nzStrokeLinecap = 'round';
            this.statusColorMap = {
                normal: '#108ee9',
                exception: '#ff5500',
                success: '#87d068'
            };
            this.cachedStatus = 'normal';
            this.inferredStatus = 'normal';
            this.inferredStrokeWidth = 8;
        }
        Object.defineProperty(NzProgressComponent.prototype, "formatter", {
            get: /**
             * @return {?}
             */ function () {
                return this.nzFormat || (( /**
                 * @param {?} p
                 * @return {?}
                 */function (p) { return p + "%"; }));
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NzProgressComponent.prototype, "status", {
            get: /**
             * @return {?}
             */ function () {
                return this.nzStatus || this.inferredStatus;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NzProgressComponent.prototype, "strokeWidth", {
            get: /**
             * @return {?}
             */ function () {
                return this.nzStrokeWidth || this.inferredStrokeWidth;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NzProgressComponent.prototype, "isCircleStyle", {
            get: /**
             * @return {?}
             */ function () {
                return this.nzType === 'circle' || this.nzType === 'dashboard';
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        NzProgressComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                this.updatePathStyles();
                this.updateIcon();
            };
        /**
         * @param {?} changes
         * @return {?}
         */
        NzProgressComponent.prototype.ngOnChanges = /**
         * @param {?} changes
         * @return {?}
         */
            function (changes) {
                var nzGapPosition = changes.nzGapPosition, nzStrokeLinecap = changes.nzStrokeLinecap, nzGapDegree = changes.nzGapDegree, nzType = changes.nzType, nzSize = changes.nzSize, nzStatus = changes.nzStatus, nzPercent = changes.nzPercent, nzSuccessPercent = changes.nzSuccessPercent;
                if (nzGapPosition || nzStrokeLinecap || nzGapDegree || nzType || nzPercent) {
                    this.updatePathStyles();
                }
                if (nzSize) {
                    if (this.nzSize === 'small') {
                        this.inferredStrokeWidth = 6;
                    }
                }
                if (nzStatus) {
                    this.cachedStatus = this.nzStatus || this.cachedStatus;
                    this.updateIcon();
                }
                if (nzPercent || nzSuccessPercent) {
                    /** @type {?} */
                    var fillAll = parseInt(this.nzPercent.toString(), 10) >= 100;
                    if (fillAll) {
                        if ((core$1.isNotNil(this.nzSuccessPercent) && ( /** @type {?} */(this.nzSuccessPercent)) >= 100) || this.nzSuccessPercent === undefined) {
                            this.inferredStatus = 'success';
                        }
                    }
                    else {
                        this.inferredStatus = this.cachedStatus;
                    }
                    this.updateIcon();
                }
                if (nzType) {
                    if (this.nzType !== 'line') {
                        this.inferredStrokeWidth = 6;
                    }
                    if (this.nzType === 'dashboard') {
                        this.inferredGapPosition = 'bottom';
                        this.inferredGapDegree = 75;
                    }
                    if (this.nzType === 'circle') {
                        this.inferredGapDegree = 0;
                    }
                }
            };
        /**
         * @return {?}
         */
        NzProgressComponent.prototype.updatePathStyles = /**
         * @return {?}
         */
            function () {
                /** @type {?} */
                var radius = 50 - this.strokeWidth / 2;
                /** @type {?} */
                var gapPosition = this.nzGapPosition || this.inferredGapPosition;
                /** @type {?} */
                var beginPositionX = 0;
                /** @type {?} */
                var beginPositionY = -radius;
                /** @type {?} */
                var endPositionX = 0;
                /** @type {?} */
                var endPositionY = radius * -2;
                switch (gapPosition) {
                    case 'left':
                        beginPositionX = -radius;
                        beginPositionY = 0;
                        endPositionX = radius * 2;
                        endPositionY = 0;
                        break;
                    case 'right':
                        beginPositionX = radius;
                        beginPositionY = 0;
                        endPositionX = radius * -2;
                        endPositionY = 0;
                        break;
                    case 'bottom':
                        beginPositionY = radius;
                        endPositionY = radius * 2;
                        break;
                    default:
                }
                this.pathString = "M 50,50 m " + beginPositionX + "," + beginPositionY + "\n     a " + radius + "," + radius + " 0 1 1 " + endPositionX + "," + -endPositionY + "\n     a " + radius + "," + radius + " 0 1 1 " + -endPositionX + "," + endPositionY;
                /** @type {?} */
                var len = Math.PI * 2 * radius;
                /** @type {?} */
                var gapDegree = this.nzGapDegree || this.inferredGapDegree;
                this.trailPathStyle = {
                    strokeDasharray: len - gapDegree + "px " + len + "px",
                    strokeDashoffset: "-" + gapDegree / 2 + "px",
                    transition: 'stroke-dashoffset .3s ease 0s, stroke-dasharray .3s ease 0s, stroke .3s'
                };
                this.strokePathStyle = {
                    stroke: this.nzStrokeColor || (( /** @type {?} */(null))),
                    // tslint:disable-line:no-any
                    strokeDasharray: (this.nzPercent / 100) * (len - gapDegree) + "px " + len + "px",
                    strokeDashoffset: "-" + gapDegree / 2 + "px",
                    transition: 'stroke-dashoffset .3s ease 0s, stroke-dasharray .3s ease 0s, stroke .3s, stroke-width .06s ease .3s'
                };
            };
        /**
         * @return {?}
         */
        NzProgressComponent.prototype.updateIcon = /**
         * @return {?}
         */
            function () {
                /** @type {?} */
                var isCircle = this.nzType === 'circle' || this.nzType === 'dashboard';
                /** @type {?} */
                var ret = this.status === 'success' ? 'check' : this.status === 'exception' ? 'close' : '';
                this.icon = ret ? ret + (isCircle ? '-o' : '-circle-fill') : '';
            };
        NzProgressComponent.decorators = [
            { type: core.Component, args: [{
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        encapsulation: core.ViewEncapsulation.None,
                        selector: 'nz-progress',
                        exportAs: 'nzProgress',
                        preserveWhitespaces: false,
                        template: "<ng-template #progressInfoTemplate>\r\n  <span class=\"ant-progress-text\" *ngIf=\"nzShowInfo\">\r\n    <ng-container *ngIf=\"status === 'exception' || (status === 'success' && !nzFormat); else formatTemplate\">\r\n      <i nz-icon [nzType]=\"icon\"></i>\r\n    </ng-container>\r\n    <ng-template #formatTemplate>\r\n      {{ formatter(nzPercent) }}\r\n    </ng-template>\r\n  </span>\r\n</ng-template>\r\n<div\r\n  [ngClass]=\"'ant-progress ant-progress-status-' + status\"\r\n  [class.ant-progress-line]=\"nzType == 'line'\"\r\n  [class.ant-progress-small]=\"nzSize == 'small'\"\r\n  [class.ant-progress-show-info]=\"nzShowInfo\"\r\n  [class.ant-progress-circle]=\"isCircleStyle\"\r\n>\r\n  <!-- Line progress -->\r\n  <div *ngIf=\"nzType === 'line'\">\r\n    <div class=\"ant-progress-outer\">\r\n      <div class=\"ant-progress-inner\">\r\n        <div\r\n          class=\"ant-progress-bg\"\r\n          [style.width.%]=\"nzPercent\"\r\n          [style.border-radius]=\"nzStrokeLinecap === 'round' ? '100px' : '0'\"\r\n          [style.background]=\"nzStrokeColor\"\r\n          [style.height.px]=\"strokeWidth\"\r\n        ></div>\r\n        <div\r\n          class=\"ant-progress-success-bg\"\r\n          [style.width.%]=\"nzSuccessPercent\"\r\n          [style.border-radius]=\"nzStrokeLinecap === 'round' ? '100px' : '0'\"\r\n          [style.height.px]=\"strokeWidth\"\r\n        ></div>\r\n      </div>\r\n    </div>\r\n    <ng-template [ngTemplateOutlet]=\"progressInfoTemplate\"></ng-template>\r\n  </div>\r\n  <!-- Circle/Dashboard progress -->\r\n  <div\r\n    [style.width.px]=\"this.nzWidth\"\r\n    [style.height.px]=\"this.nzWidth\"\r\n    [style.fontSize.px]=\"this.nzWidth * 0.15 + 6\"\r\n    class=\"ant-progress-inner\"\r\n    *ngIf=\"isCircleStyle\"\r\n  >\r\n    <svg class=\"ant-progress-circle \" viewBox=\"0 0 100 100\">\r\n      <path\r\n        class=\"ant-progress-circle-trail\"\r\n        stroke=\"#f3f3f3\"\r\n        fill-opacity=\"0\"\r\n        [attr.stroke-width]=\"strokeWidth\"\r\n        [ngStyle]=\"trailPathStyle\"\r\n        [attr.d]=\"pathString\"\r\n      ></path>\r\n      <path\r\n        class=\"ant-progress-circle-path\"\r\n        [attr.d]=\"pathString\"\r\n        [attr.stroke-linecap]=\"nzStrokeLinecap\"\r\n        fill-opacity=\"0\"\r\n        [attr.stroke]=\"nzStrokeColor || statusColorMap[status]\"\r\n        [attr.stroke-width]=\"nzPercent ? strokeWidth : 0\"\r\n        [ngStyle]=\"strokePathStyle\"\r\n      ></path>\r\n    </svg>\r\n    <ng-template [ngTemplateOutlet]=\"progressInfoTemplate\"></ng-template>\r\n  </div>\r\n</div>\r\n"
                    }] }
        ];
        NzProgressComponent.propDecorators = {
            nzShowInfo: [{ type: core.Input }],
            nzWidth: [{ type: core.Input }],
            nzStrokeColor: [{ type: core.Input }],
            nzSize: [{ type: core.Input }],
            nzFormat: [{ type: core.Input }],
            nzSuccessPercent: [{ type: core.Input }],
            nzPercent: [{ type: core.Input }],
            nzStrokeWidth: [{ type: core.Input }],
            nzGapDegree: [{ type: core.Input }],
            nzStatus: [{ type: core.Input }],
            nzType: [{ type: core.Input }],
            nzGapPosition: [{ type: core.Input }],
            nzStrokeLinecap: [{ type: core.Input }]
        };
        __decorate([
            core$1.InputNumber(),
            __metadata("design:type", Number)
        ], NzProgressComponent.prototype, "nzSuccessPercent", void 0);
        __decorate([
            core$1.InputNumber(),
            __metadata("design:type", Number)
        ], NzProgressComponent.prototype, "nzPercent", void 0);
        __decorate([
            core$1.InputNumber(),
            __metadata("design:type", Number)
        ], NzProgressComponent.prototype, "nzStrokeWidth", void 0);
        __decorate([
            core$1.InputNumber(),
            __metadata("design:type", Number)
        ], NzProgressComponent.prototype, "nzGapDegree", void 0);
        return NzProgressComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NzProgressModule = /** @class */ (function () {
        function NzProgressModule() {
        }
        NzProgressModule.decorators = [
            { type: core.NgModule, args: [{
                        exports: [NzProgressComponent],
                        declarations: [NzProgressComponent],
                        imports: [common.CommonModule, icon.NzIconModule]
                    },] }
        ];
        return NzProgressModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.NzProgressModule = NzProgressModule;
    exports.NzProgressComponent = NzProgressComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=ng-zorro-antd-progress.umd.js.map