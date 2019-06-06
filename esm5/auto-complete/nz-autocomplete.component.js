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
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ContentChildren, ElementRef, EventEmitter, Host, Input, NgZone, Optional, Output, QueryList, TemplateRef, ViewChild, ViewChildren, ViewEncapsulation } from '@angular/core';
import { defer, merge, Subscription } from 'rxjs';
import { filter, switchMap, take } from 'rxjs/operators';
import { slideMotion, InputBoolean, NzNoAnimationDirective } from 'ng-zorro-antd/core';
import { NzAutocompleteOptionComponent } from './nz-autocomplete-option.component';
/**
 * @record
 */
export function AutocompleteDataSourceItem() { }
if (false) {
    /** @type {?} */
    AutocompleteDataSourceItem.prototype.value;
    /** @type {?} */
    AutocompleteDataSourceItem.prototype.label;
}
var NzAutocompleteComponent = /** @class */ (function () {
    function NzAutocompleteComponent(changeDetectorRef, ngZone, noAnimation) {
        var _this = this;
        this.changeDetectorRef = changeDetectorRef;
        this.ngZone = ngZone;
        this.noAnimation = noAnimation;
        this.nzOverlayClassName = '';
        this.nzOverlayStyle = {};
        this.nzDefaultActiveFirstOption = true;
        this.nzBackfill = false;
        this.selectionChange = new EventEmitter();
        this.showPanel = false;
        this.isOpen = false;
        this.dropDownPosition = 'bottom';
        this.activeItemIndex = -1;
        this.selectionChangeSubscription = Subscription.EMPTY;
        this.dataSourceChangeSubscription = Subscription.EMPTY;
        /**
         * Options changes listener
         */
        this.optionSelectionChanges = defer((/**
         * @return {?}
         */
        function () {
            if (_this.options) {
                return merge.apply(void 0, tslib_1.__spread(_this.options.map((/**
                 * @param {?} option
                 * @return {?}
                 */
                function (option) { return option.selectionChange; }))));
            }
            return _this.ngZone.onStable.asObservable().pipe(take(1), switchMap((/**
             * @return {?}
             */
            function () { return _this.optionSelectionChanges; })));
        }));
    }
    Object.defineProperty(NzAutocompleteComponent.prototype, "options", {
        /**
         * Options accessor, its source may be content or dataSource
         */
        get: /**
         * Options accessor, its source may be content or dataSource
         * @return {?}
         */
        function () {
            // first dataSource
            if (this.nzDataSource) {
                return this.fromDataSourceOptions;
            }
            else {
                return this.fromContentOptions;
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    NzAutocompleteComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        this.optionsInit();
    };
    /**
     * @return {?}
     */
    NzAutocompleteComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.dataSourceChangeSubscription.unsubscribe();
        this.selectionChangeSubscription.unsubscribe();
    };
    /**
     * @return {?}
     */
    NzAutocompleteComponent.prototype.setVisibility = /**
     * @return {?}
     */
    function () {
        this.showPanel = !!this.options.length;
        this.changeDetectorRef.markForCheck();
    };
    /**
     * @param {?} index
     * @return {?}
     */
    NzAutocompleteComponent.prototype.setActiveItem = /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
        /** @type {?} */
        var activeItem = this.options.toArray()[index];
        if (activeItem && !activeItem.active) {
            this.activeItem = activeItem;
            this.activeItemIndex = index;
            this.clearSelectedOptions(this.activeItem);
            this.activeItem.setActiveStyles();
            this.changeDetectorRef.markForCheck();
        }
    };
    /**
     * @return {?}
     */
    NzAutocompleteComponent.prototype.setNextItemActive = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var nextIndex = this.activeItemIndex + 1 <= this.options.length - 1 ? this.activeItemIndex + 1 : 0;
        this.setActiveItem(nextIndex);
    };
    /**
     * @return {?}
     */
    NzAutocompleteComponent.prototype.setPreviousItemActive = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var previousIndex = this.activeItemIndex - 1 < 0 ? this.options.length - 1 : this.activeItemIndex - 1;
        this.setActiveItem(previousIndex);
    };
    /**
     * @param {?=} option
     * @return {?}
     */
    NzAutocompleteComponent.prototype.getOptionIndex = /**
     * @param {?=} option
     * @return {?}
     */
    function (option) {
        return (/** @type {?} */ (this.options.reduce((/**
         * @param {?} result
         * @param {?} current
         * @param {?} index
         * @return {?}
         */
        function (result, current, index) {
            return result === -1 ? (option === current ? index : -1) : result;
        }), -1)));
    };
    /**
     * @private
     * @return {?}
     */
    NzAutocompleteComponent.prototype.optionsInit = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        this.setVisibility();
        this.subscribeOptionChanges();
        /** @type {?} */
        var changes = this.nzDataSource ? this.fromDataSourceOptions.changes : this.fromContentOptions.changes;
        // async
        this.dataSourceChangeSubscription = changes.subscribe((/**
         * @param {?} e
         * @return {?}
         */
        function (e) {
            if (!e.dirty && _this.isOpen) {
                setTimeout((/**
                 * @return {?}
                 */
                function () { return _this.setVisibility(); }));
            }
            _this.subscribeOptionChanges();
        }));
    };
    /**
     * Clear the status of options
     */
    /**
     * Clear the status of options
     * @private
     * @param {?=} skip
     * @param {?=} deselect
     * @return {?}
     */
    NzAutocompleteComponent.prototype.clearSelectedOptions = /**
     * Clear the status of options
     * @private
     * @param {?=} skip
     * @param {?=} deselect
     * @return {?}
     */
    function (skip, deselect) {
        if (deselect === void 0) { deselect = false; }
        this.options.forEach((/**
         * @param {?} option
         * @return {?}
         */
        function (option) {
            if (option !== skip) {
                if (deselect) {
                    option.deselect();
                }
                option.setInactiveStyles();
            }
        }));
    };
    /**
     * @private
     * @return {?}
     */
    NzAutocompleteComponent.prototype.subscribeOptionChanges = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        this.selectionChangeSubscription.unsubscribe();
        this.selectionChangeSubscription = this.optionSelectionChanges
            .pipe(filter((/**
         * @param {?} event
         * @return {?}
         */
        function (event) { return event.isUserInput; })))
            .subscribe((/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            event.source.select();
            event.source.setActiveStyles();
            _this.activeItem = event.source;
            _this.activeItemIndex = _this.getOptionIndex(_this.activeItem);
            _this.clearSelectedOptions(event.source, true);
            _this.selectionChange.emit(event.source);
        }));
    };
    NzAutocompleteComponent.decorators = [
        { type: Component, args: [{
                    selector: 'nz-autocomplete',
                    exportAs: 'nzAutocomplete',
                    preserveWhitespaces: false,
                    changeDetection: ChangeDetectionStrategy.OnPush,
                    encapsulation: ViewEncapsulation.None,
                    template: "<ng-template>\r\n  <div class=\"ant-select-dropdown ant-select-dropdown--single ant-select-dropdown-placement-bottomLeft\"\r\n    #panel\r\n    [nzNoAnimation]=\"noAnimation?.nzNoAnimation\"\r\n    [@slideMotion]=\"dropDownPosition\"\r\n    [class.ant-select-dropdown-hidden]=\"!showPanel\" [ngClass]=\"nzOverlayClassName\" [ngStyle]=\"nzOverlayStyle\">\r\n    <div style=\"overflow: auto;\">\r\n      <ul class=\"ant-select-dropdown-menu  ant-select-dropdown-menu-root ant-select-dropdown-menu-vertical\"\r\n        role=\"menu\"\r\n        aria-activedescendant>\r\n        <ng-template *ngTemplateOutlet=\"nzDataSource ? optionsTemplate : contentTemplate\"></ng-template>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n  <ng-template #contentTemplate>\r\n    <ng-content></ng-content>\r\n  </ng-template>\r\n  <ng-template #optionsTemplate>\r\n    <nz-auto-option *ngFor=\"let option of nzDataSource\" [nzValue]=\"option\">{{option}}</nz-auto-option>\r\n  </ng-template>\r\n</ng-template>",
                    animations: [slideMotion],
                    styles: ["\n      .ant-select-dropdown {\n        top: 100%;\n        left: 0;\n        position: relative;\n        width: 100%;\n        margin-top: 4px;\n        margin-bottom: 4px;\n      }\n    "]
                }] }
    ];
    /** @nocollapse */
    NzAutocompleteComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef },
        { type: NgZone },
        { type: NzNoAnimationDirective, decorators: [{ type: Host }, { type: Optional }] }
    ]; };
    NzAutocompleteComponent.propDecorators = {
        nzWidth: [{ type: Input }],
        nzOverlayClassName: [{ type: Input }],
        nzOverlayStyle: [{ type: Input }],
        nzDefaultActiveFirstOption: [{ type: Input }],
        nzBackfill: [{ type: Input }],
        nzDataSource: [{ type: Input }],
        selectionChange: [{ type: Output }],
        fromContentOptions: [{ type: ContentChildren, args: [NzAutocompleteOptionComponent, { descendants: true },] }],
        fromDataSourceOptions: [{ type: ViewChildren, args: [NzAutocompleteOptionComponent,] }],
        template: [{ type: ViewChild, args: [TemplateRef,] }],
        panel: [{ type: ViewChild, args: ['panel',] }],
        content: [{ type: ViewChild, args: ['content',] }]
    };
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], NzAutocompleteComponent.prototype, "nzDefaultActiveFirstOption", void 0);
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Object)
    ], NzAutocompleteComponent.prototype, "nzBackfill", void 0);
    return NzAutocompleteComponent;
}());
export { NzAutocompleteComponent };
if (false) {
    /** @type {?} */
    NzAutocompleteComponent.prototype.nzWidth;
    /** @type {?} */
    NzAutocompleteComponent.prototype.nzOverlayClassName;
    /** @type {?} */
    NzAutocompleteComponent.prototype.nzOverlayStyle;
    /** @type {?} */
    NzAutocompleteComponent.prototype.nzDefaultActiveFirstOption;
    /** @type {?} */
    NzAutocompleteComponent.prototype.nzBackfill;
    /** @type {?} */
    NzAutocompleteComponent.prototype.nzDataSource;
    /** @type {?} */
    NzAutocompleteComponent.prototype.selectionChange;
    /** @type {?} */
    NzAutocompleteComponent.prototype.showPanel;
    /** @type {?} */
    NzAutocompleteComponent.prototype.isOpen;
    /** @type {?} */
    NzAutocompleteComponent.prototype.activeItem;
    /** @type {?} */
    NzAutocompleteComponent.prototype.dropDownPosition;
    /**
     * Provided by content
     * @type {?}
     */
    NzAutocompleteComponent.prototype.fromContentOptions;
    /**
     * Provided by dataSource
     * @type {?}
     */
    NzAutocompleteComponent.prototype.fromDataSourceOptions;
    /**
     * cdk-overlay
     * @type {?}
     */
    NzAutocompleteComponent.prototype.template;
    /** @type {?} */
    NzAutocompleteComponent.prototype.panel;
    /** @type {?} */
    NzAutocompleteComponent.prototype.content;
    /**
     * @type {?}
     * @private
     */
    NzAutocompleteComponent.prototype.activeItemIndex;
    /**
     * @type {?}
     * @private
     */
    NzAutocompleteComponent.prototype.selectionChangeSubscription;
    /**
     * @type {?}
     * @private
     */
    NzAutocompleteComponent.prototype.dataSourceChangeSubscription;
    /**
     * Options changes listener
     * @type {?}
     */
    NzAutocompleteComponent.prototype.optionSelectionChanges;
    /**
     * @type {?}
     * @private
     */
    NzAutocompleteComponent.prototype.changeDetectorRef;
    /**
     * @type {?}
     * @private
     */
    NzAutocompleteComponent.prototype.ngZone;
    /** @type {?} */
    NzAutocompleteComponent.prototype.noAnimation;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotYXV0b2NvbXBsZXRlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvYXV0by1jb21wbGV0ZS8iLCJzb3VyY2VzIjpbIm56LWF1dG9jb21wbGV0ZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBUUEsT0FBTyxFQUVMLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsU0FBUyxFQUNULGVBQWUsRUFDZixVQUFVLEVBQ1YsWUFBWSxFQUNaLElBQUksRUFDSixLQUFLLEVBQ0wsTUFBTSxFQUVOLFFBQVEsRUFDUixNQUFNLEVBQ04sU0FBUyxFQUNULFdBQVcsRUFDWCxTQUFTLEVBQ1QsWUFBWSxFQUNaLGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBYyxZQUFZLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDOUQsT0FBTyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFekQsT0FBTyxFQUFFLFdBQVcsRUFBRSxZQUFZLEVBQXNCLHNCQUFzQixFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFM0csT0FBTyxFQUFFLDZCQUE2QixFQUEyQixNQUFNLG9DQUFvQyxDQUFDOzs7O0FBRTVHLGdEQUdDOzs7SUFGQywyQ0FBYzs7SUFDZCwyQ0FBYzs7QUFLaEI7SUEyRUUsaUNBQ1UsaUJBQW9DLEVBQ3BDLE1BQWMsRUFDSyxXQUFvQztRQUhqRSxpQkFJSTtRQUhNLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBbUI7UUFDcEMsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNLLGdCQUFXLEdBQVgsV0FBVyxDQUF5QjtRQXZEeEQsdUJBQWtCLEdBQUcsRUFBRSxDQUFDO1FBQ3hCLG1CQUFjLEdBQThCLEVBQUUsQ0FBQztRQUMvQiwrQkFBMEIsR0FBRyxJQUFJLENBQUM7UUFDbEMsZUFBVSxHQUFHLEtB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eURBUUc7Ozs7O0lBR0Qsb0RBQTRDOzs7OztJQUM1Qyx5Q0FBc0I7O0lBQ3RCLDhDQUErRCIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5cclxuaW1wb3J0IHtcclxuICBBZnRlclZpZXdJbml0LFxyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIENoYW5nZURldGVjdG9yUmVmLFxyXG4gIENvbXBvbmVudCxcclxuICBDb250ZW50Q2hpbGRyZW4sXHJcbiAgRWxlbWVudFJlZixcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgSG9zdCxcclxuICBJbnB1dCxcclxuICBOZ1pvbmUsXHJcbiAgT25EZXN0cm95LFxyXG4gIE9wdGlvbmFsLFxyXG4gIE91dHB1dCxcclxuICBRdWVyeUxpc3QsXHJcbiAgVGVtcGxhdGVSZWYsXHJcbiAgVmlld0NoaWxkLFxyXG4gIFZpZXdDaGlsZHJlbixcclxuICBWaWV3RW5jYXBzdWxhdGlvblxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBkZWZlciwgbWVyZ2UsIE9ic2VydmFibGUsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBmaWx0ZXIsIHN3aXRjaE1hcCwgdGFrZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuXHJcbmltcG9ydCB7IHNsaWRlTW90aW9uLCBJbnB1dEJvb2xlYW4sIE56RHJvcERvd25Qb3NpdGlvbiwgTnpOb0FuaW1hdGlvbkRpcmVjdGl2ZSB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBOekF1dG9jb21wbGV0ZU9wdGlvbkNvbXBvbmVudCwgTnpPcHRpb25TZWxlY3Rpb25DaGFuZ2UgfSBmcm9tICcuL256LWF1dG9jb21wbGV0ZS1vcHRpb24uY29tcG9uZW50JztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQXV0b2NvbXBsZXRlRGF0YVNvdXJjZUl0ZW0ge1xyXG4gIHZhbHVlOiBzdHJpbmc7XHJcbiAgbGFiZWw6IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IHR5cGUgQXV0b2NvbXBsZXRlRGF0YVNvdXJjZSA9IEF1dG9jb21wbGV0ZURhdGFTb3VyY2VJdGVtW10gfCBzdHJpbmdbXSB8IG51bWJlcltdO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICduei1hdXRvY29tcGxldGUnLFxyXG4gIGV4cG9ydEFzOiAnbnpBdXRvY29tcGxldGUnLFxyXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL256LWF1dG9jb21wbGV0ZS5jb21wb25lbnQuaHRtbCcsXHJcbiAgYW5pbWF0aW9uczogW3NsaWRlTW90aW9uXSxcclxuICBzdHlsZXM6IFtcclxuICAgIGBcclxuICAgICAgLmFudC1zZWxlY3QtZHJvcGRvd24ge1xyXG4gICAgICAgIHRvcDogMTAwJTtcclxuICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBtYXJnaW4tdG9wOiA0cHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNHB4O1xyXG4gICAgICB9XHJcbiAgICBgXHJcbiAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTnpBdXRvY29tcGxldGVDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3kge1xyXG4gIEBJbnB1dCgpIG56V2lkdGg6IG51bWJlcjtcclxuICBASW5wdXQoKSBuek92ZXJsYXlDbGFzc05hbWUgPSAnJztcclxuICBASW5wdXQoKSBuek92ZXJsYXlTdHlsZTogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSA9IHt9O1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuekRlZmF1bHRBY3RpdmVGaXJzdE9wdGlvbiA9IHRydWU7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56QmFja2ZpbGwgPSBmYWxzZTtcclxuICBASW5wdXQoKSBuekRhdGFTb3VyY2U6IEF1dG9jb21wbGV0ZURhdGFTb3VyY2U7XHJcbiAgQE91dHB1dCgpIHJlYWRvbmx5IHNlbGVjdGlvbkNoYW5nZTogRXZlbnRFbWl0dGVyPE56QXV0b2NvbXBsZXRlT3B0aW9uQ29tcG9uZW50PiA9IG5ldyBFdmVudEVtaXR0ZXI8XHJcbiAgICBOekF1dG9jb21wbGV0ZU9wdGlvbkNvbXBvbmVudFxyXG4gID4oKTtcclxuXHJcbiAgc2hvd1BhbmVsOiBib29sZWFuID0gZmFsc2U7XHJcbiAgaXNPcGVuOiBib29sZWFuID0gZmFsc2U7XHJcbiAgYWN0aXZlSXRlbTogTnpBdXRvY29tcGxldGVPcHRpb25Db21wb25lbnQ7XHJcbiAgZHJvcERvd25Qb3NpdGlvbjogTnpEcm9wRG93blBvc2l0aW9uID0gJ2JvdHRvbSc7XHJcblxyXG4gIC8qKlxyXG4gICAqIE9wdGlvbnMgYWNjZXNzb3IsIGl0cyBzb3VyY2UgbWF5IGJlIGNvbnRlbnQgb3IgZGF0YVNvdXJjZVxyXG4gICAqL1xyXG4gIGdldCBvcHRpb25zKCk6IFF1ZXJ5TGlzdDxOekF1dG9jb21wbGV0ZU9wdGlvbkNvbXBvbmVudD4ge1xyXG4gICAgLy8gZmlyc3QgZGF0YVNvdXJjZVxyXG4gICAgaWYgKHRoaXMubnpEYXRhU291cmNlKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmZyb21EYXRhU291cmNlT3B0aW9ucztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmZyb21Db250ZW50T3B0aW9ucztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKiBQcm92aWRlZCBieSBjb250ZW50ICovXHJcbiAgQENvbnRlbnRDaGlsZHJlbihOekF1dG9jb21wbGV0ZU9wdGlvbkNvbXBvbmVudCwgeyBkZXNjZW5kYW50czogdHJ1ZSB9KSBmcm9tQ29udGVudE9wdGlvbnM6IFF1ZXJ5TGlzdDxcclxuICAgIE56QXV0b2NvbXBsZXRlT3B0aW9uQ29tcG9uZW50XHJcbiAgPjtcclxuICAvKiogUHJvdmlkZWQgYnkgZGF0YVNvdXJjZSAqL1xyXG4gIEBWaWV3Q2hpbGRyZW4oTnpBdXRvY29tcGxldGVPcHRpb25Db21wb25lbnQpIGZyb21EYXRhU291cmNlT3B0aW9uczogUXVlcnlMaXN0PE56QXV0b2NvbXBsZXRlT3B0aW9uQ29tcG9uZW50PjtcclxuXHJcbiAgLyoqIGNkay1vdmVybGF5ICovXHJcbiAgQFZpZXdDaGlsZChUZW1wbGF0ZVJlZikgdGVtcGxhdGU6IFRlbXBsYXRlUmVmPHt9PjtcclxuICBAVmlld0NoaWxkKCdwYW5lbCcpIHBhbmVsOiBFbGVtZW50UmVmO1xyXG4gIEBWaWV3Q2hpbGQoJ2NvbnRlbnQnKSBjb250ZW50OiBFbGVtZW50UmVmO1xyXG5cclxuICBwcml2YXRlIGFjdGl2ZUl0ZW1JbmRleDogbnVtYmVyID0gLTE7XHJcbiAgcHJpdmF0ZSBzZWxlY3Rpb25DaGFuZ2VTdWJzY3JpcHRpb24gPSBTdWJzY3JpcHRpb24uRU1QVFk7XHJcbiAgcHJpdmF0ZSBkYXRhU291cmNlQ2hhbmdlU3Vic2NyaXB0aW9uID0gU3Vic2NyaXB0aW9uLkVNUFRZO1xyXG4gIC8qKiBPcHRpb25zIGNoYW5nZXMgbGlzdGVuZXIgKi9cclxuICByZWFkb25seSBvcHRpb25TZWxlY3Rpb25DaGFuZ2VzOiBPYnNlcnZhYmxlPE56T3B0aW9uU2VsZWN0aW9uQ2hhbmdlPiA9IGRlZmVyKCgpID0+IHtcclxuICAgIGlmICh0aGlzLm9wdGlvbnMpIHtcclxuICAgICAgcmV0dXJuIG1lcmdlKC4uLnRoaXMub3B0aW9ucy5tYXAob3B0aW9uID0+IG9wdGlvbi5zZWxlY3Rpb25DaGFuZ2UpKTtcclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzLm5nWm9uZS5vblN0YWJsZS5hc09ic2VydmFibGUoKS5waXBlKFxyXG4gICAgICB0YWtlKDEpLFxyXG4gICAgICBzd2l0Y2hNYXAoKCkgPT4gdGhpcy5vcHRpb25TZWxlY3Rpb25DaGFuZ2VzKVxyXG4gICAgKTtcclxuICB9KTtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIGNoYW5nZURldGVjdG9yUmVmOiBDaGFuZ2VEZXRlY3RvclJlZixcclxuICAgIHByaXZhdGUgbmdab25lOiBOZ1pvbmUsXHJcbiAgICBASG9zdCgpIEBPcHRpb25hbCgpIHB1YmxpYyBub0FuaW1hdGlvbj86IE56Tm9BbmltYXRpb25EaXJlY3RpdmVcclxuICApIHt9XHJcblxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMub3B0aW9uc0luaXQoKTtcclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgdGhpcy5kYXRhU291cmNlQ2hhbmdlU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XHJcbiAgICB0aGlzLnNlbGVjdGlvbkNoYW5nZVN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xyXG4gIH1cclxuXHJcbiAgc2V0VmlzaWJpbGl0eSgpOiB2b2lkIHtcclxuICAgIHRoaXMuc2hvd1BhbmVsID0gISF0aGlzLm9wdGlvbnMubGVuZ3RoO1xyXG4gICAgdGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5tYXJrRm9yQ2hlY2soKTtcclxuICB9XHJcblxyXG4gIHNldEFjdGl2ZUl0ZW0oaW5kZXg6IG51bWJlcik6IHZvaWQge1xyXG4gICAgY29uc3QgYWN0aXZlSXRlbSA9IHRoaXMub3B0aW9ucy50b0FycmF5KClbaW5kZXhdO1xyXG4gICAgaWYgKGFjdGl2ZUl0ZW0gJiYgIWFjdGl2ZUl0ZW0uYWN0aXZlKSB7XHJcbiAgICAgIHRoaXMuYWN0aXZlSXRlbSA9IGFjdGl2ZUl0ZW07XHJcbiAgICAgIHRoaXMuYWN0aXZlSXRlbUluZGV4ID0gaW5kZXg7XHJcbiAgICAgIHRoaXMuY2xlYXJTZWxlY3RlZE9wdGlvbnModGhpcy5hY3RpdmVJdGVtKTtcclxuICAgICAgdGhpcy5hY3RpdmVJdGVtLnNldEFjdGl2ZVN0eWxlcygpO1xyXG4gICAgICB0aGlzLmNoYW5nZURldGVjdG9yUmVmLm1hcmtGb3JDaGVjaygpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc2V0TmV4dEl0ZW1BY3RpdmUoKTogdm9pZCB7XHJcbiAgICBjb25zdCBuZXh0SW5kZXggPSB0aGlzLmFjdGl2ZUl0ZW1JbmRleCArIDEgPD0gdGhpcy5vcHRpb25zLmxlbmd0aCAtIDEgPyB0aGlzLmFjdGl2ZUl0ZW1JbmRleCArIDEgOiAwO1xyXG4gICAgdGhpcy5zZXRBY3RpdmVJdGVtKG5leHRJbmRleCk7XHJcbiAgfVxyXG5cclxuICBzZXRQcmV2aW91c0l0ZW1BY3RpdmUoKTogdm9pZCB7XHJcbiAgICBjb25zdCBwcmV2aW91c0luZGV4ID0gdGhpcy5hY3RpdmVJdGVtSW5kZXggLSAxIDwgMCA/IHRoaXMub3B0aW9ucy5sZW5ndGggLSAxIDogdGhpcy5hY3RpdmVJdGVtSW5kZXggLSAxO1xyXG4gICAgdGhpcy5zZXRBY3RpdmVJdGVtKHByZXZpb3VzSW5kZXgpO1xyXG4gIH1cclxuXHJcbiAgZ2V0T3B0aW9uSW5kZXgob3B0aW9uPzogTnpBdXRvY29tcGxldGVPcHRpb25Db21wb25lbnQpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMub3B0aW9ucy5yZWR1Y2UoKHJlc3VsdDogbnVtYmVyLCBjdXJyZW50OiBOekF1dG9jb21wbGV0ZU9wdGlvbkNvbXBvbmVudCwgaW5kZXg6IG51bWJlcikgPT4ge1xyXG4gICAgICByZXR1cm4gcmVzdWx0ID09PSAtMSA/IChvcHRpb24gPT09IGN1cnJlbnQgPyBpbmRleCA6IC0xKSA6IHJlc3VsdDtcclxuICAgIH0sIC0xKSE7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIG9wdGlvbnNJbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5zZXRWaXNpYmlsaXR5KCk7XHJcbiAgICB0aGlzLnN1YnNjcmliZU9wdGlvbkNoYW5nZXMoKTtcclxuICAgIGNvbnN0IGNoYW5nZXMgPSB0aGlzLm56RGF0YVNvdXJjZSA/IHRoaXMuZnJvbURhdGFTb3VyY2VPcHRpb25zLmNoYW5nZXMgOiB0aGlzLmZyb21Db250ZW50T3B0aW9ucy5jaGFuZ2VzO1xyXG5cclxuICAgIC8vIGFzeW5jXHJcbiAgICB0aGlzLmRhdGFTb3VyY2VDaGFuZ2VTdWJzY3JpcHRpb24gPSBjaGFuZ2VzLnN1YnNjcmliZShlID0+IHtcclxuICAgICAgaWYgKCFlLmRpcnR5ICYmIHRoaXMuaXNPcGVuKSB7XHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLnNldFZpc2liaWxpdHkoKSk7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5zdWJzY3JpYmVPcHRpb25DaGFuZ2VzKCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENsZWFyIHRoZSBzdGF0dXMgb2Ygb3B0aW9uc1xyXG4gICAqL1xyXG4gIHByaXZhdGUgY2xlYXJTZWxlY3RlZE9wdGlvbnMoc2tpcD86IE56QXV0b2NvbXBsZXRlT3B0aW9uQ29tcG9uZW50LCBkZXNlbGVjdDogYm9vbGVhbiA9IGZhbHNlKTogdm9pZCB7XHJcbiAgICB0aGlzLm9wdGlvbnMuZm9yRWFjaChvcHRpb24gPT4ge1xyXG4gICAgICBpZiAob3B0aW9uICE9PSBza2lwKSB7XHJcbiAgICAgICAgaWYgKGRlc2VsZWN0KSB7XHJcbiAgICAgICAgICBvcHRpb24uZGVzZWxlY3QoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgb3B0aW9uLnNldEluYWN0aXZlU3R5bGVzKCk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzdWJzY3JpYmVPcHRpb25DaGFuZ2VzKCk6IHZvaWQge1xyXG4gICAgdGhpcy5zZWxlY3Rpb25DaGFuZ2VTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcclxuICAgIHRoaXMuc2VsZWN0aW9uQ2hhbmdlU3Vic2NyaXB0aW9uID0gdGhpcy5vcHRpb25TZWxlY3Rpb25DaGFuZ2VzXHJcbiAgICAgIC5waXBlKGZpbHRlcigoZXZlbnQ6IE56T3B0aW9uU2VsZWN0aW9uQ2hhbmdlKSA9PiBldmVudC5pc1VzZXJJbnB1dCkpXHJcbiAgICAgIC5zdWJzY3JpYmUoKGV2ZW50OiBOek9wdGlvblNlbGVjdGlvbkNoYW5nZSkgPT4ge1xyXG4gICAgICAgIGV2ZW50LnNvdXJjZS5zZWxlY3QoKTtcclxuICAgICAgICBldmVudC5zb3VyY2Uuc2V0QWN0aXZlU3R5bGVzKCk7XHJcbiAgICAgICAgdGhpcy5hY3RpdmVJdGVtID0gZXZlbnQuc291cmNlO1xyXG4gICAgICAgIHRoaXMuYWN0aXZlSXRlbUluZGV4ID0gdGhpcy5nZXRPcHRpb25JbmRleCh0aGlzLmFjdGl2ZUl0ZW0pO1xyXG4gICAgICAgIHRoaXMuY2xlYXJTZWxlY3RlZE9wdGlvbnMoZXZlbnQuc291cmNlLCB0cnVlKTtcclxuICAgICAgICB0aGlzLnNlbGVjdGlvbkNoYW5nZS5lbWl0KGV2ZW50LnNvdXJjZSk7XHJcbiAgICAgIH0pO1xyXG4gIH1cclxufVxyXG4iXX0=