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
import { DOCUMENT } from '@angular/common';
import { HttpBackend } from '@angular/common/http';
import { Inject, Injectable, InjectionToken, Optional, RendererFactory2 } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { IconService } from '@ant-design/icons-angular';
import { BarsOutline, CalendarOutline, CaretDownFill, CaretDownOutline, CaretUpFill, CaretUpOutline, CheckCircleFill, CheckCircleOutline, CheckOutline, ClockCircleOutline, CloseCircleFill, CloseCircleOutline, CloseOutline, DoubleLeftOutline, DoubleRightOutline, DownOutline, EllipsisOutline, ExclamationCircleFill, ExclamationCircleOutline, EyeOutline, FileFill, FileOutline, FilterFill, InfoCircleFill, InfoCircleOutline, LeftOutline, LoadingOutline, PaperClipOutline, QuestionCircleOutline, RightOutline, SearchOutline, StarFill, UploadOutline, UpOutline } from '@ant-design/icons-angular/icons';
import * as i0 from "@angular/core";
import * as i1 from "@angular/platform-browser";
import * as i2 from "@angular/common/http";
import * as i3 from "@angular/common";
/**
 * @record
 */
export function NzIconfontOption() { }
if (false) {
    /** @type {?} */
    NzIconfontOption.prototype.scriptUrl;
}
/** @type {?} */
export const NZ_ICONS = new InjectionToken('nz_icons');
/** @type {?} */
export const NZ_ICON_DEFAULT_TWOTONE_COLOR = new InjectionToken('nz_icon_default_twotone_color');
/** @type {?} */
export const DEFAULT_TWOTONE_COLOR = '#1890ff';
/** @type {?} */
export const NZ_ICONS_USED_BY_ZORRO = [
    BarsOutline,
    CalendarOutline,
    CaretUpFill,
    CaretUpOutline,
    CaretDownFill,
    CaretDownOutline,
    CheckCircleFill,
    CheckCircleOutline,
    CheckOutline,
    ClockCircleOutline,
    CloseCircleOutline,
    CloseCircleFill,
    CloseOutline,
    DoubleLeftOutline,
    DoubleRightOutline,
    DownOutline,
    EllipsisOutline,
    ExclamationCircleFill,
    ExclamationCircleOutline,
    EyeOutline,
    FileFill,
    FileOutline,
    FilterFill,
    InfoCircleFill,
    InfoCircleOutline,
    LeftOutline,
    LoadingOutline,
    PaperClipOutline,
    QuestionCircleOutline,
    RightOutline,
    StarFill,
    SearchOutline,
    StarFill,
    UploadOutline,
    UpOutline
];
/**
 * It should be a global singleton, otherwise registered icons could not be found.
 */
