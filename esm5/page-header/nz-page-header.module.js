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
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NzAddOnModule } from 'ng-zorro-antd/core';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzPageHeaderBreadcrumbDirective, NzPageHeaderContentDirective, NzPageHeaderExtraDirective, NzPageHeaderFooterDirective, NzPageHeaderSubtitleDirective, NzPageHeaderTagDirective, NzPageHeaderTitleDirective } from './nz-page-header-cells';
import { NzPageHeaderComponent } from './nz-page-header.component';
/** @type {?} */
var NzPageHeaderCells = [
    NzPageHeaderTitleDirective,
    NzPageHeaderSubtitleDirective,
    NzPageHeaderContentDirective,
    NzPageHeaderTagDirective,
    NzPageHeaderExtraDirective,
    NzPageHeaderFooterDirective,
    NzPageHeaderBreadcrumbDirective
];
var NzPageHeaderModule = /** @class */ (function () {
    function NzPageHeaderModule() {
    }
    NzPageHeaderModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule, NzAddOnModule, NzIconModule, NzDividerModule],
                    exports: tslib_1.__spread([NzPageHeaderComponent], NzPageHeaderCells),
                    declarations: tslib_1.__spread([NzPageHeaderComponent], NzPageHeaderCells)
                },] }
    ];
    return NzPageHeaderModule;
}());
export { NzPageHeaderModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotcGFnZS1oZWFkZXIubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9wYWdlLWhlYWRlci8iLCJzb3VyY2VzIjpbIm56LXBhZ2UtaGVhZGVyLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV6QyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDbkQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQ3hELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUVsRCxPQUFPLEVBQ0wsK0JBQStCLEVBQy9CLDRCQUE0QixFQUM1QiwwQkFBMEIsRUFDMUIsMkJBQTJCLEVBQzNCLDZCQUE2QixFQUM3Qix3QkFBd0IsRUFDeEIsMEJBQTBCLEVBQzNCLE1BQU0sd0JBQXdCLENBQUM7QUFDaEMsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7O0lBRTdELGlCQUFpQixHQUFHO0lBQ3hCLDBCQUEwQjtJQUMxQiw2QkFBNkI7SUFDN0IsNEJBQTRCO0lBQzVCLHdCQUF3QjtJQUN4QiwwQkFBMEI7SUFDMUIsMkJBQTJCO0lBQzNCLCtCQUErQjtDQUNoQztBQUVEO0lBQUE7SUFLaUMsQ0FBQzs7Z0JBTGpDLFFBQVEsU0FBQztvQkFDUixPQUFPLEVBQUUsQ0FBQyxZQUFZLEVBQUUsYUFBYSxFQUFFLFlBQVksRUFBRSxlQUFlLENBQUM7b0JBQ3JFLE9BQU8sb0JBQUcscUJBQXFCLEdBQUssaUJBQWlCLENBQUM7b0JBQ3RELFlBQVksb0JBQUcscUJBQXFCLEdBQUssaUJBQWlCLENBQUM7aUJBQzVEOztJQUNnQyx5QkFBQztDQUFBLEFBTGxDLElBS2tDO1NBQXJCLGtCQUFrQiIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5cclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IE56QWRkT25Nb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2NvcmUnO1xyXG5pbXBvcnQgeyBOekRpdmlkZXJNb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2RpdmlkZXInO1xyXG5pbXBvcnQgeyBOekljb25Nb2R1bGUgfSBmcm9tICduZy16b3Jyby1hbnRkL2ljb24nO1xyXG5cclxuaW1wb3J0IHtcclxuICBOelBhZ2VIZWFkZXJCcmVhZGNydW1iRGlyZWN0aXZlLFxyXG4gIE56UGFnZUhlYWRlckNvbnRlbnREaXJlY3RpdmUsXHJcbiAgTnpQYWdlSGVhZGVyRXh0cmFEaXJlY3RpdmUsXHJcbiAgTnpQYWdlSGVhZGVyRm9vdGVyRGlyZWN0aXZlLFxyXG4gIE56UGFnZUhlYWRlclN1YnRpdGxlRGlyZWN0aXZlLFxyXG4gIE56UGFnZUhlYWRlclRhZ0RpcmVjdGl2ZSxcclxuICBOelBhZ2VIZWFkZXJUaXRsZURpcmVjdGl2ZVxyXG59IGZyb20gJy4vbnotcGFnZS1oZWFkZXItY2VsbHMnO1xyXG5pbXBvcnQgeyBOelBhZ2VIZWFkZXJDb21wb25lbnQgfSBmcm9tICcuL256LXBhZ2UtaGVhZGVyLmNvbXBvbmVudCc7XHJcblxyXG5jb25zdCBOelBhZ2VIZWFkZXJDZWxscyA9IFtcclxuICBOelBhZ2VIZWFkZXJUaXRsZURpcmVjdGl2ZSxcclxuICBOelBhZ2VIZWFkZXJTdWJ0aXRsZURpcmVjdGl2ZSxcclxuICBOelBhZ2VIZWFkZXJDb250ZW50RGlyZWN0aXZlLFxyXG4gIE56UGFnZUhlYWRlclRhZ0RpcmVjdGl2ZSxcclxuICBOelBhZ2VIZWFkZXJFeHRyYURpcmVjdGl2ZSxcclxuICBOelBhZ2VIZWFkZXJGb290ZXJEaXJlY3RpdmUsXHJcbiAgTnpQYWdlSGVhZGVyQnJlYWRjcnVtYkRpcmVjdGl2ZVxyXG5dO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBOekFkZE9uTW9kdWxlLCBOekljb25Nb2R1bGUsIE56RGl2aWRlck1vZHVsZV0sXHJcbiAgZXhwb3J0czogW056UGFnZUhlYWRlckNvbXBvbmVudCwgLi4uTnpQYWdlSGVhZGVyQ2VsbHNdLFxyXG4gIGRlY2xhcmF0aW9uczogW056UGFnZUhlYWRlckNvbXBvbmVudCwgLi4uTnpQYWdlSGVhZGVyQ2VsbHNdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOelBhZ2VIZWFkZXJNb2R1bGUge31cclxuIl19