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
import { ChangeDetectorRef, Component, Input } from '@angular/core';
import { valueFunctionProp, NzNoAnimationDirective } from 'ng-zorro-antd/core';
import { DateHelperService, NzI18nService } from 'ng-zorro-antd/i18n';
import { AbstractPickerComponent } from './abstract-picker.component';
import { CandyDate } from './lib/candy-date/candy-date';
/**
 * The base picker for header panels, current support: Year/Month
 */
export class HeaderPickerComponent extends AbstractPickerComponent {
    /**
     * @param {?} i18n
     * @param {?} cdr
     * @param {?} dateHelper
     * @param {?=} noAnimation
     */
    constructor(i18n, cdr, dateHelper, noAnimation) {
        super(i18n, cdr, dateHelper, noAnimation);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        super.ngOnInit();
        this.panelMode = this.endPanelMode;
        /** @type {?} */
        const allHeaderPanels = ['decade', 'year', 'month'];
        this.supportPanels = allHeaderPanels.slice(0, allHeaderPanels.indexOf(this.endPanelMode) + 1);
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        super.ngOnChanges(changes);
        if (changes.nzRenderExtraFooter) {
            this.extraFooter = valueFunctionProp(this.nzRenderExtraFooter);
        }
    }
    /**
     * @param {?} mode
     * @return {?}
     */
    onPanelModeChange(mode) {
        if (this.supportPanels.indexOf(mode) > -1) {
            this.panelMode = mode;
        }
        else {
            // Since the default "click year" logic can be "year panel" -> "date panel", we need force to the end panel otherwise
            this.panelMode = this.endPanelMode;
        }
    }
    /**
     * @param {?} mode
     * @param {?} value
     * @return {?}
     */
    onChooseValue(mode, value) {
        if (this.endPanelMode === mode) {
            super.onValueChange(value);
            this.closeOverlay();
        }
    }
    /**
     * @param {?} open
     * @return {?}
     */
    onOpenChange(open) {
        if (!open) {
            this.cleanUp();
        }
        this.nzOnOpenChange.emit(open);
    }
    // Restore some initial props to let open as new in next time
    /**
     * @private
     * @return {?}
     */
    cleanUp() {
        this.panelMode = this.endPanelMode;
    }
}
HeaderPickerComponent.decorators = [
    { type: Component, args: [{
                template: ``
            }] }
];
/** @nocollapse */
HeaderPickerComponent.ctorParameters = () => [
    { type: NzI18nService },
    { type: ChangeDetectorRef },
    { type: DateHelperService },
    { type: NzNoAnimationDirective }
];
HeaderPickerComponent.propDecorators = {
    nzPlaceHolder: [{ type: Input }],
    nzRenderExtraFooter: [{ type: Input }],
    nzDefaultValue: [{ type: Input }],
    nzFormat: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    HeaderPickerComponent.prototype.nzPlaceHolder;
    /** @type {?} */
    HeaderPickerComponent.prototype.nzRenderExtraFooter;
    /** @type {?} */
    HeaderPickerComponent.prototype.nzDefaultValue;
    /** @type {?} */
    HeaderPickerComponent.prototype.nzFormat;
    /** @type {?} */
    HeaderPickerComponent.prototype.endPanelMode;
    /** @type {?} */
    HeaderPickerComponent.prototype.panelMode;
    /** @type {?} */
    HeaderPickerComponent.prototype.extraFooter;
    /**
     * @type {?}
     * @private
     */
    HeaderPickerComponent.prototype.supportPanels;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVhZGVyLXBpY2tlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL2RhdGUtcGlja2VyLyIsInNvdXJjZXMiOlsiaGVhZGVyLXBpY2tlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBaUQsTUFBTSxlQUFlLENBQUM7QUFFbkgsT0FBTyxFQUFFLGlCQUFpQixFQUFnQixzQkFBc0IsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQzdGLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxhQUFhLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUV0RSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUN0RSxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sNkJBQTZCLENBQUM7Ozs7QUFVeEQsTUFBTSxPQUFPLHFCQUFzQixTQUFRLHVCQUF1Qjs7Ozs7OztJQWFoRSxZQUNFLElBQW1CLEVBQ25CLEdBQXNCLEVBQ3RCLFVBQTZCLEVBQzdCLFdBQW9DO1FBRXBDLEtBQUssQ0FBQyxJQUFJLEVBQUUsR0FBRyxFQUFFLFVBQVUsRUFBRSxXQUFXLENBQUMsQ0FBQztJQUM1QyxDQUFDOzs7O0lBRUQsUUFBUTtRQUNOLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUVqQixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUM7O2NBRTdCLGVBQWUsR0FBZ0IsQ0FBQyxRQUFRLEVBQUUsTUFBTSxFQUFFLE9BQU8sQ0FBQztRQUNoRSxJQUFJLENBQUMsYUFBYSxHQUFHLGVBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLGVBQWUsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBQ2hHLENBQUM7Ozs7O0lBRUQsV0FBVyxDQUFDLE9BQXNCO1FBQ2hDLEtBQUssQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUM7UUFFM0IsSUFBSSxPQUFPLENBQUMsbUJBQW1CLEVBQUU7WUFDL0IsSUFBSSxDQUFDLFdBQVcsR0FBRyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsQ0FBQztTQUNoRTtJQUNILENBQUM7Ozs7O0lBRUQsaUJBQWlCLENBQUMsSUFBZTtRQUMvQixJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFO1lBQ3pDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1NBQ3ZCO2FBQU07WUFDTCxxSEFBcUg7WUFDckgsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDO1NBQ3BDO0lBQ0gsQ0FBQzs7Ozs7O0lBRUQsYUFBYSxDQUFDLElBQXdCLEVBQUUsS0FBZ0I7UUFDdEQsSUFBSSxJQUFJLENBQUMsWUFBWSxLQUFLLElBQUksRUFBRTtZQUM5QixLQUFLLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBRTNCLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztTQUNyQjtJQUNILENBQUM7Ozs7O0lBRUQsWUFBWSxDQUFDLElBQWE7UUFDeEIsSUFBSSxDQUFDLElBQUksRUFBRTtZQUNULElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztTQUNoQjtRQUNELElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2pDLENBQUM7Ozs7OztJQUdPLE9BQU87UUFDYixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUM7SUFDckMsQ0FBQzs7O1lBckVGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsRUFBRTthQUNiOzs7O1lBWjJCLGFBQWE7WUFIaEMsaUJBQWlCO1lBR2pCLGlCQUFpQjtZQURnQixzQkFBc0I7Ozs0QkFlN0QsS0FBSztrQ0FFTCxLQUFLOzZCQUNMLEtBQUs7dUJBQ0wsS0FBSzs7OztJQUpOLDhDQUErQjs7SUFFL0Isb0RBQXVFOztJQUN2RSwrQ0FBbUM7O0lBQ25DLHlDQUEwQjs7SUFFMUIsNkNBQWlDOztJQUNqQywwQ0FBcUI7O0lBQ3JCLDRDQUF3Qzs7Ozs7SUFFeEMsOENBQW1DIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcclxuICovXHJcblxyXG5pbXBvcnQgeyBDaGFuZ2VEZXRlY3RvclJlZiwgQ29tcG9uZW50LCBJbnB1dCwgT25DaGFuZ2VzLCBPbkluaXQsIFNpbXBsZUNoYW5nZXMsIFRlbXBsYXRlUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyB2YWx1ZUZ1bmN0aW9uUHJvcCwgRnVuY3Rpb25Qcm9wLCBOek5vQW5pbWF0aW9uRGlyZWN0aXZlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcclxuaW1wb3J0IHsgRGF0ZUhlbHBlclNlcnZpY2UsIE56STE4blNlcnZpY2UgfSBmcm9tICduZy16b3Jyby1hbnRkL2kxOG4nO1xyXG5cclxuaW1wb3J0IHsgQWJzdHJhY3RQaWNrZXJDb21wb25lbnQgfSBmcm9tICcuL2Fic3RyYWN0LXBpY2tlci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBDYW5keURhdGUgfSBmcm9tICcuL2xpYi9jYW5keS1kYXRlL2NhbmR5LWRhdGUnO1xyXG5pbXBvcnQgeyBQYW5lbE1vZGUgfSBmcm9tICcuL3N0YW5kYXJkLXR5cGVzJztcclxuXHJcbi8qKlxyXG4gKiBUaGUgYmFzZSBwaWNrZXIgZm9yIGhlYWRlciBwYW5lbHMsIGN1cnJlbnQgc3VwcG9ydDogWWVhci9Nb250aFxyXG4gKi9cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHRlbXBsYXRlOiBgYFxyXG59KVxyXG5leHBvcnQgY2xhc3MgSGVhZGVyUGlja2VyQ29tcG9uZW50IGV4dGVuZHMgQWJzdHJhY3RQaWNrZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XHJcbiAgQElucHV0KCkgbnpQbGFjZUhvbGRlcjogc3RyaW5nO1xyXG5cclxuICBASW5wdXQoKSBuelJlbmRlckV4dHJhRm9vdGVyOiBGdW5jdGlvblByb3A8VGVtcGxhdGVSZWY8dm9pZD4gfCBzdHJpbmc+O1xyXG4gIEBJbnB1dCgpIG56RGVmYXVsdFZhbHVlOiBDYW5keURhdGU7XHJcbiAgQElucHV0KCkgbnpGb3JtYXQ6IHN0cmluZzsgLy8gW0Nhbm1wbGVtZW50ZWQgYnkgc3ViIGNsYXNzXSBUaGUgb3V0cHV0IGZvcm1hdFxyXG5cclxuICBlbmRQYW5lbE1vZGU6IFN1cHBvcnRIZWFkZXJQYW5lbDsgLy8gW0ltcGxlbWVudGVkIGJ5IHN1YiBjbGFzc10gVGhlIGZpbmFsIHBhbmVsIGZvciBwaWNraW5nIGEgZGF0ZVxyXG4gIHBhbmVsTW9kZTogUGFuZWxNb2RlOyAvLyBDdXJyZW50IHBhbmVsIG1vZGVcclxuICBleHRyYUZvb3RlcjogVGVtcGxhdGVSZWY8dm9pZD4gfCBzdHJpbmc7XHJcblxyXG4gIHByaXZhdGUgc3VwcG9ydFBhbmVsczogUGFuZWxNb2RlW107XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgaTE4bjogTnpJMThuU2VydmljZSxcclxuICAgIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgICBkYXRlSGVscGVyOiBEYXRlSGVscGVyU2VydmljZSxcclxuICAgIG5vQW5pbWF0aW9uPzogTnpOb0FuaW1hdGlvbkRpcmVjdGl2ZVxyXG4gICkge1xyXG4gICAgc3VwZXIoaTE4biwgY2RyLCBkYXRlSGVscGVyLCBub0FuaW1hdGlvbik7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIHN1cGVyLm5nT25Jbml0KCk7XHJcblxyXG4gICAgdGhpcy5wYW5lbE1vZGUgPSB0aGlzLmVuZFBhbmVsTW9kZTtcclxuXHJcbiAgICBjb25zdCBhbGxIZWFkZXJQYW5lbHM6IFBhbmVsTW9kZVtdID0gWydkZWNhZGUnLCAneWVhcicsICdtb250aCddO1xyXG4gICAgdGhpcy5zdXBwb3J0UGFuZWxzID0gYWxsSGVhZGVyUGFuZWxzLnNsaWNlKDAsIGFsbEhlYWRlclBhbmVscy5pbmRleE9mKHRoaXMuZW5kUGFuZWxNb2RlKSArIDEpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xyXG4gICAgc3VwZXIubmdPbkNoYW5nZXMoY2hhbmdlcyk7XHJcblxyXG4gICAgaWYgKGNoYW5nZXMubnpSZW5kZXJFeHRyYUZvb3Rlcikge1xyXG4gICAgICB0aGlzLmV4dHJhRm9vdGVyID0gdmFsdWVGdW5jdGlvblByb3AodGhpcy5uelJlbmRlckV4dHJhRm9vdGVyKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uUGFuZWxNb2RlQ2hhbmdlKG1vZGU6IFBhbmVsTW9kZSk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuc3VwcG9ydFBhbmVscy5pbmRleE9mKG1vZGUpID4gLTEpIHtcclxuICAgICAgdGhpcy5wYW5lbE1vZGUgPSBtb2RlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgLy8gU2luY2UgdGhlIGRlZmF1bHQgXCJjbGljayB5ZWFyXCIgbG9naWMgY2FuIGJlIFwieWVhciBwYW5lbFwiIC0+IFwiZGF0ZSBwYW5lbFwiLCB3ZSBuZWVkIGZvcmNlIHRvIHRoZSBlbmQgcGFuZWwgb3RoZXJ3aXNlXHJcbiAgICAgIHRoaXMucGFuZWxNb2RlID0gdGhpcy5lbmRQYW5lbE1vZGU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBvbkNob29zZVZhbHVlKG1vZGU6IFN1cHBvcnRIZWFkZXJQYW5lbCwgdmFsdWU6IENhbmR5RGF0ZSk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuZW5kUGFuZWxNb2RlID09PSBtb2RlKSB7XHJcbiAgICAgIHN1cGVyLm9uVmFsdWVDaGFuZ2UodmFsdWUpO1xyXG5cclxuICAgICAgdGhpcy5jbG9zZU92ZXJsYXkoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uT3BlbkNoYW5nZShvcGVuOiBib29sZWFuKTogdm9pZCB7XHJcbiAgICBpZiAoIW9wZW4pIHtcclxuICAgICAgdGhpcy5jbGVhblVwKCk7XHJcbiAgICB9XHJcbiAgICB0aGlzLm56T25PcGVuQ2hhbmdlLmVtaXQob3Blbik7XHJcbiAgfVxyXG5cclxuICAvLyBSZXN0b3JlIHNvbWUgaW5pdGlhbCBwcm9wcyB0byBsZXQgb3BlbiBhcyBuZXcgaW4gbmV4dCB0aW1lXHJcbiAgcHJpdmF0ZSBjbGVhblVwKCk6IHZvaWQge1xyXG4gICAgdGhpcy5wYW5lbE1vZGUgPSB0aGlzLmVuZFBhbmVsTW9kZTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCB0eXBlIFN1cHBvcnRIZWFkZXJQYW5lbCA9ICd5ZWFyJyB8ICdtb250aCc7XHJcbiJdfQ==