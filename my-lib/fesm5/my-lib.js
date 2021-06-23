import { ɵɵdefineInjectable, ɵsetClassMetadata, Injectable, ɵɵdefineComponent, ɵɵelementStart, ɵɵtext, ɵɵelementEnd, Component, ɵɵdefineNgModule, ɵɵdefineInjector, ɵɵsetNgModuleScope, NgModule } from '@angular/core';

var MyLibService = /** @class */ (function () {
    function MyLibService() {
    }
    MyLibService.ɵfac = function MyLibService_Factory(t) { return new (t || MyLibService)(); };
    MyLibService.ɵprov = ɵɵdefineInjectable({ token: MyLibService, factory: MyLibService.ɵfac, providedIn: 'root' });
    return MyLibService;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(MyLibService, [{
        type: Injectable,
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
    MyLibComponent.ɵcmp = ɵɵdefineComponent({ type: MyLibComponent, selectors: [["lib-my-lib"]], decls: 2, vars: 0, template: function MyLibComponent_Template(rf, ctx) { if (rf & 1) {
            ɵɵelementStart(0, "p");
            ɵɵtext(1, " my-lib works! ");
            ɵɵelementEnd();
        } }, encapsulation: 2 });
    return MyLibComponent;
}());
/*@__PURE__*/ (function () { ɵsetClassMetadata(MyLibComponent, [{
        type: Component,
        args: [{
                selector: 'lib-my-lib',
                template: "\n    <p>\n      my-lib works!\n    </p>\n  ",
                styles: []
            }]
    }], function () { return []; }, null); })();

var MyLibModule = /** @class */ (function () {
    function MyLibModule() {
    }
    MyLibModule.ɵmod = ɵɵdefineNgModule({ type: MyLibModule });
    MyLibModule.ɵinj = ɵɵdefineInjector({ factory: function MyLibModule_Factory(t) { return new (t || MyLibModule)(); }, imports: [[]] });
    return MyLibModule;
}());
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵɵsetNgModuleScope(MyLibModule, { declarations: [MyLibComponent], exports: [MyLibComponent] }); })();
/*@__PURE__*/ (function () { ɵsetClassMetadata(MyLibModule, [{
        type: NgModule,
        args: [{
                declarations: [MyLibComponent],
                imports: [],
                exports: [MyLibComponent]
            }]
    }], null, null); })();

/*
 * Public API Surface of my-lib
 */

/**
 * Generated bundle index. Do not edit.
 */

export { MyLibComponent, MyLibModule, MyLibService };
//# sourceMappingURL=my-lib.js.map
