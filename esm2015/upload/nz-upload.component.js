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
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, Output, ViewChild, ViewEncapsulation } from '@angular/core';
import { of, Observable } from 'rxjs';
import { filter } from 'rxjs/operators';
import { toBoolean, InputBoolean, InputNumber } from 'ng-zorro-antd/core';
import { NzI18nService } from 'ng-zorro-antd/i18n';
import { NzUploadBtnComponent } from './nz-upload-btn.component';
import { NzUploadListComponent } from './nz-upload-list.component';
export class NzUploadComponent {
    // #endregion
    /**
     * @param {?} cdr
     * @param {?} i18n
     */
    constructor(cdr, i18n) {
        this.cdr = cdr;
        this.i18n = i18n;
        // tslint:disable-next-line:no-any
        this.locale = {};
        // #region fields
        this.nzType = 'select';
        this.nzLimit = 0;
        this.nzSize = 0;
        this.nzDirectory = false;
        this.nzOpenFileDialogOnClick = true;
        this.nzFilter = [];
        this.nzFileList = [];
        this.nzDisabled = false;
        this.nzListType = 'text';
        this.nzMultiple = false;
        this.nzName = 'file';
        this._showUploadList = true;
        this.nzShowButton = true;
        this.nzWithCredentials = false;
        this.nzChange = new EventEmitter();
        this.nzFileListChange = new EventEmitter();
        this.onStart = (/**
         * @param {?} file
         * @return {?}
         */
        (file) => {
            if (!this.nzFileList) {
                this.nzFileList = [];
            }
            /** @type {?} */
            const targetItem = this.fileToObject(file);
            targetItem.status = 'uploading';
            this.nzFileList = this.nzFileList.concat(targetItem);
            this.nzFileListChange.emit(this.nzFileList);
            this.nzChange.emit({ file: targetItem, fileList: this.nzFileList, type: 'start' });
            this.detectChangesList();
        });
        this.onProgress = (/**
         * @param {?} e
         * @param {?} file
         * @return {?}
         */
        (e, file) => {
            /** @type {?} */
            const fileList = this.nzFileList;
            /** @type {?} */
            const targetItem = this.getFileItem(file, fileList);
            targetItem.percent = e.percent;
            this.nzChange.emit({
                event: e,
                file: Object.assign({}, targetItem),
                fileList: this.nzFileList,
                type: 'progress'
            });
            this.detectChangesList();
        });
        this.onSuccess = (/**
         * @param {?} res
         * @param {?} file
         * @return {?}
         */
        (res, file) => {
            /** @type {?} */
            const fileList = this.nzFileList;
            /** @type {?} */
            const targetItem = this.getFileItem(file, fileList);
            targetItem.status = 'done';
            targetItem.response = res;
            this.nzChange.emit({
                file: Object.assign({}, targetItem),
                fileList,
                type: 'success'
            });
            this.detectChangesList();
        });
        this.onError = (/**
         * @param {?} err
         * @param {?} file
         * @return {?}
         */
        (err, file) => {
            /** @type {?} */
            const fileList = this.nzFileList;
            /** @type {?} */
            const targetItem = this.getFileItem(file, fileList);
            targetItem.error = err;
            targetItem.status = 'error';
            targetItem.message = this.genErr(targetItem);
            this.nzChange.emit({
                file: Object.assign({}, targetItem),
                fileList,
                type: 'error'
            });
            this.detectChangesList();
        });
        this.onRemove = (/**
         * @param {?} file
         * @return {?}
         */
        (file) => {
            this.uploadComp.abort(file);
            file.status = 'removed';
            /** @type {?} */
            const fnRes = typeof this.nzRemove === 'function' ? this.nzRemove(file) : this.nzRemove == null ? true : this.nzRemove;
            (fnRes instanceof Observable ? fnRes : of(fnRes)).pipe(filter((/**
             * @param {?} res
             * @return {?}
             */
            (res) => res))).subscribe((/**
             * @return {?}
             */
            () => {
                this.nzFileList = this.removeFileItem(file, this.nzFileList);
                this.nzChange.emit({
                    file,
                    fileList: this.nzFileList,
                    type: 'removed'
                });
                this.nzFileListChange.emit(this.nzFileList);
                this.cdr.detectChanges();
            }));
        });
        // #endregion
        // #region styles
        this.prefixCls = 'ant-upload';
        this.classList = [];
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set nzShowUploadList(value) {
        this._showUploadList = typeof value === 'boolean' ? toBoolean(value) : value;
    }
    /**
     * @return {?}
     */
    get nzShowUploadList() {
        return this._showUploadList;
    }
    /**
     * @private
     * @template THIS
     * @this {THIS}
     * @return {THIS}
     */
    zipOptions() {
        if (typeof (/** @type {?} */ (this)).nzShowUploadList === 'boolean' && (/** @type {?} */ (this)).nzShowUploadList) {
            (/** @type {?} */ (this)).nzShowUploadList = {
                showPreviewIcon: true,
                showRemoveIcon: true,
                hidePreviewIconInNonImage: false
            };
        }
        // filters
        /** @type {?} */
        const filters = (/** @type {?} */ (this)).nzFilter.slice();
        if ((/** @type {?} */ (this)).nzMultiple && (/** @type {?} */ (this)).nzLimit > 0 && filters.findIndex((/**
         * @param {?} w
         * @return {?}
         */
        w => w.name === 'limit')) === -1) {
            filters.push({
                name: 'limit',
                fn: (/**
                 * @param {?} fileList
                 * @return {?}
                 */
                (fileList) => fileList.slice(-(/** @type {?} */ (this)).nzLimit))
            });
        }
        if ((/** @type {?} */ (this)).nzSize > 0 && filters.findIndex((/**
         * @param {?} w
         * @return {?}
         */
        w => w.name === 'size')) === -1) {
            filters.push({
                name: 'size',
                fn: (/**
                 * @param {?} fileList
                 * @return {?}
                 */
                (fileList) => fileList.filter((/**
                 * @param {?} w
                 * @return {?}
                 */
                w => w.size / 1024 <= (/** @type {?} */ (this)).nzSize)))
            });
        }
        if ((/** @type {?} */ (this)).nzFileType && (/** @type {?} */ (this)).nzFileType.length > 0 && filters.findIndex((/**
         * @param {?} w
         * @return {?}
         */
        w => w.name === 'type')) === -1) {
            /** @type {?} */
            const types = (/** @type {?} */ (this)).nzFileType.split(',');
            filters.push({
                name: 'type',
                fn: (/**
                 * @param {?} fileList
                 * @return {?}
                 */
                (fileList) => fileList.filter((/**
                 * @param {?} w
                 * @return {?}
                 */
                w => ~types.indexOf(w.type))))
            });
        }
        (/** @type {?} */ (this))._btnOptions = {
            disabled: (/** @type {?} */ (this)).nzDisabled,
            accept: (/** @type {?} */ (this)).nzAccept,
            action: (/** @type {?} */ (this)).nzAction,
            directory: (/** @type {?} */ (this)).nzDirectory,
            openFileDialogOnClick: (/** @type {?} */ (this)).nzOpenFileDialogOnClick,
            beforeUpload: (/** @type {?} */ (this)).nzBeforeUpload,
            customRequest: (/** @type {?} */ (this)).nzCustomRequest,
            data: (/** @type {?} */ (this)).nzData,
            headers: (/** @type {?} */ (this)).nzHeaders,
            name: (/** @type {?} */ (this)).nzName,
            multiple: (/** @type {?} */ (this)).nzMultiple,
            withCredentials: (/** @type {?} */ (this)).nzWithCredentials,
            filters,
            onStart: (/** @type {?} */ (this)).onStart,
            onProgress: (/** @type {?} */ (this)).onProgress,
            onSuccess: (/** @type {?} */ (this)).onSuccess,
            onError: (/** @type {?} */ (this)).onError
        };
        return (/** @type {?} */ (this));
    }
    // #region upload
    /**
     * @private
     * @param {?} file
     * @return {?}
     */
    fileToObject(file) {
        return {
            lastModified: file.lastModified,
            lastModifiedDate: file.lastModifiedDate,
            name: file.filename || file.name,
            size: file.size,
            type: file.type,
            uid: file.uid,
            response: file.response,
            error: file.error,
            percent: 0,
            // tslint:disable-next-line:no-any
            originFileObj: (/** @type {?} */ (file))
        };
    }
    /**
     * @private
     * @param {?} file
     * @param {?} fileList
     * @return {?}
     */
    getFileItem(file, fileList) {
        return fileList.filter((/**
         * @param {?} item
         * @return {?}
         */
        item => item.uid === file.uid))[0];
    }
    /**
     * @private
     * @param {?} file
     * @param {?} fileList
     * @return {?}
     */
    removeFileItem(file, fileList) {
        return fileList.filter((/**
         * @param {?} item
         * @return {?}
         */
        item => item.uid !== file.uid));
    }
    /**
     * @private
     * @param {?} file
     * @return {?}
     */
    genErr(file) {
        return file.response && typeof file.response === 'string'
            ? file.response
            : (file.error && file.error.statusText) || this.locale.uploadError;
    }
    /**
     * @param {?} e
     * @return {?}
     */
    fileDrop(e) {
        if (e.type === this.dragState) {
            return;
        }
        this.dragState = e.type;
        this.setClassMap();
    }
    // #endregion
    // #region list
    /**
     * @private
     * @return {?}
     */
    detectChangesList() {
        this.cdr.detectChanges();
        this.listComp.detectChanges();
    }
    /**
     * @private
     * @return {?}
     */
    setClassMap() {
        /** @type {?} */
        let subCls = [];
        if (this.nzType === 'drag') {
            if (this.nzFileList.some((/**
             * @param {?} file
             * @return {?}
             */
            file => file.status === 'uploading'))) {
                subCls.push(`${this.prefixCls}-drag-uploading`);
            }
            if (this.dragState === 'dragover') {
                subCls.push(`${this.prefixCls}-drag-hover`);
            }
        }
        else {
            subCls = [`${this.prefixCls}-select-${this.nzListType}`];
        }
        this.classList = [
            this.prefixCls,
            `${this.prefixCls}-${this.nzType}`,
            ...subCls,
            (this.nzDisabled && `${this.prefixCls}-disabled`) || ''
        ].filter((/**
         * @param {?} item
         * @return {?}
         */
        item => !!item));
        this.cdr.detectChanges();
    }
    // #endregion
    /**
     * @return {?}
     */
    ngOnInit() {
        this.i18n$ = this.i18n.localeChange.subscribe((/**
         * @return {?}
         */
        () => {
            this.locale = this.i18n.getLocaleData('Upload');
            this.detectChangesList();
        }));
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes.nzFileList) {
            (this.nzFileList || []).forEach((/**
             * @param {?} file
             * @return {?}
             */
            file => (file.message = this.genErr(file))));
        }
        this.zipOptions().setClassMap();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.i18n$.unsubscribe();
    }
}
NzUploadComponent.decorators = [
    { type: Component, args: [{
                selector: 'nz-upload',
                exportAs: 'nzUpload',
                template: "<ng-template #list>\r\n  <nz-upload-list #listComp [style.display]=\"nzShowUploadList ? '' : 'none'\"\r\n    [locale]=\"locale\"\r\n    [listType]=\"nzListType\"\r\n    [items]=\"nzFileList || []\"\r\n    [icons]=\"nzShowUploadList\"\r\n    [onPreview]=\"nzPreview\"\r\n    [onRemove]=\"onRemove\"></nz-upload-list>\r\n</ng-template>\r\n<ng-template #con><ng-content></ng-content></ng-template>\r\n<ng-template #btn>\r\n  <div [ngClass]=\"classList\" [style.display]=\"nzShowButton ? '' : 'none'\">\r\n    <div nz-upload-btn #uploadComp [options]=\"_btnOptions\">\r\n      <ng-template [ngTemplateOutlet]=\"con\"></ng-template>\r\n    </div>\r\n  </div>\r\n</ng-template>\r\n<ng-container *ngIf=\"nzType === 'drag'; else select\">\r\n  <div [ngClass]=\"classList\"\r\n    (drop)=\"fileDrop($event)\"\r\n    (dragover)=\"fileDrop($event)\"\r\n    (dragleave)=\"fileDrop($event)\">\r\n    <div nz-upload-btn #uploadComp [options]=\"_btnOptions\" [classes]=\"{'ant-upload-btn': true}\">\r\n      <div class=\"ant-upload-drag-container\">\r\n        <ng-template [ngTemplateOutlet]=\"con\"></ng-template>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <ng-template [ngTemplateOutlet]=\"list\"></ng-template>\r\n</ng-container>\r\n<ng-template #select>\r\n  <ng-container *ngIf=\"nzListType === 'picture-card'; else pic\">\r\n    <ng-template [ngTemplateOutlet]=\"list\"></ng-template>\r\n    <ng-template [ngTemplateOutlet]=\"btn\"></ng-template>\r\n  </ng-container>\r\n</ng-template>\r\n<ng-template #pic>\r\n  <ng-template [ngTemplateOutlet]=\"btn\"></ng-template>\r\n  <ng-template [ngTemplateOutlet]=\"list\"></ng-template>\r\n</ng-template>",
                preserveWhitespaces: false,
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush
            }] }
];
/** @nocollapse */
NzUploadComponent.ctorParameters = () => [
    { type: ChangeDetectorRef },
    { type: NzI18nService }
];
NzUploadComponent.propDecorators = {
    uploadComp: [{ type: ViewChild, args: ['uploadComp',] }],
    listComp: [{ type: ViewChild, args: ['listComp',] }],
    nzType: [{ type: Input }],
    nzLimit: [{ type: Input }],
    nzSize: [{ type: Input }],
    nzFileType: [{ type: Input }],
    nzAccept: [{ type: Input }],
    nzAction: [{ type: Input }],
    nzDirectory: [{ type: Input }],
    nzOpenFileDialogOnClick: [{ type: Input }],
    nzBeforeUpload: [{ type: Input }],
    nzCustomRequest: [{ type: Input }],
    nzData: [{ type: Input }],
    nzFilter: [{ type: Input }],
    nzFileList: [{ type: Input }],
    nzDisabled: [{ type: Input }],
    nzHeaders: [{ type: Input }],
    nzListType: [{ type: Input }],
    nzMultiple: [{ type: Input }],
    nzName: [{ type: Input }],
    nzShowUploadList: [{ type: Input }],
    nzShowButton: [{ type: Input }],
    nzWithCredentials: [{ type: Input }],
    nzRemove: [{ type: Input }],
    nzPreview: [{ type: Input }],
    nzChange: [{ type: Output }],
    nzFileListChange: [{ type: Output }]
};
tslib_1.__decorate([
    InputNumber(),
    tslib_1.__metadata("design:type", Object)
], NzUploadComponent.prototype, "nzLimit", void 0);
tslib_1.__decorate([
    InputNumber(),
    tslib_1.__metadata("design:type", Object)
], NzUploadComponent.prototype, "nzSize", void 0);
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], NzUploadComponent.prototype, "nzDirectory", void 0);
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], NzUploadComponent.prototype, "nzOpenFileDialogOnClick", void 0);
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], NzUploadComponent.prototype, "nzDisabled", void 0);
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], NzUploadComponent.prototype, "nzMultiple", void 0);
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], NzUploadComponent.prototype, "nzShowButton", void 0);
tslib_1.__decorate([
    InputBoolean(),
    tslib_1.__metadata("design:type", Object)
], NzUploadComponent.prototype, "nzWithCredentials", void 0);
if (false) {
    /**
     * @type {?}
     * @private
     */
    NzUploadComponent.prototype.i18n$;
    /** @type {?} */
    NzUploadComponent.prototype.uploadComp;
    /** @type {?} */
    NzUploadComponent.prototype.listComp;
    /** @type {?} */
    NzUploadComponent.prototype.locale;
    /** @type {?} */
    NzUploadComponent.prototype.nzType;
    /** @type {?} */
    NzUploadComponent.prototype.nzLimit;
    /** @type {?} */
    NzUploadComponent.prototype.nzSize;
    /** @type {?} */
    NzUploadComponent.prototype.nzFileType;
    /** @type {?} */
    NzUploadComponent.prototype.nzAccept;
    /** @type {?} */
    NzUploadComponent.prototype.nzAction;
    /** @type {?} */
    NzUploadComponent.prototype.nzDirectory;
    /** @type {?} */
    NzUploadComponent.prototype.nzOpenFileDialogOnClick;
    /** @type {?} */
    NzUploadComponent.prototype.nzBeforeUpload;
    /** @type {?} */
    NzUploadComponent.prototype.nzCustomRequest;
    /** @type {?} */
    NzUploadComponent.prototype.nzData;
    /** @type {?} */
    NzUploadComponent.prototype.nzFilter;
    /** @type {?} */
    NzUploadComponent.prototype.nzFileList;
    /** @type {?} */
    NzUploadComponent.prototype.nzDisabled;
    /** @type {?} */
    NzUploadComponent.prototype.nzHeaders;
    /** @type {?} */
    NzUploadComponent.prototype.nzListType;
    /** @type {?} */
    NzUploadComponent.prototype.nzMultiple;
    /** @type {?} */
    NzUploadComponent.prototype.nzName;
    /**
     * @type {?}
     * @private
     */
    NzUploadComponent.prototype._showUploadList;
    /** @type {?} */
    NzUploadComponent.prototype.nzShowButton;
    /** @type {?} */
    NzUploadComponent.prototype.nzWithCredentials;
    /** @type {?} */
    NzUploadComponent.prototype.nzRemove;
    /** @type {?} */
    NzUploadComponent.prototype.nzPreview;
    /** @type {?} */
    NzUploadComponent.prototype.nzChange;
    /** @type {?} */
    NzUploadComponent.prototype.nzFileListChange;
    /** @type {?} */
    NzUploadComponent.prototype._btnOptions;
    /**
     * @type {?}
     * @private
     */
    NzUploadComponent.prototype.onStart;
    /**
     * @type {?}
     * @private
     */
    NzUploadComponent.prototype.onProgress;
    /**
     * @type {?}
     * @private
     */
    NzUploadComponent.prototype.onSuccess;
    /**
     * @type {?}
     * @private
     */
    NzUploadComponent.prototype.onError;
    /**
     * @type {?}
     * @private
     */
    NzUploadComponent.prototype.dragState;
    /** @type {?} */
    NzUploadComponent.prototype.onRemove;
    /**
     * @type {?}
     * @private
     */
    NzUploadComponent.prototype.prefixCls;
    /** @type {?} */
    NzUploadComponent.prototype.classList;
    /**
     * @type {?}
     * @private
     */
    NzUploadComponent.prototype.cdr;
    /**
     * @type {?}
     * @private
     */
    NzUploadComponent.prototype.i18n;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotdXBsb2FkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvdXBsb2FkLyIsInNvdXJjZXMiOlsibnotdXBsb2FkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFRQSxPQUFPLEVBQ0wsdUJBQXVCLEVBQ3ZCLGlCQUFpQixFQUNqQixTQUFTLEVBQ1QsWUFBWSxFQUNaLEtBQUssRUFJTCxNQUFNLEVBR04sU0FBUyxFQUNULGlCQUFpQixFQUNsQixNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsRUFBRSxFQUFFLFVBQVUsRUFBZ0IsTUFBTSxNQUFNLENBQUM7QUFDcEQsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRXhDLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLFdBQVcsRUFBRSxNQUFNLG9CQUFvQixDQUFDO0FBQzFFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQVluRCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUNqRSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQVVuRSxNQUFNLE9BQU8saUJBQWlCOzs7Ozs7SUF3RzVCLFlBQW9CLEdBQXNCLEVBQVUsSUFBbUI7UUFBbkQsUUFBRyxHQUFILEdBQUcsQ0FBbUI7UUFBVSxTQUFJLEdBQUosSUFBSSxDQUFlOztRQW5HdkUsV0FBTSxHQUFRLEVBQUUsQ0FBQzs7UUFJUixXQUFNLEdBQWUsUUFBUSxDQUFDO1FBQ2YsWUFBTyxHQUFHLENBQUMsQ0FBQztRQUNaLFdBQU0sR0FBRyxDQUFDLENBQUM7UUFLVixnQkFBVyxHQUFHLEtBQUssQ0FBQztRQUNwQiw0QkFBdUIsR0FBRyxJQUFJLENBQUM7UUFJL0MsYUFBUSxHQUFtQixFQUFFLENBQUM7UUFDOUIsZUFBVSxHQUFpQixFQUFFLENBQUM7UUFDZCxlQUFV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QUNyRyw2Q0FBbUc7O0lBRW5HLHdDQUE4Qjs7Ozs7SUF5RjlCLG9DQVVFOzs7OztJQUVGLHVDQVdFOzs7OztJQUVGLHNDQVdFOzs7OztJQUVGLG9DQVlFOzs7OztJQU1GLHNDQUEwQjs7SUFtQjFCLHFDQWVFOzs7OztJQU1GLHNDQUFpQzs7SUFDakMsc0NBQXlCOzs7OztJQW5JYixnQ0FBOEI7Ozs7O0lBQUUsaUNBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcclxuICovXHJcblxyXG5pbXBvcnQge1xyXG4gIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LFxyXG4gIENoYW5nZURldGVjdG9yUmVmLFxyXG4gIENvbXBvbmVudCxcclxuICBFdmVudEVtaXR0ZXIsXHJcbiAgSW5wdXQsXHJcbiAgT25DaGFuZ2VzLFxyXG4gIE9uRGVzdHJveSxcclxuICBPbkluaXQsXHJcbiAgT3V0cHV0LFxyXG4gIFNpbXBsZUNoYW5nZSxcclxuICBTaW1wbGVDaGFuZ2VzLFxyXG4gIFZpZXdDaGlsZCxcclxuICBWaWV3RW5jYXBzdWxhdGlvblxyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBvZiwgT2JzZXJ2YWJsZSwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IGZpbHRlciB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuXHJcbmltcG9ydCB7IHRvQm9vbGVhbiwgSW5wdXRCb29sZWFuLCBJbnB1dE51bWJlciB9IGZyb20gJ25nLXpvcnJvLWFudGQvY29yZSc7XHJcbmltcG9ydCB7IE56STE4blNlcnZpY2UgfSBmcm9tICduZy16b3Jyby1hbnRkL2kxOG4nO1xyXG5cclxuaW1wb3J0IHtcclxuICBTaG93VXBsb2FkTGlzdEludGVyZmFjZSxcclxuICBVcGxvYWRDaGFuZ2VQYXJhbSxcclxuICBVcGxvYWRGaWxlLFxyXG4gIFVwbG9hZEZpbHRlcixcclxuICBVcGxvYWRMaXN0VHlwZSxcclxuICBVcGxvYWRUeXBlLFxyXG4gIFVwbG9hZFhIUkFyZ3MsXHJcbiAgWmlwQnV0dG9uT3B0aW9uc1xyXG59IGZyb20gJy4vaW50ZXJmYWNlJztcclxuaW1wb3J0IHsgTnpVcGxvYWRCdG5Db21wb25lbnQgfSBmcm9tICcuL256LXVwbG9hZC1idG4uY29tcG9uZW50JztcclxuaW1wb3J0IHsgTnpVcGxvYWRMaXN0Q29tcG9uZW50IH0gZnJvbSAnLi9uei11cGxvYWQtbGlzdC5jb21wb25lbnQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICduei11cGxvYWQnLFxyXG4gIGV4cG9ydEFzOiAnbnpVcGxvYWQnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9uei11cGxvYWQuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHByZXNlcnZlV2hpdGVzcGFjZXM6IGZhbHNlLFxyXG4gIGVuY2Fwc3VsYXRpb246IFZpZXdFbmNhcHN1bGF0aW9uLk5vbmUsXHJcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcclxufSlcclxuZXhwb3J0IGNsYXNzIE56VXBsb2FkQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSB7XHJcbiAgcHJpdmF0ZSBpMThuJDogU3Vic2NyaXB0aW9uO1xyXG4gIEBWaWV3Q2hpbGQoJ3VwbG9hZENvbXAnKSB1cGxvYWRDb21wOiBOelVwbG9hZEJ0bkNvbXBvbmVudDtcclxuICBAVmlld0NoaWxkKCdsaXN0Q29tcCcpIGxpc3RDb21wOiBOelVwbG9hZExpc3RDb21wb25lbnQ7XHJcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxyXG4gIGxvY2FsZTogYW55ID0ge307XHJcblxyXG4gIC8vICNyZWdpb24gZmllbGRzXHJcblxyXG4gIEBJbnB1dCgpIG56VHlwZTogVXBsb2FkVHlwZSA9ICdzZWxlY3QnO1xyXG4gIEBJbnB1dCgpIEBJbnB1dE51bWJlcigpIG56TGltaXQgPSAwO1xyXG4gIEBJbnB1dCgpIEBJbnB1dE51bWJlcigpIG56U2l6ZSA9IDA7XHJcblxyXG4gIEBJbnB1dCgpIG56RmlsZVR5cGU6IHN0cmluZztcclxuICBASW5wdXQoKSBuekFjY2VwdDogc3RyaW5nIHwgc3RyaW5nW107XHJcbiAgQElucHV0KCkgbnpBY3Rpb246IHN0cmluZztcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpEaXJlY3RvcnkgPSBmYWxzZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpPcGVuRmlsZURpYWxvZ09uQ2xpY2sgPSB0cnVlO1xyXG4gIEBJbnB1dCgpIG56QmVmb3JlVXBsb2FkOiAoZmlsZTogVXBsb2FkRmlsZSwgZmlsZUxpc3Q6IFVwbG9hZEZpbGVbXSkgPT4gYm9vbGVhbiB8IE9ic2VydmFibGU8Ym9vbGVhbj47XHJcbiAgQElucHV0KCkgbnpDdXN0b21SZXF1ZXN0OiAoaXRlbTogVXBsb2FkWEhSQXJncykgPT4gU3Vic2NyaXB0aW9uO1xyXG4gIEBJbnB1dCgpIG56RGF0YToge30gfCAoKGZpbGU6IFVwbG9hZEZpbGUpID0+IHt9KTtcclxuICBASW5wdXQoKSBuekZpbHRlcjogVXBsb2FkRmlsdGVyW10gPSBbXTtcclxuICBASW5wdXQoKSBuekZpbGVMaXN0OiBVcGxvYWRGaWxlW10gPSBbXTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpEaXNhYmxlZCA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIG56SGVhZGVyczoge30gfCAoKGZpbGU6IFVwbG9hZEZpbGUpID0+IHt9KTtcclxuICBASW5wdXQoKSBuekxpc3RUeXBlOiBVcGxvYWRMaXN0VHlwZSA9ICd0ZXh0JztcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpNdWx0aXBsZSA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIG56TmFtZSA9ICdmaWxlJztcclxuXHJcbiAgcHJpdmF0ZSBfc2hvd1VwbG9hZExpc3Q6IGJvb2xlYW4gfCBTaG93VXBsb2FkTGlzdEludGVyZmFjZSA9IHRydWU7XHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IG56U2hvd1VwbG9hZExpc3QodmFsdWU6IGJvb2xlYW4gfCBTaG93VXBsb2FkTGlzdEludGVyZmFjZSkge1xyXG4gICAgdGhpcy5fc2hvd1VwbG9hZExpc3QgPSB0eXBlb2YgdmFsdWUgPT09ICdib29sZWFuJyA/IHRvQm9vbGVhbih2YWx1ZSkgOiB2YWx1ZTtcclxuICB9XHJcblxyXG4gIGdldCBuelNob3dVcGxvYWRMaXN0KCk6IGJvb2xlYW4gfCBTaG93VXBsb2FkTGlzdEludGVyZmFjZSB7XHJcbiAgICByZXR1cm4gdGhpcy5fc2hvd1VwbG9hZExpc3Q7XHJcbiAgfVxyXG5cclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpTaG93QnV0dG9uID0gdHJ1ZTtcclxuICBASW5wdXQoKSBASW5wdXRCb29sZWFuKCkgbnpXaXRoQ3JlZGVudGlhbHMgPSBmYWxzZTtcclxuXHJcbiAgQElucHV0KCkgbnpSZW1vdmU6IChmaWxlOiBVcGxvYWRGaWxlKSA9PiBib29sZWFuIHwgT2JzZXJ2YWJsZTxib29sZWFuPjtcclxuICBASW5wdXQoKSBuelByZXZpZXc6IChmaWxlOiBVcGxvYWRGaWxlKSA9PiB2b2lkO1xyXG5cclxuICBAT3V0cHV0KCkgcmVhZG9ubHkgbnpDaGFuZ2U6IEV2ZW50RW1pdHRlcjxVcGxvYWRDaGFuZ2VQYXJhbT4gPSBuZXcgRXZlbnRFbWl0dGVyPFVwbG9hZENoYW5nZVBhcmFtPigpO1xyXG4gIEBPdXRwdXQoKSByZWFkb25seSBuekZpbGVMaXN0Q2hhbmdlOiBFdmVudEVtaXR0ZXI8VXBsb2FkRmlsZVtdPiA9IG5ldyBFdmVudEVtaXR0ZXI8VXBsb2FkRmlsZVtdPigpO1xyXG5cclxuICBfYnRuT3B0aW9uczogWmlwQnV0dG9uT3B0aW9ucztcclxuXHJcbiAgcHJpdmF0ZSB6aXBPcHRpb25zKCk6IHRoaXMge1xyXG4gICAgaWYgKHR5cGVvZiB0aGlzLm56U2hvd1VwbG9hZExpc3QgPT09ICdib29sZWFuJyAmJiB0aGlzLm56U2hvd1VwbG9hZExpc3QpIHtcclxuICAgICAgdGhpcy5uelNob3dVcGxvYWRMaXN0ID0ge1xyXG4gICAgICAgIHNob3dQcmV2aWV3SWNvbjogdHJ1ZSxcclxuICAgICAgICBzaG93UmVtb3ZlSWNvbjogdHJ1ZSxcclxuICAgICAgICBoaWRlUHJldmlld0ljb25Jbk5vbkltYWdlOiBmYWxzZVxyXG4gICAgICB9O1xyXG4gICAgfVxyXG4gICAgLy8gZmlsdGVyc1xyXG4gICAgY29uc3QgZmlsdGVyczogVXBsb2FkRmlsdGVyW10gPSB0aGlzLm56RmlsdGVyLnNsaWNlKCk7XHJcbiAgICBpZiAodGhpcy5uek11bHRpcGxlICYmIHRoaXMubnpMaW1pdCA+IDAgJiYgZmlsdGVycy5maW5kSW5kZXgodyA9PiB3Lm5hbWUgPT09ICdsaW1pdCcpID09PSAtMSkge1xyXG4gICAgICBmaWx0ZXJzLnB1c2goe1xyXG4gICAgICAgIG5hbWU6ICdsaW1pdCcsXHJcbiAgICAgICAgZm46IChmaWxlTGlzdDogVXBsb2FkRmlsZVtdKSA9PiBmaWxlTGlzdC5zbGljZSgtdGhpcy5uekxpbWl0KVxyXG4gICAgICB9KTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLm56U2l6ZSA+IDAgJiYgZmlsdGVycy5maW5kSW5kZXgodyA9PiB3Lm5hbWUgPT09ICdzaXplJykgPT09IC0xKSB7XHJcbiAgICAgIGZpbHRlcnMucHVzaCh7XHJcbiAgICAgICAgbmFtZTogJ3NpemUnLFxyXG4gICAgICAgIGZuOiAoZmlsZUxpc3Q6IFVwbG9hZEZpbGVbXSkgPT4gZmlsZUxpc3QuZmlsdGVyKHcgPT4gdy5zaXplIC8gMTAyNCA8PSB0aGlzLm56U2l6ZSlcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5uekZpbGVUeXBlICYmIHRoaXMubnpGaWxlVHlwZS5sZW5ndGggPiAwICYmIGZpbHRlcnMuZmluZEluZGV4KHcgPT4gdy5uYW1lID09PSAndHlwZScpID09PSAtMSkge1xyXG4gICAgICBjb25zdCB0eXBlcyA9IHRoaXMubnpGaWxlVHlwZS5zcGxpdCgnLCcpO1xyXG4gICAgICBmaWx0ZXJzLnB1c2goe1xyXG4gICAgICAgIG5hbWU6ICd0eXBlJyxcclxuICAgICAgICBmbjogKGZpbGVMaXN0OiBVcGxvYWRGaWxlW10pID0+IGZpbGVMaXN0LmZpbHRlcih3ID0+IH50eXBlcy5pbmRleE9mKHcudHlwZSkpXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgdGhpcy5fYnRuT3B0aW9ucyA9IHtcclxuICAgICAgZGlzYWJsZWQ6IHRoaXMubnpEaXNhYmxlZCxcclxuICAgICAgYWNjZXB0OiB0aGlzLm56QWNjZXB0LFxyXG4gICAgICBhY3Rpb246IHRoaXMubnpBY3Rpb24sXHJcbiAgICAgIGRpcmVjdG9yeTogdGhpcy5uekRpcmVjdG9yeSxcclxuICAgICAgb3BlbkZpbGVEaWFsb2dPbkNsaWNrOiB0aGlzLm56T3BlbkZpbGVEaWFsb2dPbkNsaWNrLFxyXG4gICAgICBiZWZvcmVVcGxvYWQ6IHRoaXMubnpCZWZvcmVVcGxvYWQsXHJcbiAgICAgIGN1c3RvbVJlcXVlc3Q6IHRoaXMubnpDdXN0b21SZXF1ZXN0LFxyXG4gICAgICBkYXRhOiB0aGlzLm56RGF0YSxcclxuICAgICAgaGVhZGVyczogdGhpcy5uekhlYWRlcnMsXHJcbiAgICAgIG5hbWU6IHRoaXMubnpOYW1lLFxyXG4gICAgICBtdWx0aXBsZTogdGhpcy5uek11bHRpcGxlLFxyXG4gICAgICB3aXRoQ3JlZGVudGlhbHM6IHRoaXMubnpXaXRoQ3JlZGVudGlhbHMsXHJcbiAgICAgIGZpbHRlcnMsXHJcbiAgICAgIG9uU3RhcnQ6IHRoaXMub25TdGFydCxcclxuICAgICAgb25Qcm9ncmVzczogdGhpcy5vblByb2dyZXNzLFxyXG4gICAgICBvblN1Y2Nlc3M6IHRoaXMub25TdWNjZXNzLFxyXG4gICAgICBvbkVycm9yOiB0aGlzLm9uRXJyb3JcclxuICAgIH07XHJcbiAgICByZXR1cm4gdGhpcztcclxuICB9XHJcblxyXG4gIC8vICNlbmRyZWdpb25cclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmLCBwcml2YXRlIGkxOG46IE56STE4blNlcnZpY2UpIHt9XHJcblxyXG4gIC8vICNyZWdpb24gdXBsb2FkXHJcblxyXG4gIHByaXZhdGUgZmlsZVRvT2JqZWN0KGZpbGU6IFVwbG9hZEZpbGUpOiBVcGxvYWRGaWxlIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIGxhc3RNb2RpZmllZDogZmlsZS5sYXN0TW9kaWZpZWQsXHJcbiAgICAgIGxhc3RNb2RpZmllZERhdGU6IGZpbGUubGFzdE1vZGlmaWVkRGF0ZSxcclxuICAgICAgbmFtZTogZmlsZS5maWxlbmFtZSB8fCBmaWxlLm5hbWUsXHJcbiAgICAgIHNpemU6IGZpbGUuc2l6ZSxcclxuICAgICAgdHlwZTogZmlsZS50eXBlLFxyXG4gICAgICB1aWQ6IGZpbGUudWlkLFxyXG4gICAgICByZXNwb25zZTogZmlsZS5yZXNwb25zZSxcclxuICAgICAgZXJyb3I6IGZpbGUuZXJyb3IsXHJcbiAgICAgIHBlcmNlbnQ6IDAsXHJcbiAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcclxuICAgICAgb3JpZ2luRmlsZU9iajogZmlsZSBhcyBhbnlcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGdldEZpbGVJdGVtKGZpbGU6IFVwbG9hZEZpbGUsIGZpbGVMaXN0OiBVcGxvYWRGaWxlW10pOiBVcGxvYWRGaWxlIHtcclxuICAgIHJldHVybiBmaWxlTGlzdC5maWx0ZXIoaXRlbSA9PiBpdGVtLnVpZCA9PT0gZmlsZS51aWQpWzBdO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSByZW1vdmVGaWxlSXRlbShmaWxlOiBVcGxvYWRGaWxlLCBmaWxlTGlzdDogVXBsb2FkRmlsZVtdKTogVXBsb2FkRmlsZVtdIHtcclxuICAgIHJldHVybiBmaWxlTGlzdC5maWx0ZXIoaXRlbSA9PiBpdGVtLnVpZCAhPT0gZmlsZS51aWQpO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZW5FcnIoZmlsZTogVXBsb2FkRmlsZSk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gZmlsZS5yZXNwb25zZSAmJiB0eXBlb2YgZmlsZS5yZXNwb25zZSA9PT0gJ3N0cmluZydcclxuICAgICAgPyBmaWxlLnJlc3BvbnNlXHJcbiAgICAgIDogKGZpbGUuZXJyb3IgJiYgZmlsZS5lcnJvci5zdGF0dXNUZXh0KSB8fCB0aGlzLmxvY2FsZS51cGxvYWRFcnJvcjtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgb25TdGFydCA9IChmaWxlOiBVcGxvYWRGaWxlKTogdm9pZCA9PiB7XHJcbiAgICBpZiAoIXRoaXMubnpGaWxlTGlzdCkge1xyXG4gICAgICB0aGlzLm56RmlsZUxpc3QgPSBbXTtcclxuICAgIH1cclxuICAgIGNvbnN0IHRhcmdldEl0ZW0gPSB0aGlzLmZpbGVUb09iamVjdChmaWxlKTtcclxuICAgIHRhcmdldEl0ZW0uc3RhdHVzID0gJ3VwbG9hZGluZyc7XHJcbiAgICB0aGlzLm56RmlsZUxpc3QgPSB0aGlzLm56RmlsZUxpc3QuY29uY2F0KHRhcmdldEl0ZW0pO1xyXG4gICAgdGhpcy5uekZpbGVMaXN0Q2hhbmdlLmVtaXQodGhpcy5uekZpbGVMaXN0KTtcclxuICAgIHRoaXMubnpDaGFuZ2UuZW1pdCh7IGZpbGU6IHRhcmdldEl0ZW0sIGZpbGVMaXN0OiB0aGlzLm56RmlsZUxpc3QsIHR5cGU6ICdzdGFydCcgfSk7XHJcbiAgICB0aGlzLmRldGVjdENoYW5nZXNMaXN0KCk7XHJcbiAgfTtcclxuXHJcbiAgcHJpdmF0ZSBvblByb2dyZXNzID0gKGU6IHsgcGVyY2VudDogbnVtYmVyIH0sIGZpbGU6IFVwbG9hZEZpbGUpOiB2b2lkID0+IHtcclxuICAgIGNvbnN0IGZpbGVMaXN0ID0gdGhpcy5uekZpbGVMaXN0O1xyXG4gICAgY29uc3QgdGFyZ2V0SXRlbSA9IHRoaXMuZ2V0RmlsZUl0ZW0oZmlsZSwgZmlsZUxpc3QpO1xyXG4gICAgdGFyZ2V0SXRlbS5wZXJjZW50ID0gZS5wZXJjZW50O1xyXG4gICAgdGhpcy5uekNoYW5nZS5lbWl0KHtcclxuICAgICAgZXZlbnQ6IGUsXHJcbiAgICAgIGZpbGU6IHsgLi4udGFyZ2V0SXRlbSB9LFxyXG4gICAgICBmaWxlTGlzdDogdGhpcy5uekZpbGVMaXN0LFxyXG4gICAgICB0eXBlOiAncHJvZ3Jlc3MnXHJcbiAgICB9KTtcclxuICAgIHRoaXMuZGV0ZWN0Q2hhbmdlc0xpc3QoKTtcclxuICB9O1xyXG5cclxuICBwcml2YXRlIG9uU3VjY2VzcyA9IChyZXM6IHt9LCBmaWxlOiBVcGxvYWRGaWxlKTogdm9pZCA9PiB7XHJcbiAgICBjb25zdCBmaWxlTGlzdCA9IHRoaXMubnpGaWxlTGlzdDtcclxuICAgIGNvbnN0IHRhcmdldEl0ZW0gPSB0aGlzLmdldEZpbGVJdGVtKGZpbGUsIGZpbGVMaXN0KTtcclxuICAgIHRhcmdldEl0ZW0uc3RhdHVzID0gJ2RvbmUnO1xyXG4gICAgdGFyZ2V0SXRlbS5yZXNwb25zZSA9IHJlcztcclxuICAgIHRoaXMubnpDaGFuZ2UuZW1pdCh7XHJcbiAgICAgIGZpbGU6IHsgLi4udGFyZ2V0SXRlbSB9LFxyXG4gICAgICBmaWxlTGlzdCxcclxuICAgICAgdHlwZTogJ3N1Y2Nlc3MnXHJcbiAgICB9KTtcclxuICAgIHRoaXMuZGV0ZWN0Q2hhbmdlc0xpc3QoKTtcclxuICB9O1xyXG5cclxuICBwcml2YXRlIG9uRXJyb3IgPSAoZXJyOiB7fSwgZmlsZTogVXBsb2FkRmlsZSk6IHZvaWQgPT4ge1xyXG4gICAgY29uc3QgZmlsZUxpc3QgPSB0aGlzLm56RmlsZUxpc3Q7XHJcbiAgICBjb25zdCB0YXJnZXRJdGVtID0gdGhpcy5nZXRGaWxlSXRlbShmaWxlLCBmaWxlTGlzdCk7XHJcbiAgICB0YXJnZXRJdGVtLmVycm9yID0gZXJyO1xyXG4gICAgdGFyZ2V0SXRlbS5zdGF0dXMgPSAnZXJyb3InO1xyXG4gICAgdGFyZ2V0SXRlbS5tZXNzYWdlID0gdGhpcy5nZW5FcnIodGFyZ2V0SXRlbSk7XHJcbiAgICB0aGlzLm56Q2hhbmdlLmVtaXQoe1xyXG4gICAgICBmaWxlOiB7IC4uLnRhcmdldEl0ZW0gfSxcclxuICAgICAgZmlsZUxpc3QsXHJcbiAgICAgIHR5cGU6ICdlcnJvcidcclxuICAgIH0pO1xyXG4gICAgdGhpcy5kZXRlY3RDaGFuZ2VzTGlzdCgpO1xyXG4gIH07XHJcblxyXG4gIC8vICNlbmRyZWdpb25cclxuXHJcbiAgLy8gI3JlZ2lvbiBkcmFnXHJcblxyXG4gIHByaXZhdGUgZHJhZ1N0YXRlOiBzdHJpbmc7XHJcblxyXG4gIGZpbGVEcm9wKGU6IERyYWdFdmVudCk6IHZvaWQge1xyXG4gICAgaWYgKGUudHlwZSA9PT0gdGhpcy5kcmFnU3RhdGUpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgdGhpcy5kcmFnU3RhdGUgPSBlLnR5cGU7XHJcbiAgICB0aGlzLnNldENsYXNzTWFwKCk7XHJcbiAgfVxyXG5cclxuICAvLyAjZW5kcmVnaW9uXHJcblxyXG4gIC8vICNyZWdpb24gbGlzdFxyXG5cclxuICBwcml2YXRlIGRldGVjdENoYW5nZXNMaXN0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gICAgdGhpcy5saXN0Q29tcC5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgfVxyXG5cclxuICBvblJlbW92ZSA9IChmaWxlOiBVcGxvYWRGaWxlKTogdm9pZCA9PiB7XHJcbiAgICB0aGlzLnVwbG9hZENvbXAuYWJvcnQoZmlsZSk7XHJcbiAgICBmaWxlLnN0YXR1cyA9ICdyZW1vdmVkJztcclxuICAgIGNvbnN0IGZuUmVzID1cclxuICAgICAgdHlwZW9mIHRoaXMubnpSZW1vdmUgPT09ICdmdW5jdGlvbicgPyB0aGlzLm56UmVtb3ZlKGZpbGUpIDogdGhpcy5uelJlbW92ZSA9PSBudWxsID8gdHJ1ZSA6IHRoaXMubnpSZW1vdmU7XHJcbiAgICAoZm5SZXMgaW5zdGFuY2VvZiBPYnNlcnZhYmxlID8gZm5SZXMgOiBvZihmblJlcykpLnBpcGUoZmlsdGVyKChyZXM6IGJvb2xlYW4pID0+IHJlcykpLnN1YnNjcmliZSgoKSA9PiB7XHJcbiAgICAgIHRoaXMubnpGaWxlTGlzdCA9IHRoaXMucmVtb3ZlRmlsZUl0ZW0oZmlsZSwgdGhpcy5uekZpbGVMaXN0KTtcclxuICAgICAgdGhpcy5uekNoYW5nZS5lbWl0KHtcclxuICAgICAgICBmaWxlLFxyXG4gICAgICAgIGZpbGVMaXN0OiB0aGlzLm56RmlsZUxpc3QsXHJcbiAgICAgICAgdHlwZTogJ3JlbW92ZWQnXHJcbiAgICAgIH0pO1xyXG4gICAgICB0aGlzLm56RmlsZUxpc3RDaGFuZ2UuZW1pdCh0aGlzLm56RmlsZUxpc3QpO1xyXG4gICAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICAvLyAjZW5kcmVnaW9uXHJcblxyXG4gIC8vICNyZWdpb24gc3R5bGVzXHJcblxyXG4gIHByaXZhdGUgcHJlZml4Q2xzID0gJ2FudC11cGxvYWQnO1xyXG4gIGNsYXNzTGlzdDogc3RyaW5nW10gPSBbXTtcclxuXHJcbiAgcHJpdmF0ZSBzZXRDbGFzc01hcCgpOiB2b2lkIHtcclxuICAgIGxldCBzdWJDbHM6IHN0cmluZ1tdID0gW107XHJcbiAgICBpZiAodGhpcy5uelR5cGUgPT09ICdkcmFnJykge1xyXG4gICAgICBpZiAodGhpcy5uekZpbGVMaXN0LnNvbWUoZmlsZSA9PiBmaWxlLnN0YXR1cyA9PT0gJ3VwbG9hZGluZycpKSB7XHJcbiAgICAgICAgc3ViQ2xzLnB1c2goYCR7dGhpcy5wcmVmaXhDbHN9LWRyYWctdXBsb2FkaW5nYCk7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHRoaXMuZHJhZ1N0YXRlID09PSAnZHJhZ292ZXInKSB7XHJcbiAgICAgICAgc3ViQ2xzLnB1c2goYCR7dGhpcy5wcmVmaXhDbHN9LWRyYWctaG92ZXJgKTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc3ViQ2xzID0gW2Ake3RoaXMucHJlZml4Q2xzfS1zZWxlY3QtJHt0aGlzLm56TGlzdFR5cGV9YF07XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5jbGFzc0xpc3QgPSBbXHJcbiAgICAgIHRoaXMucHJlZml4Q2xzLFxyXG4gICAgICBgJHt0aGlzLnByZWZpeENsc30tJHt0aGlzLm56VHlwZX1gLFxyXG4gICAgICAuLi5zdWJDbHMsXHJcbiAgICAgICh0aGlzLm56RGlzYWJsZWQgJiYgYCR7dGhpcy5wcmVmaXhDbHN9LWRpc2FibGVkYCkgfHwgJydcclxuICAgIF0uZmlsdGVyKGl0ZW0gPT4gISFpdGVtKTtcclxuXHJcbiAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgfVxyXG5cclxuICAvLyAjZW5kcmVnaW9uXHJcblxyXG4gIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5pMThuJCA9IHRoaXMuaTE4bi5sb2NhbGVDaGFuZ2Uuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgdGhpcy5sb2NhbGUgPSB0aGlzLmkxOG4uZ2V0TG9jYWxlRGF0YSgnVXBsb2FkJyk7XHJcbiAgICAgIHRoaXMuZGV0ZWN0Q2hhbmdlc0xpc3QoKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogeyBbUCBpbiBrZXlvZiB0aGlzXT86IFNpbXBsZUNoYW5nZSB9ICYgU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xyXG4gICAgaWYgKGNoYW5nZXMubnpGaWxlTGlzdCkge1xyXG4gICAgICAodGhpcy5uekZpbGVMaXN0IHx8IFtdKS5mb3JFYWNoKGZpbGUgPT4gKGZpbGUubWVzc2FnZSA9IHRoaXMuZ2VuRXJyKGZpbGUpKSk7XHJcbiAgICB9XHJcbiAgICB0aGlzLnppcE9wdGlvbnMoKS5zZXRDbGFzc01hcCgpO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICB0aGlzLmkxOG4kLnVuc3Vic2NyaWJlKCk7XHJcbiAgfVxyXG59XHJcbiJdfQ==