export class NzIconService extends IconService {
    /**
     * @param {?} rendererFactory
     * @param {?} sanitizer
     * @param {?} handler
     * @param {?} document
     * @param {?} icons
     * @param {?} defaultColor
     */
    constructor(rendererFactory, sanitizer, handler, document, icons, defaultColor) {
        super(rendererFactory, handler, document, sanitizer);
        this.rendererFactory = rendererFactory;
        this.sanitizer = sanitizer;
        this.handler = handler;
        this.document = document;
        this.icons = icons;
        this.defaultColor = defaultColor;
        this.iconfontCache = new Set();
        this.warnedAboutAPI = false;
        this.warnedAboutCross = false;
        this.warnedAboutVertical = false;
        this.addIcon(...NZ_ICONS_USED_BY_ZORRO, ...(this.icons || []));
        /** @type {?} */
        let primaryColor = DEFAULT_TWOTONE_COLOR;
        if (this.defaultColor) {
            if (this.defaultColor.startsWith('#')) {
                primaryColor = this.defaultColor;
            }
            else {
                console.warn('[NG-ZORRO]: twotone color must be a hex color!');
            }
        }
        this.twoToneColor = { primaryColor };
    }
    /**
     * @param {?} type
     * @return {?}
     */
    warnAPI(type) {
        if (type === 'old' && !this.warnedAboutAPI) {
            console.warn(`<i class="anticon"></i> would be deprecated soon. Please use <i nz-icon type=""></i> API.`);
            this.warnedAboutAPI = true;
        }
        if (type === 'cross' && !this.warnedAboutCross) {
            console.warn(`'cross' icon is replaced by 'close' icon.`);
            this.warnedAboutCross = true;
        }
        if (type === 'vertical' && !this.warnedAboutVertical) {
            console.warn(`'verticle' is misspelled, would be corrected in the next major version.`);
            this.warnedAboutVertical = true;
        }
    }
    /**
     * @param {?} svg
     * @return {?}
     */
    normalizeSvgElement(svg) {
        if (!svg.getAttribute('viewBox')) {
            this._renderer.setAttribute(svg, 'viewBox', '0 0 1024 1024');
        }
        if (!svg.getAttribute('width') || !svg.getAttribute('height')) {
            this._renderer.setAttribute(svg, 'width', '1em');
            this._renderer.setAttribute(svg, 'height', '1em');
        }
        if (!svg.getAttribute('fill')) {
            this._renderer.setAttribute(svg, 'fill', 'currentColor');
        }
    }
    /**
     * @param {?} opt
     * @return {?}
     */
    fetchFromIconfont(opt) {
        const { scriptUrl } = opt;
        if (this.document && !this.iconfontCache.has(scriptUrl)) {
            /** @type {?} */
            const script = this._renderer.createElement('script');
            this._renderer.setAttribute(script, 'src', scriptUrl);
            this._renderer.setAttribute(script, 'data-namespace', scriptUrl.replace(/^(https?|http):/g, ''));
            this._renderer.appendChild(this.document.body, script);
            this.iconfontCache.add(scriptUrl);
        }
    }
    /**
     * @param {?} type
     * @return {?}
     */
    createIconfontIcon(type) {
        return this._createSVGElementFromString(`<svg><use xlink:href="${type}"></svg>`);
    }
}
NzIconService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
NzIconService.ctorParameters = () => [
    { type: RendererFactory2 },
    { type: DomSanitizer },
    { type: HttpBackend, decorators: [{ type: Optional }] },
    { type: undefined, decorators: [{ type: Optional }, { type: Inject, args: [DOCUMENT,] }] },
    { type: Array, decorators: [{ type: Optional }, { type: Inject, args: [NZ_ICONS,] }] },
    { type: String, decorators: [{ type: Optional }, { type: Inject, args: [NZ_ICON_DEFAULT_TWOTONE_COLOR,] }] }
];
/** @nocollapse */ NzIconService.ngInjectableDef = i0.defineInjectable({ factory: function NzIconService_Factory() { return new NzIconService(i0.inject(i0.RendererFactory2), i0.inject(i1.DomSanitizer), i0.inject(i2.HttpBackend, 8), i0.inject(i3.DOCUMENT, 8), i0.inject(NZ_ICONS, 8), i0.inject(NZ_ICON_DEFAULT_TWOTONE_COLOR, 8)); }, token: NzIconService, providedIn: "root" });
if (false) {
    /**
     * @type {?}
     * @private
     */
    NzIconService.prototype.iconfontCache;
    /**
     * @type {?}
     * @private
     */
    NzIconService.prototype.warnedAboutAPI;
    /**
     * @type {?}
     * @private
     */
    NzIconService.prototype.warnedAboutCross;
    /**
     * @type {?}
     * @private
     */
    NzIconService.prototype.warnedAboutVertical;
    /**
     * @type {?}
     * @protected
     */
    NzIconService.prototype.rendererFactory;
    /**
     * @type {?}
     * @protected
     */
    NzIconService.prototype.sanitizer;
    /**
     * @type {?}
     * @protected
     */
    NzIconService.prototype.handler;
    /**
     * @type {?}
     * @protected
     */
    NzIconService.prototype.document;
    /**
     * @type {?}
     * @private
     */
    NzIconService.prototype.icons;
    /**
     * @type {?}
     * @private
     */
    NzIconService.prototype.defaultColor;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnotaWNvbi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctem9ycm8tYW50ZC9pY29uLyIsInNvdXJjZXMiOlsibnotaWNvbi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBUUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzNDLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUNuRCxPQUFPLEVBQUUsTUFBTSxFQUFFLFVBQVUsRUFBRSxjQUFjLEVBQUUsUUFBUSxFQUFFLGdCQUFnQixFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQy9GLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUN6RCxPQUFPLEVBQWtCLFdBQVcsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ3hFLE9BQU8sRUFDTCxXQUFXLEVBQ1gsZUFBZSxFQUNmLGFBQWEsRUFDYixnQkFBZ0IsRUFDaEIsV0FBVyxFQUNYLGNBQWMsRUFDZCxlQUFlLEVBQ2Ysa0JBQWtCLEVBQ2xCLFlBQVksRUFDWixrQkFBa0IsRUFDbEIsZUFBZSxFQUNmLGtCQUFrQixFQUNsQixZQUFZLEVBQ1osaUJBQWlCLEVBQ2pCLGtCQUFrQixFQUNsQixXQUFXLEVBQ1gsZUFBZSxFQUNmLHFCQUFxQixFQUNyQix3QkFBd0IsRUFDeEIsVUFBVSxFQUNWLFFBQVEsRUFDUixXQUFXLEVBQ1gsVUFBVSxFQUNWLGNBQWMsRUFDZCxpQkFBaUIsRUFDakIsV0FBVyxFQUNYLGNBQWMsRUFDZCxnQkFBZ0IsRUFDaEIscUJBQXFCLEVBQ3JCLFlBQVksRUFDWixhQUFhLEVBQ2IsUUFBUSxFQUNSLGFBQWEsRUFDYixTQUFTLEVBQ1YsTUFBTSxpQ0FBaUMsQ0FBQzs7Ozs7Ozs7QUFFekMsc0NBRUM7OztJQURDLHFDQUFrQjs7O0FBR3BCLE1BQU0sT0FBTyxRQUFRLEdBQUcsSUFBSSxjQUFjLENBQUMsVUFBVSxDQUFDOztBQUN0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QUksQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1lBQ3ZELElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1NBQ25DO0lBQ0gsQ0FBQzs7Ozs7SUFFRCxrQkFBa0IsQ0FBQyxJQUFZO1FBQzdCLE9BQU8sSUFBSSxDQUFDLDJCQUEyQixDQUFDLHlCQUF5QixJQUFJLFVBQVUsQ0FBQyxDQUFDO0lBQ25GLENBQUM7OztZQWxERixVQUFVLFNBQUM7Z0JBQ1YsVUFBVSxFQUFFLE1BQU07YUFDbkI7Ozs7WUExRnNELGdCQUFnQjtZQUM5RCxZQUFZO1lBRlosV0FBVyx1QkFnSmYsUUFBUTs0Q0FFUixRQUFRLFlBQUksTUFBTSxTQUFDLFFBQVE7d0NBQzNCLFFBQVEsWUFBSSxNQUFNLFNBQUMsUUFBUTt5Q0FDM0IsUUFBUSxZQUFJLE1BQU0sU0FBQyw2QkFBNkI7Ozs7Ozs7O0lBdkRuRCxzQ0FBMEM7Ozs7O0lBQzFDLHVDQUErQjs7Ozs7SUFDL0IseUNBQWlDOzs7OztJQUNqQyw0Q0FBb0M7Ozs7O0lBOENsQyx3Q0FBMkM7Ozs7O0lBQzNDLGtDQUFpQzs7Ozs7SUFDakMsZ0NBQTBDOzs7OztJQUUxQyxpQ0FBcUQ7Ozs7O0lBQ3JELDhCQUE2RDs7Ozs7SUFDN0QscUNBQStFIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcclxuICovXHJcblxyXG5pbXBvcnQgeyBET0NVTUVOVCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IEh0dHBCYWNrZW5kIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5pbXBvcnQgeyBJbmplY3QsIEluamVjdGFibGUsIEluamVjdGlvblRva2VuLCBPcHRpb25hbCwgUmVuZGVyZXJGYWN0b3J5MiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBEb21TYW5pdGl6ZXIgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcclxuaW1wb3J0IHsgSWNvbkRlZmluaXRpb24sIEljb25TZXJ2aWNlIH0gZnJvbSAnQGFudC1kZXNpZ24vaWNvbnMtYW5ndWxhcic7XHJcbmltcG9ydCB7XHJcbiAgQmFyc091dGxpbmUsXHJcbiAgQ2FsZW5kYXJPdXRsaW5lLFxyXG4gIENhcmV0RG93bkZpbGwsXHJcbiAgQ2FyZXREb3duT3V0bGluZSxcclxuICBDYXJldFVwRmlsbCxcclxuICBDYXJldFVwT3V0bGluZSxcclxuICBDaGVja0NpcmNsZUZpbGwsXHJcbiAgQ2hlY2tDaXJjbGVPdXRsaW5lLFxyXG4gIENoZWNrT3V0bGluZSxcclxuICBDbG9ja0NpcmNsZU91dGxpbmUsXHJcbiAgQ2xvc2VDaXJjbGVGaWxsLFxyXG4gIENsb3NlQ2lyY2xlT3V0bGluZSxcclxuICBDbG9zZU91dGxpbmUsXHJcbiAgRG91YmxlTGVmdE91dGxpbmUsXHJcbiAgRG91YmxlUmlnaHRPdXRsaW5lLFxyXG4gIERvd25PdXRsaW5lLFxyXG4gIEVsbGlwc2lzT3V0bGluZSxcclxuICBFeGNsYW1hdGlvbkNpcmNsZUZpbGwsXHJcbiAgRXhjbGFtYXRpb25DaXJjbGVPdXRsaW5lLFxyXG4gIEV5ZU91dGxpbmUsXHJcbiAgRmlsZUZpbGwsXHJcbiAgRmlsZU91dGxpbmUsXHJcbiAgRmlsdGVyRmlsbCxcclxuICBJbmZvQ2lyY2xlRmlsbCxcclxuICBJbmZvQ2lyY2xlT3V0bGluZSxcclxuICBMZWZ0T3V0bGluZSxcclxuICBMb2FkaW5nT3V0bGluZSxcclxuICBQYXBlckNsaXBPdXRsaW5lLFxyXG4gIFF1ZXN0aW9uQ2lyY2xlT3V0bGluZSxcclxuICBSaWdodE91dGxpbmUsXHJcbiAgU2VhcmNoT3V0bGluZSxcclxuICBTdGFyRmlsbCxcclxuICBVcGxvYWRPdXRsaW5lLFxyXG4gIFVwT3V0bGluZVxyXG59IGZyb20gJ0BhbnQtZGVzaWduL2ljb25zLWFuZ3VsYXIvaWNvbnMnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBOekljb25mb250T3B0aW9uIHtcclxuICBzY3JpcHRVcmw6IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IE5aX0lDT05TID0gbmV3IEluamVjdGlvblRva2VuKCduel9pY29ucycpO1xyXG5leHBvcnQgY29uc3QgTlpfSUNPTl9ERUZBVUxUX1RXT1RPTkVfQ09MT1IgPSBuZXcgSW5qZWN0aW9uVG9rZW4oJ256X2ljb25fZGVmYXVsdF90d290b25lX2NvbG9yJyk7XHJcbmV4cG9ydCBjb25zdCBERUZBVUxUX1RXT1RPTkVfQ09MT1IgPSAnIzE4OTBmZic7XHJcbmV4cG9ydCBjb25zdCBOWl9JQ09OU19VU0VEX0JZX1pPUlJPOiBJY29uRGVmaW5pdGlvbltdID0gW1xyXG4gIEJhcnNPdXRsaW5lLFxyXG4gIENhbGVuZGFyT3V0bGluZSxcclxuICBDYXJldFVwRmlsbCxcclxuICBDYXJldFVwT3V0bGluZSxcclxuICBDYXJldERvd25GaWxsLFxyXG4gIENhcmV0RG93bk91dGxpbmUsXHJcbiAgQ2hlY2tDaXJjbGVGaWxsLFxyXG4gIENoZWNrQ2lyY2xlT3V0bGluZSxcclxuICBDaGVja091dGxpbmUsXHJcbiAgQ2xvY2tDaXJjbGVPdXRsaW5lLFxyXG4gIENsb3NlQ2lyY2xlT3V0bGluZSxcclxuICBDbG9zZUNpcmNsZUZpbGwsXHJcbiAgQ2xvc2VPdXRsaW5lLFxyXG4gIERvdWJsZUxlZnRPdXRsaW5lLFxyXG4gIERvdWJsZVJpZ2h0T3V0bGluZSxcclxuICBEb3duT3V0bGluZSxcclxuICBFbGxpcHNpc091dGxpbmUsXHJcbiAgRXhjbGFtYXRpb25DaXJjbGVGaWxsLFxyXG4gIEV4Y2xhbWF0aW9uQ2lyY2xlT3V0bGluZSxcclxuICBFeWVPdXRsaW5lLFxyXG4gIEZpbGVGaWxsLFxyXG4gIEZpbGVPdXRsaW5lLFxyXG4gIEZpbHRlckZpbGwsXHJcbiAgSW5mb0NpcmNsZUZpbGwsXHJcbiAgSW5mb0NpcmNsZU91dGxpbmUsXHJcbiAgTGVmdE91dGxpbmUsXHJcbiAgTG9hZGluZ091dGxpbmUsXHJcbiAgUGFwZXJDbGlwT3V0bGluZSxcclxuICBRdWVzdGlvbkNpcmNsZU91dGxpbmUsXHJcbiAgUmlnaHRPdXRsaW5lLFxyXG4gIFN0YXJGaWxsLFxyXG4gIFNlYXJjaE91dGxpbmUsXHJcbiAgU3RhckZpbGwsXHJcbiAgVXBsb2FkT3V0bGluZSxcclxuICBVcE91dGxpbmVcclxuXTtcclxuXHJcbi8qKlxyXG4gKiBJdCBzaG91bGQgYmUgYSBnbG9iYWwgc2luZ2xldG9uLCBvdGhlcndpc2UgcmVnaXN0ZXJlZCBpY29ucyBjb3VsZCBub3QgYmUgZm91bmQuXHJcbiAqL1xyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOekljb25TZXJ2aWNlIGV4dGVuZHMgSWNvblNlcnZpY2Uge1xyXG4gIHByaXZhdGUgaWNvbmZvbnRDYWNoZSA9IG5ldyBTZXQ8c3RyaW5nPigpO1xyXG4gIHByaXZhdGUgd2FybmVkQWJvdXRBUEkgPSBmYWxzZTtcclxuICBwcml2YXRlIHdhcm5lZEFib3V0Q3Jvc3MgPSBmYWxzZTtcclxuICBwcml2YXRlIHdhcm5lZEFib3V0VmVydGljYWwgPSBmYWxzZTtcclxuXHJcbiAgd2FybkFQSSh0eXBlOiAnb2xkJyB8ICdjcm9zcycgfCAndmVydGljYWwnKTogdm9pZCB7XHJcbiAgICBpZiAodHlwZSA9PT0gJ29sZCcgJiYgIXRoaXMud2FybmVkQWJvdXRBUEkpIHtcclxuICAgICAgY29uc29sZS53YXJuKGA8aSBjbGFzcz1cImFudGljb25cIj48L2k+IHdvdWxkIGJlIGRlcHJlY2F0ZWQgc29vbi4gUGxlYXNlIHVzZSA8aSBuei1pY29uIHR5cGU9XCJcIj48L2k+IEFQSS5gKTtcclxuICAgICAgdGhpcy53YXJuZWRBYm91dEFQSSA9IHRydWU7XHJcbiAgICB9XHJcbiAgICBpZiAodHlwZSA9PT0gJ2Nyb3NzJyAmJiAhdGhpcy53YXJuZWRBYm91dENyb3NzKSB7XHJcbiAgICAgIGNvbnNvbGUud2FybihgJ2Nyb3NzJyBpY29uIGlzIHJlcGxhY2VkIGJ5ICdjbG9zZScgaWNvbi5gKTtcclxuICAgICAgdGhpcy53YXJuZWRBYm91dENyb3NzID0gdHJ1ZTtcclxuICAgIH1cclxuICAgIGlmICh0eXBlID09PSAndmVydGljYWwnICYmICF0aGlzLndhcm5lZEFib3V0VmVydGljYWwpIHtcclxuICAgICAgY29uc29sZS53YXJuKGAndmVydGljbGUnIGlzIG1pc3NwZWxsZWQsIHdvdWxkIGJlIGNvcnJlY3RlZCBpbiB0aGUgbmV4dCBtYWpvciB2ZXJzaW9uLmApO1xyXG4gICAgICB0aGlzLndhcm5lZEFib3V0VmVydGljYWwgPSB0cnVlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbm9ybWFsaXplU3ZnRWxlbWVudChzdmc6IFNWR0VsZW1lbnQpOiB2b2lkIHtcclxuICAgIGlmICghc3ZnLmdldEF0dHJpYnV0ZSgndmlld0JveCcpKSB7XHJcbiAgICAgIHRoaXMuX3JlbmRlcmVyLnNldEF0dHJpYnV0ZShzdmcsICd2aWV3Qm94JywgJzAgMCAxMDI0IDEwMjQnKTtcclxuICAgIH1cclxuICAgIGlmICghc3ZnLmdldEF0dHJpYnV0ZSgnd2lkdGgnKSB8fCAhc3ZnLmdldEF0dHJpYnV0ZSgnaGVpZ2h0JykpIHtcclxuICAgICAgdGhpcy5fcmVuZGVyZXIuc2V0QXR0cmlidXRlKHN2ZywgJ3dpZHRoJywgJzFlbScpO1xyXG4gICAgICB0aGlzLl9yZW5kZXJlci5zZXRBdHRyaWJ1dGUoc3ZnLCAnaGVpZ2h0JywgJzFlbScpO1xyXG4gICAgfVxyXG4gICAgaWYgKCFzdmcuZ2V0QXR0cmlidXRlKCdmaWxsJykpIHtcclxuICAgICAgdGhpcy5fcmVuZGVyZXIuc2V0QXR0cmlidXRlKHN2ZywgJ2ZpbGwnLCAnY3VycmVudENvbG9yJyk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBmZXRjaEZyb21JY29uZm9udChvcHQ6IE56SWNvbmZvbnRPcHRpb24pOiB2b2lkIHtcclxuICAgIGNvbnN0IHsgc2NyaXB0VXJsIH0gPSBvcHQ7XHJcbiAgICBpZiAodGhpcy5kb2N1bWVudCAmJiAhdGhpcy5pY29uZm9udENhY2hlLmhhcyhzY3JpcHRVcmwpKSB7XHJcbiAgICAgIGNvbnN0IHNjcmlwdCA9IHRoaXMuX3JlbmRlcmVyLmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xyXG4gICAgICB0aGlzLl9yZW5kZXJlci5zZXRBdHRyaWJ1dGUoc2NyaXB0LCAnc3JjJywgc2NyaXB0VXJsKTtcclxuICAgICAgdGhpcy5fcmVuZGVyZXIuc2V0QXR0cmlidXRlKHNjcmlwdCwgJ2RhdGEtbmFtZXNwYWNlJywgc2NyaXB0VXJsLnJlcGxhY2UoL14oaHR0cHM/fGh0dHApOi9nLCAnJykpO1xyXG4gICAgICB0aGlzLl9yZW5kZXJlci5hcHBlbmRDaGlsZCh0aGlzLmRvY3VtZW50LmJvZHksIHNjcmlwdCk7XHJcbiAgICAgIHRoaXMuaWNvbmZvbnRDYWNoZS5hZGQoc2NyaXB0VXJsKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNyZWF0ZUljb25mb250SWNvbih0eXBlOiBzdHJpbmcpOiBTVkdFbGVtZW50IHtcclxuICAgIHJldHVybiB0aGlzLl9jcmVhdGVTVkdFbGVtZW50RnJvbVN0cmluZyhgPHN2Zz48dXNlIHhsaW5rOmhyZWY9XCIke3R5cGV9XCI+PC9zdmc+YCk7XHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByb3RlY3RlZCByZW5kZXJlckZhY3Rvcnk6IFJlbmRlcmVyRmFjdG9yeTIsXHJcbiAgICBwcm90ZWN0ZWQgc2FuaXRpemVyOiBEb21TYW5pdGl6ZXIsXHJcbiAgICBAT3B0aW9uYWwoKSBwcm90ZWN0ZWQgaGFuZGxlcjogSHR0cEJhY2tlbmQsXHJcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XHJcbiAgICBAT3B0aW9uYWwoKSBASW5qZWN0KERPQ1VNRU5UKSBwcm90ZWN0ZWQgZG9jdW1lbnQ6IGFueSxcclxuICAgIEBPcHRpb25hbCgpIEBJbmplY3QoTlpfSUNPTlMpIHByaXZhdGUgaWNvbnM6IEljb25EZWZpbml0aW9uW10sXHJcbiAgICBAT3B0aW9uYWwoKSBASW5qZWN0KE5aX0lDT05fREVGQVVMVF9UV09UT05FX0NPTE9SKSBwcml2YXRlIGRlZmF1bHRDb2xvcjogc3RyaW5nXHJcbiAgKSB7XHJcbiAgICBzdXBlcihyZW5kZXJlckZhY3RvcnksIGhhbmRsZXIsIGRvY3VtZW50LCBzYW5pdGl6ZXIpO1xyXG5cclxuICAgIHRoaXMuYWRkSWNvbiguLi5OWl9JQ09OU19VU0VEX0JZX1pPUlJPLCAuLi4odGhpcy5pY29ucyB8fCBbXSkpO1xyXG5cclxuICAgIGxldCBwcmltYXJ5Q29sb3IgPSBERUZBVUxUX1RXT1RPTkVfQ09MT1I7XHJcbiAgICBpZiAodGhpcy5kZWZhdWx0Q29sb3IpIHtcclxuICAgICAgaWYgKHRoaXMuZGVmYXVsdENvbG9yLnN0YXJ0c1dpdGgoJyMnKSkge1xyXG4gICAgICAgIHByaW1hcnlDb2xvciA9IHRoaXMuZGVmYXVsdENvbG9yO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnNvbGUud2FybignW05HLVpPUlJPXTogdHdvdG9uZSBjb2xvciBtdXN0IGJlIGEgaGV4IGNvbG9yIScpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICB0aGlzLnR3b1RvbmVDb2xvciA9IHsgcHJpbWFyeUNvbG9yIH07XHJcbiAgfVxyXG59XHJcbiJdfQ==