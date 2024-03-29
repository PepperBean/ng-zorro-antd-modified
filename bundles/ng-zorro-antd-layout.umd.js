(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('rxjs'), require('rxjs/operators'), require('ng-zorro-antd/core'), require('@angular/cdk/layout'), require('@angular/cdk/platform'), require('@angular/common'), require('@angular/core'), require('ng-zorro-antd/icon')) :
    typeof define === 'function' && define.amd ? define('ng-zorro-antd/layout', ['exports', 'rxjs', 'rxjs/operators', 'ng-zorro-antd/core', '@angular/cdk/layout', '@angular/cdk/platform', '@angular/common', '@angular/core', 'ng-zorro-antd/icon'], factory) :
    (factory((global['ng-zorro-antd'] = global['ng-zorro-antd'] || {}, global['ng-zorro-antd'].layout = {}),global.rxjs,global.rxjs.operators,global['ng-zorro-antd'].core,global.ng.cdk.layout,global.ng.cdk.platform,global.ng.common,global.ng.core,global['ng-zorro-antd'].icon));
}(this, (function (exports,rxjs,operators,core,layout,platform,common,core$1,icon) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NzContentComponent = /** @class */ (function () {
        function NzContentComponent(elementRef, renderer) {
            this.elementRef = elementRef;
            this.renderer = renderer;
            this.renderer.addClass(this.elementRef.nativeElement, 'ant-layout-content');
        }
        NzContentComponent.decorators = [
            { type: core$1.Component, args: [{
                        selector: 'nz-content',
                        exportAs: 'nzContent',
                        preserveWhitespaces: false,
                        changeDetection: core$1.ChangeDetectionStrategy.OnPush,
                        encapsulation: core$1.ViewEncapsulation.None,
                        template: "<ng-content></ng-content>",
                        styles: ["\n      nz-content {\n        display: block;\n      }\n    "]
                    }] }
        ];
        /** @nocollapse */
        NzContentComponent.ctorParameters = function () {
            return [
                { type: core$1.ElementRef },
                { type: core$1.Renderer2 }
            ];
        };
        return NzContentComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NzFooterComponent = /** @class */ (function () {
        function NzFooterComponent(elementRef, renderer) {
            this.elementRef = elementRef;
            this.renderer = renderer;
            this.renderer.addClass(this.elementRef.nativeElement, 'ant-layout-footer');
        }
        NzFooterComponent.decorators = [
            { type: core$1.Component, args: [{
                        selector: 'nz-footer',
                        exportAs: 'nzFooter',
                        preserveWhitespaces: false,
                        encapsulation: core$1.ViewEncapsulation.None,
                        changeDetection: core$1.ChangeDetectionStrategy.OnPush,
                        template: "<ng-content></ng-content>",
                        styles: ["\n      nz-footer {\n        display: block;\n      }\n    "]
                    }] }
        ];
        /** @nocollapse */
        NzFooterComponent.ctorParameters = function () {
            return [
                { type: core$1.ElementRef },
                { type: core$1.Renderer2 }
            ];
        };
        return NzFooterComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NzHeaderComponent = /** @class */ (function () {
        function NzHeaderComponent(elementRef, renderer) {
            this.elementRef = elementRef;
            this.renderer = renderer;
            this.renderer.addClass(this.elementRef.nativeElement, 'ant-layout-header');
        }
        NzHeaderComponent.decorators = [
            { type: core$1.Component, args: [{
                        selector: 'nz-header',
                        exportAs: 'nzHeader',
                        changeDetection: core$1.ChangeDetectionStrategy.OnPush,
                        encapsulation: core$1.ViewEncapsulation.None,
                        preserveWhitespaces: false,
                        template: "<ng-content></ng-content>",
                        styles: ["\n      nz-header {\n        display: block;\n      }\n    "]
                    }] }
        ];
        /** @nocollapse */
        NzHeaderComponent.ctorParameters = function () {
            return [
                { type: core$1.ElementRef },
                { type: core$1.Renderer2 }
            ];
        };
        return NzHeaderComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NzLayoutComponent = /** @class */ (function () {
        function NzLayoutComponent(elementRef, renderer) {
            this.elementRef = elementRef;
            this.renderer = renderer;
            renderer.addClass(elementRef.nativeElement, 'ant-layout');
        }
        /**
         * @return {?}
         */
        NzLayoutComponent.prototype.destroySider = /**
         * @return {?}
         */
            function () {
                this.renderer.removeClass(this.elementRef.nativeElement, 'ant-layout-has-sider');
            };
        /**
         * @return {?}
         */
        NzLayoutComponent.prototype.initSider = /**
         * @return {?}
         */
            function () {
                this.renderer.addClass(this.elementRef.nativeElement, 'ant-layout-has-sider');
            };
        NzLayoutComponent.decorators = [
            { type: core$1.Component, args: [{
                        selector: 'nz-layout',
                        exportAs: 'nzLayout',
                        encapsulation: core$1.ViewEncapsulation.None,
                        changeDetection: core$1.ChangeDetectionStrategy.OnPush,
                        preserveWhitespaces: false,
                        template: "<ng-content></ng-content>"
                    }] }
        ];
        /** @nocollapse */
        NzLayoutComponent.ctorParameters = function () {
            return [
                { type: core$1.ElementRef },
                { type: core$1.Renderer2 }
            ];
        };
        return NzLayoutComponent;
    }());

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
    var NzSiderComponent = /** @class */ (function () {
        function NzSiderComponent(nzLayoutComponent, mediaMatcher, ngZone, platform$$1, cdr, renderer, elementRef) {
            this.nzLayoutComponent = nzLayoutComponent;
            this.mediaMatcher = mediaMatcher;
            this.ngZone = ngZone;
            this.platform = platform$$1;
            this.cdr = cdr;
            this.below = false;
            this.destroy$ = new rxjs.Subject();
            this.dimensionMap = {
                xs: '480px',
                sm: '576px',
                md: '768px',
                lg: '992px',
                xl: '1200px',
                xxl: '1600px'
            };
            this.nzWidth = 200;
            this.nzTheme = 'dark';
            this.nzCollapsedWidth = 80;
            this.nzReverseArrow = false;
            this.nzCollapsible = false;
            this.nzCollapsed = false;
            this.nzCollapsedChange = new core$1.EventEmitter();
            renderer.addClass(elementRef.nativeElement, 'ant-layout-sider');
        }
        Object.defineProperty(NzSiderComponent.prototype, "flexSetting", {
            get: /**
             * @return {?}
             */ function () {
                return "0 0 " + this.widthSetting;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NzSiderComponent.prototype, "widthSetting", {
            get: /**
             * @return {?}
             */ function () {
                if (this.nzCollapsed) {
                    return this.nzCollapsedWidth + "px";
                }
                else {
                    return core.toCssPixel(this.nzWidth);
                }
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        NzSiderComponent.prototype.watchMatchMedia = /**
         * @return {?}
         */
            function () {
                var _this = this;
                if (this.nzBreakpoint) {
                    /** @type {?} */
                    var matchBelow = this.mediaMatcher.matchMedia("(max-width: " + this.dimensionMap[this.nzBreakpoint] + ")").matches;
                    this.below = matchBelow;
                    this.nzCollapsed = matchBelow;
                    this.nzCollapsedChange.emit(matchBelow);
                    this.ngZone.run(( /**
                     * @return {?}
                     */function () {
                        _this.cdr.markForCheck();
                    }));
                }
            };
        /**
         * @return {?}
         */
        NzSiderComponent.prototype.toggleCollapse = /**
         * @return {?}
         */
            function () {
                this.nzCollapsed = !this.nzCollapsed;
                this.nzCollapsedChange.emit(this.nzCollapsed);
            };
        Object.defineProperty(NzSiderComponent.prototype, "isZeroTrigger", {
            get: /**
             * @return {?}
             */ function () {
                return (this.nzCollapsible &&
                    this.nzTrigger &&
                    this.nzCollapsedWidth === 0 &&
                    ((this.nzBreakpoint && this.below) || !this.nzBreakpoint));
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NzSiderComponent.prototype, "isSiderTrigger", {
            get: /**
             * @return {?}
             */ function () {
                return this.nzCollapsible && this.nzTrigger && this.nzCollapsedWidth !== 0;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        NzSiderComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                if (this.nzLayoutComponent) {
                    this.nzLayoutComponent.initSider();
                }
            };
        /**
         * @return {?}
         */
        NzSiderComponent.prototype.ngAfterViewInit = /**
         * @return {?}
         */
            function () {
                var _this = this;
                if (this.platform.isBrowser) {
                    Promise.resolve().then(( /**
                     * @return {?}
                     */function () { return _this.watchMatchMedia(); }));
                    this.ngZone.runOutsideAngular(( /**
                     * @return {?}
                     */function () {
                        rxjs.fromEvent(window, 'resize')
                            .pipe(operators.auditTime(16), operators.takeUntil(_this.destroy$))
                            .subscribe(( /**
                     * @return {?}
                     */function () { return _this.watchMatchMedia(); }));
                    }));
                }
            };
        /**
         * @return {?}
         */
        NzSiderComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
            function () {
                this.destroy$.next();
                this.destroy$.complete();
                if (this.nzLayoutComponent) {
                    this.nzLayoutComponent.destroySider();
                }
            };
        NzSiderComponent.decorators = [
            { type: core$1.Component, args: [{
                        selector: 'nz-sider',
                        exportAs: 'nzSider',
                        preserveWhitespaces: false,
                        encapsulation: core$1.ViewEncapsulation.None,
                        changeDetection: core$1.ChangeDetectionStrategy.OnPush,
                        template: "<div class=\"ant-layout-sider-children\">\r\n  <ng-content></ng-content>\r\n</div>\r\n<span class=\"ant-layout-sider-zero-width-trigger\" *ngIf=\"isZeroTrigger\" (click)=\"toggleCollapse()\">\r\n  <ng-template [ngTemplateOutlet]=\"nzZeroTrigger || zeroTrigger\"></ng-template>\r\n</span>\r\n<div class=\"ant-layout-sider-trigger\"\r\n  *ngIf=\"isSiderTrigger\"\r\n  (click)=\"toggleCollapse()\"\r\n  [style.width]=\"widthSetting\">\r\n  <ng-template [ngTemplateOutlet]=\"nzTrigger\"></ng-template>\r\n</div>\r\n<ng-template #defaultTrigger>\r\n  <i nz-icon [type]=\"nzCollapsed ? 'right' : 'left'\" *ngIf=\"!nzReverseArrow\"></i>\r\n  <i nz-icon [type]=\"nzCollapsed ? 'left' : 'right'\" *ngIf=\"nzReverseArrow\"></i>\r\n</ng-template>\r\n<ng-template #zeroTrigger>\r\n  <i nz-icon type=\"bars\"></i>\r\n</ng-template>",
                        host: {
                            '[class.ant-layout-sider-zero-width]': 'nzCollapsed && nzCollapsedWidth === 0',
                            '[class.ant-layout-sider-light]': "nzTheme === 'light'",
                            '[class.ant-layout-sider-collapsed]': 'nzCollapsed',
                            '[style.flex]': 'flexSetting',
                            '[style.max-width]': 'widthSetting',
                            '[style.min-width]': 'widthSetting',
                            '[style.width]': 'widthSetting'
                        }
                    }] }
        ];
        /** @nocollapse */
        NzSiderComponent.ctorParameters = function () {
            return [
                { type: NzLayoutComponent, decorators: [{ type: core$1.Optional }, { type: core$1.Host }] },
                { type: layout.MediaMatcher },
                { type: core$1.NgZone },
                { type: platform.Platform },
                { type: core$1.ChangeDetectorRef },
                { type: core$1.Renderer2 },
                { type: core$1.ElementRef }
            ];
        };
        NzSiderComponent.propDecorators = {
            nzWidth: [{ type: core$1.Input }],
            nzTheme: [{ type: core$1.Input }],
            nzCollapsedWidth: [{ type: core$1.Input }],
            nzBreakpoint: [{ type: core$1.Input }],
            nzZeroTrigger: [{ type: core$1.Input }],
            nzTrigger: [{ type: core$1.Input }, { type: core$1.ViewChild, args: ['defaultTrigger',] }],
            nzReverseArrow: [{ type: core$1.Input }],
            nzCollapsible: [{ type: core$1.Input }],
            nzCollapsed: [{ type: core$1.Input }],
            nzCollapsedChange: [{ type: core$1.Output }]
        };
        __decorate([
            core.InputBoolean(),
            __metadata("design:type", Object)
        ], NzSiderComponent.prototype, "nzReverseArrow", void 0);
        __decorate([
            core.InputBoolean(),
            __metadata("design:type", Object)
        ], NzSiderComponent.prototype, "nzCollapsible", void 0);
        __decorate([
            core.InputBoolean(),
            __metadata("design:type", Object)
        ], NzSiderComponent.prototype, "nzCollapsed", void 0);
        return NzSiderComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NzLayoutModule = /** @class */ (function () {
        function NzLayoutModule() {
        }
        NzLayoutModule.decorators = [
            { type: core$1.NgModule, args: [{
                        declarations: [NzLayoutComponent, NzHeaderComponent, NzContentComponent, NzFooterComponent, NzSiderComponent],
                        exports: [NzLayoutComponent, NzHeaderComponent, NzContentComponent, NzFooterComponent, NzSiderComponent],
                        imports: [common.CommonModule, icon.NzIconModule, layout.LayoutModule, platform.PlatformModule]
                    },] }
        ];
        return NzLayoutModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.NzContentComponent = NzContentComponent;
    exports.NzFooterComponent = NzFooterComponent;
    exports.NzHeaderComponent = NzHeaderComponent;
    exports.NzLayoutComponent = NzLayoutComponent;
    exports.NzSiderComponent = NzSiderComponent;
    exports.NzLayoutModule = NzLayoutModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=ng-zorro-antd-layout.umd.js.map