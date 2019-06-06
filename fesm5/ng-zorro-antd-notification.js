import { Subject } from 'rxjs';
import { toCssPixel, notificationMotion } from 'ng-zorro-antd/core';
import { CommonModule } from '@angular/common';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { __extends, __assign } from 'tslib';
import { Overlay, OverlayModule } from '@angular/cdk/overlay';
import { InjectionToken, ChangeDetectionStrategy, ChangeDetectorRef, Component, Inject, Optional, ViewEncapsulation, Input, ApplicationRef, ComponentFactoryResolver, Injectable, Injector, NgModule, defineInjectable, inject, INJECTOR } from '@angular/core';
import { NzMessageContainerComponent, NzMessageComponent, NzMessageBaseService } from 'ng-zorro-antd/message';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var NZ_NOTIFICATION_DEFAULT_CONFIG = new InjectionToken('NZ_NOTIFICATION_DEFAULT_CONFIG');
/** @type {?} */
var NZ_NOTIFICATION_CONFIG = new InjectionToken('NZ_NOTIFICATION_CONFIG');
/** @type {?} */
var NZ_NOTIFICATION_DEFAULT_CONFIG_PROVIDER = {
    provide: NZ_NOTIFICATION_DEFAULT_CONFIG,
    useValue: {
        nzTop: '24px',
        nzBottom: '24px',
        nzPlacement: 'topRight',
        nzDuration: 4500,
        nzMaxStack: 7,
        nzPauseOnHover: true,
        nzAnimate: true
    }
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NzNotificationContainerComponent = /** @class */ (function (_super) {
    __extends(NzNotificationContainerComponent, _super);
    function NzNotificationContainerComponent(cdr, defaultConfig, config) {
        var _this = _super.call(this, cdr, defaultConfig, config) || this;
        /**
         * @override
         */
        _this.messages = [];
        return _this;
    }
    /**
     * @override
     */
    /**
     * @override
     * @param {?} config
     * @return {?}
     */
    NzNotificationContainerComponent.prototype.setConfig = /**
     * @override
     * @param {?} config
     * @return {?}
     */
    function (config) {
        /** @type {?} */
        var newConfig = (this.config = __assign({}, this.config, config));
        /** @type {?} */
        var placement = this.config.nzPlacement;
        this.top = placement === 'topLeft' || placement === 'topRight' ? toCssPixel(newConfig.nzTop) : null;
        this.bottom = placement === 'bottomLeft' || placement === 'bottomRight' ? toCssPixel(newConfig.nzBottom) : null;
        this.cdr.markForCheck();
    };
    /**
     * Create a new notification.
     * If there's a notification whose `nzKey` is same with `nzKey` in `NzNotificationDataFilled`,
     * replace its content instead of create a new one.
     * @override
     * @param notification
     */
    /**
     * Create a new notification.
     * If there's a notification whose `nzKey` is same with `nzKey` in `NzNotificationDataFilled`,
     * replace its content instead of create a new one.
     * @override
     * @param {?} notification
     * @return {?}
     */
    NzNotificationContainerComponent.prototype.createMessage = /**
     * Create a new notification.
     * If there's a notification whose `nzKey` is same with `nzKey` in `NzNotificationDataFilled`,
     * replace its content instead of create a new one.
     * @override
     * @param {?} notification
     * @return {?}
     */
    function (notification) {
        notification.options = this._mergeMessageOptions(notification.options);
        notification.onClose = new Subject();
        /** @type {?} */
        var key = notification.options.nzKey;
        /** @type {?} */
        var notificationWithSameKey = this.messages.find((/**
         * @param {?} msg
         * @return {?}
         */
        function (msg) { return msg.options.nzKey === ((/** @type {?} */ (notification.options))).nzKey; }));
        if (key && notificationWithSameKey) {
            this.replaceNotification(notificationWithSameKey, notification);
        }
        else {
            if (this.messages.length >= this.config.nzMaxStack) {
                this.messages.splice(0, 1);
            }
            this.messages.push((/** @type {?} */ (notification)));
        }
        this.cdr.detectChanges();
    };
    /**
     * @private
     * @param {?} old
     * @param {?} _new
     * @return {?}
     */
    NzNotificationContainerComponent.prototype.replaceNotification = /**
     * @private
     * @param {?} old
     * @param {?} _new
     * @return {?}
     */
    function (old, _new) {
        old.title = _new.title;
        old.content = _new.content;
        old.template = _new.template;
        old.type = _new.type;
    };
    NzNotificationContainerComponent.decorators = [
        { type: Component, args: [{
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    selector: 'nz-notification-container',
                    exportAs: 'nzNotificationContainer',
                    preserveWhitespaces: false,
                    template: "<div\r\n  class=\"ant-notification ant-notification-{{config.nzPlacement}}\"\r\n  [style.top]=\"(config.nzPlacement === 'topLeft' || config.nzPlacement === 'topRight') ? top : null\"\r\n  [style.bottom]=\"(config.nzPlacement === 'bottomLeft' || config.nzPlacement === 'bottomRight') ? bottom : null\"\r\n  [style.right]=\"(config.nzPlacement === 'bottomRight' || config.nzPlacement === 'topRight') ? '0px' : null\"\r\n  [style.left]=\"(config.nzPlacement === 'topLeft' || config.nzPlacement === 'bottomLeft') ? '0px' : null\">\r\n  <nz-notification\r\n    *ngFor=\"let message of messages; let i = index\"\r\n    [nzMessage]=\"message\"\r\n    [nzIndex]=\"i\">\r\n  </nz-notification>\r\n</div>"
                }] }
    ];
    /** @nocollapse */
    NzNotificationContainerComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [NZ_NOTIFICATION_DEFAULT_CONFIG,] }] },
        { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [NZ_NOTIFICATION_CONFIG,] }] }
    ]; };
    return NzNotificationContainerComponent;
}(NzMessageContainerComponent));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NzNotificationComponent = /** @class */ (function (_super) {
    __extends(NzNotificationComponent, _super);
    function NzNotificationComponent(container, cdr) {
        var _this = _super.call(this, container, cdr) || this;
        _this.container = container;
        _this.cdr = cdr;
        return _this;
    }
    /**
     * @return {?}
     */
    NzNotificationComponent.prototype.close = /**
     * @return {?}
     */
    function () {
        this._destroy(true);
    };
    Object.defineProperty(NzNotificationComponent.prototype, "state", {
        get: /**
         * @return {?}
         */
        function () {
            if (this.nzMessage.state === 'enter') {
                if (this.container.config.nzPlacement === 'topLeft' || this.container.config.nzPlacement === 'bottomLeft') {
                    return 'enterLeft';
                }
                else {
                    return 'enterRight';
                }
            }
            else {
                return this.nzMessage.state;
            }
        },
        enumerable: true,
        configurable: true
    });
    NzNotificationComponent.decorators = [
        { type: Component, args: [{
                    encapsulation: ViewEncapsulation.None,
                    selector: 'nz-notification',
                    exportAs: 'nzNotification',
                    preserveWhitespaces: false,
                    animations: [notificationMotion],
                    template: "<div class=\"ant-notification-notice ant-notification-notice-closable\"\r\n  [ngStyle]=\"nzMessage.options?.nzStyle\"\r\n  [ngClass]=\"nzMessage.options?.nzClass\"\r\n  [@notificationMotion]=\"state\"\r\n  (mouseenter)=\"onEnter()\"\r\n  (mouseleave)=\"onLeave()\">\r\n  <div *ngIf=\"!nzMessage.template\" class=\"ant-notification-notice-content\">\r\n    <div class=\"ant-notification-notice-content\" [ngClass]=\"{ 'ant-notification-notice-with-icon': nzMessage.type !== 'blank' }\">\r\n      <div [class.ant-notification-notice-with-icon]=\"nzMessage.type !== 'blank'\">\r\n        <ng-container [ngSwitch]=\"nzMessage.type\">\r\n          <i *ngSwitchCase=\"'success'\" nz-icon type=\"check-circle\" class=\"ant-notification-notice-icon ant-notification-notice-icon-success\"></i>\r\n          <i *ngSwitchCase=\"'info'\" nz-icon type=\"info-circle\" class=\"ant-notification-notice-icon ant-notification-notice-icon-info\"></i>\r\n          <i *ngSwitchCase=\"'warning'\" nz-icon type=\"exclamation-circle\" class=\"ant-notification-notice-icon ant-notification-notice-icon-warning\"></i>\r\n          <i *ngSwitchCase=\"'error'\" nz-icon type=\"close-circle\" class=\"ant-notification-notice-icon ant-notification-notice-icon-error\"></i>\r\n        </ng-container>\r\n        <div class=\"ant-notification-notice-message\" [innerHTML]=\"nzMessage.title\"></div>\r\n        <div class=\"ant-notification-notice-description\" [innerHTML]=\"nzMessage.content\"></div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <ng-template\r\n    [ngIf]=\"nzMessage.template\"\r\n    [ngTemplateOutlet]=\"nzMessage.template\"\r\n    [ngTemplateOutletContext]=\"{ $implicit: this, data: nzMessage.options?.nzData }\">\r\n  </ng-template>\r\n  <a tabindex=\"0\" class=\"ant-notification-notice-close\" (click)=\"close()\">\r\n    <span class=\"ant-notification-notice-close-x\">\r\n      <i nz-icon type=\"close\" class=\"ant-notification-close-icon\"></i>\r\n    </span>\r\n  </a>\r\n</div>"
                }] }
    ];
    /** @nocollapse */
    NzNotificationComponent.ctorParameters = function () { return [
        { type: NzNotificationContainerComponent },
        { type: ChangeDetectorRef }
    ]; };
    NzNotificationComponent.propDecorators = {
        nzMessage: [{ type: Input }]
    };
    return NzNotificationComponent;
}(NzMessageComponent));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NzNotificationService = /** @class */ (function (_super) {
    __extends(NzNotificationService, _super);
    function NzNotificationService(overlay, injector, cfr, appRef) {
        return _super.call(this, overlay, NzNotificationContainerComponent, injector, cfr, appRef, 'notification-') || this;
    }
    // Shortcut methods
    // Shortcut methods
    /**
     * @param {?} title
     * @param {?} content
     * @param {?=} options
     * @return {?}
     */
    NzNotificationService.prototype.success = 
    // Shortcut methods
    /**
     * @param {?} title
     * @param {?} content
     * @param {?=} options
     * @return {?}
     */
    function (title, content, options) {
        return (/** @type {?} */ (this.createMessage({ type: 'success', title: title, content: content }, options)));
    };
    /**
     * @param {?} title
     * @param {?} content
     * @param {?=} options
     * @return {?}
     */
    NzNotificationService.prototype.error = /**
     * @param {?} title
     * @param {?} content
     * @param {?=} options
     * @return {?}
     */
    function (title, content, options) {
        return (/** @type {?} */ (this.createMessage({ type: 'error', title: title, content: content }, options)));
    };
    /**
     * @param {?} title
     * @param {?} content
     * @param {?=} options
     * @return {?}
     */
    NzNotificationService.prototype.info = /**
     * @param {?} title
     * @param {?} content
     * @param {?=} options
     * @return {?}
     */
    function (title, content, options) {
        return (/** @type {?} */ (this.createMessage({ type: 'info', title: title, content: content }, options)));
    };
    /**
     * @param {?} title
     * @param {?} content
     * @param {?=} options
     * @return {?}
     */
    NzNotificationService.prototype.warning = /**
     * @param {?} title
     * @param {?} content
     * @param {?=} options
     * @return {?}
     */
    function (title, content, options) {
        return (/** @type {?} */ (this.createMessage({ type: 'warning', title: title, content: content }, options)));
    };
    /**
     * @param {?} title
     * @param {?} content
     * @param {?=} options
     * @return {?}
     */
    NzNotificationService.prototype.blank = /**
     * @param {?} title
     * @param {?} content
     * @param {?=} options
     * @return {?}
     */
    function (title, content, options) {
        return (/** @type {?} */ (this.createMessage({ type: 'blank', title: title, content: content }, options)));
    };
    /**
     * @param {?} type
     * @param {?} title
     * @param {?} content
     * @param {?=} options
     * @return {?}
     */
    NzNotificationService.prototype.create = /**
     * @param {?} type
     * @param {?} title
     * @param {?} content
     * @param {?=} options
     * @return {?}
     */
    function (type, title, content, options) {
        return (/** @type {?} */ (this.createMessage({ type: type, title: title, content: content }, options)));
    };
    // For content with template
    // For content with template
    /**
     * @param {?} template
     * @param {?=} options
     * @return {?}
     */
    NzNotificationService.prototype.template = 
    // For content with template
    /**
     * @param {?} template
     * @param {?=} options
     * @return {?}
     */
    function (template, options) {
        return (/** @type {?} */ (this.createMessage({ template: template }, options)));
    };
    NzNotificationService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    NzNotificationService.ctorParameters = function () { return [
        { type: Overlay },
        { type: Injector },
        { type: ComponentFactoryResolver },
        { type: ApplicationRef }
    ]; };
    /** @nocollapse */ NzNotificationService.ngInjectableDef = defineInjectable({ factory: function NzNotificationService_Factory() { return new NzNotificationService(inject(Overlay), inject(INJECTOR), inject(ComponentFactoryResolver), inject(ApplicationRef)); }, token: NzNotificationService, providedIn: "root" });
    return NzNotificationService;
}(NzMessageBaseService));

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NzNotificationModule = /** @class */ (function () {
    function NzNotificationModule() {
    }
    NzNotificationModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule, OverlayModule, NzIconModule],
                    declarations: [NzNotificationComponent, NzNotificationContainerComponent],
                    providers: [NZ_NOTIFICATION_DEFAULT_CONFIG_PROVIDER, NzNotificationService],
                    entryComponents: [NzNotificationContainerComponent]
                },] }
    ];
    return NzNotificationModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { NZ_NOTIFICATION_DEFAULT_CONFIG, NZ_NOTIFICATION_CONFIG, NZ_NOTIFICATION_DEFAULT_CONFIG_PROVIDER, NzNotificationComponent, NzNotificationModule, NzNotificationService, NzNotificationContainerComponent };

//# sourceMappingURL=ng-zorro-antd-notification.js.map