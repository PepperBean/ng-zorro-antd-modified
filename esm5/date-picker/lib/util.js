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
/** @type {?} */
var defaultDisabledTime = {
    nzDisabledHours: /**
     * @return {?}
     */
    function () {
        return [];
    },
    nzDisabledMinutes: /**
     * @return {?}
     */
    function () {
        return [];
    },
    nzDisabledSeconds: /**
     * @return {?}
     */
    function () {
        return [];
    }
};
/**
 * @param {?} value
 * @param {?} disabledTime
 * @return {?}
 */
export function getTimeConfig(value, disabledTime) {
    /** @type {?} */
    var disabledTimeConfig = disabledTime ? disabledTime(value && value.nativeDate) : ((/** @type {?} */ ({})));
    disabledTimeConfig = tslib_1.__assign({}, defaultDisabledTime, disabledTimeConfig);
    return disabledTimeConfig;
}
/**
 * @param {?} value
 * @param {?} disabledTimeConfig
 * @return {?}
 */
export function isTimeValidByConfig(value, disabledTimeConfig) {
    /** @type {?} */
    var invalidTime = false;
    if (value) {
        /** @type {?} */
        var hour = value.getHours();
        /** @type {?} */
        var minutes = value.getMinutes();
        /** @type {?} */
        var seconds = value.getSeconds();
        /** @type {?} */
        var disabledHours = disabledTimeConfig.nzDisabledHours();
        if (disabledHours.indexOf(hour) === -1) {
            /** @type {?} */
            var disabledMinutes = disabledTimeConfig.nzDisabledMinutes(hour);
            if (disabledMinutes.indexOf(minutes) === -1) {
                /** @type {?} */
                var disabledSeconds = disabledTimeConfig.nzDisabledSeconds(hour, minutes);
                invalidTime = disabledSeconds.indexOf(seconds) !== -1;
            }
            else {
                invalidTime = true;
            }
        }
        else {
            invalidTime = true;
        }
    }
    return !invalidTime;
}
/**
 * @param {?} value
 * @param {?} disabledTime
 * @return {?}
 */
export function isTimeValid(value, disabledTime) {
    /** @type {?} */
    var disabledTimeConfig = getTimeConfig(value, disabledTime);
    return isTimeValidByConfig(value, disabledTimeConfig);
}
/**
 * @param {?} value
 * @param {?=} disabledDate
 * @param {?=} disabledTime
 * @return {?}
 */
