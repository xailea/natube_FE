import {
  CreatorContentService
} from "./chunk-ZZ2EONNC.js";
import {
  LayoutService,
  MobileNavComponent,
  SideNavComponent,
  TopNavbarComponent
} from "./chunk-TUBWDZ5T.js";
import {
  TranslatePipe
} from "./chunk-ISP6ZPZC.js";
import {
  ChangeDetectionStrategy,
  Component,
  HostListener,
  Injectable,
  PLATFORM_ID,
  computed,
  inject,
  isPlatformBrowser,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵresolveWindow,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-HPYWNVFW.js";

// src/app/core/services/hidden-videos.service.ts
var _HiddenVideosService = class _HiddenVideosService {
  constructor() {
    this.content = inject(CreatorContentService);
    this.hiddenIds = signal(["recent-neon"], ...ngDevMode ? [{ debugName: "hiddenIds" }] : []);
    this.library = computed(() => {
      const videos = [this.content.featuredVideo(), ...this.content.recentUploads()];
      return videos.filter((video, index, items) => items.findIndex((item) => item.id === video.id) === index);
    }, ...ngDevMode ? [{ debugName: "library" }] : []);
    this.hiddenVideos = computed(() => {
      const hidden = new Set(this.hiddenIds());
      return this.library().filter((video) => hidden.has(video.id));
    }, ...ngDevMode ? [{ debugName: "hiddenVideos" }] : []);
    this.availableVideos = computed(() => {
      const hidden = new Set(this.hiddenIds());
      return this.library().filter((video) => !hidden.has(video.id));
    }, ...ngDevMode ? [{ debugName: "availableVideos" }] : []);
  }
  add(videoId) {
    if (this.hiddenIds().includes(videoId)) {
      return;
    }
    this.hiddenIds.update((ids) => [...ids, videoId]);
  }
  remove(videoId) {
    this.hiddenIds.update((ids) => ids.filter((id) => id !== videoId));
  }
};
_HiddenVideosService.\u0275fac = function HiddenVideosService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _HiddenVideosService)();
};
_HiddenVideosService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _HiddenVideosService, factory: _HiddenVideosService.\u0275fac, providedIn: "root" });
var HiddenVideosService = _HiddenVideosService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HiddenVideosService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

