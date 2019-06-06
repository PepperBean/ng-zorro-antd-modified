import { CommonModule } from '@angular/common';
import { __decorate, __metadata } from 'tslib';
import { MediaMatcher } from '@angular/cdk/layout';
import { Platform } from '@angular/cdk/platform';
import { ChangeDetectionStrategy, Component, Input, TemplateRef, ViewChild, ViewEncapsulation, isDevMode, ChangeDetectorRef, ContentChildren, NgZone, NgModule } from '@angular/core';
import { fromEvent, merge, Subject } from 'rxjs';
import { auditTime, startWith, takeUntil } from 'rxjs/operators';
import { InputNumber, responsiveMap, Breakpoint, InputBoolean, NzAddOnModule } from 'ng-zorro-antd/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NzDescriptionsItemComponent {
    constructor() {
        this.nzSpan = 1;
        this.nzTitle = '';
    }
}
NzDescriptionsItemComponent.decorators = [
    { type: Component, args: [{
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                selector: 'nz-descriptions-item',
                template: "<!-- Use a template to wrap contents so contents wouldn't be displayed. -->\r\n<ng-template>\r\n  <ng-content></ng-content>\r\n</ng-template>\r\n",
                exportAs: 'nzDescriptionsItem',
                preserveWhitespaces: false
            }] }
];
NzDescriptionsItemComponent.propDecorators = {
    content: [{ type: ViewChild, args: [TemplateRef,] }],
    nzSpan: [{ type: Input }],
    nzTitle: [{ type: Input }]
};
__decorate([
    InputNumber(),
    __metadata("design:type", Object)
], NzDescriptionsItemComponent.prototype, "nzSpan", void 0);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const defaultColumnMap = {
    xxl: 3,
    xl: 3,
    lg: 3,
    md: 3,
    sm: 2,
    xs: 1
};
class NzDescriptionsComponent {
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
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], NzDescriptionsComponent.prototype, "nzBordered", void 0);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NzDescriptionsModule {
}
NzDescriptionsModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, NzAddOnModule],
                declarations: [NzDescriptionsComponent, NzDescriptionsItemComponent],
                exports: [NzDescriptionsComponent, NzDescriptionsItemComponent]
            },] }
];

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

export { NzDescriptionsModule, NzDescriptionsComponent, NzDescriptionsItemComponent };

//# sourceMappingURL=ng-zorro-antd-descriptions.js.map