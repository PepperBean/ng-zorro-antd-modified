import { __decorate, __metadata } from 'tslib';
import { FocusMonitor } from '@angular/cdk/a11y';
import { ENTER, LEFT_ARROW, RIGHT_ARROW, SPACE } from '@angular/cdk/keycodes';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { forwardRef, ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, ViewChild, ViewEncapsulation, NgModule } from '@angular/core';
import { InputBoolean, NzAddOnModule, NzWaveModule } from 'ng-zorro-antd/core';
import { NzIconModule } from 'ng-zorro-antd/icon';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NzSwitchComponent = /** @class */ (function () {
    function NzSwitchComponent(cdr, focusMonitor) {
        this.cdr = cdr;
        this.focusMonitor = focusMonitor;
        this.checked = false;
        this.onChange = (/**
         * @return {?}
         */
        function () { return null; });
        this.onTouched = (/**
         * @return {?}
         */
        function () { return null; });
        this.nzLoading = false;
        this.nzDisabled = false;
        this.nzControl = false;
    }
    /**
     * @param {?} e
     * @return {?}
     */
    NzSwitchComponent.prototype.hostClick = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        e.preventDefault();
        if (!this.nzDisabled && !this.nzLoading && !this.nzControl) {
            this.updateValue(!this.checked);
        }
    };
    /**
     * @param {?} value
     * @return {?}
     */
    NzSwitchComponent.prototype.updateValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        if (this.checked !== value) {
            this.checked = value;
            this.onChange(this.checked);
        }
    };
    /**
     * @param {?} e
     * @return {?}
     */
    NzSwitchComponent.prototype.onKeyDown = /**
     * @param {?} e
     * @return {?}
     */
    function (e) {
        if (!this.nzControl && !this.nzDisabled && !this.nzLoading) {
            if (e.keyCode === LEFT_ARROW) {
                this.updateValue(false);
                e.preventDefault();
            }
            else if (e.keyCode === RIGHT_ARROW) {
                this.updateValue(true);
                e.preventDefault();
            }
            else if (e.keyCode === SPACE || e.keyCode === ENTER) {
                this.updateValue(!this.checked);
                e.preventDefault();
            }
        }
    };
    /**
     * @return {?}
     */
    NzSwitchComponent.prototype.focus = /**
     * @return {?}
     */
    function () {
        this.focusMonitor.focusVia(this.switchElement.nativeElement, 'keyboard');
    };
    /**
     * @return {?}
     */
    NzSwitchComponent.prototype.blur = /**
     * @return {?}
     */
    function () {
        this.switchElement.nativeElement.blur();
    };
    /**
     * @return {?}
     */
    NzSwitchComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.focusMonitor.monitor(this.switchElement.nativeElement, true).subscribe((/**
         * @param {?} focusOrigin
         * @return {?}
         */
        function (focusOrigin) {
            if (!focusOrigin) {
                // When a focused element becomes disabled, the browser *immediately* fires a blur event.
                // Angular does not expect events to be raised during change detection, so any state change
                // (such as a form control's 'ng-touched') will cause a changed-after-checked error.
                // See https://github.com/angular/angular/issues/17793. To work around this, we defer
                // telling the form control it has been touched until the next tick.
                Promise.resolve().then((/**
                 * @return {?}
                 */
                function () { return _this.onTouched(); }));
            }
        }));
    };
    /**
     * @return {?}
     */
    NzSwitchComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.focusMonitor.stopMonitoring(this.switchElement.nativeElement);
    };
    /**
     * @param {?} value
     * @return {?}
     */
    NzSwitchComponent.prototype.writeValue = /**
     * @param {?} value
     * @return {?}
     */
    function (value) {
        this.checked = value;
        this.cdr.markForCheck();
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    NzSwitchComponent.prototype.registerOnChange = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onChange = fn;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    NzSwitchComponent.prototype.registerOnTouched = /**
     * @param {?} fn
     * @return {?}
     */
    function (fn) {
        this.onTouched = fn;
    };
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    NzSwitchComponent.prototype.setDisabledState = /**
     * @param {?} isDisabled
     * @return {?}
     */
    function (isDisabled) {
        this.nzDisabled = isDisabled;
        this.cdr.markForCheck();
    };
    NzSwitchComponent.decorators = [
        { type: Component, args: [{
                    selector: 'nz-switch',
                    exportAs: 'nzSwitch',
                    preserveWhitespaces: false,
                    template: "<button type=\"button\" #switchElement\r\n  nz-wave\r\n  class=\"ant-switch\"\r\n  [disabled]=\"nzDisabled\"\r\n  [class.ant-switch-checked]=\"checked\"\r\n  [class.ant-switch-loading]=\"nzLoading\"\r\n  [class.ant-switch-disabled]=\"nzDisabled\"\r\n  [class.ant-switch-small]=\"nzSize === 'small'\"\r\n  [nzWaveExtraNode]=\"true\"\r\n  (keydown)=\"onKeyDown($event)\">\r\n  <i *ngIf=\"nzLoading\" nz-icon type=\"loading\" class=\"ant-switch-loading-icon\"></i>\r\n  <span class=\"ant-switch-inner\">\r\n    <span>\r\n      <ng-container *ngIf=\"checked\">\r\n        <ng-container *nzStringTemplateOutlet=\"nzCheckedChildren\">{{ nzCheckedChildren }}</ng-container>\r\n      </ng-container>\r\n      <ng-container *ngIf=\"!checked\">\r\n        <ng-container *nzStringTemplateOutlet=\"nzUnCheckedChildren\">{{ nzUnCheckedChildren }}</ng-container>\r\n      </ng-container>\r\n    </span>\r\n  </span>\r\n</button>",
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    providers: [
                        {
                            provide: NG_VALUE_ACCESSOR,
                            useExisting: forwardRef((/**
                             * @return {?}
                             */
                            function () { return NzSwitchComponent; })),
                            multi: true
                        }
                    ],
                    host: {
                        '(click)': 'hostClick($event)'
                    },
                    styles: ["\n      nz-switch {\n        display: inline-block;\n      }\n    "]
                }] }
    ];
    /** @nocollapse */
    NzSwitchComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: FocusMonitor }
    ]; };
    NzSwitchComponent.propDecorators = {
        switchElement: [{ type: ViewChild, args: ['switchElement',] }],
        nzLoading: [{ type: Input }],
        nzDisabled: [{ type: Input }],
        nzControl: [{ type: Input }],
        nzCheckedChildren: [{ type: Input }],
        nzUnCheckedChildren: [{ type: Input }],
        nzSize: [{ type: Input }]
    };
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], NzSwitchComponent.prototype, "nzLoading", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], NzSwitchComponent.prototype, "nzDisabled", void 0);
    __decorate([
        InputBoolean(),
        __metadata("design:type", Object)
    ], NzSwitchComponent.prototype, "nzControl", void 0);
    return NzSwitchComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NzSwitchModule = /** @class */ (function () {
    function NzSwitchModule() {
    }
    NzSwitchModule.decorators = [
        { type: NgModule, args: [{
                    exports: [NzSwitchComponent],
                    declarations: [NzSwitchComponent],
                    imports: [CommonModule, NzWaveModule, NzIconModule, NzAddOnModule]
                },] }
    ];
    return NzSwitchModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { NzSwitchComponent, NzSwitchModule };

//# sourceMappingURL=ng-zorro-antd-switch.js.map