// src/app/features/hidden/pages/hidden-page.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function HiddenPageComponent_Conditional_32_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "article", 15);
    \u0275\u0275element(1, "img", 16);
    \u0275\u0275elementStart(2, "div", 17)(3, "div")(4, "p", 11);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "h3", 12);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 18);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "button", 19);
    \u0275\u0275listener("click", function HiddenPageComponent_Conditional_32_For_2_Template_button_click_10_listener() {
      const video_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.removeVideo(video_r2.id));
    });
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const video_r2 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("src", video_r2.thumbnailUrl, \u0275\u0275sanitizeUrl)("alt", video_r2.title);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(video_r2.category);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(video_r2.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", video_r2.creator.name, " \xB7 ", video_r2.duration);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(12, 7, "hidden.remove"), " ");
  }
}
function HiddenPageComponent_Conditional_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275repeaterCreate(1, HiddenPageComponent_Conditional_32_For_2_Template, 13, 9, "article", 15, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.hiddenVideos.hiddenVideos());
  }
}
function HiddenPageComponent_Conditional_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 14)(1, "span", 6);
    \u0275\u0275text(2, "video_library");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h2", 12);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p");
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 2, "hidden.emptyTitle"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 4, "hidden.emptyDescription"));
  }
}
function HiddenPageComponent_Conditional_43_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "article", 15);
    \u0275\u0275element(1, "img", 16);
    \u0275\u0275elementStart(2, "div", 17)(3, "div")(4, "p", 11);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "h3", 12);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 18);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "button", 20);
    \u0275\u0275listener("click", function HiddenPageComponent_Conditional_43_For_2_Template_button_click_10_listener() {
      const video_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.addVideo(video_r5.id));
    });
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const video_r5 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("src", video_r5.thumbnailUrl, \u0275\u0275sanitizeUrl)("alt", video_r5.title);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(video_r5.category);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(video_r5.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2("", video_r5.creator.name, " \xB7 ", video_r5.duration);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(12, 7, "hidden.addVideo"), " ");
  }
}
function HiddenPageComponent_Conditional_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275repeaterCreate(1, HiddenPageComponent_Conditional_43_For_2_Template, 13, 9, "article", 15, _forTrack0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.hiddenVideos.availableVideos());
  }
}
function HiddenPageComponent_Conditional_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 14)(1, "span", 6);
    \u0275\u0275text(2, "task_alt");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h2", 12);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "p");
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 2, "hidden.libraryEmptyTitle"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 4, "hidden.libraryEmptyDescription"));
  }
}
var _HiddenPageComponent = class _HiddenPageComponent {
  constructor() {
    this.platformId = inject(PLATFORM_ID);
    this.layout = inject(LayoutService);
    this.hiddenVideos = inject(HiddenVideosService);
    this.hiddenCount = computed(() => this.hiddenVideos.hiddenVideos().length, ...ngDevMode ? [{ debugName: "hiddenCount" }] : []);
    if (isPlatformBrowser(this.platformId)) {
      this.layout.setViewportWidth(window.innerWidth);
    }
  }
  onResize() {
    if (isPlatformBrowser(this.platformId)) {
      this.layout.setViewportWidth(window.innerWidth);
    }
  }
  addVideo(videoId) {
    this.hiddenVideos.add(videoId);
  }
  removeVideo(videoId) {
    this.hiddenVideos.remove(videoId);
  }
};
_HiddenPageComponent.\u0275fac = function HiddenPageComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _HiddenPageComponent)();
};
_HiddenPageComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HiddenPageComponent, selectors: [["app-hidden-page"]], hostBindings: function HiddenPageComponent_HostBindings(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275listener("resize", function HiddenPageComponent_resize_HostBindingHandler() {
      return ctx.onResize();
    }, \u0275\u0275resolveWindow);
  }
}, decls: 46, vars: 31, consts: [[1, "hidden-page"], [1, "hidden-page__hero", "surface-card"], [1, "hidden-page__eyebrow", "text-label"], [1, "page-title", "hidden-page__title"], [1, "hidden-page__subtitle"], [1, "hidden-page__stats"], [1, "material-symbols-outlined"], [1, "hidden-page__stat-value"], [1, "hidden-page__stat-label"], [1, "hidden-page__section"], [1, "hidden-page__section-head"], [1, "text-label"], [1, "card-title"], [1, "hidden-page__grid"], [1, "hidden-page__empty", "surface-card"], [1, "hidden-page__card", "surface-card"], ["loading", "lazy", "decoding", "async", "referrerpolicy", "no-referrer", 1, "hidden-page__image", 3, "src", "alt"], [1, "hidden-page__content"], [1, "hidden-page__meta"], ["type", "button", 1, "hidden-page__button", "hidden-page__button--secondary", 3, "click"], ["type", "button", 1, "hidden-page__button", 3, "click"]], template: function HiddenPageComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-top-navbar")(1, "app-side-nav");
    \u0275\u0275elementStart(2, "main", 0)(3, "header", 1)(4, "div")(5, "p", 2);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "h1", 3);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "p", 4);
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 5)(15, "span", 6);
    \u0275\u0275text(16, "visibility_off");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div")(18, "p", 7);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "p", 8);
    \u0275\u0275text(21);
    \u0275\u0275pipe(22, "translate");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(23, "section", 9)(24, "div", 10)(25, "div")(26, "p", 11);
    \u0275\u0275text(27);
    \u0275\u0275pipe(28, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "h2", 12);
    \u0275\u0275text(30);
    \u0275\u0275pipe(31, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(32, HiddenPageComponent_Conditional_32_Template, 3, 0, "div", 13)(33, HiddenPageComponent_Conditional_33_Template, 9, 6, "section", 14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "section", 9)(35, "div", 10)(36, "div")(37, "p", 11);
    \u0275\u0275text(38);
    \u0275\u0275pipe(39, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "h2", 12);
    \u0275\u0275text(41);
    \u0275\u0275pipe(42, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(43, HiddenPageComponent_Conditional_43_Template, 3, 0, "div", 13)(44, HiddenPageComponent_Conditional_44_Template, 9, 6, "section", 14);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(45, "app-mobile-nav");
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275classProp("hidden-page--collapsed", ctx.layout.sidebarCollapsed())("hidden-page--mobile", ctx.layout.isMobile());
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 15, "hidden.eyebrow"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(10, 17, "hidden.title"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(13, 19, "hidden.subtitle"));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx.hiddenCount());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(22, 21, "hidden.hiddenCount"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(28, 23, "hidden.currentlyHiddenLabel"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(31, 25, "hidden.currentlyHiddenTitle"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx.hiddenVideos.hiddenVideos().length > 0 ? 32 : 33);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(39, 27, "hidden.addLabel"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(42, 29, "hidden.addTitle"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx.hiddenVideos.availableVideos().length > 0 ? 43 : 44);
  }
}, dependencies: [MobileNavComponent, SideNavComponent, TopNavbarComponent, TranslatePipe], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.hidden-page[_ngcontent-%COMP%] {\n  padding: calc(var(--top-nav-height) + 2rem) 2rem 6rem;\n  margin-inline-start: var(--sidebar-width);\n  min-block-size: 100vh;\n  display: grid;\n  gap: 1.5rem;\n}\n.hidden-page--collapsed[_ngcontent-%COMP%] {\n  margin-inline-start: var(--sidebar-collapsed-width);\n}\n.hidden-page--mobile[_ngcontent-%COMP%] {\n  margin-inline-start: 0;\n  padding: calc(var(--top-nav-height) + 1rem) 1rem 6rem;\n}\n.hidden-page__hero[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  gap: 1rem;\n}\n.hidden-page__eyebrow[_ngcontent-%COMP%], \n.hidden-page__title[_ngcontent-%COMP%], \n.hidden-page__subtitle[_ngcontent-%COMP%], \n.hidden-page__stat-value[_ngcontent-%COMP%], \n.hidden-page__stat-label[_ngcontent-%COMP%], \n.hidden-page__meta[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.hidden-page__subtitle[_ngcontent-%COMP%], \n.hidden-page__meta[_ngcontent-%COMP%] {\n  color: var(--color-muted);\n}\n.hidden-page__stats[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  min-inline-size: 12rem;\n  padding: 1rem 1.25rem;\n  border-radius: 1.25rem;\n  background: rgba(255, 255, 255, 0.03);\n}\n.hidden-page__stats[_ngcontent-%COMP%]   .material-symbols-outlined[_ngcontent-%COMP%] {\n  font-size: 2rem;\n  color: var(--color-primary);\n}\n.hidden-page__stat-value[_ngcontent-%COMP%] {\n  font-size: 1.8rem;\n  font-weight: 700;\n}\n.hidden-page__stat-label[_ngcontent-%COMP%] {\n  color: var(--color-muted);\n}\n.hidden-page__section[_ngcontent-%COMP%] {\n  display: grid;\n  gap: 1rem;\n}\n.hidden-page__grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(18rem, 1fr));\n  gap: 1rem;\n}\n.hidden-page__card[_ngcontent-%COMP%] {\n  overflow: hidden;\n}\n.hidden-page__image[_ngcontent-%COMP%] {\n  inline-size: 100%;\n  aspect-ratio: 16/9;\n  object-fit: cover;\n  display: block;\n}\n.hidden-page__content[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: end;\n  gap: 1rem;\n  padding: 1rem;\n}\n.hidden-page__button[_ngcontent-%COMP%] {\n  border: none;\n  border-radius: 999px;\n  padding: 0.8rem 1rem;\n  font: inherit;\n  font-weight: 600;\n  background: var(--color-primary);\n  color: var(--color-surface);\n  cursor: pointer;\n  transition: transform 180ms ease, opacity 180ms ease;\n}\n.hidden-page__button--secondary[_ngcontent-%COMP%] {\n  background: transparent;\n  color: var(--color-on-surface);\n  border: 1px solid rgba(255, 255, 255, 0.14);\n}\n.hidden-page__button[_ngcontent-%COMP%]:hover {\n  transform: translateY(-1px);\n  opacity: 0.92;\n}\n.hidden-page__empty[_ngcontent-%COMP%] {\n  padding: 2rem;\n  text-align: center;\n  display: grid;\n  gap: 0.75rem;\n  justify-items: center;\n}\n.hidden-page__empty[_ngcontent-%COMP%]   .material-symbols-outlined[_ngcontent-%COMP%] {\n  font-size: 2.25rem;\n  color: var(--color-primary);\n}\n@media (max-width: 767px) {\n  .hidden-page__hero[_ngcontent-%COMP%], \n   .hidden-page__content[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .hidden-page__stats[_ngcontent-%COMP%] {\n    min-inline-size: auto;\n    inline-size: 100%;\n  }\n  .hidden-page__button[_ngcontent-%COMP%] {\n    inline-size: 100%;\n  }\n}\n/*# sourceMappingURL=hidden-page.component.css.map */"], changeDetection: 0 });
var HiddenPageComponent = _HiddenPageComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HiddenPageComponent, [{
    type: Component,
    args: [{ selector: "app-hidden-page", standalone: true, imports: [MobileNavComponent, SideNavComponent, TopNavbarComponent, TranslatePipe], changeDetection: ChangeDetectionStrategy.OnPush, template: `<app-top-navbar></app-top-navbar>
<app-side-nav></app-side-nav>

<main
  class="hidden-page"
  [class.hidden-page--collapsed]="layout.sidebarCollapsed()"
  [class.hidden-page--mobile]="layout.isMobile()">
  <header class="hidden-page__hero surface-card">
    <div>
      <p class="hidden-page__eyebrow text-label">{{ 'hidden.eyebrow' | translate }}</p>
      <h1 class="page-title hidden-page__title">{{ 'hidden.title' | translate }}</h1>
      <p class="hidden-page__subtitle">{{ 'hidden.subtitle' | translate }}</p>
    </div>

    <div class="hidden-page__stats">
      <span class="material-symbols-outlined">visibility_off</span>
      <div>
        <p class="hidden-page__stat-value">{{ hiddenCount() }}</p>
        <p class="hidden-page__stat-label">{{ 'hidden.hiddenCount' | translate }}</p>
      </div>
    </div>
  </header>

  <section class="hidden-page__section">
    <div class="hidden-page__section-head">
      <div>
        <p class="text-label">{{ 'hidden.currentlyHiddenLabel' | translate }}</p>
        <h2 class="card-title">{{ 'hidden.currentlyHiddenTitle' | translate }}</h2>
      </div>
    </div>

    @if (hiddenVideos.hiddenVideos().length > 0) {
      <div class="hidden-page__grid">
        @for (video of hiddenVideos.hiddenVideos(); track video.id) {
          <article class="hidden-page__card surface-card">
            <img
              class="hidden-page__image"
              [src]="video.thumbnailUrl"
              [alt]="video.title"
              loading="lazy"
              decoding="async"
              referrerpolicy="no-referrer" />

            <div class="hidden-page__content">
              <div>
                <p class="text-label">{{ video.category }}</p>
                <h3 class="card-title">{{ video.title }}</h3>
                <p class="hidden-page__meta">{{ video.creator.name }} \xB7 {{ video.duration }}</p>
              </div>

              <button
                type="button"
                class="hidden-page__button hidden-page__button--secondary"
                (click)="removeVideo(video.id)">
                {{ 'hidden.remove' | translate }}
              </button>
            </div>
          </article>
        }
      </div>
    } @else {
      <section class="hidden-page__empty surface-card">
        <span class="material-symbols-outlined">video_library</span>
        <h2 class="card-title">{{ 'hidden.emptyTitle' | translate }}</h2>
        <p>{{ 'hidden.emptyDescription' | translate }}</p>
      </section>
    }
  </section>

  <section class="hidden-page__section">
    <div class="hidden-page__section-head">
      <div>
        <p class="text-label">{{ 'hidden.addLabel' | translate }}</p>
        <h2 class="card-title">{{ 'hidden.addTitle' | translate }}</h2>
      </div>
    </div>

    @if (hiddenVideos.availableVideos().length > 0) {
      <div class="hidden-page__grid">
        @for (video of hiddenVideos.availableVideos(); track video.id) {
          <article class="hidden-page__card surface-card">
            <img
              class="hidden-page__image"
              [src]="video.thumbnailUrl"
              [alt]="video.title"
              loading="lazy"
              decoding="async"
              referrerpolicy="no-referrer" />

            <div class="hidden-page__content">
              <div>
                <p class="text-label">{{ video.category }}</p>
                <h3 class="card-title">{{ video.title }}</h3>
                <p class="hidden-page__meta">{{ video.creator.name }} \xB7 {{ video.duration }}</p>
              </div>

              <button type="button" class="hidden-page__button" (click)="addVideo(video.id)">
                {{ 'hidden.addVideo' | translate }}
              </button>
            </div>
          </article>
        }
      </div>
    } @else {
      <section class="hidden-page__empty surface-card">
        <span class="material-symbols-outlined">task_alt</span>
        <h2 class="card-title">{{ 'hidden.libraryEmptyTitle' | translate }}</h2>
        <p>{{ 'hidden.libraryEmptyDescription' | translate }}</p>
      </section>
    }
  </section>
</main>

<app-mobile-nav></app-mobile-nav>
`, styles: ["/* src/app/features/hidden/pages/hidden-page.component.scss */\n:host {\n  display: block;\n}\n.hidden-page {\n  padding: calc(var(--top-nav-height) + 2rem) 2rem 6rem;\n  margin-inline-start: var(--sidebar-width);\n  min-block-size: 100vh;\n  display: grid;\n  gap: 1.5rem;\n}\n.hidden-page--collapsed {\n  margin-inline-start: var(--sidebar-collapsed-width);\n}\n.hidden-page--mobile {\n  margin-inline-start: 0;\n  padding: calc(var(--top-nav-height) + 1rem) 1rem 6rem;\n}\n.hidden-page__hero {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  gap: 1rem;\n}\n.hidden-page__eyebrow,\n.hidden-page__title,\n.hidden-page__subtitle,\n.hidden-page__stat-value,\n.hidden-page__stat-label,\n.hidden-page__meta {\n  margin: 0;\n}\n.hidden-page__subtitle,\n.hidden-page__meta {\n  color: var(--color-muted);\n}\n.hidden-page__stats {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  min-inline-size: 12rem;\n  padding: 1rem 1.25rem;\n  border-radius: 1.25rem;\n  background: rgba(255, 255, 255, 0.03);\n}\n.hidden-page__stats .material-symbols-outlined {\n  font-size: 2rem;\n  color: var(--color-primary);\n}\n.hidden-page__stat-value {\n  font-size: 1.8rem;\n  font-weight: 700;\n}\n.hidden-page__stat-label {\n  color: var(--color-muted);\n}\n.hidden-page__section {\n  display: grid;\n  gap: 1rem;\n}\n.hidden-page__grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(18rem, 1fr));\n  gap: 1rem;\n}\n.hidden-page__card {\n  overflow: hidden;\n}\n.hidden-page__image {\n  inline-size: 100%;\n  aspect-ratio: 16/9;\n  object-fit: cover;\n  display: block;\n}\n.hidden-page__content {\n  display: flex;\n  justify-content: space-between;\n  align-items: end;\n  gap: 1rem;\n  padding: 1rem;\n}\n.hidden-page__button {\n  border: none;\n  border-radius: 999px;\n  padding: 0.8rem 1rem;\n  font: inherit;\n  font-weight: 600;\n  background: var(--color-primary);\n  color: var(--color-surface);\n  cursor: pointer;\n  transition: transform 180ms ease, opacity 180ms ease;\n}\n.hidden-page__button--secondary {\n  background: transparent;\n  color: var(--color-on-surface);\n  border: 1px solid rgba(255, 255, 255, 0.14);\n}\n.hidden-page__button:hover {\n  transform: translateY(-1px);\n  opacity: 0.92;\n}\n.hidden-page__empty {\n  padding: 2rem;\n  text-align: center;\n  display: grid;\n  gap: 0.75rem;\n  justify-items: center;\n}\n.hidden-page__empty .material-symbols-outlined {\n  font-size: 2.25rem;\n  color: var(--color-primary);\n}\n@media (max-width: 767px) {\n  .hidden-page__hero,\n  .hidden-page__content {\n    flex-direction: column;\n  }\n  .hidden-page__stats {\n    min-inline-size: auto;\n    inline-size: 100%;\n  }\n  .hidden-page__button {\n    inline-size: 100%;\n  }\n}\n/*# sourceMappingURL=hidden-page.component.css.map */\n"] }]
  }], () => [], { onResize: [{
    type: HostListener,
    args: ["window:resize"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HiddenPageComponent, { className: "HiddenPageComponent", filePath: "src/app/features/hidden/pages/hidden-page.component.ts", lineNumber: 25 });
})();
export {
  HiddenPageComponent
};
//# sourceMappingURL=chunk-RFZWWSWL.js.map
