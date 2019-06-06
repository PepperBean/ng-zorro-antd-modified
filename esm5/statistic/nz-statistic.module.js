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
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NzAddOnModule } from 'ng-zorro-antd/core';
import { NzCountdownComponent } from './nz-countdown.component';
import { NzStatisticNumberComponent } from './nz-statistic-number.component';
import { NzStatisticComponent } from './nz-statistic.component';
import { NzTimeRangePipe } from './nz-time-range.pipe';
var NzStatisticModule = /** @class */ (function () {
    function NzStatisticModule() {
    }
    NzStatisticModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule, NzAddOnModule],
                    declarations: [NzStatisticComponent, NzCountdownComponent, NzStatisticNumberComponent, NzTimeRangePipe],
                    exports: [NzStatisticComponent, NzCountdownComponent, NzStatisticNumberComponent, NzTimeRangePipe]
                },] }
    ];
    return NzStatisticModule;
}());
export { NzStatisticModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotc3RhdGlzdGljLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvc3RhdGlzdGljLyIsInNvdXJjZXMiOlsibnotc3RhdGlzdGljLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQVFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXpDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUNuRCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUNoRSxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUM3RSxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUNoRSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFFdkQ7SUFBQTtJQUtnQyxDQUFDOztnQkFMaEMsUUFBUSxTQUFDO29CQUNSLE9BQU8sRUFBRSxDQUFDLFlBQVksRUFBRSxhQUFhLENBQUM7b0JBQ3RDLFlBQVksRUFBRSxDQUFDLG9CQUFvQixFQUFFLG9CQUFvQixFQUFFLDBCQUEwQixFQUFFLGVBQWUsQ0FBQztvQkFDdkcsT0FBTyxFQUFFLENBQUMsb0JBQW9CLEVBQUUsb0JBQW9CLEVBQUUsMEJBQTBCLEVBQUUsZUFBZSxDQUFDO2lCQUNuRzs7SUFDK0Isd0JBQUM7Q0FBQSxBQUxqQyxJQUtpQztTQUFwQixpQkFBaUIiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQGxpY2Vuc2VcclxuICogQ29weXJpZ2h0IEFsaWJhYmEuY29tIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXHJcbiAqXHJcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXHJcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9naXRodWIuY29tL05HLVpPUlJPL25nLXpvcnJvLWFudGQvYmxvYi9tYXN0ZXIvTElDRU5TRVxyXG4gKi9cclxuXHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBOekFkZE9uTW9kdWxlIH0gZnJvbSAnbmctem9ycm8tYW50ZC9jb3JlJztcclxuaW1wb3J0IHsgTnpDb3VudGRvd25Db21wb25lbnQgfSBmcm9tICcuL256LWNvdW50ZG93bi5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBOelN0YXRpc3RpY051bWJlckNvbXBvbmVudCB9IGZyb20gJy4vbnotc3RhdGlzdGljLW51bWJlci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBOelN0YXRpc3RpY0NvbXBvbmVudCB9IGZyb20gJy4vbnotc3RhdGlzdGljLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE56VGltZVJhbmdlUGlwZSB9IGZyb20gJy4vbnotdGltZS1yYW5nZS5waXBlJztcclxuXHJcbkBOZ01vZHVsZSh7XHJcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgTnpBZGRPbk1vZHVsZV0sXHJcbiAgZGVjbGFyYXRpb25zOiBbTnpTdGF0aXN0aWNDb21wb25lbnQsIE56Q291bnRkb3duQ29tcG9uZW50LCBOelN0YXRpc3RpY051bWJlckNvbXBvbmVudCwgTnpUaW1lUmFuZ2VQaXBlXSxcclxuICBleHBvcnRzOiBbTnpTdGF0aXN0aWNDb21wb25lbnQsIE56Q291bnRkb3duQ29tcG9uZW50LCBOelN0YXRpc3RpY051bWJlckNvbXBvbmVudCwgTnpUaW1lUmFuZ2VQaXBlXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTnpTdGF0aXN0aWNNb2R1bGUge31cclxuIl19