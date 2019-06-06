(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/common'), require('@angular/core'), require('ng-zorro-antd/core'), require('ng-zorro-antd/icon')) :
    typeof define === 'function' && define.amd ? define('ng-zorro-antd/alert', ['exports', '@angular/common', '@angular/core', 'ng-zorro-antd/core', 'ng-zorro-antd/icon'], factory) :
    (factory((global['ng-zorro-antd'] = global['ng-zorro-antd'] || {}, global['ng-zorro-antd'].alert = {}),global.ng.common,global.ng.core,global['ng-zorro-antd'].core,global['ng-zorro-antd'].icon));
}(this, (function (exports,common,core,core$1,icon) { 'use strict';

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
    var NzAlertComponent = /** @class */ (function () {
        function NzAlertComponent() {
            this.destroy = false;
            this.iconType = 'info-circle';
            this.iconTheme = 'fill';
            this.isTypeSet = false;
            this.isShowIconSet = false;
            this.nzType = 'info';
            this.nzCloseable = false;
            this.nzShowIcon = false;
            this.nzBanner = false;
            this.nzOnClose = new core.EventEmitter();
        }
        /**
         * @return {?}
         */
        NzAlertComponent.prototype.closeAlert = /**
         * @return {?}
         */
            function () {
                this.destroy = true;
            };
        /**
         * @return {?}
         */
        NzAlertComponent.prototype.onFadeAnimationDone = /**
         * @return {?}
         */
            function () {
                if (this.destroy) {
                    this.nzOnClose.emit(true);
                }
            };
        /**
         * @return {?}
         */
        NzAlertComponent.prototype.updateIconClassMap = /**
         * @return {?}
         */
            function () {
                switch (this.nzType) {
                    case 'error':
                        this.iconType = 'close-circle';
                        break;
                    case 'success':
                        this.iconType = 'check-circle';
                        break;
                    case 'info':
                        this.iconType = 'info-circle';
                        break;
                    case 'warning':
                        this.iconType = 'exclamation-circle';
                        break;
                }
                this.iconTheme = this.nzDescription ? 'outline' : 'fill';
            };
        /**
         * @param {?} changes
         * @return {?}
         */
        NzAlertComponent.prototype.ngOnChanges = /**
         * @param {?} changes
         * @return {?}
         */
            function (changes) {
                var nzShowIcon = changes.nzShowIcon, nzDescription = changes.nzDescription, nzType = changes.nzType, nzBanner = changes.nzBanner;
                if (nzShowIcon) {
                    this.isShowIconSet = true;
                }
                if (nzDescription || nzType) {
                    this.updateIconClassMap();
                }
                if (nzType) {
                    this.isTypeSet = true;
                }
                if (nzBanner) {
                    if (!this.isTypeSet) {
                        this.nzType = 'warning';
                    }
                    if (!this.isShowIconSet) {
                        this.nzShowIcon = true;
                    }
                }
            };
        NzAlertComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'nz-alert',
                        exportAs: 'nzAlert',
                        animations: [core$1.slideAlertMotion],
                        template: "<div *ngIf=\"!destroy\"\r\n  class=\"ant-alert\"\r\n  [class.ant-alert-success]=\"nzType === 'success'\"\r\n  [class.ant-alert-info]=\"nzType === 'info'\"\r\n  [class.ant-alert-warning]=\"nzType === 'warning'\"\r\n  [class.ant-alert-error]=\"nzType === 'error'\"\r\n  [class.ant-alert-no-icon]=\"!nzShowIcon\"\r\n  [class.ant-alert-banner]=\"nzBanner\"\r\n  [class.ant-alert-closable]=\"nzCloseable\"\r\n  [class.ant-alert-with-description]=\"!!nzDescription\"\r\n  [@slideAlertMotion]\r\n  (@slideAlertMotion.done)=\"onFadeAnimationDone()\">\r\n  <ng-container *ngIf=\"nzShowIcon\">\r\n    <i class=\"ant-alert-icon\" [ngClass]=\"nzIconType\" *ngIf=\"nzIconType; else iconTemplate\"></i>\r\n    <ng-template #iconTemplate>\r\n      <i nz-icon class=\"ant-alert-icon\" [type]=\"iconType\" [theme]=\"iconTheme\"></i>\r\n    </ng-template>\r\n  </ng-container>\r\n  <span class=\"ant-alert-message\" *ngIf=\"nzMessage\">\r\n    <ng-container *nzStringTemplateOutlet=\"nzMessage\">{{ nzMessage }}</ng-container>\r\n  </span>\r\n  <span class=\"ant-alert-description\" *ngIf=\"nzDescription\">\r\n    <ng-container *nzStringTemplateOutlet=\"nzDescription\">{{ nzDescription }}</ng-container>\r\n  </span>\r\n  <a *ngIf=\"nzCloseable || nzCloseText\"\r\n    class=\"ant-alert-close-icon\"\r\n    (click)=\"closeAlert()\">\r\n    <ng-template #closeDefaultTemplate>\r\n      <i nz-icon type=\"close\" class=\"anticon-close\"></i>\r\n    </ng-template>\r\n    <ng-container *ngIf=\"nzCloseText; else closeDefaultTemplate\">\r\n      <ng-container *nzStringTemplateOutlet=\"nzCloseText\">{{ nzCloseText }}</ng-container>\r\n    </ng-container>\r\n  </a>\r\n</div>",
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        encapsulation: core.ViewEncapsulation.None,
                        preserveWhitespaces: false,
                        styles: ["\n      nz-alert {\n        display: block;\n      }\n    "]
                    }] }
        ];
        NzAlertComponent.propDecorators = {
            nzCloseText: [{ type: core.Input }],
            nzIconType: [{ type: core.Input }],
            nzMessage: [{ type: core.Input }],
            nzDescription: [{ type: core.Input }],
            nzType: [{ type: core.Input }],
            nzCloseable: [{ type: core.Input }],
            nzShowIcon: [{ type: core.Input }],
            nzBanner: [{ type: core.Input }],
            nzOnClose: [{ type: core.Output }]
        };
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Object)
        ], NzAlertComponent.prototype, "nzCloseable", void 0);
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Object)
        ], NzAlertComponent.prototype, "nzShowIcon", void 0);
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Object)
        ], NzAlertComponent.prototype, "nzBanner", void 0);
        return NzAlertComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NzAlertModule = /** @class */ (function () {
        function NzAlertModule() {
        }
        NzAlertModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: [NzAlertComponent],
                        exports: [NzAlertComponent],
                        imports: [common.CommonModule, icon.NzIconModule, core$1.NzAddOnModule]
                    },] }
        ];
        return NzAlertModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.NzAlertComponent = NzAlertComponent;
    exports.NzAlertModule = NzAlertModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=ng-zorro-antd-alert.umd.js.map