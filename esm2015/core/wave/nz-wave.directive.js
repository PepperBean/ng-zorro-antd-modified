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
import { Directive, ElementRef, Inject, InjectionToken, Input, NgZone, Optional } from '@angular/core';
import { ANIMATION_MODULE_TYPE } from '@angular/platform-browser/animations';
import { NzWaveRenderer } from './nz-wave-renderer';
/**
 * @record
 */
export function NzWaveConfig() { }
if (false) {
    /** @type {?|undefined} */
    NzWaveConfig.prototype.disabled;
}
/** @type {?} */
export const NZ_WAVE_GLOBAL_DEFAULT_CONFIG = {
    disabled: false
};
/** @type {?} */
export const NZ_WAVE_GLOBAL_CONFIG = new InjectionToken('nz-wave-global-options', {
    providedIn: 'root',
    factory: NZ_WAVE_GLOBAL_CONFIG_FACTORY
});
/**
 * @return {?}
 */
export function NZ_WAVE_GLOBAL_CONFIG_FACTORY() {
    return NZ_WAVE_GLOBAL_DEFAULT_CONFIG;
}
export class NzWaveDirective {
    /**
     * @param {?} ngZone
     * @param {?} elementRef
     * @param {?} config
     * @param {?} animationType
     */
    constructor(ngZone, elementRef, config, animationType) {
        this.ngZone = ngZone;
        this.elementRef = elementRef;
        this.animationType = animationType;
        this.nzWaveExtraNode = false;
        this.waveDisabled = false;
        if (config && typeof config.disabled === 'boolean') {
            this.waveDisabled = config.disabled;
        }
        if (this.animationType === 'NoopAnimations') {
            this.waveDisabled = true;
        }
    }
    /**
     * @return {?}
     */
    get disabled() {
        return this.waveDisabled;
    }
    /**
     * @return {?}
     */
    get rendererRef() {
        return this.waveRenderer;
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this.waveRenderer) {
            this.waveRenderer.destroy();
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.renderWaveIfEnabled();
    }
    /**
     * @return {?}
     */
    renderWaveIfEnabled() {
        if (!this.waveDisabled && this.elementRef.nativeElement) {
            this.waveRenderer = new NzWaveRenderer(this.elementRef.nativeElement, this.ngZone, this.nzWaveExtraNode);
        }
    }
    /**
     * @return {?}
     */
    disable() {
        this.waveDisabled = true;
        if (this.waveRenderer) {
            this.waveRenderer.removeTriggerEvent();
            this.waveRenderer.removeStyleAndExtraNode();
        }
    }
    /**
     * @return {?}
     */
    enable() {
        this.waveDisabled = false;
        if (this.waveRenderer) {
            this.waveRenderer.bindTriggerEvent();
        }
        else {
            this.renderWaveIfEnabled();
        }
    }
}
NzWaveDirective.decorators = [
    { type: Directive, args: [{
                selector: '[nz-wave]',
                exportAs: 'nzWave'
            },] }
];
/** @nocollapse */
NzWaveDirective.ctorParameters = () => [
    { type: NgZone },
    { type: ElementRef },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [NZ_WAVE_GLOBAL_CONFIG,] }] },
    { type: String, decorators: [{ type: Optional }, { type: Inject, args: [ANIMATION_MODULE_TYPE,] }] }
];
NzWaveDirective.propDecorators = {
    nzWaveExtraNode: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    NzWaveDirective.prototype.nzWaveExtraNode;
    /**
     * @type {?}
     * @private
     */
    NzWaveDirective.prototype.waveRenderer;
    /**
     * @type {?}
     * @private
     */
    NzWaveDirective.prototype.waveDisabled;
    /**
     * @type {?}
     * @private
     */
    NzWaveDirective.prototype.ngZone;
    /**
     * @type {?}
     * @private
     */
    NzWaveDirective.prototype.elementRef;
    /**
     * @type {?}
     * @private
     */
    NzWaveDirective.prototype.animationType;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotd2F2ZS5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL2NvcmUvIiwic291cmNlcyI6WyJ3YXZlL256LXdhdmUuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBUUEsT0FBTyxFQUNMLFNBQVMsRUFDVCxVQUFVLEVBQ1YsTUFBTSxFQUNOLGNBQWMsRUFDZCxLQUFLLEVBQ0wsTUFBTSxFQUdOLFFBQVEsRUFDVCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUM3RSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7Ozs7QUFFcEQsa0NBRUM7OztJQURDLGdDQUFtQjs7O0FBR3JCLE1BQU0sT0FBTyw2QkFBNkIsR0FBaUI7SUFDekQsUUFBUSxFQUFFLEtBQUs7Q0FDaEI7O0FBRUQsTUFBTSxPQUFPLHFCQUFxQixHQUFHLElBQUksY0FBYyxDQUFlLHdCQUF3QixFQUFFO0lBQzlGLFVBQVUsRUFBRSxNQUFNO0lBQ2xCLE9BQU8sRUFBRSw2QkFBNkI7Q0FDdkMsQ0FBQzs7OztBQUVGLE1BQU0sVUFBVSw2QkFBNkI7SUFDM0MsT0FBTyw2QkFBNkIsQ0FBQztBQUN2QyxDQUFDO0FBTUQsTUFBTSxPQUFPLGVBQWU7Ozs7Ozs7SUFjMUIsWUFDVSxNQUFjLEVBQ2QsVUFBc0IsRUFDYSxNQUFvQixFQUNaLGFBQXFCO1FBSGhFLFdBQU0sR0FBTixNQUFNLENBQVE7UUFDZCxlQUFVLEdBQVYsVUFBVSxDQUFZO1FBRXFCLGtCQUFhLEdBQWIsYUFBYSxDQUFRO1FBakJqRSxvQkFBZSxHQUFHLEtBQUssQ0FBQztRQUd6QixpQkFBWSxHQUFZLEtBQUssQ0FBQztRQWdCcEMsSUFBSSxNQUFNLElBQUksT0FBTyxNQUFNLENBQUMsUUFBUSxLQUFLLFNBQVMsRUFBRTtZQUNsRCxJQUFJLENBQUMsWUFBWSxHQUFHLE1BQU0sQ0FBQyxRQUFRLENBQUM7U0FDckM7UUFDRCxJQUFJLElBQUksQ0FBQyxhQUFhLEtBQUssZ0JBQWdCLEVBQUU7WUFDM0MsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7U0FDMUI7SUFDSCxDQUFDOzs7O0lBcEJELElBQUksUUFBUTtRQUNWLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQztJQUMzQixDQUFDOzs7O0lBRUQsSUFBSSxXQUFXO1FBQ2IsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDO0lBQzNCLENBQUM7Ozs7SUFnQkQsV0FBVztRQUNULElBQUksSUFBSSxDQUFDLFlBQVksRUFBRTtZQUNyQixJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxDQUFDO1NBQzdCO0lBQ0gsQ0FBQzs7OztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztJQUM3QixDQUFDOzs7O0lBRUQsbUJBQW1CO1FBQ2pCLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFO1lBQ3ZELElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxjQUFjLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7U0FDMUc7SUFDSCxDQUFDOzs7O0lBRUQsT0FBTztRQUNMLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO1FBQ3pCLElBQUksSUFBSSxDQUFDLFlBQVksRUFBRTtZQUNyQixJQUFJLENBQUMsWUFBWSxDQUFDLGtCQUFrQixFQUFFLENBQUM7WUFDdkMsSUFBSSxDQUFDLFlBQVksQ0FBQyx1QkFBdUIsRUFBRSxDQUFDO1NBQzdDO0lBQ0gsQ0FBQzs7OztJQUVELE1BQU07UUFDSixJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztRQUMxQixJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDckIsSUFBSSxDQUFDLFlBQVksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO1NBQ3RDO2FBQU07WUFDTCxJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztTQUM1QjtJQUNILENBQUM7OztZQS9ERixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLFdBQVc7Z0JBQ3JCLFFBQVEsRUFBRSxRQUFRO2FBQ25COzs7O1lBNUJDLE1BQU07WUFKTixVQUFVOzRDQWtEUCxRQUFRLFlBQUksTUFBTSxTQUFDLHFCQUFxQjt5Q0FDeEMsUUFBUSxZQUFJLE1BQU0sU0FBQyxxQkFBcUI7Ozs4QkFqQjFDLEtBQUs7Ozs7SUFBTiwwQ0FBaUM7Ozs7O0lBRWpDLHVDQUFxQzs7Ozs7SUFDckMsdUNBQXNDOzs7OztJQVdwQyxpQ0FBc0I7Ozs7O0lBQ3RCLHFDQUE4Qjs7Ozs7SUFFOUIsd0NBQXdFIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcclxuICovXHJcblxyXG5pbXBvcnQge1xyXG4gIERpcmVjdGl2ZSxcclxuICBFbGVtZW50UmVmLFxyXG4gIEluamVjdCxcclxuICBJbmplY3Rpb25Ub2tlbixcclxuICBJbnB1dCxcclxuICBOZ1pvbmUsXHJcbiAgT25EZXN0cm95LFxyXG4gIE9uSW5pdCxcclxuICBPcHRpb25hbFxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBBTklNQVRJT05fTU9EVUxFX1RZUEUgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyL2FuaW1hdGlvbnMnO1xyXG5pbXBvcnQgeyBOeldhdmVSZW5kZXJlciB9IGZyb20gJy4vbnotd2F2ZS1yZW5kZXJlcic7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIE56V2F2ZUNvbmZpZyB7XHJcbiAgZGlzYWJsZWQ/OiBib29sZWFuO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgTlpfV0FWRV9HTE9CQUxfREVGQVVMVF9DT05GSUc6IE56V2F2ZUNvbmZpZyA9IHtcclxuICBkaXNhYmxlZDogZmFsc2VcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBOWl9XQVZFX0dMT0JBTF9DT05GSUcgPSBuZXcgSW5qZWN0aW9uVG9rZW48TnpXYXZlQ29uZmlnPignbnotd2F2ZS1nbG9iYWwtb3B0aW9ucycsIHtcclxuICBwcm92aWRlZEluOiAncm9vdCcsXHJcbiAgZmFjdG9yeTogTlpfV0FWRV9HTE9CQUxfQ09ORklHX0ZBQ1RPUllcclxufSk7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gTlpfV0FWRV9HTE9CQUxfQ09ORklHX0ZBQ1RPUlkoKTogTnpXYXZlQ29uZmlnIHtcclxuICByZXR1cm4gTlpfV0FWRV9HTE9CQUxfREVGQVVMVF9DT05GSUc7XHJcbn1cclxuXHJcbkBEaXJlY3RpdmUoe1xyXG4gIHNlbGVjdG9yOiAnW256LXdhdmVdJyxcclxuICBleHBvcnRBczogJ256V2F2ZSdcclxufSlcclxuZXhwb3J0IGNsYXNzIE56V2F2ZURpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcclxuICBASW5wdXQoKSBueldhdmVFeHRyYU5vZGUgPSBmYWxzZTtcclxuXHJcbiAgcHJpdmF0ZSB3YXZlUmVuZGVyZXI6IE56V2F2ZVJlbmRlcmVyO1xyXG4gIHByaXZhdGUgd2F2ZURpc2FibGVkOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gIGdldCBkaXNhYmxlZCgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLndhdmVEaXNhYmxlZDtcclxuICB9XHJcblxyXG4gIGdldCByZW5kZXJlclJlZigpOiBOeldhdmVSZW5kZXJlciB7XHJcbiAgICByZXR1cm4gdGhpcy53YXZlUmVuZGVyZXI7XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgbmdab25lOiBOZ1pvbmUsXHJcbiAgICBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXHJcbiAgICBAT3B0aW9uYWwoKSBASW5qZWN0KE5aX1dBVkVfR0xPQkFMX0NPTkZJRykgY29uZmlnOiBOeldhdmVDb25maWcsXHJcbiAgICBAT3B0aW9uYWwoKSBASW5qZWN0KEFOSU1BVElPTl9NT0RVTEVfVFlQRSkgcHJpdmF0ZSBhbmltYXRpb25UeXBlOiBzdHJpbmdcclxuICApIHtcclxuICAgIGlmIChjb25maWcgJiYgdHlwZW9mIGNvbmZpZy5kaXNhYmxlZCA9PT0gJ2Jvb2xlYW4nKSB7XHJcbiAgICAgIHRoaXMud2F2ZURpc2FibGVkID0gY29uZmlnLmRpc2FibGVkO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuYW5pbWF0aW9uVHlwZSA9PT0gJ05vb3BBbmltYXRpb25zJykge1xyXG4gICAgICB0aGlzLndhdmVEaXNhYmxlZCA9IHRydWU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLndhdmVSZW5kZXJlcikge1xyXG4gICAgICB0aGlzLndhdmVSZW5kZXJlci5kZXN0cm95KCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIHRoaXMucmVuZGVyV2F2ZUlmRW5hYmxlZCgpO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyV2F2ZUlmRW5hYmxlZCgpOiB2b2lkIHtcclxuICAgIGlmICghdGhpcy53YXZlRGlzYWJsZWQgJiYgdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQpIHtcclxuICAgICAgdGhpcy53YXZlUmVuZGVyZXIgPSBuZXcgTnpXYXZlUmVuZGVyZXIodGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQsIHRoaXMubmdab25lLCB0aGlzLm56V2F2ZUV4dHJhTm9kZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBkaXNhYmxlKCk6IHZvaWQge1xyXG4gICAgdGhpcy53YXZlRGlzYWJsZWQgPSB0cnVlO1xyXG4gICAgaWYgKHRoaXMud2F2ZVJlbmRlcmVyKSB7XHJcbiAgICAgIHRoaXMud2F2ZVJlbmRlcmVyLnJlbW92ZVRyaWdnZXJFdmVudCgpO1xyXG4gICAgICB0aGlzLndhdmVSZW5kZXJlci5yZW1vdmVTdHlsZUFuZEV4dHJhTm9kZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZW5hYmxlKCk6IHZvaWQge1xyXG4gICAgdGhpcy53YXZlRGlzYWJsZWQgPSBmYWxzZTtcclxuICAgIGlmICh0aGlzLndhdmVSZW5kZXJlcikge1xyXG4gICAgICB0aGlzLndhdmVSZW5kZXJlci5iaW5kVHJpZ2dlckV2ZW50KCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnJlbmRlcldhdmVJZkVuYWJsZWQoKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19