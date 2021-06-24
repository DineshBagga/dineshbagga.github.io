(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@quark/platform-components-ng'), require('@quark/qwc'), require('@angular/core'), require('@angular/common/http'), require('rxjs')) :
    typeof define === 'function' && define.amd ? define('plugin-library', ['exports', '@quark/platform-components-ng', '@quark/qwc', '@angular/core', '@angular/common/http', 'rxjs'], factory) :
    (factory((global['plugin-library'] = {}),global.platformcomponentsng,global.qwc,global.ngcore,global.ngcommonhttp,global.rxjs));
}(this, (function (exports,platformComponentsNg,qwc,core,http,rxjs) { 'use strict';

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
    function __values(o) {
        var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
        if (m)
            return m.call(o);
        return {
            next: function () {
                if (o && i >= o.length)
                    o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var TweetsBladeComponent = /** @class */ (function () {
        function TweetsBladeComponent(renderer) {
            this.renderer = renderer;
        }
        /**
         * @return {?}
         */
        TweetsBladeComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        TweetsBladeComponent.decorators = [
            { type: core.Component, args: [{
                        template: "<qwc-blade>\n    <blade-title>\n        <img src=\"http://www.logospng.com/images/2/transparent-twitter-logo-wwwimgkidcom-the-image-kid-2605.png\"\n            style=\"height:16px\"> {{userName}}\n        <span blade-subtitle>Tweets</span>\n    </blade-title>\n    <blade-actions>\n    </blade-actions>\n    <blade-content #bladeContent>\n        <qpp-collection-browse [filterName]=\"'PICTURE_BROWSER'\"></qpp-collection-browse>\n    </blade-content>\n</qwc-blade>"
                    }] }
        ];
        /** @nocollapse */
        TweetsBladeComponent.ctorParameters = function () {
            return [
                { type: core.Renderer2 }
            ];
        };
        TweetsBladeComponent.propDecorators = {
            bladeContentEl: [{ type: core.ViewChild, args: ["bladeContent",] }]
        };
        return TweetsBladeComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var Environment = {
        PLUGIN_HOST_SERVER: "http://localhost:9000"
    };

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var TwitterPluginComponent = /** @class */ (function () {
        function TwitterPluginComponent(httpClient, bladeContainerService) {
            this.httpClient = httpClient;
            this.bladeContainerService = bladeContainerService;
            this.subs = new rxjs.Subscription();
            this.isTweetBladeOpened = false;
        }
        /**
         * @return {?}
         */
        TwitterPluginComponent.prototype.ngOnDestroy = /**
         * @return {?}
         */
            function () {
                this.subs.unsubscribe();
            };
        /**
         * @param {?} pluginEventSources
         * @return {?}
         */
        TwitterPluginComponent.prototype.onPluginActivated = /**
         * @param {?} pluginEventSources
         * @return {?}
         */
            function (pluginEventSources) {
                var _this = this;
                var e_1, _a;
                try {
                    for (var pluginEventSources_1 = __values(pluginEventSources), pluginEventSources_1_1 = pluginEventSources_1.next(); !pluginEventSources_1_1.done; pluginEventSources_1_1 = pluginEventSources_1.next()) {
                        var pluginEventSource = pluginEventSources_1_1.value;
                        if (pluginEventSource.eventName === "userChange") {
                            this.subs.add(pluginEventSource.source.subscribe(( /**
                             * @param {?} _user
                             * @return {?}
                             */function (_user) {
                                _this.user = _user;
                                if (_this.isTweetBladeOpened) ;
                            })));
                        }
                    }
                }
                catch (e_1_1) {
                    e_1 = { error: e_1_1 };
                }
                finally {
                    try {
                        if (pluginEventSources_1_1 && !pluginEventSources_1_1.done && (_a = pluginEventSources_1.return))
                            _a.call(pluginEventSources_1);
                    }
                    finally {
                        if (e_1)
                            throw e_1.error;
                    }
                }
            };
        /**
         * Launch tweet blade component to show user's tweet.
         */
        /**
         * Launch tweet blade component to show user's tweet.
         * @return {?}
         */
        TwitterPluginComponent.prototype.showTweets = /**
         * Launch tweet blade component to show user's tweet.
         * @return {?}
         */
            function () {
                /** @type {?} */
                var userName = this.user.userName;
                // Launch new Tweets blade.
                /** @type {?} */
                var tweetsBladeItem = new qwc.BladeItem({
                    componentType: TweetsBladeComponent,
                    initiatorComponent: this,
                    inputs: {
                        userName: userName
                    }
                });
                this.bladeContainerService.addBladeItem(tweetsBladeItem);
                this.isTweetBladeOpened = true;
            };
        /**
         * Update input values that are passed to tweet blade component.
         */
        /**
         * Update input values that are passed to tweet blade component.
         * @return {?}
         */
        TwitterPluginComponent.prototype.updateBindings = /**
         * Update input values that are passed to tweet blade component.
         * @return {?}
         */
            function () {
                /** @type {?} */
                var userName = this.user.userName;
                /** @type {?} */
                var tweetsBladeItem = new qwc.BladeItem({
                    initiatorComponent: this,
                    inputs: {
                        userName: userName
                    }
                });
                this.bladeContainerService.updateInputBindings(tweetsBladeItem);
            };
        /**
         * Return Twitter handle corresponding to username.
         *
         */
        /**
         * Return Twitter handle corresponding to username.
         *
         * @return {?}
         */
        TwitterPluginComponent.prototype.getTwitterHandle = /**
         * Return Twitter handle corresponding to username.
         *
         * @return {?}
         */
            function () {
                var _this = this;
                return this.httpClient.get(Environment.PLUGIN_HOST_SERVER + "/plugin-library/data/twitter-handles.json")
                    .toPromise()
                    .then(( /**
             * @param {?} handleInfo
             * @return {?}
             */function (handleInfo) {
                    var e_2, _a;
                    try {
                        for (var _b = __values(handleInfo.user_handles), _c = _b.next(); !_c.done; _c = _b.next()) {
                            var userInfo = _c.value;
                            if (_this.user.userName.toLowerCase() === userInfo.userName.toLowerCase()) {
                                return userInfo.handle;
                            }
                        }
                    }
                    catch (e_2_1) {
                        e_2 = { error: e_2_1 };
                    }
                    finally {
                        try {
                            if (_c && !_c.done && (_a = _b.return))
                                _a.call(_b);
                        }
                        finally {
                            if (e_2)
                                throw e_2.error;
                        }
                    }
                    // return default twitter handle.
                    return handleInfo.default_handle;
                }));
            };
        TwitterPluginComponent.decorators = [
            { type: core.Component, args: [{
                        template: "\n    <a qwc-btn qwc-btn (click)=\"showTweets()\">\n      <img src=\"http://www.logospng.com/images/2/transparent-twitter-logo-wwwimgkidcom-the-image-kid-2605.png\" style=\"height:32px\">\n    </a>\n    "
                    }] }
        ];
        /** @nocollapse */
        TwitterPluginComponent.ctorParameters = function () {
            return [
                { type: http.HttpClient },
                { type: qwc.BladeContainerService }
            ];
        };
        return TwitterPluginComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var PluginModule = /** @class */ (function () {
        function PluginModule() {
        }
        PluginModule.decorators = [
            { type: core.NgModule, args: [{
                        declarations: [TwitterPluginComponent, TweetsBladeComponent],
                        imports: [qwc.QwcModule, platformComponentsNg.CollectionComponentsModule],
                        entryComponents: [TwitterPluginComponent, TweetsBladeComponent],
                        schemas: [core.CUSTOM_ELEMENTS_SCHEMA]
                    },] }
        ];
        return PluginModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.PluginModule = PluginModule;
    exports.TwitterPluginComponent = TwitterPluginComponent;
    exports.ɵb = TweetsBladeComponent;
    exports.ɵa = TwitterPluginComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=plugin-library.umd.js.map