export function isAllowedDate(value, disabledDate, disabledTime) {
    if (disabledDate) {
        if (disabledDate(value.nativeDate)) {
            return false;
        }
    }
    if (disabledTime) {
        if (!isTimeValid(value, disabledTime)) {
            return false;
        }
    }
    return true;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXRpbC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvZGF0ZS1waWNrZXIvIiwic291cmNlcyI6WyJsaWIvdXRpbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0lBV00sbUJBQW1CLEdBQXVCO0lBQzlDLGVBQWU7OztJQUFmO1FBQ0UsT0FBTyxFQUFFLENBQUM7SUFDWixDQUFDO0lBQ0QsaUJBQWlCOzs7SUFBakI7UUFDRSxPQUFPLEVBQUUsQ0FBQztJQUNaLENBQUM7SUFDRCxpQkFBaUI7OztJQUFqQjtRQUNFLE9BQU8sRUFBRSxDQUFDO0lBQ1osQ0FBQztDQUNGOzs7Ozs7QUFFRCxNQUFNLFVBQVUsYUFBYSxDQUFDLEtBQWdCLEVBQUUsWUFBNEI7O1FBQ3RFLGtCQUFrQixHQUFHLFlBQVksQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLEtBQUssSUFBSSxLQUFLLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsbUJBQUEsRUFBRSxFQUFzQixDQUFDO0lBQzVHLGtCQUFrQix3QkFDYixtQkFBbUIsRUFDbkIsa0JBQWtCLENBQ3RCLENBQUM7SUFDRixPQUFPLGtCQUFrQixDQUFDO0FBQzVCLENBQUM7Ozs7OztBQUVELE1BQU0sVUFBVSxtQkFBbUIsQ0FBQyxLQUFnQixFQUFFLGtCQUFzQzs7UUFDdEYsV0FBVyxHQUFHLEtBQUs7SUFDdkIsSUFBSSxLQUFLLEVBQUU7O1lBQ0gsSUFBSSxHQUFHLEtBQUssQ0FBQyxRQUFRLEVBQUU7O1lBQ3ZCLE9BQU8sR0FBRyxLQUFLLENBQUMsVUFBVSxFQUFFOztZQUM1QixPQUFPLEdBQUcsS0FBSyxDQUFDLFVBQVUsRUFBRTs7WUFDNUIsYUFBYSxHQUFHLGtCQUFrQixDQUFDLGVBQWUsRUFBRTtRQUMxRCxJQUFJLGFBQWEsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUU7O2dCQUNoQyxlQUFlLEdBQUcsa0JBQWtCLENBQUMsaUJBQWlCLENBQUMsSUFBSSxDQUFDO1lBQ2xFLElBQUksZUFBZSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRTs7b0JBQ3JDLGVBQWUsR0FBRyxrQkFBa0IsQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDO2dCQUMzRSxXQUFXLEdBQUcsZUFBZSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQzthQUN2RDtpQkFBTTtnQkFDTCxXQUFXLEdBQUcsSUFBSSxDQUFDO2FBQ3BCO1NBQ0Y7YUFBTTtZQUNMLFdBQVcsR0FBRyxJQUFJLENBQUM7U0FDcEI7S0FDRjtJQUNELE9BQU8sQ0FBQyxXQUFXLENBQUM7QUFDdEIsQ0FBQzs7Ozs7O0FBRUQsTUFBTSxVQUFVLFdBQVcsQ0FBQyxLQUFnQixFQUFFLFlBQTRCOztRQUNsRSxrQkFBa0IsR0FBRyxhQUFhLENBQUMsS0FBSyxFQUFFLFlBQVksQ0FBQztJQUM3RCxPQUFPLG1CQUFtQixDQUFDLEtBQUssRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO0FBQ3hELENBQUM7Ozs7Ozs7QUFFRCxNQUFNLFVBQVUsYUFBYSxDQUFDLEtBQWdCLEVBQUUsWUFBNkIsRUFBRSxZQUE2QjtJQUMxRyxJQUFJLFlBQVksRUFBRTtRQUNoQixJQUFJLFlBQVksQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLEVBQUU7WUFDbEMsT0FBTyxLQUFLLENBQUM7U0FDZDtLQUNGO0lBQ0QsSUFBSSxZQUFZLEVBQUU7UUFDaEIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLEVBQUUsWUFBWSxDQUFDLEVBQUU7WUFDckMsT0FBTyxLQUFLLENBQUM7U0FDZDtLQUNGO0lBQ0QsT0FBTyxJQUFJLENBQUM7QUFDZCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcclxuICovXHJcblxyXG5pbXBvcnQgeyBEaXNhYmxlZERhdGVGbiwgRGlzYWJsZWRUaW1lQ29uZmlnLCBEaXNhYmxlZFRpbWVGbiB9IGZyb20gJy4uL3N0YW5kYXJkLXR5cGVzJztcclxuaW1wb3J0IHsgQ2FuZHlEYXRlIH0gZnJvbSAnLi9jYW5keS1kYXRlL2NhbmR5LWRhdGUnO1xyXG5cclxuY29uc3QgZGVmYXVsdERpc2FibGVkVGltZTogRGlzYWJsZWRUaW1lQ29uZmlnID0ge1xyXG4gIG56RGlzYWJsZWRIb3VycygpOiBudW1iZXJbXSB7XHJcbiAgICByZXR1cm4gW107XHJcbiAgfSxcclxuICBuekRpc2FibGVkTWludXRlcygpOiBudW1iZXJbXSB7XHJcbiAgICByZXR1cm4gW107XHJcbiAgfSxcclxuICBuekRpc2FibGVkU2Vjb25kcygpOiBudW1iZXJbXSB7XHJcbiAgICByZXR1cm4gW107XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFRpbWVDb25maWcodmFsdWU6IENhbmR5RGF0ZSwgZGlzYWJsZWRUaW1lOiBEaXNhYmxlZFRpbWVGbik6IERpc2FibGVkVGltZUNvbmZpZyB7XHJcbiAgbGV0IGRpc2FibGVkVGltZUNvbmZpZyA9IGRpc2FibGVkVGltZSA/IGRpc2FibGVkVGltZSh2YWx1ZSAmJiB2YWx1ZS5uYXRpdmVEYXRlKSA6ICh7fSBhcyBEaXNhYmxlZFRpbWVDb25maWcpO1xyXG4gIGRpc2FibGVkVGltZUNvbmZpZyA9IHtcclxuICAgIC4uLmRlZmF1bHREaXNhYmxlZFRpbWUsXHJcbiAgICAuLi5kaXNhYmxlZFRpbWVDb25maWdcclxuICB9O1xyXG4gIHJldHVybiBkaXNhYmxlZFRpbWVDb25maWc7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpc1RpbWVWYWxpZEJ5Q29uZmlnKHZhbHVlOiBDYW5keURhdGUsIGRpc2FibGVkVGltZUNvbmZpZzogRGlzYWJsZWRUaW1lQ29uZmlnKTogYm9vbGVhbiB7XHJcbiAgbGV0IGludmFsaWRUaW1lID0gZmFsc2U7XHJcbiAgaWYgKHZhbHVlKSB7XHJcbiAgICBjb25zdCBob3VyID0gdmFsdWUuZ2V0SG91cnMoKTtcclxuICAgIGNvbnN0IG1pbnV0ZXMgPSB2YWx1ZS5nZXRNaW51dGVzKCk7XHJcbiAgICBjb25zdCBzZWNvbmRzID0gdmFsdWUuZ2V0U2Vjb25kcygpO1xyXG4gICAgY29uc3QgZGlzYWJsZWRIb3VycyA9IGRpc2FibGVkVGltZUNvbmZpZy5uekRpc2FibGVkSG91cnMoKTtcclxuICAgIGlmIChkaXNhYmxlZEhvdXJzLmluZGV4T2YoaG91cikgPT09IC0xKSB7XHJcbiAgICAgIGNvbnN0IGRpc2FibGVkTWludXRlcyA9IGRpc2FibGVkVGltZUNvbmZpZy5uekRpc2FibGVkTWludXRlcyhob3VyKTtcclxuICAgICAgaWYgKGRpc2FibGVkTWludXRlcy5pbmRleE9mKG1pbnV0ZXMpID09PSAtMSkge1xyXG4gICAgICAgIGNvbnN0IGRpc2FibGVkU2Vjb25kcyA9IGRpc2FibGVkVGltZUNvbmZpZy5uekRpc2FibGVkU2Vjb25kcyhob3VyLCBtaW51dGVzKTtcclxuICAgICAgICBpbnZhbGlkVGltZSA9IGRpc2FibGVkU2Vjb25kcy5pbmRleE9mKHNlY29uZHMpICE9PSAtMTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBpbnZhbGlkVGltZSA9IHRydWU7XHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGludmFsaWRUaW1lID0gdHJ1ZTtcclxuICAgIH1cclxuICB9XHJcbiAgcmV0dXJuICFpbnZhbGlkVGltZTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGlzVGltZVZhbGlkKHZhbHVlOiBDYW5keURhdGUsIGRpc2FibGVkVGltZTogRGlzYWJsZWRUaW1lRm4pOiBib29sZWFuIHtcclxuICBjb25zdCBkaXNhYmxlZFRpbWVDb25maWcgPSBnZXRUaW1lQ29uZmlnKHZhbHVlLCBkaXNhYmxlZFRpbWUpO1xyXG4gIHJldHVybiBpc1RpbWVWYWxpZEJ5Q29uZmlnKHZhbHVlLCBkaXNhYmxlZFRpbWVDb25maWcpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaXNBbGxvd2VkRGF0ZSh2YWx1ZTogQ2FuZHlEYXRlLCBkaXNhYmxlZERhdGU/OiBEaXNhYmxlZERhdGVGbiwgZGlzYWJsZWRUaW1lPzogRGlzYWJsZWRUaW1lRm4pOiBib29sZWFuIHtcclxuICBpZiAoZGlzYWJsZWREYXRlKSB7XHJcbiAgICBpZiAoZGlzYWJsZWREYXRlKHZhbHVlLm5hdGl2ZURhdGUpKSB7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICB9XHJcbiAgaWYgKGRpc2FibGVkVGltZSkge1xyXG4gICAgaWYgKCFpc1RpbWVWYWxpZCh2YWx1ZSwgZGlzYWJsZWRUaW1lKSkge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHJldHVybiB0cnVlO1xyXG59XHJcbiJdfQ==