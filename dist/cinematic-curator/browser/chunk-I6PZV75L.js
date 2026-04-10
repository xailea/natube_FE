import {
  ChangeDetectionStrategy,
  Component,
  Input,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-VWYUV7GB.js";

// src/app/shared/section-header/section-header.component.ts
var _SectionHeaderComponent = class _SectionHeaderComponent {
};
_SectionHeaderComponent.\u0275fac = function SectionHeaderComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _SectionHeaderComponent)();
};
_SectionHeaderComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SectionHeaderComponent, selectors: [["app-section-header"]], inputs: { title: "title", accent: "accent" }, decls: 4, vars: 5, consts: [[1, "section-header"], [1, "section-header__bar"], [1, "section-title"]], template: function SectionHeaderComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 0);
    \u0275\u0275domElement(1, "span", 1);
    \u0275\u0275domElementStart(2, "h3", 2);
    \u0275\u0275text(3);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275classProp("section-header__bar--primary", ctx.accent === "primary")("section-header__bar--secondary", ctx.accent === "secondary");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx.title);
  }
}, styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n  margin-bottom: 2rem;\n}\n.section-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n}\n.section-header__bar[_ngcontent-%COMP%] {\n  inline-size: 3rem;\n  block-size: 0.5rem;\n  border-radius: var(--radius-pill);\n  background: var(--color-tertiary);\n}\n.section-header__bar--primary[_ngcontent-%COMP%] {\n  background: var(--color-primary-container);\n}\n.section-header__bar--secondary[_ngcontent-%COMP%] {\n  background: var(--color-secondary);\n}\n.section-title[_ngcontent-%COMP%] {\n  margin: 0;\n  color: var(--color-tertiary);\n  font-size: 1.2rem;\n  font-weight: 800;\n  letter-spacing: 0.04em;\n  text-transform: uppercase;\n}\n.section-header__bar--primary[_ngcontent-%COMP%]    + .section-title[_ngcontent-%COMP%] {\n  color: var(--color-primary-container);\n}\n.section-header__bar--secondary[_ngcontent-%COMP%]    + .section-title[_ngcontent-%COMP%] {\n  color: var(--color-secondary);\n}\n/*# sourceMappingURL=section-header.component.css.map */"], changeDetection: 0 });
var SectionHeaderComponent = _SectionHeaderComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SectionHeaderComponent, [{
    type: Component,
    args: [{ selector: "app-section-header", standalone: true, changeDetection: ChangeDetectionStrategy.OnPush, template: `<div class="section-header">
  <span class="section-header__bar" [class.section-header__bar--primary]="accent === 'primary'" [class.section-header__bar--secondary]="accent === 'secondary'"></span>
  <h3 class="section-title">{{ title }}</h3>
</div>
`, styles: ["/* src/app/shared/section-header/section-header.component.scss */\n:host {\n  display: block;\n  margin-bottom: 2rem;\n}\n.section-header {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n}\n.section-header__bar {\n  inline-size: 3rem;\n  block-size: 0.5rem;\n  border-radius: var(--radius-pill);\n  background: var(--color-tertiary);\n}\n.section-header__bar--primary {\n  background: var(--color-primary-container);\n}\n.section-header__bar--secondary {\n  background: var(--color-secondary);\n}\n.section-title {\n  margin: 0;\n  color: var(--color-tertiary);\n  font-size: 1.2rem;\n  font-weight: 800;\n  letter-spacing: 0.04em;\n  text-transform: uppercase;\n}\n.section-header__bar--primary + .section-title {\n  color: var(--color-primary-container);\n}\n.section-header__bar--secondary + .section-title {\n  color: var(--color-secondary);\n}\n/*# sourceMappingURL=section-header.component.css.map */\n"] }]
  }], null, { title: [{
    type: Input,
    args: [{ required: true }]
  }], accent: [{
    type: Input,
    args: [{ required: true }]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SectionHeaderComponent, { className: "SectionHeaderComponent", filePath: "src/app/shared/section-header/section-header.component.ts", lineNumber: 10 });
})();

export {
  SectionHeaderComponent
};
//# sourceMappingURL=chunk-I6PZV75L.js.map
