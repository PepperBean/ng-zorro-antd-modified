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
/**
 * @record
 */
export function CascaderOption() { }
if (false) {
    /** @type {?|undefined} */
    CascaderOption.prototype.value;
    /** @type {?|undefined} */
    CascaderOption.prototype.label;
    /** @type {?|undefined} */
    CascaderOption.prototype.title;
    /** @type {?|undefined} */
    CascaderOption.prototype.disabled;
    /** @type {?|undefined} */
    CascaderOption.prototype.loading;
    /** @type {?|undefined} */
    CascaderOption.prototype.isLeaf;
    /** @type {?|undefined} */
    CascaderOption.prototype.parent;
    /** @type {?|undefined} */
    CascaderOption.prototype.children;
    /* Skipping unhandled member: [key: string]: any;*/
}
/**
 * @record
 */
export function CascaderSearchOption() { }
if (false) {
    /** @type {?} */
    CascaderSearchOption.prototype.path;
}
/**
 * @record
 */
export function NzShowSearchOptions() { }
if (false) {
    /** @type {?|undefined} */
    NzShowSearchOptions.prototype.filter;
    /** @type {?|undefined} */
    NzShowSearchOptions.prototype.sorter;
}
/**
 * @param {?} options
 * @return {?}
 */
export function isShowSearchObject(options) {
    return typeof options !== 'boolean';
}
/**
 * To avoid circular dependency, provide an interface of `NzCascaderComponent`
 * for `NzCascaderService`.
 * @record
 */
