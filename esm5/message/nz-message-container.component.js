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
import { NZ_MESSAGE_CONFIG, NZ_MESSAGE_DEFAULT_CONFIG } from './nz-message-config';
var NzMessageContainerComponent = /** @class */ (function () {
    function NzMessageContainerComponent(cdr, defaultConfig, config) {
        this.cdr = cdr;
        this.messages = [];
        this.setConfig(tslib_1.__assign({}, defaultConfig, config));
    }
    /**
     * @param {?} config
     * @return {?}
     */
    NzMessageContainerComponent.prototype.setConfig = /**
     * @param {?} config
     * @return {?}
     */
    function (config) {
        this.config = tslib_1.__assign({}, this.config, config);
        this.top = toCssPixel(this.config.nzTop);
        this.cdr.markForCheck();
    };
    /**
     * Create a new message.
     * @param message Parsed message configuration.
     */
    /**
     * Create a new message.
     * @param {?} message Parsed message configuration.
     * @return {?}
     */
    NzMessageContainerComponent.prototype.createMessage = /**
     * Create a new message.
     * @param {?} message Parsed message configuration.
     * @return {?}
     */
    function (message) {
        if (this.messages.length >= this.config.nzMaxStack) {
            this.messages.splice(0, 1);
        }
        message.options = this._mergeMessageOptions(message.options);
        message.onClose = new Subject();
        this.messages.push(message);
        this.cdr.detectChanges();
    };
    /**
     * Remove a message by `messageId`.
     * @param messageId Id of the message to be removed.
     * @param userAction Whether this is closed by user interaction.
     */
    /**
     * Remove a message by `messageId`.
     * @param {?} messageId Id of the message to be removed.
     * @param {?=} userAction Whether this is closed by user interaction.
     * @return {?}
     */
    NzMessageContainerComponent.prototype.removeMessage = /**
     * Remove a message by `messageId`.
     * @param {?} messageId Id of the message to be removed.
     * @param {?=} userAction Whether this is closed by user interaction.
     * @return {?}
     */
    function (messageId, userAction) {
        var _this = this;
        if (userAction === void 0) { userAction = false; }
        this.messages.some((/**
         * @param {?} message
         * @param {?} index
         * @return {?}
         */
        function (message, index) {
            if (message.messageId === messageId) {
                _this.messages.splice(index, 1);
                _this.cdr.detectChanges();
                (/** @type {?} */ (message.onClose)).next(userAction);
                (/** @type {?} */ (message.onClose)).complete();
                return true;
            }
            return false;
        }));
    };
    /**
     * Remove all messages.
     */
    /**
     * Remove all messages.
     * @return {?}
     */
    NzMessageContainerComponent.prototype.removeMessageAll = /**
     * Remove all messages.
     * @return {?}
     */
    function () {
        this.messages = [];
        this.cdr.detectChanges();
    };
    /**
     * Merge default options and custom message options
     * @param options
     */
    /**
     * Merge default options and custom message options
     * @protected
     * @param {?=} options
     * @return {?}
     */
    NzMessageContainerComponent.prototype._mergeMessageOptions = /**
     * Merge default options and custom message options
     * @protected
     * @param {?=} options
     * @return {?}
     */
    function (options) {
        /** @type {?} */
        var defaultOptions = {
            nzDuration: this.config.nzDuration,
            nzAnimate: this.config.nzAnimate,
            nzPauseOnHover: this.config.nzPauseOnHover
        };
        return tslib_1.__assign({}, defaultOptions, options);
    };
    NzMessageContainerComponent.decorators = [
        { type: Component, args: [{
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    selector: 'nz-message-container',
                    exportAs: 'nzMessageContainer',
                    preserveWhitespaces: false,
                    template: "<div class=\"ant-message\" [style.top]=\"top\">\r\n  <nz-message *ngFor=\"let message of messages; let i = index\" [nzMessage]=\"message\" [nzIndex]=\"i\"></nz-message>\r\n</div>"
                }] }
    ];
    /** @nocollapse */
    NzMessageContainerComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [NZ_MESSAGE_DEFAULT_CONFIG,] }] },
        { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [NZ_MESSAGE_CONFIG,] }] }
    ]; };
    return NzMessageContainerComponent;
}());
export { NzMessageContainerComponent };
if (false) {
    /** @type {?} */
    NzMessageContainerComponent.prototype.messages;
    /** @type {?} */
    NzMessageContainerComponent.prototype.config;
    /** @type {?} */
    NzMessageContainerComponent.prototype.top;
    /**
     * @type {?}
     * @protected
     */
    NzMessageContainerComponent.prototype.cdr;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotbWVzc2FnZS1jb250YWluZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9tZXNzYWdlLyIsInNvdXJjZXMiOlsibnotbWVzc2FnZS1jb250YWluZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQVFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxNQUFNLEVBQ04sUUFBUSxFQUNSLGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBRS9CLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUVoRCxPQUFPLEVBQW1CLGlCQUFpQixFQUFFLHlCQUF5QixFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFHcEc7SUFhRSxxQ0FDWSxHQUFzQixFQUNlLGFBQThCLEVBQ3RDLE1BQXVCO1FBRnBELFFBQUcsR0FBSCxHQUFHLENBQW1CO1FBTGxDLGFBQVEsR0FBMEIsRUFBRSxDQUFDO1FBU25DLElBQUksQ0FBQyxTQUFTLHNCQUFNLGFBQWEsRUFBSyxNQUFNLEVBQUcsQ0FBQztJQUNsRCxDQUFDOzs7OztJQUVELCtDQUFTOzs7O0lBQVQsVUFBVSxNQUF1QjtRQUMvQixJQUFJLENBQUMsTUFBTSx3QkFBUSxJQUFJLENBQUMsTUFBTSxFQUFLLE1BQU0sQ0FBRSxDQUFDO1FBQzVDLElBQUksQ0FBQyxHQUFHLEdBQUcsVUFBVSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDekMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUMxQixDQUFDO0lBRUQ7OztPQUdHOzs7Ozs7SUFDSCxtREFBYTs7Ozs7SUFBYixVQUFjLE9BQTRCO1FBQ3hDLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLEVBQUU7WUFDbEQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1NBQzVCO1FBQ0QsT0FBTyxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsb0JBQW9CLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzdELE9BQU8sQ0FBQyxPQUFPLEdBQUcsSUFBSSxPQUFPLEVBQVcsQ0FBQztRQUN6QyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUM1QixJQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQzNCLENBQUM7SUFFRDs7OztPQUlHOzs7Ozs7O0lBQ0gsbURBQWE7Ozs7OztJQUFiLFVBQWMsU0FBaUIsRUFBRSxVQUEyQjtRQUE1RCxpQkFXQztRQVhnQywyQkFBQSxFQUFBLGtCQUEyQjtRQUMxRCxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUk7Ozs7O1FBQUMsVUFBQyxPQUFPLEVBQUUsS0FBSztZQUNoQyxJQUFJLE9BQU8sQ0FBQyxTQUFTLEtBQUssU0FBUyxFQUFFO2dCQUNuQyxLQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQy9CLEtBQUksQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLENBQUM7Z0JBQ3pCLG1CQUFBLE9BQU8sQ0FBQyxPQUFPLEVBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7Z0JBQ2xDLG1CQUFBLE9BQU8sQ0FBQyxPQUFPLEVBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQztnQkFDNUIsT0FBTyxJQUFJLENBQUM7YUFDYjtZQUNELE9BQU8sS0FBSyxDQUFDO1FBQ2YsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQ7O09BRUc7Ozs7O0lBQ0gsc0RBQWdCOzs7O0lBQWhCO1FBQ0UsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7UUFDbkIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUMzQixDQUFDO0lBRUQ7OztPQUdHOzs7Ozs7O0lBQ08sMERBQW9COzs7Ozs7SUFBOUIsVUFBK0IsT0FBOEI7O1lBQ3JELGNBQWMsR0FBeUI7WUFDM0MsVUFBVSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVTtZQUNsQyxTQUFTLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTO1lBQ2hDLGNBQWMsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLGNBQWM7U0FDM0M7UUFDRCw0QkFBWSxjQUFjLEVBQUssT0FBTyxFQUFHO0lBQzNDLENBQUM7O2dCQTlFRixTQUFTLFNBQUM7b0JBQ1QsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07b0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO29CQUNyQyxRQUFRLEVBQUUsc0JBQXNCO29CQUNoQyxRQUFRLEVBQUUsb0JBQW9CO29CQUM5QixtQkFBbUIsRUFBRSxLQUFLO29CQUMxQiw4TEFBb0Q7aUJBQ3JEOzs7O2dCQXBCQyxpQkFBaUI7Z0RBNEJkLFFBQVEsWUFBSSxNQUFNLFNBQUMseUJBQXlCO2dEQUM1QyxRQUFRLFlBQUksTUFBTSxTQUFDLGlCQUFpQjs7SUErRHpDLGtDQUFDO0NBQUEsQUEvRUQsSUErRUM7U0F2RVksMkJBQTJCOzs7SUFDdEMsK0NBQXFDOztJQUNyQyw2Q0FBa0M7O0lBQ2xDLDBDQUFtQjs7Ozs7SUFHakIsMENBQWdDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcclxuICovXHJcblxyXG5pbXBvcnQge1xyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIENoYW5nZURldGVjdG9yUmVmLFxyXG4gIENvbXBvbmVudCxcclxuICBJbmplY3QsXHJcbiAgT3B0aW9uYWwsXHJcbiAgVmlld0VuY2Fwc3VsYXRpb25cclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5cclxuaW1wb3J0IHsgdG9Dc3NQaXhlbCB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBOek1lc3NhZ2VDb25maWcsIE5aX01FU1NBR0VfQ09ORklHLCBOWl9NRVNTQUdFX0RFRkFVTFRfQ09ORklHIH0gZnJvbSAnLi9uei1tZXNzYWdlLWNvbmZpZyc7XHJcbmltcG9ydCB7IE56TWVzc2FnZURhdGFGaWxsZWQsIE56TWVzc2FnZURhdGFPcHRpb25zIH0gZnJvbSAnLi9uei1tZXNzYWdlLmRlZmluaXRpb25zJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgc2VsZWN0b3I6ICduei1tZXNzYWdlLWNvbnRhaW5lcicsXHJcbiAgZXhwb3J0QXM6ICduek1lc3NhZ2VDb250YWluZXInLFxyXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9uei1tZXNzYWdlLWNvbnRhaW5lci5jb21wb25lbnQuaHRtbCdcclxufSlcclxuZXhwb3J0IGNsYXNzIE56TWVzc2FnZUNvbnRhaW5lckNvbXBvbmVudCB7XHJcbiAgbWVzc2FnZXM6IE56TWVzc2FnZURhdGFGaWxsZWRbXSA9IFtdO1xyXG4gIGNvbmZpZzogUmVxdWlyZWQ8TnpNZXNzYWdlQ29uZmlnPjtcclxuICB0b3A6IHN0cmluZyB8IG51bGw7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJvdGVjdGVkIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgICBAT3B0aW9uYWwoKSBASW5qZWN0KE5aX01FU1NBR0VfREVGQVVMVF9DT05GSUcpIGRlZmF1bHRDb25maWc6IE56TWVzc2FnZUNvbmZpZyxcclxuICAgIEBPcHRpb25hbCgpIEBJbmplY3QoTlpfTUVTU0FHRV9DT05GSUcpIGNvbmZpZzogTnpNZXNzYWdlQ29uZmlnXHJcbiAgKSB7XHJcbiAgICB0aGlzLnNldENvbmZpZyh7IC4uLmRlZmF1bHRDb25maWcsIC4uLmNvbmZpZyB9KTtcclxuICB9XHJcblxyXG4gIHNldENvbmZpZyhjb25maWc6IE56TWVzc2FnZUNvbmZpZyk6IHZvaWQge1xyXG4gICAgdGhpcy5jb25maWcgPSB7IC4uLnRoaXMuY29uZmlnLCAuLi5jb25maWcgfTtcclxuICAgIHRoaXMudG9wID0gdG9Dc3NQaXhlbCh0aGlzLmNvbmZpZy5uelRvcCk7XHJcbiAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENyZWF0ZSBhIG5ldyBtZXNzYWdlLlxyXG4gICAqIEBwYXJhbSBtZXNzYWdlIFBhcnNlZCBtZXNzYWdlIGNvbmZpZ3VyYXRpb24uXHJcbiAgICovXHJcbiAgY3JlYXRlTWVzc2FnZShtZXNzYWdlOiBOek1lc3NhZ2VEYXRhRmlsbGVkKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5tZXNzYWdlcy5sZW5ndGggPj0gdGhpcy5jb25maWcubnpNYXhTdGFjaykge1xyXG4gICAgICB0aGlzLm1lc3NhZ2VzLnNwbGljZSgwLCAxKTtcclxuICAgIH1cclxuICAgIG1lc3NhZ2Uub3B0aW9ucyA9IHRoaXMuX21lcmdlTWVzc2FnZU9wdGlvbnMobWVzc2FnZS5vcHRpb25zKTtcclxuICAgIG1lc3NhZ2Uub25DbG9zZSA9IG5ldyBTdWJqZWN0PGJvb2xlYW4+KCk7XHJcbiAgICB0aGlzLm1lc3NhZ2VzLnB1c2gobWVzc2FnZSk7XHJcbiAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBSZW1vdmUgYSBtZXNzYWdlIGJ5IGBtZXNzYWdlSWRgLlxyXG4gICAqIEBwYXJhbSBtZXNzYWdlSWQgSWQgb2YgdGhlIG1lc3NhZ2UgdG8gYmUgcmVtb3ZlZC5cclxuICAgKiBAcGFyYW0gdXNlckFjdGlvbiBXaGV0aGVyIHRoaXMgaXMgY2xvc2VkIGJ5IHVzZXIgaW50ZXJhY3Rpb24uXHJcbiAgICovXHJcbiAgcmVtb3ZlTWVzc2FnZShtZXNzYWdlSWQ6IHN0cmluZywgdXNlckFjdGlvbjogYm9vbGVhbiA9IGZhbHNlKTogdm9pZCB7XHJcbiAgICB0aGlzLm1lc3NhZ2VzLnNvbWUoKG1lc3NhZ2UsIGluZGV4KSA9PiB7XHJcbiAgICAgIGlmIChtZXNzYWdlLm1lc3NhZ2VJZCA9PT0gbWVzc2FnZUlkKSB7XHJcbiAgICAgICAgdGhpcy5tZXNzYWdlcy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcclxuICAgICAgICBtZXNzYWdlLm9uQ2xvc2UhLm5leHQodXNlckFjdGlvbik7XHJcbiAgICAgICAgbWVzc2FnZS5vbkNsb3NlIS5jb21wbGV0ZSgpO1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUmVtb3ZlIGFsbCBtZXNzYWdlcy5cclxuICAgKi9cclxuICByZW1vdmVNZXNzYWdlQWxsKCk6IHZvaWQge1xyXG4gICAgdGhpcy5tZXNzYWdlcyA9IFtdO1xyXG4gICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogTWVyZ2UgZGVmYXVsdCBvcHRpb25zIGFuZCBjdXN0b20gbWVzc2FnZSBvcHRpb25zXHJcbiAgICogQHBhcmFtIG9wdGlvbnNcclxuICAgKi9cclxuICBwcm90ZWN0ZWQgX21lcmdlTWVzc2FnZU9wdGlvbnMob3B0aW9ucz86IE56TWVzc2FnZURhdGFPcHRpb25zKTogTnpNZXNzYWdlRGF0YU9wdGlvbnMge1xyXG4gICAgY29uc3QgZGVmYXVsdE9wdGlvbnM6IE56TWVzc2FnZURhdGFPcHRpb25zID0ge1xyXG4gICAgICBuekR1cmF0aW9uOiB0aGlzLmNvbmZpZy5uekR1cmF0aW9uLFxyXG4gICAgICBuekFuaW1hdGU6IHRoaXMuY29uZmlnLm56QW5pbWF0ZSxcclxuICAgICAgbnpQYXVzZU9uSG92ZXI6IHRoaXMuY29uZmlnLm56UGF1c2VPbkhvdmVyXHJcbiAgICB9O1xyXG4gICAgcmV0dXJuIHsgLi4uZGVmYXVsdE9wdGlvbnMsIC4uLm9wdGlvbnMgfTtcclxuICB9XHJcbn1cclxuIl19