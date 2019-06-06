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
import { MediaMatcher } from '@angular/cdk/layout';
import { Platform } from '@angular/cdk/platform';
import { isDevMode, ChangeDetectionStrategy, ChangeDetectorRef, Component, ContentChildren, Input, NgZone, QueryList, ViewEncapsulation } from '@angular/core';
import { fromEvent, merge, Subject } from 'rxjs';
import { auditTime, startWith, takeUntil } from 'rxjs/operators';
import { responsiveMap, Breakpoint, InputBoolean } from 'ng-zorro-antd/core';
import { NzDescriptionsItemComponent } from './nz-descriptions-item.component';
/** @type {?} */
var defaultColumnMap = {
    xxl: 3,
    xl: 3,
    lg: 3,
    md: 3,
    sm: 2,
    xs: 1
};
var NzDescriptionsComponent = /** @class */ (function () {
    function NzDescriptionsComponent(cdr, ngZone, mediaMatcher, platform) {
        this.cdr = cdr;
        this.ngZone = ngZone;
        this.mediaMatcher = mediaMatcher;
        this.platform = platform;
        this.nzBordered = false;
        this.nzColumn = defaultColumnMap;
        this.nzSize = 'default';
        this.nzTitle = '';
        this.itemMatrix = [];
        this.realColumn = 3;
        this.destroy$ = new Subject();
        this.resize$ = new Subject();
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    NzDescriptionsComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (changes.nzColumn) {
            this.resize$.next();
        }
    };
    /**
     * @return {?}
     */
    NzDescriptionsComponent.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        merge(this.items.changes.pipe(startWith(this.items), takeUntil(this.destroy$)), this.resize$)
            .pipe(takeUntil(this.destroy$))
            .subscribe((/**
         * @return {?}
         */
        function () {
            _this.prepareMatrix();
            _this.cdr.markForCheck();
        }));
        if (this.platform.isBrowser) {
            this.ngZone.runOutsideAngular((/**
             * @return {?}
             */
            function () {
                fromEvent(window, 'resize')
                    .pipe(auditTime(16), takeUntil(_this.destroy$))
                    .subscribe((/**
                 * @return {?}
                 */
                function () {
                    _this.ngZone.run((/**
                     * @return {?}
                     */
                    function () {
                        _this.resize$.next();
                    }));
                }));
            }));
        }
    };
    /**
     * @return {?}
     */
    NzDescriptionsComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.destroy$.next();
        this.destroy$.complete();
        this.resize$.complete();
    };
    /**
     * Prepare the render matrix according to description items' spans.
     */
    /**
     * Prepare the render matrix according to description items' spans.
     * @private
     * @return {?}
     */
    NzDescriptionsComponent.prototype.prepareMatrix = /**
     * Prepare the render matrix according to description items' spans.
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var currentRow = [];
        /** @type {?} */
        var width = 0;
        /** @type {?} */
        var column = (this.realColumn = this.getColumn());
        /** @type {?} */
        var items = this.items.toArray();
        /** @type {?} */
        var matrix = [];
        /** @type {?} */
        var flushRow = (/**
         * @return {?}
         */
        function () {
            matrix.push(currentRow);
            currentRow = [];
            width = 0;
        });
        items.forEach((/**
         * @param {?} item
         * @return {?}
         */
        function (item) {
            var title = item.nzTitle, content = item.content, span = item.nzSpan;
            currentRow.push({ title: title, content: content, span: span });
            width += span;
            // If the last item make the row's length exceeds `nzColumn`, the last
            // item should take all the space left. This logic is implemented in the template.
            // Warn user about that.
            if (width >= column) {
                if (width > column && isDevMode()) {
                    console.warn("\"nzColumn\" is " + column + " but we have row length " + width);
                }
                flushRow();
            }
        }));
        if (currentRow.length) {
            flushRow();
        }
        this.itemMatrix = matrix;
    };
    /**
     * @private
     * @return {?}
     */
    NzDescriptionsComponent.prototype.matchMedia = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var bp = Breakpoint.md;
        Object.keys(responsiveMap).map((/**
         * @param {?} breakpoint
         * @return {?}
         */
        function (breakpoint) {
            /** @type {?} */
            var castBP = (/** @type {?} */ (breakpoint));
            /** @type {?} */
            var matchBelow = _this.mediaMatcher.matchMedia(responsiveMap[castBP]).matches;
            if (matchBelow) {
                bp = castBP;
            }
        }));
        return bp;
    };
    /**
     * @private
     * @return {?}
     */
    NzDescriptionsComponent.prototype.getColumn = /**
     * @private
     * @return {?}
     */
    function () {
        if (typeof this.nzColumn !== 'number') {
            return this.nzColumn[this.matchMedia()];
        }
        return this.nzColumn;
    };
    NzDescriptionsComponent.decorators = [
        { type: Component, args: [{
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    selector: 'nz-descriptions',
                    template: "<div *ngIf=\"nzTitle\"\r\n     class=\"ant-descriptions-title\">\r\n  <ng-container *nzStringTemplateOutlet=\"nzTitle\">{{ nzTitle }}</ng-container>\r\n</div>\r\n<div class=\"ant-descriptions-view\">\r\n  <table>\r\n    <tbody>\r\n      <tr class=\"ant-descriptions-row\"\r\n          *ngFor=\"let row of itemMatrix; let i = index\">\r\n        <ng-container *ngFor=\"let item of row; let isLast = last\">\r\n          <ng-container *ngIf=\"!nzBordered\">\r\n            <td class=\"ant-descriptions-item\"\r\n                [colSpan]=\"isLast ? (realColumn - (row.length - 1)) * 2 - 1 : item.span\">\r\n              <span class=\"ant-descriptions-item-label\">{{ item.title }}</span>\r\n              <span class=\"ant-descriptions-item-content\">\r\n                <ng-template [ngTemplateOutlet]=\"item.content\"></ng-template>\r\n              </span>\r\n            </td>\r\n          </ng-container>\r\n          <ng-container *ngIf=\"nzBordered\">\r\n            <td class=\"ant-descriptions-item-label\"\r\n                *nzStringTemplateOutlet=\"item.title\">{{ item.title }}</td>\r\n            <td class=\"ant-descriptions-item-content\"\r\n                [colSpan]=\"isLast ? (realColumn - (row.length - 1)) * 2 - 1 : item.span\">\r\n              <ng-template [ngTemplateOutlet]=\"item.content\"></ng-template>\r\n            </td>\r\n          </ng-container>\r\n        </ng-container>\r\n      </tr>\r\n    </tbody>\r\n\r\n  </table>\r\n</div>\r\n",
                    exportAs: 'nzDescriptions',
                    preserveWhitespaces: false,
                    host: {
                        class: 'ant-descriptions',
                        '[class.bordered]': 'nzBordered',
                        '[class.middle]': 'nzSize === "middle"',
                        '[class.small]': 'nzSize === "small"'
                    },
                    styles: ["\n      nz-descriptions {\n        display: block;\n      }\n    "]
                }] }
    ];
    /** @nocollapse */
    NzDescriptionsComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: NgZone },
        { type: MediaMatcher },
        { type: Platform }
    ]; };
    NzDescriptionsComponent.propDecorators = {
        items: [{ type: ContentChildren, args: [NzDescriptionsItemComponent,] }],
        nzBordered: [{ type: Input }],
        nzColumn: [{ type: Input }],
        nzSize: [{ type: Input }],
        nzTitle: [{ type: Input }]
    };
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], NzDescriptionsComponent.prototype, "nzBordered", void 0);
    return NzDescriptionsComponent;
}());
export { NzDescriptionsComponent };
if (false) {
    /** @type {?} */
    NzDescriptionsComponent.prototype.items;
    /** @type {?} */
    NzDescriptionsComponent.prototype.nzBordered;
    /** @type {?} */
    NzDescriptionsComponent.prototype.nzColumn;
    /** @type {?} */
    NzDescriptionsComponent.prototype.nzSize;
    /** @type {?} */
    NzDescriptionsComponent.prototype.nzTitle;
    /** @type {?} */
    NzDescriptionsComponent.prototype.itemMatrix;
    /** @type {?} */
    NzDescriptionsComponent.prototype.realColumn;
    /**
     * @type {?}
     * @private
     */
    NzDescriptionsComponent.prototype.destroy$;
    /**
     * @type {?}
     * @private
     */
    NzDescriptionsComponent.prototype.resize$;
    /**
     * @type {?}
     * @private
     */
    NzDescriptionsComponent.prototype.cdr;
    /**
     * @type {?}
     * @private
     */
    NzDescriptionsComponent.prototype.ngZone;
    /**
     * @type {?}
     * @private
     */
    NzDescriptionsComponent.prototype.mediaMatcher;
    /**
     * @type {?}
     * @private
     */
    NzDescriptionsComponent.prototype.platform;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotZGVzY3JpcHRpb25zLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvZGVzY3JpcHRpb25zLyIsInNvdXJjZXMiOlsibnotZGVzY3JpcHRpb25zLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDbkQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ2pELE9BQU8sRUFDTCxTQUFTLEVBRVQsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsZUFBZSxFQUNmLEtBQUssRUFDTCxNQUFNLEVBR04sU0FBUyxFQUdULGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDakQsT0FBTyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFakUsT0FBTyxFQUFFLGFBQWEsRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFN0UsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7O0lBRXpFLGdCQUFnQixHQUErQjtJQUNuRCxHQUFHLEVBQUUsQ0FBQztJQUNOLEVBQUUsRUFBRSxDQUFDO0lBQ0wsRUFBRSxFQUFFLENBQUM7SUFDTCxFQUFFLEVBQUUsQ0FBQztJQUNMLEVBQUUsRUFBRSxDQUFDO0lBQ0wsRUFBRSxFQUFFLENBQUM7Q0FDTjtBQUVEO0lBb0NFLGlDQUNVLEdBQXNCLEVBQ3RCLE1BQWMsRUFDZCxZQUEwQixFQUMxQixRQUFrQjtRQUhsQixRQUFHLEdBQUgsR0FBRyxDQUFtQjtRQUN0QixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQ2QsaUJBQVksR0FBWixZQUFZ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QUF1QixDQUFDLE1BQU07b0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO29CQUNyQyxRQUFRLEVBQUUsaUJBQWlCO29CQUMzQix5OENBQStDO29CQUMvQyxRQUFRLEVBQUUsZ0JBQWdCO29CQUMxQixtQkFBbUIsRUFBRSxLQUFLO29CQUMxQixJQUFJLEVBQUU7d0JBQ0osS0FBSyxFQUFFLGtCQUFrQjt3QkFDekIsa0JBQWtCLEVBQUUsWUFBWTt3QkFDaEMsZ0JBQWdCLEVBQUUscUJBQXFCO3dCQUN2QyxlQUFlLEVBQUUsb0JBQW9CO3FCQUN0Qzs2QkFFQyxtRUFJQztpQkFFSjs7OztnQkFoREMsaUJBQWlCO2dCQUlqQixNQUFNO2dCQVZDLFlBQVk7Z0JBQ1osUUFBUTs7O3dCQXVEZCxlQUFlLFNBQUMsMkJBQTJCOzZCQUUzQyxLQUFLOzJCQUNMLEtBQUs7eUJBQ0wsS0FBSzswQkFDTCxLQUFLOztJQUhtQjtRQUFmLFlBQVksRUFBRTs7K0RBQW9CO0lBMEg5Qyw4QkFBQztDQUFBLEFBbEpELElBa0pDO1NBN0hZLHVCQUF1Qjs7O0lBQ2xDLHdDQUE0Rjs7SUFFNUYsNkNBQTRDOztJQUM1QywyQ0FBeUU7O0lBQ3pFLHlDQUFnRDs7SUFDaEQsMENBQWtEOztJQUVsRCw2Q0FBbUQ7O0lBRW5ELDZDQUFlOzs7OztJQUVmLDJDQUF1Qzs7Ozs7SUFDdkMsMENBQXNDOzs7OztJQUdwQyxzQ0FBOEI7Ozs7O0lBQzlCLHlDQUFzQjs7Ozs7SUFDdEIsK0NBQWtDOzs7OztJQUNsQywyQ0FBMEIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuXHJcbmltcG9ydCB7IE1lZGlhTWF0Y2hlciB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9sYXlvdXQnO1xyXG5pbXBvcnQgeyBQbGF0Zm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wbGF0Zm9ybSc7XHJcbmltcG9ydCB7XHJcbiAgaXNEZXZNb2RlLFxyXG4gIEFmdGVyQ29udGVudEluaXQsXHJcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXHJcbiAgQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgQ29tcG9uZW50LFxyXG4gIENvbnRlbnRDaGlsZHJlbixcclxuICBJbnB1dCxcclxuICBOZ1pvbmUsXHJcbiAgT25DaGFuZ2VzLFxyXG4gIE9uRGVzdHJveSxcclxuICBRdWVyeUxpc3QsXHJcbiAgU2ltcGxlQ2hhbmdlcyxcclxuICBUZW1wbGF0ZVJlZixcclxuICBWaWV3RW5jYXBzdWxhdGlvblxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBmcm9tRXZlbnQsIG1lcmdlLCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IGF1ZGl0VGltZSwgc3RhcnRXaXRoLCB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcblxyXG5pbXBvcnQgeyByZXNwb25zaXZlTWFwLCBCcmVha3BvaW50LCBJbnB1dEJvb2xlYW4gfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xyXG5pbXBvcnQgeyBOekRlc2NyaXB0aW9uc0l0ZW1SZW5kZXJQcm9wcywgTnpEZXNjcmlwdGlvbnNTaXplIH0gZnJvbSAnLi9uei1kZXNjcmlwdGlvbnMtZGVmaW5pdGlvbnMnO1xyXG5pbXBvcnQgeyBOekRlc2NyaXB0aW9uc0l0ZW1Db21wb25lbnQgfSBmcm9tICcuL256LWRlc2NyaXB0aW9ucy1pdGVtLmNvbXBvbmVudCc7XHJcblxyXG5jb25zdCBkZWZhdWx0Q29sdW1uTWFwOiB7IFtzaXplOiBzdHJpbmddOiBudW1iZXIgfSA9IHtcclxuICB4eGw6IDMsXHJcbiAgeGw6IDMsXHJcbiAgbGc6IDMsXHJcbiAgbWQ6IDMsXHJcbiAgc206IDIsXHJcbiAgeHM6IDFcclxufTtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgc2VsZWN0b3I6ICduei1kZXNjcmlwdGlvbnMnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9uei1kZXNjcmlwdGlvbnMuY29tcG9uZW50Lmh0bWwnLFxyXG4gIGV4cG9ydEFzOiAnbnpEZXNjcmlwdGlvbnMnLFxyXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxyXG4gIGhvc3Q6IHtcclxuICAgIGNsYXNzOiAnYW50LWRlc2NyaXB0aW9ucycsXHJcbiAgICAnW2NsYXNzLmJvcmRlcmVkXSc6ICduekJvcmRlcmVkJyxcclxuICAgICdbY2xhc3MubWlkZGxlXSc6ICduelNpemUgPT09IFwibWlkZGxlXCInLFxyXG4gICAgJ1tjbGFzcy5zbWFsbF0nOiAnbnpTaXplID09PSBcInNtYWxsXCInXHJcbiAgfSxcclxuICBzdHlsZXM6IFtcclxuICAgIGBcclxuICAgICAgbnotZGVzY3JpcHRpb25zIHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgfVxyXG4gICAgYFxyXG4gIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIE56RGVzY3JpcHRpb25zQ29tcG9uZW50IGltcGxlbWVudHMgT25DaGFuZ2VzLCBPbkRlc3Ryb3ksIEFmdGVyQ29udGVudEluaXQge1xyXG4gIEBDb250ZW50Q2hpbGRyZW4oTnpEZXNjcmlwdGlvbnNJdGVtQ29tcG9uZW50KSBpdGVtczogUXVlcnlMaXN0PE56RGVzY3JpcHRpb25zSXRlbUNvbXBvbmVudD47XHJcblxyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuekJvcmRlcmVkID0gZmFsc2U7XHJcbiAgQElucHV0KCkgbnpDb2x1bW46IG51bWJlciB8IHsgW2tleTogc3RyaW5nXTogbnVtYmVyIH0gPSBkZWZhdWx0Q29sdW1uTWFwO1xyXG4gIEBJbnB1dCgpIG56U2l6ZTogTnpEZXNjcmlwdGlvbnNTaXplID0gJ2RlZmF1bHQnO1xyXG4gIEBJbnB1dCgpIG56VGl0bGU6IHN0cmluZyB8IFRlbXBsYXRlUmVmPHZvaWQ+ID0gJyc7XHJcblxyXG4gIGl0ZW1NYXRyaXg6IE56RGVzY3JpcHRpb25zSXRlbVJlbmRlclByb3BzW11bXSA9IFtdO1xyXG5cclxuICByZWFsQ29sdW1uID0gMztcclxuXHJcbiAgcHJpdmF0ZSBkZXN0cm95JCA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XHJcbiAgcHJpdmF0ZSByZXNpemUkID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgICBwcml2YXRlIG5nWm9uZTogTmdab25lLFxyXG4gICAgcHJpdmF0ZSBtZWRpYU1hdGNoZXI6IE1lZGlhTWF0Y2hlcixcclxuICAgIHByaXZhdGUgcGxhdGZvcm06IFBsYXRmb3JtXHJcbiAgKSB7fVxyXG5cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XHJcbiAgICBpZiAoY2hhbmdlcy5uekNvbHVtbikge1xyXG4gICAgICB0aGlzLnJlc2l6ZSQubmV4dCgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbmdBZnRlckNvbnRlbnRJbml0KCk6IHZvaWQge1xyXG4gICAgbWVyZ2UoXHJcbiAgICAgIHRoaXMuaXRlbXMuY2hhbmdlcy5waXBlKFxyXG4gICAgICAgIHN0YXJ0V2l0aCh0aGlzLml0ZW1zKSxcclxuICAgICAgICB0YWtlVW50aWwodGhpcy5kZXN0cm95JClcclxuICAgICAgKSxcclxuICAgICAgdGhpcy5yZXNpemUkXHJcbiAgICApXHJcbiAgICAgIC5waXBlKHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKSlcclxuICAgICAgLnN1YnNjcmliZSgoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5wcmVwYXJlTWF0cml4KCk7XHJcbiAgICAgICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgIGlmICh0aGlzLnBsYXRmb3JtLmlzQnJvd3Nlcikge1xyXG4gICAgICB0aGlzLm5nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcigoKSA9PiB7XHJcbiAgICAgICAgZnJvbUV2ZW50KHdpbmRvdywgJ3Jlc2l6ZScpXHJcbiAgICAgICAgICAucGlwZShcclxuICAgICAgICAgICAgYXVkaXRUaW1lKDE2KSxcclxuICAgICAgICAgICAgdGFrZVVudGlsKHRoaXMuZGVzdHJveSQpXHJcbiAgICAgICAgICApXHJcbiAgICAgICAgICAuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5uZ1pvbmUucnVuKCgpID0+IHtcclxuICAgICAgICAgICAgICB0aGlzLnJlc2l6ZSQubmV4dCgpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgdGhpcy5kZXN0cm95JC5uZXh0KCk7XHJcbiAgICB0aGlzLmRlc3Ryb3kkLmNvbXBsZXRlKCk7XHJcbiAgICB0aGlzLnJlc2l6ZSQuY29tcGxldGUoKTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFByZXBhcmUgdGhlIHJlbmRlciBtYXRyaXggYWNjb3JkaW5nIHRvIGRlc2NyaXB0aW9uIGl0ZW1zJyBzcGFucy5cclxuICAgKi9cclxuICBwcml2YXRlIHByZXBhcmVNYXRyaXgoKTogdm9pZCB7XHJcbiAgICBsZXQgY3VycmVudFJvdzogTnpEZXNjcmlwdGlvbnNJdGVtUmVuZGVyUHJvcHNbXSA9IFtdO1xyXG4gICAgbGV0IHdpZHRoID0gMDtcclxuXHJcbiAgICBjb25zdCBjb2x1bW4gPSAodGhpcy5yZWFsQ29sdW1uID0gdGhpcy5nZXRDb2x1bW4oKSk7XHJcbiAgICBjb25zdCBpdGVtczogTnpEZXNjcmlwdGlvbnNJdGVtQ29tcG9uZW50W10gPSB0aGlzLml0ZW1zLnRvQXJyYXkoKTtcclxuICAgIGNvbnN0IG1hdHJpeDogTnpEZXNjcmlwdGlvbnNJdGVtUmVuZGVyUHJvcHNbXVtdID0gW107XHJcbiAgICBjb25zdCBmbHVzaFJvdyA9ICgpID0+IHtcclxuICAgICAgbWF0cml4LnB1c2goY3VycmVudFJvdyk7XHJcbiAgICAgIGN1cnJlbnRSb3cgPSBbXTtcclxuICAgICAgd2lkdGggPSAwO1xyXG4gICAgfTtcclxuXHJcbiAgICBpdGVtcy5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgICBjb25zdCB7IG56VGl0bGU6IHRpdGxlLCBjb250ZW50LCBuelNwYW46IHNwYW4gfSA9IGl0ZW07XHJcblxyXG4gICAgICBjdXJyZW50Um93LnB1c2goeyB0aXRsZSwgY29udGVudCwgc3BhbiB9KTtcclxuICAgICAgd2lkdGggKz0gc3BhbjtcclxuXHJcbiAgICAgIC8vIElmIHRoZSBsYXN0IGl0ZW0gbWFrZSB0aGUgcm93J3MgbGVuZ3RoIGV4Y2VlZHMgYG56Q29sdW1uYCwgdGhlIGxhc3RcclxuICAgICAgLy8gaXRlbSBzaG91bGQgdGFrZSBhbGwgdGhlIHNwYWNlIGxlZnQuIFRoaXMgbG9naWMgaXMgaW1wbGVtZW50ZWQgaW4gdGhlIHRlbXBsYXRlLlxyXG4gICAgICAvLyBXYXJuIHVzZXIgYWJvdXQgdGhhdC5cclxuICAgICAgaWYgKHdpZHRoID49IGNvbHVtbikge1xyXG4gICAgICAgIGlmICh3aWR0aCA+IGNvbHVtbiAmJiBpc0Rldk1vZGUoKSkge1xyXG4gICAgICAgICAgY29uc29sZS53YXJuKGBcIm56Q29sdW1uXCIgaXMgJHtjb2x1bW59IGJ1dCB3ZSBoYXZlIHJvdyBsZW5ndGggJHt3aWR0aH1gKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZmx1c2hSb3coKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgaWYgKGN1cnJlbnRSb3cubGVuZ3RoKSB7XHJcbiAgICAgIGZsdXNoUm93KCk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5pdGVtTWF0cml4ID0gbWF0cml4O1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBtYXRjaE1lZGlhKCk6IEJyZWFrcG9pbnQge1xyXG4gICAgbGV0IGJwOiBCcmVha3BvaW50ID0gQnJlYWtwb2ludC5tZDtcclxuXHJcbiAgICBPYmplY3Qua2V5cyhyZXNwb25zaXZlTWFwKS5tYXAoKGJyZWFrcG9pbnQ6IHN0cmluZykgPT4ge1xyXG4gICAgICBjb25zdCBjYXN0QlAgPSBicmVha3BvaW50IGFzIEJyZWFrcG9pbnQ7XHJcbiAgICAgIGNvbnN0IG1hdGNoQmVsb3cgPSB0aGlzLm1lZGlhTWF0Y2hlci5tYXRjaE1lZGlhKHJlc3BvbnNpdmVNYXBbY2FzdEJQXSkubWF0Y2hlcztcclxuICAgICAgaWYgKG1hdGNoQmVsb3cpIHtcclxuICAgICAgICBicCA9IGNhc3RCUDtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIGJwO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXRDb2x1bW4oKTogbnVtYmVyIHtcclxuICAgIGlmICh0eXBlb2YgdGhpcy5uekNvbHVtbiAhPT0gJ251bWJlcicpIHtcclxuICAgICAgcmV0dXJuIHRoaXMubnpDb2x1bW5bdGhpcy5tYXRjaE1lZGlhKCldO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB0aGlzLm56Q29sdW1uO1xyXG4gIH1cclxufVxyXG4iXX0=