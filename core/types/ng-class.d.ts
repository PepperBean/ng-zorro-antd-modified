/**
 * @license
 * Copyright Alibaba.com All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/NG-ZORRO/ng-zorro-antd/blob/master/LICENSE
 */
export declare type NgClassType = string | string[] | Set<string> | NgClassInterface;
export interface NgClassInterface {
    [klass: string]: any;
}
export interface NGStyleInterface {
    [klass: string]: any;
}
