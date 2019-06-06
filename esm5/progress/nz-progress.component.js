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
import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';
import { isNotNil, InputNumber } from 'ng-zorro-antd/core';
var NzProgressComponent = /** @class */ (function () {
    function NzProgressComponent() {
        this.nzShowInfo = true;
        this.nzWidth = 132;
        this.nzType = 'line';
        this.nzStrokeLinecap = 'round';
        this.statusColorMap = {
            normal: '#108ee9',
            exception: '#ff5500',
            success: '#87d068'
        };
        this.cachedStatus = 'normal';
        this.inferredStatus = 'normal';
        this.inferredStrokeWidth = 8;
    }
    Object.defineProperty(NzProgressComponent.prototype, "formatter", {
        get: /**
         * @return {?}
         */
        function () {
            return this.nzFormat || ((/**
             * @param {?} p
             * @return {?}
             */
            function (p) { return p + "%"; }));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzProgressComponent.prototype, "status", {
        get: /**
         * @return {?}
         */
        function () {
            return this.nzStatus || this.inferredStatus;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzProgressComponent.prototype, "strokeWidth", {
        get: /**
         * @return {?}
         */
        function () {
            return this.nzStrokeWidth || this.inferredStrokeWidth;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzProgressComponent.prototype, "isCircleStyle", {
        get: /**
         * @return {?}
         */
        function () {
            return this.nzType === 'circle' || this.nzType === 'dashboard';
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    NzProgressComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.updatePathStyles();
        this.updateIcon();
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    NzProgressComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        var nzGapPosition = changes.nzGapPosition, nzStrokeLinecap = changes.nzStrokeLinecap, nzGapDegree = changes.nzGapDegree, nzType = changes.nzType, nzSize = changes.nzSize, nzStatus = changes.nzStatus, nzPercent = changes.nzPercent, nzSuccessPercent = changes.nzSuccessPercent;
        if (nzGapPosition || nzStrokeLinecap || nzGapDegree || nzType || nzPercent) {
            this.updatePathStyles();
        }
        if (nzSize) {
            if (this.nzSize === 'small') {
                this.inferredStrokeWidth = 6;
            }
        }
        if (nzStatus) {
            this.cachedStatus = this.nzStatus || this.cachedStatus;
            this.updateIcon();
        }
        if (nzPercent || nzSuccessPercent) {
            /** @type {?} */
            var fillAll = parseInt(this.nzPercent.toString(), 10) >= 100;
            if (fillAll) {
                if ((isNotNil(this.nzSuccessPercent) && (/** @type {?} */ (this.nzSuccessPercent)) >= 100) || this.nzSuccessPercent === undefined) {
                    this.inferredStatus = 'success';
                }
            }
            else {
                this.inferredStatus = this.cachedStatus;
            }
            this.updateIcon();
        }
        if (nzType) {
            if (this.nzType !== 'line') {
                this.inferredStrokeWidth = 6;
            }
            if (this.nzType === 'dashboard') {
                this.inferredGapPosition = 'bottom';
                this.inferredGapDegree = 75;
            }
            if (this.nzType === 'circle') {
                this.inferredGapDegree = 0;
            }
        }
    };
    /**
     * @return {?}
     */
    NzProgressComponent.prototype.updatePathStyles = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var radius = 50 - this.strokeWidth / 2;
        /** @type {?} */
        var gapPosition = this.nzGapPosition || this.inferredGapPosition;
        /** @type {?} */
        var beginPositionX = 0;
        /** @type {?} */
        var beginPositionY = -radius;
        /** @type {?} */
        var endPositionX = 0;
        /** @type {?} */
        var endPositionY = radius * -2;
        switch (gapPosition) {
            case 'left':
                beginPositionX = -radius;
                beginPositionY = 0;
                endPositionX = radius * 2;
                endPositionY = 0;
                break;
            case 'right':
                beginPositionX = radius;
                beginPositionY = 0;
                endPositionX = radius * -2;
                endPositionY = 0;
                break;
            case 'bottom':
                beginPositionY = radius;
                endPositionY = radius * 2;
                break;
            default:
        }
        this.pathString = "M 50,50 m " + beginPositionX + "," + beginPositionY + "\n     a " + radius + "," + radius + " 0 1 1 " + endPositionX + "," + -endPositionY + "\n     a " + radius + "," + radius + " 0 1 1 " + -endPositionX + "," + endPositionY;
        /** @type {?} */
        var len = Math.PI * 2 * radius;
        /** @type {?} */
        var gapDegree = this.nzGapDegree || this.inferredGapDegree;
        this.trailPathStyle = {
            strokeDasharray: len - gapDegree + "px " + len + "px",
            strokeDashoffset: "-" + gapDegree / 2 + "px",
            transition: 'stroke-dashoffset .3s ease 0s, stroke-dasharray .3s ease 0s, stroke .3s'
        };
        this.strokePathStyle = {
            stroke: this.nzStrokeColor || ((/** @type {?} */ (null))),
            // tslint:disable-line:no-any
            strokeDasharray: (this.nzPercent / 100) * (len - gapDegree) + "px " + len + "px",
            strokeDashoffset: "-" + gapDegree / 2 + "px",
            transition: 'stroke-dashoffset .3s ease 0s, stroke-dasharray .3s ease 0s, stroke .3s, stroke-width .06s ease .3s'
        };
    };
    /**
     * @return {?}
     */
    NzProgressComponent.prototype.updateIcon = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var isCircle = this.nzType === 'circle' || this.nzType === 'dashboard';
        /** @type {?} */
        var ret = this.status === 'success' ? 'check' : this.status === 'exception' ? 'close' : '';
        this.icon = ret ? ret + (isCircle ? '-o' : '-circle-fill') : '';
    };
    NzProgressComponent.decorators = [
        { type: Component, args: [{
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    selector: 'nz-progress',
                    exportAs: 'nzProgress',
                    preserveWhitespaces: false,
                    template: "<ng-template #progressInfoTemplate>\r\n  <span class=\"ant-progress-text\" *ngIf=\"nzShowInfo\">\r\n    <ng-container *ngIf=\"status === 'exception' || (status === 'success' && !nzFormat); else formatTemplate\">\r\n      <i nz-icon [nzType]=\"icon\"></i>\r\n    </ng-container>\r\n    <ng-template #formatTemplate>\r\n      {{ formatter(nzPercent) }}\r\n    </ng-template>\r\n  </span>\r\n</ng-template>\r\n<div\r\n  [ngClass]=\"'ant-progress ant-progress-status-' + status\"\r\n  [class.ant-progress-line]=\"nzType == 'line'\"\r\n  [class.ant-progress-small]=\"nzSize == 'small'\"\r\n  [class.ant-progress-show-info]=\"nzShowInfo\"\r\n  [class.ant-progress-circle]=\"isCircleStyle\"\r\n>\r\n  <!-- Line progress -->\r\n  <div *ngIf=\"nzType === 'line'\">\r\n    <div class=\"ant-progress-outer\">\r\n      <div class=\"ant-progress-inner\">\r\n        <div\r\n          class=\"ant-progress-bg\"\r\n          [style.width.%]=\"nzPercent\"\r\n          [style.border-radius]=\"nzStrokeLinecap === 'round' ? '100px' : '0'\"\r\n          [style.background]=\"nzStrokeColor\"\r\n          [style.height.px]=\"strokeWidth\"\r\n        ></div>\r\n        <div\r\n          class=\"ant-progress-success-bg\"\r\n          [style.width.%]=\"nzSuccessPercent\"\r\n          [style.border-radius]=\"nzStrokeLinecap === 'round' ? '100px' : '0'\"\r\n          [style.height.px]=\"strokeWidth\"\r\n        ></div>\r\n      </div>\r\n    </div>\r\n    <ng-template [ngTemplateOutlet]=\"progressInfoTemplate\"></ng-template>\r\n  </div>\r\n  <!-- Circle/Dashboard progress -->\r\n  <div\r\n    [style.width.px]=\"this.nzWidth\"\r\n    [style.height.px]=\"this.nzWidth\"\r\n    [style.fontSize.px]=\"this.nzWidth * 0.15 + 6\"\r\n    class=\"ant-progress-inner\"\r\n    *ngIf=\"isCircleStyle\"\r\n  >\r\n    <svg class=\"ant-progress-circle \" viewBox=\"0 0 100 100\">\r\n      <path\r\n        class=\"ant-progress-circle-trail\"\r\n        stroke=\"#f3f3f3\"\r\n        fill-opacity=\"0\"\r\n        [attr.stroke-width]=\"strokeWidth\"\r\n        [ngStyle]=\"trailPathStyle\"\r\n        [attr.d]=\"pathString\"\r\n      ></path>\r\n      <path\r\n        class=\"ant-progress-circle-path\"\r\n        [attr.d]=\"pathString\"\r\n        [attr.stroke-linecap]=\"nzStrokeLinecap\"\r\n        fill-opacity=\"0\"\r\n        [attr.stroke]=\"nzStrokeColor || statusColorMap[status]\"\r\n        [attr.stroke-width]=\"nzPercent ? strokeWidth : 0\"\r\n        [ngStyle]=\"strokePathStyle\"\r\n      ></path>\r\n    </svg>\r\n    <ng-template [ngTemplateOutlet]=\"progressInfoTemplate\"></ng-template>\r\n  </div>\r\n</div>\r\n"
                }] }
    ];
    NzProgressComponent.propDecorators = {
        nzShowInfo: [{ type: Input }],
        nzWidth: [{ type: Input }],
        nzStrokeColor: [{ type: Input }],
        nzSize: [{ type: Input }],
        nzFormat: [{ type: Input }],
        nzSuccessPercent: [{ type: Input }],
        nzPercent: [{ type: Input }],
        nzStrokeWidth: [{ type: Input }],
        nzGapDegree: [{ type: Input }],
        nzStatus: [{ type: Input }],
        nzType: [{ type: Input }],
        nzGapPosition: [{ type: Input }],
        nzStrokeLinecap: [{ type: Input }]
    };
    tslib_1.__decorate([
        InputNumber(),
        tslib_1.__metadata("design:type", Number)
    ], NzProgressComponent.prototype, "nzSuccessPercent", void 0);
    tslib_1.__decorate([
        InputNumber(),
        tslib_1.__metadata("design:type", Number)
    ], NzProgressComponent.prototype, "nzPercent", void 0);
    tslib_1.__decorate([
        InputNumber(),
        tslib_1.__metadata("design:type", Number)
    ], NzProgressComponent.prototype, "nzStrokeWidth", void 0);
    tslib_1.__decorate([
        InputNumber(),
        tslib_1.__metadata("design:type", Number)
    ], NzProgressComponent.prototype, "nzGapDegree", void 0);
    return NzProgressComponent;
}());
export { NzProgressComponent };
if (false) {
    /** @type {?} */
    NzProgressComponent.prototype.nzShowInfo;
    /** @type {?} */
    NzProgressComponent.prototype.nzWidth;
    /** @type {?} */
    NzProgressComponent.prototype.nzStrokeColor;
    /** @type {?} */
    NzProgressComponent.prototype.nzSize;
    /** @type {?} */
    NzProgressComponent.prototype.nzFormat;
    /** @type {?} */
    NzProgressComponent.prototype.nzSuccessPercent;
    /** @type {?} */
    NzProgressComponent.prototype.nzPercent;
    /** @type {?} */
    NzProgressComponent.prototype.nzStrokeWidth;
    /** @type {?} */
    NzProgressComponent.prototype.nzGapDegree;
    /** @type {?} */
    NzProgressComponent.prototype.nzStatus;
    /** @type {?} */
    NzProgressComponent.prototype.nzType;
    /** @type {?} */
    NzProgressComponent.prototype.nzGapPosition;
    /** @type {?} */
    NzProgressComponent.prototype.nzStrokeLinecap;
    /** @type {?} */
    NzProgressComponent.prototype.trailPathStyle;
    /** @type {?} */
    NzProgressComponent.prototype.strokePathStyle;
    /** @type {?} */
    NzProgressComponent.prototype.pathString;
    /** @type {?} */
    NzProgressComponent.prototype.icon;
    /** @type {?} */
    NzProgressComponent.prototype.statusColorMap;
    /**
     * @type {?}
     * @private
     */
    NzProgressComponent.prototype.cachedStatus;
    /**
     * @type {?}
     * @private
     */
    NzProgressComponent.prototype.inferredStatus;
    /**
     * @type {?}
     * @private
     */
    NzProgressComponent.prototype.inferredStrokeWidth;
    /**
     * @type {?}
     * @private
     */
    NzProgressComponent.prototype.inferredGapPosition;
    /**
     * @type {?}
     * @private
     */
    NzProgressComponent.prototype.inferredGapDegree;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotcHJvZ3Jlc3MuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9wcm9ncmVzcy8iLCJzb3VyY2VzIjpbIm56LXByb2dyZXNzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLFNBQVMsRUFDVCxLQUFLLEVBSUwsaUJBQWlCLEVBQ2xCLE1BQU0sZUFBZSxDQUFDO0FBRXZCLE9BQU8sRUFBRSxRQUFRLEVBQUUsV0FBVyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFPM0Q7SUFBQTtRQVNXLGVBQVUsR0FBRyxJQUFJLENBQUM7UUFDbEIsWUFBTyxHQUFHLEdBQUcsQ0FBQztRQVNkLFdBQU0sR0FBdUIsTUFBTSxDQUFDO1FBRXBDLG9CQUFlLEdBQWdDLE9BQU8sQ0FBQztRQU1oRSxtQkFBYyxHQUE4QjtZQUMxQyxNQUFNLEVBQUUsU0FBUztZQUNqQixTQUFTLEVBQUUsU0FBUztZQUNwQixPQUFPLEVBQUUsU0FBUztTQUNuQixDQUFDO1FBRU0saUJBQVksR0FBeUIsUUFBUSxDQUFDO1FBQzlDLG1CQUFjLEdBQXlCLFFBQVEsQ0FBQztRQUNoRCx3QkFBbUIsR0FBVyxDQUFDLENBQUM7SUFvSTFDLENBQUM7SUFoSUMsc0JBQUksMENBQVM7Ozs7UUFBYjtZQUNFLE9BQU8sSUFBSSxDQUFDLFFBQVEsSUFBSTs7OztZQUFDLFVBQUMsQ0FBUyxJQUFhLE9BQUcsQ0FBQyxNQUFHLEVBQVAsQ0FBTyxFQUFDLENBQUM7UUFDM0QsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSx1Q0FBTTs7OztRQUFWO1lBQ0UsT0FBTyxJQUFJLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxjQUFjLENBQUM7UUFDOUMsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSw0Q0FBVzs7OztRQUFmO1lBQ0UsT0FBTyxJQUFJLENBQUMsYUFBYSxJQUFJLElBQUksQ0FBQyxtQkFBbUIsQ0FBQztR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LElBdUtDO1NBL0pZLG1CQUFtQjs7O0lBQzlCLHlDQUEyQjs7SUFDM0Isc0NBQXVCOztJQUN2Qiw0Q0FBK0I7O0lBQy9CLHFDQUF3Qjs7SUFDeEIsdUNBQWdEOztJQUNoRCwrQ0FBa0Q7O0lBQ2xELHdDQUEwQzs7SUFDMUMsNENBQThDOztJQUM5QywwQ0FBNEM7O0lBQzVDLHVDQUF3Qzs7SUFDeEMscUNBQTZDOztJQUM3Qyw0Q0FBbUQ7O0lBQ25ELDhDQUFnRTs7SUFFaEUsNkNBQTBDOztJQUMxQyw4Q0FBMkM7O0lBQzNDLHlDQUFtQjs7SUFDbkIsbUNBQWE7O0lBQ2IsNkNBSUU7Ozs7O0lBRUYsMkNBQXNEOzs7OztJQUN0RCw2Q0FBd0Q7Ozs7O0lBQ3hELGtEQUF3Qzs7Ozs7SUFDeEMsa0RBQW9DOzs7OztJQUNwQyxnREFBa0MiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuXHJcbmltcG9ydCB7XHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ29tcG9uZW50LFxyXG4gIElucHV0LFxyXG4gIE9uQ2hhbmdlcyxcclxuICBPbkluaXQsXHJcbiAgU2ltcGxlQ2hhbmdlcyxcclxuICBWaWV3RW5jYXBzdWxhdGlvblxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHsgaXNOb3ROaWwsIElucHV0TnVtYmVyIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcclxuXHJcbmV4cG9ydCB0eXBlIE56UHJvZ3Jlc3NHYXBQb3NpdGlvblR5cGUgPSAndG9wJyB8ICdib3R0b20nIHwgJ2xlZnQnIHwgJ3JpZ2h0JztcclxuZXhwb3J0IHR5cGUgTnpQcm9ncmVzc1N0YXR1c1R5cGUgPSAnc3VjY2VzcycgfCAnZXhjZXB0aW9uJyB8ICdhY3RpdmUnIHwgJ25vcm1hbCc7XHJcbmV4cG9ydCB0eXBlIE56UHJvZ3Jlc3NUeXBlVHlwZSA9ICdsaW5lJyB8ICdjaXJjbGUnIHwgJ2Rhc2hib2FyZCc7XHJcbmV4cG9ydCB0eXBlIE56UHJvZ3Jlc3NTdHJva2VMaW5lY2FwVHlwZSA9ICdyb3VuZCcgfCAnc3F1YXJlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgc2VsZWN0b3I6ICduei1wcm9ncmVzcycsXHJcbiAgZXhwb3J0QXM6ICduelByb2dyZXNzJyxcclxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcclxuICB0ZW1wbGF0ZVVybDogJy4vbnotcHJvZ3Jlc3MuY29tcG9uZW50Lmh0bWwnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOelByb2dyZXNzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xyXG4gIEBJbnB1dCgpIG56U2hvd0luZm8gPSB0cnVlO1xyXG4gIEBJbnB1dCgpIG56V2lkdGggPSAxMzI7XHJcbiAgQElucHV0KCkgbnpTdHJva2VDb2xvcjogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIG56U2l6ZTogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIG56Rm9ybWF0PzogKHBlcmNlbnQ6IG51bWJlcikgPT4gc3RyaW5nO1xyXG4gIEBJbnB1dCgpIEBJbnB1dE51bWJlcigpIG56U3VjY2Vzc1BlcmNlbnQ/OiBudW1iZXI7XHJcbiAgQElucHV0KCkgQElucHV0TnVtYmVyKCkgbnpQZXJjZW50OiBudW1iZXI7XHJcbiAgQElucHV0KCkgQElucHV0TnVtYmVyKCkgbnpTdHJva2VXaWR0aDogbnVtYmVyO1xyXG4gIEBJbnB1dCgpIEBJbnB1dE51bWJlcigpIG56R2FwRGVncmVlOiBudW1iZXI7XHJcbiAgQElucHV0KCkgbnpTdGF0dXM6IE56UHJvZ3Jlc3NTdGF0dXNUeXBlO1xyXG4gIEBJbnB1dCgpIG56VHlwZTogTnpQcm9ncmVzc1R5cGVUeXBlID0gJ2xpbmUnO1xyXG4gIEBJbnB1dCgpIG56R2FwUG9zaXRpb24/OiBOelByb2dyZXNzR2FwUG9zaXRpb25UeXBlO1xyXG4gIEBJbnB1dCgpIG56U3Ryb2tlTGluZWNhcDogTnpQcm9ncmVzc1N0cm9rZUxpbmVjYXBUeXBlID0gJ3JvdW5kJztcclxuXHJcbiAgdHJhaWxQYXRoU3R5bGU6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH07XHJcbiAgc3Ryb2tlUGF0aFN0eWxlOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9O1xyXG4gIHBhdGhTdHJpbmc6IHN0cmluZztcclxuICBpY29uOiBzdHJpbmc7XHJcbiAgc3RhdHVzQ29sb3JNYXA6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gPSB7XHJcbiAgICBub3JtYWw6ICcjMTA4ZWU5JyxcclxuICAgIGV4Y2VwdGlvbjogJyNmZjU1MDAnLFxyXG4gICAgc3VjY2VzczogJyM4N2QwNjgnXHJcbiAgfTtcclxuXHJcbiAgcHJpdmF0ZSBjYWNoZWRTdGF0dXM6IE56UHJvZ3Jlc3NTdGF0dXNUeXBlID0gJ25vcm1hbCc7XHJcbiAgcHJpdmF0ZSBpbmZlcnJlZFN0YXR1czogTnpQcm9ncmVzc1N0YXR1c1R5cGUgPSAnbm9ybWFsJztcclxuICBwcml2YXRlIGluZmVycmVkU3Ryb2tlV2lkdGg6IG51bWJlciA9IDg7XHJcbiAgcHJpdmF0ZSBpbmZlcnJlZEdhcFBvc2l0aW9uOiBzdHJpbmc7XHJcbiAgcHJpdmF0ZSBpbmZlcnJlZEdhcERlZ3JlZTogbnVtYmVyO1xyXG5cclxuICBnZXQgZm9ybWF0dGVyKCk6IChwZXJjZW50OiBudW1iZXIpID0+IHN0cmluZyB7XHJcbiAgICByZXR1cm4gdGhpcy5uekZvcm1hdCB8fCAoKHA6IG51bWJlcik6IHN0cmluZyA9PiBgJHtwfSVgKTtcclxuICB9XHJcblxyXG4gIGdldCBzdGF0dXMoKTogTnpQcm9ncmVzc1N0YXR1c1R5cGUge1xyXG4gICAgcmV0dXJuIHRoaXMubnpTdGF0dXMgfHwgdGhpcy5pbmZlcnJlZFN0YXR1cztcclxuICB9XHJcblxyXG4gIGdldCBzdHJva2VXaWR0aCgpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMubnpTdHJva2VXaWR0aCB8fCB0aGlzLmluZmVycmVkU3Ryb2tlV2lkdGg7XHJcbiAgfVxyXG5cclxuICBnZXQgaXNDaXJjbGVTdHlsZSgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLm56VHlwZSA9PT0gJ2NpcmNsZScgfHwgdGhpcy5uelR5cGUgPT09ICdkYXNoYm9hcmQnO1xyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLnVwZGF0ZVBhdGhTdHlsZXMoKTtcclxuICAgIHRoaXMudXBkYXRlSWNvbigpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xyXG4gICAgY29uc3Qge1xyXG4gICAgICBuekdhcFBvc2l0aW9uLFxyXG4gICAgICBuelN0cm9rZUxpbmVjYXAsXHJcbiAgICAgIG56R2FwRGVncmVlLFxyXG4gICAgICBuelR5cGUsXHJcbiAgICAgIG56U2l6ZSxcclxuICAgICAgbnpTdGF0dXMsXHJcbiAgICAgIG56UGVyY2VudCxcclxuICAgICAgbnpTdWNjZXNzUGVyY2VudFxyXG4gICAgfSA9IGNoYW5nZXM7XHJcblxyXG4gICAgaWYgKG56R2FwUG9zaXRpb24gfHwgbnpTdHJva2VMaW5lY2FwIHx8IG56R2FwRGVncmVlIHx8IG56VHlwZSB8fCBuelBlcmNlbnQpIHtcclxuICAgICAgdGhpcy51cGRhdGVQYXRoU3R5bGVzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKG56U2l6ZSkge1xyXG4gICAgICBpZiAodGhpcy5uelNpemUgPT09ICdzbWFsbCcpIHtcclxuICAgICAgICB0aGlzLmluZmVycmVkU3Ryb2tlV2lkdGggPSA2O1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKG56U3RhdHVzKSB7XHJcbiAgICAgIHRoaXMuY2FjaGVkU3RhdHVzID0gdGhpcy5uelN0YXR1cyB8fCB0aGlzLmNhY2hlZFN0YXR1cztcclxuICAgICAgdGhpcy51cGRhdGVJY29uKCk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKG56UGVyY2VudCB8fCBuelN1Y2Nlc3NQZXJjZW50KSB7XHJcbiAgICAgIGNvbnN0IGZpbGxBbGwgPSBwYXJzZUludCh0aGlzLm56UGVyY2VudC50b1N0cmluZygpLCAxMCkgPj0gMTAwO1xyXG4gICAgICBpZiAoZmlsbEFsbCkge1xyXG4gICAgICAgIGlmICgoaXNOb3ROaWwodGhpcy5uelN1Y2Nlc3NQZXJjZW50KSAmJiB0aGlzLm56U3VjY2Vzc1BlcmNlbnQhID49IDEwMCkgfHwgdGhpcy5uelN1Y2Nlc3NQZXJjZW50ID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgIHRoaXMuaW5mZXJyZWRTdGF0dXMgPSAnc3VjY2Vzcyc7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuaW5mZXJyZWRTdGF0dXMgPSB0aGlzLmNhY2hlZFN0YXR1cztcclxuICAgICAgfVxyXG4gICAgICB0aGlzLnVwZGF0ZUljb24oKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAobnpUeXBlKSB7XHJcbiAgICAgIGlmICh0aGlzLm56VHlwZSAhPT0gJ2xpbmUnKSB7XHJcbiAgICAgICAgdGhpcy5pbmZlcnJlZFN0cm9rZVdpZHRoID0gNjtcclxuICAgICAgfVxyXG4gICAgICBpZiAodGhpcy5uelR5cGUgPT09ICdkYXNoYm9hcmQnKSB7XHJcbiAgICAgICAgdGhpcy5pbmZlcnJlZEdhcFBvc2l0aW9uID0gJ2JvdHRvbSc7XHJcbiAgICAgICAgdGhpcy5pbmZlcnJlZEdhcERlZ3JlZSA9IDc1O1xyXG4gICAgICB9XHJcbiAgICAgIGlmICh0aGlzLm56VHlwZSA9PT0gJ2NpcmNsZScpIHtcclxuICAgICAgICB0aGlzLmluZmVycmVkR2FwRGVncmVlID0gMDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgdXBkYXRlUGF0aFN0eWxlcygpOiB2b2lkIHtcclxuICAgIGNvbnN0IHJhZGl1cyA9IDUwIC0gdGhpcy5zdHJva2VXaWR0aCAvIDI7XHJcbiAgICBjb25zdCBnYXBQb3NpdGlvbiA9IHRoaXMubnpHYXBQb3NpdGlvbiB8fCB0aGlzLmluZmVycmVkR2FwUG9zaXRpb247XHJcbiAgICBsZXQgYmVnaW5Qb3NpdGlvblggPSAwO1xyXG4gICAgbGV0IGJlZ2luUG9zaXRpb25ZID0gLXJhZGl1cztcclxuICAgIGxldCBlbmRQb3NpdGlvblggPSAwO1xyXG4gICAgbGV0IGVuZFBvc2l0aW9uWSA9IHJhZGl1cyAqIC0yO1xyXG5cclxuICAgIHN3aXRjaCAoZ2FwUG9zaXRpb24pIHtcclxuICAgICAgY2FzZSAnbGVmdCc6XHJcbiAgICAgICAgYmVnaW5Qb3NpdGlvblggPSAtcmFkaXVzO1xyXG4gICAgICAgIGJlZ2luUG9zaXRpb25ZID0gMDtcclxuICAgICAgICBlbmRQb3NpdGlvblggPSByYWRpdXMgKiAyO1xyXG4gICAgICAgIGVuZFBvc2l0aW9uWSA9IDA7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgJ3JpZ2h0JzpcclxuICAgICAgICBiZWdpblBvc2l0aW9uWCA9IHJhZGl1cztcclxuICAgICAgICBiZWdpblBvc2l0aW9uWSA9IDA7XHJcbiAgICAgICAgZW5kUG9zaXRpb25YID0gcmFkaXVzICogLTI7XHJcbiAgICAgICAgZW5kUG9zaXRpb25ZID0gMDtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAnYm90dG9tJzpcclxuICAgICAgICBiZWdpblBvc2l0aW9uWSA9IHJhZGl1cztcclxuICAgICAgICBlbmRQb3NpdGlvblkgPSByYWRpdXMgKiAyO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgfVxyXG5cclxuICAgIHRoaXMucGF0aFN0cmluZyA9IGBNIDUwLDUwIG0gJHtiZWdpblBvc2l0aW9uWH0sJHtiZWdpblBvc2l0aW9uWX1cclxuICAgICBhICR7cmFkaXVzfSwke3JhZGl1c30gMCAxIDEgJHtlbmRQb3NpdGlvblh9LCR7LWVuZFBvc2l0aW9uWX1cclxuICAgICBhICR7cmFkaXVzfSwke3JhZGl1c30gMCAxIDEgJHstZW5kUG9zaXRpb25YfSwke2VuZFBvc2l0aW9uWX1gO1xyXG5cclxuICAgIGNvbnN0IGxlbiA9IE1hdGguUEkgKiAyICogcmFkaXVzO1xyXG4gICAgY29uc3QgZ2FwRGVncmVlID0gdGhpcy5uekdhcERlZ3JlZSB8fCB0aGlzLmluZmVycmVkR2FwRGVncmVlO1xyXG5cclxuICAgIHRoaXMudHJhaWxQYXRoU3R5bGUgPSB7XHJcbiAgICAgIHN0cm9rZURhc2hhcnJheTogYCR7bGVuIC0gZ2FwRGVncmVlfXB4ICR7bGVufXB4YCxcclxuICAgICAgc3Ryb2tlRGFzaG9mZnNldDogYC0ke2dhcERlZ3JlZSAvIDJ9cHhgLFxyXG4gICAgICB0cmFuc2l0aW9uOiAnc3Ryb2tlLWRhc2hvZmZzZXQgLjNzIGVhc2UgMHMsIHN0cm9rZS1kYXNoYXJyYXkgLjNzIGVhc2UgMHMsIHN0cm9rZSAuM3MnXHJcbiAgICB9O1xyXG4gICAgdGhpcy5zdHJva2VQYXRoU3R5bGUgPSB7XHJcbiAgICAgIHN0cm9rZTogdGhpcy5uelN0cm9rZUNvbG9yIHx8IChudWxsIGFzIGFueSksIC8vIHRzbGludDpkaXNhYmxlLWxpbmU6bm8tYW55XHJcbiAgICAgIHN0cm9rZURhc2hhcnJheTogYCR7KHRoaXMubnpQZXJjZW50IC8gMTAwKSAqIChsZW4gLSBnYXBEZWdyZWUpfXB4ICR7bGVufXB4YCxcclxuICAgICAgc3Ryb2tlRGFzaG9mZnNldDogYC0ke2dhcERlZ3JlZSAvIDJ9cHhgLFxyXG4gICAgICB0cmFuc2l0aW9uOiAnc3Ryb2tlLWRhc2hvZmZzZXQgLjNzIGVhc2UgMHMsIHN0cm9rZS1kYXNoYXJyYXkgLjNzIGVhc2UgMHMsIHN0cm9rZSAuM3MsIHN0cm9rZS13aWR0aCAuMDZzIGVhc2UgLjNzJ1xyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZUljb24oKTogdm9pZCB7XHJcbiAgICBjb25zdCBpc0NpcmNsZSA9IHRoaXMubnpUeXBlID09PSAnY2lyY2xlJyB8fCB0aGlzLm56VHlwZSA9PT0gJ2Rhc2hib2FyZCc7XHJcbiAgICBjb25zdCByZXQgPSB0aGlzLnN0YXR1cyA9PT0gJ3N1Y2Nlc3MnID8gJ2NoZWNrJyA6IHRoaXMuc3RhdHVzID09PSAnZXhjZXB0aW9uJyA/ICdjbG9zZScgOiAnJztcclxuXHJcbiAgICB0aGlzLmljb24gPSByZXQgPyByZXQgKyAoaXNDaXJjbGUgPyAnLW8nIDogJy1jaXJjbGUtZmlsbCcpIDogJyc7XHJcbiAgfVxyXG59XHJcbiJdfQ==