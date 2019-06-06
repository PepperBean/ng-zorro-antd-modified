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
import { Overlay } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { NzDrawerComponent } from './nz-drawer.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/overlay";
/**
 * @template R
 */
var /**
 * @template R
 */
DrawerBuilderForService = /** @class */ (function () {
    function DrawerBuilderForService(overlay, options) {
        var _this = this;
        this.overlay = overlay;
        this.options = options;
        this.unsubscribe$ = new Subject();
        /**
         * pick {\@link NzDrawerOptions.nzOnCancel} and omit this option
         */
        var _a = this.options, nzOnCancel = _a.nzOnCancel, componentOption = tslib_1.__rest(_a, ["nzOnCancel"]);
        this.createDrawer();
        this.updateOptions(componentOption);
        // Prevent repeatedly open drawer when tap focus element.
        (/** @type {?} */ (this.drawerRef)).instance.savePreviouslyFocusedElement();
        (/** @type {?} */ (this.drawerRef)).instance.nzOnViewInit.pipe(takeUntil(this.unsubscribe$)).subscribe((/**
         * @return {?}
         */
        function () {
            (/** @type {?} */ (_this.drawerRef)).instance.open();
        }));
        (/** @type {?} */ (this.drawerRef)).instance.nzOnClose.subscribe((/**
         * @return {?}
         */
        function () {
            if (nzOnCancel) {
                nzOnCancel().then((/**
                 * @param {?} canClose
                 * @return {?}
                 */
                function (canClose) {
                    if (canClose !== false) {
                        (/** @type {?} */ (_this.drawerRef)).instance.close();
                    }
                }));
            }
            else {
                (/** @type {?} */ (_this.drawerRef)).instance.close();
            }
        }));
        (/** @type {?} */ (this.drawerRef)).instance.afterClose.pipe(takeUntil(this.unsubscribe$)).subscribe((/**
         * @return {?}
         */
        function () {
            _this.overlayRef.dispose();
            _this.drawerRef = null;
            _this.unsubscribe$.next();
            _this.unsubscribe$.complete();
        }));
    }
    /**
     * @return {?}
     */
    DrawerBuilderForService.prototype.getInstance = /**
     * @return {?}
     */
    function () {
        return (/** @type {?} */ (this.drawerRef)) && (/** @type {?} */ (this.drawerRef)).instance;
    };
    /**
     * @return {?}
     */
    DrawerBuilderForService.prototype.createDrawer = /**
     * @return {?}
     */
    function () {
        this.overlayRef = this.overlay.create();
        this.drawerRef = this.overlayRef.attach(new ComponentPortal(NzDrawerComponent));
    };
    /**
     * @param {?} options
     * @return {?}
     */
    DrawerBuilderForService.prototype.updateOptions = /**
     * @param {?} options
     * @return {?}
     */
    function (options) {
        Object.assign((/** @type {?} */ (this.drawerRef)).instance, options);
    };
    return DrawerBuilderForService;
}());
/**
 * @template R
 */
