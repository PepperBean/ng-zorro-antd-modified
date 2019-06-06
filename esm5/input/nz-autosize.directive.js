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
import { Platform } from '@angular/cdk/platform';
import { Directive, ElementRef, Input, NgZone } from '@angular/core';
import { fromEvent, Subject } from 'rxjs';
import { auditTime, takeUntil } from 'rxjs/operators';
/**
 * @record
 */
export function AutoSizeType() { }
if (false) {
    /** @type {?|undefined} */
    AutoSizeType.prototype.minRows;
    /** @type {?|undefined} */
    AutoSizeType.prototype.maxRows;
}
/**
 * @param {?} value
 * @return {?}
 */
export function isAutoSizeType(value) {
    return typeof value !== 'string' && typeof value !== 'boolean' && (!!value.maxRows || !!value.minRows);
}
var NzAutosizeDirective = /** @class */ (function () {
    function NzAutosizeDirective(elementRef, ngZone, platform) {
        this.elementRef = elementRef;
        this.ngZone = ngZone;
        this.platform = platform;
        this.autosize = false;
        this.el = this.elementRef.nativeElement;
        this.destroy$ = new Subject();
        this.inputGap = 10;
    }
    Object.defineProperty(NzAutosizeDirective.prototype, "nzAutosize", {
        get: /**
         * @return {?}
         */
        function () {
            return this.autosize;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (typeof value === 'string') {
                this.autosize = true;
            }
            else if (isAutoSizeType(value)) {
                this.autosize = value;
                this.minRows = value.minRows;
                this.maxRows = value.maxRows;
                this.setMaxHeight();
                this.setMinHeight();
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?=} force
     * @return {?}
     */
    NzAutosizeDirective.prototype.resizeToFitContent = /**
     * @param {?=} force
     * @return {?}
     */
    function (force) {
        var _this = this;
        if (force === void 0) { force = false; }
        this.cacheTextareaLineHeight();
        // If we haven't determined the line-height yet, we know we're still hidden and there's no point
        // in checking the height of the textarea.
        if (!this.cachedLineHeight) {
            return;
        }
        /** @type {?} */
        var textarea = (/** @type {?} */ (this.el));
        /** @type {?} */
        var value = textarea.value;
        // Only resize if the value or minRows have changed since these calculations can be expensive.
        if (!force && this.minRows === this.previousMinRows && value === this.previousValue) {
            return;
        }
        /** @type {?} */
        var placeholderText = textarea.placeholder;
        // Reset the textarea height to auto in order to shrink back to its default size.
        // Also temporarily force overflow:hidden, so scroll bars do not interfere with calculations.
        // Long placeholders that are wider than the textarea width may lead to a bigger scrollHeight
        // value. To ensure that the scrollHeight is not bigger than the content, the placeholders
        // need to be removed temporarily.
        textarea.classList.add('cdk-textarea-autosize-measuring');
        textarea.placeholder = '';
        /** @type {?} */
        var height = Math.round((textarea.scrollHeight - this.inputGap) / this.cachedLineHeight) * this.cachedLineHeight +
            this.inputGap;
        // Use the scrollHeight to know how large the textarea *would* be if fit its entire value.
        textarea.style.height = height + "px";
        textarea.classList.remove('cdk-textarea-autosize-measuring');
        textarea.placeholder = placeholderText;
        // On Firefox resizing the textarea will prevent it from scrolling to the caret position.
        // We need to re-set the selection in order for it to scroll to the proper position.
        if (typeof requestAnimationFrame !== 'undefined') {
            this.ngZone.runOutsideAngular((/**
             * @return {?}
             */
            function () {
                return requestAnimationFrame((/**
                 * @return {?}
                 */
                function () {
                    var selectionStart = textarea.selectionStart, selectionEnd = textarea.selectionEnd;
                    // IE will throw an "Unspecified error" if we try to set the selection range after the
                    // element has been removed from the DOM. Assert that the directive hasn't been destroyed
                    // between the time we requested the animation frame and when it was executed.
                    // Also note that we have to assert that the textarea is focused before we set the
                    // selection range. Setting the selection range on a non-focused textarea will cause
                    // it to receive focus on IE and Edge.
                    if (!_this.destroy$.isStopped && document.activeElement === textarea) {
                        textarea.setSelectionRange(selectionStart, selectionEnd);
                    }
                }));
            }));
        }
        this.previousValue = value;
        this.previousMinRows = this.minRows;
    };
    /**
     * @private
     * @return {?}
     */
    NzAutosizeDirective.prototype.cacheTextareaLineHeight = /**
     * @private
     * @return {?}
     */
    function () {
        if (this.cachedLineHeight >= 0 || !this.el.parentNode) {
            return;
        }
        // Use a clone element because we have to override some styles.
        /** @type {?} */
        var textareaClone = (/** @type {?} */ (this.el.cloneNode(false)));
        textareaClone.rows = 1;
        // Use `position: absolute` so that this doesn't cause a browser layout and use
        // `visibility: hidden` so that nothing is rendered. Clear any other styles that
        // would affect the height.
        textareaClone.style.position = 'absolute';
        textareaClone.style.visibility = 'hidden';
        textareaClone.style.border = 'none';
        textareaClone.style.padding = '0';
        textareaClone.style.height = '';
        textareaClone.style.minHeight = '';
        textareaClone.style.maxHeight = '';
        // In Firefox it happens that textarea elements are always bigger than the specified amount
        // of rows. This is because Firefox tries to add extra space for the horizontal scrollbar.
        // As a workaround that removes the extra space for the scrollbar, we can just set overflow
        // to hidden. This ensures that there is no invalid calculation of the line height.
        // See Firefox bug report: https://bugzilla.mozilla.org/show_bug.cgi?id=33654
        textareaClone.style.overflow = 'hidden';
        (/** @type {?} */ (this.el.parentNode)).appendChild(textareaClone);
        this.cachedLineHeight = textareaClone.clientHeight - this.inputGap - 1;
        (/** @type {?} */ (this.el.parentNode)).removeChild(textareaClone);
        // Min and max heights have to be re-calculated if the cached line height changes
        this.setMinHeight();
        this.setMaxHeight();
    };
    /**
     * @return {?}
     */
    NzAutosizeDirective.prototype.setMinHeight = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var minHeight = this.minRows && this.cachedLineHeight ? this.minRows * this.cachedLineHeight + this.inputGap + "px" : null;
        if (minHeight) {
            this.el.style.minHeight = minHeight;
        }
    };
    /**
     * @return {?}
     */
    NzAutosizeDirective.prototype.setMaxHeight = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var maxHeight = this.maxRows && this.cachedLineHeight ? this.maxRows * this.cachedLineHeight + this.inputGap + "px" : null;
        if (maxHeight) {
            this.el.style.maxHeight = maxHeight;
        }
    };
    /**
     * @return {?}
     */
    NzAutosizeDirective.prototype.noopInputHandler = /**
     * @return {?}
     */
    function () {
        // no-op handler that ensures we're running change detection on input events.
    };
    /**
     * @return {?}
     */
    NzAutosizeDirective.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.nzAutosize && this.platform.isBrowser) {
            this.resizeToFitContent();
            this.ngZone.runOutsideAngular((/**
             * @return {?}
             */
            function () {
                fromEvent(window, 'resize')
                    .pipe(auditTime(16), takeUntil(_this.destroy$))
                    .subscribe((/**
                 * @return {?}
                 */
                function () { return _this.resizeToFitContent(true); }));
            }));
        }
    };
    /**
     * @return {?}
     */
    NzAutosizeDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        this.destroy$.next();
        this.destroy$.complete();
    };
    /**
     * @return {?}
     */
    NzAutosizeDirective.prototype.ngDoCheck = /**
     * @return {?}
     */
    function () {
        if (this.nzAutosize && this.platform.isBrowser) {
            this.resizeToFitContent();
        }
    };
    NzAutosizeDirective.decorators = [
        { type: Directive, args: [{
                    selector: 'textarea[nzAutosize]',
                    exportAs: 'nzAutosize',
                    host: {
                        // Textarea elements that have the directive applied should have a single row by default.
                        // Browsers normally show two rows by default and therefore this limits the minRows binding.
                        rows: '1',
                        '(input)': 'noopInputHandler()'
                    }
                },] }
    ];
    /** @nocollapse */
    NzAutosizeDirective.ctorParameters = function () { return [
        { type: ElementRef },
        { type: NgZone },
        { type: Platform }
    ]; };
    NzAutosizeDirective.propDecorators = {
        nzAutosize: [{ type: Input }]
    };
    return NzAutosizeDirective;
}());
export { NzAutosizeDirective };
if (false) {
    /**
     * @type {?}
     * @private
     */
    NzAutosizeDirective.prototype.autosize;
    /**
     * @type {?}
     * @private
     */
    NzAutosizeDirective.prototype.el;
    /**
     * @type {?}
     * @private
     */
    NzAutosizeDirective.prototype.cachedLineHeight;
    /**
     * @type {?}
     * @private
     */
    NzAutosizeDirective.prototype.previousValue;
    /**
     * @type {?}
     * @private
     */
    NzAutosizeDirective.prototype.previousMinRows;
    /**
     * @type {?}
     * @private
     */
    NzAutosizeDirective.prototype.minRows;
    /**
     * @type {?}
     * @private
     */
    NzAutosizeDirective.prototype.maxRows;
    /**
     * @type {?}
     * @private
     */
    NzAutosizeDirective.prototype.destroy$;
    /**
     * @type {?}
     * @private
     */
    NzAutosizeDirective.prototype.inputGap;
    /**
     * @type {?}
     * @private
     */
    NzAutosizeDirective.prototype.elementRef;
    /**
     * @type {?}
     * @private
     */
    NzAutosizeDirective.prototype.ngZone;
    /**
     * @type {?}
     * @private
     */
    NzAutosizeDirective.prototype.platform;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotYXV0b3NpemUuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9pbnB1dC8iLCJzb3VyY2VzIjpbIm56LWF1dG9zaXplLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQVFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUNqRCxPQUFPLEVBQWlCLFNBQVMsRUFBVyxVQUFVLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBYSxNQUFNLGVBQWUsQ0FBQztBQUN4RyxPQUFPLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUMxQyxPQUFPLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxNQUFNLGdCQUFnQixDQUFDOzs7O0FBRXRELGtDQUdDOzs7SUFGQywrQkFBaUI7O0lBQ2pCLCtCQUFpQjs7Ozs7O0FBR25CLE1BQU0sVUFBVSxjQUFjLENBQUMsS0FBc0M7SUFDbkUsT0FBTyxPQUFPLEtBQUssS0FBSyxRQUFRLElBQUksT0FBTyxLQUFLLEtBQUssU0FBUyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxPQUFPLElBQUksQ0FBQyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUN6RyxDQUFDO0FBRUQ7SUEwSkUsNkJBQW9CLFVBQXNCLEVBQVUsTUFBYyxFQUFVLFFBQWtCO1FBQTFFLGVBQVUsR0FBVixVQUFVLENBQVk7UUFBVSxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBQVUsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQS9JdEYsYUFBUSxHQUEyQixLQUFLLENBQUM7UUFDekMsT0FBRSxHQUEyQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQztRQU0zRSxhQUFRLEdBQUcsSUFBSSxPQUFPLEVBQUUsQ0FBQztRQUN6QixhQUFRLEdBQUcsRUFBRSxDQUFDO0lBdUkyRSxDQUFDO0lBcklsRyxzQkFDSSwyQ0FBVTs7OztRQVlkO1lB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Y29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuXHJcbmltcG9ydCB7IFBsYXRmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BsYXRmb3JtJztcclxuaW1wb3J0IHsgQWZ0ZXJWaWV3SW5pdCwgRGlyZWN0aXZlLCBEb0NoZWNrLCBFbGVtZW50UmVmLCBJbnB1dCwgTmdab25lLCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgZnJvbUV2ZW50LCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IGF1ZGl0VGltZSwgdGFrZVVudGlsIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBBdXRvU2l6ZVR5cGUge1xyXG4gIG1pblJvd3M/OiBudW1iZXI7XHJcbiAgbWF4Um93cz86IG51bWJlcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGlzQXV0b1NpemVUeXBlKHZhbHVlOiBzdHJpbmcgfCBib29sZWFuIHwgQXV0b1NpemVUeXBlKTogdmFsdWUgaXMgQXV0b1NpemVUeXBlIHtcclxuICByZXR1cm4gdHlwZW9mIHZhbHVlICE9PSAnc3RyaW5nJyAmJiB0eXBlb2YgdmFsdWUgIT09ICdib29sZWFuJyAmJiAoISF2YWx1ZS5tYXhSb3dzIHx8ICEhdmFsdWUubWluUm93cyk7XHJcbn1cclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiAndGV4dGFyZWFbbnpBdXRvc2l6ZV0nLFxyXG4gIGV4cG9ydEFzOiAnbnpBdXRvc2l6ZScsXHJcbiAgaG9zdDoge1xyXG4gICAgLy8gVGV4dGFyZWEgZWxlbWVudHMgdGhhdCBoYXZlIHRoZSBkaXJlY3RpdmUgYXBwbGllZCBzaG91bGQgaGF2ZSBhIHNpbmdsZSByb3cgYnkgZGVmYXVsdC5cclxuICAgIC8vIEJyb3dzZXJzIG5vcm1hbGx5IHNob3cgdHdvIHJvd3MgYnkgZGVmYXVsdCBhbmQgdGhlcmVmb3JlIHRoaXMgbGltaXRzIHRoZSBtaW5Sb3dzIGJpbmRpbmcuXHJcbiAgICByb3dzOiAnMScsXHJcbiAgICAnKGlucHV0KSc6ICdub29wSW5wdXRIYW5kbGVyKCknXHJcbiAgfVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTnpBdXRvc2l6ZURpcmVjdGl2ZSBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSwgRG9DaGVjayB7XHJcbiAgcHJpdmF0ZSBhdXRvc2l6ZTogYm9vbGVhbiB8IEF1dG9TaXplVHlwZSA9IGZhbHNlO1xyXG4gIHByaXZhdGUgZWw6IEhUTUxUZXh0QXJlYUVsZW1lbnQgfCBIVE1MSW5wdXRFbGVtZW50ID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XHJcbiAgcHJpdmF0ZSBjYWNoZWRMaW5lSGVpZ2h0OiBudW1iZXI7XHJcbiAgcHJpdmF0ZSBwcmV2aW91c1ZhbHVlOiBzdHJpbmc7XHJcbiAgcHJpdmF0ZSBwcmV2aW91c01pblJvd3M6IG51bWJlciB8IHVuZGVmaW5lZDtcclxuICBwcml2YXRlIG1pblJvd3M6IG51bWJlciB8IHVuZGVmaW5lZDtcclxuICBwcml2YXRlIG1heFJvd3M6IG51bWJlciB8IHVuZGVmaW5lZDtcclxuICBwcml2YXRlIGRlc3Ryb3kkID0gbmV3IFN1YmplY3QoKTtcclxuICBwcml2YXRlIGlucHV0R2FwID0gMTA7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IG56QXV0b3NpemUodmFsdWU6IHN0cmluZyB8IGJvb2xlYW4gfCBBdXRvU2l6ZVR5cGUpIHtcclxuICAgIGlmICh0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgIHRoaXMuYXV0b3NpemUgPSB0cnVlO1xyXG4gICAgfSBlbHNlIGlmIChpc0F1dG9TaXplVHlwZSh2YWx1ZSkpIHtcclxuICAgICAgdGhpcy5hdXRvc2l6ZSA9IHZhbHVlO1xyXG4gICAgICB0aGlzLm1pblJvd3MgPSB2YWx1ZS5taW5Sb3dzO1xyXG4gICAgICB0aGlzLm1heFJvd3MgPSB2YWx1ZS5tYXhSb3dzO1xyXG4gICAgICB0aGlzLnNldE1heEhlaWdodCgpO1xyXG4gICAgICB0aGlzLnNldE1pbkhlaWdodCgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0IG56QXV0b3NpemUoKTogc3RyaW5nIHwgYm9vbGVhbiB8IEF1dG9TaXplVHlwZSB7XHJcbiAgICByZXR1cm4gdGhpcy5hdXRvc2l6ZTtcclxuICB9XHJcblxyXG4gIHJlc2l6ZVRvRml0Q29udGVudChmb3JjZTogYm9vbGVhbiA9IGZhbHNlKTogdm9pZCB7XHJcbiAgICB0aGlzLmNhY2hlVGV4dGFyZWFMaW5lSGVpZ2h0KCk7XHJcblxyXG4gICAgLy8gSWYgd2UgaGF2ZW4ndCBkZXRlcm1pbmVkIHRoZSBsaW5lLWhlaWdodCB5ZXQsIHdlIGtub3cgd2UncmUgc3RpbGwgaGlkZGVuIGFuZCB0aGVyZSdzIG5vIHBvaW50XHJcbiAgICAvLyBpbiBjaGVja2luZyB0aGUgaGVpZ2h0IG9mIHRoZSB0ZXh0YXJlYS5cclxuICAgIGlmICghdGhpcy5jYWNoZWRMaW5lSGVpZ2h0KSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB0ZXh0YXJlYSA9IHRoaXMuZWwgYXMgSFRNTFRleHRBcmVhRWxlbWVudDtcclxuICAgIGNvbnN0IHZhbHVlID0gdGV4dGFyZWEudmFsdWU7XHJcblxyXG4gICAgLy8gT25seSByZXNpemUgaWYgdGhlIHZhbHVlIG9yIG1pblJvd3MgaGF2ZSBjaGFuZ2VkIHNpbmNlIHRoZXNlIGNhbGN1bGF0aW9ucyBjYW4gYmUgZXhwZW5zaXZlLlxyXG4gICAgaWYgKCFmb3JjZSAmJiB0aGlzLm1pblJvd3MgPT09IHRoaXMucHJldmlvdXNNaW5Sb3dzICYmIHZhbHVlID09PSB0aGlzLnByZXZpb3VzVmFsdWUpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgY29uc3QgcGxhY2Vob2xkZXJUZXh0ID0gdGV4dGFyZWEucGxhY2Vob2xkZXI7XHJcblxyXG4gICAgLy8gUmVzZXQgdGhlIHRleHRhcmVhIGhlaWdodCB0byBhdXRvIGluIG9yZGVyIHRvIHNocmluayBiYWNrIHRvIGl0cyBkZWZhdWx0IHNpemUuXHJcbiAgICAvLyBBbHNvIHRlbXBvcmFyaWx5IGZvcmNlIG92ZXJmbG93OmhpZGRlbiwgc28gc2Nyb2xsIGJhcnMgZG8gbm90IGludGVyZmVyZSB3aXRoIGNhbGN1bGF0aW9ucy5cclxuICAgIC8vIExvbmcgcGxhY2Vob2xkZXJzIHRoYXQgYXJlIHdpZGVyIHRoYW4gdGhlIHRleHRhcmVhIHdpZHRoIG1heSBsZWFkIHRvIGEgYmlnZ2VyIHNjcm9sbEhlaWdodFxyXG4gICAgLy8gdmFsdWUuIFRvIGVuc3VyZSB0aGF0IHRoZSBzY3JvbGxIZWlnaHQgaXMgbm90IGJpZ2dlciB0aGFuIHRoZSBjb250ZW50LCB0aGUgcGxhY2Vob2xkZXJzXHJcbiAgICAvLyBuZWVkIHRvIGJlIHJlbW92ZWQgdGVtcG9yYXJpbHkuXHJcbiAgICB0ZXh0YXJlYS5jbGFzc0xpc3QuYWRkKCdjZGstdGV4dGFyZWEtYXV0b3NpemUtbWVhc3VyaW5nJyk7XHJcbiAgICB0ZXh0YXJlYS5wbGFjZWhvbGRlciA9ICcnO1xyXG4gICAgY29uc3QgaGVpZ2h0ID1cclxuICAgICAgTWF0aC5yb3VuZCgodGV4dGFyZWEuc2Nyb2xsSGVpZ2h0IC0gdGhpcy5pbnB1dEdhcCkgLyB0aGlzLmNhY2hlZExpbmVIZWlnaHQpICogdGhpcy5jYWNoZWRMaW5lSGVpZ2h0ICtcclxuICAgICAgdGhpcy5pbnB1dEdhcDtcclxuXHJcbiAgICAvLyBVc2UgdGhlIHNjcm9sbEhlaWdodCB0byBrbm93IGhvdyBsYXJnZSB0aGUgdGV4dGFyZWEgKndvdWxkKiBiZSBpZiBmaXQgaXRzIGVudGlyZSB2YWx1ZS5cclxuICAgIHRleHRhcmVhLnN0eWxlLmhlaWdodCA9IGAke2hlaWdodH1weGA7XHJcbiAgICB0ZXh0YXJlYS5jbGFzc0xpc3QucmVtb3ZlKCdjZGstdGV4dGFyZWEtYXV0b3NpemUtbWVhc3VyaW5nJyk7XHJcbiAgICB0ZXh0YXJlYS5wbGFjZWhvbGRlciA9IHBsYWNlaG9sZGVyVGV4dDtcclxuXHJcbiAgICAvLyBPbiBGaXJlZm94IHJlc2l6aW5nIHRoZSB0ZXh0YXJlYSB3aWxsIHByZXZlbnQgaXQgZnJvbSBzY3JvbGxpbmcgdG8gdGhlIGNhcmV0IHBvc2l0aW9uLlxyXG4gICAgLy8gV2UgbmVlZCB0byByZS1zZXQgdGhlIHNlbGVjdGlvbiBpbiBvcmRlciBmb3IgaXQgdG8gc2Nyb2xsIHRvIHRoZSBwcm9wZXIgcG9zaXRpb24uXHJcbiAgICBpZiAodHlwZW9mIHJlcXVlc3RBbmltYXRpb25GcmFtZSAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgICAgdGhpcy5uZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoKCkgPT5cclxuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xyXG4gICAgICAgICAgY29uc3QgeyBzZWxlY3Rpb25TdGFydCwgc2VsZWN0aW9uRW5kIH0gPSB0ZXh0YXJlYTtcclxuXHJcbiAgICAgICAgICAvLyBJRSB3aWxsIHRocm93IGFuIFwiVW5zcGVjaWZpZWQgZXJyb3JcIiBpZiB3ZSB0cnkgdG8gc2V0IHRoZSBzZWxlY3Rpb24gcmFuZ2UgYWZ0ZXIgdGhlXHJcbiAgICAgICAgICAvLyBlbGVtZW50IGhhcyBiZWVuIHJlbW92ZWQgZnJvbSB0aGUgRE9NLiBBc3NlcnQgdGhhdCB0aGUgZGlyZWN0aXZlIGhhc24ndCBiZWVuIGRlc3Ryb3llZFxyXG4gICAgICAgICAgLy8gYmV0d2VlbiB0aGUgdGltZSB3ZSByZXF1ZXN0ZWQgdGhlIGFuaW1hdGlvbiBmcmFtZSBhbmQgd2hlbiBpdCB3YXMgZXhlY3V0ZWQuXHJcbiAgICAgICAgICAvLyBBbHNvIG5vdGUgdGhhdCB3ZSBoYXZlIHRvIGFzc2VydCB0aGF0IHRoZSB0ZXh0YXJlYSBpcyBmb2N1c2VkIGJlZm9yZSB3ZSBzZXQgdGhlXHJcbiAgICAgICAgICAvLyBzZWxlY3Rpb24gcmFuZ2UuIFNldHRpbmcgdGhlIHNlbGVjdGlvbiByYW5nZSBvbiBhIG5vbi1mb2N1c2VkIHRleHRhcmVhIHdpbGwgY2F1c2VcclxuICAgICAgICAgIC8vIGl0IHRvIHJlY2VpdmUgZm9jdXMgb24gSUUgYW5kIEVkZ2UuXHJcbiAgICAgICAgICBpZiAoIXRoaXMuZGVzdHJveSQuaXNTdG9wcGVkICYmIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgPT09IHRleHRhcmVhKSB7XHJcbiAgICAgICAgICAgIHRleHRhcmVhLnNldFNlbGVjdGlvblJhbmdlKHNlbGVjdGlvblN0YXJ0LCBzZWxlY3Rpb25FbmQpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5wcmV2aW91c1ZhbHVlID0gdmFsdWU7XHJcbiAgICB0aGlzLnByZXZpb3VzTWluUm93cyA9IHRoaXMubWluUm93cztcclxuICB9XHJcblxyXG4gIHByaXZhdGUgY2FjaGVUZXh0YXJlYUxpbmVIZWlnaHQoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5jYWNoZWRMaW5lSGVpZ2h0ID49IDAgfHwgIXRoaXMuZWwucGFyZW50Tm9kZSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgLy8gVXNlIGEgY2xvbmUgZWxlbWVudCBiZWNhdXNlIHdlIGhhdmUgdG8gb3ZlcnJpZGUgc29tZSBzdHlsZXMuXHJcbiAgICBjb25zdCB0ZXh0YXJlYUNsb25lID0gdGhpcy5lbC5jbG9uZU5vZGUoZmFsc2UpIGFzIEhUTUxUZXh0QXJlYUVsZW1lbnQ7XHJcbiAgICB0ZXh0YXJlYUNsb25lLnJvd3MgPSAxO1xyXG5cclxuICAgIC8vIFVzZSBgcG9zaXRpb246IGFic29sdXRlYCBzbyB0aGF0IHRoaXMgZG9lc24ndCBjYXVzZSBhIGJyb3dzZXIgbGF5b3V0IGFuZCB1c2VcclxuICAgIC8vIGB2aXNpYmlsaXR5OiBoaWRkZW5gIHNvIHRoYXQgbm90aGluZyBpcyByZW5kZXJlZC4gQ2xlYXIgYW55IG90aGVyIHN0eWxlcyB0aGF0XHJcbiAgICAvLyB3b3VsZCBhZmZlY3QgdGhlIGhlaWdodC5cclxuICAgIHRleHRhcmVhQ2xvbmUuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xyXG4gICAgdGV4dGFyZWFDbG9uZS5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbic7XHJcbiAgICB0ZXh0YXJlYUNsb25lLnN0eWxlLmJvcmRlciA9ICdub25lJztcclxuICAgIHRleHRhcmVhQ2xvbmUuc3R5bGUucGFkZGluZyA9ICcwJztcclxuICAgIHRleHRhcmVhQ2xvbmUuc3R5bGUuaGVpZ2h0ID0gJyc7XHJcbiAgICB0ZXh0YXJlYUNsb25lLnN0eWxlLm1pbkhlaWdodCA9ICcnO1xyXG4gICAgdGV4dGFyZWFDbG9uZS5zdHlsZS5tYXhIZWlnaHQgPSAnJztcclxuXHJcbiAgICAvLyBJbiBGaXJlZm94IGl0IGhhcHBlbnMgdGhhdCB0ZXh0YXJlYSBlbGVtZW50cyBhcmUgYWx3YXlzIGJpZ2dlciB0aGFuIHRoZSBzcGVjaWZpZWQgYW1vdW50XHJcbiAgICAvLyBvZiByb3dzLiBUaGlzIGlzIGJlY2F1c2UgRmlyZWZveCB0cmllcyB0byBhZGQgZXh0cmEgc3BhY2UgZm9yIHRoZSBob3Jpem9udGFsIHNjcm9sbGJhci5cclxuICAgIC8vIEFzIGEgd29ya2Fyb3VuZCB0aGF0IHJlbW92ZXMgdGhlIGV4dHJhIHNwYWNlIGZvciB0aGUgc2Nyb2xsYmFyLCB3ZSBjYW4ganVzdCBzZXQgb3ZlcmZsb3dcclxuICAgIC8vIHRvIGhpZGRlbi4gVGhpcyBlbnN1cmVzIHRoYXQgdGhlcmUgaXMgbm8gaW52YWxpZCBjYWxjdWxhdGlvbiBvZiB0aGUgbGluZSBoZWlnaHQuXHJcbiAgICAvLyBTZWUgRmlyZWZveCBidWcgcmVwb3J0OiBodHRwczovL2J1Z3ppbGxhLm1vemlsbGEub3JnL3Nob3dfYnVnLmNnaT9pZD0zMzY1NFxyXG4gICAgdGV4dGFyZWFDbG9uZS5zdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nO1xyXG5cclxuICAgIHRoaXMuZWwucGFyZW50Tm9kZSEuYXBwZW5kQ2hpbGQodGV4dGFyZWFDbG9uZSk7XHJcbiAgICB0aGlzLmNhY2hlZExpbmVIZWlnaHQgPSB0ZXh0YXJlYUNsb25lLmNsaWVudEhlaWdodCAtIHRoaXMuaW5wdXRHYXAgLSAxO1xyXG4gICAgdGhpcy5lbC5wYXJlbnROb2RlIS5yZW1vdmVDaGlsZCh0ZXh0YXJlYUNsb25lKTtcclxuXHJcbiAgICAvLyBNaW4gYW5kIG1heCBoZWlnaHRzIGhhdmUgdG8gYmUgcmUtY2FsY3VsYXRlZCBpZiB0aGUgY2FjaGVkIGxpbmUgaGVpZ2h0IGNoYW5nZXNcclxuICAgIHRoaXMuc2V0TWluSGVpZ2h0KCk7XHJcbiAgICB0aGlzLnNldE1heEhlaWdodCgpO1xyXG4gIH1cclxuXHJcbiAgc2V0TWluSGVpZ2h0KCk6IHZvaWQge1xyXG4gICAgY29uc3QgbWluSGVpZ2h0ID1cclxuICAgICAgdGhpcy5taW5Sb3dzICYmIHRoaXMuY2FjaGVkTGluZUhlaWdodCA/IGAke3RoaXMubWluUm93cyAqIHRoaXMuY2FjaGVkTGluZUhlaWdodCArIHRoaXMuaW5wdXRHYXB9cHhgIDogbnVsbDtcclxuXHJcbiAgICBpZiAobWluSGVpZ2h0KSB7XHJcbiAgICAgIHRoaXMuZWwuc3R5bGUubWluSGVpZ2h0ID0gbWluSGVpZ2h0O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc2V0TWF4SGVpZ2h0KCk6IHZvaWQge1xyXG4gICAgY29uc3QgbWF4SGVpZ2h0ID1cclxuICAgICAgdGhpcy5tYXhSb3dzICYmIHRoaXMuY2FjaGVkTGluZUhlaWdodCA/IGAke3RoaXMubWF4Um93cyAqIHRoaXMuY2FjaGVkTGluZUhlaWdodCArIHRoaXMuaW5wdXRHYXB9cHhgIDogbnVsbDtcclxuXHJcbiAgICBpZiAobWF4SGVpZ2h0KSB7XHJcbiAgICAgIHRoaXMuZWwuc3R5bGUubWF4SGVpZ2h0ID0gbWF4SGVpZ2h0O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbm9vcElucHV0SGFuZGxlcigpOiB2b2lkIHtcclxuICAgIC8vIG5vLW9wIGhhbmRsZXIgdGhhdCBlbnN1cmVzIHdlJ3JlIHJ1bm5pbmcgY2hhbmdlIGRldGVjdGlvbiBvbiBpbnB1dCBldmVudHMuXHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsIHByaXZhdGUgbmdab25lOiBOZ1pvbmUsIHByaXZhdGUgcGxhdGZvcm06IFBsYXRmb3JtKSB7fVxyXG5cclxuICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5uekF1dG9zaXplICYmIHRoaXMucGxhdGZvcm0uaXNCcm93c2VyKSB7XHJcbiAgICAgIHRoaXMucmVzaXplVG9GaXRDb250ZW50KCk7XHJcbiAgICAgIHRoaXMubmdab25lLnJ1bk91dHNpZGVBbmd1bGFyKCgpID0+IHtcclxuICAgICAgICBmcm9tRXZlbnQod2luZG93LCAncmVzaXplJylcclxuICAgICAgICAgIC5waXBlKFxyXG4gICAgICAgICAgICBhdWRpdFRpbWUoMTYpLFxyXG4gICAgICAgICAgICB0YWtlVW50aWwodGhpcy5kZXN0cm95JClcclxuICAgICAgICAgIClcclxuICAgICAgICAgIC5zdWJzY3JpYmUoKCkgPT4gdGhpcy5yZXNpemVUb0ZpdENvbnRlbnQodHJ1ZSkpO1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgdGhpcy5kZXN0cm95JC5uZXh0KCk7XHJcbiAgICB0aGlzLmRlc3Ryb3kkLmNvbXBsZXRlKCk7XHJcbiAgfVxyXG5cclxuICBuZ0RvQ2hlY2soKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5uekF1dG9zaXplICYmIHRoaXMucGxhdGZvcm0uaXNCcm93c2VyKSB7XHJcbiAgICAgIHRoaXMucmVzaXplVG9GaXRDb250ZW50KCk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==