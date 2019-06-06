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
import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';
import { IconDirective } from '@ant-design/icons-angular';
import { InputBoolean } from 'ng-zorro-antd/core';
import { NzIconService } from './nz-icon.service';
/** @type {?} */
var iconTypeRE = /^anticon\-\w/;
/** @type {?} */
var getIconTypeClass = (/**
 * @param {?} className
 * @return {?}
 */
function (className) {
    if (!className) {
        return undefined;
    }
    else {
        /** @type {?} */
        var classArr = className.split(/\s/);
        /** @type {?} */
        var index = classArr.findIndex((/**
         * @param {?} cls
         * @return {?}
         */
        function (cls) { return cls !== 'anticon' && cls !== 'anticon-spin' && !!cls.match(iconTypeRE); }));
        return index === -1 ? undefined : { name: classArr[index], index: index };
    }
});
var ɵ0 = getIconTypeClass;
/** @type {?} */
var normalizeType = (/**
 * @param {?} rawType
 * @return {?}
 */
function (rawType) {
    /** @type {?} */
    var ret = { type: rawType, crossError: false, verticalError: false };
    ret.type = rawType ? rawType.replace('anticon-', '') : '';
    if (ret.type.includes('verticle')) {
        ret.type = 'up';
        ret.verticalError = true;
    }
    if (ret.type.startsWith('cross')) {
        ret.type = 'close';
        ret.crossError = true;
    }
    return ret;
});
var ɵ1 = normalizeType;
/**
 * This directive extends IconDirective to provide:
 *
 * - IconFont support
 * - spinning
 * - old API compatibility
 *
 * \@break-changes
 *
 * - old API compatibility, icon class names would not be supported.
 * - properties that not started with `nz`.
 */
