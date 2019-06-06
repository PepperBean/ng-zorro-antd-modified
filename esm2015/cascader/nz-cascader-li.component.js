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
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, Input, Renderer2, ViewEncapsulation } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
export class NzCascaderOptionComponent {
    /**
     * @param {?} sanitizer
     * @param {?} cdr
     * @param {?} elementRef
     * @param {?} renderer
     */
    constructor(sanitizer, cdr, elementRef, renderer) {
        this.sanitizer = sanitizer;
        this.cdr = cdr;
        this.activated = false;
        this.nzLabelProperty = 'label';
        renderer.addClass(elementRef.nativeElement, 'ant-cascader-menu-item');
    }
    /**
     * @return {?}
     */
    getOptionLabel() {
        return this.option ? this.option[this.nzLabelProperty] : '';
    }
    /**
     * @param {?} str
     * @return {?}
     */
    renderHighlightString(str) {
        /** @type {?} */
        const replaceStr = str.replace(new RegExp(this.highlightText, 'g'), `<span class="ant-cascader-menu-item-keyword">${this.highlightText}</span>`);
        return this.sanitizer.bypassSecurityTrustHtml(replaceStr);
    }
    /**
     * @return {?}
     */
    markForCheck() {
        this.cdr.markForCheck();
    }
}
NzCascaderOptionComponent.decorators = [
    { type: Component, args: [{
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                selector: '[nz-cascader-option]',
                exportAs: 'nzCascaderOption',
                template: "<ng-container *ngIf=\"highlightText\">\r\n  <span [innerHTML]=\"renderHighlightString(getOptionLabel())\"></span>\r\n</ng-container>\r\n<ng-container *ngIf=\"!highlightText\">{{ getOptionLabel() }}</ng-container>\r\n<span\r\n  *ngIf=\"!option.isLeaf || option.children && option.children.length || option.loading\"\r\n  class=\"ant-cascader-menu-item-expand-icon\">\r\n  <i nz-icon [type]=\"option.loading ? 'loading' : 'right'\"></i>\r\n</span>\r\n",
                host: {
                    '[attr.title]': 'option.title || getOptionLabel()',
                    '[class.ant-cascader-menu-item-active]': 'activated',
                    '[class.ant-cascader-menu-item-expand]': '!option.isLeaf',
                    '[class.ant-cascader-menu-item-disabled]': 'option.disabled'
                }
            }] }
];
/** @nocollapse */
NzCascaderOptionComponent.ctorParameters = () => [
    { type: DomSanitizer },
    { type: ChangeDetectorRef },
    { type: ElementRef },
    { type: Renderer2 }
];
NzCascaderOptionComponent.propDecorators = {
    option: [{ type: Input }],
    activated: [{ type: Input }],
    highlightText: [{ type: Input }],
    nzLabelProperty: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    NzCascaderOptionComponent.prototype.option;
    /** @type {?} */
    NzCascaderOptionComponent.prototype.activated;
    /** @type {?} */
    NzCascaderOptionComponent.prototype.highlightText;
    /** @type {?} */
    NzCascaderOptionComponent.prototype.nzLabelProperty;
    /**
     * @type {?}
     * @private
     */
    NzCascaderOptionComponent.prototype.sanitizer;
    /**
     * @type {?}
     * @private
     */
    NzCascaderOptionComponent.prototype.cdr;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotY2FzY2FkZXItbGkuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9jYXNjYWRlci8iLCJzb3VyY2VzIjpbIm56LWNhc2NhZGVyLWxpLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQVFBLE9BQU8sRUFDTCx1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsS0FBSyxFQUNMLFNBQVMsRUFDVCxpQkFBaUIsRUFDbEIsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLFlBQVksRUFBWSxNQUFNLDJCQUEyQixDQUFDO0FBaUJuRSxNQUFNLE9BQU8seUJBQXlCOzs7Ozs7O0lBTXBDLFlBQ1UsU0FBdUIsRUFDdkIsR0FBc0IsRUFDOUIsVUFBc0IsRUFDdEIsUUFBbUI7UUFIWCxjQUFTLEdBQVQsU0FBUyxDQUFjO1FBQ3ZCLFFBQUcsR0FBSCxHQUFHLENBQW1CO1FBTnZCLGNBQVMsR0FBRyxLQUFLLENBQUM7UUFFbEIsb0JBQWUsR0FBRyxPQUFPLENBQUM7UUFRakMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLHdCQUF3QixDQUFDLENBQUM7SUFDeEUsQ0FBQzs7OztJQUVELGNBQWM7UUFDWixPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7SUFDOUQsQ0FBQzs7Ozs7SUFFRCxxQkFBcUIsQ0FBQyxHQUFXOztjQUN6QixVQUFVLEdBQUcsR0FBRyxDQUFDLE9BQU8sQ0FDNUIsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxHQUFHLENBQUMsRUFDbkMsZ0RBQWdELElBQUksQ0FBQyxhQUFhLFNBQVMsQ0FDNUU7UUFFRCxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsdUJBQXVCLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDNUQsQ0FBQzs7OztJQUVELFlBQVk7UUFDVixJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQzFCLENBQUM7OztZQTNDRixTQUFTLFNBQUM7Z0JBQ1QsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07Z0JBQy9DLGFBQWEsRUFBRSxpQkFBaUIsQ0FBQyxJQUFJO2dCQUNyQyxRQUFRLEVBQUUsc0JBQXNCO2dCQUNoQyxRQUFRLEVBQUUsa0JBQWtCO2dCQUM1Qiw2Y0FBOEM7Z0JBQzlDLElBQUksRUFBRTtvQkFDSixjQUFjLEVBQUUsa0NBQWtDO29CQUNsRCx1Q0FBdUMsRUFBRSxXQUFXO29CQUNwRCx1Q0FBdUMsRUFBRSxnQkFBZ0I7b0JBQ3pELHlDQUF5QyxFQUFFLGlCQUFpQjtpQkFDN0Q7YUFDRjs7OztZQWhCUSxZQUFZO1lBUG5CLGlCQUFpQjtZQUVqQixVQUFVO1lBRVYsU0FBUzs7O3FCQXFCUixLQUFLO3dCQUNMLEtBQUs7NEJBQ0wsS0FBSzs4QkFDTCxLQUFLOzs7O0lBSE4sMkNBQWdDOztJQUNoQyw4Q0FBMkI7O0lBQzNCLGtEQUErQjs7SUFDL0Isb0RBQW1DOzs7OztJQUdqQyw4Q0FBK0I7Ozs7O0lBQy9CLHdDQUE4QiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5cclxuaW1wb3J0IHtcclxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcclxuICBDaGFuZ2VEZXRlY3RvclJlZixcclxuICBDb21wb25lbnQsXHJcbiAgRWxlbWVudFJlZixcclxuICBJbnB1dCxcclxuICBSZW5kZXJlcjIsXHJcbiAgVmlld0VuY2Fwc3VsYXRpb25cclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRG9tU2FuaXRpemVyLCBTYWZlSHRtbCB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xyXG5cclxuaW1wb3J0IHsgQ2FzY2FkZXJPcHRpb24gfSBmcm9tICcuL256LWNhc2NhZGVyLWRlZmluaXRpb25zJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgc2VsZWN0b3I6ICdbbnotY2FzY2FkZXItb3B0aW9uXScsXHJcbiAgZXhwb3J0QXM6ICduekNhc2NhZGVyT3B0aW9uJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vbnotY2FzY2FkZXItbGkuY29tcG9uZW50Lmh0bWwnLFxyXG4gIGhvc3Q6IHtcclxuICAgICdbYXR0ci50aXRsZV0nOiAnb3B0aW9uLnRpdGxlIHx8IGdldE9wdGlvbkxhYmVsKCknLFxyXG4gICAgJ1tjbGFzcy5hbnQtY2FzY2FkZXItbWVudS1pdGVtLWFjdGl2ZV0nOiAnYWN0aXZhdGVkJyxcclxuICAgICdbY2xhc3MuYW50LWNhc2NhZGVyLW1lbnUtaXRlbS1leHBhbmRdJzogJyFvcHRpb24uaXNMZWFmJyxcclxuICAgICdbY2xhc3MuYW50LWNhc2NhZGVyLW1lbnUtaXRlbS1kaXNhYmxlZF0nOiAnb3B0aW9uLmRpc2FibGVkJ1xyXG4gIH1cclxufSlcclxuZXhwb3J0IGNsYXNzIE56Q2FzY2FkZXJPcHRpb25Db21wb25lbnQge1xyXG4gIEBJbnB1dCgpIG9wdGlvbjogQ2FzY2FkZXJPcHRpb247XHJcbiAgQElucHV0KCkgYWN0aXZhdGVkID0gZmFsc2U7XHJcbiAgQElucHV0KCkgaGlnaGxpZ2h0VGV4dDogc3RyaW5nO1xyXG4gIEBJbnB1dCgpIG56TGFiZWxQcm9wZXJ0eSA9ICdsYWJlbCc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHJpdmF0ZSBzYW5pdGl6ZXI6IERvbVNhbml0aXplcixcclxuICAgIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZixcclxuICAgIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXHJcbiAgICByZW5kZXJlcjogUmVuZGVyZXIyXHJcbiAgKSB7XHJcbiAgICByZW5kZXJlci5hZGRDbGFzcyhlbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsICdhbnQtY2FzY2FkZXItbWVudS1pdGVtJyk7XHJcbiAgfVxyXG5cclxuICBnZXRPcHRpb25MYWJlbCgpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMub3B0aW9uID8gdGhpcy5vcHRpb25bdGhpcy5uekxhYmVsUHJvcGVydHldIDogJyc7XHJcbiAgfVxyXG5cclxuICByZW5kZXJIaWdobGlnaHRTdHJpbmcoc3RyOiBzdHJpbmcpOiBTYWZlSHRtbCB7XHJcbiAgICBjb25zdCByZXBsYWNlU3RyID0gc3RyLnJlcGxhY2UoXHJcbiAgICAgIG5ldyBSZWdFeHAodGhpcy5oaWdobGlnaHRUZXh0LCAnZycpLFxyXG4gICAgICBgPHNwYW4gY2xhc3M9XCJhbnQtY2FzY2FkZXItbWVudS1pdGVtLWtleXdvcmRcIj4ke3RoaXMuaGlnaGxpZ2h0VGV4dH08L3NwYW4+YFxyXG4gICAgKTtcclxuXHJcbiAgICByZXR1cm4gdGhpcy5zYW5pdGl6ZXIuYnlwYXNzU2VjdXJpdHlUcnVzdEh0bWwocmVwbGFjZVN0cik7XHJcbiAgfVxyXG5cclxuICBtYXJrRm9yQ2hlY2soKTogdm9pZCB7XHJcbiAgICB0aGlzLmNkci5tYXJrRm9yQ2hlY2soKTtcclxuICB9XHJcbn1cclxuIl19