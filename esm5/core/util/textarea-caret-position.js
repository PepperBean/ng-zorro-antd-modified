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
// from https://github.com/component/textarea-caret-position
// We'll copy the properties below into the mirror div.
// Note that some browsers, such as Firefox, do not concatenate properties
// into their shorthand (e.g. padding-top, padding-bottom etc. -> padding),
// so we have to list every single property explicitly.
/** @type {?} */
export var properties = [
    'direction',
    'boxSizing',
    'width',
    'height',
    'overflowX',
    'overflowY',
    'borderTopWidth',
    'borderRightWidth',
    'borderBottomWidth',
    'borderLeftWidth',
    'borderStyle',
    'paddingTop',
    'paddingRight',
    'paddingBottom',
    'paddingLeft',
    // https://developer.mozilla.org/en-US/docs/Web/CSS/font
    'fontStyle',
    'fontVariant',
    'fontWeight',
    'fontStretch',
    'fontSize',
    'fontSizeAdjust',
    'lineHeight',
    'fontFamily',
    'textAlign',
    'textTransform',
    'textIndent',
    'textDecoration',
    'letterSpacing',
    'wordSpacing',
    'tabSize',
    'MozTabSize'
];
/** @type {?} */
var isBrowser = typeof window !== 'undefined';
// tslint:disable-next-line:no-any
/** @type {?} */
var isFirefox = isBrowser && ((/** @type {?} */ (window))).mozInnerScreenX != null;
/** @type {?} */
var _parseInt = (/**
 * @param {?} str
 * @return {?}
 */
function (str) { return parseInt(str, 10); });
var ɵ0 = _parseInt;
/**
 * @record
 */
export function Coordinates() { }
if (false) {
    /** @type {?} */
    Coordinates.prototype.top;
    /** @type {?} */
    Coordinates.prototype.left;
    /** @type {?} */
    Coordinates.prototype.height;
}
/**
 * @param {?} element
 * @param {?} position
 * @param {?=} options
 * @return {?}
 */
export function getCaretCoordinates(element, position, options) {
    if (!isBrowser) {
        throw new Error('textarea-caret-position#getCaretCoordinates should only be called in a browser');
    }
    /** @type {?} */
    var debug = (options && options.debug) || false;
    if (debug) {
        /** @type {?} */
        var el = document.querySelector('#input-textarea-caret-position-mirror-div');
        if (el) {
            (/** @type {?} */ (el.parentNode)).removeChild(el);
        }
    }
    // The mirror div will replicate the textarea's style
    /** @type {?} */
    var div = document.createElement('div');
    div.id = 'input-textarea-caret-position-mirror-div';
    document.body.appendChild(div);
    /** @type {?} */
    var style = div.style;
    // tslint:disable-next-line:no-any
    /** @type {?} */
    var computed = window.getComputedStyle ? window.getComputedStyle(element) : ((/** @type {?} */ (element))).currentStyle;
    // currentStyle for IE < 9
    /** @type {?} */
    var isInput = element.nodeName === 'INPUT';
    // Default textarea styles
    style.whiteSpace = 'pre-wrap';
    if (!isInput) {
        style.wordWrap = 'break-word'; // only for textarea-s
    }
    // Position off-screen
    style.position = 'absolute'; // required to return coordinates properly
    if (!debug) {
        style.visibility = 'hidden';
    } // not 'display: none' because we want rendering
    // Transfer the element's properties to the div
    properties.forEach((/**
     * @param {?} prop
     * @return {?}
     */
    function (prop) {
        if (isInput && prop === 'lineHeight') {
            // Special case for <input>s because text is rendered centered and line height may be != height
            style.lineHeight = computed.height;
        }
        else {
            // @ts-ignore
            style[prop] = computed[prop];
        }
    }));
    if (isFirefox) {
        // Firefox lies about the overflow property for textareas: https://bugzilla.mozilla.org/show_bug.cgi?id=984275
        if (element.scrollHeight > _parseInt(computed.height)) {
            style.overflowY = 'scroll';
        }
    }
    else {
        style.overflow = 'hidden'; // for Chrome to not render a scrollbar; IE keeps overflowY = 'scroll'
    }
    div.textContent = element.value.substring(0, position);
    // The second special handling for input type="text" vs textarea:
    // spaces need to be replaced with non-breaking spaces - http://stackoverflow.com/a/13402035/1269037
    if (isInput) {
        div.textContent = div.textContent.replace(/\s/g, '\u00a0');
    }
    /** @type {?} */
    var span = document.createElement('span');
    // Wrapping must be replicated *exactly*, including when a long word gets
    // onto the next line, with whitespace at the end of the line before (#7).
    // The  *only* reliable way to do that is to copy the *entire* rest of the
    // textarea's content into the <span> created at the caret position.
    // For inputs, just '.' would be enough, but no need to bother.
    span.textContent = element.value.substring(position) || '.'; // || because a completely empty faux span doesn't render at all
    div.appendChild(span);
    /** @type {?} */
    var coordinates = {
        top: span.offsetTop + _parseInt(computed.borderTopWidth),
        left: span.offsetLeft + _parseInt(computed.borderLeftWidth),
        height: _parseInt(computed.lineHeight)
    };
    if (debug) {
        span.style.backgroundColor = '#eee';
        createDebugEle(element, coordinates);
    }
    else {
        document.body.removeChild(div);
    }
    return coordinates;
}
/**
 * @param {?} element
 * @param {?} coordinates
 * @return {?}
 */
