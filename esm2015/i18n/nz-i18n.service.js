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
import { Inject, Injectable, Optional } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import zh_CN from './languages/zh_CN';
import { NZ_DATE_LOCALE, NZ_I18N } from './nz-i18n.token';
import * as i0 from "@angular/core";
import * as i1 from "./nz-i18n.token";
export class NzI18nService {
    /**
     * @param {?} locale
     * @param {?} dateLocale
     */
    constructor(locale, dateLocale) {
        this._change = new BehaviorSubject(this._locale);
        this.setLocale(locale || zh_CN);
        this.setDateLocale(dateLocale || null);
    }
    /**
     * @return {?}
     */
    get localeChange() {
        return this._change.asObservable();
    }
    // [NOTE] Performance issue: this method may called by every change detections
    // TODO: cache more deeply paths for performance
    /* tslint:disable-next-line:no-any */
    /**
     * @param {?} path
     * @param {?=} data
     * @return {?}
     */
    translate(path, data) {
        // this._logger.debug(`[NzI18nService] Translating(${this._locale.locale}): ${path}`);
        /** @type {?} */
        let content = (/** @type {?} */ (this._getObjectPath(this._locale, path)));
        if (typeof content === 'string') {
            if (data) {
                Object.keys(data).forEach((/**
                 * @param {?} key
                 * @return {?}
                 */
                key => (content = content.replace(new RegExp(`%${key}%`, 'g'), data[key]))));
            }
            return content;
        }
        return path;
    }
    /**
     * Set/Change current locale globally throughout the WHOLE application
     * [NOTE] If called at runtime, rendered interface may not change along with the locale change (because this do not trigger another render schedule)
     * @param {?} locale The translating letters
     * @return {?}
     */
    setLocale(locale) {
        if (this._locale && this._locale.locale === locale.locale) {
            return;
        }
        this._locale = locale;
        this._change.next(locale);
    }
    /**
     * @return {?}
     */
    getLocale() {
        return this._locale;
    }
    /**
     * @return {?}
     */
    getLocaleId() {
        return this._locale ? this._locale.locale : '';
    }
    /**
     * @param {?} dateLocale
     * @return {?}
     */
    setDateLocale(dateLocale) {
        this.dateLocale = dateLocale;
    }
    /**
     * @return {?}
     */
    getDateLocale() {
        return this.dateLocale;
    }
    /**
     * Get locale data
     * @param {?=} path dot paths for finding exist value from locale data, eg. "a.b.c"
     * @param {?=} defaultValue default value if the result is not "truthy"
     * @return {?}
     */
    // tslint:disable-next-line:no-any
    getLocaleData(path, defaultValue) {
        /** @type {?} */
        const result = path ? this._getObjectPath(this._locale, path) : this._locale;
        return result || defaultValue;
    }
    // tslint:disable-next-line:no-any
    /**
     * @private
     * @param {?} obj
     * @param {?} path
     * @return {?}
     */
    _getObjectPath(obj, path) {
        /** @type {?} */
        let res = obj;
        /** @type {?} */
        const paths = path.split('.');
        /** @type {?} */
        const depth = paths.length;
        /** @type {?} */
        let index = 0;
        while (res && index < depth) {
            res = res[paths[index++]];
        }
        return index === depth ? res : null;
    }
}
NzI18nService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
NzI18nService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [NZ_I18N,] }] },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [NZ_DATE_LOCALE,] }] }
];
/** @nocollapse */ NzI18nService.ngInjectableDef = i0.defineInjectable({ factory: function NzI18nService_Factory() { return new NzI18nService(i0.inject(i1.NZ_I18N, 8), i0.inject(i1.NZ_DATE_LOCALE, 8)); }, token: NzI18nService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    NzI18nService.prototype._locale;
    /**
     * @type {?}
     * @private
     */
    NzI18nService.prototype._change;
    /**
     * @type {?}
     * @private
     */
    NzI18nService.prototype.dateLocale;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotaTE4bi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9pMThuLyIsInNvdXJjZXMiOlsibnotaTE4bi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBUUEsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzdELE9BQU8sRUFBRSxlQUFlLEVBQWMsTUFBTSxNQUFNLENBQUM7QUFJbkQsT0FBTyxLQUFLLE1BQU0sbUJBQW1CLENBQUM7QUFFdEMsT0FBTyxFQUFFLGNBQWMsRUFBRSxPQUFPLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQzs7O0FBSzFELE1BQU0sT0FBTyxhQUFhOzs7OztJQVN4QixZQUMrQixNQUF1QixFQUNoQixVQUFzQjtRQVRwRCxZQUFPLEdBQUcsSUFBSSxlQUFlLENBQWtCLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQVduRSxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sSUFBSSxLQUFLLENBQUMsQ0FBQztRQUNoQyxJQUFJLENBQUMsYUFBYSxDQUFDLFVBQVUsSUFBSSxJQUFJLENBQUMsQ0FBQztJQUN6QyxDQUFDOzs7O0lBVkQsSUFBSSxZQUFZO1FBQ2QsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3JDLENBQUM7Ozs7Ozs7OztJQWFELFNBQVMsQ0FBQyxJQUFZLEVBQUUsSUFBVTs7O1lBRTVCLE9BQU8sR0FBRyxtQkFBQSxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLEVBQVU7UUFDL0QsSUFBSSxPQUFPLE9BQU8sS0FBSyxRQUFRLEVBQUU7WUFDL0IsSUFBSSxJQUFJLEVBQUU7Z0JBQ1IsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxPQUFPOzs7O2dCQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLE1BQU0sQ0FBQyxJQUFJLEdBQUcsR0FBRyxFQUFFLEdBQUcsQ0FBQyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQzthQUN2RztZQUNELE9BQU8sT0FBTyxDQUFDO1NBQ2hCO1FBQ0QsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDOzs7Ozs7O0lBT0QsU0FBUyxDQUFDLE1BQXVCO1FBQy9CLElBQUksSUFBSSxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sS0FBSyxNQUFNLENBQUMsTUFBTSxFQUFFO1lBQ3pELE9BQU87U0FDUjtRQUNELElBQUksQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDO1FBQ3RCLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzVCLENBQUM7Ozs7SUFFRCxTQUFTO1FBQ1AsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO0lBQ3RCLENBQUM7Ozs7SUFFRCxXQUFXO1FBQ1QsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO0lBQ2pELENBQUM7Ozs7O0lBRUQsYUFBYSxDQUFDLFVBQXNCO1FBQ2xDLElBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDO0lBQy9CLENBQUM7Ozs7SUFFRCxhQUFhO1FBQ1gsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDO0lBQ3pCLENBQUM7Ozs7Ozs7O0lBUUQsYUFBYSxDQUFDLElBQWEsRUFBRSxZQUFrQjs7Y0FDdkMsTUFBTSxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTztRQUM1RSxPQUFPLE1BQU0sSUFBSSxZQUFZLENBQUM7SUFDaEMsQ0FBQzs7Ozs7Ozs7SUFHTyxjQUFjLENBQUMsR0FBb0IsRUFBRSxJQUFZOztZQUNuRCxHQUFHLEdBQUcsR0FBRzs7Y0FDUCxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7O2NBQ3ZCLEtBQUssR0FBRyxLQUFLLENBQUMsTUFBTTs7WUFDdEIsS0FBSyxHQUFHLENBQUM7UUFDYixPQUFPLEdBQUcsSUFBSSxLQUFLLEdBQUcsS0FBSyxFQUFFO1lBQzNCLEdBQUcsR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQztTQUMzQjtRQUNELE9BQU8sS0FBSyxLQUFLLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7SUFDdEMsQ0FBQzs7O1lBckZGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7Ozs0Q0FXSSxRQUFRLFlBQUksTUFBTSxTQUFDLE9BQU87NENBQzFCLFFBQVEsWUFBSSxNQUFNLFNBQUMsY0FBYzs7Ozs7Ozs7SUFWcEMsZ0NBQWlDOzs7OztJQUNqQyxnQ0FBcUU7Ozs7O0lBQ3JFLG1DQUErQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5cclxuaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlLCBPcHRpb25hbCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QsIE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcclxuXHJcbmltcG9ydCB7IEluZGV4YWJsZU9iamVjdCB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZSc7XHJcblxyXG5pbXBvcnQgemhfQ04gZnJvbSAnLi9sYW5ndWFnZXMvemhfQ04nO1xyXG5pbXBvcnQgeyBEYXRlTG9jYWxlLCBOekkxOG5JbnRlcmZhY2UgfSBmcm9tICcuL256LWkxOG4uaW50ZXJmYWNlJztcclxuaW1wb3J0IHsgTlpfREFURV9MT0NBTEUsIE5aX0kxOE4gfSBmcm9tICcuL256LWkxOG4udG9rZW4nO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgTnpJMThuU2VydmljZSB7XHJcbiAgcHJpdmF0ZSBfbG9jYWxlOiBOekkxOG5JbnRlcmZhY2U7XHJcbiAgcHJpdmF0ZSBfY2hhbmdlID0gbmV3IEJlaGF2aW9yU3ViamVjdDxOekkxOG5JbnRlcmZhY2U+KHRoaXMuX2xvY2FsZSk7XHJcbiAgcHJpdmF0ZSBkYXRlTG9jYWxlOiBEYXRlTG9jYWxlO1xyXG5cclxuICBnZXQgbG9jYWxlQ2hhbmdlKCk6IE9ic2VydmFibGU8TnpJMThuSW50ZXJmYWNlPiB7XHJcbiAgICByZXR1cm4gdGhpcy5fY2hhbmdlLmFzT2JzZXJ2YWJsZSgpO1xyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBAT3B0aW9uYWwoKSBASW5qZWN0KE5aX0kxOE4pIGxvY2FsZTogTnpJMThuSW50ZXJmYWNlLFxyXG4gICAgQE9wdGlvbmFsKCkgQEluamVjdChOWl9EQVRFX0xPQ0FMRSkgZGF0ZUxvY2FsZTogRGF0ZUxvY2FsZVxyXG4gICkge1xyXG4gICAgdGhpcy5zZXRMb2NhbGUobG9jYWxlIHx8IHpoX0NOKTtcclxuICAgIHRoaXMuc2V0RGF0ZUxvY2FsZShkYXRlTG9jYWxlIHx8IG51bGwpO1xyXG4gIH1cclxuXHJcbiAgLy8gW05PVEVdIFBlcmZvcm1hbmNlIGlzc3VlOiB0aGlzIG1ldGhvZCBtYXkgY2FsbGVkIGJ5IGV2ZXJ5IGNoYW5nZSBkZXRlY3Rpb25zXHJcbiAgLy8gVE9ETzogY2FjaGUgbW9yZSBkZWVwbHkgcGF0aHMgZm9yIHBlcmZvcm1hbmNlXHJcbiAgLyogdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueSAqL1xyXG4gIHRyYW5zbGF0ZShwYXRoOiBzdHJpbmcsIGRhdGE/OiBhbnkpOiBzdHJpbmcge1xyXG4gICAgLy8gdGhpcy5fbG9nZ2VyLmRlYnVnKGBbTnpJMThuU2VydmljZV0gVHJhbnNsYXRpbmcoJHt0aGlzLl9sb2NhbGUubG9jYWxlfSk6ICR7cGF0aH1gKTtcclxuICAgIGxldCBjb250ZW50ID0gdGhpcy5fZ2V0T2JqZWN0UGF0aCh0aGlzLl9sb2NhbGUsIHBhdGgpIGFzIHN0cmluZztcclxuICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgaWYgKGRhdGEpIHtcclxuICAgICAgICBPYmplY3Qua2V5cyhkYXRhKS5mb3JFYWNoKGtleSA9PiAoY29udGVudCA9IGNvbnRlbnQucmVwbGFjZShuZXcgUmVnRXhwKGAlJHtrZXl9JWAsICdnJyksIGRhdGFba2V5XSkpKTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gY29udGVudDtcclxuICAgIH1cclxuICAgIHJldHVybiBwYXRoO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogU2V0L0NoYW5nZSBjdXJyZW50IGxvY2FsZSBnbG9iYWxseSB0aHJvdWdob3V0IHRoZSBXSE9MRSBhcHBsaWNhdGlvblxyXG4gICAqIFtOT1RFXSBJZiBjYWxsZWQgYXQgcnVudGltZSwgcmVuZGVyZWQgaW50ZXJmYWNlIG1heSBub3QgY2hhbmdlIGFsb25nIHdpdGggdGhlIGxvY2FsZSBjaGFuZ2UgKGJlY2F1c2UgdGhpcyBkbyBub3QgdHJpZ2dlciBhbm90aGVyIHJlbmRlciBzY2hlZHVsZSlcclxuICAgKiBAcGFyYW0gbG9jYWxlIFRoZSB0cmFuc2xhdGluZyBsZXR0ZXJzXHJcbiAgICovXHJcbiAgc2V0TG9jYWxlKGxvY2FsZTogTnpJMThuSW50ZXJmYWNlKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5fbG9jYWxlICYmIHRoaXMuX2xvY2FsZS5sb2NhbGUgPT09IGxvY2FsZS5sb2NhbGUpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgdGhpcy5fbG9jYWxlID0gbG9jYWxlO1xyXG4gICAgdGhpcy5fY2hhbmdlLm5leHQobG9jYWxlKTtcclxuICB9XHJcblxyXG4gIGdldExvY2FsZSgpOiBOekkxOG5JbnRlcmZhY2Uge1xyXG4gICAgcmV0dXJuIHRoaXMuX2xvY2FsZTtcclxuICB9XHJcblxyXG4gIGdldExvY2FsZUlkKCk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gdGhpcy5fbG9jYWxlID8gdGhpcy5fbG9jYWxlLmxvY2FsZSA6ICcnO1xyXG4gIH1cclxuXHJcbiAgc2V0RGF0ZUxvY2FsZShkYXRlTG9jYWxlOiBEYXRlTG9jYWxlKTogdm9pZCB7XHJcbiAgICB0aGlzLmRhdGVMb2NhbGUgPSBkYXRlTG9jYWxlO1xyXG4gIH1cclxuXHJcbiAgZ2V0RGF0ZUxvY2FsZSgpOiBEYXRlTG9jYWxlIHtcclxuICAgIHJldHVybiB0aGlzLmRhdGVMb2NhbGU7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBHZXQgbG9jYWxlIGRhdGFcclxuICAgKiBAcGFyYW0gcGF0aCBkb3QgcGF0aHMgZm9yIGZpbmRpbmcgZXhpc3QgdmFsdWUgZnJvbSBsb2NhbGUgZGF0YSwgZWcuIFwiYS5iLmNcIlxyXG4gICAqIEBwYXJhbSBkZWZhdWx0VmFsdWUgZGVmYXVsdCB2YWx1ZSBpZiB0aGUgcmVzdWx0IGlzIG5vdCBcInRydXRoeVwiXHJcbiAgICovXHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxyXG4gIGdldExvY2FsZURhdGEocGF0aD86IHN0cmluZywgZGVmYXVsdFZhbHVlPzogYW55KTogYW55IHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IHBhdGggPyB0aGlzLl9nZXRPYmplY3RQYXRoKHRoaXMuX2xvY2FsZSwgcGF0aCkgOiB0aGlzLl9sb2NhbGU7XHJcbiAgICByZXR1cm4gcmVzdWx0IHx8IGRlZmF1bHRWYWx1ZTtcclxuICB9XHJcblxyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcclxuICBwcml2YXRlIF9nZXRPYmplY3RQYXRoKG9iajogSW5kZXhhYmxlT2JqZWN0LCBwYXRoOiBzdHJpbmcpOiBzdHJpbmcgfCBvYmplY3QgfCBhbnkge1xyXG4gICAgbGV0IHJlcyA9IG9iajtcclxuICAgIGNvbnN0IHBhdGhzID0gcGF0aC5zcGxpdCgnLicpO1xyXG4gICAgY29uc3QgZGVwdGggPSBwYXRocy5sZW5ndGg7XHJcbiAgICBsZXQgaW5kZXggPSAwO1xyXG4gICAgd2hpbGUgKHJlcyAmJiBpbmRleCA8IGRlcHRoKSB7XHJcbiAgICAgIHJlcyA9IHJlc1twYXRoc1tpbmRleCsrXV07XHJcbiAgICB9XHJcbiAgICByZXR1cm4gaW5kZXggPT09IGRlcHRoID8gcmVzIDogbnVsbDtcclxuICB9XHJcbn1cclxuIl19