var NzIconDirective = /** @class */ (function (_super) {
    tslib_1.__extends(NzIconDirective, _super);
    function NzIconDirective(iconService, elementRef, renderer, platform) {
        var _this = _super.call(this, iconService, elementRef, renderer) || this;
        _this.iconService = iconService;
        _this.elementRef = elementRef;
        _this.renderer = renderer;
        _this.platform = platform;
        _this.nzRotate = 0;
        /**
         * @deprecated 8.0.0 avoid exposing low layer API.
         */
        _this.spin = false;
        _this.el = _this.elementRef.nativeElement;
        return _this;
    }
    Object.defineProperty(NzIconDirective.prototype, "nzSpin", {
        /** Properties with `nz` prefix. */
        set: /**
         * Properties with `nz` prefix.
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.spin = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzIconDirective.prototype, "nzType", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.type = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzIconDirective.prototype, "nzTheme", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.theme = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzIconDirective.prototype, "nzTwotoneColor", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.twoToneColor = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzIconDirective.prototype, "nzIconfont", {
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            this.iconfont = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NzIconDirective.prototype, "type", {
        get: /**
         * @return {?}
         */
        function () {
            return this._type;
        },
        set: /**
         * @param {?} value
         * @return {?}
         */
        function (value) {
            if (value && value.startsWith('anticon')) {
                /** @type {?} */
                var rawClass = getIconTypeClass(value);
                /** @type {?} */
                var type = rawClass ? normalizeType(rawClass.name).type : '';
                if (type && this.type !== type) {
                    this._type = type;
                }
            }
            else {
                this._type = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Replacement of `changeIcon` for more modifications.
     * @param oldAPI
     */
    /**
     * Replacement of `changeIcon` for more modifications.
     * @private
     * @param {?=} oldAPI
     * @return {?}
     */
    NzIconDirective.prototype.changeIcon2 = /**
     * Replacement of `changeIcon` for more modifications.
     * @private
     * @param {?=} oldAPI
     * @return {?}
     */
    function (oldAPI) {
        var _this = this;
        if (oldAPI === void 0) { oldAPI = false; }
        if (!oldAPI) {
            this.setClassName();
        }
        this._changeIcon().then((/**
         * @param {?} svg
         * @return {?}
         */
        function (svg) {
            _this.setSVGData(svg);
            if (!oldAPI && svg) {
                _this.handleSpin(svg);
                _this.handleRotate(svg);
            }
        }));
    };
    /**
     * @private
     * @param {?} className
     * @return {?}
     */
    NzIconDirective.prototype.classChangeHandler = /**
     * @private
     * @param {?} className
     * @return {?}
     */
    function (className) {
        /** @type {?} */
        var ret = getIconTypeClass(className);
        if (ret) {
            var _a = normalizeType(ret.name), type = _a.type, crossError = _a.crossError, verticalError = _a.verticalError;
            if (crossError) {
                this.iconService.warnAPI('cross');
            }
            if (verticalError) {
                this.iconService.warnAPI('vertical');
            }
            if (this.type !== type) {
                this._type = type;
                this.changeIcon2(true);
            }
        }
    };
    /**
     * @private
     * @param {?} svg
     * @return {?}
     */
    NzIconDirective.prototype.handleSpin = /**
     * @private
     * @param {?} svg
     * @return {?}
     */
    function (svg) {
        if ((this.spin || this.type === 'loading') && !this.elementRef.nativeElement.classList.contains('anticon-spin')) {
            this.renderer.addClass(svg, 'anticon-spin');
        }
        else {
            this.renderer.removeClass(svg, 'anticon-spin');
        }
    };
    /**
     * @private
     * @param {?} svg
     * @return {?}
     */
    NzIconDirective.prototype.handleRotate = /**
     * @private
     * @param {?} svg
     * @return {?}
     */
    function (svg) {
        if (this.nzRotate) {
            this.renderer.setAttribute(svg, 'style', "transform: rotate(" + this.nzRotate + "deg)");
        }
        else {
            this.renderer.removeAttribute(svg, 'style');
        }
    };
    /**
     * @private
     * @return {?}
     */
    NzIconDirective.prototype.setClassName = /**
     * @private
     * @return {?}
     */
    function () {
        if (typeof this.type === 'string') {
            /** @type {?} */
            var iconClassNameArr = this.el.className.split(/\s/);
            /** @type {?} */
            var ret = getIconTypeClass(this.el.className);
            if (ret) {
                iconClassNameArr.splice(ret.index, 1, "anticon-" + this.type);
                this.renderer.setAttribute(this.el, 'class', iconClassNameArr.join(' '));
            }
            else {
                this.renderer.addClass(this.el, "anticon-" + this.type);
            }
        }
    };
    /**
     * @private
     * @param {?} svg
     * @return {?}
     */
    NzIconDirective.prototype.setSVGData = /**
     * @private
     * @param {?} svg
     * @return {?}
     */
    function (svg) {
        if (typeof this.type === 'string' && svg) {
            this.renderer.setAttribute(svg, 'data-icon', this.type);
            this.renderer.setAttribute(svg, 'aria-hidden', 'true');
        }
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    NzIconDirective.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        var type = changes.type, nzType = changes.nzType, nzTwotoneColor = changes.nzTwotoneColor, twoToneColor = changes.twoToneColor, spin = changes.spin, nzSpin = changes.nzSpin, theme = changes.theme, nzTheme = changes.nzTheme, nzRotate = changes.nzRotate;
        if (type || nzType || nzTwotoneColor || twoToneColor || spin || nzSpin || theme || nzTheme) {
            this.changeIcon2();
        }
        else if (nzRotate) {
            this.handleRotate(this.el.firstChild);
        }
        else {
            this._setSVGElement(this.iconService.createIconfontIcon("#" + this.iconfont));
        }
    };
    /**
     * @return {?}
     */
    NzIconDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        // If `this.type` is not specified and `classList` contains `anticon`, it should be an icon using old API.
        if (!this.type && this.el.classList.contains('anticon')) {
            this.iconService.warnAPI('old');
            // Get `type` from `className`. If not, initial rendering would be missed.
            this.classChangeHandler(this.el.className);
            if (this.platform.isBrowser) {
                // Add `class` mutation observer.
                this.classNameObserver = new MutationObserver((/**
                 * @param {?} mutations
                 * @return {?}
                 */
                function (mutations) {
                    mutations
                        .filter((/**
                     * @param {?} mutation
                     * @return {?}
                     */
                    function (mutation) { return mutation.attributeName === 'class'; }))
                        .forEach((/**
                     * @param {?} mutation
                     * @return {?}
                     */
                    function (mutation) { return _this.classChangeHandler(((/** @type {?} */ (mutation.target))).className); }));
                }));
                this.classNameObserver.observe(this.el, { attributes: true });
            }
        }
        // If `classList` does not contain `anticon`, add it before other class names.
        if (!this.el.classList.contains('anticon')) {
            this.renderer.setAttribute(this.el, 'class', ("anticon " + this.el.className).trim());
        }
    };
    /**
     * @return {?}
     */
    NzIconDirective.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (this.classNameObserver) {
            this.classNameObserver.disconnect();
        }
    };
    /**
     * If custom content is provided, try to normalize SVG elements.
     */
    /**
     * If custom content is provided, try to normalize SVG elements.
     * @return {?}
     */
    NzIconDirective.prototype.ngAfterContentChecked = /**
     * If custom content is provided, try to normalize SVG elements.
     * @return {?}
     */
    function () {
        /** @type {?} */
        var children = this.el.children;
        /** @type {?} */
        var length = children.length;
        if (!this.type && children.length) {
            while (length--) {
                /** @type {?} */
                var child = children[length];
                if (child.tagName.toLowerCase() === 'svg') {
                    this.iconService.normalizeSvgElement((/** @type {?} */ (child)));
                }
            }
        }
    };
    NzIconDirective.decorators = [
        { type: Directive, args: [{
                    selector: 'i.anticon, [nz-icon]',
                    exportAs: 'nzIcon'
                },] }
    ];
    /** @nocollapse */
    NzIconDirective.ctorParameters = function () { return [
        { type: NzIconService },
        { type: ElementRef },
        { type: Renderer2 },
        { type: Platform }
    ]; };
    NzIconDirective.propDecorators = {
        nzSpin: [{ type: Input }],
        nzRotate: [{ type: Input }],
        nzType: [{ type: Input }],
        nzTheme: [{ type: Input }],
        nzTwotoneColor: [{ type: Input }],
        nzIconfont: [{ type: Input }],
        spin: [{ type: Input }],
        iconfont: [{ type: Input }],
        type: [{ type: Input }]
    };
    tslib_1.__decorate([
        InputBoolean(),
        tslib_1.__metadata("design:type", Boolean),
        tslib_1.__metadata("design:paramtypes", [Boolean])
    ], NzIconDirective.prototype, "nzSpin", null);
    return NzIconDirective;
}(IconDirective));
export { NzIconDirective };
if (false) {
    /** @type {?} */
    NzIconDirective.prototype.nzRotate;
    /**
     * @deprecated 8.0.0 avoid exposing low layer API.
     * @type {?}
     */
    NzIconDirective.prototype.spin;
    /**
     * @deprecated 8.0.0 avoid exposing low layer API.
     * @type {?}
     */
    NzIconDirective.prototype.iconfont;
    /**
     * @type {?}
     * @private
     */
    NzIconDirective.prototype.classNameObserver;
    /**
     * @type {?}
     * @private
     */
    NzIconDirective.prototype.el;
    /**
     * @type {?}
     * @private
     */
    NzIconDirective.prototype._type;
    /** @type {?} */
    NzIconDirective.prototype.iconService;
    /** @type {?} */
    NzIconDirective.prototype.elementRef;
    /** @type {?} */
    NzIconDirective.prototype.renderer;
    /**
     * @type {?}
     * @private
     */
    NzIconDirective.prototype.platform;
}
export { ɵ0, ɵ1 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotaWNvbi5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL2ljb24vIiwic291cmNlcyI6WyJuei1pY29uLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDakQsT0FBTyxFQUVMLFNBQVMsRUFDVCxVQUFVLEVBQ1YsS0FBSyxFQUlMLFNBQVMsRUFFVixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsYUFBYSxFQUFhLE1BQU0sMkJBQTJCLENBQUM7QUFDckUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQzs7SUFFNUMsVUFBVSxHQUFHLGNBQWM7O0lBRTNCLGdCQUFnQjs7OztBQUFHLFVBQUMsU0FBaUI7SUFDekMsSUFBSSxDQUFDLFNBQVMsRUFBRTtRQUNkLE9BQU8sU0FBUyxDQUFDO0tBQ2xCO1NBQU07O1lBQ0MsUUFBUSxHQUFHLFNBQVMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDOztZQUNoQyxLQUFLLEdBQUcsUUFBUSxDQUFDLFNBQVM7Ozs7UUFBQyxVQUFBLEdBQUcsSUFBSSxPQUFBLEdBQUcsS0FBSyxTQUFTLElBQUksR0FBRyxLQUFLLGNBQWMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsRUFBdEUsQ0FBc0UsRUFBQztRQUMvRyxPQUFPLEtBQUssS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxRQUFRLENBQUMsS0FBSyxDQUFDLEVBQUUsS0FBSyxPQUFBLEVBQUUsQ0FBQztLQUNwRTtBQUNILENBQUMsQ0FBQTs7O0lBRUssYUFBYTs7OztBQUFHLFVBQUMsT0FBZTs7UUFDOUIsR0FBRyxHQUFHLEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxVQUFVLEVBQUUsS0FBSyxFQUFFLGFBQWEsRUFBRSxLQUFLLEVBQUU7SUFDdEUsR0FBRyxDQUFDLElBQUksR0FBRyxPQUFPLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsVUFBVSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7SUFDMUQsSUFBSSxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsRUFBRTtRQUNqQyxHQUFHLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNoQixHQUFHLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQztLQUMxQjtJQUNELElBQUksR0FBRyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLEVBQUU7UUFDaEMsR0FBRyxDQUFDLElBQUksR0FBRyxPQUFPLENBQUM7UUFDbkIsR0FBRyxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7S0FDdkI7SUFDRCxPQUFPLEdBQUcsQ0FBQztBQUNiLENBQUMsQ0FBQTs7Ozs7Ozs7Ozs7Ozs7QUFjRDtJQUlxQywyQ0FBYTtJQW9IaEQseUJBQ1MsV0FBMEIsRUFDMUIsVUFBc0IsRUFDdEIsUUFBbUIsRUFDbEIsUUFBa0I7UUFKNUIsWUFNRSxrQkFBTSxXQUFXLEVBQUUsVUFBVSxFQUFFLFFBQVEsQ0FBQyxTQUN6QztRQU5RLGlCQUFXLEdBQVgsV0FBVyxDQUFlO1FBQzFCLGdCQUFVLEdBQVYsVUFBVSxDQUFZO1FBQ3RCLGNBQVEsR0FBUixRQUFRLENBQVc7UUFDbEIsY0FBUSxHQUFSLFFBQVEsQ0FBVTtRQW5IbkIsY0FBUSxHQUFXLENBQUMsQ0FBQzs7OztRQWVyQixVQUFJLEdBQUcsS0FBSyxDQUFDO1FBdUJkLFFBQUUsR0FBRyxLQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsQ0FBQzs7SUFnRjNDLENBQUM7SUF6SHdCLHNCQUFJLG1DQUFNO1FBRG5DLG1DQUFtQzs7Ozs7O1FBQ1YsVUFBVyxLQUFjO1lBQ2hELElBQUksQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDO1FBQ3BCLENBQUM7OztPQUFBO0lBRUQsc0JBQWEsbUNBQU07Ozs7O1FBQW5CLFVBQW9CLEtBQWE7WUFDL0IsSUFBSSxDQUFDLElBQUksR0FBRyxLQUFLLENBQUM7UUFDcEIsQ0FBQzs7O09BQUE7SUFDRCxzQkFBYSxvQ0FBTzs7Ozs7UUFBcEIsVUFBcUIsS0FBZ0I7WUFDbkMsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDckIsQ0FBQzs7O09BQUE7SUFDRCxzQkFBYSwyQ0FBYzs7Ozs7UUFBM0IsVUFBNEIsS0FBYTtZQUN2QyxJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztRQUM1QixDQUFDOzs7T0FBQTtJQUNELHNCQUFhLHVDQUFVOzs7OztRQUF2QixVQUF3QixLQUFhO1lBQ25DLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO1FBQ3hCLENBQUM7OztPQUFBO0lBUUQsc0JBQ0ksaUNBQUk7Ozs7UUFZUjtZQUNFLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztRQUNwQixDQUFDOzs7OztRQWZELFVBQ1MsS0FBYTtZQUNwQixJQUFJLEtBQUssSUFBSSxLQUFLLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxFQUFFOztvQkFDbEMsUUFBUSxHQUFHLGdCQUFnQixDQUFDLEtBQUssQ0FBQzs7b0JBQ2xDLElBQUksR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFO2dCQUM5RCxJQUFJLElBQUksSUFBSSxJQUFJLENBQUMsSUFBSSxLQUFLLElBQUksRUFBRTtvQkFDOUIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7aUJBQ25CO2FBQ0Y7aUJBQU07Z0JBQ0wsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7YUFDcEI7UUFDSCxDQUFDOzs7T0FBQTtJQVVEOzs7T0FHRzs7Ozs7OztJQUNLLHFDQUFXOzs7Ozs7SUFBbkIsVUFBb0IsTUFBdUI7UUFBM0MsaUJBV0M7UUFYbUIsdUJBQUEsRUFBQSxjQUF1QjtRQUN6QyxJQUFJLENBQUMsTUFBTSxFQUFFO1lBQ1gsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1NBQ3JCO1FBQ0QsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLElBQUk7Ozs7UUFBQyxVQUFBLEdBQUc7WUFDekIsS0FBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNyQixJQUFJLENBQUMsTUFBTSxJQUFJLEdBQUcsRUFBRTtnQkFDbEIsS0FBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDckIsS0FBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsQ0FBQzthQUN4QjtRQUNILENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7Ozs7O0lBRU8sNENBQWtCOzs7OztJQUExQixVQUEyQixTQUFpQjs7WUFDcEMsR0FBRyxHQUFHLGdCQUFnQixDQUFDLFNBQVMsQ0FBQztRQUN2QyxJQUFJLEdBQUcsRUFBRTtZQUNELElBQUEsNEJBQTZELEVBQTNELGNBQUksRUFBRSwwQkFBVSxFQUFFLGdDQUF5QztZQUNuRSxJQUFJLFVBQVUsRUFBRTtnQkFDZCxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQzthQUNuQztZQUNELElBQUksYUFBYSxFQUFFO2dCQUNqQixJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQzthQUN0QztZQUNELElBQUksSUFBSSxDQUFDLElBQUksS0FBSyxJQUFJLEVBQUU7Z0JBQ3RCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO2dCQUNsQixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQ3hCO1NBQ0Y7SUFDSCxDQUFDOzs7Ozs7SUFFTyxvQ0FBVTs7Ozs7SUFBbEIsVUFBbUIsR0FBZTtRQUNoQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsSUFBSSxLQUFLLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsRUFBRTtZQUMvRyxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxHQUFHLEVBQUUsY0FBYyxDQUFDLENBQUM7U0FDN0M7YUFBTTtZQUNMLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLEdBQUcsRUFBRSxjQUFjLENBQUMsQ0FBQztTQUNoRDtJQUNILENBQUM7Ozs7OztJQUVPLHNDQUFZOzs7OztJQUFwQixVQUFxQixHQUFlO1FBQ2xDLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNqQixJQUFJLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxHQUFHLEVBQUUsT0FBTyxFQUFFLHVCQUFxQixJQUFJLENBQUMsUUFBUSxTQUFNLENBQUMsQ0FBQztTQUNwRjthQUFNO1lBQ0wsSUFBSSxDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUMsR0FBRyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1NBQzdDO0lBQ0gsQ0FBQzs7Ozs7SUFFTyxzQ0FBWTs7OztJQUFwQjtRQUNFLElBQUksT0FBTyxJQUFJLENBQUMsSUFBSSxLQUFLLFFBQVEsRUFBRTs7Z0JBQzNCLGdCQUFnQixHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUM7O2dCQUNoRCxHQUFHLEdBQUcsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUM7WUFDL0MsSUFBSSxHQUFHLEVBQUU7Z0JBQ1AsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxFQUFFLGFBQVcsSUFBSSxDQUFDLElBQU0sQ0FBQyxDQUFDO2dCQUM5RCxJQUFJLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLE9BQU8sRUFBRSxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQzthQUMxRTtpQkFBTTtnQkFDTCxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLGFBQVcsSUFBSSxDQUFDLElBQU0sQ0FBQyxDQUFDO2FBQ3pEO1NBQ0Y7SUFDSCxDQUFDOzs7Ozs7SUFFTyxvQ0FBVTs7Ozs7SUFBbEIsVUFBbUIsR0FBc0I7UUFDdkMsSUFBSSxPQUFPLElBQUksQ0FBQyxJQUFJLEtBQUssUUFBUSxJQUFJLEdBQUcsRUFBRTtZQUN4QyxJQUFJLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxHQUFHLEVBQUUsV0FBVyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUN4RCxJQUFJLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxHQUFHLEVBQUUsYUFBYSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1NBQ3hEO0lBQ0gsQ0FBQzs7Ozs7SUFXRCxxQ0FBVzs7OztJQUFYLFVBQVksT0FBc0I7UUFDeEIsSUFBQSxtQkFBSSxFQUFFLHVCQUFNLEVBQUUsdUNBQWMsRUFBRSxtQ0FBWSxFQUFFLG1CQUFJLEVBQUUsdUJBQU0sRUFBRSxxQkFBSyxFQUFFLHlCQUFPLEVBQUUsMkJBQVE7UUFFMUYsSUFBSSxJQUFJLElBQUksTUFBTSxJQUFJLGNBQWMsSUFBSSxZQUFZLElBQUksSUFBSSxJQUFJLE1BQU0sSUFBSSxLQUFLLElBQUksT0FBTyxFQUFFO1lBQzFGLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztTQUNwQjthQUFNLElBQUksUUFBUSxFQUFFO1lBQ25CLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxVQUFVLENBQUMsQ0FBQztTQUN2QzthQUFNO1lBQ0wsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLGtCQUFrQixDQUFDLE1BQUksSUFBSSxDQUFDLFFBQVUsQ0FBQyxDQUFDLENBQUM7U0FDL0U7SUFDSCxDQUFDOzs7O0lBRUQsa0NBQVE7OztJQUFSO1FBQUEsaUJBb0JDO1FBbkJDLDBHQUEwRztRQUMxRyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLEVBQUU7WUFDdkQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDaEMsMEVBQTBFO1lBQzFFLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQzNDLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLEVBQUU7Z0JBQzNCLGlDQUFpQztnQkFDakMsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksZ0JBQWdCOzs7O2dCQUFDLFVBQUMsU0FBMkI7b0JBQ3hFLFNBQVM7eUJBQ04sTUFBTTs7OztvQkFBQyxVQUFDLFFBQXdCLElBQUssT0FBQSxRQUFRLENBQUMsYUFBYSxLQUFLLE9BQU8sRUFBbEMsQ0FBa0MsRUFBQzt5QkFDeEUsT0FBTzs7OztvQkFBQyxVQUFDLFFBQXdCLElBQUssT0FBQSxLQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxtQkFBQSxRQUFRLENBQUMsTUFBTSxFQUFlLENBQUMsQ0FBQyxTQUFTLENBQUMsRUFBbkUsQ0FBbUUsRUFBQyxDQUFDO2dCQUNoSCxDQUFDLEVBQUMsQ0FBQztnQkFDSCxJQUFJLENBQUMsaUJBQWlCLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQzthQUMvRDtTQUNGO1FBQ0QsOEVBQThFO1FBQzlFLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLEVBQUU7WUFDMUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxPQUFPLEVBQUUsQ0FBQSxhQUFXLElBQUksQ0FBQyxFQUFFLENBQUMsU0FBVyxDQUFBLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztTQUNyRjtJQUNILENBQUM7Ozs7SUFFRCxxQ0FBVzs7O0lBQVg7UUFDRSxJQUFJLElBQUksQ0FBQyxpQkFBaUIsRUFBRTtZQUMxQixJQUFJLENBQUMsaUJBQWlCLENBQUMsVUFBVSxFQUFFLENBQUM7U0FDckM7SUFDSCxDQUFDO0lBRUQ7O09BRUc7Ozs7O0lBQ0gsK0NBQXFCOzs7O0lBQXJCOztZQUNRLFFBQVEsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLFFBQVE7O1lBQzdCLE1BQU0sR0FBRyxRQUFRLENBQUMsTUFBTTtRQUM1QixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxRQUFRLENBQUMsTUFBTSxFQUFFO1lBQ2pDLE9BQU8sTUFBTSxFQUFFLEVBQUU7O29CQUNULEtBQUssR0FBRyxRQUFRLENBQUMsTUFBTSxDQUFDO2dCQUM5QixJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLEtBQUssS0FBSyxFQUFFO29CQUN6QyxJQUFJLENBQUMsV0FBVyxDQUFDLG1CQUFtQixDQUFDLG1CQUFBLEtBQUssRUFBYyxDQUFDLENBQUM7aUJBQzNEO2FBQ0Y7U0FDRjtJQUNILENBQUM7O2dCQXZMRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLHNCQUFzQjtvQkFDaEMsUUFBUSxFQUFFLFFBQVE7aUJBQ25COzs7O2dCQTNDUSxhQUFhO2dCQVZwQixVQUFVO2dCQUtWLFNBQVM7Z0JBVEYsUUFBUTs7O3lCQTREZCxLQUFLOzJCQUdMLEtBQUs7eUJBQ0wsS0FBSzswQkFHTCxLQUFLO2lDQUdMLEtBQUs7NkJBR0wsS0FBSzt1QkFLTCxLQUFLOzJCQUdMLEtBQUs7dUJBRUwsS0FBSzs7SUF2Qm1CO1FBQWYsWUFBWSxFQUFFOzs7aURBRXZCO0lBZ0xILHNCQUFDO0NBQUEsQUF4TEQsQ0FJcUMsYUFBYSxHQW9MakQ7U0FwTFksZUFBZTs7O0lBSzFCLG1DQUE4Qjs7Ozs7SUFlOUIsK0JBQXNCOzs7OztJQUd0QixtQ0FBMEI7Ozs7O0lBbUIxQiw0Q0FBNEM7Ozs7O0lBQzVDLDZCQUEyQzs7Ozs7SUFDM0MsZ0NBQXNCOztJQXlFcEIsc0NBQWlDOztJQUNqQyxxQ0FBNkI7O0lBQzdCLG1DQUEwQjs7Ozs7SUFDMUIsbUNBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcclxuICovXHJcblxyXG5pbXBvcnQgeyBQbGF0Zm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wbGF0Zm9ybSc7XHJcbmltcG9ydCB7XHJcbiAgQWZ0ZXJDb250ZW50Q2hlY2tlZCxcclxuICBEaXJlY3RpdmUsXHJcbiAgRWxlbWVudFJlZixcclxuICBJbnB1dCxcclxuICBPbkNoYW5nZXMsXHJcbiAgT25EZXN0cm95LFxyXG4gIE9uSW5pdCxcclxuICBSZW5kZXJlcjIsXHJcbiAgU2ltcGxlQ2hhbmdlc1xyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBJY29uRGlyZWN0aXZlLCBUaGVtZVR5cGUgfSBmcm9tICdAYW50LWRlc2lnbi9pY29ucy1hbmd1bGFyJztcclxuaW1wb3J0IHsgSW5wdXRCb29sZWFuIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcclxuaW1wb3J0IHsgTnpJY29uU2VydmljZSB9IGZyb20gJy4vbnotaWNvbi5zZXJ2aWNlJztcclxuXHJcbmNvbnN0IGljb25UeXBlUkUgPSAvXmFudGljb25cXC1cXHcvO1xyXG5cclxuY29uc3QgZ2V0SWNvblR5cGVDbGFzcyA9IChjbGFzc05hbWU6IHN0cmluZyk6IHsgbmFtZTogc3RyaW5nOyBpbmRleDogbnVtYmVyIH0gfCB1bmRlZmluZWQgPT4ge1xyXG4gIGlmICghY2xhc3NOYW1lKSB7XHJcbiAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBjb25zdCBjbGFzc0FyciA9IGNsYXNzTmFtZS5zcGxpdCgvXFxzLyk7XHJcbiAgICBjb25zdCBpbmRleCA9IGNsYXNzQXJyLmZpbmRJbmRleChjbHMgPT4gY2xzICE9PSAnYW50aWNvbicgJiYgY2xzICE9PSAnYW50aWNvbi1zcGluJyAmJiAhIWNscy5tYXRjaChpY29uVHlwZVJFKSk7XHJcbiAgICByZXR1cm4gaW5kZXggPT09IC0xID8gdW5kZWZpbmVkIDogeyBuYW1lOiBjbGFzc0FycltpbmRleF0sIGluZGV4IH07XHJcbiAgfVxyXG59O1xyXG5cclxuY29uc3Qgbm9ybWFsaXplVHlwZSA9IChyYXdUeXBlOiBzdHJpbmcpOiB7IHR5cGU6IHN0cmluZzsgY3Jvc3NFcnJvcjogYm9vbGVhbjsgdmVydGljYWxFcnJvcjogYm9vbGVhbiB9ID0+IHtcclxuICBjb25zdCByZXQgPSB7IHR5cGU6IHJhd1R5cGUsIGNyb3NzRXJyb3I6IGZhbHNlLCB2ZXJ0aWNhbEVycm9yOiBmYWxzZSB9O1xyXG4gIHJldC50eXBlID0gcmF3VHlwZSA/IHJhd1R5cGUucmVwbGFjZSgnYW50aWNvbi0nLCAnJykgOiAnJztcclxuICBpZiAocmV0LnR5cGUuaW5jbHVkZXMoJ3ZlcnRpY2xlJykpIHtcclxuICAgIHJldC50eXBlID0gJ3VwJztcclxuICAgIHJldC52ZXJ0aWNhbEVycm9yID0gdHJ1ZTtcclxuICB9XHJcbiAgaWYgKHJldC50eXBlLnN0YXJ0c1dpdGgoJ2Nyb3NzJykpIHtcclxuICAgIHJldC50eXBlID0gJ2Nsb3NlJztcclxuICAgIHJldC5jcm9zc0Vycm9yID0gdHJ1ZTtcclxuICB9XHJcbiAgcmV0dXJuIHJldDtcclxufTtcclxuXHJcbi8qKlxyXG4gKiBUaGlzIGRpcmVjdGl2ZSBleHRlbmRzIEljb25EaXJlY3RpdmUgdG8gcHJvdmlkZTpcclxuICpcclxuICogLSBJY29uRm9udCBzdXBwb3J0XHJcbiAqIC0gc3Bpbm5pbmdcclxuICogLSBvbGQgQVBJIGNvbXBhdGliaWxpdHlcclxuICpcclxuICogQGJyZWFrLWNoYW5nZXNcclxuICpcclxuICogLSBvbGQgQVBJIGNvbXBhdGliaWxpdHksIGljb24gY2xhc3MgbmFtZXMgd291bGQgbm90IGJlIHN1cHBvcnRlZC5cclxuICogLSBwcm9wZXJ0aWVzIHRoYXQgbm90IHN0YXJ0ZWQgd2l0aCBgbnpgLlxyXG4gKi9cclxuQERpcmVjdGl2ZSh7XHJcbiAgc2VsZWN0b3I6ICdpLmFudGljb24sIFtuei1pY29uXScsXHJcbiAgZXhwb3J0QXM6ICduekljb24nXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOekljb25EaXJlY3RpdmUgZXh0ZW5kcyBJY29uRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSwgQWZ0ZXJDb250ZW50Q2hlY2tlZCB7XHJcbiAgLyoqIFByb3BlcnRpZXMgd2l0aCBgbnpgIHByZWZpeC4gKi9cclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgc2V0IG56U3Bpbih2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgdGhpcy5zcGluID0gdmFsdWU7XHJcbiAgfVxyXG4gIEBJbnB1dCgpIG56Um90YXRlOiBudW1iZXIgPSAwO1xyXG4gIEBJbnB1dCgpIHNldCBuelR5cGUodmFsdWU6IHN0cmluZykge1xyXG4gICAgdGhpcy50eXBlID0gdmFsdWU7XHJcbiAgfVxyXG4gIEBJbnB1dCgpIHNldCBuelRoZW1lKHZhbHVlOiBUaGVtZVR5cGUpIHtcclxuICAgIHRoaXMudGhlbWUgPSB2YWx1ZTtcclxuICB9XHJcbiAgQElucHV0KCkgc2V0IG56VHdvdG9uZUNvbG9yKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgIHRoaXMudHdvVG9uZUNvbG9yID0gdmFsdWU7XHJcbiAgfVxyXG4gIEBJbnB1dCgpIHNldCBuekljb25mb250KHZhbHVlOiBzdHJpbmcpIHtcclxuICAgIHRoaXMuaWNvbmZvbnQgPSB2YWx1ZTtcclxuICB9XHJcblxyXG4gIC8qKiBAZGVwcmVjYXRlZCA4LjAuMCBhdm9pZCBleHBvc2luZyBsb3cgbGF5ZXIgQVBJLiAqL1xyXG4gIEBJbnB1dCgpIHNwaW4gPSBmYWxzZTtcclxuXHJcbiAgLyoqIEBkZXByZWNhdGVkIDguMC4wIGF2b2lkIGV4cG9zaW5nIGxvdyBsYXllciBBUEkuICovXHJcbiAgQElucHV0KCkgaWNvbmZvbnQ6IHN0cmluZztcclxuXHJcbiAgQElucHV0KClcclxuICBzZXQgdHlwZSh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICBpZiAodmFsdWUgJiYgdmFsdWUuc3RhcnRzV2l0aCgnYW50aWNvbicpKSB7XHJcbiAgICAgIGNvbnN0IHJhd0NsYXNzID0gZ2V0SWNvblR5cGVDbGFzcyh2YWx1ZSk7XHJcbiAgICAgIGNvbnN0IHR5cGUgPSByYXdDbGFzcyA/IG5vcm1hbGl6ZVR5cGUocmF3Q2xhc3MubmFtZSkudHlwZSA6ICcnO1xyXG4gICAgICBpZiAodHlwZSAmJiB0aGlzLnR5cGUgIT09IHR5cGUpIHtcclxuICAgICAgICB0aGlzLl90eXBlID0gdHlwZTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5fdHlwZSA9IHZhbHVlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0IHR5cGUoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0aGlzLl90eXBlO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjbGFzc05hbWVPYnNlcnZlcjogTXV0YXRpb25PYnNlcnZlcjtcclxuICBwcml2YXRlIGVsID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ7XHJcbiAgcHJpdmF0ZSBfdHlwZTogc3RyaW5nO1xyXG5cclxuICAvKipcclxuICAgKiBSZXBsYWNlbWVudCBvZiBgY2hhbmdlSWNvbmAgZm9yIG1vcmUgbW9kaWZpY2F0aW9ucy5cclxuICAgKiBAcGFyYW0gb2xkQVBJXHJcbiAgICovXHJcbiAgcHJpdmF0ZSBjaGFuZ2VJY29uMihvbGRBUEk6IGJvb2xlYW4gPSBmYWxzZSk6IHZvaWQge1xyXG4gICAgaWYgKCFvbGRBUEkpIHtcclxuICAgICAgdGhpcy5zZXRDbGFzc05hbWUoKTtcclxuICAgIH1cclxuICAgIHRoaXMuX2NoYW5nZUljb24oKS50aGVuKHN2ZyA9PiB7XHJcbiAgICAgIHRoaXMuc2V0U1ZHRGF0YShzdmcpO1xyXG4gICAgICBpZiAoIW9sZEFQSSAmJiBzdmcpIHtcclxuICAgICAgICB0aGlzLmhhbmRsZVNwaW4oc3ZnKTtcclxuICAgICAgICB0aGlzLmhhbmRsZVJvdGF0ZShzdmcpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgY2xhc3NDaGFuZ2VIYW5kbGVyKGNsYXNzTmFtZTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICBjb25zdCByZXQgPSBnZXRJY29uVHlwZUNsYXNzKGNsYXNzTmFtZSk7XHJcbiAgICBpZiAocmV0KSB7XHJcbiAgICAgIGNvbnN0IHsgdHlwZSwgY3Jvc3NFcnJvciwgdmVydGljYWxFcnJvciB9ID0gbm9ybWFsaXplVHlwZShyZXQubmFtZSk7XHJcbiAgICAgIGlmIChjcm9zc0Vycm9yKSB7XHJcbiAgICAgICAgdGhpcy5pY29uU2VydmljZS53YXJuQVBJKCdjcm9zcycpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmICh2ZXJ0aWNhbEVycm9yKSB7XHJcbiAgICAgICAgdGhpcy5pY29uU2VydmljZS53YXJuQVBJKCd2ZXJ0aWNhbCcpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmICh0aGlzLnR5cGUgIT09IHR5cGUpIHtcclxuICAgICAgICB0aGlzLl90eXBlID0gdHlwZTtcclxuICAgICAgICB0aGlzLmNoYW5nZUljb24yKHRydWUpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGhhbmRsZVNwaW4oc3ZnOiBTVkdFbGVtZW50KTogdm9pZCB7XHJcbiAgICBpZiAoKHRoaXMuc3BpbiB8fCB0aGlzLnR5cGUgPT09ICdsb2FkaW5nJykgJiYgIXRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygnYW50aWNvbi1zcGluJykpIHtcclxuICAgICAgdGhpcy5yZW5kZXJlci5hZGRDbGFzcyhzdmcsICdhbnRpY29uLXNwaW4nKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2xhc3Moc3ZnLCAnYW50aWNvbi1zcGluJyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGhhbmRsZVJvdGF0ZShzdmc6IFNWR0VsZW1lbnQpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLm56Um90YXRlKSB7XHJcbiAgICAgIHRoaXMucmVuZGVyZXIuc2V0QXR0cmlidXRlKHN2ZywgJ3N0eWxlJywgYHRyYW5zZm9ybTogcm90YXRlKCR7dGhpcy5uelJvdGF0ZX1kZWcpYCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnJlbmRlcmVyLnJlbW92ZUF0dHJpYnV0ZShzdmcsICdzdHlsZScpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBzZXRDbGFzc05hbWUoKTogdm9pZCB7XHJcbiAgICBpZiAodHlwZW9mIHRoaXMudHlwZSA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgY29uc3QgaWNvbkNsYXNzTmFtZUFyciA9IHRoaXMuZWwuY2xhc3NOYW1lLnNwbGl0KC9cXHMvKTtcclxuICAgICAgY29uc3QgcmV0ID0gZ2V0SWNvblR5cGVDbGFzcyh0aGlzLmVsLmNsYXNzTmFtZSk7XHJcbiAgICAgIGlmIChyZXQpIHtcclxuICAgICAgICBpY29uQ2xhc3NOYW1lQXJyLnNwbGljZShyZXQuaW5kZXgsIDEsIGBhbnRpY29uLSR7dGhpcy50eXBlfWApO1xyXG4gICAgICAgIHRoaXMucmVuZGVyZXIuc2V0QXR0cmlidXRlKHRoaXMuZWwsICdjbGFzcycsIGljb25DbGFzc05hbWVBcnIuam9pbignICcpKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLnJlbmRlcmVyLmFkZENsYXNzKHRoaXMuZWwsIGBhbnRpY29uLSR7dGhpcy50eXBlfWApO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIHNldFNWR0RhdGEoc3ZnOiBTVkdFbGVtZW50IHwgbnVsbCk6IHZvaWQge1xyXG4gICAgaWYgKHR5cGVvZiB0aGlzLnR5cGUgPT09ICdzdHJpbmcnICYmIHN2Zykge1xyXG4gICAgICB0aGlzLnJlbmRlcmVyLnNldEF0dHJpYnV0ZShzdmcsICdkYXRhLWljb24nLCB0aGlzLnR5cGUpO1xyXG4gICAgICB0aGlzLnJlbmRlcmVyLnNldEF0dHJpYnV0ZShzdmcsICdhcmlhLWhpZGRlbicsICd0cnVlJyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHB1YmxpYyBpY29uU2VydmljZTogTnpJY29uU2VydmljZSxcclxuICAgIHB1YmxpYyBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxyXG4gICAgcHVibGljIHJlbmRlcmVyOiBSZW5kZXJlcjIsXHJcbiAgICBwcml2YXRlIHBsYXRmb3JtOiBQbGF0Zm9ybVxyXG4gICkge1xyXG4gICAgc3VwZXIoaWNvblNlcnZpY2UsIGVsZW1lbnRSZWYsIHJlbmRlcmVyKTtcclxuICB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcclxuICAgIGNvbnN0IHsgdHlwZSwgbnpUeXBlLCBuelR3b3RvbmVDb2xvciwgdHdvVG9uZUNvbG9yLCBzcGluLCBuelNwaW4sIHRoZW1lLCBuelRoZW1lLCBuelJvdGF0ZSB9ID0gY2hhbmdlcztcclxuXHJcbiAgICBpZiAodHlwZSB8fCBuelR5cGUgfHwgbnpUd290b25lQ29sb3IgfHwgdHdvVG9uZUNvbG9yIHx8IHNwaW4gfHwgbnpTcGluIHx8IHRoZW1lIHx8IG56VGhlbWUpIHtcclxuICAgICAgdGhpcy5jaGFuZ2VJY29uMigpO1xyXG4gICAgfSBlbHNlIGlmIChuelJvdGF0ZSkge1xyXG4gICAgICB0aGlzLmhhbmRsZVJvdGF0ZSh0aGlzLmVsLmZpcnN0Q2hpbGQpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5fc2V0U1ZHRWxlbWVudCh0aGlzLmljb25TZXJ2aWNlLmNyZWF0ZUljb25mb250SWNvbihgIyR7dGhpcy5pY29uZm9udH1gKSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpOiB2b2lkIHtcclxuICAgIC8vIElmIGB0aGlzLnR5cGVgIGlzIG5vdCBzcGVjaWZpZWQgYW5kIGBjbGFzc0xpc3RgIGNvbnRhaW5zIGBhbnRpY29uYCwgaXQgc2hvdWxkIGJlIGFuIGljb24gdXNpbmcgb2xkIEFQSS5cclxuICAgIGlmICghdGhpcy50eXBlICYmIHRoaXMuZWwuY2xhc3NMaXN0LmNvbnRhaW5zKCdhbnRpY29uJykpIHtcclxuICAgICAgdGhpcy5pY29uU2VydmljZS53YXJuQVBJKCdvbGQnKTtcclxuICAgICAgLy8gR2V0IGB0eXBlYCBmcm9tIGBjbGFzc05hbWVgLiBJZiBub3QsIGluaXRpYWwgcmVuZGVyaW5nIHdvdWxkIGJlIG1pc3NlZC5cclxuICAgICAgdGhpcy5jbGFzc0NoYW5nZUhhbmRsZXIodGhpcy5lbC5jbGFzc05hbWUpO1xyXG4gICAgICBpZiAodGhpcy5wbGF0Zm9ybS5pc0Jyb3dzZXIpIHtcclxuICAgICAgICAvLyBBZGQgYGNsYXNzYCBtdXRhdGlvbiBvYnNlcnZlci5cclxuICAgICAgICB0aGlzLmNsYXNzTmFtZU9ic2VydmVyID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoKG11dGF0aW9uczogTXV0YXRpb25SZWNvcmRbXSkgPT4ge1xyXG4gICAgICAgICAgbXV0YXRpb25zXHJcbiAgICAgICAgICAgIC5maWx0ZXIoKG11dGF0aW9uOiBNdXRhdGlvblJlY29yZCkgPT4gbXV0YXRpb24uYXR0cmlidXRlTmFtZSA9PT0gJ2NsYXNzJylcclxuICAgICAgICAgICAgLmZvckVhY2goKG11dGF0aW9uOiBNdXRhdGlvblJlY29yZCkgPT4gdGhpcy5jbGFzc0NoYW5nZUhhbmRsZXIoKG11dGF0aW9uLnRhcmdldCBhcyBIVE1MRWxlbWVudCkuY2xhc3NOYW1lKSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5jbGFzc05hbWVPYnNlcnZlci5vYnNlcnZlKHRoaXMuZWwsIHsgYXR0cmlidXRlczogdHJ1ZSB9KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8gSWYgYGNsYXNzTGlzdGAgZG9lcyBub3QgY29udGFpbiBgYW50aWNvbmAsIGFkZCBpdCBiZWZvcmUgb3RoZXIgY2xhc3MgbmFtZXMuXHJcbiAgICBpZiAoIXRoaXMuZWwuY2xhc3NMaXN0LmNvbnRhaW5zKCdhbnRpY29uJykpIHtcclxuICAgICAgdGhpcy5yZW5kZXJlci5zZXRBdHRyaWJ1dGUodGhpcy5lbCwgJ2NsYXNzJywgYGFudGljb24gJHt0aGlzLmVsLmNsYXNzTmFtZX1gLnRyaW0oKSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmNsYXNzTmFtZU9ic2VydmVyKSB7XHJcbiAgICAgIHRoaXMuY2xhc3NOYW1lT2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogSWYgY3VzdG9tIGNvbnRlbnQgaXMgcHJvdmlkZWQsIHRyeSB0byBub3JtYWxpemUgU1ZHIGVsZW1lbnRzLlxyXG4gICAqL1xyXG4gIG5nQWZ0ZXJDb250ZW50Q2hlY2tlZCgpOiB2b2lkIHtcclxuICAgIGNvbnN0IGNoaWxkcmVuID0gdGhpcy5lbC5jaGlsZHJlbjtcclxuICAgIGxldCBsZW5ndGggPSBjaGlsZHJlbi5sZW5ndGg7XHJcbiAgICBpZiAoIXRoaXMudHlwZSAmJiBjaGlsZHJlbi5sZW5ndGgpIHtcclxuICAgICAgd2hpbGUgKGxlbmd0aC0tKSB7XHJcbiAgICAgICAgY29uc3QgY2hpbGQgPSBjaGlsZHJlbltsZW5ndGhdO1xyXG4gICAgICAgIGlmIChjaGlsZC50YWdOYW1lLnRvTG93ZXJDYXNlKCkgPT09ICdzdmcnKSB7XHJcbiAgICAgICAgICB0aGlzLmljb25TZXJ2aWNlLm5vcm1hbGl6ZVN2Z0VsZW1lbnQoY2hpbGQgYXMgU1ZHRWxlbWVudCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==