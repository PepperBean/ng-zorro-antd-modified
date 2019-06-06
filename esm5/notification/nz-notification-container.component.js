/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Inject, Optional, ViewEncapsulation } from '@angular/core';
import { Subject } from 'rxjs';
import { toCssPixel } from 'ng-zorro-antd/core';
import { NzMessageContainerComponent } from 'ng-zorro-antd/message';
import { NZ_NOTIFICATION_CONFIG, NZ_NOTIFICATION_DEFAULT_CONFIG } from './nz-notification-config';
var NzNotificationContainerComponent = /** @class */ (function (_super) {
    tslib_1.__extends(NzNotificationContainerComponent, _super);
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
        var newConfig = (this.config = tslib_1.__assign({}, this.config, config));
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
export { NzNotificationContainerComponent };
if (false) {
    /** @type {?} */
    NzNotificationContainerComponent.prototype.config;
    /** @type {?} */
    NzNotificationContainerComponent.prototype.bottom;
    /**
     * @override
     * @type {?}
     */
    NzNotificationContainerComponent.prototype.messages;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotbm90aWZpY2F0aW9uLWNvbnRhaW5lci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL25vdGlmaWNhdGlvbi8iLCJzb3VyY2VzIjpbIm56LW5vdGlmaWNhdGlvbi1jb250YWluZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQVFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxNQUFNLEVBQ04sUUFBUSxFQUNSLGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRS9CLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNoRCxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUVwRSxPQUFPLEVBQXdCLHNCQUFzQixFQUFFLDhCQUE4QixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFHeEg7SUFRc0QsNERBQTJCO0lBUy9FLDBDQUNFLEdBQXNCLEVBQzhCLGFBQW1DLEVBQzNDLE1BQTRCO1FBSDFFLFlBS0Usa0JBQU0sR0FBRyxFQUFFLGFBQWEsRUFBRSxNQUFNLENBQUMsU0FDbEM7Ozs7UUFSRCxjQUFRLEdBQThDLEVBQUUsQ0FBQzs7SUFRekQsQ0FBQztJQUVEOztPQUVHOzs7Ozs7SUFDSCxvREFBUzs7Ozs7SUFBVCxVQUFVLE1BQTRCOztZQUM5QixTQUFTLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSx3QkFBUSxJQUFJLENBQUMsTUFBTSxFQUFLLE1BQU0sQ0FBRSxDQUFDOztZQUN6RCxTQUFTLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXO1FBRXpDLElBQUksQ0FBQyxHQUFHLEdBQUcsU0FBUyxLQUFLLFNBQVMsSUFBSSxTQUFTLEtBQUssVUFBVSxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7UUFDcEcsSUFBSSxDQUFDLE1BQU0sR0FBRyxTQUFTLEtBQUssWUFBWSxJQUFJLFNBQVMsS0FBSyxhQUFhLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztRQUVoSCxJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQzFCLENBQUM7SUFFRDs7Ozs7O09BTUc7Ozs7Ozs7OztJQUNILHdEQUFhOzs7Ozs7OztJQUFiLFVBQWMsWUFBc0M7UUFDbEQsWUFBWSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsb0JBQW9CLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3ZFLFlBQVksQ0FBQyxPQUFPLEdBQUcsSUFBSSxPQUFPLEVBQVcsQ0FBQzs7WUFDeEMsR0FBRyxHQUFHLFlBQVksQ0FBQyxPQUFPLENBQUMsS0FBSzs7WUFDaEMsdUJBQXVCLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJOzs7O1FBQ2hELFVBQUEsR0FBRyxJQUFJLE9BQUEsR0FBRyxDQUFDLE9BQU8sQ0FBQyxLQUFLLEtBQUssQ0FBQyxtQkFBQSxZQUFZLENBQUMsT0FBTyxFQUF1QyxDQUFDLENBQUMsS0FBSyxFQUF6RixDQUF5RixFQUNqRztRQUVELElBQUksR0FBRyxJQUFJLHVCQUF1QixFQUFFO1lBQ2xDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyx1QkFBdUIsRUFBRSxZQUFZLENBQUMsQ0FBQztTQUNqRTthQUFNO1lBQ0wsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsRUFBRTtnQkFDbEQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO2FBQzVCO1lBQ0QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsbUJBQUEsWUFBWSxFQUFzQyxDQUFDLENBQUM7U0FDeEU7UUFDRCxJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQzNCLENBQUM7Ozs7Ozs7SUFFTyw4REFBbUI7Ozs7OztJQUEzQixVQUE0QixHQUE2QixFQUFFLElBQThCO1FBQ3ZGLEdBQUcsQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztRQUN2QixHQUFHLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7UUFDM0IsR0FBRyxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQzdCLEdBQUcsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztJQUN2QixDQUFDOztnQkFyRUYsU0FBUyxTQUFDO29CQUNULGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxNQUFNO29CQUMvQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtvQkFDckMsUUFBUSxFQUFFLDJCQUEyQjtvQkFDckMsUUFBUSxFQUFFLHlCQUF5QjtvQkFDbkMsbUJBQW1CLEVBQUUsS0FBSztvQkFDMUIsa3NCQUF5RDtpQkFDMUQ7Ozs7Z0JBckJDLGlCQUFpQjtnREFpQ2QsUUFBUSxZQUFJLE1BQU0sU0FBQyw4QkFBOEI7Z0RBQ2pELFFBQVEsWUFBSSxNQUFNLFNBQUMsc0JBQXNCOztJQWtEOUMsdUNBQUM7Q0FBQSxBQXRFRCxDQVFzRCwyQkFBMkIsR0E4RGhGO1NBOURZLGdDQUFnQzs7O0lBQzNDLGtEQUF1Qzs7SUFDdkMsa0RBQXNCOzs7OztJQUt0QixvREFBeUQiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuXHJcbmltcG9ydCB7XHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgQ29tcG9uZW50LFxyXG4gIEluamVjdCxcclxuICBPcHRpb25hbCxcclxuICBWaWV3RW5jYXBzdWxhdGlvblxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcblxyXG5pbXBvcnQgeyB0b0Nzc1BpeGVsIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcclxuaW1wb3J0IHsgTnpNZXNzYWdlQ29udGFpbmVyQ29tcG9uZW50IH0gZnJvbSAnbmctem9ycm8tYW50ZC9tZXNzYWdlJztcclxuXHJcbmltcG9ydCB7IE56Tm90aWZpY2F0aW9uQ29uZmlnLCBOWl9OT1RJRklDQVRJT05fQ09ORklHLCBOWl9OT1RJRklDQVRJT05fREVGQVVMVF9DT05GSUcgfSBmcm9tICcuL256LW5vdGlmaWNhdGlvbi1jb25maWcnO1xyXG5pbXBvcnQgeyBOek5vdGlmaWNhdGlvbkRhdGFGaWxsZWQsIE56Tm90aWZpY2F0aW9uRGF0YU9wdGlvbnMgfSBmcm9tICcuL256LW5vdGlmaWNhdGlvbi5kZWZpbml0aW9ucyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gIHNlbGVjdG9yOiAnbnotbm90aWZpY2F0aW9uLWNvbnRhaW5lcicsXHJcbiAgZXhwb3J0QXM6ICduek5vdGlmaWNhdGlvbkNvbnRhaW5lcicsXHJcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL256LW5vdGlmaWNhdGlvbi1jb250YWluZXIuY29tcG9uZW50Lmh0bWwnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOek5vdGlmaWNhdGlvbkNvbnRhaW5lckNvbXBvbmVudCBleHRlbmRzIE56TWVzc2FnZUNvbnRhaW5lckNvbXBvbmVudCB7XHJcbiAgY29uZmlnOiBSZXF1aXJlZDxOek5vdGlmaWNhdGlvbkNvbmZpZz47XHJcbiAgYm90dG9tOiBzdHJpbmcgfCBudWxsO1xyXG5cclxuICAvKipcclxuICAgKiBAb3ZlcnJpZGVcclxuICAgKi9cclxuICBtZXNzYWdlczogQXJyYXk8UmVxdWlyZWQ8TnpOb3RpZmljYXRpb25EYXRhRmlsbGVkPj4gPSBbXTtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBjZHI6IENoYW5nZURldGVjdG9yUmVmLFxyXG4gICAgQE9wdGlvbmFsKCkgQEluamVjdChOWl9OT1RJRklDQVRJT05fREVGQVVMVF9DT05GSUcpIGRlZmF1bHRDb25maWc6IE56Tm90aWZpY2F0aW9uQ29uZmlnLFxyXG4gICAgQE9wdGlvbmFsKCkgQEluamVjdChOWl9OT1RJRklDQVRJT05fQ09ORklHKSBjb25maWc6IE56Tm90aWZpY2F0aW9uQ29uZmlnXHJcbiAgKSB7XHJcbiAgICBzdXBlcihjZHIsIGRlZmF1bHRDb25maWcsIGNvbmZpZyk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBAb3ZlcnJpZGVcclxuICAgKi9cclxuICBzZXRDb25maWcoY29uZmlnOiBOek5vdGlmaWNhdGlvbkNvbmZpZyk6IHZvaWQge1xyXG4gICAgY29uc3QgbmV3Q29uZmlnID0gKHRoaXMuY29uZmlnID0geyAuLi50aGlzLmNvbmZpZywgLi4uY29uZmlnIH0pO1xyXG4gICAgY29uc3QgcGxhY2VtZW50ID0gdGhpcy5jb25maWcubnpQbGFjZW1lbnQ7XHJcblxyXG4gICAgdGhpcy50b3AgPSBwbGFjZW1lbnQgPT09ICd0b3BMZWZ0JyB8fCBwbGFjZW1lbnQgPT09ICd0b3BSaWdodCcgPyB0b0Nzc1BpeGVsKG5ld0NvbmZpZy5uelRvcCkgOiBudWxsO1xyXG4gICAgdGhpcy5ib3R0b20gPSBwbGFjZW1lbnQgPT09ICdib3R0b21MZWZ0JyB8fCBwbGFjZW1lbnQgPT09ICdib3R0b21SaWdodCcgPyB0b0Nzc1BpeGVsKG5ld0NvbmZpZy5uekJvdHRvbSkgOiBudWxsO1xyXG5cclxuICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ3JlYXRlIGEgbmV3IG5vdGlmaWNhdGlvbi5cclxuICAgKiBJZiB0aGVyZSdzIGEgbm90aWZpY2F0aW9uIHdob3NlIGBuektleWAgaXMgc2FtZSB3aXRoIGBuektleWAgaW4gYE56Tm90aWZpY2F0aW9uRGF0YUZpbGxlZGAsXHJcbiAgICogcmVwbGFjZSBpdHMgY29udGVudCBpbnN0ZWFkIG9mIGNyZWF0ZSBhIG5ldyBvbmUuXHJcbiAgICogQG92ZXJyaWRlXHJcbiAgICogQHBhcmFtIG5vdGlmaWNhdGlvblxyXG4gICAqL1xyXG4gIGNyZWF0ZU1lc3NhZ2Uobm90aWZpY2F0aW9uOiBOek5vdGlmaWNhdGlvbkRhdGFGaWxsZWQpOiB2b2lkIHtcclxuICAgIG5vdGlmaWNhdGlvbi5vcHRpb25zID0gdGhpcy5fbWVyZ2VNZXNzYWdlT3B0aW9ucyhub3RpZmljYXRpb24ub3B0aW9ucyk7XHJcbiAgICBub3RpZmljYXRpb24ub25DbG9zZSA9IG5ldyBTdWJqZWN0PGJvb2xlYW4+KCk7XHJcbiAgICBjb25zdCBrZXkgPSBub3RpZmljYXRpb24ub3B0aW9ucy5uektleTtcclxuICAgIGNvbnN0IG5vdGlmaWNhdGlvbldpdGhTYW1lS2V5ID0gdGhpcy5tZXNzYWdlcy5maW5kKFxyXG4gICAgICBtc2cgPT4gbXNnLm9wdGlvbnMubnpLZXkgPT09IChub3RpZmljYXRpb24ub3B0aW9ucyBhcyBSZXF1aXJlZDxOek5vdGlmaWNhdGlvbkRhdGFPcHRpb25zPikubnpLZXlcclxuICAgICk7XHJcblxyXG4gICAgaWYgKGtleSAmJiBub3RpZmljYXRpb25XaXRoU2FtZUtleSkge1xyXG4gICAgICB0aGlzLnJlcGxhY2VOb3RpZmljYXRpb24obm90aWZpY2F0aW9uV2l0aFNhbWVLZXksIG5vdGlmaWNhdGlvbik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBpZiAodGhpcy5tZXNzYWdlcy5sZW5ndGggPj0gdGhpcy5jb25maWcubnpNYXhTdGFjaykge1xyXG4gICAgICAgIHRoaXMubWVzc2FnZXMuc3BsaWNlKDAsIDEpO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMubWVzc2FnZXMucHVzaChub3RpZmljYXRpb24gYXMgUmVxdWlyZWQ8TnpOb3RpZmljYXRpb25EYXRhRmlsbGVkPik7XHJcbiAgICB9XHJcbiAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHJlcGxhY2VOb3RpZmljYXRpb24ob2xkOiBOek5vdGlmaWNhdGlvbkRhdGFGaWxsZWQsIF9uZXc6IE56Tm90aWZpY2F0aW9uRGF0YUZpbGxlZCk6IHZvaWQge1xyXG4gICAgb2xkLnRpdGxlID0gX25ldy50aXRsZTtcclxuICAgIG9sZC5jb250ZW50ID0gX25ldy5jb250ZW50O1xyXG4gICAgb2xkLnRlbXBsYXRlID0gX25ldy50ZW1wbGF0ZTtcclxuICAgIG9sZC50eXBlID0gX25ldy50eXBlO1xyXG4gIH1cclxufVxyXG4iXX0=