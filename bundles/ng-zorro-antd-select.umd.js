(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/cdk/keycodes'), require('@angular/cdk/a11y'), require('@angular/cdk/platform'), require('rxjs'), require('rxjs/operators'), require('@angular/cdk/overlay'), require('@angular/common'), require('@angular/forms'), require('ng-zorro-antd/core'), require('ng-zorro-antd/empty'), require('ng-zorro-antd/i18n'), require('ng-zorro-antd/icon'), require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('ng-zorro-antd/select', ['exports', '@angular/cdk/keycodes', '@angular/cdk/a11y', '@angular/cdk/platform', 'rxjs', 'rxjs/operators', '@angular/cdk/overlay', '@angular/common', '@angular/forms', 'ng-zorro-antd/core', 'ng-zorro-antd/empty', 'ng-zorro-antd/i18n', 'ng-zorro-antd/icon', '@angular/core'], factory) :
    (factory((global['ng-zorro-antd'] = global['ng-zorro-antd'] || {}, global['ng-zorro-antd'].select = {}),global.ng.cdk.keycodes,global.ng.cdk.a11y,global.ng.cdk.platform,global.rxjs,global.rxjs.operators,global.ng.cdk.overlay,global.ng.common,global.ng.forms,global['ng-zorro-antd'].core,global['ng-zorro-antd'].empty,global['ng-zorro-antd'].i18n,global['ng-zorro-antd'].icon,global.ng.core));
}(this, (function (exports,keycodes,a11y,platform,rxjs,operators,overlay,common,forms,core,empty,i18n,icon,core$1) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
            r = Reflect.decorate(decorators, target, key, desc);
        else
            for (var i = decorators.length - 1; i >= 0; i--)
                if (d = decorators[i])
                    r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }
    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
            return Reflect.metadata(metadataKey, metadataValue);
    }
    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m)
            return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                ar.push(r.value);
        }
        catch (error) {
            e = { error: error };
        }
        finally {
            try {
                if (r && !r.done && (m = i["return"]))
                    m.call(i);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        return ar;
    }
    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NzOptionComponent = /** @class */ (function () {
        function NzOptionComponent() {
            this.changes = new rxjs.Subject();
            this.nzDisabled = false;
            this.nzCustomContent = false;
        }
        /**
         * @return {?}
         */
        NzOptionComponent.prototype.ngOnChanges = /**
         * @return {?}
         */
            function () {
                this.changes.next();
            };
        NzOptionComponent.decorators = [
            { type: core$1.Component, args: [{
                        selector: 'nz-option',
                        exportAs: 'nzOption',
                        encapsulation: core$1.ViewEncapsulation.None,
                        changeDetection: core$1.ChangeDetectionStrategy.OnPush,
                        template: "<ng-template>\r\n  <ng-content></ng-content>\r\n</ng-template>"
                    }] }
        ];
        NzOptionComponent.propDecorators = {
            template: [{ type: core$1.ViewChild, args: [core$1.TemplateRef,] }],
            nzLabel: [{ type: core$1.Input }],
            nzValue: [{ type: core$1.Input }],
            nzDisabled: [{ type: core$1.Input }],
            nzCustomContent: [{ type: core$1.Input }]
        };
        __decorate([
            core.InputBoolean(),
            __metadata("design:type", Object)
        ], NzOptionComponent.prototype, "nzDisabled", void 0);
        __decorate([
            core.InputBoolean(),
            __metadata("design:type", Object)
        ], NzOptionComponent.prototype, "nzCustomContent", void 0);
        return NzOptionComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NzOptionGroupComponent = /** @class */ (function () {
        function NzOptionGroupComponent() {
            this.isLabelString = false;
        }
        Object.defineProperty(NzOptionGroupComponent.prototype, "nzLabel", {
            get: /**
             * @return {?}
             */ function () {
                return this.label;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this.label = value;
                this.isLabelString = !(this.nzLabel instanceof core$1.TemplateRef);
            },
            enumerable: true,
            configurable: true
        });
        NzOptionGroupComponent.decorators = [
            { type: core$1.Component, args: [{
                        selector: 'nz-option-group',
                        exportAs: 'nzOptionGroup',
                        encapsulation: core$1.ViewEncapsulation.None,
                        changeDetection: core$1.ChangeDetectionStrategy.OnPush,
                        template: "<ng-content></ng-content>"
                    }] }
        ];
        NzOptionGroupComponent.propDecorators = {
            listOfNzOptionComponent: [{ type: core$1.ContentChildren, args: [NzOptionComponent,] }],
            nzLabel: [{ type: core$1.Input }]
        };
        return NzOptionGroupComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NzFilterOptionPipe = /** @class */ (function () {
        function NzFilterOptionPipe() {
        }
        /**
         * @param {?} options
         * @param {?} searchValue
         * @param {?} filterOption
         * @param {?} serverSearch
         * @return {?}
         */
        NzFilterOptionPipe.prototype.transform = /**
         * @param {?} options
         * @param {?} searchValue
         * @param {?} filterOption
         * @param {?} serverSearch
         * @return {?}
         */
            function (options, searchValue, filterOption, serverSearch) {
                if (serverSearch || !searchValue) {
                    return options;
                }
                else {
                    return (( /** @type {?} */(options))).filter(( /**
                     * @param {?} o
                     * @return {?}
                     */function (o) { return filterOption(searchValue, o); }));
                }
            };
        NzFilterOptionPipe.decorators = [
            { type: core$1.Pipe, args: [{ name: 'nzFilterOption' },] }
        ];
        return NzFilterOptionPipe;
    }());
    var NzFilterGroupOptionPipe = /** @class */ (function () {
        function NzFilterGroupOptionPipe() {
        }
        /**
         * @param {?} groups
         * @param {?} searchValue
         * @param {?} filterOption
         * @param {?} serverSearch
         * @return {?}
         */
        NzFilterGroupOptionPipe.prototype.transform = /**
         * @param {?} groups
         * @param {?} searchValue
         * @param {?} filterOption
         * @param {?} serverSearch
         * @return {?}
         */
            function (groups, searchValue, filterOption, serverSearch) {
                if (serverSearch || !searchValue) {
                    return groups;
                }
                else {
                    return (( /** @type {?} */(groups))).filter(( /**
                     * @param {?} g
                     * @return {?}
                     */function (g) {
                        return g.listOfNzOptionComponent.some(( /**
                         * @param {?} o
                         * @return {?}
                         */function (o) { return filterOption(searchValue, o); }));
                    }));
                }
            };
        NzFilterGroupOptionPipe.decorators = [
            { type: core$1.Pipe, args: [{ name: 'nzFilterGroupOption' },] }
        ];
        return NzFilterGroupOptionPipe;
    }());
    /**
     * @param {?} searchValue
     * @param {?} option
     * @return {?}
     */
    function defaultFilterOption(searchValue, option) {
        if (option && option.nzLabel) {
            return option.nzLabel.toLowerCase().indexOf(searchValue.toLowerCase()) > -1;
        }
        else {
            return false;
        }
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NzSelectService = /** @class */ (function () {
        function NzSelectService() {
            var _this = this;
            // Input params
            this.autoClearSearchValue = true;
            this.serverSearch = false;
            this.filterOption = defaultFilterOption;
            this.mode = 'default';
            this.maxMultipleCount = Infinity;
            this.disabled = false;
            // tslint:disable-next-line:no-any
            this.compareWith = ( /**
             * @param {?} o1
             * @param {?} o2
             * @return {?}
             */function (o1, o2) { return o1 === o2; });
            // selectedValueChanged should emit ngModelChange or not
            // tslint:disable-next-line:no-any
            this.listOfSelectedValueWithEmit$ = new rxjs.BehaviorSubject({
                value: [],
                emit: false
            });
            // ContentChildren Change
            this.mapOfTemplateOption$ = new rxjs.BehaviorSubject({
                listOfNzOptionComponent: [],
                listOfNzOptionGroupComponent: []
            });
            // searchValue Change
            this.searchValueRaw$ = new rxjs.BehaviorSubject('');
            this.listOfFilteredOption = [];
            this.openRaw$ = new rxjs.Subject();
            this.checkRaw$ = new rxjs.Subject();
            this.open = false;
            this.clearInput$ = new rxjs.Subject();
            this.searchValue = '';
            this.isShowNotFound = false;
            // open
            this.open$ = this.openRaw$.pipe(operators.distinctUntilChanged(), operators.share(), operators.tap(( /**
             * @return {?}
             */function () { return _this.clearInput(); })));
            this.activatedOption$ = new rxjs.ReplaySubject(1);
            this.listOfSelectedValue$ = this.listOfSelectedValueWithEmit$.pipe(operators.map(( /**
             * @param {?} data
             * @return {?}
             */function (data) { return data.value; })));
            this.modelChange$ = this.listOfSelectedValueWithEmit$.pipe(operators.filter(( /**
             * @param {?} item
             * @return {?}
             */function (item) { return item.emit; })), operators.map(( /**
             * @param {?} data
             * @return {?}
             */function (data) {
                /** @type {?} */
                var selectedList = data.value;
                /** @type {?} */
                var modelValue = null;
                if (_this.isSingleMode) {
                    if (selectedList.length) {
                        modelValue = selectedList[0];
                    }
                }
                else {
                    modelValue = selectedList;
                }
                return modelValue;
            })));
            this.searchValue$ = this.searchValueRaw$.pipe(operators.distinctUntilChanged(), operators.skip(1), operators.share(), operators.tap(( /**
             * @param {?} value
             * @return {?}
             */function (value) {
                _this.searchValue = value;
                if (value) {
                    _this.updateActivatedOption(_this.listOfFilteredOption[0]);
                }
                _this.updateListOfFilteredOption();
            })));
            // tslint:disable-next-line:no-any
            this.listOfSelectedValue = [];
            // flat ViewChildren
            this.listOfTemplateOption = [];
            // tag option
            this.listOfTagOption = [];
            // tag option concat template option
            this.listOfTagAndTemplateOption = [];
            // ViewChildren
            this.listOfNzOptionComponent = [];
            this.listOfNzOptionGroupComponent = [];
            // display in top control
            this.listOfCachedSelectedOption = [];
            // selected value or ViewChildren change
            this.valueOrOption$ = rxjs.combineLatest(this.listOfSelectedValue$, this.mapOfTemplateOption$).pipe(operators.tap(( /**
             * @param {?} data
             * @return {?}
             */function (data) {
                _this.listOfSelectedValue = data[0];
                _this.listOfNzOptionComponent = data[1].listOfNzOptionComponent;
                _this.listOfNzOptionGroupComponent = data[1].listOfNzOptionGroupComponent;
                _this.listOfTemplateOption = _this.listOfNzOptionComponent.concat(_this.listOfNzOptionGroupComponent.reduce(( /**
                 * @param {?} pre
                 * @param {?} cur
                 * @return {?}
                 */function (pre, cur) { return __spread(pre, cur.listOfNzOptionComponent.toArray()); }), ( /** @type {?} */([]))));
                _this.updateListOfTagOption();
                _this.updateListOfFilteredOption();
                _this.resetActivatedOptionIfNeeded();
                _this.updateListOfCachedOption();
            })), operators.share());
            this.check$ = rxjs.merge(this.checkRaw$, this.valueOrOption$, this.searchValue$, this.activatedOption$, this.open$, this.modelChange$).pipe(operators.share());
        }
        /**
         * @param {?} option
         * @return {?}
         */
        NzSelectService.prototype.clickOption = /**
         * @param {?} option
         * @return {?}
         */
            function (option) {
                var _this = this;
                /** update listOfSelectedOption -> update listOfSelectedValue -> next listOfSelectedValue$ **/
                if (!option.nzDisabled) {
                    this.updateActivatedOption(option);
                    /** @type {?} */
                    var listOfSelectedValue = __spread(this.listOfSelectedValue);
                    if (this.isMultipleOrTags) {
                        /** @type {?} */
                        var targetValue = listOfSelectedValue.find(( /**
                         * @param {?} o
                         * @return {?}
                         */function (o) { return _this.compareWith(o, option.nzValue); }));
                        if (core.isNotNil(targetValue)) {
                            listOfSelectedValue.splice(listOfSelectedValue.indexOf(targetValue), 1);
                            this.updateListOfSelectedValue(listOfSelectedValue, true);
                        }
                        else if (listOfSelectedValue.length < this.maxMultipleCount) {
                            listOfSelectedValue.push(option.nzValue);
                            this.updateListOfSelectedValue(listOfSelectedValue, true);
                        }
                    }
                    else if (!this.compareWith(listOfSelectedValue[0], option.nzValue)) {
                        listOfSelectedValue = [option.nzValue];
                        this.updateListOfSelectedValue(listOfSelectedValue, true);
                    }
                    if (this.isSingleMode) {
                        this.setOpenState(false);
                    }
                    else if (this.autoClearSearchValue) {
                        this.clearInput();
                    }
                }
            };
        /**
         * @return {?}
         */
        NzSelectService.prototype.updateListOfCachedOption = /**
         * @return {?}
         */
            function () {
                var _this = this;
                if (this.isSingleMode) {
                    /** @type {?} */
                    var selectedOption = this.listOfTemplateOption.find(( /**
                     * @param {?} o
                     * @return {?}
                     */function (o) {
                        return _this.compareWith(o.nzValue, _this.listOfSelectedValue[0]);
                    }));
                    if (!core.isNil(selectedOption)) {
                        this.listOfCachedSelectedOption = [selectedOption];
                    }
                }
                else {
                    /** @type {?} */
                    var listOfCachedSelectedOption_1 = [];
                    this.listOfSelectedValue.forEach(( /**
                     * @param {?} v
                     * @return {?}
                     */function (v) {
                        /** @type {?} */
                        var listOfMixedOption = __spread(_this.listOfTagAndTemplateOption, _this.listOfCachedSelectedOption);
                        /** @type {?} */
                        var option = listOfMixedOption.find(( /**
                         * @param {?} o
                         * @return {?}
                         */function (o) { return _this.compareWith(o.nzValue, v); }));
                        if (option) {
                            listOfCachedSelectedOption_1.push(option);
                        }
                    }));
                    this.listOfCachedSelectedOption = listOfCachedSelectedOption_1;
                }
            };
        /**
         * @return {?}
         */
        NzSelectService.prototype.updateListOfTagOption = /**
         * @return {?}
         */
            function () {
                var _this = this;
                if (this.isTagsMode) {
                    // https://github.com/NG-ZORRO/ng-zorro-antd/issues/3424
                    this.listOfTagOption = __spread(this.listOfCachedSelectedOption, this.listOfSelectedValue).reduce(( /**
                     * @param {?} options
                     * @param {?} componentOrValue
                     * @return {?}
                     */function (options, componentOrValue) {
                        if (typeof componentOrValue === 'string' &&
                            !_this.listOfTemplateOption.find(( /**
                             * @param {?} o
                             * @return {?}
                             */function (o) { return _this.compareWith(o.nzValue, componentOrValue); }))) {
                            /** @type {?} */
                            var nzOptionComponent = new NzOptionComponent();
                            nzOptionComponent.nzValue = componentOrValue;
                            nzOptionComponent.nzLabel = componentOrValue;
                            options.push(nzOptionComponent);
                        }
                        else if (componentOrValue.nzValue &&
                            !_this.listOfTemplateOption.find(( /**
                             * @param {?} o
                             * @return {?}
                             */function (o) { return _this.compareWith(o.nzValue, componentOrValue.nzValue); }))) {
                            options.push(componentOrValue);
                        }
                        return options;
                    }), []);
                    this.listOfTagAndTemplateOption = __spread(this.listOfTemplateOption.concat(this.listOfTagOption));
                }
                else {
                    this.listOfTagAndTemplateOption = __spread(this.listOfTemplateOption);
                }
            };
        /**
         * @return {?}
         */
        NzSelectService.prototype.updateAddTagOption = /**
         * @return {?}
         */
            function () {
                var _this = this;
                /** @type {?} */
                var isMatch = this.listOfTagAndTemplateOption.find(( /**
                 * @param {?} item
                 * @return {?}
                 */function (item) { return item.nzLabel === _this.searchValue; }));
                if (this.isTagsMode && this.searchValue && !isMatch) {
                    /** @type {?} */
                    var option = new NzOptionComponent();
                    option.nzValue = this.searchValue;
                    option.nzLabel = this.searchValue;
                    this.addedTagOption = option;
                    this.updateActivatedOption(option);
                }
                else {
                    this.addedTagOption = null;
                }
            };
        /**
         * @return {?}
         */
        NzSelectService.prototype.updateListOfFilteredOption = /**
         * @return {?}
         */
            function () {
                this.updateAddTagOption();
                /** @type {?} */
                var listOfFilteredOption = new NzFilterOptionPipe().transform(this.listOfTagAndTemplateOption, this.searchValue, this.filterOption, this.serverSearch);
                this.listOfFilteredOption = this.addedTagOption
                    ? __spread([this.addedTagOption], listOfFilteredOption) : __spread(listOfFilteredOption);
                this.isShowNotFound = !this.isTagsMode && !this.listOfFilteredOption.length;
            };
        /**
         * @return {?}
         */
        NzSelectService.prototype.clearInput = /**
         * @return {?}
         */
            function () {
                this.clearInput$.next();
            };
        // tslint:disable-next-line:no-any
        // tslint:disable-next-line:no-any
        /**
         * @param {?} value
         * @param {?} emit
         * @return {?}
         */
        NzSelectService.prototype.updateListOfSelectedValue =
            // tslint:disable-next-line:no-any
            /**
             * @param {?} value
             * @param {?} emit
             * @return {?}
             */
            function (value, emit) {
                this.listOfSelectedValueWithEmit$.next({ value: value, emit: emit });
            };
        /**
         * @param {?} option
         * @return {?}
         */
        NzSelectService.prototype.updateActivatedOption = /**
         * @param {?} option
         * @return {?}
         */
            function (option) {
                this.activatedOption$.next(option);
                this.activatedOption = option;
            };
        /**
         * @param {?} inputValue
         * @param {?} tokenSeparators
         * @return {?}
         */
        NzSelectService.prototype.tokenSeparate = /**
         * @param {?} inputValue
         * @param {?} tokenSeparators
         * @return {?}
         */
            function (inputValue, tokenSeparators) {
                // auto tokenSeparators
                if (inputValue &&
                    inputValue.length &&
                    tokenSeparators.length &&
                    this.isMultipleOrTags &&
                    this.includesSeparators(inputValue, tokenSeparators)) {
                    /** @type {?} */
                    var listOfLabel = this.splitBySeparators(inputValue, tokenSeparators);
                    this.updateSelectedValueByLabelList(listOfLabel);
                    this.clearInput();
                }
            };
        /**
         * @param {?} str
         * @param {?} separators
         * @return {?}
         */
        NzSelectService.prototype.includesSeparators = /**
         * @param {?} str
         * @param {?} separators
         * @return {?}
         */
            function (str, separators) {
                // tslint:disable-next-line:prefer-for-of
                for (var i = 0; i < separators.length; ++i) {
                    if (str.lastIndexOf(separators[i]) > 0) {
                        return true;
                    }
                }
                return false;
            };
        /**
         * @param {?} str
         * @param {?} separators
         * @return {?}
         */
        NzSelectService.prototype.splitBySeparators = /**
         * @param {?} str
         * @param {?} separators
         * @return {?}
         */
            function (str, separators) {
                /** @type {?} */
                var reg = new RegExp("[" + separators.join() + "]");
                /** @type {?} */
                var array = (( /** @type {?} */(str))).split(reg).filter(( /**
                 * @param {?} token
                 * @return {?}
                 */function (token) { return token; }));
                return Array.from(new Set(array));
            };
        /**
         * @return {?}
         */
        NzSelectService.prototype.resetActivatedOptionIfNeeded = /**
         * @return {?}
         */
            function () {
                var _this = this;
                /** @type {?} */
                var resetActivatedOption = ( /**
                 * @return {?}
                 */function () {
                    /** @type {?} */
                    var activatedOption = _this.listOfFilteredOption.find(( /**
                     * @param {?} item
                     * @return {?}
                     */function (item) {
                        return _this.compareWith(item.nzValue, _this.listOfSelectedValue[0]);
                    }));
                    _this.updateActivatedOption(activatedOption || null);
                });
                if (this.activatedOption) {
                    if (!this.listOfFilteredOption.find(( /**
                     * @param {?} item
                     * @return {?}
                     */function (item) { return _this.compareWith(item.nzValue, ( /** @type {?} */(_this.activatedOption)).nzValue); })) ||
                        !this.listOfSelectedValue.find(( /**
                         * @param {?} item
                         * @return {?}
                         */function (item) { return _this.compareWith(item, ( /** @type {?} */(_this.activatedOption)).nzValue); }))) {
                        resetActivatedOption();
                    }
                }
                else {
                    resetActivatedOption();
                }
            };
        /**
         * @param {?} listOfNzOptionComponent
         * @param {?} listOfNzOptionGroupComponent
         * @return {?}
         */
        NzSelectService.prototype.updateTemplateOption = /**
         * @param {?} listOfNzOptionComponent
         * @param {?} listOfNzOptionGroupComponent
         * @return {?}
         */
            function (listOfNzOptionComponent, listOfNzOptionGroupComponent) {
                this.mapOfTemplateOption$.next({ listOfNzOptionComponent: listOfNzOptionComponent, listOfNzOptionGroupComponent: listOfNzOptionGroupComponent });
            };
        /**
         * @param {?} value
         * @return {?}
         */
        NzSelectService.prototype.updateSearchValue = /**
         * @param {?} value
         * @return {?}
         */
            function (value) {
                this.searchValueRaw$.next(value);
            };
        /**
         * @param {?} listOfLabel
         * @return {?}
         */
        NzSelectService.prototype.updateSelectedValueByLabelList = /**
         * @param {?} listOfLabel
         * @return {?}
         */
            function (listOfLabel) {
                var _this = this;
                /** @type {?} */
                var listOfSelectedValue = __spread(this.listOfSelectedValue);
                /** @type {?} */
                var listOfMatchOptionValue = this.listOfTagAndTemplateOption
                    .filter(( /**
             * @param {?} item
             * @return {?}
             */function (item) { return listOfLabel.indexOf(item.nzLabel) !== -1; }))
                    .map(( /**
             * @param {?} item
             * @return {?}
             */function (item) { return item.nzValue; }))
                    .filter(( /**
             * @param {?} item
             * @return {?}
             */function (item) {
                    return !core.isNotNil(_this.listOfSelectedValue.find(( /**
                     * @param {?} v
                     * @return {?}
                     */function (v) { return _this.compareWith(v, item); })));
                }));
                if (this.isMultipleMode) {
                    this.updateListOfSelectedValue(__spread(listOfSelectedValue, listOfMatchOptionValue), true);
                }
                else {
                    /** @type {?} */
                    var listOfUnMatchOptionValue = listOfLabel.filter(( /**
                     * @param {?} label
                     * @return {?}
                     */function (label) {
                        return _this.listOfTagAndTemplateOption.map(( /**
                         * @param {?} item
                         * @return {?}
                         */function (item) { return item.nzLabel; })).indexOf(label) === -1;
                    }));
                    this.updateListOfSelectedValue(__spread(listOfSelectedValue, listOfMatchOptionValue, listOfUnMatchOptionValue), true);
                }
            };
        /**
         * @param {?} e
         * @return {?}
         */
        NzSelectService.prototype.onKeyDown = /**
         * @param {?} e
         * @return {?}
         */
            function (e) {
                var _this = this;
                /** @type {?} */
                var keyCode = e.keyCode;
                /** @type {?} */
                var eventTarget = ( /** @type {?} */(e.target));
                /** @type {?} */
                var listOfFilteredOptionWithoutDisabled = this.listOfFilteredOption.filter(( /**
                 * @param {?} item
                 * @return {?}
                 */function (item) { return !item.nzDisabled; }));
                /** @type {?} */
                var activatedIndex = listOfFilteredOptionWithoutDisabled.findIndex(( /**
                 * @param {?} item
                 * @return {?}
                 */function (item) { return item === _this.activatedOption; }));
                switch (keyCode) {
                    case keycodes.UP_ARROW:
                        e.preventDefault();
                        /** @type {?} */
                        var preIndex = activatedIndex > 0 ? activatedIndex - 1 : listOfFilteredOptionWithoutDisabled.length - 1;
                        this.updateActivatedOption(listOfFilteredOptionWithoutDisabled[preIndex]);
                        break;
                    case keycodes.DOWN_ARROW:
                        e.preventDefault();
                        /** @type {?} */
                        var nextIndex = activatedIndex < listOfFilteredOptionWithoutDisabled.length - 1 ? activatedIndex + 1 : 0;
                        this.updateActivatedOption(listOfFilteredOptionWithoutDisabled[nextIndex]);
                        if (!this.disabled && !this.open) {
                            this.setOpenState(true);
                        }
                        break;
                    case keycodes.ENTER:
                        e.preventDefault();
                        if (this.open) {
                            if (this.activatedOption && !this.activatedOption.nzDisabled) {
                                this.clickOption(this.activatedOption);
                            }
                        }
                        else {
                            this.setOpenState(true);
                        }
                        break;
                    case keycodes.BACKSPACE:
                        if (this.isMultipleOrTags && !eventTarget.value && this.listOfCachedSelectedOption.length) {
                            e.preventDefault();
                            this.removeValueFormSelected(this.listOfCachedSelectedOption[this.listOfCachedSelectedOption.length - 1]);
                        }
                        break;
                    case keycodes.SPACE:
                        if (!this.disabled && !this.open) {
                            this.setOpenState(true);
                            e.preventDefault();
                        }
                        break;
                    case keycodes.TAB:
                        this.setOpenState(false);
                        break;
                }
            };
        // tslint:disable-next-line:no-any
        // tslint:disable-next-line:no-any
        /**
         * @param {?} option
         * @return {?}
         */
        NzSelectService.prototype.removeValueFormSelected =
            // tslint:disable-next-line:no-any
            /**
             * @param {?} option
             * @return {?}
             */
            function (option) {
                var _this = this;
                if (this.disabled || option.nzDisabled) {
                    return;
                }
                /** @type {?} */
                var listOfSelectedValue = this.listOfSelectedValue.filter(( /**
                 * @param {?} item
                 * @return {?}
                 */function (item) { return !_this.compareWith(item, option.nzValue); }));
                this.updateListOfSelectedValue(listOfSelectedValue, true);
                this.clearInput();
            };
        /**
         * @param {?} value
         * @return {?}
         */
        NzSelectService.prototype.setOpenState = /**
         * @param {?} value
         * @return {?}
         */
            function (value) {
                this.openRaw$.next(value);
                this.open = value;
            };
        /**
         * @return {?}
         */
        NzSelectService.prototype.check = /**
         * @return {?}
         */
            function () {
                this.checkRaw$.next();
            };
        Object.defineProperty(NzSelectService.prototype, "isSingleMode", {
            get: /**
             * @return {?}
             */ function () {
                return this.mode === 'default';
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NzSelectService.prototype, "isTagsMode", {
            get: /**
             * @return {?}
             */ function () {
                return this.mode === 'tags';
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NzSelectService.prototype, "isMultipleMode", {
            get: /**
             * @return {?}
             */ function () {
                return this.mode === 'multiple';
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NzSelectService.prototype, "isMultipleOrTags", {
            get: /**
             * @return {?}
             */ function () {
                return this.mode === 'tags' || this.mode === 'multiple';
            },
            enumerable: true,
            configurable: true
        });
        NzSelectService.decorators = [
            { type: core$1.Injectable }
        ];
        return NzSelectService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NzOptionLiComponent = /** @class */ (function () {
        function NzOptionLiComponent(elementRef, nzSelectService, cdr, renderer) {
            this.elementRef = elementRef;
            this.nzSelectService = nzSelectService;
            this.cdr = cdr;
            this.el = this.elementRef.nativeElement;
            this.selected = false;
            this.active = false;
            this.destroy$ = new rxjs.Subject();
            renderer.addClass(elementRef.nativeElement, 'ant-select-dropdown-menu-item');
        }
        /**
         * @return {?}
         */
        NzOptionLiComponent.prototype.clickOption = /**
         * @return {?}
         */
            function () {
                this.nzSelectService.clickOption(this.nzOption);
            };
        /**
         * @return {?}
         */
        NzOptionLiComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                var _this = this;
                this.nzSelectService.listOfSelectedValue$.pipe(operators.takeUntil(this.destroy$)).subscribe(( /**
                 * @param {?} list
                 * @return {?}
                 */function (list) {
                    _this.selected = core.isNotNil(list.find(( /**
                     * @param {?} v
                     * @return {?}
                     */function (v) { return _this.nzSelectService.compareWith(v, _this.nzOption.nzValue); })));
                    _this.cdr.markForCheck();
                }));
                this.nzSelectService.activatedOption$.pipe(operators.takeUntil(this.destroy$)).subscribe(( /**
                 * @param {?} option
                 * @return {?}
                 */function (option) {
                    if (option) {
                        _this.active = _this.nzSelectService.compareWith(option.nzValue, _this.nzOption.nzValue);
                    }
                    else {
                        _this.active = false;
                    }
                    _this.cdr.markForCheck();
                }));
            };
        /**
         * @return {?}
         */
        NzOptionLiComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
            function () {
                this.destroy$.next();
                this.destroy$.complete();
            };
        NzOptionLiComponent.decorators = [
            { type: core$1.Component, args: [{
                        selector: '[nz-option-li]',
                        exportAs: 'nzOptionLi',
                        template: "<ng-container *ngIf=\"!nzOption.nzCustomContent; else nzOption.template\">\r\n  {{nzOption.nzLabel}}\r\n</ng-container>\r\n<ng-container *ngIf=\"nzSelectService.isMultipleOrTags\">\r\n  <i nz-icon type=\"check\" class=\"ant-select-selected-icon\" *ngIf=\"!nzMenuItemSelectedIcon; else nzMenuItemSelectedIcon\"></i>\r\n</ng-container>\r\n",
                        changeDetection: core$1.ChangeDetectionStrategy.OnPush,
                        encapsulation: core$1.ViewEncapsulation.None,
                        host: {
                            '[class.ant-select-dropdown-menu-item-selected]': 'selected && !nzOption.nzDisabled',
                            '[class.ant-select-dropdown-menu-item-disabled]': 'nzOption.nzDisabled',
                            '[class.ant-select-dropdown-menu-item-active]': 'active && !nzOption.nzDisabled',
                            '[attr.unselectable]': '"unselectable"',
                            '[style.user-select]': '"none"',
                            '(click)': 'clickOption()',
                            '(mousedown)': '$event.preventDefault()'
                        }
                    }] }
        ];
        /** @nocollapse */
        NzOptionLiComponent.ctorParameters = function () {
            return [
                { type: core$1.ElementRef },
                { type: NzSelectService },
                { type: core$1.ChangeDetectorRef },
                { type: core$1.Renderer2 }
            ];
        };
        NzOptionLiComponent.propDecorators = {
            nzOption: [{ type: core$1.Input }],
            nzMenuItemSelectedIcon: [{ type: core$1.Input }]
        };
        return NzOptionLiComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NzOptionContainerComponent = /** @class */ (function () {
        function NzOptionContainerComponent(nzSelectService, cdr, ngZone) {
            this.nzSelectService = nzSelectService;
            this.cdr = cdr;
            this.ngZone = ngZone;
            this.destroy$ = new rxjs.Subject();
            this.lastScrollTop = 0;
            this.nzScrollToBottom = new core$1.EventEmitter();
        }
        /**
         * @param {?} option
         * @return {?}
         */
        NzOptionContainerComponent.prototype.scrollIntoViewIfNeeded = /**
         * @param {?} option
         * @return {?}
         */
            function (option) {
                var _this = this;
                // delay after open
                setTimeout(( /**
                 * @return {?}
                 */function () {
                    if (_this.listOfNzOptionLiComponent && _this.listOfNzOptionLiComponent.length && option) {
                        /** @type {?} */
                        var targetOption = _this.listOfNzOptionLiComponent.find(( /**
                         * @param {?} o
                         * @return {?}
                         */function (o) {
                            return _this.nzSelectService.compareWith(o.nzOption.nzValue, option.nzValue);
                        }));
                        /* tslint:disable:no-any */
                        if (targetOption && targetOption.el && (( /** @type {?} */(targetOption.el))).scrollIntoViewIfNeeded) {
                            (( /** @type {?} */(targetOption.el))).scrollIntoViewIfNeeded(false);
                        }
                        /* tslint:enable:no-any */
                    }
                }));
            };
        /**
         * @param {?} _index
         * @param {?} option
         * @return {?}
         */
        NzOptionContainerComponent.prototype.trackLabel = /**
         * @param {?} _index
         * @param {?} option
         * @return {?}
         */
            function (_index, option) {
                return option.nzLabel;
            };
        // tslint:disable-next-line:no-any
        // tslint:disable-next-line:no-any
        /**
         * @param {?} _index
         * @param {?} option
         * @return {?}
         */
        NzOptionContainerComponent.prototype.trackValue =
            // tslint:disable-next-line:no-any
            /**
             * @param {?} _index
             * @param {?} option
             * @return {?}
             */
            function (_index, option) {
                return option.nzValue;
            };
        /**
         * @return {?}
         */
        NzOptionContainerComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                var _this = this;
                this.nzSelectService.activatedOption$.pipe(operators.takeUntil(this.destroy$)).subscribe(( /**
                 * @param {?} option
                 * @return {?}
                 */function (option) {
                    _this.scrollIntoViewIfNeeded(( /** @type {?} */(option)));
                }));
                this.nzSelectService.check$.pipe(operators.takeUntil(this.destroy$)).subscribe(( /**
                 * @return {?}
                 */function () {
                    _this.cdr.markForCheck();
                }));
                this.ngZone.runOutsideAngular(( /**
                 * @return {?}
                 */function () {
                    /** @type {?} */
                    var ul = _this.dropdownUl.nativeElement;
                    rxjs.fromEvent(ul, 'scroll')
                        .pipe(operators.takeUntil(_this.destroy$))
                        .subscribe(( /**
                 * @param {?} e
                 * @return {?}
                 */function (e) {
                        e.preventDefault();
                        e.stopPropagation();
                        if (ul && ul.scrollTop > _this.lastScrollTop && ul.scrollHeight < ul.clientHeight + ul.scrollTop + 10) {
                            _this.lastScrollTop = ul.scrollTop;
                            _this.ngZone.run(( /**
                             * @return {?}
                             */function () {
                                _this.nzScrollToBottom.emit();
                            }));
                        }
                    }));
                }));
            };
        /**
         * @return {?}
         */
        NzOptionContainerComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
            function () {
                this.destroy$.next();
                this.destroy$.complete();
            };
        NzOptionContainerComponent.decorators = [
            { type: core$1.Component, args: [{
                        selector: '[nz-option-container]',
                        exportAs: 'nzOptionContainer',
                        changeDetection: core$1.ChangeDetectionStrategy.OnPush,
                        encapsulation: core$1.ViewEncapsulation.None,
                        preserveWhitespaces: false,
                        template: "<ul #dropdownUl\r\n  class=\"ant-select-dropdown-menu ant-select-dropdown-menu-root ant-select-dropdown-menu-vertical\"\r\n  role=\"menu\"\r\n  tabindex=\"0\">\r\n  <li *ngIf=\"nzSelectService.isShowNotFound\"\r\n    nz-select-unselectable\r\n    class=\"ant-select-dropdown-menu-item ant-select-dropdown-menu-item-disabled\">\r\n    <nz-embed-empty [nzComponentName]=\"'select'\" [specificContent]=\"nzNotFoundContent\"></nz-embed-empty>\r\n  </li>\r\n  <li nz-option-li\r\n    *ngIf=\"nzSelectService.addedTagOption\"\r\n    [nzMenuItemSelectedIcon]=\"nzMenuItemSelectedIcon\"\r\n    [nzOption]=\"nzSelectService.addedTagOption\">\r\n  </li>\r\n  <li nz-option-li\r\n    *ngFor=\"let option of nzSelectService.listOfNzOptionComponent | nzFilterOption : nzSelectService.searchValue : nzSelectService.filterOption : nzSelectService.serverSearch; trackBy: trackValue\"\r\n    [nzMenuItemSelectedIcon]=\"nzMenuItemSelectedIcon\"\r\n    [nzOption]=\"option\">\r\n  </li>\r\n  <li class=\"ant-select-dropdown-menu-item-group\"\r\n    *ngFor=\"let group of nzSelectService.listOfNzOptionGroupComponent | nzFilterGroupOption : nzSelectService.searchValue : nzSelectService.filterOption :nzSelectService.serverSearch; trackBy: trackLabel\">\r\n    <div class=\"ant-select-dropdown-menu-item-group-title\"\r\n      [attr.title]=\"group.isLabelString ? group.nzLabel : ''\">\r\n      <ng-container *nzStringTemplateOutlet=\"group.nzLabel\"> {{group.nzLabel}} </ng-container>\r\n    </div>\r\n    <ul class=\"ant-select-dropdown-menu-item-group-list\">\r\n      <li nz-option-li\r\n        *ngFor=\"let option of group.listOfNzOptionComponent | nzFilterOption : nzSelectService.searchValue : nzSelectService.filterOption :nzSelectService.serverSearch; trackBy: trackValue\"\r\n        [nzMenuItemSelectedIcon]=\"nzMenuItemSelectedIcon\"\r\n        [nzOption]=\"option\">\r\n      </li>\r\n    </ul>\r\n  </li>\r\n  <li nz-option-li\r\n    *ngFor=\"let option of nzSelectService.listOfTagOption | nzFilterOption : nzSelectService.searchValue : nzSelectService.filterOption : nzSelectService.serverSearch; trackBy: trackValue \"\r\n    [nzMenuItemSelectedIcon]=\"nzMenuItemSelectedIcon\"\r\n    [nzOption]=\"option\">\r\n  </li>\r\n</ul>\r\n"
                    }] }
        ];
        /** @nocollapse */
        NzOptionContainerComponent.ctorParameters = function () {
            return [
                { type: NzSelectService },
                { type: core$1.ChangeDetectorRef },
                { type: core$1.NgZone }
            ];
        };
        NzOptionContainerComponent.propDecorators = {
            listOfNzOptionLiComponent: [{ type: core$1.ViewChildren, args: [NzOptionLiComponent,] }],
            dropdownUl: [{ type: core$1.ViewChild, args: ['dropdownUl',] }],
            nzNotFoundContent: [{ type: core$1.Input }],
            nzMenuItemSelectedIcon: [{ type: core$1.Input }],
            nzScrollToBottom: [{ type: core$1.Output }]
        };
        return NzOptionContainerComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NzSelectTopControlComponent = /** @class */ (function () {
        function NzSelectTopControlComponent(renderer, nzSelectService, cdr, noAnimation) {
            this.renderer = renderer;
            this.nzSelectService = nzSelectService;
            this.cdr = cdr;
            this.noAnimation = noAnimation;
            this.isComposing = false;
            this.destroy$ = new rxjs.Subject();
            this.nzShowSearch = false;
            this.nzOpen = false;
            this.nzAllowClear = false;
            this.nzShowArrow = true;
            this.nzLoading = false;
            this.nzTokenSeparators = [];
        }
        /**
         * @param {?} e
         * @return {?}
         */
        NzSelectTopControlComponent.prototype.onClearSelection = /**
         * @param {?} e
         * @return {?}
         */
            function (e) {
                e.stopPropagation();
                this.nzSelectService.updateListOfSelectedValue([], true);
            };
        /**
         * @param {?} value
         * @return {?}
         */
        NzSelectTopControlComponent.prototype.setInputValue = /**
         * @param {?} value
         * @return {?}
         */
            function (value) {
                if (this.inputElement) {
                    this.inputElement.nativeElement.value = value;
                }
                this.inputValue = value;
                this.updateWidth();
                this.nzSelectService.updateSearchValue(value);
                this.nzSelectService.tokenSeparate(this.inputValue, this.nzTokenSeparators);
            };
        Object.defineProperty(NzSelectTopControlComponent.prototype, "placeHolderDisplay", {
            get: /**
             * @return {?}
             */ function () {
                return this.inputValue || this.isComposing || this.nzSelectService.listOfSelectedValue.length ? 'none' : 'block';
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NzSelectTopControlComponent.prototype, "selectedValueStyle", {
            get: /**
             * @return {?}
             */ function () {
                /** @type {?} */
                var showSelectedValue = false;
                /** @type {?} */
                var opacity = 1;
                if (!this.nzShowSearch) {
                    showSelectedValue = true;
                }
                else {
                    if (this.nzOpen) {
                        showSelectedValue = !(this.inputValue || this.isComposing);
                        if (showSelectedValue) {
                            opacity = 0.4;
                        }
                    }
                    else {
                        showSelectedValue = true;
                    }
                }
                return {
                    display: showSelectedValue ? 'block' : 'none',
                    opacity: "" + opacity
                };
            },
            enumerable: true,
            configurable: true
        });
        // tslint:disable-next-line:no-any
        // tslint:disable-next-line:no-any
        /**
         * @param {?} _index
         * @param {?} option
         * @return {?}
         */
        NzSelectTopControlComponent.prototype.trackValue =
            // tslint:disable-next-line:no-any
            /**
             * @param {?} _index
             * @param {?} option
             * @return {?}
             */
            function (_index, option) {
                return option.nzValue;
            };
        /**
         * @return {?}
         */
        NzSelectTopControlComponent.prototype.updateWidth = /**
         * @return {?}
         */
            function () {
                if (this.nzSelectService.isMultipleOrTags && this.inputElement) {
                    if (this.inputValue || this.isComposing) {
                        this.renderer.setStyle(this.inputElement.nativeElement, 'width', this.inputElement.nativeElement.scrollWidth + "px");
                    }
                    else {
                        this.renderer.removeStyle(this.inputElement.nativeElement, 'width');
                    }
                }
            };
        /**
         * @param {?} option
         * @param {?} e
         * @return {?}
         */
        NzSelectTopControlComponent.prototype.removeSelectedValue = /**
         * @param {?} option
         * @param {?} e
         * @return {?}
         */
            function (option, e) {
                this.nzSelectService.removeValueFormSelected(option);
                e.stopPropagation();
            };
        /**
         * @return {?}
         */
        NzSelectTopControlComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                var _this = this;
                this.nzSelectService.open$.pipe(operators.takeUntil(this.destroy$)).subscribe(( /**
                 * @param {?} open
                 * @return {?}
                 */function (open) {
                    if (_this.inputElement && open) {
                        setTimeout(( /**
                         * @return {?}
                         */function () { return _this.inputElement.nativeElement.focus(); }));
                    }
                }));
                this.nzSelectService.clearInput$.pipe(operators.takeUntil(this.destroy$)).subscribe(( /**
                 * @return {?}
                 */function () {
                    _this.setInputValue('');
                }));
                this.nzSelectService.check$.pipe(operators.takeUntil(this.destroy$)).subscribe(( /**
                 * @return {?}
                 */function () {
                    _this.cdr.markForCheck();
                }));
            };
        /**
         * @return {?}
         */
        NzSelectTopControlComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
            function () {
                this.destroy$.next();
                this.destroy$.complete();
            };
        NzSelectTopControlComponent.decorators = [
            { type: core$1.Component, args: [{
                        selector: '[nz-select-top-control]',
                        exportAs: 'nzSelectTopControl',
                        preserveWhitespaces: false,
                        animations: [core.zoomMotion],
                        changeDetection: core$1.ChangeDetectionStrategy.OnPush,
                        encapsulation: core$1.ViewEncapsulation.None,
                        template: "<ng-template #inputTemplate>\r\n  <input #inputElement\r\n    autocomplete=\"something-new\"\r\n    class=\"ant-select-search__field\"\r\n    (compositionstart)=\"isComposing = true\"\r\n    (compositionend)=\"isComposing = false\"\r\n    (input)=\"updateWidth()\"\r\n    [ngModel]=\"inputValue\"\r\n    (ngModelChange)=\"setInputValue($event)\"\r\n    [disabled]=\"nzSelectService.disabled\">\r\n</ng-template>\r\n<div class=\"ant-select-selection__rendered\">\r\n  <div *ngIf=\"nzPlaceHolder\"\r\n    nz-select-unselectable\r\n    [style.display]=\"placeHolderDisplay\"\r\n    class=\"ant-select-selection__placeholder\">{{ nzPlaceHolder }}</div>\r\n  <!--single mode-->\r\n  <ng-container *ngIf=\"nzSelectService.isSingleMode\">\r\n    <!--selected label-->\r\n    <div *ngIf=\"nzSelectService.listOfCachedSelectedOption.length && nzSelectService.listOfSelectedValue.length\"\r\n      class=\"ant-select-selection-selected-value\"\r\n      [attr.title]=\"nzSelectService.listOfCachedSelectedOption[0]?.nzLabel\"\r\n      [ngStyle]=\"selectedValueStyle\">\r\n      {{ nzSelectService.listOfCachedSelectedOption[0]?.nzLabel }}\r\n    </div>\r\n    <!--show search-->\r\n    <div *ngIf=\"nzShowSearch\"\r\n      class=\"ant-select-search ant-select-search--inline\" [style.display]=\"nzOpen ? 'block' : 'none'\">\r\n      <div class=\"ant-select-search__field__wrap\">\r\n        <ng-template [ngTemplateOutlet]=\"inputTemplate\"></ng-template>\r\n        <span class=\"ant-select-search__field__mirror\">{{inputValue}}&nbsp;</span>\r\n      </div>\r\n    </div>\r\n  </ng-container>\r\n  <!--multiple or tags mode-->\r\n  <ul *ngIf=\"nzSelectService.isMultipleOrTags\">\r\n    <ng-container *ngFor=\"let option of nzSelectService.listOfCachedSelectedOption | slice: 0 : nzMaxTagCount;trackBy:trackValue;\">\r\n      <li [@zoomMotion]\r\n        [nzNoAnimation]=\"noAnimation?.nzNoAnimation\"\r\n        [attr.title]=\"option.nzLabel\"\r\n        [class.ant-select-selection__choice__disabled]=\"option.nzDisabled\"\r\n        class=\"ant-select-selection__choice\">\r\n        <div class=\"ant-select-selection__choice__content\">{{ option.nzLabel }}</div>\r\n        <span *ngIf=\"!option.nzDisabled\"\r\n          class=\"ant-select-selection__choice__remove\"\r\n          (mousedown)=\"$event.preventDefault()\"\r\n          (click)=\"removeSelectedValue(option, $event)\">\r\n          <i nz-icon type=\"close\" class=\"ant-select-remove-icon\" *ngIf=\"!nzRemoveIcon; else nzRemoveIcon\"></i>\r\n        </span>\r\n      </li>\r\n    </ng-container>\r\n    <li *ngIf=\"nzSelectService.listOfCachedSelectedOption.length > nzMaxTagCount\"\r\n      [@zoomMotion]\r\n      [nzNoAnimation]=\"noAnimation?.nzNoAnimation\"\r\n      class=\"ant-select-selection__choice\">\r\n      <div class=\"ant-select-selection__choice__content\">\r\n        <ng-container *ngIf=\"nzMaxTagPlaceholder\">\r\n          <ng-template\r\n            [ngTemplateOutlet]=\"nzMaxTagPlaceholder\"\r\n            [ngTemplateOutletContext]=\"{ $implicit: nzSelectService.listOfSelectedValue | slice: nzMaxTagCount}\">\r\n          </ng-template>\r\n        </ng-container>\r\n        <ng-container *ngIf=\"!nzMaxTagPlaceholder\">\r\n          + {{ nzSelectService.listOfCachedSelectedOption.length - nzMaxTagCount }} ...\r\n        </ng-container>\r\n      </div>\r\n    </li>\r\n    <li class=\"ant-select-search ant-select-search--inline\">\r\n      <ng-template [ngTemplateOutlet]=\"inputTemplate\"></ng-template>\r\n    </li>\r\n  </ul>\r\n</div>\r\n<span *ngIf=\"nzAllowClear && nzSelectService.listOfSelectedValue.length\"\r\n  class=\"ant-select-selection__clear\"\r\n  nz-select-unselectable\r\n  (mousedown)=\"$event.preventDefault()\"\r\n  (click)=\"onClearSelection($event)\">\r\n    <i nz-icon type=\"close-circle\" theme=\"fill\" *ngIf=\"!nzClearIcon; else nzClearIcon\" class=\"ant-select-close-icon\"></i>\r\n  </span>\r\n<span class=\"ant-select-arrow\" nz-select-unselectable *ngIf=\"nzShowArrow\">\r\n  <i nz-icon type=\"loading\" *ngIf=\"nzLoading; else defaultArrow\"></i>\r\n  <ng-template #defaultArrow>\r\n    <i nz-icon type=\"down\" class=\"ant-select-arrow-icon\" *ngIf=\"!nzSuffixIcon; else nzSuffixIcon\"></i>\r\n  </ng-template>\r\n</span>"
                    }] }
        ];
        /** @nocollapse */
        NzSelectTopControlComponent.ctorParameters = function () {
            return [
                { type: core$1.Renderer2 },
                { type: NzSelectService },
                { type: core$1.ChangeDetectorRef },
                { type: core.NzNoAnimationDirective, decorators: [{ type: core$1.Host }, { type: core$1.Optional }] }
            ];
        };
        NzSelectTopControlComponent.propDecorators = {
            inputElement: [{ type: core$1.ViewChild, args: ['inputElement',] }],
            nzShowSearch: [{ type: core$1.Input }],
            nzPlaceHolder: [{ type: core$1.Input }],
            nzOpen: [{ type: core$1.Input }],
            nzMaxTagCount: [{ type: core$1.Input }],
            nzAllowClear: [{ type: core$1.Input }],
            nzShowArrow: [{ type: core$1.Input }],
            nzLoading: [{ type: core$1.Input }],
            nzSuffixIcon: [{ type: core$1.Input }],
            nzClearIcon: [{ type: core$1.Input }],
            nzRemoveIcon: [{ type: core$1.Input }],
            nzMaxTagPlaceholder: [{ type: core$1.Input }],
            nzTokenSeparators: [{ type: core$1.Input }]
        };
        return NzSelectTopControlComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NzSelectComponent = /** @class */ (function () {
        function NzSelectComponent(renderer, nzSelectService, cdr, focusMonitor, platform$$1, elementRef, noAnimation) {
            this.renderer = renderer;
            this.nzSelectService = nzSelectService;
            this.cdr = cdr;
            this.focusMonitor = focusMonitor;
            this.platform = platform$$1;
            this.noAnimation = noAnimation;
            this.open = false;
            this.onChange = ( /**
             * @return {?}
             */function () { return null; });
            this.onTouched = ( /**
             * @return {?}
             */function () { return null; });
            this.dropDownPosition = 'bottom';
            this._disabled = false;
            this._autoFocus = false;
            this.isInit = false;
            this.destroy$ = new rxjs.Subject();
            this.nzOnSearch = new core$1.EventEmitter();
            this.nzScrollToBottom = new core$1.EventEmitter();
            this.nzOpenChange = new core$1.EventEmitter();
            this.nzBlur = new core$1.EventEmitter();
            this.nzFocus = new core$1.EventEmitter();
            this.nzSize = 'default';
            this.nzDropdownMatchSelectWidth = true;
            this.nzAllowClear = false;
            this.nzShowSearch = false;
            this.nzLoading = false;
            this.nzShowArrow = true;
            this.nzTokenSeparators = [];
            renderer.addClass(elementRef.nativeElement, 'ant-select');
        }
        Object.defineProperty(NzSelectComponent.prototype, "nzAutoClearSearchValue", {
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this.nzSelectService.autoClearSearchValue = core.toBoolean(value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NzSelectComponent.prototype, "nzMaxMultipleCount", {
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this.nzSelectService.maxMultipleCount = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NzSelectComponent.prototype, "nzServerSearch", {
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this.nzSelectService.serverSearch = core.toBoolean(value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NzSelectComponent.prototype, "nzMode", {
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this.nzSelectService.mode = value;
                this.nzSelectService.check();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NzSelectComponent.prototype, "nzFilterOption", {
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this.nzSelectService.filterOption = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NzSelectComponent.prototype, "compareWith", {
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this.nzSelectService.compareWith = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NzSelectComponent.prototype, "nzAutoFocus", {
            get: /**
             * @return {?}
             */ function () {
                return this._autoFocus;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._autoFocus = core.toBoolean(value);
                this.updateAutoFocus();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NzSelectComponent.prototype, "nzOpen", {
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this.open = value;
                this.nzSelectService.setOpenState(value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(NzSelectComponent.prototype, "nzDisabled", {
            get: /**
             * @return {?}
             */ function () {
                return this._disabled;
            },
            set: /**
             * @param {?} value
             * @return {?}
             */ function (value) {
                this._disabled = core.toBoolean(value);
                this.nzSelectService.disabled = this._disabled;
                this.nzSelectService.check();
                if (this.nzDisabled && this.isInit) {
                    this.closeDropDown();
                }
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        NzSelectComponent.prototype.updateAutoFocus = /**
         * @return {?}
         */
            function () {
                if (this.nzSelectTopControlComponent.inputElement) {
                    if (this.nzAutoFocus) {
                        this.renderer.setAttribute(this.nzSelectTopControlComponent.inputElement.nativeElement, 'autofocus', 'autofocus');
                    }
                    else {
                        this.renderer.removeAttribute(this.nzSelectTopControlComponent.inputElement.nativeElement, 'autofocus');
                    }
                }
            };
        /**
         * @return {?}
         */
        NzSelectComponent.prototype.focus = /**
         * @return {?}
         */
            function () {
                if (this.nzSelectTopControlComponent.inputElement) {
                    this.focusMonitor.focusVia(this.nzSelectTopControlComponent.inputElement, 'keyboard');
                    this.nzFocus.emit();
                }
            };
        /**
         * @return {?}
         */
        NzSelectComponent.prototype.blur = /**
         * @return {?}
         */
            function () {
                if (this.nzSelectTopControlComponent.inputElement) {
                    this.nzSelectTopControlComponent.inputElement.nativeElement.blur();
                    this.nzBlur.emit();
                }
            };
        /**
         * @param {?} event
         * @return {?}
         */
        NzSelectComponent.prototype.onKeyDown = /**
         * @param {?} event
         * @return {?}
         */
            function (event) {
                this.nzSelectService.onKeyDown(event);
            };
        /**
         * @return {?}
         */
        NzSelectComponent.prototype.toggleDropDown = /**
         * @return {?}
         */
            function () {
                if (!this.nzDisabled) {
                    this.nzSelectService.setOpenState(!this.open);
                }
            };
        /**
         * @return {?}
         */
        NzSelectComponent.prototype.closeDropDown = /**
         * @return {?}
         */
            function () {
                this.nzSelectService.setOpenState(false);
            };
        /**
         * @param {?} position
         * @return {?}
         */
        NzSelectComponent.prototype.onPositionChange = /**
         * @param {?} position
         * @return {?}
         */
            function (position) {
                this.dropDownPosition = position.connectionPair.originY;
            };
        /**
         * @return {?}
         */
        NzSelectComponent.prototype.updateCdkConnectedOverlayStatus = /**
         * @return {?}
         */
            function () {
                if (this.platform.isBrowser) {
                    this.triggerWidth = this.cdkOverlayOrigin.elementRef.nativeElement.getBoundingClientRect().width;
                }
            };
        /**
         * @return {?}
         */
        NzSelectComponent.prototype.updateCdkConnectedOverlayPositions = /**
         * @return {?}
         */
            function () {
                var _this = this;
                setTimeout(( /**
                 * @return {?}
                 */function () {
                    if (_this.cdkConnectedOverlay && _this.cdkConnectedOverlay.overlayRef) {
                        _this.cdkConnectedOverlay.overlayRef.updatePosition();
                    }
                }));
            };
        /** update ngModel -> update listOfSelectedValue **/
        // tslint:disable-next-line:no-any
        /**
         * update ngModel -> update listOfSelectedValue *
         * @param {?} value
         * @return {?}
         */
        // tslint:disable-next-line:no-any
        NzSelectComponent.prototype.writeValue = /**
         * update ngModel -> update listOfSelectedValue *
         * @param {?} value
         * @return {?}
         */
            // tslint:disable-next-line:no-any
            function (value) {
                this.value = value;
                /** @type {?} */
                var listValue = [];
                if (core.isNotNil(value)) {
                    if (Array.isArray(value)) {
                        listValue = value;
                    }
                    else {
                        listValue = [value];
                    }
                }
                this.nzSelectService.updateListOfSelectedValue(listValue, false);
                this.cdr.markForCheck();
            };
        /**
         * @param {?} fn
         * @return {?}
         */
        NzSelectComponent.prototype.registerOnChange = /**
         * @param {?} fn
         * @return {?}
         */
            function (fn) {
                this.onChange = fn;
            };
        /**
         * @param {?} fn
         * @return {?}
         */
        NzSelectComponent.prototype.registerOnTouched = /**
         * @param {?} fn
         * @return {?}
         */
            function (fn) {
                this.onTouched = fn;
            };
        /**
         * @param {?} isDisabled
         * @return {?}
         */
        NzSelectComponent.prototype.setDisabledState = /**
         * @param {?} isDisabled
         * @return {?}
         */
            function (isDisabled) {
                this.nzDisabled = isDisabled;
                this.cdr.markForCheck();
            };
        /**
         * @return {?}
         */
        NzSelectComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                var _this = this;
                this.nzSelectService.searchValue$.pipe(operators.takeUntil(this.destroy$)).subscribe(( /**
                 * @param {?} data
                 * @return {?}
                 */function (data) {
                    _this.nzOnSearch.emit(data);
                    _this.updateCdkConnectedOverlayPositions();
                }));
                this.nzSelectService.modelChange$.pipe(operators.takeUntil(this.destroy$)).subscribe(( /**
                 * @param {?} modelValue
                 * @return {?}
                 */function (modelValue) {
                    if (_this.value !== modelValue) {
                        _this.value = modelValue;
                        _this.onChange(_this.value);
                        _this.updateCdkConnectedOverlayPositions();
                    }
                }));
                this.nzSelectService.open$.pipe(operators.takeUntil(this.destroy$)).subscribe(( /**
                 * @param {?} value
                 * @return {?}
                 */function (value) {
                    if (_this.open !== value) {
                        _this.nzOpenChange.emit(value);
                    }
                    if (value) {
                        _this.focus();
                        _this.updateCdkConnectedOverlayStatus();
                    }
                    else {
                        _this.blur();
                        _this.onTouched();
                    }
                    _this.open = value;
                }));
                this.nzSelectService.check$.pipe(operators.takeUntil(this.destroy$)).subscribe(( /**
                 * @return {?}
                 */function () {
                    _this.cdr.markForCheck();
                }));
            };
        /**
         * @return {?}
         */
        NzSelectComponent.prototype.ngAfterViewInit = /**
         * @return {?}
         */
            function () {
                this.updateCdkConnectedOverlayStatus();
                this.isInit = true;
            };
        /**
         * @return {?}
         */
        NzSelectComponent.prototype.ngAfterContentInit = /**
         * @return {?}
         */
            function () {
                var _this = this;
                this.listOfNzOptionGroupComponent.changes
                    .pipe(operators.startWith(true), operators.flatMap(( /**
             * @return {?}
             */function () {
                    return rxjs.merge.apply(void 0, __spread([_this.listOfNzOptionGroupComponent.changes,
                        _this.listOfNzOptionComponent.changes], _this.listOfNzOptionComponent.map(( /**
                 * @param {?} option
                 * @return {?}
                 */function (option) { return option.changes; })), _this.listOfNzOptionGroupComponent.map(( /**
                     * @param {?} group
                     * @return {?}
                     */function (group) {
                        return group.listOfNzOptionComponent ? group.listOfNzOptionComponent.changes : rxjs.EMPTY;
                    })))).pipe(operators.startWith(true));
                })))
                    .subscribe(( /**
             * @return {?}
             */function () {
                    _this.nzSelectService.updateTemplateOption(_this.listOfNzOptionComponent.toArray(), _this.listOfNzOptionGroupComponent.toArray());
                }));
            };
        /**
         * @return {?}
         */
        NzSelectComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
            function () {
                this.destroy$.next();
                this.destroy$.complete();
            };
        NzSelectComponent.decorators = [
            { type: core$1.Component, args: [{
                        selector: 'nz-select',
                        exportAs: 'nzSelect',
                        preserveWhitespaces: false,
                        providers: [
                            NzSelectService,
                            {
                                provide: forms.NG_VALUE_ACCESSOR,
                                useExisting: core$1.forwardRef(( /**
                                 * @return {?}
                                 */function () { return NzSelectComponent; })),
                                multi: true
                            }
                        ],
                        changeDetection: core$1.ChangeDetectionStrategy.OnPush,
                        encapsulation: core$1.ViewEncapsulation.None,
                        animations: [core.slideMotion],
                        template: "<div cdkOverlayOrigin\r\n  nz-select-top-control\r\n  tabindex=\"0\"\r\n  class=\"ant-select-selection\"\r\n  [nzOpen]=\"open\"\r\n  [nzNoAnimation]=\"noAnimation?.nzNoAnimation\"\r\n  [nzMaxTagPlaceholder]=\"nzMaxTagPlaceholder\"\r\n  [nzPlaceHolder]=\"nzPlaceHolder\"\r\n  [nzAllowClear]=\"nzAllowClear\"\r\n  [nzMaxTagCount]=\"nzMaxTagCount\"\r\n  [nzShowArrow]=\"nzShowArrow\"\r\n  [nzLoading]=\"nzLoading\"\r\n  [nzSuffixIcon]=\"nzSuffixIcon\"\r\n  [nzClearIcon]=\"nzClearIcon\"\r\n  [nzRemoveIcon]=\"nzRemoveIcon\"\r\n  [nzShowSearch]=\"nzShowSearch\"\r\n  [nzTokenSeparators]=\"nzTokenSeparators\"\r\n  [class.ant-select-selection--single]=\"nzSelectService.isSingleMode\"\r\n  [class.ant-select-selection--multiple]=\"nzSelectService.isMultipleOrTags\"\r\n  (keydown)=\"onKeyDown($event)\">\r\n</div>\r\n<ng-template\r\n  cdkConnectedOverlay\r\n  nzConnectedOverlay\r\n  [cdkConnectedOverlayHasBackdrop]=\"true\"\r\n  [cdkConnectedOverlayMinWidth]=\"nzDropdownMatchSelectWidth? null : triggerWidth\"\r\n  [cdkConnectedOverlayWidth]=\"nzDropdownMatchSelectWidth? triggerWidth : null\"\r\n  [cdkConnectedOverlayOrigin]=\"cdkOverlayOrigin\"\r\n  (backdropClick)=\"closeDropDown()\"\r\n  (detach)=\"closeDropDown();\"\r\n  (positionChange)=\"onPositionChange($event)\"\r\n  [cdkConnectedOverlayOpen]=\"open\">\r\n  <div\r\n    class=\"ant-select-dropdown\"\r\n    [class.ant-select-dropdown--single]=\"nzSelectService.isSingleMode\"\r\n    [class.ant-select-dropdown--multiple]=\"nzSelectService.isMultipleOrTags\"\r\n    [class.ant-select-dropdown-placement-bottomLeft]=\"dropDownPosition === 'bottom'\"\r\n    [class.ant-select-dropdown-placement-topLeft]=\"dropDownPosition === 'top'\"\r\n    [nzClassListAdd]=\"[nzDropdownClassName]\"\r\n    [@slideMotion]=\"dropDownPosition\"\r\n    [nzNoAnimation]=\"noAnimation?.nzNoAnimation\"\r\n    [ngStyle]=\"nzDropdownStyle\">\r\n    <div nz-option-container\r\n      style=\"overflow: auto;transform: translateZ(0px);\"\r\n      (keydown)=\"onKeyDown($event)\"\r\n      [nzMenuItemSelectedIcon]=\"nzMenuItemSelectedIcon\"\r\n      [nzNotFoundContent]=\"nzNotFoundContent\"\r\n      (nzScrollToBottom)=\"nzScrollToBottom.emit()\">\r\n    </div>\r\n    <ng-template [ngTemplateOutlet]=\"nzDropdownRender\"></ng-template>\r\n  </div>\r\n</ng-template>\r\n<!--can not use ViewChild since it will match sub options in option group -->\r\n<ng-template>\r\n  <ng-content></ng-content>\r\n</ng-template>",
                        host: {
                            '[class.ant-select-lg]': 'nzSize==="large"',
                            '[class.ant-select-sm]': 'nzSize==="small"',
                            '[class.ant-select-enabled]': '!nzDisabled',
                            '[class.ant-select-no-arrow]': '!nzShowArrow',
                            '[class.ant-select-disabled]': 'nzDisabled',
                            '[class.ant-select-allow-clear]': 'nzAllowClear',
                            '[class.ant-select-open]': 'open',
                            '(click)': 'toggleDropDown()'
                        },
                        styles: ["\n      .ant-select-dropdown {\n        top: 100%;\n        left: 0;\n        position: relative;\n        width: 100%;\n        margin-top: 4px;\n        margin-bottom: 4px;\n      }\n    "]
                    }] }
        ];
        /** @nocollapse */
        NzSelectComponent.ctorParameters = function () {
            return [
                { type: core$1.Renderer2 },
                { type: NzSelectService },
                { type: core$1.ChangeDetectorRef },
                { type: a11y.FocusMonitor },
                { type: platform.Platform },
                { type: core$1.ElementRef },
                { type: core.NzNoAnimationDirective, decorators: [{ type: core$1.Host }, { type: core$1.Optional }] }
            ];
        };
        NzSelectComponent.propDecorators = {
            cdkOverlayOrigin: [{ type: core$1.ViewChild, args: [overlay.CdkOverlayOrigin,] }],
            cdkConnectedOverlay: [{ type: core$1.ViewChild, args: [overlay.CdkConnectedOverlay,] }],
            nzSelectTopControlComponent: [{ type: core$1.ViewChild, args: [NzSelectTopControlComponent,] }],
            listOfNzOptionComponent: [{ type: core$1.ContentChildren, args: [NzOptionComponent,] }],
            listOfNzOptionGroupComponent: [{ type: core$1.ContentChildren, args: [NzOptionGroupComponent,] }],
            nzOnSearch: [{ type: core$1.Output }],
            nzScrollToBottom: [{ type: core$1.Output }],
            nzOpenChange: [{ type: core$1.Output }],
            nzBlur: [{ type: core$1.Output }],
            nzFocus: [{ type: core$1.Output }],
            nzSize: [{ type: core$1.Input }],
            nzDropdownClassName: [{ type: core$1.Input }],
            nzDropdownMatchSelectWidth: [{ type: core$1.Input }],
            nzDropdownStyle: [{ type: core$1.Input }],
            nzNotFoundContent: [{ type: core$1.Input }],
            nzAllowClear: [{ type: core$1.Input }],
            nzShowSearch: [{ type: core$1.Input }],
            nzLoading: [{ type: core$1.Input }],
            nzPlaceHolder: [{ type: core$1.Input }],
            nzMaxTagCount: [{ type: core$1.Input }],
            nzDropdownRender: [{ type: core$1.Input }],
            nzSuffixIcon: [{ type: core$1.Input }],
            nzClearIcon: [{ type: core$1.Input }],
            nzRemoveIcon: [{ type: core$1.Input }],
            nzMenuItemSelectedIcon: [{ type: core$1.Input }],
            nzShowArrow: [{ type: core$1.Input }],
            nzTokenSeparators: [{ type: core$1.Input }],
            nzMaxTagPlaceholder: [{ type: core$1.Input }],
            nzAutoClearSearchValue: [{ type: core$1.Input }],
            nzMaxMultipleCount: [{ type: core$1.Input }],
            nzServerSearch: [{ type: core$1.Input }],
            nzMode: [{ type: core$1.Input }],
            nzFilterOption: [{ type: core$1.Input }],
            compareWith: [{ type: core$1.Input }],
            nzAutoFocus: [{ type: core$1.Input }],
            nzOpen: [{ type: core$1.Input }],
            nzDisabled: [{ type: core$1.Input }]
        };
        __decorate([
            core.InputBoolean(),
            __metadata("design:type", Object)
        ], NzSelectComponent.prototype, "nzAllowClear", void 0);
        __decorate([
            core.InputBoolean(),
            __metadata("design:type", Object)
        ], NzSelectComponent.prototype, "nzShowSearch", void 0);
        __decorate([
            core.InputBoolean(),
            __metadata("design:type", Object)
        ], NzSelectComponent.prototype, "nzLoading", void 0);
        return NzSelectComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NzSelectUnselectableDirective = /** @class */ (function () {
        function NzSelectUnselectableDirective() {
        }
        NzSelectUnselectableDirective.decorators = [
            { type: core$1.Directive, args: [{
                        selector: '[nz-select-unselectable]',
                        exportAs: 'nzSelectUnselectable',
                        host: {
                            '[attr.unselectable]': '"unselectable"',
                            '[style.user-select]': '"none"'
                        }
                    },] }
        ];
        return NzSelectUnselectableDirective;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var NzSelectModule = /** @class */ (function () {
        function NzSelectModule() {
        }
        NzSelectModule.decorators = [
            { type: core$1.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                            i18n.NzI18nModule,
                            forms.FormsModule,
                            overlay.OverlayModule,
                            icon.NzIconModule,
                            core.NzAddOnModule,
                            empty.NzEmptyModule,
                            core.NzOverlayModule,
                            core.NzNoAnimationModule
                        ],
                        declarations: [
                            NzFilterGroupOptionPipe,
                            NzFilterOptionPipe,
                            NzOptionComponent,
                            NzSelectComponent,
                            NzOptionContainerComponent,
                            NzOptionGroupComponent,
                            NzOptionLiComponent,
                            NzSelectTopControlComponent,
                            NzSelectUnselectableDirective
                        ],
                        exports: [
                            NzOptionComponent,
                            NzSelectComponent,
                            NzOptionContainerComponent,
                            NzOptionGroupComponent,
                            NzSelectTopControlComponent
                        ]
                    },] }
        ];
        return NzSelectModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.NzOptionGroupComponent = NzOptionGroupComponent;
    exports.NzOptionContainerComponent = NzOptionContainerComponent;
    exports.NzOptionComponent = NzOptionComponent;
    exports.NzSelectComponent = NzSelectComponent;
    exports.NzSelectModule = NzSelectModule;
    exports.NzOptionLiComponent = NzOptionLiComponent;
    exports.defaultFilterOption = defaultFilterOption;
    exports.NzFilterOptionPipe = NzFilterOptionPipe;
    exports.NzFilterGroupOptionPipe = NzFilterGroupOptionPipe;
    exports.NzSelectTopControlComponent = NzSelectTopControlComponent;
    exports.NzSelectUnselectableDirective = NzSelectUnselectableDirective;
    exports.NzSelectService = NzSelectService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=ng-zorro-antd-select.umd.js.map