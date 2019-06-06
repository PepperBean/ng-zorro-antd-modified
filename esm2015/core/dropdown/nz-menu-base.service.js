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
import { Injectable } from '@angular/core';
import { merge, BehaviorSubject, Subject } from 'rxjs';
export class NzMenuBaseService {
    constructor() {
        this.menuItemClick$ = new Subject(); // tslint:disable-line no-any
        // tslint:disable-line no-any
        this.theme$ = new Subject();
        this.mode$ = new BehaviorSubject('vertical');
        this.inlineIndent$ = new BehaviorSubject(24);
        this.check$ = merge(this.theme$, this.mode$, this.inlineIndent$);
        this.theme = 'light';
        this.mode = 'vertical';
        this.inlineIndent = 24;
        this.menuOpen$ = new BehaviorSubject(false);
    }
    // tslint:disable-next-line no-any
    /**
     * @param {?} menu
     * @return {?}
     */
    onMenuItemClick(menu) {
        this.menuItemClick$.next(menu);
    }
    /**
     * @param {?} mode
     * @return {?}
     */
    setMode(mode) {
        this.mode = mode;
        this.mode$.next(mode);
    }
    /**
     * @param {?} theme
     * @return {?}
     */
    setTheme(theme) {
        this.theme = theme;
        this.theme$.next(theme);
    }
    /**
     * @param {?} indent
     * @return {?}
     */
    setInlineIndent(indent) {
        this.inlineIndent = indent;
        this.inlineIndent$.next(indent);
    }
}
NzMenuBaseService.decorators = [
    { type: Injectable }
];
if (false) {
    /** @type {?} */
    NzMenuBaseService.prototype.isInDropDown;
    /** @type {?} */
    NzMenuBaseService.prototype.menuItemClick$;
    /** @type {?} */
    NzMenuBaseService.prototype.theme$;
    /** @type {?} */
    NzMenuBaseService.prototype.mode$;
    /** @type {?} */
    NzMenuBaseService.prototype.inlineIndent$;
    /** @type {?} */
    NzMenuBaseService.prototype.check$;
    /** @type {?} */
    NzMenuBaseService.prototype.theme;
    /** @type {?} */
    NzMenuBaseService.prototype.mode;
    /** @type {?} */
    NzMenuBaseService.prototype.inlineIndent;
    /** @type {?} */
    NzMenuBaseService.prototype.menuOpen$;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotbWVudS1iYXNlLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL2NvcmUvIiwic291cmNlcyI6WyJkcm9wZG93bi9uei1tZW51LWJhc2Uuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQVFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLEtBQUssRUFBRSxlQUFlLEVBQUUsT0FBTyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBS3ZELE1BQU0sT0FBTyxpQkFBaUI7SUFEOUI7UUFHRSxtQkFBYyxHQUFHLElBQUksT0FBTyxFQUFPLENBQUMsQ0FBQyw2QkFBNkI7O1FBQ2xFLFdBQU0sR0FBRyxJQUFJLE9BQU8sRUFBRSxDQUFDO1FBQ3ZCLFVBQUssR0FBRyxJQUFJLGVBQWUsQ0FBcUIsVUFBVSxDQUFDLENBQUM7UUFDNUQsa0JBQWEsR0FBRyxJQUFJLGVBQWUsQ0FBUyxFQUFFLENBQUMsQ0FBQztRQUNoRCxXQUFNLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDNUQsVUFBSyxHQUFxQixPQUFPLENBQUM7UUFDbEMsU0FBSSxHQUF1QixVQUFVLENBQUM7UUFDdEMsaUJBQVksR0FBRyxFQUFFLENBQUM7UUFDbEIsY0FBUyxHQUFHLElBQUksZUFBZSxDQUFVLEtBQUssQ0FBQyxDQUFDO0lBcUJsRCxDQUFDOzs7Ozs7SUFsQkMsZUFBZSxDQUFDLElBQVM7UUFDdkIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDakMsQ0FBQzs7Ozs7SUFFRCxPQUFPLENBQUMsSUFBd0I7UUFDOUIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDeEIsQ0FBQzs7Ozs7SUFFRCxRQUFRLENBQUMsS0FBdUI7UUFDOUIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDMUIsQ0FBQzs7Ozs7SUFFRCxlQUFlLENBQUMsTUFBYztRQUM1QixJQUFJLENBQUMsWUFBWSxHQUFHLE1BQU0sQ0FBQztRQUMzQixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNsQyxDQUFDOzs7WUEvQkYsVUFBVTs7OztJQUVULHlDQUFzQjs7SUFDdEIsMkNBQW9DOztJQUNwQyxtQ0FBdUI7O0lBQ3ZCLGtDQUE0RDs7SUFDNUQsMENBQWdEOztJQUNoRCxtQ0FBNEQ7O0lBQzVELGtDQUFrQzs7SUFDbEMsaUNBQXNDOztJQUN0Qyx5Q0FBa0I7O0lBQ2xCLHNDQUFnRCIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5cclxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBtZXJnZSwgQmVoYXZpb3JTdWJqZWN0LCBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcblxyXG5pbXBvcnQgeyBOekRpcmVjdGlvblZISVR5cGUgfSBmcm9tICcuLi90eXBlcyc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBOek1lbnVCYXNlU2VydmljZSB7XHJcbiAgaXNJbkRyb3BEb3duOiBib29sZWFuO1xyXG4gIG1lbnVJdGVtQ2xpY2skID0gbmV3IFN1YmplY3Q8YW55PigpOyAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lIG5vLWFueVxyXG4gIHRoZW1lJCA9IG5ldyBTdWJqZWN0KCk7XHJcbiAgbW9kZSQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PE56RGlyZWN0aW9uVkhJVHlwZT4oJ3ZlcnRpY2FsJyk7XHJcbiAgaW5saW5lSW5kZW50JCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8bnVtYmVyPigyNCk7XHJcbiAgY2hlY2skID0gbWVyZ2UodGhpcy50aGVtZSQsIHRoaXMubW9kZSQsIHRoaXMuaW5saW5lSW5kZW50JCk7XHJcbiAgdGhlbWU6ICdsaWdodCcgfCAnZGFyaycgPSAnbGlnaHQnO1xyXG4gIG1vZGU6IE56RGlyZWN0aW9uVkhJVHlwZSA9ICd2ZXJ0aWNhbCc7XHJcbiAgaW5saW5lSW5kZW50ID0gMjQ7XHJcbiAgbWVudU9wZW4kID0gbmV3IEJlaGF2aW9yU3ViamVjdDxib29sZWFuPihmYWxzZSk7XHJcblxyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZSBuby1hbnlcclxuICBvbk1lbnVJdGVtQ2xpY2sobWVudTogYW55KTogdm9pZCB7XHJcbiAgICB0aGlzLm1lbnVJdGVtQ2xpY2skLm5leHQobWVudSk7XHJcbiAgfVxyXG5cclxuICBzZXRNb2RlKG1vZGU6IE56RGlyZWN0aW9uVkhJVHlwZSk6IHZvaWQge1xyXG4gICAgdGhpcy5tb2RlID0gbW9kZTtcclxuICAgIHRoaXMubW9kZSQubmV4dChtb2RlKTtcclxuICB9XHJcblxyXG4gIHNldFRoZW1lKHRoZW1lOiAnbGlnaHQnIHwgJ2RhcmsnKTogdm9pZCB7XHJcbiAgICB0aGlzLnRoZW1lID0gdGhlbWU7XHJcbiAgICB0aGlzLnRoZW1lJC5uZXh0KHRoZW1lKTtcclxuICB9XHJcblxyXG4gIHNldElubGluZUluZGVudChpbmRlbnQ6IG51bWJlcik6IHZvaWQge1xyXG4gICAgdGhpcy5pbmxpbmVJbmRlbnQgPSBpbmRlbnQ7XHJcbiAgICB0aGlzLmlubGluZUluZGVudCQubmV4dChpbmRlbnQpO1xyXG4gIH1cclxufVxyXG4iXX0=