export function NzCascaderComponentAsSource() { }
if (false) {
    /** @type {?} */
    NzCascaderComponentAsSource.prototype.inputValue;
    /** @type {?} */
    NzCascaderComponentAsSource.prototype.nzShowSearch;
    /** @type {?} */
    NzCascaderComponentAsSource.prototype.nzLabelProperty;
    /** @type {?} */
    NzCascaderComponentAsSource.prototype.nzValueProperty;
    /** @type {?} */
    NzCascaderComponentAsSource.prototype.nzChangeOnSelect;
    /**
     * @param {?} option
     * @param {?} level
     * @return {?}
     */
    NzCascaderComponentAsSource.prototype.nzChangeOn = function (option, level) { };
    /**
     * @param {?} node
     * @param {?=} index
     * @return {?}
     */
    NzCascaderComponentAsSource.prototype.nzLoadData = function (node, index) { };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotY2FzY2FkZXItZGVmaW5pdGlvbnMuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL2Nhc2NhZGVyLyIsInNvdXJjZXMiOlsibnotY2FzY2FkZXItZGVmaW5pdGlvbnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFlQSxvQ0FXQzs7O0lBVkMsK0JBQVk7O0lBQ1osK0JBQWU7O0lBQ2YsK0JBQWU7O0lBQ2Ysa0NBQW1COztJQUNuQixpQ0FBa0I7O0lBQ2xCLGdDQUFpQjs7SUFDakIsZ0NBQXdCOztJQUN4QixrQ0FBNEI7Ozs7OztBQUs5QiwwQ0FFQzs7O0lBREMsb0NBQXVCOzs7OztBQUd6Qix5Q0FHQzs7O0lBRkMscUNBQTBCOztJQUMxQixxQ0FBMEI7Ozs7OztBQUc1QixNQUFNLFVBQVUsa0JBQWtCLENBQUMsT0FBc0M7SUFDdkUsT0FBTyxPQUFPLE9BQU8sS0FBSyxTQUFTLENBQUM7QUFDdEMsQ0FBQzs7Ozs7O0FBTUQsaURBV0M7OztJQVZDLGlEQUFtQjs7SUFDbkIsbURBQTRDOztJQUM1QyxzREFBd0I7O0lBQ3hCLHNEQUF3Qjs7SUFDeEIsdURBQTBCOzs7Ozs7SUFFMUIsZ0ZBQTREOzs7Ozs7SUFHNUQsOEVBQW9FIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcclxuICovXHJcblxyXG5leHBvcnQgdHlwZSBOekNhc2NhZGVyRXhwYW5kVHJpZ2dlciA9ICdjbGljaycgfCAnaG92ZXInO1xyXG5leHBvcnQgdHlwZSBOekNhc2NhZGVyVHJpZ2dlclR5cGUgPSAnY2xpY2snIHwgJ2hvdmVyJztcclxuZXhwb3J0IHR5cGUgTnpDYXNjYWRlclNpemUgPSAnc21hbGwnIHwgJ2xhcmdlJyB8ICdkZWZhdWx0JztcclxuXHJcbmV4cG9ydCB0eXBlIE56Q2FzY2FkZXJGaWx0ZXIgPSAoc2VhcmNoVmFsdWU6IHN0cmluZywgcGF0aDogQ2FzY2FkZXJPcHRpb25bXSkgPT4gYm9vbGVhbjtcclxuZXhwb3J0IHR5cGUgTnpDYXNjYWRlclNvcnRlciA9IChhOiBDYXNjYWRlck9wdGlvbltdLCBiOiBDYXNjYWRlck9wdGlvbltdLCBpbnB1dFZhbHVlOiBzdHJpbmcpID0+IG51bWJlcjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQ2FzY2FkZXJPcHRpb24ge1xyXG4gIHZhbHVlPzogYW55OyAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lOm5vLWFueVxyXG4gIGxhYmVsPzogc3RyaW5nO1xyXG4gIHRpdGxlPzogc3RyaW5nO1xyXG4gIGRpc2FibGVkPzogYm9vbGVhbjtcclxuICBsb2FkaW5nPzogYm9vbGVhbjtcclxuICBpc0xlYWY/OiBib29sZWFuO1xyXG4gIHBhcmVudD86IENhc2NhZGVyT3B0aW9uO1xyXG4gIGNoaWxkcmVuPzogQ2FzY2FkZXJPcHRpb25bXTtcclxuXHJcbiAgW2tleTogc3RyaW5nXTogYW55OyAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lOm5vLWFueVxyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIENhc2NhZGVyU2VhcmNoT3B0aW9uIGV4dGVuZHMgQ2FzY2FkZXJPcHRpb24ge1xyXG4gIHBhdGg6IENhc2NhZGVyT3B0aW9uW107XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgTnpTaG93U2VhcmNoT3B0aW9ucyB7XHJcbiAgZmlsdGVyPzogTnpDYXNjYWRlckZpbHRlcjtcclxuICBzb3J0ZXI/OiBOekNhc2NhZGVyU29ydGVyO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaXNTaG93U2VhcmNoT2JqZWN0KG9wdGlvbnM6IE56U2hvd1NlYXJjaE9wdGlvbnMgfCBib29sZWFuKTogb3B0aW9ucyBpcyBOelNob3dTZWFyY2hPcHRpb25zIHtcclxuICByZXR1cm4gdHlwZW9mIG9wdGlvbnMgIT09ICdib29sZWFuJztcclxufVxyXG5cclxuLyoqXHJcbiAqIFRvIGF2b2lkIGNpcmN1bGFyIGRlcGVuZGVuY3ksIHByb3ZpZGUgYW4gaW50ZXJmYWNlIG9mIGBOekNhc2NhZGVyQ29tcG9uZW50YFxyXG4gKiBmb3IgYE56Q2FzY2FkZXJTZXJ2aWNlYC5cclxuICovXHJcbmV4cG9ydCBpbnRlcmZhY2UgTnpDYXNjYWRlckNvbXBvbmVudEFzU291cmNlIHtcclxuICBpbnB1dFZhbHVlOiBzdHJpbmc7XHJcbiAgbnpTaG93U2VhcmNoOiBOelNob3dTZWFyY2hPcHRpb25zIHwgYm9vbGVhbjtcclxuICBuekxhYmVsUHJvcGVydHk6IHN0cmluZztcclxuICBuelZhbHVlUHJvcGVydHk6IHN0cmluZztcclxuICBuekNoYW5nZU9uU2VsZWN0OiBib29sZWFuO1xyXG5cclxuICBuekNoYW5nZU9uPyhvcHRpb246IENhc2NhZGVyT3B0aW9uLCBsZXZlbDogbnVtYmVyKTogYm9vbGVhbjtcclxuXHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxyXG4gIG56TG9hZERhdGE/KG5vZGU6IENhc2NhZGVyT3B0aW9uLCBpbmRleD86IG51bWJlcik6IFByb21pc2VMaWtlPGFueT47XHJcbn1cclxuIl19