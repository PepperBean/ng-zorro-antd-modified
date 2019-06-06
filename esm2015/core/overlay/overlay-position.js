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
import { ConnectionPositionPair } from '@angular/cdk/overlay';
/** @type {?} */
export const POSITION_MAP = {
    top: new ConnectionPositionPair({ originX: 'center', originY: 'top' }, {
        overlayX: 'center',
        overlayY: 'bottom'
    }),
    topCenter: new ConnectionPositionPair({ originX: 'center', originY: 'top' }, { overlayX: 'center', overlayY: 'bottom' }),
    topLeft: new ConnectionPositionPair({ originX: 'start', originY: 'top' }, {
        overlayX: 'start',
        overlayY: 'bottom'
    }),
    topRight: new ConnectionPositionPair({ originX: 'end', originY: 'top' }, { overlayX: 'end', overlayY: 'bottom' }),
    right: new ConnectionPositionPair({ originX: 'end', originY: 'center' }, {
        overlayX: 'start',
        overlayY: 'center'
    }),
    rightTop: new ConnectionPositionPair({ originX: 'end', originY: 'top' }, { overlayX: 'start', overlayY: 'top' }),
    rightBottom: new ConnectionPositionPair({ originX: 'end', originY: 'bottom' }, { overlayX: 'start', overlayY: 'bottom' }),
    bottom: new ConnectionPositionPair({ originX: 'center', originY: 'bottom' }, {
        overlayX: 'center',
        overlayY: 'top'
    }),
    bottomCenter: new ConnectionPositionPair({ originX: 'center', originY: 'bottom' }, { overlayX: 'center', overlayY: 'top' }),
    bottomLeft: new ConnectionPositionPair({ originX: 'start', originY: 'bottom' }, { overlayX: 'start', overlayY: 'top' }),
    bottomRight: new ConnectionPositionPair({ originX: 'end', originY: 'bottom' }, { overlayX: 'end', overlayY: 'top' }),
    left: new ConnectionPositionPair({ originX: 'start', originY: 'center' }, {
        overlayX: 'end',
        overlayY: 'center'
    }),
    leftTop: new ConnectionPositionPair({ originX: 'start', originY: 'top' }, { overlayX: 'end', overlayY: 'top' }),
    leftBottom: new ConnectionPositionPair({ originX: 'start', originY: 'bottom' }, { overlayX: 'end', overlayY: 'bottom' })
};
/** @type {?} */
export const DEFAULT_TOOLTIP_POSITIONS = [POSITION_MAP.top, POSITION_MAP.right, POSITION_MAP.bottom, POSITION_MAP.left];
/** @type {?} */
export const DEFAULT_DROPDOWN_POSITIONS = [
    POSITION_MAP.bottomLeft,
    POSITION_MAP.bottomRight,
    POSITION_MAP.topLeft,
    POSITION_MAP.topRight
];
/** @type {?} */
export const DEFAULT_SUBMENU_POSITIONS = [POSITION_MAP.rightTop, POSITION_MAP.leftTop];
/** @type {?} */
export const DEFAULT_CASCADER_POSITIONS = [
    POSITION_MAP.bottomLeft,
    POSITION_MAP.bottomRight,
    POSITION_MAP.topLeft,
    POSITION_MAP.topRight
];
/** @type {?} */
export const DEFAULT_MENTION_POSITIONS = [
    POSITION_MAP.bottomLeft,
    new ConnectionPositionPair({
        originX: 'start',
        originY: 'bottom'
    }, { overlayX: 'start', overlayY: 'bottom' })
];
/**
 * @param {?} position
 * @return {?}
 */
