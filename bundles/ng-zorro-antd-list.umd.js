(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/common'), require('@angular/core'), require('ng-zorro-antd/avatar'), require('ng-zorro-antd/core'), require('ng-zorro-antd/empty'), require('ng-zorro-antd/grid'), require('ng-zorro-antd/spin')) :
    typeof define === 'function' && define.amd ? define('ng-zorro-antd/list', ['exports', '@angular/common', '@angular/core', 'ng-zorro-antd/avatar', 'ng-zorro-antd/core', 'ng-zorro-antd/empty', 'ng-zorro-antd/grid', 'ng-zorro-antd/spin'], factory) :
    (factory((global['ng-zorro-antd'] = global['ng-zorro-antd'] || {}, global['ng-zorro-antd'].list = {}),global.ng.common,global.ng.core,global['ng-zorro-antd'].avatar,global['ng-zorro-antd'].core,global['ng-zorro-antd'].empty,global['ng-zorro-antd'].grid,global['ng-zorro-antd'].spin));
}(this, (function (exports,common,core,avatar,core$1,empty,grid,spin) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NzListItemMetaComponent = /** @class */ (function () {
        function NzListItemMetaComponent(elementRef, renderer) {
            this.elementRef = elementRef;
            this.renderer = renderer;
            this.avatarStr = '';
            this.renderer.addClass(elementRef.nativeElement, 'ant-list-item-meta');
        }
        Object.defineProperty(NzListItemMetaComponent.prototype, "nzAvatar", {
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                if (value instanceof core.TemplateRef) {
                    this.avatarStr = '';
                    this.avatarTpl = value;
                }
                else {
                    this.avatarStr = value;
                }
            },
            enumerable: true,
            configurable: true
        });
        NzListItemMetaComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'nz-list-item-meta',
                        exportAs: 'nzListItemMeta',
                        template: "<div *ngIf=\"avatarStr || avatarTpl\" class=\"ant-list-item-meta-avatar\">\r\n  <ng-container *ngIf=\"avatarStr; else avatarTpl\">\r\n    <nz-avatar [nzSrc]=\"avatarStr\"></nz-avatar>\r\n  </ng-container>\r\n</div>\r\n<div *ngIf=\"nzTitle || nzDescription\" class=\"ant-list-item-meta-content\">\r\n  <h4 *ngIf=\"nzTitle\" class=\"ant-list-item-meta-title\">\r\n    <ng-container *nzStringTemplateOutlet=\"nzTitle\">{{ nzTitle }}</ng-container>\r\n  </h4>\r\n  <div *ngIf=\"nzDescription\" class=\"ant-list-item-meta-description\">\r\n    <ng-container *nzStringTemplateOutlet=\"nzDescription\">{{ nzDescription }}</ng-container>\r\n  </div>\r\n</div>",
                        preserveWhitespaces: false,
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        encapsulation: core.ViewEncapsulation.None
                    }] }
        ];
        /** @nocollapse */
        NzListItemMetaComponent.ctorParameters = function () {
            return [
                { type: core.ElementRef },
                { type: core.Renderer2 }
            ];
        };
        NzListItemMetaComponent.propDecorators = {
            nzAvatar: [{ type: core.Input }],
            nzTitle: [{ type: core.Input }],
            nzDescription: [{ type: core.Input }]
        };
        return NzListItemMetaComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NzListItemComponent = /** @class */ (function () {
        function NzListItemComponent(elementRef, renderer) {
            this.elementRef = elementRef;
            this.renderer = renderer;
            this.nzActions = [];
            this.renderer.addClass(this.elementRef.nativeElement, 'ant-list-item');
        }
        NzListItemComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'nz-list-item',
                        exportAs: 'nzListItem',
                        template: "<ng-template #contentTpl>\r\n  <div *ngIf=\"nzContent\" class=\"ant-list-item-content\" [ngClass]=\"{'ant-list-item-content-single': metas.length < 1}\">\r\n    <ng-container *nzStringTemplateOutlet=\"nzContent\">{{ nzContent }}</ng-container>\r\n  </div>\r\n</ng-template>\r\n<ng-template #actionsTpl>\r\n  <ul *ngIf=\"nzActions?.length > 0\" class=\"ant-list-item-action\">\r\n    <li *ngFor=\"let i of nzActions; let last=last;\">\r\n      <ng-template [ngTemplateOutlet]=\"i\"></ng-template>\r\n      <em *ngIf=\"!last\" class=\"ant-list-item-action-split\"></em>\r\n    </li>\r\n  </ul>\r\n</ng-template>\r\n<ng-template #mainTpl>\r\n  <ng-content></ng-content>\r\n  <ng-template [ngTemplateOutlet]=\"contentTpl\"></ng-template>\r\n  <ng-template [ngTemplateOutlet]=\"actionsTpl\"></ng-template>\r\n</ng-template>\r\n<div *ngIf=\"nzExtra; else mainTpl\" class=\"ant-list-item-extra-wrap\">\r\n  <div class=\"ant-list-item-main\">\r\n    <ng-template [ngTemplateOutlet]=\"mainTpl\"></ng-template>\r\n  </div>\r\n  <div class=\"ant-list-item-extra\">\r\n    <ng-template [ngTemplateOutlet]=\"nzExtra\"></ng-template>\r\n  </div>\r\n</div>",
                        preserveWhitespaces: false,
                        encapsulation: core.ViewEncapsulation.None,
                        changeDetection: core.ChangeDetectionStrategy.OnPush
                    }] }
        ];
        /** @nocollapse */
        NzListItemComponent.ctorParameters = function () {
            return [
                { type: core.ElementRef },
                { type: core.Renderer2 }
            ];
        };
        NzListItemComponent.propDecorators = {
            metas: [{ type: core.ContentChildren, args: [NzListItemMetaComponent,] }],
            nzActions: [{ type: core.Input }],
            nzContent: [{ type: core.Input }],
            nzExtra: [{ type: core.Input }]
        };
        return NzListItemComponent;
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
    var NzListComponent = /** @class */ (function () {
        // #endregion
        function NzListComponent(el, updateHostClassService) {
            this.el = el;
            this.updateHostClassService = updateHostClassService;
            this.nzBordered = false;
            this.nzItemLayout = 'horizontal';
            this.nzLoading = false;
            this.nzSize = 'default';
            this.nzSplit = true;
            // #endregion
            // #region styles
            this.prefixCls = 'ant-list';
        }
        /**
         * @private
         * @return {?}
         */
        NzListComponent.prototype._setClassMap = /**
         * @private
         * @return {?}
         */
            function () {
                var _a;
                /** @type {?} */
                var classMap = (_a = {},
                    _a[this.prefixCls] = true,
                    _a[this.prefixCls + "-vertical"] = this.nzItemLayout === 'vertical',
                    _a[this.prefixCls + "-lg"] = this.nzSize === 'large',
                    _a[this.prefixCls + "-sm"] = this.nzSize === 'small',
                    _a[this.prefixCls + "-split"] = this.nzSplit,
                    _a[this.prefixCls + "-bordered"] = this.nzBordered,
                    _a[this.prefixCls + "-loading"] = this.nzLoading,
                    _a[this.prefixCls + "-grid"] = this.nzGrid,
                    _a[this.prefixCls + "-something-after-last-item"] = !!(this.nzLoadMore || this.nzPagination || this.nzFooter),
                    _a);
                this.updateHostClassService.updateHostClass(this.el.nativeElement, classMap);
            };
        /**
         * @return {?}
         */
        NzListComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                this._setClassMap();
            };
        /**
         * @return {?}
         */
        NzListComponent.prototype.ngOnChanges = /**
         * @return {?}
         */
            function () {
                this._setClassMap();
            };
        NzListComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'nz-list',
                        exportAs: 'nzList',
                        template: "<ng-template #itemsTpl>\r\n  <ng-container *ngFor=\"let item of nzDataSource; let index = index\">\r\n    <ng-template [ngTemplateOutlet]=\"nzRenderItem\" [ngTemplateOutletContext]=\"{ $implicit: item, index: index }\"></ng-template>\r\n  </ng-container>\r\n</ng-template>\r\n<div *ngIf=\"nzHeader\" class=\"ant-list-header\">\r\n  <ng-container *nzStringTemplateOutlet=\"nzHeader\">{{ nzHeader }}</ng-container>\r\n</div>\r\n<nz-spin [nzSpinning]=\"nzLoading\">\r\n  <ng-container *ngIf=\"nzDataSource\">\r\n    <div *ngIf=\"nzLoading && nzDataSource.length === 0\" [style.min-height.px]=\"53\"></div>\r\n    <div *ngIf=\"nzGrid; else itemsTpl\" nz-row [nzGutter]=\"nzGrid.gutter\">\r\n      <div nz-col [nzSpan]=\"nzGrid.span\" [nzXs]=\"nzGrid.xs\" [nzSm]=\"nzGrid.sm\" [nzMd]=\"nzGrid.md\" [nzLg]=\"nzGrid.lg\" [nzXl]=\"nzGrid.xl\"\r\n           [nzXXl]=\"nzGrid.xxl\" *ngFor=\"let item of nzDataSource; let index = index\">\r\n        <ng-template [ngTemplateOutlet]=\"nzRenderItem\" [ngTemplateOutletContext]=\"{ $implicit: item, index: index }\"></ng-template>\r\n      </div>\r\n    </div>\r\n    <div *ngIf=\"!nzLoading && nzDataSource.length === 0\" class=\"ant-list-empty-text\">\r\n      <nz-embed-empty [nzComponentName]=\"'list'\" [specificContent]=\"nzNoResult\"></nz-embed-empty>\r\n    </div>\r\n  </ng-container>\r\n  <ng-content></ng-content>\r\n</nz-spin>\r\n<div *ngIf=\"nzFooter\" class=\"ant-list-footer\">\r\n  <ng-container *nzStringTemplateOutlet=\"nzFooter\">{{ nzFooter }}</ng-container>\r\n</div>\r\n<ng-template [ngTemplateOutlet]=\"nzLoadMore\"></ng-template>\r\n<div *ngIf=\"nzPagination\" class=\"ant-list-pagination\">\r\n  <ng-template [ngTemplateOutlet]=\"nzPagination\"></ng-template>\r\n</div>",
                        providers: [core$1.NzUpdateHostClassService],
                        preserveWhitespaces: false,
                        encapsulation: core.ViewEncapsulation.None,
                        changeDetection: core.ChangeDetectionStrategy.OnPush,
                        styles: ["\n      nz-list,\n      nz-list nz-spin {\n        display: block;\n      }\n    "]
                    }] }
        ];
        /** @nocollapse */
        NzListComponent.ctorParameters = function () {
            return [
                { type: core.ElementRef },
                { type: core$1.NzUpdateHostClassService }
            ];
        };
        NzListComponent.propDecorators = {
            nzDataSource: [{ type: core.Input }],
            nzBordered: [{ type: core.Input }],
            nzGrid: [{ type: core.Input }],
            nzHeader: [{ type: core.Input }],
            nzFooter: [{ type: core.Input }],
            nzItemLayout: [{ type: core.Input }],
            nzRenderItem: [{ type: core.Input }],
            nzLoading: [{ type: core.Input }],
            nzLoadMore: [{ type: core.Input }],
            nzPagination: [{ type: core.Input }],
            nzSize: [{ type: core.Input }],
            nzSplit: [{ type: core.Input }],
            nzNoResult: [{ type: core.Input }]
        };
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Object)
        ], NzListComponent.prototype, "nzBordered", void 0);
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Object)
        ], NzListComponent.prototype, "nzLoading", void 0);
        __decorate([
            core$1.InputBoolean(),
            __metadata("design:type", Object)
        ], NzListComponent.prototype, "nzSplit", void 0);
        return NzListComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NzListModule = /** @class */ (function () {
        function NzListModule() {
        }
        NzListModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [common.CommonModule, spin.NzSpinModule, grid.NzGridModule, avatar.NzAvatarModule, core$1.NzAddOnModule, empty.NzEmptyModule],
                        declarations: [NzListComponent, NzListItemComponent, NzListItemMetaComponent],
                        exports: [NzListComponent, NzListItemComponent, NzListItemMetaComponent]
                    },] }
        ];
        return NzListModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.NzListItemMetaComponent = NzListItemMetaComponent;
    exports.NzListItemComponent = NzListItemComponent;
    exports.NzListComponent = NzListComponent;
    exports.NzListModule = NzListModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=ng-zorro-antd-list.umd.js.map