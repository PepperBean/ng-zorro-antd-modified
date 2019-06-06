/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
export class NzNotificationContainerComponent extends NzMessageContainerComponent {
    /**
     * @param {?} cdr
     * @param {?} defaultConfig
     * @param {?} config
     */
    constructor(cdr, defaultConfig, config) {
        super(cdr, defaultConfig, config);
        /**
         * @override
         */
        this.messages = [];
    }
    /**
     * @override
     * @param {?} config
     * @return {?}
     */
    setConfig(config) {
        /** @type {?} */
        const newConfig = (this.config = Object.assign({}, this.config, config));
        /** @type {?} */
        const placement = this.config.nzPlacement;
        this.top = placement === 'topLeft' || placement === 'topRight' ? toCssPixel(newConfig.nzTop) : null;
        this.bottom = placement === 'bottomLeft' || placement === 'bottomRight' ? toCssPixel(newConfig.nzBottom) : null;
        this.cdr.markForCheck();
    }
    /**
     * Create a new notification.
     * If there's a notification whose `nzKey` is same with `nzKey` in `NzNotificationDataFilled`,
     * replace its content instead of create a new one.
     * @override
     * @param {?} notification
     * @return {?}
     */
    createMessage(notification) {
        notification.options = this._mergeMessageOptions(notification.options);
        notification.onClose = new Subject();
        /** @type {?} */
        const key = notification.options.nzKey;
        /** @type {?} */
        const notificationWithSameKey = this.messages.find((/**
         * @param {?} msg
         * @return {?}
         */
        msg => msg.options.nzKey === ((/** @type {?} */ (notification.options))).nzKey));
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
    }
    /**
     * @private
     * @param {?} old
     * @param {?} _new
     * @return {?}
     */
    replaceNotification(old, _new) {
        old.title = _new.title;
        old.content = _new.content;
        old.template = _new.template;
        old.type = _new.type;
    }
}
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
NzNotificationContainerComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [NZ_NOTIFICATION_DEFAULT_CONFIG,] }] },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [NZ_NOTIFICATION_CONFIG,] }] }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotbm90aWZpY2F0aW9uLWNvbnRhaW5lci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL25vdGlmaWNhdGlvbi8iLCJzb3VyY2VzIjpbIm56LW5vdGlmaWNhdGlvbi1jb250YWluZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBUUEsT0FBTyxFQUNMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULE1BQU0sRUFDTixRQUFRLEVBQ1IsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFFL0IsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ2hELE9BQU8sRUFBRSwyQkFBMkIsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBRXBFLE9BQU8sRUFBd0Isc0JBQXNCLEVBQUUsOEJBQThCLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQVd4SCxNQUFNLE9BQU8sZ0NBQWlDLFNBQVEsMkJBQTJCOzs7Ozs7SUFTL0UsWUFDRSxHQUFzQixFQUM4QixhQUFtQyxFQUMzQyxNQUE0QjtRQUV4RSxLQUFLLENBQUMsR0FBRyxFQUFFLGFBQWEsRUFBRSxNQUFNLENBQUMsQ0FBQzs7OztRQVBwQyxhQUFRLEdBQThDLEVBQUUsQ0FBQztJQVF6RCxDQUFDOzs7Ozs7SUFLRCxTQUFTLENBQUMsTUFBNEI7O2NBQzlCLFNBQVMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLHFCQUFRLElBQUksQ0FBQyxNQUFNLEVBQUssTUFBTSxDQUFFLENBQUM7O2NBQ3pELFNBQVMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVc7UUFFekMsSUFBSSxDQUFDLEdBQUcsR0FBRyxTQUFTLEtBQUssU0FBUyxJQUFJLFNBQVMsS0FBSyxVQUFVLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztRQUNwRyxJQUFJLENBQUMsTUFBTSxHQUFHLFNBQVMsS0FBSyxZQUFZLElBQUksU0FBUyxLQUFLLGFBQWEsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO1FBRWhILElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDMUIsQ0FBQzs7Ozs7Ozs7O0lBU0QsYUFBYSxDQUFDLFlBQXNDO1FBQ2xELFlBQVksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLG9CQUFvQixDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUN2RSxZQUFZLENBQUMsT0FBTyxHQUFHLElBQUksT0FBTyxFQUFXLENBQUM7O2NBQ3hDLEdBQUcsR0FBRyxZQUFZLENBQUMsT0FBTyxDQUFDLEtBQUs7O2NBQ2hDLHVCQUF1QixHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSTs7OztRQUNoRCxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsS0FBSyxLQUFLLENBQUMsbUJBQUEsWUFBWSxDQUFDLE9BQU8sRUFBdUMsQ0FBQyxDQUFDLEtBQUssRUFDakc7UUFFRCxJQUFJLEdBQUcsSUFBSSx1QkFBdUIsRUFBRTtZQUNsQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsdUJBQXVCLEVBQUUsWUFBWSxDQUFDLENBQUM7U0FDakU7YUFBTTtZQUNMLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLEVBQUU7Z0JBQ2xELElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQzthQUM1QjtZQUNELElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLG1CQUFBLFlBQVksRUFBc0MsQ0FBQyxDQUFDO1NBQ3hFO1FBQ0QsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUMzQixDQUFDOzs7Ozs7O0lBRU8sbUJBQW1CLENBQUMsR0FBNkIsRUFBRSxJQUE4QjtRQUN2RixHQUFHLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDdkIsR0FBRyxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBQzNCLEdBQUcsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUM3QixHQUFHLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7SUFDdkIsQ0FBQzs7O1lBckVGLFNBQVMsU0FBQztnQkFDVCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7Z0JBQ3JDLFFBQVEsRUFBRSwyQkFBMkI7Z0JBQ3JDLFFBQVEsRUFBRSx5QkFBeUI7Z0JBQ25DLG1CQUFtQixFQUFFLEtBQUs7Z0JBQzFCLGtzQkFBeUQ7YUFDMUQ7Ozs7WUFyQkMsaUJBQWlCOzRDQWlDZCxRQUFRLFlBQUksTUFBTSxTQUFDLDhCQUE4Qjs0Q0FDakQsUUFBUSxZQUFJLE1BQU0sU0FBQyxzQkFBc0I7Ozs7SUFYNUMsa0RBQXVDOztJQUN2QyxrREFBc0I7Ozs7O0lBS3RCLG9EQUF5RCIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5cclxuaW1wb3J0IHtcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDaGFuZ2VEZXRlY3RvclJlZixcclxuICBDb21wb25lbnQsXHJcbiAgSW5qZWN0LFxyXG4gIE9wdGlvbmFsLFxyXG4gIFZpZXdFbmNhcHN1bGF0aW9uXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuXHJcbmltcG9ydCB7IHRvQ3NzUGl4ZWwgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xyXG5pbXBvcnQgeyBOek1lc3NhZ2VDb250YWluZXJDb21wb25lbnQgfSBmcm9tICduZy16b3Jyby1hbnRkL21lc3NhZ2UnO1xyXG5cclxuaW1wb3J0IHsgTnpOb3RpZmljYXRpb25Db25maWcsIE5aX05PVElGSUNBVElPTl9DT05GSUcsIE5aX05PVElGSUNBVElPTl9ERUZBVUxUX0NPTkZJRyB9IGZyb20gJy4vbnotbm90aWZpY2F0aW9uLWNvbmZpZyc7XHJcbmltcG9ydCB7IE56Tm90aWZpY2F0aW9uRGF0YUZpbGxlZCwgTnpOb3RpZmljYXRpb25EYXRhT3B0aW9ucyB9IGZyb20gJy4vbnotbm90aWZpY2F0aW9uLmRlZmluaXRpb25zJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgc2VsZWN0b3I6ICduei1ub3RpZmljYXRpb24tY29udGFpbmVyJyxcclxuICBleHBvcnRBczogJ256Tm90aWZpY2F0aW9uQ29udGFpbmVyJyxcclxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcclxuICB0ZW1wbGF0ZVVybDogJy4vbnotbm90aWZpY2F0aW9uLWNvbnRhaW5lci5jb21wb25lbnQuaHRtbCdcclxufSlcclxuZXhwb3J0IGNsYXNzIE56Tm90aWZpY2F0aW9uQ29udGFpbmVyQ29tcG9uZW50IGV4dGVuZHMgTnpNZXNzYWdlQ29udGFpbmVyQ29tcG9uZW50IHtcclxuICBjb25maWc6IFJlcXVpcmVkPE56Tm90aWZpY2F0aW9uQ29uZmlnPjtcclxuICBib3R0b206IHN0cmluZyB8IG51bGw7XHJcblxyXG4gIC8qKlxyXG4gICAqIEBvdmVycmlkZVxyXG4gICAqL1xyXG4gIG1lc3NhZ2VzOiBBcnJheTxSZXF1aXJlZDxOek5vdGlmaWNhdGlvbkRhdGFGaWxsZWQ+PiA9IFtdO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgICBAT3B0aW9uYWwoKSBASW5qZWN0KE5aX05PVElGSUNBVElPTl9ERUZBVUxUX0NPTkZJRykgZGVmYXVsdENvbmZpZzogTnpOb3RpZmljYXRpb25Db25maWcsXHJcbiAgICBAT3B0aW9uYWwoKSBASW5qZWN0KE5aX05PVElGSUNBVElPTl9DT05GSUcpIGNvbmZpZzogTnpOb3RpZmljYXRpb25Db25maWdcclxuICApIHtcclxuICAgIHN1cGVyKGNkciwgZGVmYXVsdENvbmZpZywgY29uZmlnKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEBvdmVycmlkZVxyXG4gICAqL1xyXG4gIHNldENvbmZpZyhjb25maWc6IE56Tm90aWZpY2F0aW9uQ29uZmlnKTogdm9pZCB7XHJcbiAgICBjb25zdCBuZXdDb25maWcgPSAodGhpcy5jb25maWcgPSB7IC4uLnRoaXMuY29uZmlnLCAuLi5jb25maWcgfSk7XHJcbiAgICBjb25zdCBwbGFjZW1lbnQgPSB0aGlzLmNvbmZpZy5uelBsYWNlbWVudDtcclxuXHJcbiAgICB0aGlzLnRvcCA9IHBsYWNlbWVudCA9PT0gJ3RvcExlZnQnIHx8IHBsYWNlbWVudCA9PT0gJ3RvcFJpZ2h0JyA/IHRvQ3NzUGl4ZWwobmV3Q29uZmlnLm56VG9wKSA6IG51bGw7XHJcbiAgICB0aGlzLmJvdHRvbSA9IHBsYWNlbWVudCA9PT0gJ2JvdHRvbUxlZnQnIHx8IHBsYWNlbWVudCA9PT0gJ2JvdHRvbVJpZ2h0JyA/IHRvQ3NzUGl4ZWwobmV3Q29uZmlnLm56Qm90dG9tKSA6IG51bGw7XHJcblxyXG4gICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDcmVhdGUgYSBuZXcgbm90aWZpY2F0aW9uLlxyXG4gICAqIElmIHRoZXJlJ3MgYSBub3RpZmljYXRpb24gd2hvc2UgYG56S2V5YCBpcyBzYW1lIHdpdGggYG56S2V5YCBpbiBgTnpOb3RpZmljYXRpb25EYXRhRmlsbGVkYCxcclxuICAgKiByZXBsYWNlIGl0cyBjb250ZW50IGluc3RlYWQgb2YgY3JlYXRlIGEgbmV3IG9uZS5cclxuICAgKiBAb3ZlcnJpZGVcclxuICAgKiBAcGFyYW0gbm90aWZpY2F0aW9uXHJcbiAgICovXHJcbiAgY3JlYXRlTWVzc2FnZShub3RpZmljYXRpb246IE56Tm90aWZpY2F0aW9uRGF0YUZpbGxlZCk6IHZvaWQge1xyXG4gICAgbm90aWZpY2F0aW9uLm9wdGlvbnMgPSB0aGlzLl9tZXJnZU1lc3NhZ2VPcHRpb25zKG5vdGlmaWNhdGlvbi5vcHRpb25zKTtcclxuICAgIG5vdGlmaWNhdGlvbi5vbkNsb3NlID0gbmV3IFN1YmplY3Q8Ym9vbGVhbj4oKTtcclxuICAgIGNvbnN0IGtleSA9IG5vdGlmaWNhdGlvbi5vcHRpb25zLm56S2V5O1xyXG4gICAgY29uc3Qgbm90aWZpY2F0aW9uV2l0aFNhbWVLZXkgPSB0aGlzLm1lc3NhZ2VzLmZpbmQoXHJcbiAgICAgIG1zZyA9PiBtc2cub3B0aW9ucy5uektleSA9PT0gKG5vdGlmaWNhdGlvbi5vcHRpb25zIGFzIFJlcXVpcmVkPE56Tm90aWZpY2F0aW9uRGF0YU9wdGlvbnM+KS5uektleVxyXG4gICAgKTtcclxuXHJcbiAgICBpZiAoa2V5ICYmIG5vdGlmaWNhdGlvbldpdGhTYW1lS2V5KSB7XHJcbiAgICAgIHRoaXMucmVwbGFjZU5vdGlmaWNhdGlvbihub3RpZmljYXRpb25XaXRoU2FtZUtleSwgbm90aWZpY2F0aW9uKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGlmICh0aGlzLm1lc3NhZ2VzLmxlbmd0aCA+PSB0aGlzLmNvbmZpZy5uek1heFN0YWNrKSB7XHJcbiAgICAgICAgdGhpcy5tZXNzYWdlcy5zcGxpY2UoMCwgMSk7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5tZXNzYWdlcy5wdXNoKG5vdGlmaWNhdGlvbiBhcyBSZXF1aXJlZDxOek5vdGlmaWNhdGlvbkRhdGFGaWxsZWQ+KTtcclxuICAgIH1cclxuICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgcmVwbGFjZU5vdGlmaWNhdGlvbihvbGQ6IE56Tm90aWZpY2F0aW9uRGF0YUZpbGxlZCwgX25ldzogTnpOb3RpZmljYXRpb25EYXRhRmlsbGVkKTogdm9pZCB7XHJcbiAgICBvbGQudGl0bGUgPSBfbmV3LnRpdGxlO1xyXG4gICAgb2xkLmNvbnRlbnQgPSBfbmV3LmNvbnRlbnQ7XHJcbiAgICBvbGQudGVtcGxhdGUgPSBfbmV3LnRlbXBsYXRlO1xyXG4gICAgb2xkLnR5cGUgPSBfbmV3LnR5cGU7XHJcbiAgfVxyXG59XHJcbiJdfQ==