export function getPlacementName(position) {
    /** @type {?} */
    const keyList = ['originX', 'originY', 'overlayX', 'overlayY'];
    for (const placement in POSITION_MAP) {
        // @ts-ignore
        if (keyList.every((/**
         * @param {?} key
         * @return {?}
         */
        key => position.connectionPair[key] === POSITION_MAP[placement][key]))) {
            return placement;
        }
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3ZlcmxheS1wb3NpdGlvbi5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25nLXpvcnJvLWFudGQvY29yZS8iLCJzb3VyY2VzIjpbIm92ZXJsYXkvb3ZlcmxheS1wb3NpdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQVFBLE9BQU8sRUFBa0Msc0JBQXNCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQzs7QUFFOUYsTUFBTSxPQUFPLFlBQVksR0FBOEM7SUFDckUsR0FBRyxFQUFFLElBQUksc0JBQXNCLENBQzdCLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLEVBQ3JDO1FBQ0UsUUFBUSxFQUFFLFFBQVE7UUFDbEIsUUFBUSxFQUFFLFFBQVE7S0FDbkIsQ0FDRjtJQUNELFNBQVMsRUFBRSxJQUFJLHNCQUFzQixDQUNuQyxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxFQUNyQyxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxDQUMzQztJQUNELE9BQU8sRUFBRSxJQUFJLHNCQUFzQixDQUNqQyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxFQUNwQztRQUNFLFFBQVEsRUFBRSxPQUFPO1FBQ2pCLFFBQVEsRUFBRSxRQUFRO0tBQ25CLENBQ0Y7SUFDRCxRQUFRLEVBQUUsSUFBSSxzQkFBc0IsQ0FBQyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLENBQUM7SUFDakgsS0FBSyxFQUFFLElBQUksc0JBQXNCLENBQy9CLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLEVBQ3JDO1FBQ0UsUUFBUSxFQUFFLE9BQU87UUFDakIsUUFBUSxFQUFFLFFBQVE7S0FD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USxFQUFFLFFBQVEsRUFBRSxDQUMxQztDQUNGOzs7OztBQUVELE1BQU0sVUFBVSxnQkFBZ0IsQ0FBQyxRQUF3Qzs7VUFDakUsT0FBTyxHQUFHLENBQUMsU0FBUyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsVUFBVSxDQUFDO0lBQzlELEtBQUssTUFBTSxTQUFTLElBQUksWUFBWSxFQUFFO1FBQ3BDLGFBQWE7UUFDYixJQUFJLE9BQU8sQ0FBQyxLQUFLOzs7O1FBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxLQUFLLFlBQVksQ0FBQyxTQUFTLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBQyxFQUFFO1lBQ3ZGLE9BQU8sU0FBUyxDQUFDO1NBQ2xCO0tBQ0Y7QUFDSCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIEBsaWNlbnNlXHJcbiAqIENvcHlyaWdodCBBbGliYWJhLmNvbSBBbGwgUmlnaHRzIFJlc2VydmVkLlxyXG4gKlxyXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxyXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vZ2l0aHViLmNvbS9ORy1aT1JSTy9uZy16b3Jyby1hbnRkL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcclxuICovXHJcblxyXG5pbXBvcnQgeyBDb25uZWN0ZWRPdmVybGF5UG9zaXRpb25DaGFuZ2UsIENvbm5lY3Rpb25Qb3NpdGlvblBhaXIgfSBmcm9tICdAYW5ndWxhci9jZGsvb3ZlcmxheSc7XHJcblxyXG5leHBvcnQgY29uc3QgUE9TSVRJT05fTUFQOiB7IFtrZXk6IHN0cmluZ106IENvbm5lY3Rpb25Qb3NpdGlvblBhaXIgfSA9IHtcclxuICB0b3A6IG5ldyBDb25uZWN0aW9uUG9zaXRpb25QYWlyKFxyXG4gICAgeyBvcmlnaW5YOiAnY2VudGVyJywgb3JpZ2luWTogJ3RvcCcgfSxcclxuICAgIHtcclxuICAgICAgb3ZlcmxheVg6ICdjZW50ZXInLFxyXG4gICAgICBvdmVybGF5WTogJ2JvdHRvbSdcclxuICAgIH1cclxuICApLFxyXG4gIHRvcENlbnRlcjogbmV3IENvbm5lY3Rpb25Qb3NpdGlvblBhaXIoXHJcbiAgICB7IG9yaWdpblg6ICdjZW50ZXInLCBvcmlnaW5ZOiAndG9wJyB9LFxyXG4gICAgeyBvdmVybGF5WDogJ2NlbnRlcicsIG92ZXJsYXlZOiAnYm90dG9tJyB9XHJcbiAgKSxcclxuICB0b3BMZWZ0OiBuZXcgQ29ubmVjdGlvblBvc2l0aW9uUGFpcihcclxuICAgIHsgb3JpZ2luWDogJ3N0YXJ0Jywgb3JpZ2luWTogJ3RvcCcgfSxcclxuICAgIHtcclxuICAgICAgb3ZlcmxheVg6ICdzdGFydCcsXHJcbiAgICAgIG92ZXJsYXlZOiAnYm90dG9tJ1xyXG4gICAgfVxyXG4gICksXHJcbiAgdG9wUmlnaHQ6IG5ldyBDb25uZWN0aW9uUG9zaXRpb25QYWlyKHsgb3JpZ2luWDogJ2VuZCcsIG9yaWdpblk6ICd0b3AnIH0sIHsgb3ZlcmxheVg6ICdlbmQnLCBvdmVybGF5WTogJ2JvdHRvbScgfSksXHJcbiAgcmlnaHQ6IG5ldyBDb25uZWN0aW9uUG9zaXRpb25QYWlyKFxyXG4gICAgeyBvcmlnaW5YOiAnZW5kJywgb3JpZ2luWTogJ2NlbnRlcicgfSxcclxuICAgIHtcclxuICAgICAgb3ZlcmxheVg6ICdzdGFydCcsXHJcbiAgICAgIG92ZXJsYXlZOiAnY2VudGVyJ1xyXG4gICAgfVxyXG4gICksXHJcbiAgcmlnaHRUb3A6IG5ldyBDb25uZWN0aW9uUG9zaXRpb25QYWlyKHsgb3JpZ2luWDogJ2VuZCcsIG9yaWdpblk6ICd0b3AnIH0sIHsgb3ZlcmxheVg6ICdzdGFydCcsIG92ZXJsYXlZOiAndG9wJyB9KSxcclxuICByaWdodEJvdHRvbTogbmV3IENvbm5lY3Rpb25Qb3NpdGlvblBhaXIoXHJcbiAgICB7IG9yaWdpblg6ICdlbmQnLCBvcmlnaW5ZOiAnYm90dG9tJyB9LFxyXG4gICAgeyBvdmVybGF5WDogJ3N0YXJ0Jywgb3ZlcmxheVk6ICdib3R0b20nIH1cclxuICApLFxyXG4gIGJvdHRvbTogbmV3IENvbm5lY3Rpb25Qb3NpdGlvblBhaXIoXHJcbiAgICB7IG9yaWdpblg6ICdjZW50ZXInLCBvcmlnaW5ZOiAnYm90dG9tJyB9LFxyXG4gICAge1xyXG4gICAgICBvdmVybGF5WDogJ2NlbnRlcicsXHJcbiAgICAgIG92ZXJsYXlZOiAndG9wJ1xyXG4gICAgfVxyXG4gICksXHJcbiAgYm90dG9tQ2VudGVyOiBuZXcgQ29ubmVjdGlvblBvc2l0aW9uUGFpcihcclxuICAgIHsgb3JpZ2luWDogJ2NlbnRlcicsIG9yaWdpblk6ICdib3R0b20nIH0sXHJcbiAgICB7IG92ZXJsYXlYOiAnY2VudGVyJywgb3ZlcmxheVk6ICd0b3AnIH1cclxuICApLFxyXG4gIGJvdHRvbUxlZnQ6IG5ldyBDb25uZWN0aW9uUG9zaXRpb25QYWlyKFxyXG4gICAgeyBvcmlnaW5YOiAnc3RhcnQnLCBvcmlnaW5ZOiAnYm90dG9tJyB9LFxyXG4gICAgeyBvdmVybGF5WDogJ3N0YXJ0Jywgb3ZlcmxheVk6ICd0b3AnIH1cclxuICApLFxyXG4gIGJvdHRvbVJpZ2h0OiBuZXcgQ29ubmVjdGlvblBvc2l0aW9uUGFpcih7IG9yaWdpblg6ICdlbmQnLCBvcmlnaW5ZOiAnYm90dG9tJyB9LCB7IG92ZXJsYXlYOiAnZW5kJywgb3ZlcmxheVk6ICd0b3AnIH0pLFxyXG4gIGxlZnQ6IG5ldyBDb25uZWN0aW9uUG9zaXRpb25QYWlyKFxyXG4gICAgeyBvcmlnaW5YOiAnc3RhcnQnLCBvcmlnaW5ZOiAnY2VudGVyJyB9LFxyXG4gICAge1xyXG4gICAgICBvdmVybGF5WDogJ2VuZCcsXHJcbiAgICAgIG92ZXJsYXlZOiAnY2VudGVyJ1xyXG4gICAgfVxyXG4gICksXHJcbiAgbGVmdFRvcDogbmV3IENvbm5lY3Rpb25Qb3NpdGlvblBhaXIoeyBvcmlnaW5YOiAnc3RhcnQnLCBvcmlnaW5ZOiAndG9wJyB9LCB7IG92ZXJsYXlYOiAnZW5kJywgb3ZlcmxheVk6ICd0b3AnIH0pLFxyXG4gIGxlZnRCb3R0b206IG5ldyBDb25uZWN0aW9uUG9zaXRpb25QYWlyKFxyXG4gICAgeyBvcmlnaW5YOiAnc3RhcnQnLCBvcmlnaW5ZOiAnYm90dG9tJyB9LFxyXG4gICAgeyBvdmVybGF5WDogJ2VuZCcsIG92ZXJsYXlZOiAnYm90dG9tJyB9XHJcbiAgKVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IERFRkFVTFRfVE9PTFRJUF9QT1NJVElPTlMgPSBbUE9TSVRJT05fTUFQLnRvcCwgUE9TSVRJT05fTUFQLnJpZ2h0LCBQT1NJVElPTl9NQVAuYm90dG9tLCBQT1NJVElPTl9NQVAubGVmdF07XHJcbmV4cG9ydCBjb25zdCBERUZBVUxUX0RST1BET1dOX1BPU0lUSU9OUyA9IFtcclxuICBQT1NJVElPTl9NQVAuYm90dG9tTGVmdCxcclxuICBQT1NJVElPTl9NQVAuYm90dG9tUmlnaHQsXHJcbiAgUE9TSVRJT05fTUFQLnRvcExlZnQsXHJcbiAgUE9TSVRJT05fTUFQLnRvcFJpZ2h0XHJcbl07XHJcbmV4cG9ydCBjb25zdCBERUZBVUxUX1NVQk1FTlVfUE9TSVRJT05TID0gW1BPU0lUSU9OX01BUC5yaWdodFRvcCwgUE9TSVRJT05fTUFQLmxlZnRUb3BdO1xyXG5leHBvcnQgY29uc3QgREVGQVVMVF9DQVNDQURFUl9QT1NJVElPTlMgPSBbXHJcbiAgUE9TSVRJT05fTUFQLmJvdHRvbUxlZnQsXHJcbiAgUE9TSVRJT05fTUFQLmJvdHRvbVJpZ2h0LFxyXG4gIFBPU0lUSU9OX01BUC50b3BMZWZ0LFxyXG4gIFBPU0lUSU9OX01BUC50b3BSaWdodFxyXG5dO1xyXG5leHBvcnQgY29uc3QgREVGQVVMVF9NRU5USU9OX1BPU0lUSU9OUyA9IFtcclxuICBQT1NJVElPTl9NQVAuYm90dG9tTGVmdCxcclxuICBuZXcgQ29ubmVjdGlvblBvc2l0aW9uUGFpcihcclxuICAgIHtcclxuICAgICAgb3JpZ2luWDogJ3N0YXJ0JyxcclxuICAgICAgb3JpZ2luWTogJ2JvdHRvbSdcclxuICAgIH0sXHJcbiAgICB7IG92ZXJsYXlYOiAnc3RhcnQnLCBvdmVybGF5WTogJ2JvdHRvbScgfVxyXG4gIClcclxuXTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRQbGFjZW1lbnROYW1lKHBvc2l0aW9uOiBDb25uZWN0ZWRPdmVybGF5UG9zaXRpb25DaGFuZ2UpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xyXG4gIGNvbnN0IGtleUxpc3QgPSBbJ29yaWdpblgnLCAnb3JpZ2luWScsICdvdmVybGF5WCcsICdvdmVybGF5WSddO1xyXG4gIGZvciAoY29uc3QgcGxhY2VtZW50IGluIFBPU0lUSU9OX01BUCkge1xyXG4gICAgLy8gQHRzLWlnbm9yZVxyXG4gICAgaWYgKGtleUxpc3QuZXZlcnkoa2V5ID0+IHBvc2l0aW9uLmNvbm5lY3Rpb25QYWlyW2tleV0gPT09IFBPU0lUSU9OX01BUFtwbGFjZW1lbnRdW2tleV0pKSB7XHJcbiAgICAgIHJldHVybiBwbGFjZW1lbnQ7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiJdfQ==