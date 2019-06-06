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
import { Overlay } from '@angular/cdk/overlay';
import { ApplicationRef, ComponentFactoryResolver, Injectable, Injector } from '@angular/core';
import { NzMessageContainerComponent } from './nz-message-container.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/overlay";
/** @type {?} */
let globalCounter = 0;
/**
 * @template ContainerClass, MessageData, MessageConfig
 */
export class NzMessageBaseService {
    /**
     * @param {?} overlay
     * @param {?} containerClass
     * @param {?} injector
     * @param {?} cfr
     * @param {?} appRef
     * @param {?=} _idPrefix
     */
    constructor(overlay, containerClass, injector, cfr, appRef, _idPrefix = '') {
        this.overlay = overlay;
        this.containerClass = containerClass;
        this.injector = injector;
        this.cfr = cfr;
        this.appRef = appRef;
        this._idPrefix = _idPrefix;
        this._container = this.createContainer();
    }
    /**
     * @param {?=} messageId
     * @return {?}
     */
    remove(messageId) {
        if (messageId) {
            this._container.removeMessage(messageId);
        }
        else {
            this._container.removeMessageAll();
        }
    }
    /**
     * @param {?} message
     * @param {?=} options
     * @return {?}
     */
    createMessage(message, options) {
        /** @type {?} */
        const resultMessage = Object.assign({}, ((/** @type {?} */ (message))), {
            createdAt: new Date(),
            messageId: this._generateMessageId(),
            options
        });
        this._container.createMessage(resultMessage);
        return resultMessage;
    }
    /**
     * @param {?} config
     * @return {?}
     */
    config(config) {
        this._container.setConfig(config);
    }
    /**
     * @protected
     * @return {?}
     */
    _generateMessageId() {
        return this._idPrefix + globalCounter++;
    }
    // Manually creating container for overlay to avoid multi-checking error, see: https://github.com/NG-ZORRO/ng-zorro-antd/issues/391
    // NOTE: we never clean up the container component and it's overlay resources, if we should, we need to do it by our own codes.
    /**
     * @private
     * @return {?}
     */
    createContainer() {
        /** @type {?} */
        const factory = this.cfr.resolveComponentFactory(this.containerClass);
        /** @type {?} */
        const componentRef = factory.create(this.injector);
        componentRef.changeDetectorRef.detectChanges(); // Immediately change detection to avoid multi-checking error
        this.appRef.attachView(componentRef.hostView); // Load view into app root
        // Load view into app root
        /** @type {?} */
        const overlayPane = this.overlay.create().overlayElement;
        overlayPane.style.zIndex = '1010'; // Patching: assign the same zIndex of ant-message to it's parent overlay panel, to the ant-message's zindex work.
        overlayPane.appendChild((/** @type {?} */ (((/** @type {?} */ (componentRef.hostView))).rootNodes[0])));
        return componentRef.instance;
    }
}
if (false) {
    /**
     * @type {?}
     * @protected
     */
    NzMessageBaseService.prototype._container;
    /**
     * @type {?}
     * @private
     */
    NzMessageBaseService.prototype.overlay;
    /**
     * @type {?}
     * @private
     */
    NzMessageBaseService.prototype.containerClass;
    /**
     * @type {?}
     * @private
     */
    NzMessageBaseService.prototype.injector;
    /**
     * @type {?}
     * @private
     */
    NzMessageBaseService.prototype.cfr;
    /**
     * @type {?}
     * @private
     */
    NzMessageBaseService.prototype.appRef;
    /**
     * @type {?}
     * @private
     */
    NzMessageBaseService.prototype._idPrefix;
}
export class NzMessageService extends NzMessageBaseService {
    /**
     * @param {?} overlay
     * @param {?} injector
     * @param {?} cfr
     * @param {?} appRef
     */
    constructor(overlay, injector, cfr, appRef) {
        super(overlay, NzMessageContainerComponent, injector, cfr, appRef, 'message-');
    }
    // Shortcut methods
    /**
     * @param {?} content
     * @param {?=} options
     * @return {?}
     */
    success(content, options) {
        return this.createMessage({ type: 'success', content }, options);
    }
    /**
     * @param {?} content
     * @param {?=} options
     * @return {?}
     */
    error(content, options) {
        return this.createMessage({ type: 'error', content }, options);
    }
    /**
     * @param {?} content
     * @param {?=} options
     * @return {?}
     */
    info(content, options) {
        return this.createMessage({ type: 'info', content }, options);
    }
    /**
     * @param {?} content
     * @param {?=} options
     * @return {?}
     */
    warning(content, options) {
        return this.createMessage({ type: 'warning', content }, options);
    }
    /**
     * @param {?} content
     * @param {?=} options
     * @return {?}
     */
    loading(content, options) {
        return this.createMessage({ type: 'loading', content }, options);
    }
    /**
     * @param {?} type
     * @param {?} content
     * @param {?=} options
     * @return {?}
     */
    create(type, content, options) {
        return this.createMessage({ type, content }, options);
    }
}
NzMessageService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
NzMessageService.ctorParameters = () => [
    { type: Overlay },
    { type: Injector },
    { type: ComponentFactoryResolver },
    { type: ApplicationRef }
];
/** @nocollapse */ NzMessageService.ngInjectableDef = i0.defineInjectable({ factory: function NzMessageService_Factory() { return new NzMessageService(i0.inject(i1.Overlay), i0.inject(i0.INJECTOR), i0.inject(i0.ComponentFactoryResolver), i0.inject(i0.ApplicationRef)); }, token: NzMessageService, providedIn: "root" });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotbWVzc2FnZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9tZXNzYWdlLyIsInNvdXJjZXMiOlsibnotbWVzc2FnZS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBUUEsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQy9DLE9BQU8sRUFDTCxjQUFjLEVBQ2Qsd0JBQXdCLEVBRXhCLFVBQVUsRUFDVixRQUFRLEVBR1QsTUFBTSxlQUFlLENBQUM7QUFHdkIsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7Ozs7SUFHM0UsYUFBYSxHQUFHLENBQUM7Ozs7QUFFckIsTUFBTSxPQUFPLG9CQUFvQjs7Ozs7Ozs7O0lBTy9CLFlBQ1UsT0FBZ0IsRUFDaEIsY0FBb0MsRUFDcEMsUUFBa0IsRUFDbEIsR0FBNkIsRUFDN0IsTUFBc0IsRUFDdEIsWUFBb0IsRUFBRTtRQUx0QixZQUFPLEdBQVAsT0FBTyxDQUFTO1FBQ2hCLG1CQUFjLEdBQWQsY0FBYyxDQUFzQjtRQUNwQyxhQUFRLEdBQVIsUUFBUSxDQUFVO1FBQ2xCLFFBQUcsR0FBSCxHQUFHLENBQTBCO1FBQzdCLFdBQU0sR0FBTixNQUFNLENBQWdCO1FBQ3RCLGNBQVMsR0FBVCxTQUFTLENBQWE7UUFFOUIsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7SUFDM0MsQ0FBQzs7Ozs7SUFFRCxNQUFNLENBQUMsU0FBa0I7UUFDdkIsSUFBSSxTQUFTLEVBQUU7WUFDYixJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsQ0FBQztTQUMxQzthQUFNO1lBQ0wsSUFBSSxDQUFDLFVBQVUsQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1NBQ3BDO0lBQ0gsQ0FBQzs7Ozs7O0lBRUQsYUFBYSxDQUFDLE9BQW9CLEVBQUUsT0FBOEI7O2NBQzFELGFBQWEscUJBQ2Qs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LENBQUMsYUFBYSxDQUFDLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUUsRUFBRSxPQUFPLENBQUMsQ0FBQztJQUNuRSxDQUFDOzs7Ozs7O0lBRUQsTUFBTSxDQUNKLElBQW1FLEVBQ25FLE9BQW1DLEVBQ25DLE9BQThCO1FBRTlCLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsRUFBRSxPQUFPLENBQUMsQ0FBQztJQUN4RCxDQUFDOzs7WUF2Q0YsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7O1lBbEZRLE9BQU87WUFNZCxRQUFRO1lBSFIsd0JBQXdCO1lBRHhCLGNBQWMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuXHJcbmltcG9ydCB7IE92ZXJsYXkgfSBmcm9tICdAYW5ndWxhci9jZGsvb3ZlcmxheSc7XHJcbmltcG9ydCB7XHJcbiAgQXBwbGljYXRpb25SZWYsXHJcbiAgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxyXG4gIEVtYmVkZGVkVmlld1JlZixcclxuICBJbmplY3RhYmxlLFxyXG4gIEluamVjdG9yLFxyXG4gIFRlbXBsYXRlUmVmLFxyXG4gIFR5cGVcclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IE56TWVzc2FnZUNvbmZpZyB9IGZyb20gJy4vbnotbWVzc2FnZS1jb25maWcnO1xyXG5pbXBvcnQgeyBOek1lc3NhZ2VDb250YWluZXJDb21wb25lbnQgfSBmcm9tICcuL256LW1lc3NhZ2UtY29udGFpbmVyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE56TWVzc2FnZURhdGEsIE56TWVzc2FnZURhdGFGaWxsZWQsIE56TWVzc2FnZURhdGFPcHRpb25zIH0gZnJvbSAnLi9uei1tZXNzYWdlLmRlZmluaXRpb25zJztcclxuXHJcbmxldCBnbG9iYWxDb3VudGVyID0gMDtcclxuXHJcbmV4cG9ydCBjbGFzcyBOek1lc3NhZ2VCYXNlU2VydmljZTxcclxuICBDb250YWluZXJDbGFzcyBleHRlbmRzIE56TWVzc2FnZUNvbnRhaW5lckNvbXBvbmVudCxcclxuICBNZXNzYWdlRGF0YSxcclxuICBNZXNzYWdlQ29uZmlnIGV4dGVuZHMgTnpNZXNzYWdlQ29uZmlnXHJcbj4ge1xyXG4gIHByb3RlY3RlZCBfY29udGFpbmVyOiBDb250YWluZXJDbGFzcztcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIG92ZXJsYXk6IE92ZXJsYXksXHJcbiAgICBwcml2YXRlIGNvbnRhaW5lckNsYXNzOiBUeXBlPENvbnRhaW5lckNsYXNzPixcclxuICAgIHByaXZhdGUgaW5qZWN0b3I6IEluamVjdG9yLFxyXG4gICAgcHJpdmF0ZSBjZnI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcclxuICAgIHByaXZhdGUgYXBwUmVmOiBBcHBsaWNhdGlvblJlZixcclxuICAgIHByaXZhdGUgX2lkUHJlZml4OiBzdHJpbmcgPSAnJ1xyXG4gICkge1xyXG4gICAgdGhpcy5fY29udGFpbmVyID0gdGhpcy5jcmVhdGVDb250YWluZXIoKTtcclxuICB9XHJcblxyXG4gIHJlbW92ZShtZXNzYWdlSWQ/OiBzdHJpbmcpOiB2b2lkIHtcclxuICAgIGlmIChtZXNzYWdlSWQpIHtcclxuICAgICAgdGhpcy5fY29udGFpbmVyLnJlbW92ZU1lc3NhZ2UobWVzc2FnZUlkKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuX2NvbnRhaW5lci5yZW1vdmVNZXNzYWdlQWxsKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjcmVhdGVNZXNzYWdlKG1lc3NhZ2U6IE1lc3NhZ2VEYXRhLCBvcHRpb25zPzogTnpNZXNzYWdlRGF0YU9wdGlvbnMpOiBOek1lc3NhZ2VEYXRhRmlsbGVkIHtcclxuICAgIGNvbnN0IHJlc3VsdE1lc3NhZ2U6IE56TWVzc2FnZURhdGFGaWxsZWQgPSB7XHJcbiAgICAgIC4uLihtZXNzYWdlIGFzIE56TWVzc2FnZURhdGEpLFxyXG4gICAgICAuLi57XHJcbiAgICAgICAgY3JlYXRlZEF0OiBuZXcgRGF0ZSgpLFxyXG4gICAgICAgIG1lc3NhZ2VJZDogdGhpcy5fZ2VuZXJhdGVNZXNzYWdlSWQoKSxcclxuICAgICAgICBvcHRpb25zXHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgICB0aGlzLl9jb250YWluZXIuY3JlYXRlTWVzc2FnZShyZXN1bHRNZXNzYWdlKTtcclxuXHJcbiAgICByZXR1cm4gcmVzdWx0TWVzc2FnZTtcclxuICB9XHJcblxyXG4gIGNvbmZpZyhjb25maWc6IE1lc3NhZ2VDb25maWcpOiB2b2lkIHtcclxuICAgIHRoaXMuX2NvbnRhaW5lci5zZXRDb25maWcoY29uZmlnKTtcclxuICB9XHJcblxyXG4gIHByb3RlY3RlZCBfZ2VuZXJhdGVNZXNzYWdlSWQoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0aGlzLl9pZFByZWZpeCArIGdsb2JhbENvdW50ZXIrKztcclxuICB9XHJcblxyXG4gIC8vIE1hbnVhbGx5IGNyZWF0aW5nIGNvbnRhaW5lciBmb3Igb3ZlcmxheSB0byBhdm9pZCBtdWx0aS1jaGVja2luZyBlcnJvciwgc2VlOiBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9pc3N1ZXMvMzkxXHJcbiAgLy8gTk9URTogd2UgbmV2ZXIgY2xlYW4gdXAgdGhlIGNvbnRhaW5lciBjb21wb25lbnQgYW5kIGl0J3Mgb3ZlcmxheSByZXNvdXJjZXMsIGlmIHdlIHNob3VsZCwgd2UgbmVlZCB0byBkbyBpdCBieSBvdXIgb3duIGNvZGVzLlxyXG4gIHByaXZhdGUgY3JlYXRlQ29udGFpbmVyKCk6IENvbnRhaW5lckNsYXNzIHtcclxuICAgIGNvbnN0IGZhY3RvcnkgPSB0aGlzLmNmci5yZXNvbHZlQ29tcG9uZW50RmFjdG9yeSh0aGlzLmNvbnRhaW5lckNsYXNzKTtcclxuICAgIGNvbnN0IGNvbXBvbmVudFJlZiA9IGZhY3RvcnkuY3JlYXRlKHRoaXMuaW5qZWN0b3IpOyAvLyBVc2Ugcm9vdCBpbmplY3RvclxyXG4gICAgY29tcG9uZW50UmVmLmNoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTsgLy8gSW1tZWRpYXRlbHkgY2hhbmdlIGRldGVjdGlvbiB0byBhdm9pZCBtdWx0aS1jaGVja2luZyBlcnJvclxyXG4gICAgdGhpcy5hcHBSZWYuYXR0YWNoVmlldyhjb21wb25lbnRSZWYuaG9zdFZpZXcpOyAvLyBMb2FkIHZpZXcgaW50byBhcHAgcm9vdFxyXG4gICAgY29uc3Qgb3ZlcmxheVBhbmUgPSB0aGlzLm92ZXJsYXkuY3JlYXRlKCkub3ZlcmxheUVsZW1lbnQ7XHJcbiAgICBvdmVybGF5UGFuZS5zdHlsZS56SW5kZXggPSAnMTAxMCc7IC8vIFBhdGNoaW5nOiBhc3NpZ24gdGhlIHNhbWUgekluZGV4IG9mIGFudC1tZXNzYWdlIHRvIGl0J3MgcGFyZW50IG92ZXJsYXkgcGFuZWwsIHRvIHRoZSBhbnQtbWVzc2FnZSdzIHppbmRleCB3b3JrLlxyXG4gICAgb3ZlcmxheVBhbmUuYXBwZW5kQ2hpbGQoKGNvbXBvbmVudFJlZi5ob3N0VmlldyBhcyBFbWJlZGRlZFZpZXdSZWY8e30+KS5yb290Tm9kZXNbMF0gYXMgSFRNTEVsZW1lbnQpO1xyXG5cclxuICAgIHJldHVybiBjb21wb25lbnRSZWYuaW5zdGFuY2U7XHJcbiAgfVxyXG59XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOek1lc3NhZ2VTZXJ2aWNlIGV4dGVuZHMgTnpNZXNzYWdlQmFzZVNlcnZpY2U8XHJcbiAgTnpNZXNzYWdlQ29udGFpbmVyQ29tcG9uZW50LFxyXG4gIE56TWVzc2FnZURhdGEsXHJcbiAgTnpNZXNzYWdlQ29uZmlnXHJcbj4ge1xyXG4gIGNvbnN0cnVjdG9yKG92ZXJsYXk6IE92ZXJsYXksIGluamVjdG9yOiBJbmplY3RvciwgY2ZyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsIGFwcFJlZjogQXBwbGljYXRpb25SZWYpIHtcclxuICAgIHN1cGVyKG92ZXJsYXksIE56TWVzc2FnZUNvbnRhaW5lckNvbXBvbmVudCwgaW5qZWN0b3IsIGNmciwgYXBwUmVmLCAnbWVzc2FnZS0nKTtcclxuICB9XHJcblxyXG4gIC8vIFNob3J0Y3V0IG1ldGhvZHNcclxuICBzdWNjZXNzKGNvbnRlbnQ6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+LCBvcHRpb25zPzogTnpNZXNzYWdlRGF0YU9wdGlvbnMpOiBOek1lc3NhZ2VEYXRhRmlsbGVkIHtcclxuICAgIHJldHVybiB0aGlzLmNyZWF0ZU1lc3NhZ2UoeyB0eXBlOiAnc3VjY2VzcycsIGNvbnRlbnQgfSwgb3B0aW9ucyk7XHJcbiAgfVxyXG5cclxuICBlcnJvcihjb250ZW50OiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPiwgb3B0aW9ucz86IE56TWVzc2FnZURhdGFPcHRpb25zKTogTnpNZXNzYWdlRGF0YUZpbGxlZCB7XHJcbiAgICByZXR1cm4gdGhpcy5jcmVhdGVNZXNzYWdlKHsgdHlwZTogJ2Vycm9yJywgY29udGVudCB9LCBvcHRpb25zKTtcclxuICB9XHJcblxyXG4gIGluZm8oY29udGVudDogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD4sIG9wdGlvbnM/OiBOek1lc3NhZ2VEYXRhT3B0aW9ucyk6IE56TWVzc2FnZURhdGFGaWxsZWQge1xyXG4gICAgcmV0dXJuIHRoaXMuY3JlYXRlTWVzc2FnZSh7IHR5cGU6ICdpbmZvJywgY29udGVudCB9LCBvcHRpb25zKTtcclxuICB9XHJcblxyXG4gIHdhcm5pbmcoY29udGVudDogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD4sIG9wdGlvbnM/OiBOek1lc3NhZ2VEYXRhT3B0aW9ucyk6IE56TWVzc2FnZURhdGFGaWxsZWQge1xyXG4gICAgcmV0dXJuIHRoaXMuY3JlYXRlTWVzc2FnZSh7IHR5cGU6ICd3YXJuaW5nJywgY29udGVudCB9LCBvcHRpb25zKTtcclxuICB9XHJcblxyXG4gIGxvYWRpbmcoY29udGVudDogc3RyaW5nIHwgVGVtcGxhdGVSZWY8dm9pZD4sIG9wdGlvbnM/OiBOek1lc3NhZ2VEYXRhT3B0aW9ucyk6IE56TWVzc2FnZURhdGFGaWxsZWQge1xyXG4gICAgcmV0dXJuIHRoaXMuY3JlYXRlTWVzc2FnZSh7IHR5cGU6ICdsb2FkaW5nJywgY29udGVudCB9LCBvcHRpb25zKTtcclxuICB9XHJcblxyXG4gIGNyZWF0ZShcclxuICAgIHR5cGU6ICdzdWNjZXNzJyB8ICdpbmZvJyB8ICd3YXJuaW5nJyB8ICdlcnJvcicgfCAnbG9hZGluZycgfCBzdHJpbmcsXHJcbiAgICBjb250ZW50OiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPixcclxuICAgIG9wdGlvbnM/OiBOek1lc3NhZ2VEYXRhT3B0aW9uc1xyXG4gICk6IE56TWVzc2FnZURhdGFGaWxsZWQge1xyXG4gICAgcmV0dXJuIHRoaXMuY3JlYXRlTWVzc2FnZSh7IHR5cGUsIGNvbnRlbnQgfSwgb3B0aW9ucyk7XHJcbiAgfVxyXG59XHJcbiJdfQ==