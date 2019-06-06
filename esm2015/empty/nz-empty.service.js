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
import { Inject, Injectable, Optional, TemplateRef, Type } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { NZ_DEFAULT_EMPTY_CONTENT } from './nz-empty-config';
import { getEmptyContentTypeError } from './nz-empty-error';
import * as i0 from "@angular/core";
import * as i1 from "./nz-empty-config";
/**
 * @template T
 */
// tslint:disable-next-line:no-any
export class NzEmptyService {
    /**
     * @param {?} defaultEmptyContent
     */
    constructor(defaultEmptyContent) {
        this.defaultEmptyContent = defaultEmptyContent;
        this.userDefaultContent$ = new BehaviorSubject(undefined);
        if (this.defaultEmptyContent) {
            this.userDefaultContent$.next(this.defaultEmptyContent);
        }
    }
    /**
     * @param {?=} content
     * @return {?}
     */
    setDefaultContent(content) {
        if (typeof content === 'string' ||
            content === undefined ||
            content === null ||
            content instanceof TemplateRef ||
            content instanceof Type) {
            this.userDefaultContent$.next(content);
        }
        else {
            throw getEmptyContentTypeError(content);
        }
    }
    /**
     * @return {?}
     */
    resetDefault() {
        this.userDefaultContent$.next(undefined);
    }
}
NzEmptyService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
NzEmptyService.ctorParameters = () => [
    { type: Type, decorators: [{ type: Inject, args: [NZ_DEFAULT_EMPTY_CONTENT,] }, { type: Optional }] }
];
/** @nocollapse */ NzEmptyService.ngInjectableDef = i0.defineInjectable({ factory: function NzEmptyService_Factory() { return new NzEmptyService(i0.inject(i1.NZ_DEFAULT_EMPTY_CONTENT, 8)); }, token: NzEmptyService, providedIn: "root" });
if (false) {
    /** @type {?} */
    NzEmptyService.prototype.userDefaultContent$;
    /**
     * @type {?}
     * @private
     */
    NzEmptyService.prototype.defaultEmptyContent;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotZW1wdHkuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvZW1wdHkvIiwic291cmNlcyI6WyJuei1lbXB0eS5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBUUEsT0FBTyxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLFdBQVcsRUFBRSxJQUFJLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDaEYsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUN2QyxPQUFPLEVBQXdCLHdCQUF3QixFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDbkYsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sa0JBQWtCLENBQUM7Ozs7OztBQUs1RCxrQ0FBa0M7QUFDbEMsTUFBTSxPQUFPLGNBQWM7Ozs7SUFHekIsWUFBa0UsbUJBQTRCO1FBQTVCLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBUztRQUY5Rix3QkFBbUIsR0FBRyxJQUFJLGVBQWUsQ0FBbUMsU0FBUyxDQUFDLENBQUM7UUFHckYsSUFBSSxJQUFJLENBQUMsbUJBQW1CLEVBQUU7WUFDNUIsSUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsQ0FBQztTQUN6RDtJQUNILENBQUM7Ozs7O0lBRUQsaUJBQWlCLENBQUMsT0FBOEI7UUFDOUMsSUFDRSxPQUFPLE9BQU8sS0FBSyxRQUFRO1lBQzNCLE9BQU8sS0FBSyxTQUFTO1lBQ3JCLE9BQU8sS0FBSyxJQUFJO1lBQ2hCLE9BQU8sWUFBWSxXQUFXO1lBQzlCLE9BQU8sWUFBWSxJQUFJLEVBQ3ZCO1lBQ0EsSUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUN4QzthQUFNO1lBQ0wsTUFBTSx3QkFBd0IsQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUN6QztJQUNILENBQUM7Ozs7SUFFRCxZQUFZO1FBQ1YsSUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUMzQyxDQUFDOzs7WUE3QkYsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7O1lBUG1ELElBQUksdUJBWXpDLE1BQU0sU0FBQyx3QkFBd0IsY0FBRyxRQUFROzs7OztJQUZ2RCw2Q0FBdUY7Ozs7O0lBRTNFLDZDQUFrRiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5cclxuaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlLCBPcHRpb25hbCwgVGVtcGxhdGVSZWYsIFR5cGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IE56RW1wdHlDdXN0b21Db250ZW50LCBOWl9ERUZBVUxUX0VNUFRZX0NPTlRFTlQgfSBmcm9tICcuL256LWVtcHR5LWNvbmZpZyc7XHJcbmltcG9ydCB7IGdldEVtcHR5Q29udGVudFR5cGVFcnJvciB9IGZyb20gJy4vbnotZW1wdHktZXJyb3InO1xyXG5cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XHJcbmV4cG9ydCBjbGFzcyBOekVtcHR5U2VydmljZTxUID0gYW55PiB7XHJcbiAgdXNlckRlZmF1bHRDb250ZW50JCA9IG5ldyBCZWhhdmlvclN1YmplY3Q8TnpFbXB0eUN1c3RvbUNvbnRlbnQgfCB1bmRlZmluZWQ+KHVuZGVmaW5lZCk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoTlpfREVGQVVMVF9FTVBUWV9DT05URU5UKSBAT3B0aW9uYWwoKSBwcml2YXRlIGRlZmF1bHRFbXB0eUNvbnRlbnQ6IFR5cGU8VD4pIHtcclxuICAgIGlmICh0aGlzLmRlZmF1bHRFbXB0eUNvbnRlbnQpIHtcclxuICAgICAgdGhpcy51c2VyRGVmYXVsdENvbnRlbnQkLm5leHQodGhpcy5kZWZhdWx0RW1wdHlDb250ZW50KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHNldERlZmF1bHRDb250ZW50KGNvbnRlbnQ/OiBOekVtcHR5Q3VzdG9tQ29udGVudCk6IHZvaWQge1xyXG4gICAgaWYgKFxyXG4gICAgICB0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycgfHxcclxuICAgICAgY29udGVudCA9PT0gdW5kZWZpbmVkIHx8XHJcbiAgICAgIGNvbnRlbnQgPT09IG51bGwgfHxcclxuICAgICAgY29udGVudCBpbnN0YW5jZW9mIFRlbXBsYXRlUmVmIHx8XHJcbiAgICAgIGNvbnRlbnQgaW5zdGFuY2VvZiBUeXBlXHJcbiAgICApIHtcclxuICAgICAgdGhpcy51c2VyRGVmYXVsdENvbnRlbnQkLm5leHQoY29udGVudCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aHJvdyBnZXRFbXB0eUNvbnRlbnRUeXBlRXJyb3IoY29udGVudCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXNldERlZmF1bHQoKTogdm9pZCB7XHJcbiAgICB0aGlzLnVzZXJEZWZhdWx0Q29udGVudCQubmV4dCh1bmRlZmluZWQpO1xyXG4gIH1cclxufVxyXG4iXX0=