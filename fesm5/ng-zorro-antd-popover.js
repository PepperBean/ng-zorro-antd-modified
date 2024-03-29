import { __extends } from 'tslib';
import { OverlayModule } from '@angular/cdk/overlay';
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ContentChild, Host, Input, Optional, TemplateRef, ViewEncapsulation, ComponentFactoryResolver, Directive, ElementRef, Renderer2, ViewContainerRef, NgModule } from '@angular/core';
import { isNotNil, zoomBigMotion, NzNoAnimationDirective, NzAddOnModule, NzNoAnimationModule, NzOverlayModule } from 'ng-zorro-antd/core';
import { NzToolTipComponent, NzTooltipDirective, NzToolTipModule } from 'ng-zorro-antd/tooltip';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NzPopoverComponent = /** @class */ (function (_super) {
    __extends(NzPopoverComponent, _super);
    function NzPopoverComponent(cdr, noAnimation) {
        var _this = _super.call(this, cdr, noAnimation) || this;
        _this.noAnimation = noAnimation;
        _this._prefix = 'ant-popover-placement';
        return _this;
    }
    /**
     * @protected
     * @return {?}
     */
    NzPopoverComponent.prototype.isContentEmpty = /**
     * @protected
     * @return {?}
     */
    function () {
        /** @type {?} */
        var isTitleEmpty = this.nzTitle instanceof TemplateRef ? false : this.nzTitle === '' || !isNotNil(this.nzTitle);
        /** @type {?} */
        var isContentEmpty = this.nzContent instanceof TemplateRef ? false : this.nzContent === '' || !isNotNil(this.nzContent);
        return isTitleEmpty && isContentEmpty;
    };
    NzPopoverComponent.decorators = [
        { type: Component, args: [{
                    selector: 'nz-popover',
                    exportAs: 'nzPopoverComponent',
                    animations: [zoomBigMotion],
                    template: "<ng-content></ng-content>\r\n<ng-template\r\n  #overlay=\"cdkConnectedOverlay\"\r\n  cdkConnectedOverlay\r\n  nzConnectedOverlay\r\n  [cdkConnectedOverlayOrigin]=\"overlayOrigin\"\r\n  [cdkConnectedOverlayHasBackdrop]=\"_hasBackdrop\"\r\n  (backdropClick)=\"hide()\"\r\n  (detach)=\"hide()\"\r\n  (positionChange)=\"onPositionChange($event)\"\r\n  [cdkConnectedOverlayPositions]=\"_positions\"\r\n  [cdkConnectedOverlayOpen]=\"visible$ | async\">\r\n  <div class=\"ant-popover\"\r\n    [ngClass]=\"_classMap\"\r\n    [ngStyle]=\"nzOverlayStyle\"\r\n    [nzNoAnimation]=\"noAnimation?.nzNoAnimation\"\r\n    [@zoomBigMotion]=\"'active'\"\r\n    (@zoomBigMotion.done)=\"_afterVisibilityAnimation($event)\">\r\n    <div class=\"ant-popover-content\">\r\n      <div class=\"ant-popover-arrow\"></div>\r\n      <div class=\"ant-popover-inner\" role=\"tooltip\">\r\n        <div>\r\n          <div class=\"ant-popover-title\" *ngIf=\"nzTitle\">\r\n            <ng-container *nzStringTemplateOutlet=\"nzTitle\">{{ nzTitle }}</ng-container>\r\n          </div>\r\n          <div class=\"ant-popover-inner-content\">\r\n            <ng-container *nzStringTemplateOutlet=\"nzContent\">{{ nzContent }}</ng-container>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ng-template>",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    preserveWhitespaces: false,
                    styles: ["\n      .ant-popover {\n        position: relative;\n      }\n    "]
                }] }
    ];
    /** @nocollapse */
    NzPopoverComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: NzNoAnimationDirective, decorators: [{ type: Host }, { type: Optional }] }
    ]; };
    NzPopoverComponent.propDecorators = {
        nzTitle: [{ type: Input }, { type: ContentChild, args: ['neverUsedTemplate',] }],
        nzContent: [{ type: Input }, { type: ContentChild, args: ['nzTemplate',] }]
    };
    return NzPopoverComponent;
}(NzToolTipComponent));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NzPopoverDirective = /** @class */ (function (_super) {
    __extends(NzPopoverDirective, _super);
    function NzPopoverDirective(elementRef, hostView, resolver, renderer, tooltip, noAnimation) {
        var _this = _super.call(this, elementRef, hostView, resolver, renderer, tooltip, noAnimation) || this;
        _this.noAnimation = noAnimation;
        _this.factory = _this.resolver.resolveComponentFactory(NzPopoverComponent);
        return _this;
    }
    NzPopoverDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[nz-popover]',
                    exportAs: 'nzPopover',
                    host: {
                        '[class.ant-popover-open]': 'isTooltipOpen'
                    }
                },] }
    ];
    /** @nocollapse */
    NzPopoverDirective.ctorParameters = function () { return [
        { type: ElementRef },
        { type: ViewContainerRef },
        { type: ComponentFactoryResolver },
        { type: Renderer2 },
        { type: NzPopoverComponent, decorators: [{ type: Optional }] },
        { type: NzNoAnimationDirective, decorators: [{ type: Host }, { type: Optional }] }
    ]; };
    return NzPopoverDirective;
}(NzTooltipDirective));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NzPopoverModule = /** @class */ (function () {
    function NzPopoverModule() {
    }
    NzPopoverModule.decorators = [
        { type: NgModule, args: [{
                    entryComponents: [NzPopoverComponent],
                    exports: [NzPopoverDirective, NzPopoverComponent],
                    declarations: [NzPopoverDirective, NzPopoverComponent],
                    imports: [CommonModule, OverlayModule, NzAddOnModule, NzOverlayModule, NzNoAnimationModule, NzToolTipModule]
                },] }
    ];
    return NzPopoverModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { NzPopoverComponent, NzPopoverDirective, NzPopoverModule };

//# sourceMappingURL=ng-zorro-antd-popover.js.map