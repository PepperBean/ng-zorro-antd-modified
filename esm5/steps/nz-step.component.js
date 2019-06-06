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
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Input, Renderer2, TemplateRef, ViewChild, ViewEncapsulation } from '@angular/core';
var NzStepComponent = /** @class */ (function () {
    function NzStepComponent(cdr, renderer, elementRef) {
        this.cdr = cdr;
        this.isCustomStatus = false;
        this._status = 'wait';
        this.oldAPIIcon = true;
        this.isIconString = true;
        // Set by parent.
        this.direction = 'horizontal';
        this.index = 0;
        this.last = false;
        this.outStatus = 'process';
        this.showProcessDot = false;
        this._currentIndex = 0;
        renderer.addClass(elementRef.nativeElement, 'ant-steps-item');
    }
    Object.defineProperty(NzStepComponent.prototype, "nzStatus", {
        get: /**
         * @return {?}
         */
        function () {
            return this._status;
        },
        set: /**
         * @param {?} status
         * @return {?}
         */
        function (status) {
            this._status = status;
            this.isCustomStatus = true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzStepComponent.prototype, "nzIcon", {
        get: /**
         * @return {?}
         */
        function () {
            return this._icon;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (!(value instanceof TemplateRef)) {
                this.isIconString = true;
                this.oldAPIIcon = typeof value === 'string' && value.indexOf('anticon') > -1;
            }
            else {
                this.isIconString = false;
            }
            this._icon = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzStepComponent.prototype, "currentIndex", {
        get: /**
         * @return {?}
         */
        function () {
            return this._currentIndex;
        },
        set: /**
         * @param {?} current
         * @return {?}
         */
        function (current) {
            this._currentIndex = current;
            if (!this.isCustomStatus) {
                this._status = current > this.index ? 'finish' : current === this.index ? this.outStatus || '' : 'wait';
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    NzStepComponent.prototype.markForCheck = /**
     * @return {?}
     */
    function () {
        this.cdr.markForCheck();
    };
    NzStepComponent.decorators = [
        { type: Component, args: [{
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    selector: 'nz-step',
                    exportAs: 'nzStep',
                    preserveWhitespaces: false,
                    template: "<div class=\"ant-steps-item-tail\" *ngIf=\"last !== true\"></div>\r\n<div class=\"ant-steps-item-icon\">\r\n  <ng-template [ngIf]=\"!showProcessDot\">\r\n    <span class=\"ant-steps-icon\" *ngIf=\"nzStatus === 'finish' && !nzIcon\"><i nz-icon type=\"check\"></i></span>\r\n    <span class=\"ant-steps-icon\" *ngIf=\"nzStatus === 'error'\"><i nz-icon type=\"close\"></i></span>\r\n    <span class=\"ant-steps-icon\" *ngIf=\"(nzStatus === 'process' || nzStatus === 'wait') && !nzIcon\">{{ index + 1 }}</span>\r\n    <span class=\"ant-steps-icon\" *ngIf=\"nzIcon\">\r\n      <ng-container *ngIf=\"isIconString; else iconTemplate\">\r\n        <i nz-icon [type]=\"!oldAPIIcon && nzIcon\" [ngClass]=\"oldAPIIcon && nzIcon\"></i>\r\n      </ng-container>\r\n      <ng-template #iconTemplate>\r\n      <ng-template [ngTemplateOutlet]=\"nzIcon\"></ng-template>\r\n    </ng-template>\r\n    </span>\r\n  </ng-template>\r\n  <ng-template [ngIf]=\"showProcessDot\">\r\n    <span class=\"ant-steps-icon\">\r\n      <ng-template #processDotTemplate>\r\n        <span class=\"ant-steps-icon-dot\"></span>\r\n      </ng-template>\r\n      <ng-template\r\n        [ngTemplateOutlet]=\"customProcessTemplate||processDotTemplate\"\r\n        [ngTemplateOutletContext]=\"{ $implicit: processDotTemplate, status:nzStatus, index:index }\">\r\n      </ng-template>\r\n    </span>\r\n  </ng-template>\r\n</div>\r\n<div class=\"ant-steps-item-content\">\r\n  <div class=\"ant-steps-item-title\">\r\n    <ng-container *nzStringTemplateOutlet=\"nzTitle\">{{ nzTitle }}</ng-container>\r\n  </div>\r\n  <div class=\"ant-steps-item-description\">\r\n    <ng-container *nzStringTemplateOutlet=\"nzDescription\">{{ nzDescription }}</ng-container>\r\n  </div>\r\n</div>\r\n",
                    host: {
                        '[class.ant-steps-item-wait]': 'nzStatus === "wait"',
                        '[class.ant-steps-item-process]': 'nzStatus === "process"',
                        '[class.ant-steps-item-finish]': 'nzStatus === "finish"',
                        '[class.ant-steps-item-error]': 'nzStatus === "error"',
                        '[class.ant-steps-custom]': '!!nzIcon',
                        '[class.ant-steps-next-error]': '(outStatus === "error") && (currentIndex === index + 1)'
                    }
                }] }
    ];
    /** @nocollapse */
    NzStepComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: Renderer2 },
        { type: ElementRef }
    ]; };
    NzStepComponent.propDecorators = {
        processDotTemplate: [{ type: ViewChild, args: ['processDotTemplate',] }],
        nzTitle: [{ type: Input }],
        nzDescription: [{ type: Input }],
        nzStatus: [{ type: Input }],
        nzIcon: [{ type: Input }]
    };
    return NzStepComponent;
}());
export { NzStepComponent };
if (false) {
    /** @type {?} */
    NzStepComponent.prototype.processDotTemplate;
    /** @type {?} */
    NzStepComponent.prototype.nzTitle;
    /** @type {?} */
    NzStepComponent.prototype.nzDescription;
    /** @type {?} */
    NzStepComponent.prototype.isCustomStatus;
    /**
     * @type {?}
     * @private
     */
    NzStepComponent.prototype._status;
    /** @type {?} */
    NzStepComponent.prototype.oldAPIIcon;
    /** @type {?} */
    NzStepComponent.prototype.isIconString;
    /**
     * @type {?}
     * @private
     */
    NzStepComponent.prototype._icon;
    /** @type {?} */
    NzStepComponent.prototype.customProcessTemplate;
    /** @type {?} */
    NzStepComponent.prototype.direction;
    /** @type {?} */
    NzStepComponent.prototype.index;
    /** @type {?} */
    NzStepComponent.prototype.last;
    /** @type {?} */
    NzStepComponent.prototype.outStatus;
    /** @type {?} */
    NzStepComponent.prototype.showProcessDot;
    /**
     * @type {?}
     * @private
     */
    NzStepComponent.prototype._currentIndex;
    /**
     * @type {?}
     * @private
     */
    NzStepComponent.prototype.cdr;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotc3RlcC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL3N0ZXBzLyIsInNvdXJjZXMiOlsibnotc3RlcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsVUFBVSxFQUNWLEtBQUssRUFDTCxTQUFTLEVBQ1QsV0FBVyxFQUNYLFNBQVMsRUFDVCxpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFJdkI7SUEwRUUseUJBQW9CLEdBQXNCLEVBQUUsUUFBbUIsRUFBRSxVQUFzQjtRQUFuRSxRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQTFDMUMsbUJBQWMsR0FBRyxLQUFLLENBQUM7UUFDZixZQUFPLEdBQUcsTUFBTSxDQUFDO1FBaUJ6QixlQUFVLEdBQUcsSUFBSSxDQUFDO1FBQ2xCLGlCQUFZLEdBQUcsSUFBSSxDQUFDOztRQUlwQixjQUFTLEdBQUcsWUFBWSxDQUFDO1FBQ3pCLFVBQUssR0FBRyxDQUFDLENBQUM7UUFDVixTQUFJLEdBQUcsS0FBSyxDQUFDO1FBQ2IsY0FBUyxHQUFHLFNBQVMsQ0FBQztRQUN0QixtQkFBYyxHQUFHLEtBQUssQ0FBQztRQWFmLGtCQUFhLEdBQUcsQ0FBQyxDQUFDO1FBR3hCLFFBQVEsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDO0lBQ2hFLENBQUM7SUF0REQsc0JBQ0kscUNBQVE7Ozs7UUFEWjtZQUVFLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUN0QixDQUFDOzs7OztRQUVELFVBQWEsTUFBYztZQUN6QixJQUFJLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQztZQUN0QixJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQztRQUM3QixDQUFDOzs7T0FMQTtJQVVELHNCQUNJLG1DQUFNOzs7O1FBRFY7WUFFRSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDcEIsQ0FBQzs7Ozs7UUFFRCxVQUFXLEtBQXNDO1lBQy9DLElBQUksQ0FBQyxDQUFDLEtBQUssWUFBWSxXQUFXLENBQUMsRUFBRTtnQkFDbkMsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7Z0JBQ3pCLElBQUksQ0FBQyxVQUFVLEdBQUcsT0FBTyxLQUFLLEtBQUssUUFBUSxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7YUFDOUU7aUJBQU07Z0JBQ0wsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7YUFDM0I7WUFDRCxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNyQixDQUFDOzs7T0FWQTtJQXVCRCxzQkFBSSx5Q0FBWTs7OztRQUFoQjtZQUNFLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQztRQUM1QixDQUFDOzs7OztRQUVELFVBQWlCLE9BQWU7WUFDOUIsSUFBSSxDQUFDLGFBQWEsR0FBRyxPQUFPLENBQUM7WUFDN0IsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUU7Z0JBQ3hCLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsT0FBTyxLQUFLLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUM7YUFDekc7UUFDSCxDQUFDOzs7T0FQQTs7OztJQWVELHNDQUFZOzs7SUFBWjtRQUNFLElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDMUIsQ0FBQzs7Z0JBaEZGLFNBQVMsU0FBQztvQkFDVCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtvQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7b0JBQ3JDLFFBQVEsRUFBRSxTQUFTO29CQUNuQixRQUFRLEVBQUUsUUFBUTtvQkFDbEIsbUJBQW1CLEVBQUUsS0FBSztvQkFDMUIseXREQUF1QztvQkFDdkMsSUFBSSxFQUFFO3dCQUNKLDZCQUE2QixFQUFFLHFCQUFxQjt3QkFDcEQsZ0NBQWdDLEVBQUUsd0JBQXdCO3dCQUMxRCwrQkFBK0IsRUFBRSx1QkFBdUI7d0JBQ3hELDhCQUE4QixFQUFFLHNCQUFzQjt3QkFDdEQsMEJBQTBCLEVBQUUsVUFBVTt3QkFDdEMsOEJBQThCLEVBQUUseURBQXlEO3FCQUMxRjtpQkFDRjs7OztnQkEzQkMsaUJBQWlCO2dCQUlqQixTQUFTO2dCQUZULFVBQVU7OztxQ0EyQlQsU0FBUyxTQUFDLG9CQUFvQjswQkFFOUIsS0FBSztnQ0FDTCxLQUFLOzJCQUVMLEtBQUs7eUJBYUwsS0FBSzs7SUE4Q1Isc0JBQUM7Q0FBQSxBQWpGRCxJQWlGQztTQWpFWSxlQUFlOzs7SUFDMUIsNkNBQXVFOztJQUV2RSxrQ0FBNkM7O0lBQzdDLHdDQUFtRDs7SUFZbkQseUNBQXVCOzs7OztJQUN2QixrQ0FBeUI7O0lBaUJ6QixxQ0FBa0I7O0lBQ2xCLHVDQUFvQjs7Ozs7SUFDcEIsZ0NBQStDOztJQUUvQyxnREFBb0c7O0lBQ3BHLG9DQUF5Qjs7SUFDekIsZ0NBQVU7O0lBQ1YsK0JBQWE7O0lBQ2Isb0NBQXNCOztJQUN0Qix5Q0FBdUI7Ozs7O0lBYXZCLHdDQUEwQjs7Ozs7SUFFZCw4QkFBOEIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuXHJcbmltcG9ydCB7XHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgQ29tcG9uZW50LFxyXG4gIEVsZW1lbnRSZWYsXHJcbiAgSW5wdXQsXHJcbiAgUmVuZGVyZXIyLFxyXG4gIFRlbXBsYXRlUmVmLFxyXG4gIFZpZXdDaGlsZCxcclxuICBWaWV3RW5jYXBzdWxhdGlvblxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgTmdDbGFzc1R5cGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICBzZWxlY3RvcjogJ256LXN0ZXAnLFxyXG4gIGV4cG9ydEFzOiAnbnpTdGVwJyxcclxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcclxuICB0ZW1wbGF0ZVVybDogJy4vbnotc3RlcC5jb21wb25lbnQuaHRtbCcsXHJcbiAgaG9zdDoge1xyXG4gICAgJ1tjbGFzcy5hbnQtc3RlcHMtaXRlbS13YWl0XSc6ICduelN0YXR1cyA9PT0gXCJ3YWl0XCInLFxyXG4gICAgJ1tjbGFzcy5hbnQtc3RlcHMtaXRlbS1wcm9jZXNzXSc6ICduelN0YXR1cyA9PT0gXCJwcm9jZXNzXCInLFxyXG4gICAgJ1tjbGFzcy5hbnQtc3RlcHMtaXRlbS1maW5pc2hdJzogJ256U3RhdHVzID09PSBcImZpbmlzaFwiJyxcclxuICAgICdbY2xhc3MuYW50LXN0ZXBzLWl0ZW0tZXJyb3JdJzogJ256U3RhdHVzID09PSBcImVycm9yXCInLFxyXG4gICAgJ1tjbGFzcy5hbnQtc3RlcHMtY3VzdG9tXSc6ICchIW56SWNvbicsXHJcbiAgICAnW2NsYXNzLmFudC1zdGVwcy1uZXh0LWVycm9yXSc6ICcob3V0U3RhdHVzID09PSBcImVycm9yXCIpICYmIChjdXJyZW50SW5kZXggPT09IGluZGV4ICsgMSknXHJcbiAgfVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTnpTdGVwQ29tcG9uZW50IHtcclxuICBAVmlld0NoaWxkKCdwcm9jZXNzRG90VGVtcGxhdGUnKSBwcm9jZXNzRG90VGVtcGxhdGU6IFRlbXBsYXRlUmVmPHZvaWQ+O1xyXG5cclxuICBASW5wdXQoKSBuelRpdGxlOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPjtcclxuICBASW5wdXQoKSBuekRlc2NyaXB0aW9uOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPjtcclxuXHJcbiAgQElucHV0KClcclxuICBnZXQgbnpTdGF0dXMoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0aGlzLl9zdGF0dXM7XHJcbiAgfVxyXG5cclxuICBzZXQgbnpTdGF0dXMoc3RhdHVzOiBzdHJpbmcpIHtcclxuICAgIHRoaXMuX3N0YXR1cyA9IHN0YXR1cztcclxuICAgIHRoaXMuaXNDdXN0b21TdGF0dXMgPSB0cnVlO1xyXG4gIH1cclxuXHJcbiAgaXNDdXN0b21TdGF0dXMgPSBmYWxzZTtcclxuICBwcml2YXRlIF9zdGF0dXMgPSAnd2FpdCc7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgZ2V0IG56SWNvbigpOiBOZ0NsYXNzVHlwZSB8IFRlbXBsYXRlUmVmPHZvaWQ+IHtcclxuICAgIHJldHVybiB0aGlzLl9pY29uO1xyXG4gIH1cclxuXHJcbiAgc2V0IG56SWNvbih2YWx1ZTogTmdDbGFzc1R5cGUgfCBUZW1wbGF0ZVJlZjx2b2lkPikge1xyXG4gICAgaWYgKCEodmFsdWUgaW5zdGFuY2VvZiBUZW1wbGF0ZVJlZikpIHtcclxuICAgICAgdGhpcy5pc0ljb25TdHJpbmcgPSB0cnVlO1xyXG4gICAgICB0aGlzLm9sZEFQSUljb24gPSB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnICYmIHZhbHVlLmluZGV4T2YoJ2FudGljb24nKSA+IC0xO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5pc0ljb25TdHJpbmcgPSBmYWxzZTtcclxuICAgIH1cclxuICAgIHRoaXMuX2ljb24gPSB2YWx1ZTtcclxuICB9XHJcblxyXG4gIG9sZEFQSUljb24gPSB0cnVlO1xyXG4gIGlzSWNvblN0cmluZyA9IHRydWU7XHJcbiAgcHJpdmF0ZSBfaWNvbjogTmdDbGFzc1R5cGUgfCBUZW1wbGF0ZVJlZjx2b2lkPjtcclxuXHJcbiAgY3VzdG9tUHJvY2Vzc1RlbXBsYXRlOiBUZW1wbGF0ZVJlZjx7ICRpbXBsaWNpdDogVGVtcGxhdGVSZWY8dm9pZD47IHN0YXR1czogc3RyaW5nOyBpbmRleDogbnVtYmVyIH0+OyAvLyBTZXQgYnkgcGFyZW50LlxyXG4gIGRpcmVjdGlvbiA9ICdob3Jpem9udGFsJztcclxuICBpbmRleCA9IDA7XHJcbiAgbGFzdCA9IGZhbHNlO1xyXG4gIG91dFN0YXR1cyA9ICdwcm9jZXNzJztcclxuICBzaG93UHJvY2Vzc0RvdCA9IGZhbHNlO1xyXG5cclxuICBnZXQgY3VycmVudEluZGV4KCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5fY3VycmVudEluZGV4O1xyXG4gIH1cclxuXHJcbiAgc2V0IGN1cnJlbnRJbmRleChjdXJyZW50OiBudW1iZXIpIHtcclxuICAgIHRoaXMuX2N1cnJlbnRJbmRleCA9IGN1cnJlbnQ7XHJcbiAgICBpZiAoIXRoaXMuaXNDdXN0b21TdGF0dXMpIHtcclxuICAgICAgdGhpcy5fc3RhdHVzID0gY3VycmVudCA+IHRoaXMuaW5kZXggPyAnZmluaXNoJyA6IGN1cnJlbnQgPT09IHRoaXMuaW5kZXggPyB0aGlzLm91dFN0YXR1cyB8fCAnJyA6ICd3YWl0JztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgX2N1cnJlbnRJbmRleCA9IDA7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZiwgcmVuZGVyZXI6IFJlbmRlcmVyMiwgZWxlbWVudFJlZjogRWxlbWVudFJlZikge1xyXG4gICAgcmVuZGVyZXIuYWRkQ2xhc3MoZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LCAnYW50LXN0ZXBzLWl0ZW0nKTtcclxuICB9XHJcblxyXG4gIG1hcmtGb3JDaGVjaygpOiB2b2lkIHtcclxuICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xyXG4gIH1cclxufVxyXG4iXX0=