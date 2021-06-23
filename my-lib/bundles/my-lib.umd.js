(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('my-lib', ['exports', '@angular/core'], factory) :
    (global = global || self, factory(global['my-lib'] = {}, global.ng.core));
}(this, (function (exports, core) { 'use strict';

    var MyLibService = /** @class */ (function () {
        function MyLibService() {
        }
        MyLibService.ɵfac = function MyLibService_Factory(t) { return new (t || MyLibService)(); };
        MyLibService.ɵprov = core.ɵɵdefineInjectable({ token: MyLibService, factory: MyLibService.ɵfac, providedIn: 'root' });
        return MyLibService;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(MyLibService, [{
            type: core.Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], function () { return []; }, null); })();

    var MyLibComponent = /** @class */ (function () {
        function MyLibComponent() {
        }
        MyLibComponent.prototype.ngOnInit = function () {
        };
        MyLibComponent.ɵfac = function MyLibComponent_Factory(t) { return new (t || MyLibComponent)(); };
        MyLibComponent.ɵcmp = core.ɵɵdefineComponent({ type: MyLibComponent, selectors: [["lib-my-lib"]], decls: 2, vars: 0, template: function MyLibComponent_Template(rf, ctx) { if (rf & 1) {
                core.ɵɵelementStart(0, "p");
                core.ɵɵtext(1, " my-lib works! ");
                core.ɵɵelementEnd();
            } }, encapsulation: 2 });
        return MyLibComponent;
    }());
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(MyLibComponent, [{
            type: core.Component,
            args: [{
                    selector: 'lib-my-lib',
                    template: "\n    <p>\n      my-lib works!\n    </p>\n  ",
                    styles: []
                }]
        }], function () { return []; }, null); })();

    var MyLibModule = /** @class */ (function () {
        function MyLibModule() {
        }
        MyLibModule.ɵmod = core.ɵɵdefineNgModule({ type: MyLibModule });
        MyLibModule.ɵinj = core.ɵɵdefineInjector({ factory: function MyLibModule_Factory(t) { return new (t || MyLibModule)(); }, imports: [[]] });
        return MyLibModule;
    }());
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && core.ɵɵsetNgModuleScope(MyLibModule, { declarations: [MyLibComponent], exports: [MyLibComponent] }); })();
    /*@__PURE__*/ (function () { core.ɵsetClassMetadata(MyLibModule, [{
            type: core.NgModule,
            args: [{
                    declarations: [MyLibComponent],
                    imports: [],
                    exports: [MyLibComponent]
                }]
        }], null, null); })();

    exports.MyLibComponent = MyLibComponent;
    exports.MyLibModule = MyLibModule;
    exports.MyLibService = MyLibService;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=my-lib.umd.js.map
