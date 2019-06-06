import { __decorate, __metadata } from 'tslib';
import { BehaviorSubject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { InputBoolean, InputNumber } from 'ng-zorro-antd/core';
import { ObserversModule } from '@angular/cdk/observers';
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, ViewEncapsulation, NgModule } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NzSpinComponent {
    /**
     * @param {?} cdr
     */
    constructor(cdr) {
        this.cdr = cdr;
        this.nzSize = 'default';
        this.nzDelay = 0;
        this.nzSimple = false;
        this.nzSpinning = true;
        this.loading = true;
        this.spinning$ = new BehaviorSubject(this.nzSpinning);
        this.loading$ = this.spinning$.pipe(debounceTime(this.nzDelay));
    }
    /**
     * @return {?}
     */
    subscribeLoading() {
        this.unsubscribeLoading();
        this.loading_ = this.loading$.subscribe((/**
         * @param {?} data
         * @return {?}
         */
        data => {
            this.loading = data;
            this.cdr.markForCheck();
        }));
    }
    /**
     * @return {?}
     */
    unsubscribeLoading() {
        if (this.loading_) {
            this.loading_.unsubscribe();
            this.loading_ = null;
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.subscribeLoading();
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes.nzSpinning) {
            if (changes.nzSpinning.isFirstChange()) {
                this.loading = this.nzSpinning;
            }
            this.spinning$.next(this.nzSpinning);
        }
        if (changes.nzDelay) {
            this.loading$ = this.spinning$.pipe(debounceTime(this.nzDelay));
            this.subscribeLoading();
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.unsubscribeLoading();
    }
}
NzSpinComponent.decorators = [
    { type: Component, args: [{
                selector: 'nz-spin',
                exportAs: 'nzSpin',
                preserveWhitespaces: false,
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: "<ng-template #defaultIndicatorTemplate>\r\n  <span class=\"ant-spin-dot\" [class.ant-spin-dot-spin]=\"loading\">\r\n    <i class=\"ant-spin-dot-item\"></i><i class=\"ant-spin-dot-item\"></i><i class=\"ant-spin-dot-item\"></i><i class=\"ant-spin-dot-item\"></i>\r\n  </span>\r\n</ng-template>\r\n<div *ngIf=\"loading\">\r\n  <div class=\"ant-spin\"\r\n    [class.ant-spin-spinning]=\"loading\"\r\n    [class.ant-spin-lg]=\"nzSize === 'large'\"\r\n    [class.ant-spin-sm]=\"nzSize === 'small'\"\r\n    [class.ant-spin-show-text]=\"nzTip\">\r\n    <ng-template [ngTemplateOutlet]=\"nzIndicator || defaultIndicatorTemplate\"></ng-template>\r\n    <div class=\"ant-spin-text\" *ngIf=\"nzTip\">{{ nzTip }}</div>\r\n  </div>\r\n</div>\r\n<div *ngIf=\"!nzSimple\"\r\n  class=\"ant-spin-container\"\r\n  [class.ant-spin-blur]=\"loading\">\r\n  <ng-content></ng-content>\r\n</div>\r\n",
                host: {
                    '[class.ant-spin-nested-loading]': '!nzSimple'
                },
                styles: [`
      nz-spin {
        display: block;
      }
    `]
            }] }
];
/** @nocollapse */
NzSpinComponent.ctorParameters = () => [
    { type: ChangeDetectorRef }
];
NzSpinComponent.propDecorators = {
    nzIndicator: [{ type: Input }],
    nzSize: [{ type: Input }],
    nzTip: [{ type: Input }],
    nzDelay: [{ type: Input }],
    nzSimple: [{ type: Input }],
    nzSpinning: [{ type: Input }]
};
__decorate([
    InputNumber(),
    __metadata("design:type", Object)
], NzSpinComponent.prototype, "nzDelay", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], NzSpinComponent.prototype, "nzSimple", void 0);
__decorate([
    InputBoolean(),
    __metadata("design:type", Object)
], NzSpinComponent.prototype, "nzSpinning", void 0);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NzSpinModule {
}
NzSpinModule.decorators = [
    { type: NgModule, args: [{
                exports: [NzSpinComponent],
                declarations: [NzSpinComponent],
                imports: [CommonModule, ObserversModule]
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

export { NzSpinComponent, NzSpinModule };

//# sourceMappingURL=ng-zorro-antd-spin.js.map