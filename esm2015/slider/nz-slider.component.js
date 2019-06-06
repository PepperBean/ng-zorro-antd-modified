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
import { Platform } from '@angular/cdk/platform';
import { forwardRef, ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, Input, Output, ViewChild, ViewEncapsulation } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { fromEvent, merge } from 'rxjs';
import { distinctUntilChanged, filter, map, pluck, takeUntil, tap } from 'rxjs/operators';
import { arraysEqual, ensureNumberInRange, getElementOffset, getPercent, getPrecision, shallowCopyArray, silentEvent, InputBoolean } from 'ng-zorro-antd/core';
import { isValueARange } from './nz-slider-definitions';
import { getValueTypeNotMatchError } from './nz-slider-error';
export class NzSliderComponent {
    /**
     * @param {?} cdr
     * @param {?} platform
     */
    constructor(cdr, platform) {
        this.cdr = cdr;
        this.platform = platform;
        this.nzDisabled = false;
        this.nzDots = false;
        this.nzIncluded = true;
        this.nzRange = false;
        this.nzVertical = false;
        this.nzDefaultValue = null;
        this.nzMarks = null;
        this.nzMax = 100;
        this.nzMin = 0;
        this.nzStep = 1;
        this.nzTooltipVisible = 'default';
        this.nzOnAfterChange = new EventEmitter();
        this.value = null;
        this.cacheSliderStart = null;
        this.cacheSliderLength = null;
        this.activeValueIndex = undefined; // Current activated handle's index ONLY for range=true
        // Current activated handle's index ONLY for range=true
        this.track = { offset: null, length: null }; // Track's offset and length
        // "steps" in array type with more data & FILTER out the invalid mark
        this.bounds = { lower: null, upper: null }; // now for nz-slider-step
        // now for nz-slider-step
        this.isDragging = false; // Current dragging state
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.handles = this.generateHandles(this.nzRange ? 2 : 1);
        this.sliderDOM = this.slider.nativeElement;
        this.marksArray = this.nzMarks ? this.generateMarkItems(this.nzMarks) : null;
        if (this.platform.isBrowser) {
            this.createDraggingObservables();
        }
        this.toggleDragDisabled(this.nzDisabled);
        if (this.getValue() === null) {
            this.setValue(this.formatValue(null));
        }
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        const { nzDisabled, nzMarks, nzRange } = changes;
        if (nzDisabled && !nzDisabled.firstChange) {
            this.toggleDragDisabled(nzDisabled.currentValue);
        }
        else if (nzMarks && !nzMarks.firstChange) {
            this.marksArray = this.nzMarks ? this.generateMarkItems(this.nzMarks) : null;
        }
        else if (nzRange && !nzRange.firstChange) {
            this.setValue(this.formatValue(null));
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.unsubscribeDrag();
    }
    /**
     * @param {?} val
     * @return {?}
     */
    writeValue(val) {
        this.setValue(val, true);
    }
    /**
     * @param {?} _value
     * @return {?}
     */
    onValueChange(_value) { }
    /**
     * @return {?}
     */
    onTouched() { }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this.onValueChange = fn;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    setDisabledState(isDisabled) {
        this.nzDisabled = isDisabled;
        this.toggleDragDisabled(isDisabled);
    }
    /**
     * @private
     * @param {?} value
     * @param {?=} isWriteValue
     * @return {?}
     */
    setValue(value, isWriteValue = false) {
        if (isWriteValue) {
            this.value = this.formatValue(value);
            this.updateTrackAndHandles();
        }
        else if (!this.valuesEqual((/** @type {?} */ (this.value)), (/** @type {?} */ (value)))) {
            this.value = value;
            this.updateTrackAndHandles();
            this.onValueChange(this.getValue(true));
        }
    }
    /**
     * @private
     * @param {?=} cloneAndSort
     * @return {?}
     */
    getValue(cloneAndSort = false) {
        if (cloneAndSort && this.value && isValueARange(this.value)) {
            return shallowCopyArray(this.value).sort((/**
             * @param {?} a
             * @param {?} b
             * @return {?}
             */
            (a, b) => a - b));
        }
        return (/** @type {?} */ (this.value));
    }
    /**
     * Clone & sort current value and convert them to offsets, then return the new one.
     * @private
     * @param {?=} value
     * @return {?}
     */
    getValueToOffset(value) {
        /** @type {?} */
        let normalizedValue = value;
        if (typeof normalizedValue === 'undefined') {
            normalizedValue = this.getValue(true);
        }
        return isValueARange(normalizedValue)
            ? normalizedValue.map((/**
             * @param {?} val
             * @return {?}
             */
            val => this.valueToOffset(val)))
            : this.valueToOffset(normalizedValue);
    }
    /**
     * Find the closest value to be activated (only for range = true).
     * @private
     * @param {?} pointerValue
     * @return {?}
     */
    setActiveValueIndex(pointerValue) {
        /** @type {?} */
        const value = this.getValue();
        if (isValueARange(value)) {
            /** @type {?} */
            let minimal = null;
            /** @type {?} */
            let gap;
            /** @type {?} */
            let activeIndex = -1;
            value.forEach((/**
             * @param {?} val
             * @param {?} index
             * @return {?}
             */
            (val, index) => {
                gap = Math.abs(pointerValue - val);
                if (minimal === null || gap < (/** @type {?} */ (minimal))) {
                    minimal = gap;
                    activeIndex = index;
                }
            }));
            this.activeValueIndex = activeIndex;
        }
    }
    /**
     * @private
     * @param {?} pointerValue
     * @return {?}
     */
    setActiveValue(pointerValue) {
        if (isValueARange((/** @type {?} */ (this.value)))) {
            /** @type {?} */
            const newValue = shallowCopyArray((/** @type {?} */ (this.value)));
            newValue[(/** @type {?} */ (this.activeValueIndex))] = pointerValue;
            this.setValue(newValue);
        }
        else {
            this.setValue(pointerValue);
        }
    }
    /**
     * Update track and handles' position and length.
     * @private
     * @return {?}
     */
    updateTrackAndHandles() {
        /** @type {?} */
        const value = this.getValue();
        /** @type {?} */
        const offset = this.getValueToOffset(value);
        /** @type {?} */
        const valueSorted = this.getValue(true);
        /** @type {?} */
        const offsetSorted = this.getValueToOffset(valueSorted);
        /** @type {?} */
        const boundParts = isValueARange(valueSorted) ? valueSorted : [0, valueSorted];
        /** @type {?} */
        const trackParts = isValueARange(offsetSorted)
            ? [offsetSorted[0], offsetSorted[1] - offsetSorted[0]]
            : [0, offsetSorted];
        this.handles.forEach((/**
         * @param {?} handle
         * @param {?} index
         * @return {?}
         */
        (handle, index) => {
            handle.offset = isValueARange(offset) ? offset[index] : offset;
            handle.value = isValueARange(value) ? value[index] : value || 0;
        }));
        [this.bounds.lower, this.bounds.upper] = boundParts;
        [this.track.offset, this.track.length] = trackParts;
        this.cdr.markForCheck();
    }
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    onDragStart(value) {
        this.toggleDragMoving(true);
        this.cacheSliderProperty();
        this.setActiveValueIndex(value);
        this.setActiveValue(value);
        this.showHandleTooltip(this.nzRange ? this.activeValueIndex : 0);
    }
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    onDragMove(value) {
        this.setActiveValue(value);
        this.cdr.markForCheck();
    }
    /**
     * @private
     * @return {?}
     */
    onDragEnd() {
        this.nzOnAfterChange.emit(this.getValue(true));
        this.toggleDragMoving(false);
        this.cacheSliderProperty(true);
        this.hideAllHandleTooltip();
        this.cdr.markForCheck();
    }
    /**
     * Create user interactions handles.
     * @private
     * @return {?}
     */
    createDraggingObservables() {
        /** @type {?} */
        const sliderDOM = this.sliderDOM;
        /** @type {?} */
        const orientField = this.nzVertical ? 'pageY' : 'pageX';
        /** @type {?} */
        const mouse = {
            start: 'mousedown',
            move: 'mousemove',
            end: 'mouseup',
            pluckKey: [orientField]
        };
        /** @type {?} */
        const touch = {
            start: 'touchstart',
            move: 'touchmove',
            end: 'touchend',
            pluckKey: ['touches', '0', orientField],
            filter: (/**
             * @param {?} e
             * @return {?}
             */
            (e) => e instanceof TouchEvent)
        };
        [mouse, touch].forEach((/**
         * @param {?} source
         * @return {?}
         */
        source => {
            const { start, move, end, pluckKey, filter: filterFunc = (/**
             * @return {?}
             */
            () => true) } = source;
            source.startPlucked$ = fromEvent(sliderDOM, start).pipe(filter(filterFunc), tap(silentEvent), pluck(...pluckKey), map((/**
             * @param {?} position
             * @return {?}
             */
            (position) => this.findClosestValue(position))));
            source.end$ = fromEvent(document, end);
            source.moveResolved$ = fromEvent(document, move).pipe(filter(filterFunc), tap(silentEvent), pluck(...pluckKey), distinctUntilChanged(), map((/**
             * @param {?} position
             * @return {?}
             */
            (position) => this.findClosestValue(position))), distinctUntilChanged(), takeUntil(source.end$));
        }));
        this.dragStart$ = merge((/** @type {?} */ (mouse.startPlucked$)), (/** @type {?} */ (touch.startPlucked$)));
        this.dragMove$ = merge((/** @type {?} */ (mouse.moveResolved$)), (/** @type {?} */ (touch.moveResolved$)));
        this.dragEnd$ = merge((/** @type {?} */ (mouse.end$)), (/** @type {?} */ (touch.end$)));
    }
    /**
     * @private
     * @param {?=} periods
     * @return {?}
     */
    subscribeDrag(periods = ['start', 'move', 'end']) {
        if (periods.indexOf('start') !== -1 && this.dragStart$ && !this.dragStart_) {
            this.dragStart_ = this.dragStart$.subscribe(this.onDragStart.bind(this));
        }
        if (periods.indexOf('move') !== -1 && this.dragMove$ && !this.dragMove_) {
            this.dragMove_ = this.dragMove$.subscribe(this.onDragMove.bind(this));
        }
        if (periods.indexOf('end') !== -1 && this.dragEnd$ && !this.dragEnd_) {
            this.dragEnd_ = this.dragEnd$.subscribe(this.onDragEnd.bind(this));
        }
    }
    /**
     * @private
     * @param {?=} periods
     * @return {?}
     */
    unsubscribeDrag(periods = ['start', 'move', 'end']) {
        if (periods.indexOf('start') !== -1 && this.dragStart_) {
            this.dragStart_.unsubscribe();
            this.dragStart_ = null;
        }
        if (periods.indexOf('move') !== -1 && this.dragMove_) {
            this.dragMove_.unsubscribe();
            this.dragMove_ = null;
        }
        if (periods.indexOf('end') !== -1 && this.dragEnd_) {
            this.dragEnd_.unsubscribe();
            this.dragEnd_ = null;
        }
    }
    /**
     * @private
     * @param {?} movable
     * @return {?}
     */
    toggleDragMoving(movable) {
        /** @type {?} */
        const periods = ['move', 'end'];
        if (movable) {
            this.isDragging = true;
            this.subscribeDrag(periods);
        }
        else {
            this.isDragging = false;
            this.unsubscribeDrag(periods);
        }
    }
    /**
     * @private
     * @param {?} disabled
     * @return {?}
     */
    toggleDragDisabled(disabled) {
        if (disabled) {
            this.unsubscribeDrag();
        }
        else {
            this.subscribeDrag(['start']);
        }
    }
    /**
     * @private
     * @param {?} position
     * @return {?}
     */
    findClosestValue(position) {
        /** @type {?} */
        const sliderStart = this.getSliderStartPosition();
        /** @type {?} */
        const sliderLength = this.getSliderLength();
        /** @type {?} */
        const ratio = ensureNumberInRange((position - sliderStart) / sliderLength, 0, 1);
        /** @type {?} */
        const val = (this.nzMax - this.nzMin) * (this.nzVertical ? 1 - ratio : ratio) + this.nzMin;
        /** @type {?} */
        const points = this.nzMarks === null ? [] : Object.keys(this.nzMarks).map(parseFloat);
        if (this.nzStep !== null && !this.nzDots) {
            /** @type {?} */
            const closestOne = Math.round(val / this.nzStep) * this.nzStep;
            points.push(closestOne);
        }
        /** @type {?} */
        const gaps = points.map((/**
         * @param {?} point
         * @return {?}
         */
        point => Math.abs(val - point)));
        /** @type {?} */
        const closest = points[gaps.indexOf(Math.min(...gaps))];
        return this.nzStep === null ? closest : parseFloat(closest.toFixed(getPrecision(this.nzStep)));
    }
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    valueToOffset(value) {
        return getPercent(this.nzMin, this.nzMax, value);
    }
    /**
     * @private
     * @return {?}
     */
    getSliderStartPosition() {
        if (this.cacheSliderStart !== null) {
            return this.cacheSliderStart;
        }
        /** @type {?} */
        const offset = getElementOffset(this.sliderDOM);
        return this.nzVertical ? offset.top : offset.left;
    }
    /**
     * @private
     * @return {?}
     */
    getSliderLength() {
        if (this.cacheSliderLength !== null) {
            return this.cacheSliderLength;
        }
        /** @type {?} */
        const sliderDOM = this.sliderDOM;
        return this.nzVertical ? sliderDOM.clientHeight : sliderDOM.clientWidth;
    }
    /**
     * Cache DOM layout/reflow operations for performance (may not necessary?)
     * @private
     * @param {?=} remove
     * @return {?}
     */
    cacheSliderProperty(remove = false) {
        this.cacheSliderStart = remove ? null : this.getSliderStartPosition();
        this.cacheSliderLength = remove ? null : this.getSliderLength();
    }
    /**
     * @private
     * @param {?} value
     * @return {?}
     */
    formatValue(value) {
        /** @type {?} */
        let res = value;
        if (!this.assertValueValid((/** @type {?} */ (value)))) {
            res = this.nzDefaultValue === null ? (this.nzRange ? [this.nzMin, this.nzMax] : this.nzMin) : this.nzDefaultValue;
        }
        else {
            res = isValueARange((/** @type {?} */ (value)))
                ? ((/** @type {?} */ (value))).map((/**
                 * @param {?} val
                 * @return {?}
                 */
                val => ensureNumberInRange(val, this.nzMin, this.nzMax)))
                : ensureNumberInRange((/** @type {?} */ (value)), this.nzMin, this.nzMax);
        }
        return res;
    }
    /**
     * Check if value is valid and throw error if value-type/range not match.
     * @private
     * @param {?} value
     * @return {?}
     */
    assertValueValid(value) {
        if (!Array.isArray(value) && isNaN(typeof value !== 'number' ? parseFloat(value) : value)) {
            return false;
        }
        return this.assertValueTypeMatch(value);
    }
    /**
     * Assert that if `this.nzRange` is `true`, value is also a range, vice versa.
     * @private
     * @param {?} value
     * @return {?}
     */
    assertValueTypeMatch(value) {
        if (!value) {
            return true;
        }
        else if (isValueARange(value) !== this.nzRange) {
            throw getValueTypeNotMatchError();
        }
        else {
            return true;
        }
    }
    /**
     * @private
     * @param {?} valA
     * @param {?} valB
     * @return {?}
     */
    valuesEqual(valA, valB) {
        if (typeof valA !== typeof valB) {
            return false;
        }
        return isValueARange(valA) && isValueARange(valB) ? arraysEqual(valA, valB) : valA === valB;
    }
    /**
     * Show one handle's tooltip and hide others'.
     * @private
     * @param {?=} handleIndex
     * @return {?}
     */
    showHandleTooltip(handleIndex = 0) {
        this.handles.forEach((/**
         * @param {?} handle
         * @param {?} index
         * @return {?}
         */
        (handle, index) => {
            handle.active = index === handleIndex;
        }));
    }
    /**
     * @private
     * @return {?}
     */
    hideAllHandleTooltip() {
        this.handles.forEach((/**
         * @param {?} handle
         * @return {?}
         */
        handle => (handle.active = false)));
    }
    /**
     * @private
     * @param {?} amount
     * @return {?}
     */
    generateHandles(amount) {
        return Array(amount)
            .fill(0)
            .map((/**
         * @return {?}
         */
        () => ({ offset: null, value: null, active: false })));
    }
    /**
     * @private
     * @param {?} marks
     * @return {?}
     */
    generateMarkItems(marks) {
        /** @type {?} */
        const marksArray = [];
        for (const key in marks) {
            /** @type {?} */
            const mark = marks[key];
            /** @type {?} */
            const val = typeof key === 'number' ? key : parseFloat(key);
            if (val >= this.nzMin && val <= this.nzMax) {
                marksArray.push({ value: val, offset: this.valueToOffset(val), config: mark });
            }
        }
        return marksArray.length ? marksArray : null;
    }
}
NzSliderComponent.decorators = [
    { type: Component, args: [{
                changeDetection: ChangeDetectionStrategy.OnPush,
                encapsulation: ViewEncapsulation.None,
                selector: 'nz-slider',
                exportAs: 'nzSlider',
                preserveWhitespaces: false,
                providers: [
                    {
                        provide: NG_VALUE_ACCESSOR,
                        useExisting: forwardRef((/**
                         * @return {?}
                         */
                        () => NzSliderComponent)),
                        multi: true
                    }
                ],
                template: "<div #slider\r\n  class=\"ant-slider\"\r\n  [class.ant-slider-disabled]=\"nzDisabled\"\r\n  [class.ant-slider-vertical]=\"nzVertical\"\r\n  [class.ant-slider-with-marks]=\"marksArray\">\r\n  <div class=\"ant-slider-rail\"></div>\r\n  <nz-slider-track\r\n    [nzVertical]=\"nzVertical\"\r\n    [nzIncluded]=\"nzIncluded\"\r\n    [nzOffset]=\"track.offset\"\r\n    [nzLength]=\"track.length\"></nz-slider-track>\r\n  <nz-slider-step\r\n    *ngIf=\"marksArray\"\r\n    [nzVertical]=\"nzVertical\"\r\n    [nzLowerBound]=\"bounds.lower\"\r\n    [nzUpperBound]=\"bounds.upper\"\r\n    [nzMarksArray]=\"marksArray\"\r\n    [nzIncluded]=\"nzIncluded\"></nz-slider-step>\r\n  <nz-slider-handle\r\n    *ngFor=\"let handle of handles\"\r\n    [nzVertical]=\"nzVertical\"\r\n    [nzOffset]=\"handle.offset\"\r\n    [nzValue]=\"handle.value\"\r\n    [nzActive]=\"handle.active\"\r\n    [nzTipFormatter]=\"nzTipFormatter\"\r\n    [nzTooltipVisible]=\"nzTooltipVisible\"></nz-slider-handle>\r\n  <nz-slider-marks \r\n    *ngIf=\"marksArray\"\r\n    [nzVertical]=\"nzVertical\"\r\n    [nzMin]=\"nzMin\"\r\n    [nzMax]=\"nzMax\"\r\n    [nzLowerBound]=\"bounds.lower\"\r\n    [nzUpperBound]=\"bounds.upper\"\r\n    [nzMarksArray]=\"marksArray\"\r\n    [nzIncluded]=\"nzIncluded\"></nz-slider-marks>\r\n</div>"
            }] }
];
/** @nocollapse */
NzSliderComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: Platform }
];
NzSliderComponent.propDecorators = {
    slider: [{ type: ViewChild, args: ['slider',] }],
    nzDisabled: [{ type: Input }],
    nzDots: [{ type: Input }],
    nzIncluded: [{ type: Input }],
    nzRange: [{ type: Input }],
    nzVertical: [{ type: Input }],
    nzDefaultValue: [{ type: Input }],
    nzMarks: [{ type: Input }],
    nzMax: [{ type: Input }],
    nzMin: [{ type: Input }],
    nzStep: [{ type: Input }],
    nzTooltipVisible: [{ type: Input }],
    nzTipFormatter: [{ type: Input }],
    nzOnAfterChange: [{ type: Output }]
};
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], NzSliderComponent.prototype, "nzDisabled", void 0);
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Boolean)
], NzSliderComponent.prototype, "nzDots", void 0);
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Boolean)
], NzSliderComponent.prototype, "nzIncluded", void 0);
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Boolean)
], NzSliderComponent.prototype, "nzRange", void 0);
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Boolean)
], NzSliderComponent.prototype, "nzVertical", void 0);
if (false) {
    /** @type {?} */
    NzSliderComponent.prototype.slider;
    /** @type {?} */
    NzSliderComponent.prototype.nzDisabled;
    /** @type {?} */
    NzSliderComponent.prototype.nzDots;
    /** @type {?} */
    NzSliderComponent.prototype.nzIncluded;
    /** @type {?} */
    NzSliderComponent.prototype.nzRange;
    /** @type {?} */
    NzSliderComponent.prototype.nzVertical;
    /** @type {?} */
    NzSliderComponent.prototype.nzDefaultValue;
    /** @type {?} */
    NzSliderComponent.prototype.nzMarks;
    /** @type {?} */
    NzSliderComponent.prototype.nzMax;
    /** @type {?} */
    NzSliderComponent.prototype.nzMin;
    /** @type {?} */
    NzSliderComponent.prototype.nzStep;
    /** @type {?} */
    NzSliderComponent.prototype.nzTooltipVisible;
    /** @type {?} */
    NzSliderComponent.prototype.nzTipFormatter;
    /** @type {?} */
    NzSliderComponent.prototype.nzOnAfterChange;
    /** @type {?} */
    NzSliderComponent.prototype.value;
    /** @type {?} */
    NzSliderComponent.prototype.sliderDOM;
    /** @type {?} */
    NzSliderComponent.prototype.cacheSliderStart;
    /** @type {?} */
    NzSliderComponent.prototype.cacheSliderLength;
    /** @type {?} */
    NzSliderComponent.prototype.activeValueIndex;
    /** @type {?} */
    NzSliderComponent.prototype.track;
    /** @type {?} */
    NzSliderComponent.prototype.handles;
    /** @type {?} */
    NzSliderComponent.prototype.marksArray;
    /** @type {?} */
    NzSliderComponent.prototype.bounds;
    /** @type {?} */
    NzSliderComponent.prototype.isDragging;
    /**
     * @type {?}
     * @private
     */
    NzSliderComponent.prototype.dragStart$;
    /**
     * @type {?}
     * @private
     */
    NzSliderComponent.prototype.dragMove$;
    /**
     * @type {?}
     * @private
     */
    NzSliderComponent.prototype.dragEnd$;
    /**
     * @type {?}
     * @private
     */
    NzSliderComponent.prototype.dragStart_;
    /**
     * @type {?}
     * @private
     */
    NzSliderComponent.prototype.dragMove_;
    /**
     * @type {?}
     * @private
     */
    NzSliderComponent.prototype.dragEnd_;
    /**
     * @type {?}
     * @private
     */
    NzSliderComponent.prototype.cdr;
    /**
     * @type {?}
     * @private
     */
    NzSliderComponent.prototype.platform;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotc2xpZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvc2xpZGVyLyIsInNvdXJjZXMiOlsibnotc2xpZGVyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDakQsT0FBTyxFQUNMLFVBQVUsRUFDVix1QkFBdUIsRUFDdkIsaUJBQWlCLEVBQ2pCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsWUFBWSxFQUNaLEtBQUssRUFJTCxNQUFNLEVBRU4sU0FBUyxFQUNULGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQXdCLGlCQUFpQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDekUsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQTRCLE1BQU0sTUFBTSxDQUFDO0FBQ2xFLE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFMUYsT0FBTyxFQUNMLFdBQVcsRUFDWCxtQkFBbUIsRUFDbkIsZ0JBQWdCLEVBQ2hCLFVBQVUsRUFDVixZQUFZLEVBQ1osZ0JBQWdCLEVBQ2hCLFdBQVcsRUFDWCxZQUFZLEVBRWIsTUFBTSxvQkFBb0IsQ0FBQztBQUU1QixPQUFPLEVBQ0wsYUFBYSxFQU1kLE1BQU0seUJBQXlCLENBQUM7QUFDakMsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFpQjlELE1BQU0sT0FBTyxpQkFBaUI7Ozs7O0lBb0M1QixZQUFvQixHQUFzQixFQUFVLFFBQWtCO1FBQWxELFFBQUcsR0FBSCxHQUFHLENBQW1CO1FBQVUsYUFBUSxHQUFSLFFBQVEsQ0FBVTtRQWpDN0MsZUFBVSxHQUFHLEtBQUssQ0FBQztRQUNuQixXQUFNLEdBQVksS0FB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QzFDOzs7O1lBckRDLGlCQUFpQjtZQUpWLFFBQVE7OztxQkEyRGQsU0FBUyxTQUFDLFFBQVE7eUJBRWxCLEtBQUs7cUJBQ0wsS0FBSzt5QkFDTCxLQUFLO3NCQUNMLEtBQUs7eUJBQ0wsS0FBSzs2QkFDTCxLQUFLO3NCQUNMLEtBQUs7b0JBQ0wsS0FBSztvQkFDTCxLQUFLO3FCQUNMLEtBQUs7K0JBQ0wsS0FBSzs2QkFDTCxLQUFLOzhCQUVMLE1BQU07O0FBYmtCO0lBQWYsWUFBWSxFQUFFOztxREFBb0I7QUFDbkI7SUFBZixZQUFZLEVBQUU7O2lEQUF5QjtBQUN4QjtJQUFmLFlBQVksRUFBRTs7cURBQTRCO0FBQzNCO0lBQWYsWUFBWSxFQUFFOztrREFBMEI7QUFDekI7SUFBZixZQUFZLEVBQUU7O3FEQUE2Qjs7O0lBTnJELG1DQUF3Qzs7SUFFeEMsdUNBQTRDOztJQUM1QyxtQ0FBaUQ7O0lBQ2pELHVDQUFvRDs7SUFDcEQsb0NBQWtEOztJQUNsRCx1Q0FBcUQ7O0lBQ3JELDJDQUFtRDs7SUFDbkQsb0NBQXNDOztJQUN0QyxrQ0FBcUI7O0lBQ3JCLGtDQUFtQjs7SUFDbkIsbUNBQW9COztJQUNwQiw2Q0FBeUQ7O0lBQ3pELDJDQUFtRDs7SUFFbkQsNENBQXFFOztJQUVyRSxrQ0FBaUM7O0lBQ2pDLHNDQUEwQjs7SUFDMUIsNkNBQXVDOztJQUN2Qyw4Q0FBd0M7O0lBQ3hDLDZDQUFpRDs7SUFDakQsa0NBQXlGOztJQUN6RixvQ0FBeUI7O0lBQ3pCLHVDQUFrQzs7SUFDbEMsbUNBQWdHOztJQUNoRyx1Q0FBbUI7Ozs7O0lBRW5CLHVDQUF1Qzs7Ozs7SUFDdkMsc0NBQXNDOzs7OztJQUN0QyxxQ0FBb0M7Ozs7O0lBQ3BDLHVDQUF3Qzs7Ozs7SUFDeEMsc0NBQXVDOzs7OztJQUN2QyxxQ0FBc0M7Ozs7O0lBRTFCLGdDQUE4Qjs7Ozs7SUFBRSxxQ0FBMEIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuXHJcbmltcG9ydCB7IFBsYXRmb3JtIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BsYXRmb3JtJztcclxuaW1wb3J0IHtcclxuICBmb3J3YXJkUmVmLFxyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIENoYW5nZURldGVjdG9yUmVmLFxyXG4gIENvbXBvbmVudCxcclxuICBFbGVtZW50UmVmLFxyXG4gIEV2ZW50RW1pdHRlcixcclxuICBJbnB1dCxcclxuICBPbkNoYW5nZXMsXHJcbiAgT25EZXN0cm95LFxyXG4gIE9uSW5pdCxcclxuICBPdXRwdXQsXHJcbiAgU2ltcGxlQ2hhbmdlcyxcclxuICBWaWV3Q2hpbGQsXHJcbiAgVmlld0VuY2Fwc3VsYXRpb25cclxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE5HX1ZBTFVFX0FDQ0VTU09SIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBmcm9tRXZlbnQsIG1lcmdlLCBPYnNlcnZhYmxlLCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgZGlzdGluY3RVbnRpbENoYW5nZWQsIGZpbHRlciwgbWFwLCBwbHVjaywgdGFrZVVudGlsLCB0YXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcblxyXG5pbXBvcnQge1xyXG4gIGFycmF5c0VxdWFsLFxyXG4gIGVuc3VyZU51bWJlckluUmFuZ2UsXHJcbiAgZ2V0RWxlbWVudE9mZnNldCxcclxuICBnZXRQZXJjZW50LFxyXG4gIGdldFByZWNpc2lvbixcclxuICBzaGFsbG93Q29weUFycmF5LFxyXG4gIHNpbGVudEV2ZW50LFxyXG4gIElucHV0Qm9vbGVhbixcclxuICBNb3VzZVRvdWNoT2JzZXJ2ZXJDb25maWdcclxufSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xyXG5cclxuaW1wb3J0IHtcclxuICBpc1ZhbHVlQVJhbmdlLFxyXG4gIEV4dGVuZGVkTWFyayxcclxuICBNYXJrcyxcclxuICBTbGlkZXJIYW5kbGVyLFxyXG4gIFNsaWRlclNob3dUb29sdGlwLFxyXG4gIFNsaWRlclZhbHVlXHJcbn0gZnJvbSAnLi9uei1zbGlkZXItZGVmaW5pdGlvbnMnO1xyXG5pbXBvcnQgeyBnZXRWYWx1ZVR5cGVOb3RNYXRjaEVycm9yIH0gZnJvbSAnLi9uei1zbGlkZXItZXJyb3InO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxuICBzZWxlY3RvcjogJ256LXNsaWRlcicsXHJcbiAgZXhwb3J0QXM6ICduelNsaWRlcicsXHJcbiAgcHJlc2VydmVXaGl0ZXNwYWNlczogZmFsc2UsXHJcbiAgcHJvdmlkZXJzOiBbXHJcbiAgICB7XHJcbiAgICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxyXG4gICAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBOelNsaWRlckNvbXBvbmVudCksXHJcbiAgICAgIG11bHRpOiB0cnVlXHJcbiAgICB9XHJcbiAgXSxcclxuICB0ZW1wbGF0ZVVybDogJy4vbnotc2xpZGVyLmNvbXBvbmVudC5odG1sJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgTnpTbGlkZXJDb21wb25lbnQgaW1wbGVtZW50cyBDb250cm9sVmFsdWVBY2Nlc3NvciwgT25Jbml0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSB7XHJcbiAgQFZpZXdDaGlsZCgnc2xpZGVyJykgc2xpZGVyOiBFbGVtZW50UmVmO1xyXG5cclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpEaXNhYmxlZCA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIEBJbnB1dEJvb2xlYW4oKSBuekRvdHM6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpJbmNsdWRlZDogYm9vbGVhbiA9IHRydWU7XHJcbiAgQElucHV0KCkgQElucHV0Qm9vbGVhbigpIG56UmFuZ2U6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpWZXJ0aWNhbDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIG56RGVmYXVsdFZhbHVlOiBTbGlkZXJWYWx1ZSB8IG51bGwgPSBudWxsO1xyXG4gIEBJbnB1dCgpIG56TWFya3M6IE1hcmtzIHwgbnVsbCA9IG51bGw7XHJcbiAgQElucHV0KCkgbnpNYXggPSAxMDA7XHJcbiAgQElucHV0KCkgbnpNaW4gPSAwO1xyXG4gIEBJbnB1dCgpIG56U3RlcCA9IDE7XHJcbiAgQElucHV0KCkgbnpUb29sdGlwVmlzaWJsZTogU2xpZGVyU2hvd1Rvb2x0aXAgPSAnZGVmYXVsdCc7XHJcbiAgQElucHV0KCkgbnpUaXBGb3JtYXR0ZXI6ICh2YWx1ZTogbnVtYmVyKSA9PiBzdHJpbmc7XHJcblxyXG4gIEBPdXRwdXQoKSByZWFkb25seSBuek9uQWZ0ZXJDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPFNsaWRlclZhbHVlPigpO1xyXG5cclxuICB2YWx1ZTogU2xpZGVyVmFsdWUgfCBudWxsID0gbnVsbDtcclxuICBzbGlkZXJET006IEhUTUxEaXZFbGVtZW50O1xyXG4gIGNhY2hlU2xpZGVyU3RhcnQ6IG51bWJlciB8IG51bGwgPSBudWxsO1xyXG4gIGNhY2hlU2xpZGVyTGVuZ3RoOiBudW1iZXIgfCBudWxsID0gbnVsbDtcclxuICBhY3RpdmVWYWx1ZUluZGV4OiBudW1iZXIgfCB1bmRlZmluZWQgPSB1bmRlZmluZWQ7IC8vIEN1cnJlbnQgYWN0aXZhdGVkIGhhbmRsZSdzIGluZGV4IE9OTFkgZm9yIHJhbmdlPXRydWVcclxuICB0cmFjazogeyBvZmZzZXQ6IG51bGwgfCBudW1iZXI7IGxlbmd0aDogbnVsbCB8IG51bWJlciB9ID0geyBvZmZzZXQ6IG51bGwsIGxlbmd0aDogbnVsbCB9OyAvLyBUcmFjaydzIG9mZnNldCBhbmQgbGVuZ3RoXHJcbiAgaGFuZGxlczogU2xpZGVySGFuZGxlcltdOyAvLyBIYW5kbGVzJyBvZmZzZXRcclxuICBtYXJrc0FycmF5OiBFeHRlbmRlZE1hcmtbXSB8IG51bGw7IC8vIFwic3RlcHNcIiBpbiBhcnJheSB0eXBlIHdpdGggbW9yZSBkYXRhICYgRklMVEVSIG91dCB0aGUgaW52YWxpZCBtYXJrXHJcbiAgYm91bmRzOiB7IGxvd2VyOiBTbGlkZXJWYWx1ZSB8IG51bGw7IHVwcGVyOiBTbGlkZXJWYWx1ZSB8IG51bGwgfSA9IHsgbG93ZXI6IG51bGwsIHVwcGVyOiBudWxsIH07IC8vIG5vdyBmb3Igbnotc2xpZGVyLXN0ZXBcclxuICBpc0RyYWdnaW5nID0gZmFsc2U7IC8vIEN1cnJlbnQgZHJhZ2dpbmcgc3RhdGVcclxuXHJcbiAgcHJpdmF0ZSBkcmFnU3RhcnQkOiBPYnNlcnZhYmxlPG51bWJlcj47XHJcbiAgcHJpdmF0ZSBkcmFnTW92ZSQ6IE9ic2VydmFibGU8bnVtYmVyPjtcclxuICBwcml2YXRlIGRyYWdFbmQkOiBPYnNlcnZhYmxlPEV2ZW50PjtcclxuICBwcml2YXRlIGRyYWdTdGFydF86IFN1YnNjcmlwdGlvbiB8IG51bGw7XHJcbiAgcHJpdmF0ZSBkcmFnTW92ZV86IFN1YnNjcmlwdGlvbiB8IG51bGw7XHJcbiAgcHJpdmF0ZSBkcmFnRW5kXzogU3Vic2NyaXB0aW9uIHwgbnVsbDtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmLCBwcml2YXRlIHBsYXRmb3JtOiBQbGF0Zm9ybSkge31cclxuXHJcbiAgbmdPbkluaXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLmhhbmRsZXMgPSB0aGlzLmdlbmVyYXRlSGFuZGxlcyh0aGlzLm56UmFuZ2UgPyAyIDogMSk7XHJcbiAgICB0aGlzLnNsaWRlckRPTSA9IHRoaXMuc2xpZGVyLm5hdGl2ZUVsZW1lbnQ7XHJcbiAgICB0aGlzLm1hcmtzQXJyYXkgPSB0aGlzLm56TWFya3MgPyB0aGlzLmdlbmVyYXRlTWFya0l0ZW1zKHRoaXMubnpNYXJrcykgOiBudWxsO1xyXG4gICAgaWYgKHRoaXMucGxhdGZvcm0uaXNCcm93c2VyKSB7XHJcbiAgICAgIHRoaXMuY3JlYXRlRHJhZ2dpbmdPYnNlcnZhYmxlcygpO1xyXG4gICAgfVxyXG4gICAgdGhpcy50b2dnbGVEcmFnRGlzYWJsZWQodGhpcy5uekRpc2FibGVkKTtcclxuXHJcbiAgICBpZiAodGhpcy5nZXRWYWx1ZSgpID09PSBudWxsKSB7XHJcbiAgICAgIHRoaXMuc2V0VmFsdWUodGhpcy5mb3JtYXRWYWx1ZShudWxsKSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XHJcbiAgICBjb25zdCB7IG56RGlzYWJsZWQsIG56TWFya3MsIG56UmFuZ2UgfSA9IGNoYW5nZXM7XHJcblxyXG4gICAgaWYgKG56RGlzYWJsZWQgJiYgIW56RGlzYWJsZWQuZmlyc3RDaGFuZ2UpIHtcclxuICAgICAgdGhpcy50b2dnbGVEcmFnRGlzYWJsZWQobnpEaXNhYmxlZC5jdXJyZW50VmFsdWUpO1xyXG4gICAgfSBlbHNlIGlmIChuek1hcmtzICYmICFuek1hcmtzLmZpcnN0Q2hhbmdlKSB7XHJcbiAgICAgIHRoaXMubWFya3NBcnJheSA9IHRoaXMubnpNYXJrcyA/IHRoaXMuZ2VuZXJhdGVNYXJrSXRlbXModGhpcy5uek1hcmtzKSA6IG51bGw7XHJcbiAgICB9IGVsc2UgaWYgKG56UmFuZ2UgJiYgIW56UmFuZ2UuZmlyc3RDaGFuZ2UpIHtcclxuICAgICAgdGhpcy5zZXRWYWx1ZSh0aGlzLmZvcm1hdFZhbHVlKG51bGwpKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgdGhpcy51bnN1YnNjcmliZURyYWcoKTtcclxuICB9XHJcblxyXG4gIHdyaXRlVmFsdWUodmFsOiBTbGlkZXJWYWx1ZSB8IG51bGwpOiB2b2lkIHtcclxuICAgIHRoaXMuc2V0VmFsdWUodmFsLCB0cnVlKTtcclxuICB9XHJcblxyXG4gIG9uVmFsdWVDaGFuZ2UoX3ZhbHVlOiBTbGlkZXJWYWx1ZSk6IHZvaWQge31cclxuXHJcbiAgb25Ub3VjaGVkKCk6IHZvaWQge31cclxuXHJcbiAgcmVnaXN0ZXJPbkNoYW5nZShmbjogKHZhbHVlOiBTbGlkZXJWYWx1ZSkgPT4gdm9pZCk6IHZvaWQge1xyXG4gICAgdGhpcy5vblZhbHVlQ2hhbmdlID0gZm47XHJcbiAgfVxyXG5cclxuICByZWdpc3Rlck9uVG91Y2hlZChmbjogKCkgPT4gdm9pZCk6IHZvaWQge1xyXG4gICAgdGhpcy5vblRvdWNoZWQgPSBmbjtcclxuICB9XHJcblxyXG4gIHNldERpc2FibGVkU3RhdGUoaXNEaXNhYmxlZDogYm9vbGVhbik6IHZvaWQge1xyXG4gICAgdGhpcy5uekRpc2FibGVkID0gaXNEaXNhYmxlZDtcclxuICAgIHRoaXMudG9nZ2xlRHJhZ0Rpc2FibGVkKGlzRGlzYWJsZWQpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzZXRWYWx1ZSh2YWx1ZTogU2xpZGVyVmFsdWUgfCBudWxsLCBpc1dyaXRlVmFsdWU6IGJvb2xlYW4gPSBmYWxzZSk6IHZvaWQge1xyXG4gICAgaWYgKGlzV3JpdGVWYWx1ZSkge1xyXG4gICAgICB0aGlzLnZhbHVlID0gdGhpcy5mb3JtYXRWYWx1ZSh2YWx1ZSk7XHJcbiAgICAgIHRoaXMudXBkYXRlVHJhY2tBbmRIYW5kbGVzKCk7XHJcbiAgICB9IGVsc2UgaWYgKCF0aGlzLnZhbHVlc0VxdWFsKHRoaXMudmFsdWUhLCB2YWx1ZSEpKSB7XHJcbiAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcclxuICAgICAgdGhpcy51cGRhdGVUcmFja0FuZEhhbmRsZXMoKTtcclxuICAgICAgdGhpcy5vblZhbHVlQ2hhbmdlKHRoaXMuZ2V0VmFsdWUodHJ1ZSkpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXRWYWx1ZShjbG9uZUFuZFNvcnQ6IGJvb2xlYW4gPSBmYWxzZSk6IFNsaWRlclZhbHVlIHtcclxuICAgIGlmIChjbG9uZUFuZFNvcnQgJiYgdGhpcy52YWx1ZSAmJiBpc1ZhbHVlQVJhbmdlKHRoaXMudmFsdWUpKSB7XHJcbiAgICAgIHJldHVybiBzaGFsbG93Q29weUFycmF5KHRoaXMudmFsdWUpLnNvcnQoKGEsIGIpID0+IGEgLSBiKTtcclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzLnZhbHVlITtcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENsb25lICYgc29ydCBjdXJyZW50IHZhbHVlIGFuZCBjb252ZXJ0IHRoZW0gdG8gb2Zmc2V0cywgdGhlbiByZXR1cm4gdGhlIG5ldyBvbmUuXHJcbiAgICovXHJcbiAgcHJpdmF0ZSBnZXRWYWx1ZVRvT2Zmc2V0KHZhbHVlPzogU2xpZGVyVmFsdWUpOiBTbGlkZXJWYWx1ZSB7XHJcbiAgICBsZXQgbm9ybWFsaXplZFZhbHVlID0gdmFsdWU7XHJcblxyXG4gICAgaWYgKHR5cGVvZiBub3JtYWxpemVkVmFsdWUgPT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgIG5vcm1hbGl6ZWRWYWx1ZSA9IHRoaXMuZ2V0VmFsdWUodHJ1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGlzVmFsdWVBUmFuZ2Uobm9ybWFsaXplZFZhbHVlKVxyXG4gICAgICA/IG5vcm1hbGl6ZWRWYWx1ZS5tYXAodmFsID0+IHRoaXMudmFsdWVUb09mZnNldCh2YWwpKVxyXG4gICAgICA6IHRoaXMudmFsdWVUb09mZnNldChub3JtYWxpemVkVmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogRmluZCB0aGUgY2xvc2VzdCB2YWx1ZSB0byBiZSBhY3RpdmF0ZWQgKG9ubHkgZm9yIHJhbmdlID0gdHJ1ZSkuXHJcbiAgICovXHJcbiAgcHJpdmF0ZSBzZXRBY3RpdmVWYWx1ZUluZGV4KHBvaW50ZXJWYWx1ZTogbnVtYmVyKTogdm9pZCB7XHJcbiAgICBjb25zdCB2YWx1ZSA9IHRoaXMuZ2V0VmFsdWUoKTtcclxuICAgIGlmIChpc1ZhbHVlQVJhbmdlKHZhbHVlKSkge1xyXG4gICAgICBsZXQgbWluaW1hbDogbnVtYmVyIHwgbnVsbCA9IG51bGw7XHJcbiAgICAgIGxldCBnYXA6IG51bWJlcjtcclxuICAgICAgbGV0IGFjdGl2ZUluZGV4ID0gLTE7XHJcbiAgICAgIHZhbHVlLmZvckVhY2goKHZhbCwgaW5kZXgpID0+IHtcclxuICAgICAgICBnYXAgPSBNYXRoLmFicyhwb2ludGVyVmFsdWUgLSB2YWwpO1xyXG4gICAgICAgIGlmIChtaW5pbWFsID09PSBudWxsIHx8IGdhcCA8IG1pbmltYWwhKSB7XHJcbiAgICAgICAgICBtaW5pbWFsID0gZ2FwO1xyXG4gICAgICAgICAgYWN0aXZlSW5kZXggPSBpbmRleDtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgICB0aGlzLmFjdGl2ZVZhbHVlSW5kZXggPSBhY3RpdmVJbmRleDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2V0QWN0aXZlVmFsdWUocG9pbnRlclZhbHVlOiBudW1iZXIpOiB2b2lkIHtcclxuICAgIGlmIChpc1ZhbHVlQVJhbmdlKHRoaXMudmFsdWUhKSkge1xyXG4gICAgICBjb25zdCBuZXdWYWx1ZSA9IHNoYWxsb3dDb3B5QXJyYXkodGhpcy52YWx1ZSBhcyBudW1iZXJbXSk7XHJcbiAgICAgIG5ld1ZhbHVlW3RoaXMuYWN0aXZlVmFsdWVJbmRleCFdID0gcG9pbnRlclZhbHVlO1xyXG4gICAgICB0aGlzLnNldFZhbHVlKG5ld1ZhbHVlKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuc2V0VmFsdWUocG9pbnRlclZhbHVlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIFVwZGF0ZSB0cmFjayBhbmQgaGFuZGxlcycgcG9zaXRpb24gYW5kIGxlbmd0aC5cclxuICAgKi9cclxuICBwcml2YXRlIHVwZGF0ZVRyYWNrQW5kSGFuZGxlcygpOiB2b2lkIHtcclxuICAgIGNvbnN0IHZhbHVlID0gdGhpcy5nZXRWYWx1ZSgpO1xyXG4gICAgY29uc3Qgb2Zmc2V0ID0gdGhpcy5nZXRWYWx1ZVRvT2Zmc2V0KHZhbHVlKTtcclxuICAgIGNvbnN0IHZhbHVlU29ydGVkID0gdGhpcy5nZXRWYWx1ZSh0cnVlKTtcclxuICAgIGNvbnN0IG9mZnNldFNvcnRlZCA9IHRoaXMuZ2V0VmFsdWVUb09mZnNldCh2YWx1ZVNvcnRlZCk7XHJcbiAgICBjb25zdCBib3VuZFBhcnRzID0gaXNWYWx1ZUFSYW5nZSh2YWx1ZVNvcnRlZCkgPyB2YWx1ZVNvcnRlZCA6IFswLCB2YWx1ZVNvcnRlZF07XHJcbiAgICBjb25zdCB0cmFja1BhcnRzID0gaXNWYWx1ZUFSYW5nZShvZmZzZXRTb3J0ZWQpXHJcbiAgICAgID8gW29mZnNldFNvcnRlZFswXSwgb2Zmc2V0U29ydGVkWzFdIC0gb2Zmc2V0U29ydGVkWzBdXVxyXG4gICAgICA6IFswLCBvZmZzZXRTb3J0ZWRdO1xyXG5cclxuICAgIHRoaXMuaGFuZGxlcy5mb3JFYWNoKChoYW5kbGUsIGluZGV4KSA9PiB7XHJcbiAgICAgIGhhbmRsZS5vZmZzZXQgPSBpc1ZhbHVlQVJhbmdlKG9mZnNldCkgPyBvZmZzZXRbaW5kZXhdIDogb2Zmc2V0O1xyXG4gICAgICBoYW5kbGUudmFsdWUgPSBpc1ZhbHVlQVJhbmdlKHZhbHVlKSA/IHZhbHVlW2luZGV4XSA6IHZhbHVlIHx8IDA7XHJcbiAgICB9KTtcclxuXHJcbiAgICBbdGhpcy5ib3VuZHMubG93ZXIsIHRoaXMuYm91bmRzLnVwcGVyXSA9IGJvdW5kUGFydHM7XHJcbiAgICBbdGhpcy50cmFjay5vZmZzZXQsIHRoaXMudHJhY2subGVuZ3RoXSA9IHRyYWNrUGFydHM7XHJcblxyXG4gICAgdGhpcy5jZHIubWFya0ZvckNoZWNrKCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIG9uRHJhZ1N0YXJ0KHZhbHVlOiBudW1iZXIpOiB2b2lkIHtcclxuICAgIHRoaXMudG9nZ2xlRHJhZ01vdmluZyh0cnVlKTtcclxuICAgIHRoaXMuY2FjaGVTbGlkZXJQcm9wZXJ0eSgpO1xyXG4gICAgdGhpcy5zZXRBY3RpdmVWYWx1ZUluZGV4KHZhbHVlKTtcclxuICAgIHRoaXMuc2V0QWN0aXZlVmFsdWUodmFsdWUpO1xyXG4gICAgdGhpcy5zaG93SGFuZGxlVG9vbHRpcCh0aGlzLm56UmFuZ2UgPyB0aGlzLmFjdGl2ZVZhbHVlSW5kZXggOiAwKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgb25EcmFnTW92ZSh2YWx1ZTogbnVtYmVyKTogdm9pZCB7XHJcbiAgICB0aGlzLnNldEFjdGl2ZVZhbHVlKHZhbHVlKTtcclxuICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBvbkRyYWdFbmQoKTogdm9pZCB7XHJcbiAgICB0aGlzLm56T25BZnRlckNoYW5nZS5lbWl0KHRoaXMuZ2V0VmFsdWUodHJ1ZSkpO1xyXG4gICAgdGhpcy50b2dnbGVEcmFnTW92aW5nKGZhbHNlKTtcclxuICAgIHRoaXMuY2FjaGVTbGlkZXJQcm9wZXJ0eSh0cnVlKTtcclxuICAgIHRoaXMuaGlkZUFsbEhhbmRsZVRvb2x0aXAoKTtcclxuICAgIHRoaXMuY2RyLm1hcmtGb3JDaGVjaygpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ3JlYXRlIHVzZXIgaW50ZXJhY3Rpb25zIGhhbmRsZXMuXHJcbiAgICovXHJcbiAgcHJpdmF0ZSBjcmVhdGVEcmFnZ2luZ09ic2VydmFibGVzKCk6IHZvaWQge1xyXG4gICAgY29uc3Qgc2xpZGVyRE9NID0gdGhpcy5zbGlkZXJET007XHJcbiAgICBjb25zdCBvcmllbnRGaWVsZCA9IHRoaXMubnpWZXJ0aWNhbCA/ICdwYWdlWScgOiAncGFnZVgnO1xyXG4gICAgY29uc3QgbW91c2U6IE1vdXNlVG91Y2hPYnNlcnZlckNvbmZpZyA9IHtcclxuICAgICAgc3RhcnQ6ICdtb3VzZWRvd24nLFxyXG4gICAgICBtb3ZlOiAnbW91c2Vtb3ZlJyxcclxuICAgICAgZW5kOiAnbW91c2V1cCcsXHJcbiAgICAgIHBsdWNrS2V5OiBbb3JpZW50RmllbGRdXHJcbiAgICB9O1xyXG4gICAgY29uc3QgdG91Y2g6IE1vdXNlVG91Y2hPYnNlcnZlckNvbmZpZyA9IHtcclxuICAgICAgc3RhcnQ6ICd0b3VjaHN0YXJ0JyxcclxuICAgICAgbW92ZTogJ3RvdWNobW92ZScsXHJcbiAgICAgIGVuZDogJ3RvdWNoZW5kJyxcclxuICAgICAgcGx1Y2tLZXk6IFsndG91Y2hlcycsICcwJywgb3JpZW50RmllbGRdLFxyXG4gICAgICBmaWx0ZXI6IChlOiBNb3VzZUV2ZW50IHwgVG91Y2hFdmVudCkgPT4gZSBpbnN0YW5jZW9mIFRvdWNoRXZlbnRcclxuICAgIH07XHJcblxyXG4gICAgW21vdXNlLCB0b3VjaF0uZm9yRWFjaChzb3VyY2UgPT4ge1xyXG4gICAgICBjb25zdCB7IHN0YXJ0LCBtb3ZlLCBlbmQsIHBsdWNrS2V5LCBmaWx0ZXI6IGZpbHRlckZ1bmMgPSAoKSA9PiB0cnVlIH0gPSBzb3VyY2U7XHJcblxyXG4gICAgICBzb3VyY2Uuc3RhcnRQbHVja2VkJCA9IGZyb21FdmVudChzbGlkZXJET00sIHN0YXJ0KS5waXBlKFxyXG4gICAgICAgIGZpbHRlcihmaWx0ZXJGdW5jKSxcclxuICAgICAgICB0YXAoc2lsZW50RXZlbnQpLFxyXG4gICAgICAgIHBsdWNrPEV2ZW50LCBudW1iZXI+KC4uLnBsdWNrS2V5KSxcclxuICAgICAgICBtYXAoKHBvc2l0aW9uOiBudW1iZXIpID0+IHRoaXMuZmluZENsb3Nlc3RWYWx1ZShwb3NpdGlvbikpXHJcbiAgICAgICk7XHJcbiAgICAgIHNvdXJjZS5lbmQkID0gZnJvbUV2ZW50KGRvY3VtZW50LCBlbmQpO1xyXG4gICAgICBzb3VyY2UubW92ZVJlc29sdmVkJCA9IGZyb21FdmVudChkb2N1bWVudCwgbW92ZSkucGlwZShcclxuICAgICAgICBmaWx0ZXIoZmlsdGVyRnVuYyksXHJcbiAgICAgICAgdGFwKHNpbGVudEV2ZW50KSxcclxuICAgICAgICBwbHVjazxFdmVudCwgbnVtYmVyPiguLi5wbHVja0tleSksXHJcbiAgICAgICAgZGlzdGluY3RVbnRpbENoYW5nZWQoKSxcclxuICAgICAgICBtYXAoKHBvc2l0aW9uOiBudW1iZXIpID0+IHRoaXMuZmluZENsb3Nlc3RWYWx1ZShwb3NpdGlvbikpLFxyXG4gICAgICAgIGRpc3RpbmN0VW50aWxDaGFuZ2VkKCksXHJcbiAgICAgICAgdGFrZVVudGlsKHNvdXJjZS5lbmQkKVxyXG4gICAgICApO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5kcmFnU3RhcnQkID0gbWVyZ2UobW91c2Uuc3RhcnRQbHVja2VkJCEsIHRvdWNoLnN0YXJ0UGx1Y2tlZCQhKTtcclxuICAgIHRoaXMuZHJhZ01vdmUkID0gbWVyZ2UobW91c2UubW92ZVJlc29sdmVkJCEsIHRvdWNoLm1vdmVSZXNvbHZlZCQhKTtcclxuICAgIHRoaXMuZHJhZ0VuZCQgPSBtZXJnZShtb3VzZS5lbmQkISwgdG91Y2guZW5kJCEpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzdWJzY3JpYmVEcmFnKHBlcmlvZHM6IHN0cmluZ1tdID0gWydzdGFydCcsICdtb3ZlJywgJ2VuZCddKTogdm9pZCB7XHJcbiAgICBpZiAocGVyaW9kcy5pbmRleE9mKCdzdGFydCcpICE9PSAtMSAmJiB0aGlzLmRyYWdTdGFydCQgJiYgIXRoaXMuZHJhZ1N0YXJ0Xykge1xyXG4gICAgICB0aGlzLmRyYWdTdGFydF8gPSB0aGlzLmRyYWdTdGFydCQuc3Vic2NyaWJlKHRoaXMub25EcmFnU3RhcnQuYmluZCh0aGlzKSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHBlcmlvZHMuaW5kZXhPZignbW92ZScpICE9PSAtMSAmJiB0aGlzLmRyYWdNb3ZlJCAmJiAhdGhpcy5kcmFnTW92ZV8pIHtcclxuICAgICAgdGhpcy5kcmFnTW92ZV8gPSB0aGlzLmRyYWdNb3ZlJC5zdWJzY3JpYmUodGhpcy5vbkRyYWdNb3ZlLmJpbmQodGhpcykpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChwZXJpb2RzLmluZGV4T2YoJ2VuZCcpICE9PSAtMSAmJiB0aGlzLmRyYWdFbmQkICYmICF0aGlzLmRyYWdFbmRfKSB7XHJcbiAgICAgIHRoaXMuZHJhZ0VuZF8gPSB0aGlzLmRyYWdFbmQkLnN1YnNjcmliZSh0aGlzLm9uRHJhZ0VuZC5iaW5kKHRoaXMpKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgdW5zdWJzY3JpYmVEcmFnKHBlcmlvZHM6IHN0cmluZ1tdID0gWydzdGFydCcsICdtb3ZlJywgJ2VuZCddKTogdm9pZCB7XHJcbiAgICBpZiAocGVyaW9kcy5pbmRleE9mKCdzdGFydCcpICE9PSAtMSAmJiB0aGlzLmRyYWdTdGFydF8pIHtcclxuICAgICAgdGhpcy5kcmFnU3RhcnRfLnVuc3Vic2NyaWJlKCk7XHJcbiAgICAgIHRoaXMuZHJhZ1N0YXJ0XyA9IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHBlcmlvZHMuaW5kZXhPZignbW92ZScpICE9PSAtMSAmJiB0aGlzLmRyYWdNb3ZlXykge1xyXG4gICAgICB0aGlzLmRyYWdNb3ZlXy51bnN1YnNjcmliZSgpO1xyXG4gICAgICB0aGlzLmRyYWdNb3ZlXyA9IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHBlcmlvZHMuaW5kZXhPZignZW5kJykgIT09IC0xICYmIHRoaXMuZHJhZ0VuZF8pIHtcclxuICAgICAgdGhpcy5kcmFnRW5kXy51bnN1YnNjcmliZSgpO1xyXG4gICAgICB0aGlzLmRyYWdFbmRfID0gbnVsbDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgdG9nZ2xlRHJhZ01vdmluZyhtb3ZhYmxlOiBib29sZWFuKTogdm9pZCB7XHJcbiAgICBjb25zdCBwZXJpb2RzID0gWydtb3ZlJywgJ2VuZCddO1xyXG4gICAgaWYgKG1vdmFibGUpIHtcclxuICAgICAgdGhpcy5pc0RyYWdnaW5nID0gdHJ1ZTtcclxuICAgICAgdGhpcy5zdWJzY3JpYmVEcmFnKHBlcmlvZHMpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5pc0RyYWdnaW5nID0gZmFsc2U7XHJcbiAgICAgIHRoaXMudW5zdWJzY3JpYmVEcmFnKHBlcmlvZHMpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSB0b2dnbGVEcmFnRGlzYWJsZWQoZGlzYWJsZWQ6IGJvb2xlYW4pOiB2b2lkIHtcclxuICAgIGlmIChkaXNhYmxlZCkge1xyXG4gICAgICB0aGlzLnVuc3Vic2NyaWJlRHJhZygpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5zdWJzY3JpYmVEcmFnKFsnc3RhcnQnXSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGZpbmRDbG9zZXN0VmFsdWUocG9zaXRpb246IG51bWJlcik6IG51bWJlciB7XHJcbiAgICBjb25zdCBzbGlkZXJTdGFydCA9IHRoaXMuZ2V0U2xpZGVyU3RhcnRQb3NpdGlvbigpO1xyXG4gICAgY29uc3Qgc2xpZGVyTGVuZ3RoID0gdGhpcy5nZXRTbGlkZXJMZW5ndGgoKTtcclxuICAgIGNvbnN0IHJhdGlvID0gZW5zdXJlTnVtYmVySW5SYW5nZSgocG9zaXRpb24gLSBzbGlkZXJTdGFydCkgLyBzbGlkZXJMZW5ndGgsIDAsIDEpO1xyXG4gICAgY29uc3QgdmFsID0gKHRoaXMubnpNYXggLSB0aGlzLm56TWluKSAqICh0aGlzLm56VmVydGljYWwgPyAxIC0gcmF0aW8gOiByYXRpbykgKyB0aGlzLm56TWluO1xyXG4gICAgY29uc3QgcG9pbnRzID0gdGhpcy5uek1hcmtzID09PSBudWxsID8gW10gOiBPYmplY3Qua2V5cyh0aGlzLm56TWFya3MpLm1hcChwYXJzZUZsb2F0KTtcclxuICAgIGlmICh0aGlzLm56U3RlcCAhPT0gbnVsbCAmJiAhdGhpcy5uekRvdHMpIHtcclxuICAgICAgY29uc3QgY2xvc2VzdE9uZSA9IE1hdGgucm91bmQodmFsIC8gdGhpcy5uelN0ZXApICogdGhpcy5uelN0ZXA7XHJcbiAgICAgIHBvaW50cy5wdXNoKGNsb3Nlc3RPbmUpO1xyXG4gICAgfVxyXG4gICAgY29uc3QgZ2FwcyA9IHBvaW50cy5tYXAocG9pbnQgPT4gTWF0aC5hYnModmFsIC0gcG9pbnQpKTtcclxuICAgIGNvbnN0IGNsb3Nlc3QgPSBwb2ludHNbZ2Fwcy5pbmRleE9mKE1hdGgubWluKC4uLmdhcHMpKV07XHJcbiAgICByZXR1cm4gdGhpcy5uelN0ZXAgPT09IG51bGwgPyBjbG9zZXN0IDogcGFyc2VGbG9hdChjbG9zZXN0LnRvRml4ZWQoZ2V0UHJlY2lzaW9uKHRoaXMubnpTdGVwKSkpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSB2YWx1ZVRvT2Zmc2V0KHZhbHVlOiBudW1iZXIpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIGdldFBlcmNlbnQodGhpcy5uek1pbiwgdGhpcy5uek1heCwgdmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXRTbGlkZXJTdGFydFBvc2l0aW9uKCk6IG51bWJlciB7XHJcbiAgICBpZiAodGhpcy5jYWNoZVNsaWRlclN0YXJ0ICE9PSBudWxsKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLmNhY2hlU2xpZGVyU3RhcnQ7XHJcbiAgICB9XHJcbiAgICBjb25zdCBvZmZzZXQgPSBnZXRFbGVtZW50T2Zmc2V0KHRoaXMuc2xpZGVyRE9NKTtcclxuICAgIHJldHVybiB0aGlzLm56VmVydGljYWwgPyBvZmZzZXQudG9wIDogb2Zmc2V0LmxlZnQ7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldFNsaWRlckxlbmd0aCgpOiBudW1iZXIge1xyXG4gICAgaWYgKHRoaXMuY2FjaGVTbGlkZXJMZW5ndGggIT09IG51bGwpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuY2FjaGVTbGlkZXJMZW5ndGg7XHJcbiAgICB9XHJcbiAgICBjb25zdCBzbGlkZXJET00gPSB0aGlzLnNsaWRlckRPTTtcclxuICAgIHJldHVybiB0aGlzLm56VmVydGljYWwgPyBzbGlkZXJET00uY2xpZW50SGVpZ2h0IDogc2xpZGVyRE9NLmNsaWVudFdpZHRoO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogQ2FjaGUgRE9NIGxheW91dC9yZWZsb3cgb3BlcmF0aW9ucyBmb3IgcGVyZm9ybWFuY2UgKG1heSBub3QgbmVjZXNzYXJ5PylcclxuICAgKi9cclxuICBwcml2YXRlIGNhY2hlU2xpZGVyUHJvcGVydHkocmVtb3ZlOiBib29sZWFuID0gZmFsc2UpOiB2b2lkIHtcclxuICAgIHRoaXMuY2FjaGVTbGlkZXJTdGFydCA9IHJlbW92ZSA/IG51bGwgOiB0aGlzLmdldFNsaWRlclN0YXJ0UG9zaXRpb24oKTtcclxuICAgIHRoaXMuY2FjaGVTbGlkZXJMZW5ndGggPSByZW1vdmUgPyBudWxsIDogdGhpcy5nZXRTbGlkZXJMZW5ndGgoKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgZm9ybWF0VmFsdWUodmFsdWU6IFNsaWRlclZhbHVlIHwgbnVsbCk6IFNsaWRlclZhbHVlIHtcclxuICAgIGxldCByZXMgPSB2YWx1ZTtcclxuICAgIGlmICghdGhpcy5hc3NlcnRWYWx1ZVZhbGlkKHZhbHVlISkpIHtcclxuICAgICAgcmVzID0gdGhpcy5uekRlZmF1bHRWYWx1ZSA9PT0gbnVsbCA/ICh0aGlzLm56UmFuZ2UgPyBbdGhpcy5uek1pbiwgdGhpcy5uek1heF0gOiB0aGlzLm56TWluKSA6IHRoaXMubnpEZWZhdWx0VmFsdWU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXMgPSBpc1ZhbHVlQVJhbmdlKHZhbHVlISlcclxuICAgICAgICA/ICh2YWx1ZSBhcyBudW1iZXJbXSkubWFwKHZhbCA9PiBlbnN1cmVOdW1iZXJJblJhbmdlKHZhbCwgdGhpcy5uek1pbiwgdGhpcy5uek1heCkpXHJcbiAgICAgICAgOiBlbnN1cmVOdW1iZXJJblJhbmdlKHZhbHVlIGFzIG51bWJlciwgdGhpcy5uek1pbiwgdGhpcy5uek1heCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHJlcztcclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIENoZWNrIGlmIHZhbHVlIGlzIHZhbGlkIGFuZCB0aHJvdyBlcnJvciBpZiB2YWx1ZS10eXBlL3JhbmdlIG5vdCBtYXRjaC5cclxuICAgKi9cclxuICBwcml2YXRlIGFzc2VydFZhbHVlVmFsaWQodmFsdWU6IFNsaWRlclZhbHVlKTogYm9vbGVhbiB7XHJcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkodmFsdWUpICYmIGlzTmFOKHR5cGVvZiB2YWx1ZSAhPT0gJ251bWJlcicgPyBwYXJzZUZsb2F0KHZhbHVlKSA6IHZhbHVlKSkge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGhpcy5hc3NlcnRWYWx1ZVR5cGVNYXRjaCh2YWx1ZSk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBBc3NlcnQgdGhhdCBpZiBgdGhpcy5uelJhbmdlYCBpcyBgdHJ1ZWAsIHZhbHVlIGlzIGFsc28gYSByYW5nZSwgdmljZSB2ZXJzYS5cclxuICAgKi9cclxuICBwcml2YXRlIGFzc2VydFZhbHVlVHlwZU1hdGNoKHZhbHVlOiBTbGlkZXJWYWx1ZSB8IG51bGwpOiBib29sZWFuIHtcclxuICAgIGlmICghdmFsdWUpIHtcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9IGVsc2UgaWYgKGlzVmFsdWVBUmFuZ2UodmFsdWUpICE9PSB0aGlzLm56UmFuZ2UpIHtcclxuICAgICAgdGhyb3cgZ2V0VmFsdWVUeXBlTm90TWF0Y2hFcnJvcigpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHZhbHVlc0VxdWFsKHZhbEE6IFNsaWRlclZhbHVlLCB2YWxCOiBTbGlkZXJWYWx1ZSk6IGJvb2xlYW4ge1xyXG4gICAgaWYgKHR5cGVvZiB2YWxBICE9PSB0eXBlb2YgdmFsQikge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gaXNWYWx1ZUFSYW5nZSh2YWxBKSAmJiBpc1ZhbHVlQVJhbmdlKHZhbEIpID8gYXJyYXlzRXF1YWw8bnVtYmVyPih2YWxBLCB2YWxCKSA6IHZhbEEgPT09IHZhbEI7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBTaG93IG9uZSBoYW5kbGUncyB0b29sdGlwIGFuZCBoaWRlIG90aGVycycuXHJcbiAgICovXHJcbiAgcHJpdmF0ZSBzaG93SGFuZGxlVG9vbHRpcChoYW5kbGVJbmRleDogbnVtYmVyID0gMCk6IHZvaWQge1xyXG4gICAgdGhpcy5oYW5kbGVzLmZvckVhY2goKGhhbmRsZSwgaW5kZXgpID0+IHtcclxuICAgICAgaGFuZGxlLmFjdGl2ZSA9IGluZGV4ID09PSBoYW5kbGVJbmRleDtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBoaWRlQWxsSGFuZGxlVG9vbHRpcCgpOiB2b2lkIHtcclxuICAgIHRoaXMuaGFuZGxlcy5mb3JFYWNoKGhhbmRsZSA9PiAoaGFuZGxlLmFjdGl2ZSA9IGZhbHNlKSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdlbmVyYXRlSGFuZGxlcyhhbW91bnQ6IG51bWJlcik6IFNsaWRlckhhbmRsZXJbXSB7XHJcbiAgICByZXR1cm4gQXJyYXkoYW1vdW50KVxyXG4gICAgICAuZmlsbCgwKVxyXG4gICAgICAubWFwKCgpID0+ICh7IG9mZnNldDogbnVsbCwgdmFsdWU6IG51bGwsIGFjdGl2ZTogZmFsc2UgfSkpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZW5lcmF0ZU1hcmtJdGVtcyhtYXJrczogTWFya3MpOiBFeHRlbmRlZE1hcmtbXSB8IG51bGwge1xyXG4gICAgY29uc3QgbWFya3NBcnJheTogRXh0ZW5kZWRNYXJrW10gPSBbXTtcclxuICAgIGZvciAoY29uc3Qga2V5IGluIG1hcmtzKSB7XHJcbiAgICAgIGNvbnN0IG1hcmsgPSBtYXJrc1trZXldO1xyXG4gICAgICBjb25zdCB2YWwgPSB0eXBlb2Yga2V5ID09PSAnbnVtYmVyJyA/IGtleSA6IHBhcnNlRmxvYXQoa2V5KTtcclxuICAgICAgaWYgKHZhbCA+PSB0aGlzLm56TWluICYmIHZhbCA8PSB0aGlzLm56TWF4KSB7XHJcbiAgICAgICAgbWFya3NBcnJheS5wdXNoKHsgdmFsdWU6IHZhbCwgb2Zmc2V0OiB0aGlzLnZhbHVlVG9PZmZzZXQodmFsKSwgY29uZmlnOiBtYXJrIH0pO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbWFya3NBcnJheS5sZW5ndGggPyBtYXJrc0FycmF5IDogbnVsbDtcclxuICB9XHJcbn1cclxuIl19