export function createDebugEle(element, coordinates) {
    /** @type {?} */
    var fontSize = getComputedStyle(element).getPropertyValue('font-size');
    /** @type {?} */
    var rect = ((/** @type {?} */ (document.querySelector('#DEBUG')))) || document.createElement('div');
    document.body.appendChild(rect);
    rect.id = 'DEBUG';
    rect.style.position = 'absolute';
    rect.style.backgroundColor = 'red';
    rect.style.height = fontSize;
    rect.style.width = '1px';
    rect.style.top = element.getBoundingClientRect().top -
        element.scrollTop +
        window.pageYOffset +
        coordinates.top + "px";
    rect.style.left = element.getBoundingClientRect().left -
        element.scrollLeft +
        window.pageXOffset +
        coordinates.left + "px";
    console.log(rect.style.top);
    console.log(rect.style.left);
}
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dGFyZWEtY2FyZXQtcG9zaXRpb24uanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy16b3Jyby1hbnRkL2NvcmUvIiwic291cmNlcyI6WyJ1dGlsL3RleHRhcmVhLWNhcmV0LXBvc2l0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBY0EsTUFBTSxLQUFPLFVBQVUsR0FBRztJQUN4QixXQUFXO0lBQ1gsV0FBVztJQUNYLE9BQU87SUFDUCxRQUFRO0lBQ1IsV0FBVztJQUNYLFdBQVc7SUFFWCxnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsYUFBYTtJQUViLFlBQVk7SUFDWixjQUFjO0lBQ2QsZUFBZTtJQUNmLGFBQWE7SUFFYix3REFBd0Q7SUFDeEQsV0FBVztJQUNYLGFBQWE7SUFDYixZQUFZO0lBQ1osYUFBYTtJQUNiLFVBQVU7SUFDVixnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLFlBQVk7SUFFWixXQUFXO0lBQ1gsZUFBZTtJQUNmLFlBQVk7SUFDWixnQkFBZ0I7SUFFaEIsZUFBZTtJQUNmLGFBQWE7SUFFYixTQUFTO0lBQ1QsWUFBWTtDQUNiOztJQUVLLFNBQVMsR0FBRyxPQUFPLE1BQU0sS0FBSyxXQUFXOzs7SUFHekMsU0FBUyxHQUFHLFNBQVMsSUFBSSxDQUFDLG1CQUFBLE1BQU0sRUFBTyxDQUFDLENBQUMsZUFBZSxJQUFJLElBQUk7O0lBRWhFLFNBQVM7Ozs7QUFBRyxVQUFDLEdBQVcsSUFBSyxPQUFBLFFBQVEsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLEVBQWpCLENBQWlCLENBQUE7Ozs7O0FBRXBELGlDQUlDOzs7SUFIQywwQkFBWTs7SUFDWiwyQkFBYTs7SUFDYiw2QkFBZTs7Ozs7Ozs7QUFHakIsTUFBTSxVQUFVLG1CQUFtQixDQUNqQyxPQUErQyxFQUMvQyxRQUFnQixFQUNoQixPQUE2QjtJQUU3QixJQUFJLENBQUMsU0FBUyxFQUFFO1FBQ2QsTUFBTSxJ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LENBQUMsR0FBRyxHQUFNLE9BQU8sQ0FBQyxxQkFBcUIsRUFBRSxDQUFDLEdBQUc7UUFDckQsT0FBTyxDQUFDLFNBQVM7UUFDakIsTUFBTSxDQUFDLFdBQVc7UUFDbEIsV0FBVyxDQUFDLEdBQUcsT0FBSSxDQUFDO0lBQ3RCLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxHQUFNLE9BQU8sQ0FBQyxxQkFBcUIsRUFBRSxDQUFDLElBQUk7UUFDdkQsT0FBTyxDQUFDLFVBQVU7UUFDbEIsTUFBTSxDQUFDLFdBQVc7UUFDbEIsV0FBVyxDQUFDLElBQUksT0FBSSxDQUFDO0lBQ3ZCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUM1QixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDL0IsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBAbGljZW5zZVxyXG4gKiBDb3B5cmlnaHQgQWxpYmFiYS5jb20gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cclxuICpcclxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcclxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2dpdGh1Yi5jb20vTkctWk9SUk8vbmctem9ycm8tYW50ZC9ibG9iL21hc3Rlci9MSUNFTlNFXHJcbiAqL1xyXG5cclxuLy8gZnJvbSBodHRwczovL2dpdGh1Yi5jb20vY29tcG9uZW50L3RleHRhcmVhLWNhcmV0LXBvc2l0aW9uXHJcblxyXG4vLyBXZSdsbCBjb3B5IHRoZSBwcm9wZXJ0aWVzIGJlbG93IGludG8gdGhlIG1pcnJvciBkaXYuXHJcbi8vIE5vdGUgdGhhdCBzb21lIGJyb3dzZXJzLCBzdWNoIGFzIEZpcmVmb3gsIGRvIG5vdCBjb25jYXRlbmF0ZSBwcm9wZXJ0aWVzXHJcbi8vIGludG8gdGhlaXIgc2hvcnRoYW5kIChlLmcuIHBhZGRpbmctdG9wLCBwYWRkaW5nLWJvdHRvbSBldGMuIC0+IHBhZGRpbmcpLFxyXG4vLyBzbyB3ZSBoYXZlIHRvIGxpc3QgZXZlcnkgc2luZ2xlIHByb3BlcnR5IGV4cGxpY2l0bHkuXHJcbmV4cG9ydCBjb25zdCBwcm9wZXJ0aWVzID0gW1xyXG4gICdkaXJlY3Rpb24nLCAvLyBSVEwgc3VwcG9ydFxyXG4gICdib3hTaXppbmcnLFxyXG4gICd3aWR0aCcsIC8vIG9uIENocm9tZSBhbmQgSUUsIGV4Y2x1ZGUgdGhlIHNjcm9sbGJhciwgc28gdGhlIG1pcnJvciBkaXYgd3JhcHMgZXhhY3RseSBhcyB0aGUgdGV4dGFyZWEgZG9lc1xyXG4gICdoZWlnaHQnLFxyXG4gICdvdmVyZmxvd1gnLFxyXG4gICdvdmVyZmxvd1knLCAvLyBjb3B5IHRoZSBzY3JvbGxiYXIgZm9yIElFXHJcblxyXG4gICdib3JkZXJUb3BXaWR0aCcsXHJcbiAgJ2JvcmRlclJpZ2h0V2lkdGgnLFxyXG4gICdib3JkZXJCb3R0b21XaWR0aCcsXHJcbiAgJ2JvcmRlckxlZnRXaWR0aCcsXHJcbiAgJ2JvcmRlclN0eWxlJyxcclxuXHJcbiAgJ3BhZGRpbmdUb3AnLFxyXG4gICdwYWRkaW5nUmlnaHQnLFxyXG4gICdwYWRkaW5nQm90dG9tJyxcclxuICAncGFkZGluZ0xlZnQnLFxyXG5cclxuICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9DU1MvZm9udFxyXG4gICdmb250U3R5bGUnLFxyXG4gICdmb250VmFyaWFudCcsXHJcbiAgJ2ZvbnRXZWlnaHQnLFxyXG4gICdmb250U3RyZXRjaCcsXHJcbiAgJ2ZvbnRTaXplJyxcclxuICAnZm9udFNpemVBZGp1c3QnLFxyXG4gICdsaW5lSGVpZ2h0JyxcclxuICAnZm9udEZhbWlseScsXHJcblxyXG4gICd0ZXh0QWxpZ24nLFxyXG4gICd0ZXh0VHJhbnNmb3JtJyxcclxuICAndGV4dEluZGVudCcsXHJcbiAgJ3RleHREZWNvcmF0aW9uJywgLy8gbWlnaHQgbm90IG1ha2UgYSBkaWZmZXJlbmNlLCBidXQgYmV0dGVyIGJlIHNhZmVcclxuXHJcbiAgJ2xldHRlclNwYWNpbmcnLFxyXG4gICd3b3JkU3BhY2luZycsXHJcblxyXG4gICd0YWJTaXplJyxcclxuICAnTW96VGFiU2l6ZSdcclxuXTtcclxuXHJcbmNvbnN0IGlzQnJvd3NlciA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnO1xyXG5cclxuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxyXG5jb25zdCBpc0ZpcmVmb3ggPSBpc0Jyb3dzZXIgJiYgKHdpbmRvdyBhcyBhbnkpLm1veklubmVyU2NyZWVuWCAhPSBudWxsO1xyXG5cclxuY29uc3QgX3BhcnNlSW50ID0gKHN0cjogc3RyaW5nKSA9PiBwYXJzZUludChzdHIsIDEwKTtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgQ29vcmRpbmF0ZXMge1xyXG4gIHRvcDogbnVtYmVyO1xyXG4gIGxlZnQ6IG51bWJlcjtcclxuICBoZWlnaHQ6IG51bWJlcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldENhcmV0Q29vcmRpbmF0ZXMoXHJcbiAgZWxlbWVudDogSFRNTElucHV0RWxlbWVudCB8IEhUTUxUZXh0QXJlYUVsZW1lbnQsXHJcbiAgcG9zaXRpb246IG51bWJlcixcclxuICBvcHRpb25zPzogeyBkZWJ1Zz86IGJvb2xlYW4gfVxyXG4pOiBDb29yZGluYXRlcyB7XHJcbiAgaWYgKCFpc0Jyb3dzZXIpIHtcclxuICAgIHRocm93IG5ldyBFcnJvcigndGV4dGFyZWEtY2FyZXQtcG9zaXRpb24jZ2V0Q2FyZXRDb29yZGluYXRlcyBzaG91bGQgb25seSBiZSBjYWxsZWQgaW4gYSBicm93c2VyJyk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBkZWJ1ZyA9IChvcHRpb25zICYmIG9wdGlvbnMuZGVidWcpIHx8IGZhbHNlO1xyXG4gIGlmIChkZWJ1Zykge1xyXG4gICAgY29uc3QgZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaW5wdXQtdGV4dGFyZWEtY2FyZXQtcG9zaXRpb24tbWlycm9yLWRpdicpO1xyXG4gICAgaWYgKGVsKSB7XHJcbiAgICAgIGVsLnBhcmVudE5vZGUhLnJlbW92ZUNoaWxkKGVsKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIFRoZSBtaXJyb3IgZGl2IHdpbGwgcmVwbGljYXRlIHRoZSB0ZXh0YXJlYSdzIHN0eWxlXHJcbiAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgZGl2LmlkID0gJ2lucHV0LXRleHRhcmVhLWNhcmV0LXBvc2l0aW9uLW1pcnJvci1kaXYnO1xyXG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZGl2KTtcclxuXHJcbiAgY29uc3Qgc3R5bGUgPSBkaXYuc3R5bGU7XHJcblxyXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpuby1hbnlcclxuICBjb25zdCBjb21wdXRlZCA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlID8gd2luZG93LmdldENvbXB1dGVkU3R5bGUoZWxlbWVudCkgOiAoZWxlbWVudCBhcyBhbnkpLmN1cnJlbnRTdHlsZTsgLy8gY3VycmVudFN0eWxlIGZvciBJRSA8IDlcclxuICBjb25zdCBpc0lucHV0ID0gZWxlbWVudC5ub2RlTmFtZSA9PT0gJ0lOUFVUJztcclxuXHJcbiAgLy8gRGVmYXVsdCB0ZXh0YXJlYSBzdHlsZXNcclxuICBzdHlsZS53aGl0ZVNwYWNlID0gJ3ByZS13cmFwJztcclxuICBpZiAoIWlzSW5wdXQpIHtcclxuICAgIHN0eWxlLndvcmRXcmFwID0gJ2JyZWFrLXdvcmQnOyAvLyBvbmx5IGZvciB0ZXh0YXJlYS1zXHJcbiAgfVxyXG5cclxuICAvLyBQb3NpdGlvbiBvZmYtc2NyZWVuXHJcbiAgc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnOyAvLyByZXF1aXJlZCB0byByZXR1cm4gY29vcmRpbmF0ZXMgcHJvcGVybHlcclxuICBpZiAoIWRlYnVnKSB7XHJcbiAgICBzdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbic7XHJcbiAgfSAvLyBub3QgJ2Rpc3BsYXk6IG5vbmUnIGJlY2F1c2Ugd2Ugd2FudCByZW5kZXJpbmdcclxuXHJcbiAgLy8gVHJhbnNmZXIgdGhlIGVsZW1lbnQncyBwcm9wZXJ0aWVzIHRvIHRoZSBkaXZcclxuICBwcm9wZXJ0aWVzLmZvckVhY2goKHByb3A6IHN0cmluZykgPT4ge1xyXG4gICAgaWYgKGlzSW5wdXQgJiYgcHJvcCA9PT0gJ2xpbmVIZWlnaHQnKSB7XHJcbiAgICAgIC8vIFNwZWNpYWwgY2FzZSBmb3IgPGlucHV0PnMgYmVjYXVzZSB0ZXh0IGlzIHJlbmRlcmVkIGNlbnRlcmVkIGFuZCBsaW5lIGhlaWdodCBtYXkgYmUgIT0gaGVpZ2h0XHJcbiAgICAgIHN0eWxlLmxpbmVIZWlnaHQgPSBjb21wdXRlZC5oZWlnaHQ7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAvLyBAdHMtaWdub3JlXHJcbiAgICAgIHN0eWxlW3Byb3BdID0gY29tcHV0ZWRbcHJvcF07XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gIGlmIChpc0ZpcmVmb3gpIHtcclxuICAgIC8vIEZpcmVmb3ggbGllcyBhYm91dCB0aGUgb3ZlcmZsb3cgcHJvcGVydHkgZm9yIHRleHRhcmVhczogaHR0cHM6Ly9idWd6aWxsYS5tb3ppbGxhLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9OTg0Mjc1XHJcbiAgICBpZiAoZWxlbWVudC5zY3JvbGxIZWlnaHQgPiBfcGFyc2VJbnQoY29tcHV0ZWQuaGVpZ2h0KSkge1xyXG4gICAgICBzdHlsZS5vdmVyZmxvd1kgPSAnc2Nyb2xsJztcclxuICAgIH1cclxuICB9IGVsc2Uge1xyXG4gICAgc3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJzsgLy8gZm9yIENocm9tZSB0byBub3QgcmVuZGVyIGEgc2Nyb2xsYmFyOyBJRSBrZWVwcyBvdmVyZmxvd1kgPSAnc2Nyb2xsJ1xyXG4gIH1cclxuXHJcbiAgZGl2LnRleHRDb250ZW50ID0gZWxlbWVudC52YWx1ZS5zdWJzdHJpbmcoMCwgcG9zaXRpb24pO1xyXG4gIC8vIFRoZSBzZWNvbmQgc3BlY2lhbCBoYW5kbGluZyBmb3IgaW5wdXQgdHlwZT1cInRleHRcIiB2cyB0ZXh0YXJlYTpcclxuICAvLyBzcGFjZXMgbmVlZCB0byBiZSByZXBsYWNlZCB3aXRoIG5vbi1icmVha2luZyBzcGFjZXMgLSBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8xMzQwMjAzNS8xMjY5MDM3XHJcbiAgaWYgKGlzSW5wdXQpIHtcclxuICAgIGRpdi50ZXh0Q29udGVudCA9IGRpdi50ZXh0Q29udGVudC5yZXBsYWNlKC9cXHMvZywgJ1xcdTAwYTAnKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgLy8gV3JhcHBpbmcgbXVzdCBiZSByZXBsaWNhdGVkICpleGFjdGx5KiwgaW5jbHVkaW5nIHdoZW4gYSBsb25nIHdvcmQgZ2V0c1xyXG4gIC8vIG9udG8gdGhlIG5leHQgbGluZSwgd2l0aCB3aGl0ZXNwYWNlIGF0IHRoZSBlbmQgb2YgdGhlIGxpbmUgYmVmb3JlICgjNykuXHJcbiAgLy8gVGhlICAqb25seSogcmVsaWFibGUgd2F5IHRvIGRvIHRoYXQgaXMgdG8gY29weSB0aGUgKmVudGlyZSogcmVzdCBvZiB0aGVcclxuICAvLyB0ZXh0YXJlYSdzIGNvbnRlbnQgaW50byB0aGUgPHNwYW4+IGNyZWF0ZWQgYXQgdGhlIGNhcmV0IHBvc2l0aW9uLlxyXG4gIC8vIEZvciBpbnB1dHMsIGp1c3QgJy4nIHdvdWxkIGJlIGVub3VnaCwgYnV0IG5vIG5lZWQgdG8gYm90aGVyLlxyXG4gIHNwYW4udGV4dENvbnRlbnQgPSBlbGVtZW50LnZhbHVlLnN1YnN0cmluZyhwb3NpdGlvbikgfHwgJy4nOyAvLyB8fCBiZWNhdXNlIGEgY29tcGxldGVseSBlbXB0eSBmYXV4IHNwYW4gZG9lc24ndCByZW5kZXIgYXQgYWxsXHJcbiAgZGl2LmFwcGVuZENoaWxkKHNwYW4pO1xyXG5cclxuICBjb25zdCBjb29yZGluYXRlcyA9IHtcclxuICAgIHRvcDogc3Bhbi5vZmZzZXRUb3AgKyBfcGFyc2VJbnQoY29tcHV0ZWQuYm9yZGVyVG9wV2lkdGgpLFxyXG4gICAgbGVmdDogc3Bhbi5vZmZzZXRMZWZ0ICsgX3BhcnNlSW50KGNvbXB1dGVkLmJvcmRlckxlZnRXaWR0aCksXHJcbiAgICBoZWlnaHQ6IF9wYXJzZUludChjb21wdXRlZC5saW5lSGVpZ2h0KVxyXG4gIH07XHJcblxyXG4gIGlmIChkZWJ1Zykge1xyXG4gICAgc3Bhbi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnI2VlZSc7XHJcbiAgICBjcmVhdGVEZWJ1Z0VsZShlbGVtZW50LCBjb29yZGluYXRlcyk7XHJcbiAgfSBlbHNlIHtcclxuICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoZGl2KTtcclxuICB9XHJcblxyXG4gIHJldHVybiBjb29yZGluYXRlcztcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZURlYnVnRWxlKGVsZW1lbnQ6IEhUTUxJbnB1dEVsZW1lbnQgfCBIVE1MVGV4dEFyZWFFbGVtZW50LCBjb29yZGluYXRlczogQ29vcmRpbmF0ZXMpOiB2b2lkIHtcclxuICBjb25zdCBmb250U2l6ZSA9IGdldENvbXB1dGVkU3R5bGUoZWxlbWVudCkuZ2V0UHJvcGVydHlWYWx1ZSgnZm9udC1zaXplJyk7XHJcbiAgY29uc3QgcmVjdDogSFRNTFNwYW5FbGVtZW50ID0gKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNERUJVRycpIGFzIEhUTUxTcGFuRWxlbWVudCkgfHwgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChyZWN0KTtcclxuICByZWN0LmlkID0gJ0RFQlVHJztcclxuICByZWN0LnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcclxuICByZWN0LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdyZWQnO1xyXG4gIHJlY3Quc3R5bGUuaGVpZ2h0ID0gZm9udFNpemU7XHJcbiAgcmVjdC5zdHlsZS53aWR0aCA9ICcxcHgnO1xyXG4gIHJlY3Quc3R5bGUudG9wID0gYCR7ZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3AgLVxyXG4gICAgZWxlbWVudC5zY3JvbGxUb3AgK1xyXG4gICAgd2luZG93LnBhZ2VZT2Zmc2V0ICtcclxuICAgIGNvb3JkaW5hdGVzLnRvcH1weGA7XHJcbiAgcmVjdC5zdHlsZS5sZWZ0ID0gYCR7ZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5sZWZ0IC1cclxuICAgIGVsZW1lbnQuc2Nyb2xsTGVmdCArXHJcbiAgICB3aW5kb3cucGFnZVhPZmZzZXQgK1xyXG4gICAgY29vcmRpbmF0ZXMubGVmdH1weGA7XHJcbiAgY29uc29sZS5sb2cocmVjdC5zdHlsZS50b3ApO1xyXG4gIGNvbnNvbGUubG9nKHJlY3Quc3R5bGUubGVmdCk7XHJcbn1cclxuIl19