export { DrawerBuilderForService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    DrawerBuilderForService.prototype.drawerRef;
    /**
     * @type {?}
     * @private
     */
    DrawerBuilderForService.prototype.overlayRef;
    /**
     * @type {?}
     * @private
     */
    DrawerBuilderForService.prototype.unsubscribe$;
    /**
     * @type {?}
     * @private
     */
    DrawerBuilderForService.prototype.overlay;
    /**
     * @type {?}
     * @private
     */
    DrawerBuilderForService.prototype.options;
}
var NzDrawerService = /** @class */ (function () {
    function NzDrawerService(overlay) {
        this.overlay = overlay;
    }
    // tslint:disable-next-line:no-any
    // tslint:disable-next-line:no-any
    /**
     * @template T, D, R
     * @param {?} options
     * @return {?}
     */
    NzDrawerService.prototype.create = 
    // tslint:disable-next-line:no-any
    /**
     * @template T, D, R
     * @param {?} options
     * @return {?}
     */
    function (options) {
        return new DrawerBuilderForService(this.overlay, options).getInstance();
    };
    NzDrawerService.decorators = [
        { type: Injectable, args: [{ providedIn: 'root' },] }
    ];
    /** @nocollapse */
    NzDrawerService.ctorParameters = function () { return [
        { type: Overlay }
    ]; };
    /** @nocollapse */ NzDrawerService.ngInjectableDef = i0.defineInjectable({ factory: function NzDrawerService_Factory() { return new NzDrawerService(i0.inject(i1.Overlay)); }, token: NzDrawerService, providedIn: "root" });
    return NzDrawerService;
}());
export { NzDrawerService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    NzDrawerService.prototype.overlay;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotZHJhd2VyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL2RyYXdlci8iLCJzb3VyY2VzIjpbIm56LWRyYXdlci5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQVFBLE9BQU8sRUFBRSxPQUFPLEVBQWMsTUFBTSxzQkFBc0IsQ0FBQztBQUMzRCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDdEQsT0FBTyxFQUFnQixVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDekQsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMvQixPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFHM0MsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sdUJBQXVCLENBQUM7Ozs7OztBQUUxRDs7OztJQUtFLGlDQUFvQixPQUFnQixFQUFVLE9BQXdCO1FBQXRFLGlCQTRCQztRQTVCbUIsWUFBTyxHQUFQLE9BQU8sQ0FBUztRQUFVLFlBQU8sR0FBUCxPQUFPLENBQWlCO1FBRjlELGlCQUFZLEdBQUcsSUFBSSxPQUFPLEVBQVEsQ0FBQzs7OztZQUluQyxpQkFBaUQsRUFBL0MsMEJBQVUsRUFBRSxvREFBa0I7UUFDdEMsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxhQUFhLENBQUMsZUFBZSxDQUFDLENBQUM7UUFDcEMseURBQXlEO1FBQ3pELG1CQUFBLElBQUksQ0FBQyxTQUFTLEVBQUMsQ0FBQyxRQUFRLENBQUMsNEJBQTRCLEVBQUUsQ0FBQztRQUN4RCxtQkFBQSxJQUFJLENBQUMsU0FBUyxFQUFDLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLFNBQVM7OztRQUFDO1lBQ2pGLG1CQUFBLEtBQUksQ0FBQyxTQUFTLEVBQUMsQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDbEMsQ0FBQyxFQUFDLENBQUM7UUFDSCxtQkFBQSxJQUFJLENBQUMsU0FBUyxFQUFDLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxTQUFTOzs7UUFBQztZQUMzQyxJQUFJLFVBQVUsRUFBRTtnQkFDZCxVQUFVLEVBQUUsQ0FBQyxJQUFJOzs7O2dCQUFDLFVBQUEsUUFBUTtvQkFDeEIsSUFBSSxRQUFRLEtBQUssS0FBSyxFQUFFO3dCQUN0QixtQkFBQSxLQUFJLENBQUMsU0FBUyxFQUFDLENBQUMsUUFBUSxDQUFDLEtBQUssRUFBRSxDQUFDO3FCQUNsQztnQkFDSCxDQUFDLEVBQUMsQ0FBQzthQUNKO2lCQUFNO2dCQUNMLG1CQUFBLEtBQUksQ0FBQyxTQUFTLEVBQUMsQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLENBQUM7YUFDbEM7UUFDSCxDQUFDLEVBQUMsQ0FBQztRQUVILG1CQUFBLElBQUksQ0FBQyxTQUFTLEVBQUMsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsU0FBUzs7O1FBQUM7WUFDL0UsS0FBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUMxQixLQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztZQUN0QixLQUFJLENBQUMsWUFBWSxDQUFDLElBQUksRUFBRSxDQUFDO1lBQ3pCLEtBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDL0IsQ0FBQyxFQUFDLENBQUM7SUFDTCxDQUFDOzs7O0lBRUQsNkNBQVc7OztJQUFYO1FBQ0UsT0FBTyxtQkFBQSxJQUFJLENBQUMsU0FBUyxFQUFDLElBQUksbUJBQUEsSUFBSSxDQUFDLFNBQVMsRUFBQyxDQUFDLFFBQVEsQ0FBQztJQUNyRCxDQUFDOzs7O0lBRUQsOENBQVk7OztJQUFaO1FBQ0UsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ3hDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsSUFBSSxlQUFlLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDO0lBQ2xGLENBQUM7Ozs7O0lBRUQsK0NBQWE7Ozs7SUFBYixVQUFjLE9BQW1DO1FBQy9DLE1BQU0sQ0FBQyxNQUFNLENBQUMsbUJBQUEsSUFBSSxDQUFDLFNBQVMsRUFBQyxDQUFDLFFBQVEsRUFBRSxPQUFPLENBQUMsQ0FBQztJQUNuRCxDQUFDO0lBQ0gsOEJBQUM7QUFBRCxDQUFDLEFBL0NELElBK0NDOzs7Ozs7Ozs7O0lBOUNDLDRDQUEwRDs7Ozs7SUFDMUQsNkNBQStCOzs7OztJQUMvQiwrQ0FBMkM7Ozs7O0lBRS9CLDBDQUF3Qjs7Ozs7SUFBRSwwQ0FBZ0M7O0FBNEN4RTtJQUVFLHlCQUFvQixPQUFnQjtRQUFoQixZQUFPLEdBQVAsT0FBTyxDQUFTO0lBQUcsQ0FBQztJQUV4QyxrQ0FBa0M7Ozs7Ozs7SUFDbEMsZ0NBQU07Ozs7Ozs7SUFBTixVQUFrQyxPQUE4QjtRQUM5RCxPQUFPLElBQUksdUJBQXVCLENBQUksSUFBSSxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUM3RSxDQUFDOztnQkFQRixVQUFVLFNBQUMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFOzs7O2dCQTFEekIsT0FBTzs7OzBCQVJoQjtDQTBFQyxBQVJELElBUUM7U0FQWSxlQUFlOzs7Ozs7SUFDZCxrQ0FBd0IiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuXHJcbmltcG9ydCB7IE92ZXJsYXksIE92ZXJsYXlSZWYgfSBmcm9tICdAYW5ndWxhci9jZGsvb3ZlcmxheSc7XHJcbmltcG9ydCB7IENvbXBvbmVudFBvcnRhbCB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wb3J0YWwnO1xyXG5pbXBvcnQgeyBDb21wb25lbnRSZWYsIEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcbmltcG9ydCB7IE56RHJhd2VyT3B0aW9ucywgTnpEcmF3ZXJPcHRpb25zT2ZDb21wb25lbnQgfSBmcm9tICcuL256LWRyYXdlci1vcHRpb25zJztcclxuaW1wb3J0IHsgTnpEcmF3ZXJSZWYgfSBmcm9tICcuL256LWRyYXdlci1yZWYnO1xyXG5pbXBvcnQgeyBOekRyYXdlckNvbXBvbmVudCB9IGZyb20gJy4vbnotZHJhd2VyLmNvbXBvbmVudCc7XHJcblxyXG5leHBvcnQgY2xhc3MgRHJhd2VyQnVpbGRlckZvclNlcnZpY2U8Uj4ge1xyXG4gIHByaXZhdGUgZHJhd2VyUmVmOiBDb21wb25lbnRSZWY8TnpEcmF3ZXJDb21wb25lbnQ+IHwgbnVsbDtcclxuICBwcml2YXRlIG92ZXJsYXlSZWY6IE92ZXJsYXlSZWY7XHJcbiAgcHJpdmF0ZSB1bnN1YnNjcmliZSQgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG92ZXJsYXk6IE92ZXJsYXksIHByaXZhdGUgb3B0aW9uczogTnpEcmF3ZXJPcHRpb25zKSB7XHJcbiAgICAvKiogcGljayB7QGxpbmsgTnpEcmF3ZXJPcHRpb25zLm56T25DYW5jZWx9IGFuZCBvbWl0IHRoaXMgb3B0aW9uICovXHJcbiAgICBjb25zdCB7IG56T25DYW5jZWwsIC4uLmNvbXBvbmVudE9wdGlvbiB9ID0gdGhpcy5vcHRpb25zO1xyXG4gICAgdGhpcy5jcmVhdGVEcmF3ZXIoKTtcclxuICAgIHRoaXMudXBkYXRlT3B0aW9ucyhjb21wb25lbnRPcHRpb24pO1xyXG4gICAgLy8gUHJldmVudCByZXBlYXRlZGx5IG9wZW4gZHJhd2VyIHdoZW4gdGFwIGZvY3VzIGVsZW1lbnQuXHJcbiAgICB0aGlzLmRyYXdlclJlZiEuaW5zdGFuY2Uuc2F2ZVByZXZpb3VzbHlGb2N1c2VkRWxlbWVudCgpO1xyXG4gICAgdGhpcy5kcmF3ZXJSZWYhLmluc3RhbmNlLm56T25WaWV3SW5pdC5waXBlKHRha2VVbnRpbCh0aGlzLnVuc3Vic2NyaWJlJCkpLnN1YnNjcmliZSgoKSA9PiB7XHJcbiAgICAgIHRoaXMuZHJhd2VyUmVmIS5pbnN0YW5jZS5vcGVuKCk7XHJcbiAgICB9KTtcclxuICAgIHRoaXMuZHJhd2VyUmVmIS5pbnN0YW5jZS5uek9uQ2xvc2Uuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgaWYgKG56T25DYW5jZWwpIHtcclxuICAgICAgICBuek9uQ2FuY2VsKCkudGhlbihjYW5DbG9zZSA9PiB7XHJcbiAgICAgICAgICBpZiAoY2FuQ2xvc2UgIT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZHJhd2VyUmVmIS5pbnN0YW5jZS5jbG9zZSgpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuZHJhd2VyUmVmIS5pbnN0YW5jZS5jbG9zZSgpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLmRyYXdlclJlZiEuaW5zdGFuY2UuYWZ0ZXJDbG9zZS5waXBlKHRha2VVbnRpbCh0aGlzLnVuc3Vic2NyaWJlJCkpLnN1YnNjcmliZSgoKSA9PiB7XHJcbiAgICAgIHRoaXMub3ZlcmxheVJlZi5kaXNwb3NlKCk7XHJcbiAgICAgIHRoaXMuZHJhd2VyUmVmID0gbnVsbDtcclxuICAgICAgdGhpcy51bnN1YnNjcmliZSQubmV4dCgpO1xyXG4gICAgICB0aGlzLnVuc3Vic2NyaWJlJC5jb21wbGV0ZSgpO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBnZXRJbnN0YW5jZSgpOiBOekRyYXdlclJlZjxSPiB7XHJcbiAgICByZXR1cm4gdGhpcy5kcmF3ZXJSZWYhICYmIHRoaXMuZHJhd2VyUmVmIS5pbnN0YW5jZTtcclxuICB9XHJcblxyXG4gIGNyZWF0ZURyYXdlcigpOiB2b2lkIHtcclxuICAgIHRoaXMub3ZlcmxheVJlZiA9IHRoaXMub3ZlcmxheS5jcmVhdGUoKTtcclxuICAgIHRoaXMuZHJhd2VyUmVmID0gdGhpcy5vdmVybGF5UmVmLmF0dGFjaChuZXcgQ29tcG9uZW50UG9ydGFsKE56RHJhd2VyQ29tcG9uZW50KSk7XHJcbiAgfVxyXG5cclxuICB1cGRhdGVPcHRpb25zKG9wdGlvbnM6IE56RHJhd2VyT3B0aW9uc09mQ29tcG9uZW50KTogdm9pZCB7XHJcbiAgICBPYmplY3QuYXNzaWduKHRoaXMuZHJhd2VyUmVmIS5pbnN0YW5jZSwgb3B0aW9ucyk7XHJcbiAgfVxyXG59XHJcblxyXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxyXG5leHBvcnQgY2xhc3MgTnpEcmF3ZXJTZXJ2aWNlIHtcclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG92ZXJsYXk6IE92ZXJsYXkpIHt9XHJcblxyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcclxuICBjcmVhdGU8VCA9IGFueSwgRCA9IGFueSwgUiA9IGFueT4ob3B0aW9uczogTnpEcmF3ZXJPcHRpb25zPFQsIEQ+KTogTnpEcmF3ZXJSZWY8Uj4ge1xyXG4gICAgcmV0dXJuIG5ldyBEcmF3ZXJCdWlsZGVyRm9yU2VydmljZTxSPih0aGlzLm92ZXJsYXksIG9wdGlvbnMpLmdldEluc3RhbmNlKCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==