import { CommonModule } from '@angular/common';
import { NzAddOnModule } from 'ng-zorro-antd/core';
import { CdkPortalOutlet, TemplatePortal } from '@angular/cdk/portal';
import { ChangeDetectionStrategy, Component, ComponentFactoryResolver, Directive, Input, TemplateRef, ViewChild, ViewContainerRef, ViewEncapsulation, ContentChildren, NgModule } from '@angular/core';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NzCommentAvatarDirective {
}
NzCommentAvatarDirective.decorators = [
    { type: Directive, args: [{
                selector: 'nz-avatar[nz-comment-avatar]',
                exportAs: 'nzCommentAvatar'
            },] }
];
class NzCommentContentDirective {
}
NzCommentContentDirective.decorators = [
    { type: Directive, args: [{
                selector: 'nz-comment-content, [nz-comment-content]',
                exportAs: 'nzCommentContent',
                host: { class: 'ant-comment-content-detail' }
            },] }
];
class NzCommentActionHostDirective extends CdkPortalOutlet {
    /**
     * @param {?} componentFactoryResolver
     * @param {?} viewContainerRef
     */
    constructor(componentFactoryResolver, viewContainerRef) {
        super(componentFactoryResolver, viewContainerRef);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        super.ngOnInit();
        this.attach(this.nzCommentActionHost);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        super.ngOnDestroy();
    }
}
NzCommentActionHostDirective.decorators = [
    { type: Directive, args: [{
                selector: '[nzCommentActionHost]',
                exportAs: 'nzCommentActionHost'
            },] }
];
/** @nocollapse */
NzCommentActionHostDirective.ctorParameters = () => [
    { type: ComponentFactoryResolver },
    { type: ViewContainerRef }
];
NzCommentActionHostDirective.propDecorators = {
    nzCommentActionHost: [{ type: Input }]
};
class NzCommentActionComponent {
    /**
     * @param {?} viewContainerRef
     */
    constructor(viewContainerRef) {
        this.viewContainerRef = viewContainerRef;
        this.contentPortal = null;
    }
    /**
     * @return {?}
     */
    get content() {
        return this.contentPortal;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.contentPortal = new TemplatePortal(this.implicitContent, this.viewContainerRef);
    }
}
NzCommentActionComponent.decorators = [
    { type: Component, args: [{
                selector: 'nz-comment-action',
                exportAs: 'nzCommentAction',
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: '<ng-template><ng-content></ng-content></ng-template>'
            }] }
];
/** @nocollapse */
NzCommentActionComponent.ctorParameters = () => [
    { type: ViewContainerRef }
];
NzCommentActionComponent.propDecorators = {
    implicitContent: [{ type: ViewChild, args: [TemplateRef,] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NzCommentComponent {
    constructor() { }
}
NzCommentComponent.decorators = [
    { type: Component, args: [{
                selector: 'nz-comment',
                exportAs: 'nzComment',
                template: "<div class=\"ant-comment-inner\">\r\n  <div class=\"ant-comment-avatar\">\r\n    <ng-content select=\"nz-avatar[nz-comment-avatar]\"></ng-content>\r\n  </div>\r\n  <div class=\"ant-comment-content\">\r\n    <div class=\"ant-comment-content-author\">\r\n      <span *ngIf=\"nzAuthor\" class=\"ant-comment-content-author-name\">\r\n        <ng-container *nzStringTemplateOutlet=\"nzAuthor\">{{ nzAuthor }}</ng-container>\r\n      </span>\r\n      <span *ngIf=\"nzDatetime\" class=\"ant-comment-content-author-time\">\r\n        <ng-container *nzStringTemplateOutlet=\"nzDatetime\">{{ nzDatetime }}</ng-container>\r\n      </span>\r\n    </div>\r\n    <ng-content select=\"nz-comment-content\"></ng-content>\r\n    <ul class=\"ant-comment-actions\" *ngIf=\"actions?.length\">\r\n      <li *ngFor=\"let action of actions\">\r\n        <span><ng-template [nzCommentActionHost]=\"action.content\"></ng-template></span>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n</div>\r\n<div class=\"ant-comment-nested\">\r\n  <ng-content></ng-content>\r\n</div>",
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
                host: {
                    class: 'ant-comment'
                },
                styles: [`
      nz-comment {
        display: block;
      }

      nz-comment-content {
        display: block;
      }
    `]
            }] }
];
/** @nocollapse */
NzCommentComponent.ctorParameters = () => [];
NzCommentComponent.propDecorators = {
    nzAuthor: [{ type: Input }],
    nzDatetime: [{ type: Input }],
    actions: [{ type: ContentChildren, args: [NzCommentActionComponent,] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
const NZ_COMMENT_CELLS = [
    NzCommentAvatarDirective,
    NzCommentContentDirective,
    NzCommentActionComponent,
    NzCommentActionHostDirective
];
class NzCommentModule {
}
NzCommentModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, NzAddOnModule],
                exports: [NzCommentComponent, ...NZ_COMMENT_CELLS],
                declarations: [NzCommentComponent, ...NZ_COMMENT_CELLS]
            },] }
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { NzCommentModule, NzCommentComponent, NzCommentAvatarDirective, NzCommentContentDirective, NzCommentActionHostDirective, NzCommentActionComponent };

//# sourceMappingURL=ng-zorro-antd-comment.js.map