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
const defaultColumnMap = {
    xxl: 3,
    xl: 3,
    lg: 3,
    md: 3,
    sm: 2,
    xs: 1
};
export class NzDescriptionsComponent {
    /**
     * @param {?} cdr
     * @param {?} ngZone
     * @param {?} mediaMatcher
     * @param {?} platform
     */
    constructor(cdr, ngZone, mediaMatcher, platform) {
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
    ngOnChanges(changes) {
        if (changes.nzColumn) {
            this.resize$.next();
        }
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        merge(this.items.changes.pipe(startWith(this.items), takeUntil(this.destroy$)), this.resize$)
            .pipe(takeUntil(this.destroy$))
            .subscribe((/**
         * @return {?}
         */
        () => {
            this.prepareMatrix();
            this.cdr.markForCheck();
        }));
        if (this.platform.isBrowser) {
            this.ngZone.runOutsideAngular((/**
             * @return {?}
             */
            () => {
                fromEvent(window, 'resize')
                    .pipe(auditTime(16), takeUntil(this.destroy$))
                    .subscribe((/**
                 * @return {?}
                 */
                () => {
                    this.ngZone.run((/**
                     * @return {?}
                     */
                    () => {
                        this.resize$.next();
                    }));
                }));
            }));
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
        this.resize$.complete();
    }
    /**
     * Prepare the render matrix according to description items' spans.
     * @private
     * @return {?}
     */
    prepareMatrix() {
        /** @type {?} */
        let currentRow = [];
        /** @type {?} */
        let width = 0;
        /** @type {?} */
        const column = (this.realColumn = this.getColumn());
        /** @type {?} */
        const items = this.items.toArray();
        /** @type {?} */
        const matrix = [];
        /** @type {?} */
        const flushRow = (/**
         * @return {?}
         */
        () => {
            matrix.push(currentRow);
            currentRow = [];
            width = 0;
        });
        items.forEach((/**
         * @param {?} item
         * @return {?}
         */
        item => {
            const { nzTitle: title, content, nzSpan: span } = item;
            currentRow.push({ title, content, span });
            width += span;
            // If the last item make the row's length exceeds `nzColumn`, the last
            // item should take all the space left. This logic is implemented in the template.
            // Warn user about that.
            if (width >= column) {
                if (width > column && isDevMode()) {
                    console.warn(`"nzColumn" is ${column} but we have row length ${width}`);
                }
                flushRow();
            }
        }));
        if (currentRow.length) {
            flushRow();
        }
        this.itemMatrix = matrix;
    }
    /**
     * @private
     * @return {?}
     */
    matchMedia() {
        /** @type {?} */
        let bp = Breakpoint.md;
        Object.keys(responsiveMap).map((/**
         * @param {?} breakpoint
         * @return {?}
         */
        (breakpoint) => {
            /** @type {?} */
            const castBP = (/** @type {?} */ (breakpoint));
            /** @type {?} */
            const matchBelow = this.mediaMatcher.matchMedia(responsiveMap[castBP]).matches;
            if (matchBelow) {
                bp = castBP;
            }
        }));
        return bp;
    }
    /**
     * @private
     * @return {?}
     */
    getColumn() {
        if (typeof this.nzColumn !== 'number') {
            return this.nzColumn[this.matchMedia()];
        }
        return this.nzColumn;
    }
}
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
                styles: [`
      nz-descriptions {
        display: block;
      }
    `]
            }] }
];
/** @nocollapse */
NzDescriptionsComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: NgZone },
    { type: MediaMatcher },
    { type: Platform }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotZGVzY3JpcHRpb25zLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvZGVzY3JpcHRpb25zLyIsInNvdXJjZXMiOlsibnotZGVzY3JpcHRpb25zLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFDbkQsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ2pELE9BQU8sRUFDTCxTQUFTLEVBRVQsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsZUFBZSxFQUNmLEtBQUssRUFDTCxNQUFNLEVBR04sU0FBUyxFQUdULGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDakQsT0FBTyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFakUsT0FBTyxFQUFFLGFBQWEsRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFN0UsT0FBTyxFQUFFLDJCQUEyQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7O01BRXpFLGdCQUFnQixHQUErQjtJQUNuRCxHQUFHLEVBQUUsQ0FBQztJQUNOLEVBQUUsRUFBRSxDQUFDO0lBQ0wsRUFBRSxFQUFFLENBQUM7SUFDTCxFQUFFLEVBQUUsQ0FBQztJQUNMLEVBQUUsRUFBRSxDQUFDO0lBQ0wsRUFBRSxFQUFFLENBQUM7Q0FDTjtBQXVCRCxNQUFNLE9BQU8sdUJBQXVCOzs7Ozs7O0lBZWxDLFlBQ1UsR0FBc0IsRUFDdEIsTUFBYyxFQUNkLFlBQTBCLEVBQzFCLFFBQWtCO1FBSGxCLFFBQUcsR0FBSCxHQUFHLENBQW1CO1FBQ3RCLFdBQU0sR0FBTixNQUFNLENB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U0FBQztnQkFDVCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7Z0JBQ3JDLFFBQVEsRUFBRSxpQkFBaUI7Z0JBQzNCLHk4Q0FBK0M7Z0JBQy9DLFFBQVEsRUFBRSxnQkFBZ0I7Z0JBQzFCLG1CQUFtQixFQUFFLEtBQUs7Z0JBQzFCLElBQUksRUFBRTtvQkFDSixLQUFLLEVBQUUsa0JBQWtCO29CQUN6QixrQkFBa0IsRUFBRSxZQUFZO29CQUNoQyxnQkFBZ0IsRUFBRSxxQkFBcUI7b0JBQ3ZDLGVBQWUsRUFBRSxvQkFBb0I7aUJBQ3RDO3lCQUVDOzs7O0tBSUM7YUFFSjs7OztZQWhEQyxpQkFBaUI7WUFJakIsTUFBTTtZQVZDLFlBQVk7WUFDWixRQUFROzs7b0JBdURkLGVBQWUsU0FBQywyQkFBMkI7eUJBRTNDLEtBQUs7dUJBQ0wsS0FBSztxQkFDTCxLQUFLO3NCQUNMLEtBQUs7O0FBSG1CO0lBQWYsWUFBWSxFQUFFOzsyREFBb0I7OztJQUY1Qyx3Q0FBNEY7O0lBRTVGLDZDQUE0Qzs7SUFDNUMsMkNBQXlFOztJQUN6RSx5Q0FBZ0Q7O0lBQ2hELDBDQUFrRDs7SUFFbEQsNkNBQW1EOztJQUVuRCw2Q0FBZTs7Ozs7SUFFZiwyQ0FBdUM7Ozs7O0lBQ3ZDLDBDQUFzQzs7Ozs7SUFHcEMsc0NBQThCOzs7OztJQUM5Qix5Q0FBc0I7Ozs7O0lBQ3RCLCtDQUFrQzs7Ozs7SUFDbEMsMkNBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcclxuICovXHJcblxyXG5pbXBvcnQgeyBNZWRpYU1hdGNoZXIgfSBmcm9tICdAYW5ndWxhci9jZGsvbGF5b3V0JztcclxuaW1wb3J0IHsgUGxhdGZvcm0gfSBmcm9tICdAYW5ndWxhci9jZGsvcGxhdGZvcm0nO1xyXG5pbXBvcnQge1xyXG4gIGlzRGV2TW9kZSxcclxuICBBZnRlckNvbnRlbnRJbml0LFxyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIENoYW5nZURldGVjdG9yUmVmLFxyXG4gIENvbXBvbmVudCxcclxuICBDb250ZW50Q2hpbGRyZW4sXHJcbiAgSW5wdXQsXHJcbiAgTmdab25lLFxyXG4gIE9uQ2hhbmdlcyxcclxuICBPbkRlc3Ryb3ksXHJcbiAgUXVlcnlMaXN0LFxyXG4gIFNpbXBsZUNoYW5nZXMsXHJcbiAgVGVtcGxhdGVSZWYsXHJcbiAgVmlld0VuY2Fwc3VsYXRpb25cclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgZnJvbUV2ZW50LCBtZXJnZSwgU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBhdWRpdFRpbWUsIHN0YXJ0V2l0aCwgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5cclxuaW1wb3J0IHsgcmVzcG9uc2l2ZU1hcCwgQnJlYWtwb2ludCwgSW5wdXRCb29sZWFuIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcclxuaW1wb3J0IHsgTnpEZXNjcmlwdGlvbnNJdGVtUmVuZGVyUHJvcHMsIE56RGVzY3JpcHRpb25zU2l6ZSB9IGZyb20gJy4vbnotZGVzY3JpcHRpb25zLWRlZmluaXRpb25zJztcclxuaW1wb3J0IHsgTnpEZXNjcmlwdGlvbnNJdGVtQ29tcG9uZW50IH0gZnJvbSAnLi9uei1kZXNjcmlwdGlvbnMtaXRlbS5jb21wb25lbnQnO1xyXG5cclxuY29uc3QgZGVmYXVsdENvbHVtbk1hcDogeyBbc2l6ZTogc3RyaW5nXTogbnVtYmVyIH0gPSB7XHJcbiAgeHhsOiAzLFxyXG4gIHhsOiAzLFxyXG4gIGxnOiAzLFxyXG4gIG1kOiAzLFxyXG4gIHNtOiAyLFxyXG4gIHhzOiAxXHJcbn07XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxyXG4gIHNlbGVjdG9yOiAnbnotZGVzY3JpcHRpb25zJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vbnotZGVzY3JpcHRpb25zLmNvbXBvbmVudC5odG1sJyxcclxuICBleHBvcnRBczogJ256RGVzY3JpcHRpb25zJyxcclxuICBwcmVzZXJ2ZVdoaXRlc3BhY2VzOiBmYWxzZSxcclxuICBob3N0OiB7XHJcbiAgICBjbGFzczogJ2FudC1kZXNjcmlwdGlvbnMnLFxyXG4gICAgJ1tjbGFzcy5ib3JkZXJlZF0nOiAnbnpCb3JkZXJlZCcsXHJcbiAgICAnW2NsYXNzLm1pZGRsZV0nOiAnbnpTaXplID09PSBcIm1pZGRsZVwiJyxcclxuICAgICdbY2xhc3Muc21hbGxdJzogJ256U2l6ZSA9PT0gXCJzbWFsbFwiJ1xyXG4gIH0sXHJcbiAgc3R5bGVzOiBbXHJcbiAgICBgXHJcbiAgICAgIG56LWRlc2NyaXB0aW9ucyB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIH1cclxuICAgIGBcclxuICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOekRlc2NyaXB0aW9uc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uQ2hhbmdlcywgT25EZXN0cm95LCBBZnRlckNvbnRlbnRJbml0IHtcclxuICBAQ29udGVudENoaWxkcmVuKE56RGVzY3JpcHRpb25zSXRlbUNvbXBvbmVudCkgaXRlbXM6IFF1ZXJ5TGlzdDxOekRlc2NyaXB0aW9uc0l0ZW1Db21wb25lbnQ+O1xyXG5cclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpCb3JkZXJlZCA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIG56Q29sdW1uOiBudW1iZXIgfCB7IFtrZXk6IHN0cmluZ106IG51bWJlciB9ID0gZGVmYXVsdENvbHVtbk1hcDtcclxuICBASW5wdXQoKSBuelNpemU6IE56RGVzY3JpcHRpb25zU2l6ZSA9ICdkZWZhdWx0JztcclxuICBASW5wdXQoKSBuelRpdGxlOiBzdHJpbmcgfCBUZW1wbGF0ZVJlZjx2b2lkPiA9ICcnO1xyXG5cclxuICBpdGVtTWF0cml4OiBOekRlc2NyaXB0aW9uc0l0ZW1SZW5kZXJQcm9wc1tdW10gPSBbXTtcclxuXHJcbiAgcmVhbENvbHVtbiA9IDM7XHJcblxyXG4gIHByaXZhdGUgZGVzdHJveSQgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xyXG4gIHByaXZhdGUgcmVzaXplJCA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmLFxyXG4gICAgcHJpdmF0ZSBuZ1pvbmU6IE5nWm9uZSxcclxuICAgIHByaXZhdGUgbWVkaWFNYXRjaGVyOiBNZWRpYU1hdGNoZXIsXHJcbiAgICBwcml2YXRlIHBsYXRmb3JtOiBQbGF0Zm9ybVxyXG4gICkge31cclxuXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xyXG4gICAgaWYgKGNoYW5nZXMubnpDb2x1bW4pIHtcclxuICAgICAgdGhpcy5yZXNpemUkLm5leHQoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJDb250ZW50SW5pdCgpOiB2b2lkIHtcclxuICAgIG1lcmdlKFxyXG4gICAgICB0aGlzLml0ZW1zLmNoYW5nZXMucGlwZShcclxuICAgICAgICBzdGFydFdpdGgodGhpcy5pdGVtcyksXHJcbiAgICAgICAgdGFrZVVudGlsKHRoaXMuZGVzdHJveSQpXHJcbiAgICAgICksXHJcbiAgICAgIHRoaXMucmVzaXplJFxyXG4gICAgKVxyXG4gICAgICAucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpXHJcbiAgICAgIC5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICAgIHRoaXMucHJlcGFyZU1hdHJpeCgpO1xyXG4gICAgICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICBpZiAodGhpcy5wbGF0Zm9ybS5pc0Jyb3dzZXIpIHtcclxuICAgICAgdGhpcy5uZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT4ge1xyXG4gICAgICAgIGZyb21FdmVudCh3aW5kb3csICdyZXNpemUnKVxyXG4gICAgICAgICAgLnBpcGUoXHJcbiAgICAgICAgICAgIGF1ZGl0VGltZSgxNiksXHJcbiAgICAgICAgICAgIHRha2VVbnRpbCh0aGlzLmRlc3Ryb3kkKVxyXG4gICAgICAgICAgKVxyXG4gICAgICAgICAgLnN1YnNjcmliZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMubmdab25lLnJ1bigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgdGhpcy5yZXNpemUkLm5leHQoKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIHRoaXMuZGVzdHJveSQubmV4dCgpO1xyXG4gICAgdGhpcy5kZXN0cm95JC5jb21wbGV0ZSgpO1xyXG4gICAgdGhpcy5yZXNpemUkLmNvbXBsZXRlKCk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBQcmVwYXJlIHRoZSByZW5kZXIgbWF0cml4IGFjY29yZGluZyB0byBkZXNjcmlwdGlvbiBpdGVtcycgc3BhbnMuXHJcbiAgICovXHJcbiAgcHJpdmF0ZSBwcmVwYXJlTWF0cml4KCk6IHZvaWQge1xyXG4gICAgbGV0IGN1cnJlbnRSb3c6IE56RGVzY3JpcHRpb25zSXRlbVJlbmRlclByb3BzW10gPSBbXTtcclxuICAgIGxldCB3aWR0aCA9IDA7XHJcblxyXG4gICAgY29uc3QgY29sdW1uID0gKHRoaXMucmVhbENvbHVtbiA9IHRoaXMuZ2V0Q29sdW1uKCkpO1xyXG4gICAgY29uc3QgaXRlbXM6IE56RGVzY3JpcHRpb25zSXRlbUNvbXBvbmVudFtdID0gdGhpcy5pdGVtcy50b0FycmF5KCk7XHJcbiAgICBjb25zdCBtYXRyaXg6IE56RGVzY3JpcHRpb25zSXRlbVJlbmRlclByb3BzW11bXSA9IFtdO1xyXG4gICAgY29uc3QgZmx1c2hSb3cgPSAoKSA9PiB7XHJcbiAgICAgIG1hdHJpeC5wdXNoKGN1cnJlbnRSb3cpO1xyXG4gICAgICBjdXJyZW50Um93ID0gW107XHJcbiAgICAgIHdpZHRoID0gMDtcclxuICAgIH07XHJcblxyXG4gICAgaXRlbXMuZm9yRWFjaChpdGVtID0+IHtcclxuICAgICAgY29uc3QgeyBuelRpdGxlOiB0aXRsZSwgY29udGVudCwgbnpTcGFuOiBzcGFuIH0gPSBpdGVtO1xyXG5cclxuICAgICAgY3VycmVudFJvdy5wdXNoKHsgdGl0bGUsIGNvbnRlbnQsIHNwYW4gfSk7XHJcbiAgICAgIHdpZHRoICs9IHNwYW47XHJcblxyXG4gICAgICAvLyBJZiB0aGUgbGFzdCBpdGVtIG1ha2UgdGhlIHJvdydzIGxlbmd0aCBleGNlZWRzIGBuekNvbHVtbmAsIHRoZSBsYXN0XHJcbiAgICAgIC8vIGl0ZW0gc2hvdWxkIHRha2UgYWxsIHRoZSBzcGFjZSBsZWZ0LiBUaGlzIGxvZ2ljIGlzIGltcGxlbWVudGVkIGluIHRoZSB0ZW1wbGF0ZS5cclxuICAgICAgLy8gV2FybiB1c2VyIGFib3V0IHRoYXQuXHJcbiAgICAgIGlmICh3aWR0aCA+PSBjb2x1bW4pIHtcclxuICAgICAgICBpZiAod2lkdGggPiBjb2x1bW4gJiYgaXNEZXZNb2RlKCkpIHtcclxuICAgICAgICAgIGNvbnNvbGUud2FybihgXCJuekNvbHVtblwiIGlzICR7Y29sdW1ufSBidXQgd2UgaGF2ZSByb3cgbGVuZ3RoICR7d2lkdGh9YCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZsdXNoUm93KCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIGlmIChjdXJyZW50Um93Lmxlbmd0aCkge1xyXG4gICAgICBmbHVzaFJvdygpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuaXRlbU1hdHJpeCA9IG1hdHJpeDtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgbWF0Y2hNZWRpYSgpOiBCcmVha3BvaW50IHtcclxuICAgIGxldCBicDogQnJlYWtwb2ludCA9IEJyZWFrcG9pbnQubWQ7XHJcblxyXG4gICAgT2JqZWN0LmtleXMocmVzcG9uc2l2ZU1hcCkubWFwKChicmVha3BvaW50OiBzdHJpbmcpID0+IHtcclxuICAgICAgY29uc3QgY2FzdEJQID0gYnJlYWtwb2ludCBhcyBCcmVha3BvaW50O1xyXG4gICAgICBjb25zdCBtYXRjaEJlbG93ID0gdGhpcy5tZWRpYU1hdGNoZXIubWF0Y2hNZWRpYShyZXNwb25zaXZlTWFwW2Nhc3RCUF0pLm1hdGNoZXM7XHJcbiAgICAgIGlmIChtYXRjaEJlbG93KSB7XHJcbiAgICAgICAgYnAgPSBjYXN0QlA7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiBicDtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZ2V0Q29sdW1uKCk6IG51bWJlciB7XHJcbiAgICBpZiAodHlwZW9mIHRoaXMubnpDb2x1bW4gIT09ICdudW1iZXInKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLm56Q29sdW1uW3RoaXMubWF0Y2hNZWRpYSgpXTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdGhpcy5uekNvbHVtbjtcclxuICB9XHJcbn1cclxuIl19