!(function () {
  var O,
    e,
    a,
    t,
    s,
    N = function (e, r) {
      if (!(this instanceof N)) return new N(e, r);
      var a,
        t,
        s = {
          direction: "horizontal",
          touchEventsTarget: "container",
          initialSlide: 0,
          speed: 300,
          autoplay: !1,
          autoplayDisableOnInteraction: !0,
          autoplayStopOnLast: !1,
          iOSEdgeSwipeDetection: !1,
          iOSEdgeSwipeThreshold: 20,
          freeMode: !1,
          freeModeMomentum: !0,
          freeModeMomentumRatio: 1,
          freeModeMomentumBounce: !0,
          freeModeMomentumBounceRatio: 1,
          freeModeMomentumVelocityRatio: 1,
          freeModeSticky: !1,
          freeModeMinimumVelocity: 0.02,
          autoHeight: !1,
          setWrapperSize: !1,
          virtualTranslate: !1,
          effect: "slide",
          coverflow: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: !0,
          },
          flip: { slideShadows: !0, limitRotation: !0 },
          cube: {
            slideShadows: !0,
            shadow: !0,
            shadowOffset: 20,
            shadowScale: 0.94,
          },
          fade: { crossFade: !1 },
          parallax: !1,
          zoom: !1,
          zoomMax: 3,
          zoomMin: 1,
          zoomToggle: !0,
          scrollbar: null,
          scrollbarHide: !0,
          scrollbarDraggable: !1,
          scrollbarSnapOnRelease: !1,
          keyboardControl: !1,
          mousewheelControl: !1,
          mousewheelReleaseOnEdges: !1,
          mousewheelInvert: !1,
          mousewheelForceToAxis: !1,
          mousewheelSensitivity: 1,
          mousewheelEventsTarged: "container",
          hashnav: !1,
          hashnavWatchState: !1,
          history: !1,
          replaceState: !1,
          breakpoints: void 0,
          spaceBetween: 0,
          slidesPerView: 1,
          slidesPerColumn: 1,
          slidesPerColumnFill: "column",
          slidesPerGroup: 1,
          centeredSlides: !1,
          slidesOffsetBefore: 0,
          slidesOffsetAfter: 0,
          roundLengths: !1,
          touchRatio: 1,
          touchAngle: 45,
          simulateTouch: !0,
          shortSwipes: !0,
          longSwipes: !0,
          longSwipesRatio: 0.5,
          longSwipesMs: 300,
          followFinger: !0,
          onlyExternal: !1,
          threshold: 0,
          touchMoveStopPropagation: !0,
          touchReleaseOnEdges: !1,
          uniqueNavElements: !0,
          pagination: null,
          paginationElement: "span",
          paginationClickable: !1,
          paginationHide: !1,
          paginationBulletRender: null,
          paginationProgressRender: null,
          paginationFractionRender: null,
          paginationCustomRender: null,
          paginationType: "bullets",
          resistance: !0,
          resistanceRatio: 0.85,
          nextButton: null,
          prevButton: null,
          watchSlidesProgress: !1,
          watchSlidesVisibility: !1,
          grabCursor: !1,
          preventClicks: !0,
          preventClicksPropagation: !0,
          slideToClickedSlide: !1,
          lazyLoading: !1,
          lazyLoadingInPrevNext: !1,
          lazyLoadingInPrevNextAmount: 1,
          lazyLoadingOnTransitionStart: !1,
          preloadImages: !0,
          updateOnImagesReady: !0,
          loop: !1,
          loopAdditionalSlides: 0,
          loopedSlides: null,
          control: void 0,
          controlInverse: !1,
          controlBy: "slide",
          normalizeSlideIndex: !0,
          allowSwipeToPrev: !0,
          allowSwipeToNext: !0,
          swipeHandler: null,
          noSwiping: !0,
          noSwipingClass: "swiper-no-swiping",
          passiveListeners: !0,
          containerModifierClass: "swiper-container-",
          slideClass: "swiper-slide",
          slideActiveClass: "swiper-slide-active",
          slideDuplicateActiveClass: "swiper-slide-duplicate-active",
          slideVisibleClass: "swiper-slide-visible",
          slideDuplicateClass: "swiper-slide-duplicate",
          slideNextClass: "swiper-slide-next",
          slideDuplicateNextClass: "swiper-slide-duplicate-next",
          slidePrevClass: "swiper-slide-prev",
          slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
          wrapperClass: "swiper-wrapper",
          bulletClass: "swiper-pagination-bullet",
          bulletActiveClass: "swiper-pagination-bullet-active",
          buttonDisabledClass: "swiper-button-disabled",
          paginationCurrentClass: "swiper-pagination-current",
          paginationTotalClass: "swiper-pagination-total",
          paginationHiddenClass: "swiper-pagination-hidden",
          paginationProgressbarClass: "swiper-pagination-progressbar",
          paginationClickableClass: "swiper-pagination-clickable",
          paginationModifierClass: "swiper-pagination-",
          paginationElementID: "swiper-pagination-item-",
          lazyLoadingClass: "swiper-lazy",
          lazyStatusLoadingClass: "swiper-lazy-loading",
          lazyStatusLoadedClass: "swiper-lazy-loaded",
          lazyPreloaderClass: "swiper-lazy-preloader",
          notificationClass: "swiper-notification",
          preloaderClass: "preloader",
          zoomContainerClass: "swiper-zoom-container",
          observer: !1,
          observeParents: !1,
          a11y: !1,
          prevSlideMessage: "Previous slide",
          nextSlideMessage: "Next slide",
          firstSlideMessage: "This is the first slide",
          lastSlideMessage: "This is the last slide",
          paginationBulletMessage: "Go to slide {{index}}",
          runCallbacksOnInit: !0,
        },
        i = r && r.virtualTranslate,
        n = {};
      for (a in (r = r || {}))
        if (
          "object" != typeof r[a] ||
          null === r[a] ||
          r[a].nodeType ||
          r[a] === window ||
          r[a] === document ||
          (void 0 !== R && r[a] instanceof R) ||
          ("undefined" != typeof jQuery && r[a] instanceof jQuery)
        )
          n[a] = r[a];
        else for (var o in ((n[a] = {}), r[a])) n[a][o] = r[a][o];
      for (t in s)
        if (void 0 === r[t]) r[t] = s[t];
        else if ("object" == typeof r[t])
          for (var l in s[t]) void 0 === r[t][l] && (r[t][l] = s[t][l]);
      var g = this;
      if (
        ((g.params = r),
        (g.originalParams = n),
        (g.classNames = []),
        void 0 !== O && void 0 !== R && (O = R),
        (void 0 !== O ||
          (O =
            void 0 === R ? window.Dom7 || window.Zepto || window.jQuery : R)) &&
          ((g.$ = O),
          (g.currentBreakpoint = void 0),
          (g.getActiveBreakpoint = function () {
            if (!g.params.breakpoints) return !1;
            var e,
              a = !1,
              t = [];
            for (e in g.params.breakpoints)
              g.params.breakpoints.hasOwnProperty(e) && t.push(e);
            t.sort(function (e, a) {
              return parseInt(e, 10) > parseInt(a, 10);
            });
            for (var s = 0; s < t.length; s++)
              (e = t[s]) >= window.innerWidth && !a && (a = e);
            return a || "max";
          }),
          (g.setBreakpoint = function () {
            var e = g.getActiveBreakpoint();
            if (e && g.currentBreakpoint !== e) {
              var a,
                t =
                  e in g.params.breakpoints
                    ? g.params.breakpoints[e]
                    : g.originalParams,
                s = g.params.loop && t.slidesPerView !== g.params.slidesPerView;
              for (a in t) g.params[a] = t[a];
              (g.currentBreakpoint = e), s && g.destroyLoop && g.reLoop(!0);
            }
          }),
          g.params.breakpoints && g.setBreakpoint(),
          (g.container = O(e)),
          0 !== g.container.length))
      ) {
        if (1 < g.container.length) {
          var p = [];
          return (
            g.container.each(function () {
              p.push(new N(this, r));
            }),
            p
          );
        }
        (g.container[0].swiper = g).container.data("swiper", g),
          g.classNames.push(
            g.params.containerModifierClass + g.params.direction
          ),
          g.params.freeMode &&
            g.classNames.push(g.params.containerModifierClass + "free-mode"),
          g.support.flexbox ||
            (g.classNames.push(g.params.containerModifierClass + "no-flexbox"),
            (g.params.slidesPerColumn = 1)),
          g.params.autoHeight &&
            g.classNames.push(g.params.containerModifierClass + "autoheight"),
          (g.params.parallax || g.params.watchSlidesVisibility) &&
            (g.params.watchSlidesProgress = !0),
          g.params.touchReleaseOnEdges && (g.params.resistanceRatio = 0),
          0 <= ["cube", "coverflow", "flip"].indexOf(g.params.effect) &&
            (g.support.transforms3d
              ? ((g.params.watchSlidesProgress = !0),
                g.classNames.push(g.params.containerModifierClass + "3d"))
              : (g.params.effect = "slide")),
          "slide" !== g.params.effect &&
            g.classNames.push(
              g.params.containerModifierClass + g.params.effect
            ),
          "cube" === g.params.effect &&
            ((g.params.resistanceRatio = 0),
            (g.params.slidesPerView = 1),
            (g.params.slidesPerColumn = 1),
            (g.params.slidesPerGroup = 1),
            (g.params.centeredSlides = !1),
            (g.params.spaceBetween = 0),
            (g.params.virtualTranslate = !0)),
          ("fade" !== g.params.effect && "flip" !== g.params.effect) ||
            ((g.params.slidesPerView = 1),
            (g.params.slidesPerColumn = 1),
            (g.params.slidesPerGroup = 1),
            (g.params.watchSlidesProgress = !0),
            void (g.params.spaceBetween = 0) === i &&
              (g.params.virtualTranslate = !0)),
          g.params.grabCursor && g.support.touch && (g.params.grabCursor = !1),
          (g.wrapper = g.container.children("." + g.params.wrapperClass)),
          g.params.pagination &&
            ((g.paginationContainer = O(g.params.pagination)),
            g.params.uniqueNavElements &&
              "string" == typeof g.params.pagination &&
              1 < g.paginationContainer.length &&
              1 === g.container.find(g.params.pagination).length &&
              (g.paginationContainer = g.container.find(g.params.pagination)),
            "bullets" === g.params.paginationType &&
            g.params.paginationClickable
              ? g.paginationContainer.addClass(
                  g.params.paginationModifierClass + "clickable"
                )
              : (g.params.paginationClickable = !1),
            g.paginationContainer.addClass(
              g.params.paginationModifierClass + g.params.paginationType
            )),
          (g.params.nextButton || g.params.prevButton) &&
            (g.params.nextButton &&
              ((g.nextButton = O(g.params.nextButton)),
              g.params.uniqueNavElements &&
                "string" == typeof g.params.nextButton &&
                1 < g.nextButton.length &&
                1 === g.container.find(g.params.nextButton).length &&
                (g.nextButton = g.container.find(g.params.nextButton))),
            g.params.prevButton &&
              ((g.prevButton = O(g.params.prevButton)),
              g.params.uniqueNavElements &&
                "string" == typeof g.params.prevButton &&
                1 < g.prevButton.length &&
                1 === g.container.find(g.params.prevButton).length &&
                (g.prevButton = g.container.find(g.params.prevButton)))),
          (g.isHorizontal = function () {
            return "horizontal" === g.params.direction;
          }),
          (g.rtl =
            g.isHorizontal() &&
            ("rtl" === g.container[0].dir.toLowerCase() ||
              "rtl" === g.container.css("direction"))),
          g.rtl && g.classNames.push(g.params.containerModifierClass + "rtl"),
          g.rtl && (g.wrongRTL = "-webkit-box" === g.wrapper.css("display")),
          1 < g.params.slidesPerColumn &&
            g.classNames.push(g.params.containerModifierClass + "multirow"),
          g.device.android &&
            g.classNames.push(g.params.containerModifierClass + "android"),
          g.container.addClass(g.classNames.join(" ")),
          (g.translate = 0),
          (g.progress = 0),
          (g.velocity = 0),
          (g.lockSwipeToNext = function () {
            (g.params.allowSwipeToNext = !1) === g.params.allowSwipeToPrev &&
              g.params.grabCursor &&
              g.unsetGrabCursor();
          }),
          (g.lockSwipeToPrev = function () {
            (g.params.allowSwipeToPrev = !1) === g.params.allowSwipeToNext &&
              g.params.grabCursor &&
              g.unsetGrabCursor();
          }),
          (g.lockSwipes = function () {
            (g.params.allowSwipeToNext = g.params.allowSwipeToPrev = !1),
              g.params.grabCursor && g.unsetGrabCursor();
          }),
          (g.unlockSwipeToNext = function () {
            (g.params.allowSwipeToNext = !0) === g.params.allowSwipeToPrev &&
              g.params.grabCursor &&
              g.setGrabCursor();
          }),
          (g.unlockSwipeToPrev = function () {
            (g.params.allowSwipeToPrev = !0) === g.params.allowSwipeToNext &&
              g.params.grabCursor &&
              g.setGrabCursor();
          }),
          (g.unlockSwipes = function () {
            (g.params.allowSwipeToNext = g.params.allowSwipeToPrev = !0),
              g.params.grabCursor && g.setGrabCursor();
          }),
          (g.setGrabCursor = function (e) {
            (g.container[0].style.cursor = "move"),
              (g.container[0].style.cursor = e
                ? "-webkit-grabbing"
                : "-webkit-grab"),
              (g.container[0].style.cursor = e ? "-moz-grabbin" : "-moz-grab"),
              (g.container[0].style.cursor = e ? "grabbing" : "grab");
          }),
          (g.unsetGrabCursor = function () {
            g.container[0].style.cursor = "";
          }),
          g.params.grabCursor && g.setGrabCursor(),
          (g.imagesToLoad = []),
          (g.imagesLoaded = 0),
          (g.loadImage = function (e, a, t, s, i, r) {
            function n() {
              r && r();
            }
            (!e.complete || !i) && a
              ? (((i = new window.Image()).onload = n),
                (i.onerror = n),
                s && (i.sizes = s),
                t && (i.srcset = t),
                a && (i.src = a))
              : n();
          }),
          (g.preloadImages = function () {
            function e() {
              null != g &&
                g &&
                (void 0 !== g.imagesLoaded && g.imagesLoaded++,
                g.imagesLoaded === g.imagesToLoad.length &&
                  (g.params.updateOnImagesReady && g.update(),
                  g.emit("onImagesReady", g)));
            }
            g.imagesToLoad = g.container.find("img");
            for (var a = 0; a < g.imagesToLoad.length; a++)
              g.loadImage(
                g.imagesToLoad[a],
                g.imagesToLoad[a].currentSrc ||
                  g.imagesToLoad[a].getAttribute("src"),
                g.imagesToLoad[a].srcset ||
                  g.imagesToLoad[a].getAttribute("srcset"),
                g.imagesToLoad[a].sizes ||
                  g.imagesToLoad[a].getAttribute("sizes"),
                !0,
                e
              );
          }),
          (g.autoplayTimeoutId = void 0),
          (g.autoplaying = !1),
          (g.autoplayPaused = !1),
          (g.startAutoplay = function () {
            return (
              void 0 === g.autoplayTimeoutId &&
              !!g.params.autoplay &&
              !g.autoplaying &&
              ((g.autoplaying = !0), g.emit("onAutoplayStart", g), void D())
            );
          }),
          (g.stopAutoplay = function (e) {
            g.autoplayTimeoutId &&
              (g.autoplayTimeoutId && clearTimeout(g.autoplayTimeoutId),
              (g.autoplaying = !1),
              (g.autoplayTimeoutId = void 0),
              g.emit("onAutoplayStop", g));
          }),
          (g.pauseAutoplay = function (e) {
            g.autoplayPaused ||
              (g.autoplayTimeoutId && clearTimeout(g.autoplayTimeoutId),
              (g.autoplayPaused = !0),
              0 === e
                ? ((g.autoplayPaused = !1), D())
                : g.wrapper.transitionEnd(function () {
                    g &&
                      ((g.autoplayPaused = !1),
                      g.autoplaying ? D() : g.stopAutoplay());
                  }));
          }),
          (g.minTranslate = function () {
            return -g.snapGrid[0];
          }),
          (g.maxTranslate = function () {
            return -g.snapGrid[g.snapGrid.length - 1];
          }),
          (g.updateAutoHeight = function () {
            var e,
              a,
              t = [],
              s = 0;
            if ("auto" !== g.params.slidesPerView && 1 < g.params.slidesPerView)
              for (e = 0; e < Math.ceil(g.params.slidesPerView); e++) {
                var i = g.activeIndex + e;
                if (i > g.slides.length) break;
                t.push(g.slides.eq(i)[0]);
              }
            else t.push(g.slides.eq(g.activeIndex)[0]);
            for (e = 0; e < t.length; e++)
              void 0 !== t[e] && (s = s < (a = t[e].offsetHeight) ? a : s);
            s && g.wrapper.css("height", s + "px");
          }),
          (g.updateContainerSize = function () {
            var e =
                void 0 !== g.params.width
                  ? g.params.width
                  : g.container[0].clientWidth,
              a =
                void 0 !== g.params.height
                  ? g.params.height
                  : g.container[0].clientHeight;
            (0 === e && g.isHorizontal()) ||
              (0 === a && !g.isHorizontal()) ||
              ((e =
                e -
                parseInt(g.container.css("padding-left"), 10) -
                parseInt(g.container.css("padding-right"), 10)),
              (a =
                a -
                parseInt(g.container.css("padding-top"), 10) -
                parseInt(g.container.css("padding-bottom"), 10)),
              (g.width = e),
              (g.height = a),
              (g.size = g.isHorizontal() ? g.width : g.height));
          }),
          (g.updateSlidesSize = function () {
            (g.slides = g.wrapper.children("." + g.params.slideClass)),
              (g.snapGrid = []),
              (g.slidesGrid = []),
              (g.slidesSizesGrid = []);
            var e,
              a,
              t = g.params.spaceBetween,
              s = -g.params.slidesOffsetBefore,
              i = 0,
              r = 0;
            if (void 0 !== g.size) {
              "string" == typeof t &&
                0 <= t.indexOf("%") &&
                (t = (parseFloat(t.replace("%", "")) / 100) * g.size),
                (g.virtualSize = -t),
                g.rtl
                  ? g.slides.css({ marginLeft: "", marginTop: "" })
                  : g.slides.css({ marginRight: "", marginBottom: "" }),
                1 < g.params.slidesPerColumn &&
                  ((e =
                    Math.floor(g.slides.length / g.params.slidesPerColumn) ===
                    g.slides.length / g.params.slidesPerColumn
                      ? g.slides.length
                      : Math.ceil(g.slides.length / g.params.slidesPerColumn) *
                        g.params.slidesPerColumn),
                  "auto" !== g.params.slidesPerView &&
                    "row" === g.params.slidesPerColumnFill &&
                    (e = Math.max(
                      e,
                      g.params.slidesPerView * g.params.slidesPerColumn
                    )));
              for (
                var n,
                  o = g.params.slidesPerColumn,
                  l = e / o,
                  p = l - (g.params.slidesPerColumn * l - g.slides.length),
                  d = 0;
                d < g.slides.length;
                d++
              ) {
                a = 0;
                var u,
                  m,
                  c,
                  h = g.slides.eq(d);
                1 < g.params.slidesPerColumn &&
                  ("column" === g.params.slidesPerColumnFill
                    ? ((c = d - (m = Math.floor(d / o)) * o),
                      (p < m || (m === p && c === o - 1)) &&
                        ++c >= o &&
                        ((c = 0), m++),
                      (u = m + (c * e) / o),
                      h.css({
                        "-webkit-box-ordinal-group": u,
                        "-moz-box-ordinal-group": u,
                        "-ms-flex-order": u,
                        "-webkit-order": u,
                        order: u,
                      }))
                    : (m = d - (c = Math.floor(d / l)) * l),
                  h
                    .css(
                      "margin-" + (g.isHorizontal() ? "top" : "left"),
                      0 !== c &&
                        g.params.spaceBetween &&
                        g.params.spaceBetween + "px"
                    )
                    .attr("data-swiper-column", m)
                    .attr("data-swiper-row", c)),
                  "none" !== h.css("display") &&
                    ("auto" === g.params.slidesPerView
                      ? ((a = g.isHorizontal()
                          ? h.outerWidth(!0)
                          : h.outerHeight(!0)),
                        g.params.roundLengths && (a = L(a)))
                      : ((a =
                          (g.size - (g.params.slidesPerView - 1) * t) /
                          g.params.slidesPerView),
                        g.params.roundLengths && (a = L(a)),
                        g.isHorizontal()
                          ? (g.slides[d].style.width = a + "px")
                          : (g.slides[d].style.height = a + "px")),
                    (g.slides[d].swiperSlideSize = a),
                    g.slidesSizesGrid.push(a),
                    g.params.centeredSlides
                      ? ((s = s + a / 2 + i / 2 + t),
                        0 === i && 0 !== d && (s = s - g.size / 2 - t),
                        0 === d && (s = s - g.size / 2 - t),
                        Math.abs(s) < 0.001 && (s = 0),
                        r % g.params.slidesPerGroup == 0 && g.snapGrid.push(s),
                        g.slidesGrid.push(s))
                      : (r % g.params.slidesPerGroup == 0 && g.snapGrid.push(s),
                        g.slidesGrid.push(s),
                        (s = s + a + t)),
                    (g.virtualSize += a + t),
                    (i = a),
                    r++);
              }
              if (
                ((g.virtualSize =
                  Math.max(g.virtualSize, g.size) + g.params.slidesOffsetAfter),
                g.rtl &&
                  g.wrongRTL &&
                  ("slide" === g.params.effect ||
                    "coverflow" === g.params.effect) &&
                  g.wrapper.css({
                    width: g.virtualSize + g.params.spaceBetween + "px",
                  }),
                (g.support.flexbox && !g.params.setWrapperSize) ||
                  (g.isHorizontal()
                    ? g.wrapper.css({
                        width: g.virtualSize + g.params.spaceBetween + "px",
                      })
                    : g.wrapper.css({
                        height: g.virtualSize + g.params.spaceBetween + "px",
                      })),
                1 < g.params.slidesPerColumn &&
                  ((g.virtualSize = (a + g.params.spaceBetween) * e),
                  (g.virtualSize =
                    Math.ceil(g.virtualSize / g.params.slidesPerColumn) -
                    g.params.spaceBetween),
                  g.isHorizontal()
                    ? g.wrapper.css({
                        width: g.virtualSize + g.params.spaceBetween + "px",
                      })
                    : g.wrapper.css({
                        height: g.virtualSize + g.params.spaceBetween + "px",
                      }),
                  g.params.centeredSlides))
              ) {
                for (n = [], d = 0; d < g.snapGrid.length; d++)
                  g.snapGrid[d] < g.virtualSize + g.snapGrid[0] &&
                    n.push(g.snapGrid[d]);
                g.snapGrid = n;
              }
              if (!g.params.centeredSlides) {
                for (n = [], d = 0; d < g.snapGrid.length; d++)
                  g.snapGrid[d] <= g.virtualSize - g.size &&
                    n.push(g.snapGrid[d]);
                (g.snapGrid = n),
                  1 <
                    Math.floor(g.virtualSize - g.size) -
                      Math.floor(g.snapGrid[g.snapGrid.length - 1]) &&
                    g.snapGrid.push(g.virtualSize - g.size);
              }
              0 === g.snapGrid.length && (g.snapGrid = [0]),
                0 !== g.params.spaceBetween &&
                  (g.isHorizontal()
                    ? g.rtl
                      ? g.slides.css({ marginLeft: t + "px" })
                      : g.slides.css({ marginRight: t + "px" })
                    : g.slides.css({ marginBottom: t + "px" })),
                g.params.watchSlidesProgress && g.updateSlidesOffset();
            }
          }),
          (g.updateSlidesOffset = function () {
            for (var e = 0; e < g.slides.length; e++)
              g.slides[e].swiperSlideOffset = g.isHorizontal()
                ? g.slides[e].offsetLeft
                : g.slides[e].offsetTop;
          }),
          (g.currentSlidesPerView = function () {
            var e,
              a = 1;
            if (g.params.centeredSlides) {
              for (
                var t,
                  s = g.slides[g.activeIndex].swiperSlideSize,
                  i = g.activeIndex + 1;
                i < g.slides.length;
                i++
              )
                g.slides[i] &&
                  !t &&
                  (a++,
                  (s += g.slides[i].swiperSlideSize) > g.size && (t = !0));
              for (e = g.activeIndex - 1; 0 <= e; e--)
                g.slides[e] &&
                  !t &&
                  (a++,
                  (s += g.slides[e].swiperSlideSize) > g.size && (t = !0));
            } else
              for (i = g.activeIndex + 1; i < g.slides.length; i++)
                g.slidesGrid[i] - g.slidesGrid[g.activeIndex] < g.size && a++;
            return a;
          }),
          (g.updateSlidesProgress = function (e) {
            if (
              (void 0 === e && (e = g.translate || 0), 0 !== g.slides.length)
            ) {
              void 0 === g.slides[0].swiperSlideOffset &&
                g.updateSlidesOffset();
              var a = -e;
              g.rtl && (a = e),
                g.slides.removeClass(g.params.slideVisibleClass);
              for (var t = 0; t < g.slides.length; t++) {
                var s,
                  i,
                  r = g.slides[t],
                  n =
                    (a +
                      (g.params.centeredSlides ? g.minTranslate() : 0) -
                      r.swiperSlideOffset) /
                    (r.swiperSlideSize + g.params.spaceBetween);
                g.params.watchSlidesVisibility &&
                  ((i =
                    (s = -(a - r.swiperSlideOffset)) + g.slidesSizesGrid[t]),
                  ((0 <= s && s < g.size) ||
                    (0 < i && i <= g.size) ||
                    (s <= 0 && i >= g.size)) &&
                    g.slides.eq(t).addClass(g.params.slideVisibleClass)),
                  (r.progress = g.rtl ? -n : n);
              }
            }
          }),
          (g.updateProgress = function (e) {
            void 0 === e && (e = g.translate || 0);
            var a = g.maxTranslate() - g.minTranslate(),
              t = g.isBeginning,
              s = g.isEnd;
            0 == a
              ? ((g.progress = 0), (g.isBeginning = g.isEnd = !0))
              : ((g.progress = (e - g.minTranslate()) / a),
                (g.isBeginning = g.progress <= 0),
                (g.isEnd = 1 <= g.progress)),
              g.isBeginning && !t && g.emit("onReachBeginning", g),
              g.isEnd && !s && g.emit("onReachEnd", g),
              g.params.watchSlidesProgress && g.updateSlidesProgress(e),
              g.emit("onProgress", g, g.progress);
          }),
          (g.updateActiveIndex = function () {
            for (
              var e, a, t = g.rtl ? g.translate : -g.translate, s = 0;
              s < g.slidesGrid.length;
              s++
            )
              void 0 !== g.slidesGrid[s + 1]
                ? t >= g.slidesGrid[s] &&
                  t <
                    g.slidesGrid[s + 1] -
                      (g.slidesGrid[s + 1] - g.slidesGrid[s]) / 2
                  ? (e = s)
                  : t >= g.slidesGrid[s] &&
                    t < g.slidesGrid[s + 1] &&
                    (e = s + 1)
                : t >= g.slidesGrid[s] && (e = s);
            g.params.normalizeSlideIndex && (e < 0 || void 0 === e) && (e = 0),
              (a = Math.floor(e / g.params.slidesPerGroup)) >=
                g.snapGrid.length && (a = g.snapGrid.length - 1),
              e !== g.activeIndex &&
                ((g.snapIndex = a),
                (g.previousIndex = g.activeIndex),
                (g.activeIndex = e),
                g.updateClasses(),
                g.updateRealIndex());
          }),
          (g.updateRealIndex = function () {
            g.realIndex = parseInt(
              g.slides.eq(g.activeIndex).attr("data-swiper-slide-index") ||
                g.activeIndex,
              10
            );
          }),
          (g.updateClasses = function () {
            g.slides.removeClass(
              g.params.slideActiveClass +
                " " +
                g.params.slideNextClass +
                " " +
                g.params.slidePrevClass +
                " " +
                g.params.slideDuplicateActiveClass +
                " " +
                g.params.slideDuplicateNextClass +
                " " +
                g.params.slideDuplicatePrevClass
            );
            var e = g.slides.eq(g.activeIndex);
            e.addClass(g.params.slideActiveClass),
              r.loop &&
                (e.hasClass(g.params.slideDuplicateClass)
                  ? g.wrapper.children(
                      "." +
                        g.params.slideClass +
                        ":not(." +
                        g.params.slideDuplicateClass +
                        ')[data-swiper-slide-index="' +
                        g.realIndex +
                        '"]'
                    )
                  : g.wrapper.children(
                      "." +
                        g.params.slideClass +
                        "." +
                        g.params.slideDuplicateClass +
                        '[data-swiper-slide-index="' +
                        g.realIndex +
                        '"]'
                    )
                ).addClass(g.params.slideDuplicateActiveClass);
            var a = e
              .next("." + g.params.slideClass)
              .addClass(g.params.slideNextClass);
            g.params.loop &&
              0 === a.length &&
              (a = g.slides.eq(0)).addClass(g.params.slideNextClass);
            var t,
              s,
              i = e
                .prev("." + g.params.slideClass)
                .addClass(g.params.slidePrevClass);
            g.params.loop &&
              0 === i.length &&
              (i = g.slides.eq(-1)).addClass(g.params.slidePrevClass),
              r.loop &&
                ((a.hasClass(g.params.slideDuplicateClass)
                  ? g.wrapper.children(
                      "." +
                        g.params.slideClass +
                        ":not(." +
                        g.params.slideDuplicateClass +
                        ')[data-swiper-slide-index="' +
                        a.attr("data-swiper-slide-index") +
                        '"]'
                    )
                  : g.wrapper.children(
                      "." +
                        g.params.slideClass +
                        "." +
                        g.params.slideDuplicateClass +
                        '[data-swiper-slide-index="' +
                        a.attr("data-swiper-slide-index") +
                        '"]'
                    )
                ).addClass(g.params.slideDuplicateNextClass),
                (i.hasClass(g.params.slideDuplicateClass)
                  ? g.wrapper.children(
                      "." +
                        g.params.slideClass +
                        ":not(." +
                        g.params.slideDuplicateClass +
                        ')[data-swiper-slide-index="' +
                        i.attr("data-swiper-slide-index") +
                        '"]'
                    )
                  : g.wrapper.children(
                      "." +
                        g.params.slideClass +
                        "." +
                        g.params.slideDuplicateClass +
                        '[data-swiper-slide-index="' +
                        i.attr("data-swiper-slide-index") +
                        '"]'
                    )
                ).addClass(g.params.slideDuplicatePrevClass)),
              g.paginationContainer &&
                0 < g.paginationContainer.length &&
                ((s = g.params.loop
                  ? Math.ceil(
                      (g.slides.length - 2 * g.loopedSlides) /
                        g.params.slidesPerGroup
                    )
                  : g.snapGrid.length),
                g.params.loop
                  ? ((t = Math.ceil(
                      (g.activeIndex - g.loopedSlides) / g.params.slidesPerGroup
                    )) >
                      g.slides.length - 1 - 2 * g.loopedSlides &&
                      (t -= g.slides.length - 2 * g.loopedSlides),
                    s - 1 < t && (t -= s),
                    t < 0 &&
                      "bullets" !== g.params.paginationType &&
                      (t = s + t))
                  : (t =
                      void 0 !== g.snapIndex
                        ? g.snapIndex
                        : g.activeIndex || 0),
                "bullets" === g.params.paginationType &&
                  g.bullets &&
                  0 < g.bullets.length &&
                  (g.bullets.removeClass(g.params.bulletActiveClass),
                  1 < g.paginationContainer.length
                    ? g.bullets.each(function () {
                        O(this).index() === t &&
                          O(this).addClass(g.params.bulletActiveClass);
                      })
                    : g.bullets.eq(t).addClass(g.params.bulletActiveClass)),
                "fraction" === g.params.paginationType &&
                  (g.paginationContainer
                    .find("." + g.params.paginationCurrentClass)
                    .text(t + 1),
                  g.paginationContainer
                    .find("." + g.params.paginationTotalClass)
                    .text(s)),
                "progress" === g.params.paginationType &&
                  ((a = e = (t + 1) / s),
                  (i = 1),
                  g.isHorizontal() || ((i = e), (a = 1)),
                  g.paginationContainer
                    .find("." + g.params.paginationProgressbarClass)
                    .transform(
                      "translate3d(0,0,0) scaleX(" + a + ") scaleY(" + i + ")"
                    )
                    .transition(g.params.speed)),
                "custom" === g.params.paginationType &&
                  g.params.paginationCustomRender &&
                  (g.paginationContainer.html(
                    g.params.paginationCustomRender(g, t + 1, s)
                  ),
                  g.emit("onPaginationRendered", g, g.paginationContainer[0]))),
              g.params.loop ||
                (g.params.prevButton &&
                  g.prevButton &&
                  0 < g.prevButton.length &&
                  (g.isBeginning
                    ? (g.prevButton.addClass(g.params.buttonDisabledClass),
                      g.params.a11y && g.a11y && g.a11y.disable(g.prevButton))
                    : (g.prevButton.removeClass(g.params.buttonDisabledClass),
                      g.params.a11y && g.a11y && g.a11y.enable(g.prevButton))),
                g.params.nextButton &&
                  g.nextButton &&
                  0 < g.nextButton.length &&
                  (g.isEnd
                    ? (g.nextButton.addClass(g.params.buttonDisabledClass),
                      g.params.a11y && g.a11y && g.a11y.disable(g.nextButton))
                    : (g.nextButton.removeClass(g.params.buttonDisabledClass),
                      g.params.a11y && g.a11y && g.a11y.enable(g.nextButton))));
          }),
          (g.updatePagination = function () {
            if (
              g.params.pagination &&
              g.paginationContainer &&
              0 < g.paginationContainer.length
            ) {
              var e = "";
              if ("bullets" === g.params.paginationType) {
                for (
                  var a = g.params.loop
                      ? Math.ceil(
                          (g.slides.length - 2 * g.loopedSlides) /
                            g.params.slidesPerGroup
                        )
                      : g.snapGrid.length,
                    t = 0;
                  t < a;
                  t++
                )
                  g.params.paginationBulletRender
                    ? (e += g.params.paginationBulletRender(
                        g,
                        t,
                        g.params.bulletClass
                      ))
                    : (e +=
                        "<" +
                        g.params.paginationElement +
                        ' id="' +
                        g.params.paginationElementID +
                        t +
                        '" class="' +
                        g.params.bulletClass +
                        '">' +
                        (t + 1) +
                        "</" +
                        g.params.paginationElement +
                        ">");
                (g.bullets = g.paginationContainer.find(
                  "." + g.params.bulletClass
                )),
                  g.params.paginationClickable &&
                    g.params.a11y &&
                    g.a11y &&
                    g.a11y.initPagination();
              }
              "fraction" === g.params.paginationType &&
                ((e = g.params.paginationFractionRender
                  ? g.params.paginationFractionRender(
                      g,
                      g.params.paginationCurrentClass,
                      g.params.paginationTotalClass
                    )
                  : '<span class="' +
                    g.params.paginationCurrentClass +
                    '"></span> / <span class="' +
                    g.params.paginationTotalClass +
                    '"></span>'),
                g.paginationContainer.html(e)),
                "progress" === g.params.paginationType &&
                  ((e = g.params.paginationProgressRender
                    ? g.params.paginationProgressRender(
                        g,
                        g.params.paginationProgressbarClass
                      )
                    : '<span class="' +
                      g.params.paginationProgressbarClass +
                      '"></span>'),
                  g.paginationContainer.html(e)),
                "custom" !== g.params.paginationType &&
                  g.emit("onPaginationRendered", g, g.paginationContainer[0]);
            }
          }),
          (g.update = function (e) {
            var a;
            function t() {
              g.rtl, g.translate;
              (a = Math.min(
                Math.max(g.translate, g.maxTranslate()),
                g.minTranslate()
              )),
                g.setWrapperTranslate(a),
                g.updateActiveIndex(),
                g.updateClasses();
            }
            g &&
              (g.updateContainerSize(),
              g.updateSlidesSize(),
              g.updateProgress(),
              g.updatePagination(),
              g.updateClasses(),
              g.params.scrollbar && g.scrollbar && g.scrollbar.set(),
              e
                ? (g.controller &&
                    g.controller.spline &&
                    (g.controller.spline = void 0),
                  g.params.freeMode
                    ? (t(), g.params.autoHeight && g.updateAutoHeight())
                    : (("auto" === g.params.slidesPerView ||
                        1 < g.params.slidesPerView) &&
                      g.isEnd &&
                      !g.params.centeredSlides
                        ? g.slideTo(g.slides.length - 1, 0, !1, !0)
                        : g.slideTo(g.activeIndex, 0, !1, !0)) || t())
                : g.params.autoHeight && g.updateAutoHeight());
          }),
          (g.onResize = function (e) {
            g.params.onBeforeResize && g.params.onBeforeResize(g),
              g.params.breakpoints && g.setBreakpoint();
            var a = g.params.allowSwipeToPrev,
              t = g.params.allowSwipeToNext;
            (g.params.allowSwipeToPrev = g.params.allowSwipeToNext = !0),
              g.updateContainerSize(),
              g.updateSlidesSize(),
              ("auto" === g.params.slidesPerView || g.params.freeMode || e) &&
                g.updatePagination(),
              g.params.scrollbar && g.scrollbar && g.scrollbar.set(),
              g.controller &&
                g.controller.spline &&
                (g.controller.spline = void 0);
            var s = !1;
            g.params.freeMode
              ? ((e = Math.min(
                  Math.max(g.translate, g.maxTranslate()),
                  g.minTranslate()
                )),
                g.setWrapperTranslate(e),
                g.updateActiveIndex(),
                g.updateClasses(),
                g.params.autoHeight && g.updateAutoHeight())
              : (g.updateClasses(),
                (s =
                  ("auto" === g.params.slidesPerView ||
                    1 < g.params.slidesPerView) &&
                  g.isEnd &&
                  !g.params.centeredSlides
                    ? g.slideTo(g.slides.length - 1, 0, !1, !0)
                    : g.slideTo(g.activeIndex, 0, !1, !0))),
              g.params.lazyLoading && !s && g.lazy && g.lazy.load(),
              (g.params.allowSwipeToPrev = a),
              (g.params.allowSwipeToNext = t),
              g.params.onAfterResize && g.params.onAfterResize(g);
          }),
          (g.touchEventsDesktop = {
            start: "mousedown",
            move: "mousemove",
            end: "mouseup",
          }),
          window.navigator.pointerEnabled
            ? (g.touchEventsDesktop = {
                start: "pointerdown",
                move: "pointermove",
                end: "pointerup",
              })
            : window.navigator.msPointerEnabled &&
              (g.touchEventsDesktop = {
                start: "MSPointerDown",
                move: "MSPointerMove",
                end: "MSPointerUp",
              }),
          (g.touchEvents = {
            start:
              g.support.touch || !g.params.simulateTouch
                ? "touchstart"
                : g.touchEventsDesktop.start,
            move:
              g.support.touch || !g.params.simulateTouch
                ? "touchmove"
                : g.touchEventsDesktop.move,
            end:
              g.support.touch || !g.params.simulateTouch
                ? "touchend"
                : g.touchEventsDesktop.end,
          }),
          (window.navigator.pointerEnabled ||
            window.navigator.msPointerEnabled) &&
            ("container" === g.params.touchEventsTarget
              ? g.container
              : g.wrapper
            ).addClass("swiper-wp8-" + g.params.direction),
          (g.initEvents = function (e) {
            var a = e ? "off" : "on",
              t = e ? "removeEventListener" : "addEventListener",
              s = (
                "container" === g.params.touchEventsTarget
                  ? g.container
                  : g.wrapper
              )[0],
              i = g.support.touch ? s : document,
              e = !!g.params.nested;
            g.browser.ie
              ? (s[t](g.touchEvents.start, g.onTouchStart, !1),
                i[t](g.touchEvents.move, g.onTouchMove, e),
                i[t](g.touchEvents.end, g.onTouchEnd, !1))
              : (g.support.touch &&
                  ((i = !(
                    "touchstart" !== g.touchEvents.start ||
                    !g.support.passiveListener ||
                    !g.params.passiveListeners
                  ) && { passive: !0, capture: !1 }),
                  s[t](g.touchEvents.start, g.onTouchStart, i),
                  s[t](g.touchEvents.move, g.onTouchMove, e),
                  s[t](g.touchEvents.end, g.onTouchEnd, i)),
                ((r.simulateTouch && !g.device.ios && !g.device.android) ||
                  (r.simulateTouch && !g.support.touch && g.device.ios)) &&
                  (s[t]("mousedown", g.onTouchStart, !1),
                  document[t]("mousemove", g.onTouchMove, e),
                  document[t]("mouseup", g.onTouchEnd, !1))),
              window[t]("resize", g.onResize),
              g.params.nextButton &&
                g.nextButton &&
                0 < g.nextButton.length &&
                (g.nextButton[a]("click", g.onClickNext),
                g.params.a11y &&
                  g.a11y &&
                  g.nextButton[a]("keydown", g.a11y.onEnterKey)),
              g.params.prevButton &&
                g.prevButton &&
                0 < g.prevButton.length &&
                (g.prevButton[a]("click", g.onClickPrev),
                g.params.a11y &&
                  g.a11y &&
                  g.prevButton[a]("keydown", g.a11y.onEnterKey)),
              g.params.pagination &&
                g.params.paginationClickable &&
                (g.paginationContainer[a](
                  "click",
                  "." + g.params.bulletClass,
                  g.onClickIndex
                ),
                g.params.a11y &&
                  g.a11y &&
                  g.paginationContainer[a](
                    "keydown",
                    "." + g.params.bulletClass,
                    g.a11y.onEnterKey
                  )),
              (g.params.preventClicks || g.params.preventClicksPropagation) &&
                s[t]("click", g.preventClicks, !0);
          }),
          (g.attachEvents = function () {
            g.initEvents();
          }),
          (g.detachEvents = function () {
            g.initEvents(!0);
          }),
          (g.allowClick = !0),
          (g.preventClicks = function (e) {
            g.allowClick ||
              (g.params.preventClicks && e.preventDefault(),
              g.params.preventClicksPropagation &&
                g.animating &&
                (e.stopPropagation(), e.stopImmediatePropagation()));
          }),
          (g.onClickNext = function (e) {
            e.preventDefault(), (g.isEnd && !g.params.loop) || g.slideNext();
          }),
          (g.onClickPrev = function (e) {
            e.preventDefault(),
              (g.isBeginning && !g.params.loop) || g.slidePrev();
          }),
          (g.onClickIndex = function (e) {
            e.preventDefault();
            e = O(this).index() * g.params.slidesPerGroup;
            g.params.loop && (e += g.loopedSlides), g.slideTo(e);
          }),
          (g.updateClickedSlide = function (e) {
            var a,
              t,
              s = B(e, "." + g.params.slideClass),
              i = !1;
            if (s)
              for (var r = 0; r < g.slides.length; r++)
                g.slides[r] === s && (i = !0);
            if (!s || !i)
              return (g.clickedSlide = void 0), void (g.clickedIndex = void 0);
            (g.clickedSlide = s),
              (g.clickedIndex = O(s).index()),
              g.params.slideToClickedSlide &&
                void 0 !== g.clickedIndex &&
                g.clickedIndex !== g.activeIndex &&
                ((a = g.clickedIndex),
                (t =
                  "auto" === g.params.slidesPerView
                    ? g.currentSlidesPerView()
                    : g.params.slidesPerView),
                g.params.loop
                  ? g.animating ||
                    ((e = parseInt(
                      O(g.clickedSlide).attr("data-swiper-slide-index"),
                      10
                    )),
                    g.params.centeredSlides
                      ? a < g.loopedSlides - t / 2 ||
                        a > g.slides.length - g.loopedSlides + t / 2
                        ? (g.fixLoop(),
                          (a = g.wrapper
                            .children(
                              "." +
                                g.params.slideClass +
                                '[data-swiper-slide-index="' +
                                e +
                                '"]:not(.' +
                                g.params.slideDuplicateClass +
                                ")"
                            )
                            .eq(0)
                            .index()),
                          setTimeout(function () {
                            g.slideTo(a);
                          }, 0))
                        : g.slideTo(a)
                      : a > g.slides.length - t
                      ? (g.fixLoop(),
                        (a = g.wrapper
                          .children(
                            "." +
                              g.params.slideClass +
                              '[data-swiper-slide-index="' +
                              e +
                              '"]:not(.' +
                              g.params.slideDuplicateClass +
                              ")"
                          )
                          .eq(0)
                          .index()),
                        setTimeout(function () {
                          g.slideTo(a);
                        }, 0))
                      : g.slideTo(a))
                  : g.slideTo(a));
          });
        var h,
          f,
          v,
          w,
          d,
          y,
          x,
          u,
          T,
          b,
          m,
          c,
          S,
          C,
          z,
          M,
          E = "input, select, textarea, button, video",
          P = Date.now(),
          I = [];
        for (M in ((g.animating = !1),
        (g.touches = {
          startX: 0,
          startY: 0,
          currentX: 0,
          currentY: 0,
          diff: 0,
        }),
        (g.onTouchStart = function (e) {
          var a, t;
          e.originalEvent && (e = e.originalEvent),
            (!(m = "touchstart" === e.type) && "which" in e && 3 === e.which) ||
              (g.params.noSwiping && B(e, "." + g.params.noSwipingClass)
                ? (g.allowClick = !0)
                : (g.params.swipeHandler && !B(e, g.params.swipeHandler)) ||
                  ((a = g.touches.currentX =
                    ("touchstart" === e.type ? e.targetTouches[0] : e).pageX),
                  (t = g.touches.currentY =
                    ("touchstart" === e.type ? e.targetTouches[0] : e).pageY),
                  (g.device.ios &&
                    g.params.iOSEdgeSwipeDetection &&
                    a <= g.params.iOSEdgeSwipeThreshold) ||
                    ((v = !(f = !(h = !0))),
                    (c = d = void 0),
                    (g.touches.startX = a),
                    (g.touches.startY = t),
                    (w = Date.now()),
                    (g.allowClick = !0),
                    g.updateContainerSize(),
                    (g.swipeDirection = void 0),
                    0 < g.params.threshold && (u = !1),
                    "touchstart" !== e.type &&
                      ((t = !0),
                      O(e.target).is(E) && (t = !1),
                      document.activeElement &&
                        O(document.activeElement).is(E) &&
                        document.activeElement.blur(),
                      t && e.preventDefault()),
                    g.emit("onTouchStart", g, e))));
        }),
        (g.onTouchMove = function (e) {
          if (
            (e.originalEvent && (e = e.originalEvent),
            !m || "mousemove" !== e.type)
          ) {
            if (e.preventedByNestedSwiper)
              return (
                (g.touches.startX = (
                  "touchmove" === e.type ? e.targetTouches[0] : e
                ).pageX),
                void (g.touches.startY = (
                  "touchmove" === e.type ? e.targetTouches[0] : e
                ).pageY)
              );
            if (g.params.onlyExternal)
              return (
                (g.allowClick = !1),
                void (
                  h &&
                  ((g.touches.startX = g.touches.currentX =
                    ("touchmove" === e.type ? e.targetTouches[0] : e).pageX),
                  (g.touches.startY = g.touches.currentY =
                    ("touchmove" === e.type ? e.targetTouches[0] : e).pageY),
                  (w = Date.now()))
                )
              );
            if (m && g.params.touchReleaseOnEdges && !g.params.loop)
              if (g.isHorizontal()) {
                if (
                  (g.touches.currentX < g.touches.startX &&
                    g.translate <= g.maxTranslate()) ||
                  (g.touches.currentX > g.touches.startX &&
                    g.translate >= g.minTranslate())
                )
                  return;
              } else if (
                (g.touches.currentY < g.touches.startY &&
                  g.translate <= g.maxTranslate()) ||
                (g.touches.currentY > g.touches.startY &&
                  g.translate >= g.minTranslate())
              )
                return;
            if (
              m &&
              document.activeElement &&
              e.target === document.activeElement &&
              O(e.target).is(E)
            )
              return (f = !0), void (g.allowClick = !1);
            if (
              (v && g.emit("onTouchMove", g, e),
              !(e.targetTouches && 1 < e.targetTouches.length))
            )
              if (
                ((g.touches.currentX = (
                  "touchmove" === e.type ? e.targetTouches[0] : e
                ).pageX),
                (g.touches.currentY = (
                  "touchmove" === e.type ? e.targetTouches[0] : e
                ).pageY),
                void 0 === d &&
                  (d =
                    !(
                      (g.isHorizontal() &&
                        g.touches.currentY === g.touches.startY) ||
                      (!g.isHorizontal() &&
                        g.touches.currentX === g.touches.startX)
                    ) &&
                    ((t =
                      (180 *
                        Math.atan2(
                          Math.abs(g.touches.currentY - g.touches.startY),
                          Math.abs(g.touches.currentX - g.touches.startX)
                        )) /
                      Math.PI),
                    g.isHorizontal()
                      ? t > g.params.touchAngle
                      : 90 - t > g.params.touchAngle)),
                d && g.emit("onTouchMoveOpposite", g, e),
                void 0 === c &&
                  ((g.touches.currentX === g.touches.startX &&
                    g.touches.currentY === g.touches.startY) ||
                    (c = !0)),
                h)
              )
                if (d) h = !1;
                else if (c) {
                  (g.allowClick = !1),
                    g.emit("onSliderMove", g, e),
                    e.preventDefault(),
                    g.params.touchMoveStopPropagation &&
                      !g.params.nested &&
                      e.stopPropagation(),
                    f ||
                      (r.loop && g.fixLoop(),
                      (x = g.getWrapperTranslate()),
                      g.setWrapperTransition(0),
                      g.animating &&
                        g.wrapper.trigger(
                          "webkitTransitionEnd transitionend oTransitionEnd MSTransitionEnd msTransitionEnd"
                        ),
                      g.params.autoplay &&
                        g.autoplaying &&
                        (g.params.autoplayDisableOnInteraction
                          ? g.stopAutoplay()
                          : g.pauseAutoplay()),
                      (b = !1),
                      !g.params.grabCursor ||
                        (!0 !== g.params.allowSwipeToNext &&
                          !0 !== g.params.allowSwipeToPrev) ||
                        g.setGrabCursor(!0)),
                    (f = !0);
                  var a = (g.touches.diff = g.isHorizontal()
                    ? g.touches.currentX - g.touches.startX
                    : g.touches.currentY - g.touches.startY);
                  (a *= g.params.touchRatio),
                    g.rtl && (a = -a),
                    (g.swipeDirection = 0 < a ? "prev" : "next"),
                    (y = a + x);
                  var t = !0;
                  if (
                    (0 < a && y > g.minTranslate()
                      ? ((t = !1),
                        g.params.resistance &&
                          (y =
                            g.minTranslate() -
                            1 +
                            Math.pow(
                              -g.minTranslate() + x + a,
                              g.params.resistanceRatio
                            )))
                      : a < 0 &&
                        y < g.maxTranslate() &&
                        ((t = !1),
                        g.params.resistance &&
                          (y =
                            g.maxTranslate() +
                            1 -
                            Math.pow(
                              g.maxTranslate() - x - a,
                              g.params.resistanceRatio
                            ))),
                    t && (e.preventedByNestedSwiper = !0),
                    !g.params.allowSwipeToNext &&
                      "next" === g.swipeDirection &&
                      y < x &&
                      (y = x),
                    !g.params.allowSwipeToPrev &&
                      "prev" === g.swipeDirection &&
                      x < y &&
                      (y = x),
                    0 < g.params.threshold)
                  ) {
                    if (!(Math.abs(a) > g.params.threshold || u))
                      return void (y = x);
                    if (!u)
                      return (
                        (u = !0),
                        (g.touches.startX = g.touches.currentX),
                        (g.touches.startY = g.touches.currentY),
                        (y = x),
                        void (g.touches.diff = g.isHorizontal()
                          ? g.touches.currentX - g.touches.startX
                          : g.touches.currentY - g.touches.startY)
                      );
                  }
                  g.params.followFinger &&
                    ((g.params.freeMode || g.params.watchSlidesProgress) &&
                      g.updateActiveIndex(),
                    g.params.freeMode &&
                      (0 === I.length &&
                        I.push({
                          position:
                            g.touches[g.isHorizontal() ? "startX" : "startY"],
                          time: w,
                        }),
                      I.push({
                        position:
                          g.touches[g.isHorizontal() ? "currentX" : "currentY"],
                        time: new window.Date().getTime(),
                      })),
                    g.updateProgress(y),
                    g.setWrapperTranslate(y));
                }
          }
        }),
        (g.onTouchEnd = function (e) {
          if (
            (e.originalEvent && (e = e.originalEvent),
            v && g.emit("onTouchEnd", g, e),
            (v = !1),
            h)
          ) {
            g.params.grabCursor &&
              f &&
              h &&
              (!0 === g.params.allowSwipeToNext ||
                !0 === g.params.allowSwipeToPrev) &&
              g.setGrabCursor(!1);
            var a,
              t = Date.now(),
              s = t - w;
            if (
              (g.allowClick &&
                (g.updateClickedSlide(e),
                g.emit("onTap", g, e),
                s < 300 &&
                  300 < t - P &&
                  (T && clearTimeout(T),
                  (T = setTimeout(function () {
                    g &&
                      (g.params.paginationHide &&
                        0 < g.paginationContainer.length &&
                        !O(e.target).hasClass(g.params.bulletClass) &&
                        g.paginationContainer.toggleClass(
                          g.params.paginationHiddenClass
                        ),
                      g.emit("onClick", g, e));
                  }, 300))),
                s < 300 &&
                  t - P < 300 &&
                  (T && clearTimeout(T), g.emit("onDoubleTap", g, e))),
              (P = Date.now()),
              setTimeout(function () {
                g && (g.allowClick = !0);
              }, 0),
              h && f && g.swipeDirection && 0 !== g.touches.diff && y !== x)
            )
              if (
                ((h = f = !1),
                (a = g.params.followFinger
                  ? g.rtl
                    ? g.translate
                    : -g.translate
                  : -y),
                g.params.freeMode)
              )
                if (a < -g.minTranslate()) g.slideTo(g.activeIndex);
                else if (a > -g.maxTranslate())
                  g.slides.length < g.snapGrid.length
                    ? g.slideTo(g.snapGrid.length - 1)
                    : g.slideTo(g.slides.length - 1);
                else {
                  if (g.params.freeModeMomentum) {
                    1 < I.length
                      ? ((l = I.pop()),
                        (r = I.pop()),
                        (i = l.position - r.position),
                        (r = l.time - r.time),
                        (g.velocity = i / r),
                        (g.velocity = g.velocity / 2),
                        Math.abs(g.velocity) <
                          g.params.freeModeMinimumVelocity && (g.velocity = 0),
                        (150 < r ||
                          300 < new window.Date().getTime() - l.time) &&
                          (g.velocity = 0))
                      : (g.velocity = 0),
                      (g.velocity =
                        g.velocity * g.params.freeModeMomentumVelocityRatio),
                      (I.length = 0);
                    var i = 1e3 * g.params.freeModeMomentumRatio,
                      r = g.velocity * i,
                      n = g.translate + r;
                    g.rtl && (n = -n);
                    var o,
                      l = !1,
                      r =
                        20 *
                        Math.abs(g.velocity) *
                        g.params.freeModeMomentumBounceRatio;
                    if (n < g.maxTranslate())
                      g.params.freeModeMomentumBounce
                        ? (n + g.maxTranslate() < -r &&
                            (n = g.maxTranslate() - r),
                          (o = g.maxTranslate()),
                          (b = l = !0))
                        : (n = g.maxTranslate());
                    else if (n > g.minTranslate())
                      g.params.freeModeMomentumBounce
                        ? (n - g.minTranslate() > r &&
                            (n = g.minTranslate() + r),
                          (o = g.minTranslate()),
                          (b = l = !0))
                        : (n = g.minTranslate());
                    else if (g.params.freeModeSticky) {
                      for (var p, d = 0, d = 0; d < g.snapGrid.length; d += 1)
                        if (g.snapGrid[d] > -n) {
                          p = d;
                          break;
                        }
                      (n =
                        Math.abs(g.snapGrid[p] - n) <
                          Math.abs(g.snapGrid[p - 1] - n) ||
                        "next" === g.swipeDirection
                          ? g.snapGrid[p]
                          : g.snapGrid[p - 1]),
                        g.rtl || (n = -n);
                    }
                    if (0 !== g.velocity)
                      i = g.rtl
                        ? Math.abs((-n - g.translate) / g.velocity)
                        : Math.abs((n - g.translate) / g.velocity);
                    else if (g.params.freeModeSticky)
                      return void g.slideReset();
                    g.params.freeModeMomentumBounce && l
                      ? (g.updateProgress(o),
                        g.setWrapperTransition(i),
                        g.setWrapperTranslate(n),
                        g.onTransitionStart(),
                        (g.animating = !0),
                        g.wrapper.transitionEnd(function () {
                          g &&
                            b &&
                            (g.emit("onMomentumBounce", g),
                            g.setWrapperTransition(g.params.speed),
                            g.setWrapperTranslate(o),
                            g.wrapper.transitionEnd(function () {
                              g && g.onTransitionEnd();
                            }));
                        }))
                      : g.velocity
                      ? (g.updateProgress(n),
                        g.setWrapperTransition(i),
                        g.setWrapperTranslate(n),
                        g.onTransitionStart(),
                        g.animating ||
                          ((g.animating = !0),
                          g.wrapper.transitionEnd(function () {
                            g && g.onTransitionEnd();
                          })))
                      : g.updateProgress(n),
                      g.updateActiveIndex();
                  }
                  (!g.params.freeModeMomentum || s >= g.params.longSwipesMs) &&
                    (g.updateProgress(), g.updateActiveIndex());
                }
              else {
                for (
                  var u = 0, m = g.slidesSizesGrid[0], c = 0;
                  c < g.slidesGrid.length;
                  c += g.params.slidesPerGroup
                )
                  void 0 !== g.slidesGrid[c + g.params.slidesPerGroup]
                    ? a >= g.slidesGrid[c] &&
                      a < g.slidesGrid[c + g.params.slidesPerGroup] &&
                      ((u = c),
                      (m =
                        g.slidesGrid[c + g.params.slidesPerGroup] -
                        g.slidesGrid[c]))
                    : a >= g.slidesGrid[c] &&
                      ((u = c),
                      (m =
                        g.slidesGrid[g.slidesGrid.length - 1] -
                        g.slidesGrid[g.slidesGrid.length - 2]));
                i = (a - g.slidesGrid[u]) / m;
                s > g.params.longSwipesMs
                  ? g.params.longSwipes
                    ? ("next" === g.swipeDirection &&
                        (i >= g.params.longSwipesRatio
                          ? g.slideTo(u + g.params.slidesPerGroup)
                          : g.slideTo(u)),
                      "prev" === g.swipeDirection &&
                        (i > 1 - g.params.longSwipesRatio
                          ? g.slideTo(u + g.params.slidesPerGroup)
                          : g.slideTo(u)))
                    : g.slideTo(g.activeIndex)
                  : g.params.shortSwipes
                  ? ("next" === g.swipeDirection &&
                      g.slideTo(u + g.params.slidesPerGroup),
                    "prev" === g.swipeDirection && g.slideTo(u))
                  : g.slideTo(g.activeIndex);
              }
            else h = f = !1;
          }
        }),
        (g._slideTo = function (e, a) {
          return g.slideTo(e, a, !0, !0);
        }),
        (g.slideTo = function (e, a, t, s) {
          void 0 === t && (t = !0),
            void 0 === e && (e = 0),
            e < 0 && (e = 0),
            (g.snapIndex = Math.floor(e / g.params.slidesPerGroup)),
            g.snapIndex >= g.snapGrid.length &&
              (g.snapIndex = g.snapGrid.length - 1);
          var i = -g.snapGrid[g.snapIndex];
          if (
            (g.params.autoplay &&
              g.autoplaying &&
              (s || !g.params.autoplayDisableOnInteraction
                ? g.pauseAutoplay(a)
                : g.stopAutoplay()),
            g.updateProgress(i),
            g.params.normalizeSlideIndex)
          )
            for (var r = 0; r < g.slidesGrid.length; r++)
              -Math.floor(100 * i) >= Math.floor(100 * g.slidesGrid[r]) &&
                (e = r);
          return (
            !(
              !g.params.allowSwipeToNext &&
              i < g.translate &&
              i < g.minTranslate()
            ) &&
            !(
              !g.params.allowSwipeToPrev &&
              i > g.translate &&
              i > g.maxTranslate() &&
              (g.activeIndex || 0) !== e
            ) &&
            (void 0 === a && (a = g.params.speed),
            (g.previousIndex = g.activeIndex || 0),
            (g.activeIndex = e),
            g.updateRealIndex(),
            (g.rtl && -i === g.translate) || (!g.rtl && i === g.translate)
              ? (g.params.autoHeight && g.updateAutoHeight(),
                g.updateClasses(),
                "slide" !== g.params.effect && g.setWrapperTranslate(i),
                !1)
              : (g.updateClasses(),
                g.onTransitionStart(t),
                0 === a || g.browser.lteIE9
                  ? (g.setWrapperTranslate(i),
                    g.setWrapperTransition(0),
                    g.onTransitionEnd(t))
                  : (g.setWrapperTranslate(i),
                    g.setWrapperTransition(a),
                    g.animating ||
                      ((g.animating = !0),
                      g.wrapper.transitionEnd(function () {
                        g && g.onTransitionEnd(t);
                      }))),
                !0))
          );
        }),
        (g.onTransitionStart = function (e) {
          void 0 === e && (e = !0),
            g.params.autoHeight && g.updateAutoHeight(),
            g.lazy && g.lazy.onTransitionStart(),
            e &&
              (g.emit("onTransitionStart", g),
              g.activeIndex !== g.previousIndex &&
                (g.emit("onSlideChangeStart", g),
                g.activeIndex > g.previousIndex
                  ? g.emit("onSlideNextStart", g)
                  : g.emit("onSlidePrevStart", g)));
        }),
        (g.onTransitionEnd = function (e) {
          (g.animating = !1),
            g.setWrapperTransition(0),
            void 0 === e && (e = !0),
            g.lazy && g.lazy.onTransitionEnd(),
            e &&
              (g.emit("onTransitionEnd", g),
              g.activeIndex !== g.previousIndex &&
                (g.emit("onSlideChangeEnd", g),
                g.activeIndex > g.previousIndex
                  ? g.emit("onSlideNextEnd", g)
                  : g.emit("onSlidePrevEnd", g))),
            g.params.history &&
              g.history &&
              g.history.setHistory(g.params.history, g.activeIndex),
            g.params.hashnav && g.hashnav && g.hashnav.setHash();
        }),
        (g.slideNext = function (e, a, t) {
          if (g.params.loop) {
            if (g.animating) return !1;
            g.fixLoop();
            g.container[0].clientLeft;
            return g.slideTo(g.activeIndex + g.params.slidesPerGroup, a, e, t);
          }
          return g.slideTo(g.activeIndex + g.params.slidesPerGroup, a, e, t);
        }),
        (g._slideNext = function (e) {
          return g.slideNext(!0, e, !0);
        }),
        (g.slidePrev = function (e, a, t) {
          if (g.params.loop) {
            if (g.animating) return !1;
            g.fixLoop();
            g.container[0].clientLeft;
            return g.slideTo(g.activeIndex - 1, a, e, t);
          }
          return g.slideTo(g.activeIndex - 1, a, e, t);
        }),
        (g._slidePrev = function (e) {
          return g.slidePrev(!0, e, !0);
        }),
        (g.slideReset = function (e, a, t) {
          return g.slideTo(g.activeIndex, a, e);
        }),
        (g.disableTouchControl = function () {
          return (g.params.onlyExternal = !0);
        }),
        (g.enableTouchControl = function () {
          return !(g.params.onlyExternal = !1);
        }),
        (g.setWrapperTransition = function (e, a) {
          g.wrapper.transition(e),
            "slide" !== g.params.effect &&
              g.effects[g.params.effect] &&
              g.effects[g.params.effect].setTransition(e),
            g.params.parallax && g.parallax && g.parallax.setTransition(e),
            g.params.scrollbar && g.scrollbar && g.scrollbar.setTransition(e),
            g.params.control &&
              g.controller &&
              g.controller.setTransition(e, a),
            g.emit("onSetTransition", g, e);
        }),
        (g.setWrapperTranslate = function (e, a, t) {
          var s = 0,
            i = 0;
          g.isHorizontal() ? (s = g.rtl ? -e : e) : (i = e),
            g.params.roundLengths && ((s = L(s)), (i = L(i))),
            g.params.virtualTranslate ||
              (g.support.transforms3d
                ? g.wrapper.transform(
                    "translate3d(" + s + "px, " + i + "px, 0px)"
                  )
                : g.wrapper.transform("translate(" + s + "px, " + i + "px)")),
            (g.translate = g.isHorizontal() ? s : i);
          i = g.maxTranslate() - g.minTranslate();
          (0 == i ? 0 : (e - g.minTranslate()) / i) !== g.progress &&
            g.updateProgress(e),
            a && g.updateActiveIndex(),
            "slide" !== g.params.effect &&
              g.effects[g.params.effect] &&
              g.effects[g.params.effect].setTranslate(g.translate),
            g.params.parallax &&
              g.parallax &&
              g.parallax.setTranslate(g.translate),
            g.params.scrollbar &&
              g.scrollbar &&
              g.scrollbar.setTranslate(g.translate),
            g.params.control &&
              g.controller &&
              g.controller.setTranslate(g.translate, t),
            g.emit("onSetTranslate", g, g.translate);
        }),
        (g.getTranslate = function (e, a) {
          var t, s, i;
          return (
            void 0 === a && (a = "x"),
            g.params.virtualTranslate
              ? g.rtl
                ? -g.translate
                : g.translate
              : ((e = window.getComputedStyle(e, null)),
                window.WebKitCSSMatrix
                  ? (6 <
                      (s = e.transform || e.webkitTransform).split(",")
                        .length &&
                      (s = s
                        .split(", ")
                        .map(function (e) {
                          return e.replace(",", ".");
                        })
                        .join(", ")),
                    (i = new window.WebKitCSSMatrix("none" === s ? "" : s)))
                  : (t = (i =
                      e.MozTransform ||
                      e.OTransform ||
                      e.MsTransform ||
                      e.msTransform ||
                      e.transform ||
                      e
                        .getPropertyValue("transform")
                        .replace("translate(", "matrix(1, 0, 0, 1,"))
                      .toString()
                      .split(",")),
                "x" === a &&
                  (s = window.WebKitCSSMatrix
                    ? i.m41
                    : 16 === t.length
                    ? parseFloat(t[12])
                    : parseFloat(t[4])),
                "y" === a &&
                  (s = window.WebKitCSSMatrix
                    ? i.m42
                    : 16 === t.length
                    ? parseFloat(t[13])
                    : parseFloat(t[5])),
                g.rtl && s && (s = -s),
                s || 0)
          );
        }),
        (g.getWrapperTranslate = function (e) {
          return (
            void 0 === e && (e = g.isHorizontal() ? "x" : "y"),
            g.getTranslate(g.wrapper[0], e)
          );
        }),
        (g.observers = []),
        (g.initObservers = function () {
          if (g.params.observeParents)
            for (var e = g.container.parents(), a = 0; a < e.length; a++)
              H(e[a]);
          H(g.container[0], { childList: !1 }),
            H(g.wrapper[0], { attributes: !1 });
        }),
        (g.disconnectObservers = function () {
          for (var e = 0; e < g.observers.length; e++)
            g.observers[e].disconnect();
          g.observers = [];
        }),
        (g.createLoop = function () {
          g.wrapper
            .children(
              "." + g.params.slideClass + "." + g.params.slideDuplicateClass
            )
            .remove();
          var s = g.wrapper.children("." + g.params.slideClass);
          "auto" !== g.params.slidesPerView ||
            g.params.loopedSlides ||
            (g.params.loopedSlides = s.length),
            (g.loopedSlides = parseInt(
              g.params.loopedSlides || g.params.slidesPerView,
              10
            )),
            (g.loopedSlides = g.loopedSlides + g.params.loopAdditionalSlides),
            g.loopedSlides > s.length && (g.loopedSlides = s.length);
          var e,
            i = [],
            r = [];
          for (
            s.each(function (e, a) {
              var t = O(this);
              e < g.loopedSlides && r.push(a),
                e < s.length && e >= s.length - g.loopedSlides && i.push(a),
                t.attr("data-swiper-slide-index", e);
            }),
              e = 0;
            e < r.length;
            e++
          )
            g.wrapper.append(
              O(r[e].cloneNode(!0)).addClass(g.params.slideDuplicateClass)
            );
          for (e = i.length - 1; 0 <= e; e--)
            g.wrapper.prepend(
              O(i[e].cloneNode(!0)).addClass(g.params.slideDuplicateClass)
            );
        }),
        (g.destroyLoop = function () {
          g.wrapper
            .children(
              "." + g.params.slideClass + "." + g.params.slideDuplicateClass
            )
            .remove(),
            g.slides.removeAttr("data-swiper-slide-index");
        }),
        (g.reLoop = function (e) {
          var a = g.activeIndex - g.loopedSlides;
          g.destroyLoop(),
            g.createLoop(),
            g.updateSlidesSize(),
            e && g.slideTo(a + g.loopedSlides, 0, !1);
        }),
        (g.fixLoop = function () {
          var e;
          g.activeIndex < g.loopedSlides
            ? ((e = g.slides.length - 3 * g.loopedSlides + g.activeIndex),
              (e += g.loopedSlides),
              g.slideTo(e, 0, !1, !0))
            : (("auto" === g.params.slidesPerView &&
                g.activeIndex >= 2 * g.loopedSlides) ||
                g.activeIndex > g.slides.length - 2 * g.params.slidesPerView) &&
              ((e = -g.slides.length + g.activeIndex + g.loopedSlides),
              (e += g.loopedSlides),
              g.slideTo(e, 0, !1, !0));
        }),
        (g.appendSlide = function (e) {
          if (
            (g.params.loop && g.destroyLoop(), "object" == typeof e && e.length)
          )
            for (var a = 0; a < e.length; a++) e[a] && g.wrapper.append(e[a]);
          else g.wrapper.append(e);
          g.params.loop && g.createLoop(),
            (g.params.observer && g.support.observer) || g.update(!0);
        }),
        (g.prependSlide = function (e) {
          g.params.loop && g.destroyLoop();
          var a = g.activeIndex + 1;
          if ("object" == typeof e && e.length) {
            for (var t = 0; t < e.length; t++) e[t] && g.wrapper.prepend(e[t]);
            a = g.activeIndex + e.length;
          } else g.wrapper.prepend(e);
          g.params.loop && g.createLoop(),
            (g.params.observer && g.support.observer) || g.update(!0),
            g.slideTo(a, 0, !1);
        }),
        (g.removeSlide = function (e) {
          g.params.loop &&
            (g.destroyLoop(),
            (g.slides = g.wrapper.children("." + g.params.slideClass)));
          var a,
            t = g.activeIndex;
          if ("object" == typeof e && e.length) {
            for (var s = 0; s < e.length; s++)
              (a = e[s]), g.slides[a] && g.slides.eq(a).remove(), a < t && t--;
            t = Math.max(t, 0);
          } else
            (a = e),
              g.slides[a] && g.slides.eq(a).remove(),
              a < t && t--,
              (t = Math.max(t, 0));
          g.params.loop && g.createLoop(),
            (g.params.observer && g.support.observer) || g.update(!0),
            g.params.loop
              ? g.slideTo(t + g.loopedSlides, 0, !1)
              : g.slideTo(t, 0, !1);
        }),
        (g.removeAllSlides = function () {
          for (var e = [], a = 0; a < g.slides.length; a++) e.push(a);
          g.removeSlide(e);
        }),
        (g.effects = {
          fade: {
            setTranslate: function () {
              for (var e = 0; e < g.slides.length; e++) {
                var a = g.slides.eq(e),
                  t = -a[0].swiperSlideOffset;
                g.params.virtualTranslate || (t -= g.translate);
                var s = 0;
                g.isHorizontal() || ((s = t), (t = 0));
                var i = g.params.fade.crossFade
                  ? Math.max(1 - Math.abs(a[0].progress), 0)
                  : 1 + Math.min(Math.max(a[0].progress, -1), 0);
                a.css({ opacity: i }).transform(
                  "translate3d(" + t + "px, " + s + "px, 0px)"
                );
              }
            },
            setTransition: function (e) {
              var t;
              g.slides.transition(e),
                g.params.virtualTranslate &&
                  0 !== e &&
                  ((t = !1),
                  g.slides.transitionEnd(function () {
                    if (!t && g) {
                      (t = !0), (g.animating = !1);
                      for (
                        var e = [
                            "webkitTransitionEnd",
                            "transitionend",
                            "oTransitionEnd",
                            "MSTransitionEnd",
                            "msTransitionEnd",
                          ],
                          a = 0;
                        a < e.length;
                        a++
                      )
                        g.wrapper.trigger(e[a]);
                    }
                  }));
            },
          },
          flip: {
            setTranslate: function () {
              for (var e = 0; e < g.slides.length; e++) {
                var a = g.slides.eq(e),
                  t = a[0].progress;
                g.params.flip.limitRotation &&
                  (t = Math.max(Math.min(a[0].progress, 1), -1));
                var s,
                  i,
                  r = -180 * t,
                  n = 0,
                  o = -a[0].swiperSlideOffset,
                  l = 0;
                g.isHorizontal()
                  ? g.rtl && (r = -r)
                  : ((l = o), (n = -r), (r = o = 0)),
                  (a[0].style.zIndex =
                    -Math.abs(Math.round(t)) + g.slides.length),
                  g.params.flip.slideShadows &&
                    ((s = g.isHorizontal()
                      ? a.find(".swiper-slide-shadow-left")
                      : a.find(".swiper-slide-shadow-top")),
                    (i = g.isHorizontal()
                      ? a.find(".swiper-slide-shadow-right")
                      : a.find(".swiper-slide-shadow-bottom")),
                    0 === s.length &&
                      ((s = O(
                        '<div class="swiper-slide-shadow-' +
                          (g.isHorizontal() ? "left" : "top") +
                          '"></div>'
                      )),
                      a.append(s)),
                    0 === i.length &&
                      ((i = O(
                        '<div class="swiper-slide-shadow-' +
                          (g.isHorizontal() ? "right" : "bottom") +
                          '"></div>'
                      )),
                      a.append(i)),
                    s.length && (s[0].style.opacity = Math.max(-t, 0)),
                    i.length && (i[0].style.opacity = Math.max(t, 0))),
                  a.transform(
                    "translate3d(" +
                      o +
                      "px, " +
                      l +
                      "px, 0px) rotateX(" +
                      n +
                      "deg) rotateY(" +
                      r +
                      "deg)"
                  );
              }
            },
            setTransition: function (e) {
              var t;
              g.slides
                .transition(e)
                .find(
                  ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
                )
                .transition(e),
                g.params.virtualTranslate &&
                  0 !== e &&
                  ((t = !1),
                  g.slides.eq(g.activeIndex).transitionEnd(function () {
                    if (
                      !t &&
                      g &&
                      O(this).hasClass(g.params.slideActiveClass)
                    ) {
                      (t = !0), (g.animating = !1);
                      for (
                        var e = [
                            "webkitTransitionEnd",
                            "transitionend",
                            "oTransitionEnd",
                            "MSTransitionEnd",
                            "msTransitionEnd",
                          ],
                          a = 0;
                        a < e.length;
                        a++
                      )
                        g.wrapper.trigger(e[a]);
                    }
                  }));
            },
          },
          cube: {
            setTranslate: function () {
              var e,
                a = 0;
              g.params.cube.shadow &&
                (g.isHorizontal()
                  ? (0 === (e = g.wrapper.find(".swiper-cube-shadow")).length &&
                      ((e = O('<div class="swiper-cube-shadow"></div>')),
                      g.wrapper.append(e)),
                    e.css({ height: g.width + "px" }))
                  : 0 ===
                      (e = g.container.find(".swiper-cube-shadow")).length &&
                    ((e = O('<div class="swiper-cube-shadow"></div>')),
                    g.container.append(e)));
              for (var t, s, i = 0; i < g.slides.length; i++) {
                var r = g.slides.eq(i),
                  n = 90 * i,
                  o = Math.floor(n / 360);
                g.rtl && ((n = -n), (o = Math.floor(-n / 360)));
                var l = Math.max(Math.min(r[0].progress, 1), -1),
                  p = 0,
                  d = 0,
                  u = 0;
                i % 4 == 0
                  ? ((p = 4 * -o * g.size), (u = 0))
                  : (i - 1) % 4 == 0
                  ? ((p = 0), (u = 4 * -o * g.size))
                  : (i - 2) % 4 == 0
                  ? ((p = g.size + 4 * o * g.size), (u = g.size))
                  : (i - 3) % 4 == 0 &&
                    ((p = -g.size), (u = 3 * g.size + 4 * g.size * o)),
                  g.rtl && (p = -p),
                  g.isHorizontal() || ((d = p), (p = 0));
                d =
                  "rotateX(" +
                  (g.isHorizontal() ? 0 : -n) +
                  "deg) rotateY(" +
                  (g.isHorizontal() ? n : 0) +
                  "deg) translate3d(" +
                  p +
                  "px, " +
                  d +
                  "px, " +
                  u +
                  "px)";
                l <= 1 &&
                  -1 < l &&
                  ((a = 90 * i + 90 * l), g.rtl && (a = 90 * -i - 90 * l)),
                  r.transform(d),
                  g.params.cube.slideShadows &&
                    ((u = g.isHorizontal()
                      ? r.find(".swiper-slide-shadow-left")
                      : r.find(".swiper-slide-shadow-top")),
                    (d = g.isHorizontal()
                      ? r.find(".swiper-slide-shadow-right")
                      : r.find(".swiper-slide-shadow-bottom")),
                    0 === u.length &&
                      ((u = O(
                        '<div class="swiper-slide-shadow-' +
                          (g.isHorizontal() ? "left" : "top") +
                          '"></div>'
                      )),
                      r.append(u)),
                    0 === d.length &&
                      ((d = O(
                        '<div class="swiper-slide-shadow-' +
                          (g.isHorizontal() ? "right" : "bottom") +
                          '"></div>'
                      )),
                      r.append(d)),
                    u.length && (u[0].style.opacity = Math.max(-l, 0)),
                    d.length && (d[0].style.opacity = Math.max(l, 0)));
              }
              g.wrapper.css({
                "-webkit-transform-origin": "50% 50% -" + g.size / 2 + "px",
                "-moz-transform-origin": "50% 50% -" + g.size / 2 + "px",
                "-ms-transform-origin": "50% 50% -" + g.size / 2 + "px",
                "transform-origin": "50% 50% -" + g.size / 2 + "px",
              }),
                g.params.cube.shadow &&
                  (g.isHorizontal()
                    ? e.transform(
                        "translate3d(0px, " +
                          (g.width / 2 + g.params.cube.shadowOffset) +
                          "px, " +
                          -g.width / 2 +
                          "px) rotateX(90deg) rotateZ(0deg) scale(" +
                          g.params.cube.shadowScale +
                          ")"
                      )
                    : ((m = Math.abs(a) - 90 * Math.floor(Math.abs(a) / 90)),
                      (s =
                        1.5 -
                        (Math.sin((2 * m * Math.PI) / 360) / 2 +
                          Math.cos((2 * m * Math.PI) / 360) / 2)),
                      (t = g.params.cube.shadowScale),
                      (m = g.params.cube.shadowScale / s),
                      (s = g.params.cube.shadowOffset),
                      e.transform(
                        "scale3d(" +
                          t +
                          ", 1, " +
                          m +
                          ") translate3d(0px, " +
                          (g.height / 2 + s) +
                          "px, " +
                          -g.height / 2 / m +
                          "px) rotateX(-90deg)"
                      )));
              var m = g.isSafari || g.isUiWebView ? -g.size / 2 : 0;
              g.wrapper.transform(
                "translate3d(0px,0," +
                  m +
                  "px) rotateX(" +
                  (g.isHorizontal() ? 0 : a) +
                  "deg) rotateY(" +
                  (g.isHorizontal() ? -a : 0) +
                  "deg)"
              );
            },
            setTransition: function (e) {
              g.slides
                .transition(e)
                .find(
                  ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
                )
                .transition(e),
                g.params.cube.shadow &&
                  !g.isHorizontal() &&
                  g.container.find(".swiper-cube-shadow").transition(e);
            },
          },
          coverflow: {
            setTranslate: function () {
              for (
                var e = g.translate,
                  a = g.isHorizontal() ? -e + g.width / 2 : -e + g.height / 2,
                  t = g.isHorizontal()
                    ? g.params.coverflow.rotate
                    : -g.params.coverflow.rotate,
                  s = g.params.coverflow.depth,
                  i = 0,
                  r = g.slides.length;
                i < r;
                i++
              ) {
                var n = g.slides.eq(i),
                  o = g.slidesSizesGrid[i],
                  l =
                    ((a - n[0].swiperSlideOffset - o / 2) / o) *
                    g.params.coverflow.modifier,
                  p = g.isHorizontal() ? t * l : 0,
                  d = g.isHorizontal() ? 0 : t * l,
                  u = -s * Math.abs(l),
                  m = g.isHorizontal() ? 0 : g.params.coverflow.stretch * l,
                  o = g.isHorizontal() ? g.params.coverflow.stretch * l : 0;
                Math.abs(o) < 0.001 && (o = 0),
                  Math.abs(m) < 0.001 && (m = 0),
                  Math.abs(u) < 0.001 && (u = 0),
                  Math.abs(p) < 0.001 && (p = 0),
                  Math.abs(d) < 0.001 && (d = 0);
                d =
                  "translate3d(" +
                  o +
                  "px," +
                  m +
                  "px," +
                  u +
                  "px)  rotateX(" +
                  d +
                  "deg) rotateY(" +
                  p +
                  "deg)";
                n.transform(d),
                  (n[0].style.zIndex = 1 - Math.abs(Math.round(l))),
                  g.params.coverflow.slideShadows &&
                    ((p = g.isHorizontal()
                      ? n.find(".swiper-slide-shadow-left")
                      : n.find(".swiper-slide-shadow-top")),
                    (d = g.isHorizontal()
                      ? n.find(".swiper-slide-shadow-right")
                      : n.find(".swiper-slide-shadow-bottom")),
                    0 === p.length &&
                      ((p = O(
                        '<div class="swiper-slide-shadow-' +
                          (g.isHorizontal() ? "left" : "top") +
                          '"></div>'
                      )),
                      n.append(p)),
                    0 === d.length &&
                      ((d = O(
                        '<div class="swiper-slide-shadow-' +
                          (g.isHorizontal() ? "right" : "bottom") +
                          '"></div>'
                      )),
                      n.append(d)),
                    p.length && (p[0].style.opacity = 0 < l ? l : 0),
                    d.length && (d[0].style.opacity = 0 < -l ? -l : 0));
              }
              g.browser.ie &&
                (g.wrapper[0].style.perspectiveOrigin = a + "px 50%");
            },
            setTransition: function (e) {
              g.slides
                .transition(e)
                .find(
                  ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left"
                )
                .transition(e);
            },
          },
        }),
        (g.lazy = {
          initialImageLoaded: !1,
          loadImageInSlide: function (e, o) {
            var l;
            void 0 !== e &&
              (void 0 === o && (o = !0),
              0 !== g.slides.length &&
                ((e = (l = g.slides.eq(e)).find(
                  "." +
                    g.params.lazyLoadingClass +
                    ":not(." +
                    g.params.lazyStatusLoadedClass +
                    "):not(." +
                    g.params.lazyStatusLoadingClass +
                    ")"
                )),
                !l.hasClass(g.params.lazyLoadingClass) ||
                  l.hasClass(g.params.lazyStatusLoadedClass) ||
                  l.hasClass(g.params.lazyStatusLoadingClass) ||
                  (e = e.add(l[0])),
                0 !== e.length &&
                  e.each(function () {
                    var t = O(this);
                    t.addClass(g.params.lazyStatusLoadingClass);
                    var s = t.attr("data-background"),
                      i = t.attr("data-src"),
                      r = t.attr("data-srcset"),
                      n = t.attr("data-sizes");
                    g.loadImage(t[0], i || s, r, n, !1, function () {
                      var e, a;
                      null != g &&
                        g &&
                        (s
                          ? (t.css("background-image", 'url("' + s + '")'),
                            t.removeAttr("data-background"))
                          : (r &&
                              (t.attr("srcset", r),
                              t.removeAttr("data-srcset")),
                            n &&
                              (t.attr("sizes", n), t.removeAttr("data-sizes")),
                            i && (t.attr("src", i), t.removeAttr("data-src"))),
                        t
                          .addClass(g.params.lazyStatusLoadedClass)
                          .removeClass(g.params.lazyStatusLoadingClass),
                        l
                          .find(
                            "." +
                              g.params.lazyPreloaderClass +
                              ", ." +
                              g.params.preloaderClass
                          )
                          .remove(),
                        g.params.loop &&
                          o &&
                          ((a = l.attr("data-swiper-slide-index")),
                          l.hasClass(g.params.slideDuplicateClass)
                            ? ((e = g.wrapper.children(
                                '[data-swiper-slide-index="' +
                                  a +
                                  '"]:not(.' +
                                  g.params.slideDuplicateClass +
                                  ")"
                              )),
                              g.lazy.loadImageInSlide(e.index(), !1))
                            : ((a = g.wrapper.children(
                                "." +
                                  g.params.slideDuplicateClass +
                                  '[data-swiper-slide-index="' +
                                  a +
                                  '"]'
                              )),
                              g.lazy.loadImageInSlide(a.index(), !1))),
                        g.emit("onLazyImageReady", g, l[0], t[0]));
                    }),
                      g.emit("onLazyImageLoad", g, l[0], t[0]);
                  })));
          },
          load: function () {
            var e = g.params.slidesPerView;
            if (
              ("auto" === e && (e = 0),
              g.lazy.initialImageLoaded || (g.lazy.initialImageLoaded = !0),
              g.params.watchSlidesVisibility)
            )
              g.wrapper
                .children("." + g.params.slideVisibleClass)
                .each(function () {
                  g.lazy.loadImageInSlide(O(this).index());
                });
            else if (1 < e)
              for (i = g.activeIndex; i < g.activeIndex + e; i++)
                g.slides[i] && g.lazy.loadImageInSlide(i);
            else g.lazy.loadImageInSlide(g.activeIndex);
            if (g.params.lazyLoadingInPrevNext)
              if (
                1 < e ||
                (g.params.lazyLoadingInPrevNextAmount &&
                  1 < g.params.lazyLoadingInPrevNextAmount)
              ) {
                for (
                  var a = g.params.lazyLoadingInPrevNextAmount,
                    t = e,
                    s = Math.min(
                      g.activeIndex + t + Math.max(a, t),
                      g.slides.length
                    ),
                    a = Math.max(g.activeIndex - Math.max(t, a), 0),
                    i = g.activeIndex + e;
                  i < s;
                  i++
                )
                  g.slides[i] && g.lazy.loadImageInSlide(i);
                for (i = a; i < g.activeIndex; i++)
                  g.slides[i] && g.lazy.loadImageInSlide(i);
              } else {
                a = g.wrapper.children("." + g.params.slideNextClass);
                0 < a.length && g.lazy.loadImageInSlide(a.index());
                a = g.wrapper.children("." + g.params.slidePrevClass);
                0 < a.length && g.lazy.loadImageInSlide(a.index());
              }
          },
          onTransitionStart: function () {
            g.params.lazyLoading &&
              ((!g.params.lazyLoadingOnTransitionStart &&
                (g.params.lazyLoadingOnTransitionStart ||
                  g.lazy.initialImageLoaded)) ||
                g.lazy.load());
          },
          onTransitionEnd: function () {
            g.params.lazyLoading &&
              !g.params.lazyLoadingOnTransitionStart &&
              g.lazy.load();
          },
        }),
        (g.scrollbar = {
          isTouched: !1,
          setDragPosition: function (e) {
            var a = g.scrollbar,
              t =
                (g.isHorizontal()
                  ? "touchstart" === e.type || "touchmove" === e.type
                    ? e.targetTouches[0].pageX
                    : e.pageX || e.clientX
                  : "touchstart" === e.type || "touchmove" === e.type
                  ? e.targetTouches[0].pageY
                  : e.pageY || e.clientY) -
                a.track.offset()[g.isHorizontal() ? "left" : "top"] -
                a.dragSize / 2,
              s = -g.minTranslate() * a.moveDivider,
              e = -g.maxTranslate() * a.moveDivider;
            t < s ? (t = s) : e < t && (t = e),
              (t = -t / a.moveDivider),
              g.updateProgress(t),
              g.setWrapperTranslate(t, !0);
          },
          dragStart: function (e) {
            var a = g.scrollbar;
            (a.isTouched = !0),
              e.preventDefault(),
              e.stopPropagation(),
              a.setDragPosition(e),
              clearTimeout(a.dragTimeout),
              a.track.transition(0),
              g.params.scrollbarHide && a.track.css("opacity", 1),
              g.wrapper.transition(100),
              a.drag.transition(100),
              g.emit("onScrollbarDragStart", g);
          },
          dragMove: function (e) {
            var a = g.scrollbar;
            a.isTouched &&
              (e.preventDefault ? e.preventDefault() : (e.returnValue = !1),
              a.setDragPosition(e),
              g.wrapper.transition(0),
              a.track.transition(0),
              a.drag.transition(0),
              g.emit("onScrollbarDragMove", g));
          },
          dragEnd: function (e) {
            var a = g.scrollbar;
            a.isTouched &&
              ((a.isTouched = !1),
              g.params.scrollbarHide &&
                (clearTimeout(a.dragTimeout),
                (a.dragTimeout = setTimeout(function () {
                  a.track.css("opacity", 0), a.track.transition(400);
                }, 1e3))),
              g.emit("onScrollbarDragEnd", g),
              g.params.scrollbarSnapOnRelease && g.slideReset());
          },
          draggableEvents:
            !1 !== g.params.simulateTouch || g.support.touch
              ? g.touchEvents
              : g.touchEventsDesktop,
          enableDraggable: function () {
            var e = g.scrollbar,
              a = g.support.touch ? e.track : document;
            O(e.track).on(e.draggableEvents.start, e.dragStart),
              O(a).on(e.draggableEvents.move, e.dragMove),
              O(a).on(e.draggableEvents.end, e.dragEnd);
          },
          disableDraggable: function () {
            var e = g.scrollbar,
              a = g.support.touch ? e.track : document;
            O(e.track).off(e.draggableEvents.start, e.dragStart),
              O(a).off(e.draggableEvents.move, e.dragMove),
              O(a).off(e.draggableEvents.end, e.dragEnd);
          },
          set: function () {
            var e;
            g.params.scrollbar &&
              (((e = g.scrollbar).track = O(g.params.scrollbar)),
              g.params.uniqueNavElements &&
                "string" == typeof g.params.scrollbar &&
                1 < e.track.length &&
                1 === g.container.find(g.params.scrollbar).length &&
                (e.track = g.container.find(g.params.scrollbar)),
              (e.drag = e.track.find(".swiper-scrollbar-drag")),
              0 === e.drag.length &&
                ((e.drag = O('<div class="swiper-scrollbar-drag"></div>')),
                e.track.append(e.drag)),
              (e.drag[0].style.width = ""),
              (e.drag[0].style.height = ""),
              (e.trackSize = g.isHorizontal()
                ? e.track[0].offsetWidth
                : e.track[0].offsetHeight),
              (e.divider = g.size / g.virtualSize),
              (e.moveDivider = e.divider * (e.trackSize / g.size)),
              (e.dragSize = e.trackSize * e.divider),
              g.isHorizontal()
                ? (e.drag[0].style.width = e.dragSize + "px")
                : (e.drag[0].style.height = e.dragSize + "px"),
              1 <= e.divider
                ? (e.track[0].style.display = "none")
                : (e.track[0].style.display = ""),
              g.params.scrollbarHide && (e.track[0].style.opacity = 0));
          },
          setTranslate: function () {
            var e, a, t;
            g.params.scrollbar &&
              ((e = g.scrollbar),
              g.translate,
              (a = e.dragSize),
              (t = (e.trackSize - e.dragSize) * g.progress),
              g.rtl && g.isHorizontal()
                ? 0 < (t = -t)
                  ? ((a = e.dragSize - t), (t = 0))
                  : -t + e.dragSize > e.trackSize && (a = e.trackSize + t)
                : t < 0
                ? ((a = e.dragSize + t), (t = 0))
                : t + e.dragSize > e.trackSize && (a = e.trackSize - t),
              g.isHorizontal()
                ? (g.support.transforms3d
                    ? e.drag.transform("translate3d(" + t + "px, 0, 0)")
                    : e.drag.transform("translateX(" + t + "px)"),
                  (e.drag[0].style.width = a + "px"))
                : (g.support.transforms3d
                    ? e.drag.transform("translate3d(0px, " + t + "px, 0)")
                    : e.drag.transform("translateY(" + t + "px)"),
                  (e.drag[0].style.height = a + "px")),
              g.params.scrollbarHide &&
                (clearTimeout(e.timeout),
                (e.track[0].style.opacity = 1),
                (e.timeout = setTimeout(function () {
                  (e.track[0].style.opacity = 0), e.track.transition(400);
                }, 1e3))));
          },
          setTransition: function (e) {
            g.params.scrollbar && g.scrollbar.drag.transition(e);
          },
        }),
        (g.controller = {
          LinearSpline: function (e, a) {
            var t,
              s,
              i,
              r,
              n,
              o = function (e, a) {
                for (s = -1, t = e.length; 1 < t - s; )
                  e[(i = (t + s) >> 1)] <= a ? (s = i) : (t = i);
                return t;
              };
            (this.x = e), (this.y = a), (this.lastIndex = e.length - 1);
            this.x.length;
            this.interpolate = function (e) {
              return e
                ? ((n = o(this.x, e)),
                  (r = n - 1),
                  ((e - this.x[r]) * (this.y[n] - this.y[r])) /
                    (this.x[n] - this.x[r]) +
                    this.y[r])
                : 0;
            };
          },
          getInterpolateFunction: function (e) {
            g.controller.spline ||
              (g.controller.spline = g.params.loop
                ? new g.controller.LinearSpline(g.slidesGrid, e.slidesGrid)
                : new g.controller.LinearSpline(g.snapGrid, e.snapGrid));
          },
          setTranslate: function (a, e) {
            var t,
              s,
              i = g.params.control;
            function r(e) {
              (a =
                e.rtl && "horizontal" === e.params.direction
                  ? -g.translate
                  : g.translate),
                "slide" === g.params.controlBy &&
                  (g.controller.getInterpolateFunction(e),
                  (s = -g.controller.spline.interpolate(-a))),
                (s && "container" !== g.params.controlBy) ||
                  ((t =
                    (e.maxTranslate() - e.minTranslate()) /
                    (g.maxTranslate() - g.minTranslate())),
                  (s = (a - g.minTranslate()) * t + e.minTranslate())),
                g.params.controlInverse && (s = e.maxTranslate() - s),
                e.updateProgress(s),
                e.setWrapperTranslate(s, !1, g),
                e.updateActiveIndex();
            }
            if (Array.isArray(i))
              for (var n = 0; n < i.length; n++)
                i[n] !== e && i[n] instanceof N && r(i[n]);
            else i instanceof N && e !== i && r(i);
          },
          setTransition: function (a, e) {
            var t,
              s = g.params.control;
            function i(e) {
              e.setWrapperTransition(a, g),
                0 !== a &&
                  (e.onTransitionStart(),
                  e.wrapper.transitionEnd(function () {
                    s &&
                      (e.params.loop &&
                        "slide" === g.params.controlBy &&
                        e.fixLoop(),
                      e.onTransitionEnd());
                  }));
            }
            if (Array.isArray(s))
              for (t = 0; t < s.length; t++)
                s[t] !== e && s[t] instanceof N && i(s[t]);
            else s instanceof N && e !== s && i(s);
          },
        }),
        (g.hashnav = {
          onHashCange: function (e, a) {
            var t = document.location.hash.replace("#", "");
            t !== g.slides.eq(g.activeIndex).attr("data-hash") &&
              g.slideTo(
                g.wrapper
                  .children(
                    "." + g.params.slideClass + '[data-hash="' + t + '"]'
                  )
                  .index()
              );
          },
          attachEvents: function (e) {
            e = e ? "off" : "on";
            O(window)[e]("hashchange", g.hashnav.onHashCange);
          },
          setHash: function () {
            var e;
            g.hashnav.initialized &&
              g.params.hashnav &&
              (g.params.replaceState &&
              window.history &&
              window.history.replaceState
                ? window.history.replaceState(
                    null,
                    null,
                    "#" + g.slides.eq(g.activeIndex).attr("data-hash") || ""
                  )
                : ((e =
                    (e = g.slides.eq(g.activeIndex)).attr("data-hash") ||
                    e.attr("data-history")),
                  (document.location.hash = e || "")));
          },
          init: function () {
            if (g.params.hashnav && !g.params.history) {
              g.hashnav.initialized = !0;
              var e = document.location.hash.replace("#", "");
              if (e)
                for (var a = 0, t = g.slides.length; a < t; a++) {
                  var s = g.slides.eq(a);
                  (s.attr("data-hash") || s.attr("data-history")) !== e ||
                    s.hasClass(g.params.slideDuplicateClass) ||
                    ((s = s.index()),
                    g.slideTo(s, 0, g.params.runCallbacksOnInit, !0));
                }
              g.params.hashnavWatchState && g.hashnav.attachEvents();
            }
          },
          destroy: function () {
            g.params.hashnavWatchState && g.hashnav.attachEvents(!0);
          },
        }),
        (g.history = {
          init: function () {
            if (g.params.history) {
              if (!window.history || !window.history.pushState)
                return (g.params.history = !1), void (g.params.hashnav = !0);
              (g.history.initialized = !0),
                (this.paths = this.getPathValues()),
                (this.paths.key || this.paths.value) &&
                  (this.scrollToSlide(
                    0,
                    this.paths.value,
                    g.params.runCallbacksOnInit
                  ),
                  g.params.replaceState ||
                    window.addEventListener(
                      "popstate",
                      this.setHistoryPopState
                    ));
            }
          },
          setHistoryPopState: function () {
            (g.history.paths = g.history.getPathValues()),
              g.history.scrollToSlide(
                g.params.speed,
                g.history.paths.value,
                !1
              );
          },
          getPathValues: function () {
            var e = window.location.pathname.slice(1).split("/"),
              a = e.length;
            return { key: e[a - 2], value: e[a - 1] };
          },
          setHistory: function (e, a) {
            g.history.initialized &&
              g.params.history &&
              ((a = g.slides.eq(a)),
              (a = this.slugify(a.attr("data-history"))),
              window.location.pathname.includes(e) || (a = e + "/" + a),
              g.params.replaceState
                ? window.history.replaceState(null, null, a)
                : window.history.pushState(null, null, a));
          },
          slugify: function (e) {
            return e
              .toString()
              .toLowerCase()
              .replace(/\s+/g, "-")
              .replace(/[^\w\-]+/g, "")
              .replace(/\-\-+/g, "-")
              .replace(/^-+/, "")
              .replace(/-+$/, "");
          },
          scrollToSlide: function (e, a, t) {
            if (a)
              for (var s = 0, i = g.slides.length; s < i; s++) {
                var r = g.slides.eq(s);
                this.slugify(r.attr("data-history")) !== a ||
                  r.hasClass(g.params.slideDuplicateClass) ||
                  ((r = r.index()), g.slideTo(r, e, t));
              }
            else g.slideTo(0, e, t);
          },
        }),
        (g.disableKeyboardControl = function () {
          (g.params.keyboardControl = !1), O(document).off("keydown", G);
        }),
        (g.enableKeyboardControl = function () {
          (g.params.keyboardControl = !0), O(document).on("keydown", G);
        }),
        (g.mousewheel = {
          event: !1,
          lastScrollTime: new window.Date().getTime(),
        }),
        g.params.mousewheelControl &&
          (g.mousewheel.event =
            -1 < navigator.userAgent.indexOf("firefox")
              ? "DOMMouseScroll"
              : ((z = (C = "onwheel") in document) ||
                  ((S = document.createElement("div")).setAttribute(
                    C,
                    "return;"
                  ),
                  (z = "function" == typeof S[C])),
                !z &&
                  document.implementation &&
                  document.implementation.hasFeature &&
                  !0 !== document.implementation.hasFeature("", "") &&
                  (z = document.implementation.hasFeature(
                    "Events.wheel",
                    "3.0"
                  )),
                z ? "wheel" : "mousewheel")),
        (g.disableMousewheelControl = function () {
          if (!g.mousewheel.event) return !1;
          var e = g.container;
          return (
            "container" !== g.params.mousewheelEventsTarged &&
              (e = O(g.params.mousewheelEventsTarged)),
            e.off(g.mousewheel.event, A),
            !(g.params.mousewheelControl = !1)
          );
        }),
        (g.enableMousewheelControl = function () {
          if (!g.mousewheel.event) return !1;
          var e = g.container;
          return (
            "container" !== g.params.mousewheelEventsTarged &&
              (e = O(g.params.mousewheelEventsTarged)),
            e.on(g.mousewheel.event, A),
            (g.params.mousewheelControl = !0)
          );
        }),
        (g.parallax = {
          setTranslate: function () {
            g.container
              .children(
                "[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]"
              )
              .each(function () {
                X(this, g.progress);
              }),
              g.slides.each(function () {
                var e = O(this);
                e.find(
                  "[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]"
                ).each(function () {
                  X(this, Math.min(Math.max(e[0].progress, -1), 1));
                });
              });
          },
          setTransition: function (t) {
            void 0 === t && (t = g.params.speed),
              g.container
                .find(
                  "[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]"
                )
                .each(function () {
                  var e = O(this),
                    a =
                      parseInt(e.attr("data-swiper-parallax-duration"), 10) ||
                      t;
                  0 === t && (a = 0), e.transition(a);
                });
          },
        }),
        (g.zoom = {
          scale: 1,
          currentScale: 1,
          isScaling: !1,
          gesture: {
            slide: void 0,
            slideWidth: void 0,
            slideHeight: void 0,
            image: void 0,
            imageWrap: void 0,
            zoomMax: g.params.zoomMax,
          },
          image: {
            isTouched: void 0,
            isMoved: void 0,
            currentX: void 0,
            currentY: void 0,
            minX: void 0,
            minY: void 0,
            maxX: void 0,
            maxY: void 0,
            width: void 0,
            height: void 0,
            startX: void 0,
            startY: void 0,
            touchesStart: {},
            touchesCurrent: {},
          },
          velocity: {
            x: void 0,
            y: void 0,
            prevPositionX: void 0,
            prevPositionY: void 0,
            prevTime: void 0,
          },
          getDistanceBetweenTouches: function (e) {
            if (e.targetTouches.length < 2) return 1;
            var a = e.targetTouches[0].pageX,
              t = e.targetTouches[0].pageY,
              s = e.targetTouches[1].pageX,
              e = e.targetTouches[1].pageY;
            return Math.sqrt(Math.pow(s - a, 2) + Math.pow(e - t, 2));
          },
          onGestureStart: function (e) {
            var a = g.zoom;
            if (!g.support.gestures) {
              if (
                "touchstart" !== e.type ||
                ("touchstart" === e.type && e.targetTouches.length < 2)
              )
                return;
              a.gesture.scaleStart = a.getDistanceBetweenTouches(e);
            }
            (a.gesture.slide && a.gesture.slide.length) ||
            ((a.gesture.slide = O(this)),
            0 === a.gesture.slide.length &&
              (a.gesture.slide = g.slides.eq(g.activeIndex)),
            (a.gesture.image = a.gesture.slide.find("img, svg, canvas")),
            (a.gesture.imageWrap = a.gesture.image.parent(
              "." + g.params.zoomContainerClass
            )),
            (a.gesture.zoomMax =
              a.gesture.imageWrap.attr("data-swiper-zoom") || g.params.zoomMax),
            0 !== a.gesture.imageWrap.length)
              ? (a.gesture.image.transition(0), (a.isScaling = !0))
              : (a.gesture.image = void 0);
          },
          onGestureChange: function (e) {
            var a = g.zoom;
            if (!g.support.gestures) {
              if (
                "touchmove" !== e.type ||
                ("touchmove" === e.type && e.targetTouches.length < 2)
              )
                return;
              a.gesture.scaleMove = a.getDistanceBetweenTouches(e);
            }
            a.gesture.image &&
              0 !== a.gesture.image.length &&
              (g.support.gestures
                ? (a.scale = e.scale * a.currentScale)
                : (a.scale =
                    (a.gesture.scaleMove / a.gesture.scaleStart) *
                    a.currentScale),
              a.scale > a.gesture.zoomMax &&
                (a.scale =
                  a.gesture.zoomMax -
                  1 +
                  Math.pow(a.scale - a.gesture.zoomMax + 1, 0.5)),
              a.scale < g.params.zoomMin &&
                (a.scale =
                  g.params.zoomMin +
                  1 -
                  Math.pow(g.params.zoomMin - a.scale + 1, 0.5)),
              a.gesture.image.transform(
                "translate3d(0,0,0) scale(" + a.scale + ")"
              ));
          },
          onGestureEnd: function (e) {
            var a = g.zoom;
            (!g.support.gestures &&
              ("touchend" !== e.type ||
                ("touchend" === e.type && e.changedTouches.length < 2))) ||
              (a.gesture.image &&
                0 !== a.gesture.image.length &&
                ((a.scale = Math.max(
                  Math.min(a.scale, a.gesture.zoomMax),
                  g.params.zoomMin
                )),
                a.gesture.image
                  .transition(g.params.speed)
                  .transform("translate3d(0,0,0) scale(" + a.scale + ")"),
                (a.currentScale = a.scale),
                (a.isScaling = !1),
                1 === a.scale && (a.gesture.slide = void 0)));
          },
          onTouchStart: function (e, a) {
            var t = e.zoom;
            t.gesture.image &&
              0 !== t.gesture.image.length &&
              (t.image.isTouched ||
                ("android" === e.device.os && a.preventDefault(),
                (t.image.isTouched = !0),
                (t.image.touchesStart.x = (
                  "touchstart" === a.type ? a.targetTouches[0] : a
                ).pageX),
                (t.image.touchesStart.y = (
                  "touchstart" === a.type ? a.targetTouches[0] : a
                ).pageY)));
          },
          onTouchMove: function (e) {
            var a = g.zoom;
            if (
              a.gesture.image &&
              0 !== a.gesture.image.length &&
              ((g.allowClick = !1), a.image.isTouched && a.gesture.slide)
            ) {
              a.image.isMoved ||
                ((a.image.width = a.gesture.image[0].offsetWidth),
                (a.image.height = a.gesture.image[0].offsetHeight),
                (a.image.startX =
                  g.getTranslate(a.gesture.imageWrap[0], "x") || 0),
                (a.image.startY =
                  g.getTranslate(a.gesture.imageWrap[0], "y") || 0),
                (a.gesture.slideWidth = a.gesture.slide[0].offsetWidth),
                (a.gesture.slideHeight = a.gesture.slide[0].offsetHeight),
                a.gesture.imageWrap.transition(0),
                g.rtl && (a.image.startX = -a.image.startX),
                g.rtl && (a.image.startY = -a.image.startY));
              var t = a.image.width * a.scale,
                s = a.image.height * a.scale;
              if (!(t < a.gesture.slideWidth && s < a.gesture.slideHeight)) {
                if (
                  ((a.image.minX = Math.min(
                    a.gesture.slideWidth / 2 - t / 2,
                    0
                  )),
                  (a.image.maxX = -a.image.minX),
                  (a.image.minY = Math.min(
                    a.gesture.slideHeight / 2 - s / 2,
                    0
                  )),
                  (a.image.maxY = -a.image.minY),
                  (a.image.touchesCurrent.x = (
                    "touchmove" === e.type ? e.targetTouches[0] : e
                  ).pageX),
                  (a.image.touchesCurrent.y = (
                    "touchmove" === e.type ? e.targetTouches[0] : e
                  ).pageY),
                  !a.image.isMoved && !a.isScaling)
                ) {
                  if (
                    (g.isHorizontal() &&
                      Math.floor(a.image.minX) === Math.floor(a.image.startX) &&
                      a.image.touchesCurrent.x < a.image.touchesStart.x) ||
                    (Math.floor(a.image.maxX) === Math.floor(a.image.startX) &&
                      a.image.touchesCurrent.x > a.image.touchesStart.x)
                  )
                    return void (a.image.isTouched = !1);
                  if (
                    (!g.isHorizontal() &&
                      Math.floor(a.image.minY) === Math.floor(a.image.startY) &&
                      a.image.touchesCurrent.y < a.image.touchesStart.y) ||
                    (Math.floor(a.image.maxY) === Math.floor(a.image.startY) &&
                      a.image.touchesCurrent.y > a.image.touchesStart.y)
                  )
                    return void (a.image.isTouched = !1);
                }
                e.preventDefault(),
                  e.stopPropagation(),
                  (a.image.isMoved = !0),
                  (a.image.currentX =
                    a.image.touchesCurrent.x -
                    a.image.touchesStart.x +
                    a.image.startX),
                  (a.image.currentY =
                    a.image.touchesCurrent.y -
                    a.image.touchesStart.y +
                    a.image.startY),
                  a.image.currentX < a.image.minX &&
                    (a.image.currentX =
                      a.image.minX +
                      1 -
                      Math.pow(a.image.minX - a.image.currentX + 1, 0.8)),
                  a.image.currentX > a.image.maxX &&
                    (a.image.currentX =
                      a.image.maxX -
                      1 +
                      Math.pow(a.image.currentX - a.image.maxX + 1, 0.8)),
                  a.image.currentY < a.image.minY &&
                    (a.image.currentY =
                      a.image.minY +
                      1 -
                      Math.pow(a.image.minY - a.image.currentY + 1, 0.8)),
                  a.image.currentY > a.image.maxY &&
                    (a.image.currentY =
                      a.image.maxY -
                      1 +
                      Math.pow(a.image.currentY - a.image.maxY + 1, 0.8)),
                  a.velocity.prevPositionX ||
                    (a.velocity.prevPositionX = a.image.touchesCurrent.x),
                  a.velocity.prevPositionY ||
                    (a.velocity.prevPositionY = a.image.touchesCurrent.y),
                  a.velocity.prevTime || (a.velocity.prevTime = Date.now()),
                  (a.velocity.x =
                    (a.image.touchesCurrent.x - a.velocity.prevPositionX) /
                    (Date.now() - a.velocity.prevTime) /
                    2),
                  (a.velocity.y =
                    (a.image.touchesCurrent.y - a.velocity.prevPositionY) /
                    (Date.now() - a.velocity.prevTime) /
                    2),
                  Math.abs(
                    a.image.touchesCurrent.x - a.velocity.prevPositionX
                  ) < 2 && (a.velocity.x = 0),
                  Math.abs(
                    a.image.touchesCurrent.y - a.velocity.prevPositionY
                  ) < 2 && (a.velocity.y = 0),
                  (a.velocity.prevPositionX = a.image.touchesCurrent.x),
                  (a.velocity.prevPositionY = a.image.touchesCurrent.y),
                  (a.velocity.prevTime = Date.now()),
                  a.gesture.imageWrap.transform(
                    "translate3d(" +
                      a.image.currentX +
                      "px, " +
                      a.image.currentY +
                      "px,0)"
                  );
              }
            }
          },
          onTouchEnd: function (e, a) {
            var t = e.zoom;
            if (t.gesture.image && 0 !== t.gesture.image.length) {
              if (!t.image.isTouched || !t.image.isMoved)
                return (t.image.isTouched = !1), void (t.image.isMoved = !1);
              (t.image.isTouched = !1), (t.image.isMoved = !1);
              var s = 300,
                i = 300,
                r = t.velocity.x * s,
                e = t.image.currentX + r,
                r = t.velocity.y * i,
                r = t.image.currentY + r;
              0 !== t.velocity.x &&
                (s = Math.abs((e - t.image.currentX) / t.velocity.x)),
                0 !== t.velocity.y &&
                  (i = Math.abs((r - t.image.currentY) / t.velocity.y));
              i = Math.max(s, i);
              (t.image.currentX = e), (t.image.currentY = r);
              (e = t.image.width * t.scale), (r = t.image.height * t.scale);
              (t.image.minX = Math.min(t.gesture.slideWidth / 2 - e / 2, 0)),
                (t.image.maxX = -t.image.minX),
                (t.image.minY = Math.min(t.gesture.slideHeight / 2 - r / 2, 0)),
                (t.image.maxY = -t.image.minY),
                (t.image.currentX = Math.max(
                  Math.min(t.image.currentX, t.image.maxX),
                  t.image.minX
                )),
                (t.image.currentY = Math.max(
                  Math.min(t.image.currentY, t.image.maxY),
                  t.image.minY
                )),
                t.gesture.imageWrap
                  .transition(i)
                  .transform(
                    "translate3d(" +
                      t.image.currentX +
                      "px, " +
                      t.image.currentY +
                      "px,0)"
                  );
            }
          },
          onTransitionEnd: function (e) {
            var a = e.zoom;
            a.gesture.slide &&
              e.previousIndex !== e.activeIndex &&
              (a.gesture.image.transform("translate3d(0,0,0) scale(1)"),
              a.gesture.imageWrap.transform("translate3d(0,0,0)"),
              (a.gesture.slide =
                a.gesture.image =
                a.gesture.imageWrap =
                  void 0),
              (a.scale = a.currentScale = 1));
          },
          toggleZoom: function (e, a) {
            var t,
              s,
              i,
              r,
              n = e.zoom;
            n.gesture.slide ||
              ((n.gesture.slide = e.clickedSlide
                ? O(e.clickedSlide)
                : e.slides.eq(e.activeIndex)),
              (n.gesture.image = n.gesture.slide.find("img, svg, canvas")),
              (n.gesture.imageWrap = n.gesture.image.parent(
                "." + e.params.zoomContainerClass
              ))),
              n.gesture.image &&
                0 !== n.gesture.image.length &&
                ((r =
                  void 0 === n.image.touchesStart.x && a
                    ? ((i = ("touchend" === a.type ? a.changedTouches[0] : a)
                        .pageX),
                      ("touchend" === a.type ? a.changedTouches[0] : a).pageY)
                    : ((i = n.image.touchesStart.x), n.image.touchesStart.y)),
                n.scale && 1 !== n.scale
                  ? ((n.scale = n.currentScale = 1),
                    n.gesture.imageWrap
                      .transition(300)
                      .transform("translate3d(0,0,0)"),
                    n.gesture.image
                      .transition(300)
                      .transform("translate3d(0,0,0) scale(1)"),
                    (n.gesture.slide = void 0))
                  : ((n.scale = n.currentScale =
                      n.gesture.imageWrap.attr("data-swiper-zoom") ||
                      e.params.zoomMax),
                    a
                      ? ((e = n.gesture.slide[0].offsetWidth),
                        (a = n.gesture.slide[0].offsetHeight),
                        (t = n.gesture.slide.offset().left + e / 2 - i),
                        (s = n.gesture.slide.offset().top + a / 2 - r),
                        (i = n.gesture.image[0].offsetWidth),
                        (r = n.gesture.image[0].offsetHeight),
                        (i = i * n.scale),
                        (r = r * n.scale),
                        (i = -(e = Math.min(e / 2 - i / 2, 0))),
                        (r = -(a = Math.min(a / 2 - r / 2, 0))),
                        (t = t * n.scale) < e && (t = e),
                        i < t && (t = i),
                        (s = s * n.scale) < a && (s = a),
                        r < s && (s = r))
                      : (s = t = 0),
                    n.gesture.imageWrap
                      .transition(300)
                      .transform("translate3d(" + t + "px, " + s + "px,0)"),
                    n.gesture.image
                      .transition(300)
                      .transform("translate3d(0,0,0) scale(" + n.scale + ")")));
          },
          attachEvents: function (e) {
            var t = e ? "off" : "on";
            g.params.zoom &&
              (g.slides,
              (e = !(
                "touchstart" !== g.touchEvents.start ||
                !g.support.passiveListener ||
                !g.params.passiveListeners
              ) && { passive: !0, capture: !1 }),
              g.support.gestures
                ? (g.slides[t]("gesturestart", g.zoom.onGestureStart, e),
                  g.slides[t]("gesturechange", g.zoom.onGestureChange, e),
                  g.slides[t]("gestureend", g.zoom.onGestureEnd, e))
                : "touchstart" === g.touchEvents.start &&
                  (g.slides[t](g.touchEvents.start, g.zoom.onGestureStart, e),
                  g.slides[t](g.touchEvents.move, g.zoom.onGestureChange, e),
                  g.slides[t](g.touchEvents.end, g.zoom.onGestureEnd, e)),
              g[t]("touchStart", g.zoom.onTouchStart),
              g.slides.each(function (e, a) {
                0 < O(a).find("." + g.params.zoomContainerClass).length &&
                  O(a)[t](g.touchEvents.move, g.zoom.onTouchMove);
              }),
              g[t]("touchEnd", g.zoom.onTouchEnd),
              g[t]("transitionEnd", g.zoom.onTransitionEnd),
              g.params.zoomToggle && g.on("doubleTap", g.zoom.toggleZoom));
          },
          init: function () {
            g.zoom.attachEvents();
          },
          destroy: function () {
            g.zoom.attachEvents(!0);
          },
        }),
        (g._plugins = []),
        g.plugins)) {
          var k = g.plugins[M](g, g.params[M]);
          k && g._plugins.push(k);
        }
        return (
          (g.callPlugins = function (e) {
            for (var a = 0; a < g._plugins.length; a++)
              e in g._plugins[a] &&
                g._plugins[a][e](
                  arguments[1],
                  arguments[2],
                  arguments[3],
                  arguments[4],
                  arguments[5]
                );
          }),
          (g.emitterEventListeners = {}),
          (g.emit = function (e) {
            var a;
            if (
              (g.params[e] &&
                g.params[e](
                  arguments[1],
                  arguments[2],
                  arguments[3],
                  arguments[4],
                  arguments[5]
                ),
              g.emitterEventListeners[e])
            )
              for (a = 0; a < g.emitterEventListeners[e].length; a++)
                g.emitterEventListeners[e][a](
                  arguments[1],
                  arguments[2],
                  arguments[3],
                  arguments[4],
                  arguments[5]
                );
            g.callPlugins &&
              g.callPlugins(
                e,
                arguments[1],
                arguments[2],
                arguments[3],
                arguments[4],
                arguments[5]
              );
          }),
          (g.on = function (e, a) {
            return (
              (e = Y(e)),
              g.emitterEventListeners[e] || (g.emitterEventListeners[e] = []),
              g.emitterEventListeners[e].push(a),
              g
            );
          }),
          (g.off = function (e, a) {
            var t;
            if (((e = Y(e)), void 0 === a))
              return (g.emitterEventListeners[e] = []), g;
            if (
              g.emitterEventListeners[e] &&
              0 !== g.emitterEventListeners[e].length
            ) {
              for (t = 0; t < g.emitterEventListeners[e].length; t++)
                g.emitterEventListeners[e][t] === a &&
                  g.emitterEventListeners[e].splice(t, 1);
              return g;
            }
          }),
          (g.once = function (e, a) {
            e = Y(e);
            var t = function () {
              a(
                arguments[0],
                arguments[1],
                arguments[2],
                arguments[3],
                arguments[4]
              ),
                g.off(e, t);
            };
            return g.on(e, t), g;
          }),
          (g.a11y = {
            makeFocusable: function (e) {
              return e.attr("tabIndex", "0"), e;
            },
            addRole: function (e, a) {
              return e.attr("role", a), e;
            },
            addLabel: function (e, a) {
              return e.attr("aria-label", a), e;
            },
            disable: function (e) {
              return e.attr("aria-disabled", !0), e;
            },
            enable: function (e) {
              return e.attr("aria-disabled", !1), e;
            },
            onEnterKey: function (e) {
              13 === e.keyCode &&
                (O(e.target).is(g.params.nextButton)
                  ? (g.onClickNext(e),
                    g.isEnd
                      ? g.a11y.notify(g.params.lastSlideMessage)
                      : g.a11y.notify(g.params.nextSlideMessage))
                  : O(e.target).is(g.params.prevButton) &&
                    (g.onClickPrev(e),
                    g.isBeginning
                      ? g.a11y.notify(g.params.firstSlideMessage)
                      : g.a11y.notify(g.params.prevSlideMessage)),
                O(e.target).is("." + g.params.bulletClass) &&
                  O(e.target)[0].click());
            },
            liveRegion: O(
              '<span class="' +
                g.params.notificationClass +
                '" aria-live="assertive" aria-atomic="true"></span>'
            ),
            notify: function (e) {
              var a = g.a11y.liveRegion;
              0 !== a.length && (a.html(""), a.html(e));
            },
            init: function () {
              g.params.nextButton &&
                g.nextButton &&
                0 < g.nextButton.length &&
                (g.a11y.makeFocusable(g.nextButton),
                g.a11y.addRole(g.nextButton, "button"),
                g.a11y.addLabel(g.nextButton, g.params.nextSlideMessage)),
                g.params.prevButton &&
                  g.prevButton &&
                  0 < g.prevButton.length &&
                  (g.a11y.makeFocusable(g.prevButton),
                  g.a11y.addRole(g.prevButton, "button"),
                  g.a11y.addLabel(g.prevButton, g.params.prevSlideMessage)),
                O(g.container).append(g.a11y.liveRegion);
            },
            initPagination: function () {
              g.params.pagination &&
                g.params.paginationClickable &&
                g.bullets &&
                g.bullets.length &&
                g.bullets.each(function () {
                  var e = O(this);
                  g.a11y.makeFocusable(e),
                    g.a11y.addRole(e, "button"),
                    g.a11y.addLabel(
                      e,
                      g.params.paginationBulletMessage.replace(
                        /{{index}}/,
                        e.index() + 1
                      )
                    );
                });
            },
            destroy: function () {
              g.a11y.liveRegion &&
                0 < g.a11y.liveRegion.length &&
                g.a11y.liveRegion.remove();
            },
          }),
          (g.init = function () {
            g.params.loop && g.createLoop(),
              g.updateContainerSize(),
              g.updateSlidesSize(),
              g.updatePagination(),
              g.params.scrollbar &&
                g.scrollbar &&
                (g.scrollbar.set(),
                g.params.scrollbarDraggable && g.scrollbar.enableDraggable()),
              "slide" !== g.params.effect &&
                g.effects[g.params.effect] &&
                (g.params.loop || g.updateProgress(),
                g.effects[g.params.effect].setTranslate()),
              g.params.loop
                ? g.slideTo(
                    g.params.initialSlide + g.loopedSlides,
                    0,
                    g.params.runCallbacksOnInit
                  )
                : (g.slideTo(
                    g.params.initialSlide,
                    0,
                    g.params.runCallbacksOnInit
                  ),
                  0 === g.params.initialSlide &&
                    (g.parallax &&
                      g.params.parallax &&
                      g.parallax.setTranslate(),
                    g.lazy &&
                      g.params.lazyLoading &&
                      (g.lazy.load(), (g.lazy.initialImageLoaded = !0)))),
              g.attachEvents(),
              g.params.observer && g.support.observer && g.initObservers(),
              g.params.preloadImages &&
                !g.params.lazyLoading &&
                g.preloadImages(),
              g.params.zoom && g.zoom && g.zoom.init(),
              g.params.autoplay && g.startAutoplay(),
              g.params.keyboardControl &&
                g.enableKeyboardControl &&
                g.enableKeyboardControl(),
              g.params.mousewheelControl &&
                g.enableMousewheelControl &&
                g.enableMousewheelControl(),
              g.params.hashnavReplaceState &&
                (g.params.replaceState = g.params.hashnavReplaceState),
              g.params.history && g.history && g.history.init(),
              g.params.hashnav && g.hashnav && g.hashnav.init(),
              g.params.a11y && g.a11y && g.a11y.init(),
              g.emit("onInit", g);
          }),
          (g.cleanupStyles = function () {
            g.container.removeClass(g.classNames.join(" ")).removeAttr("style"),
              g.wrapper.removeAttr("style"),
              g.slides &&
                g.slides.length &&
                g.slides
                  .removeClass(
                    [
                      g.params.slideVisibleClass,
                      g.params.slideActiveClass,
                      g.params.slideNextClass,
                      g.params.slidePrevClass,
                    ].join(" ")
                  )
                  .removeAttr("style")
                  .removeAttr("data-swiper-column")
                  .removeAttr("data-swiper-row"),
              g.paginationContainer &&
                g.paginationContainer.length &&
                g.paginationContainer.removeClass(
                  g.params.paginationHiddenClass
                ),
              g.bullets &&
                g.bullets.length &&
                g.bullets.removeClass(g.params.bulletActiveClass),
              g.params.prevButton &&
                O(g.params.prevButton).removeClass(
                  g.params.buttonDisabledClass
                ),
              g.params.nextButton &&
                O(g.params.nextButton).removeClass(
                  g.params.buttonDisabledClass
                ),
              g.params.scrollbar &&
                g.scrollbar &&
                (g.scrollbar.track &&
                  g.scrollbar.track.length &&
                  g.scrollbar.track.removeAttr("style"),
                g.scrollbar.drag &&
                  g.scrollbar.drag.length &&
                  g.scrollbar.drag.removeAttr("style"));
          }),
          (g.destroy = function (e, a) {
            g.detachEvents(),
              g.stopAutoplay(),
              g.params.scrollbar &&
                g.scrollbar &&
                g.params.scrollbarDraggable &&
                g.scrollbar.disableDraggable(),
              g.params.loop && g.destroyLoop(),
              a && g.cleanupStyles(),
              g.disconnectObservers(),
              g.params.zoom && g.zoom && g.zoom.destroy(),
              g.params.keyboardControl &&
                g.disableKeyboardControl &&
                g.disableKeyboardControl(),
              g.params.mousewheelControl &&
                g.disableMousewheelControl &&
                g.disableMousewheelControl(),
              g.params.a11y && g.a11y && g.a11y.destroy(),
              g.params.history &&
                !g.params.replaceState &&
                window.removeEventListener(
                  "popstate",
                  g.history.setHistoryPopState
                ),
              g.params.hashnav && g.hashnav && g.hashnav.destroy(),
              g.emit("onDestroy"),
              !1 !== e && (g = null);
          }),
          g.init(),
          g
        );
      }
      function L(e) {
        return Math.floor(e);
      }
      function D() {
        var e = g.params.autoplay,
          a = g.slides.eq(g.activeIndex);
        a.attr("data-swiper-autoplay") &&
          (e = a.attr("data-swiper-autoplay") || g.params.autoplay),
          (g.autoplayTimeoutId = setTimeout(function () {
            g.params.loop
              ? (g.fixLoop(), g._slideNext(), g.emit("onAutoplay", g))
              : g.isEnd
              ? r.autoplayStopOnLast
                ? g.stopAutoplay()
                : (g._slideTo(0), g.emit("onAutoplay", g))
              : (g._slideNext(), g.emit("onAutoplay", g));
          }, e));
      }
      function B(e, t) {
        var s,
          e = O(e.target);
        if (!e.is(t))
          if ("string" == typeof t) e = e.parents(t);
          else if (t.nodeType)
            return (
              e.parents().each(function (e, a) {
                a === t && (s = t);
              }),
              s ? t : void 0
            );
        if (0 !== e.length) return e[0];
      }
      function H(e, a) {
        a = a || {};
        var t = new (window.MutationObserver || window.WebkitMutationObserver)(
          function (e) {
            e.forEach(function (e) {
              g.onResize(!0), g.emit("onObserverUpdate", g, e);
            });
          }
        );
        t.observe(e, {
          attributes: void 0 === a.attributes || a.attributes,
          childList: void 0 === a.childList || a.childList,
          characterData: void 0 === a.characterData || a.characterData,
        }),
          g.observers.push(t);
      }
      function G(e) {
        e.originalEvent && (e = e.originalEvent);
        var a = e.keyCode || e.charCode;
        if (
          !g.params.allowSwipeToNext &&
          ((g.isHorizontal() && 39 === a) || (!g.isHorizontal() && 40 === a))
        )
          return !1;
        if (
          !g.params.allowSwipeToPrev &&
          ((g.isHorizontal() && 37 === a) || (!g.isHorizontal() && 38 === a))
        )
          return !1;
        if (
          !(
            e.shiftKey ||
            e.altKey ||
            e.ctrlKey ||
            e.metaKey ||
            (document.activeElement &&
              document.activeElement.nodeName &&
              ("input" === document.activeElement.nodeName.toLowerCase() ||
                "textarea" === document.activeElement.nodeName.toLowerCase()))
          )
        ) {
          if (37 === a || 39 === a || 38 === a || 40 === a) {
            var t = !1;
            if (
              0 < g.container.parents("." + g.params.slideClass).length &&
              0 === g.container.parents("." + g.params.slideActiveClass).length
            )
              return;
            var s = window.pageXOffset,
              i = window.pageYOffset,
              r = window.innerWidth,
              n = window.innerHeight,
              o = g.container.offset();
            g.rtl && (o.left = o.left - g.container[0].scrollLeft);
            for (
              var l = [
                  [o.left, o.top],
                  [o.left + g.width, o.top],
                  [o.left, o.top + g.height],
                  [o.left + g.width, o.top + g.height],
                ],
                p = 0;
              p < l.length;
              p++
            ) {
              var d = l[p];
              d[0] >= s &&
                d[0] <= s + r &&
                d[1] >= i &&
                d[1] <= i + n &&
                (t = !0);
            }
            if (!t) return;
          }
          g.isHorizontal()
            ? ((37 !== a && 39 !== a) ||
                (e.preventDefault ? e.preventDefault() : (e.returnValue = !1)),
              ((39 === a && !g.rtl) || (37 === a && g.rtl)) && g.slideNext(),
              ((37 === a && !g.rtl) || (39 === a && g.rtl)) && g.slidePrev())
            : ((38 !== a && 40 !== a) ||
                (e.preventDefault ? e.preventDefault() : (e.returnValue = !1)),
              40 === a && g.slideNext(),
              38 === a && g.slidePrev()),
            g.emit("onKeyPress", g, a);
        }
      }
      function A(e) {
        e.originalEvent && (e = e.originalEvent);
        var a,
          t,
          s,
          i = 0,
          r = g.rtl ? -1 : 1,
          n =
            ((o = n = s = t = 0),
            "detail" in (a = e) && (s = a.detail),
            "wheelDelta" in a && (s = -a.wheelDelta / 120),
            "wheelDeltaY" in a && (s = -a.wheelDeltaY / 120),
            "wheelDeltaX" in a && (t = -a.wheelDeltaX / 120),
            "axis" in a && a.axis === a.HORIZONTAL_AXIS && ((t = s), (s = 0)),
            (n = 10 * t),
            (o = 10 * s),
            "deltaY" in a && (o = a.deltaY),
            "deltaX" in a && (n = a.deltaX),
            (n || o) &&
              a.deltaMode &&
              (1 === a.deltaMode
                ? ((n *= 40), (o *= 40))
                : ((n *= 800), (o *= 800))),
            n && !t && (t = n < 1 ? -1 : 1),
            o && !s && (s = o < 1 ? -1 : 1),
            { spinX: t, spinY: s, pixelX: n, pixelY: o });
        if (g.params.mousewheelForceToAxis)
          if (g.isHorizontal()) {
            if (!(Math.abs(n.pixelX) > Math.abs(n.pixelY))) return;
            i = n.pixelX * r;
          } else {
            if (!(Math.abs(n.pixelY) > Math.abs(n.pixelX))) return;
            i = n.pixelY;
          }
        else
          i =
            Math.abs(n.pixelX) > Math.abs(n.pixelY) ? -n.pixelX * r : -n.pixelY;
        if (0 !== i) {
          if ((g.params.mousewheelInvert && (i = -i), g.params.freeMode)) {
            var o =
                g.getWrapperTranslate() + i * g.params.mousewheelSensitivity,
              r = g.isBeginning,
              n = g.isEnd;
            if (
              (o >= g.minTranslate() && (o = g.minTranslate()),
              o <= g.maxTranslate() && (o = g.maxTranslate()),
              g.setWrapperTransition(0),
              g.setWrapperTranslate(o),
              g.updateProgress(),
              g.updateActiveIndex(),
              ((!r && g.isBeginning) || (!n && g.isEnd)) && g.updateClasses(),
              g.params.freeModeSticky
                ? (clearTimeout(g.mousewheel.timeout),
                  (g.mousewheel.timeout = setTimeout(function () {
                    g.slideReset();
                  }, 300)))
                : g.params.lazyLoading && g.lazy && g.lazy.load(),
              g.emit("onScroll", g, e),
              g.params.autoplay &&
                g.params.autoplayDisableOnInteraction &&
                g.stopAutoplay(),
              0 === o || o === g.maxTranslate())
            )
              return;
          } else {
            if (60 < new window.Date().getTime() - g.mousewheel.lastScrollTime)
              if (i < 0)
                if ((g.isEnd && !g.params.loop) || g.animating) {
                  if (g.params.mousewheelReleaseOnEdges) return !0;
                } else g.slideNext(), g.emit("onScroll", g, e);
              else if ((g.isBeginning && !g.params.loop) || g.animating) {
                if (g.params.mousewheelReleaseOnEdges) return !0;
              } else g.slidePrev(), g.emit("onScroll", g, e);
            g.mousewheel.lastScrollTime = new window.Date().getTime();
          }
          return (
            e.preventDefault ? e.preventDefault() : (e.returnValue = !1), !1
          );
        }
      }
      function X(e, a) {
        e = O(e);
        var t = g.rtl ? -1 : 1,
          s = e.attr("data-swiper-parallax") || "0",
          i = e.attr("data-swiper-parallax-x"),
          r = e.attr("data-swiper-parallax-y");
        i || r
          ? ((i = i || "0"), (r = r || "0"))
          : g.isHorizontal()
          ? ((i = s), (r = "0"))
          : ((r = s), (i = "0")),
          (i =
            0 <= i.indexOf("%")
              ? parseInt(i, 10) * a * t + "%"
              : i * a * t + "px"),
          (r = 0 <= r.indexOf("%") ? parseInt(r, 10) * a + "%" : r * a + "px"),
          e.transform("translate3d(" + i + ", " + r + ",0px)");
      }
      function Y(e) {
        return (
          0 !== e.indexOf("on") &&
            (e =
              e[0] !== e[0].toUpperCase()
                ? "on" + e[0].toUpperCase() + e.substring(1)
                : "on" + e),
          e
        );
      }
    };
  N.prototype = {
    isSafari:
      0 <= (s = window.navigator.userAgent.toLowerCase()).indexOf("safari") &&
      s.indexOf("chrome") < 0 &&
      s.indexOf("android") < 0,
    isUiWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(
      window.navigator.userAgent
    ),
    isArray: function (e) {
      return "[object Array]" === Object.prototype.toString.apply(e);
    },
    browser: {
      ie: window.navigator.pointerEnabled || window.navigator.msPointerEnabled,
      ieTouch:
        (window.navigator.msPointerEnabled &&
          1 < window.navigator.msMaxTouchPoints) ||
        (window.navigator.pointerEnabled &&
          1 < window.navigator.maxTouchPoints),
      lteIE9:
        (((t = document.createElement("div")).innerHTML =
          "\x3c!--[if lte IE 9]><i></i><![endif]--\x3e"),
        1 === t.getElementsByTagName("i").length),
    },
    device:
      ((e = window.navigator.userAgent),
      (a = e.match(/(Android);?[\s\/]+([\d.]+)?/)),
      (s = e.match(/(iPad).*OS\s([\d_]+)/)),
      (t = e.match(/(iPod)(.*OS\s([\d_]+))?/)),
      (e = !s && e.match(/(iPhone\sOS|iOS)\s([\d_]+)/)),
      { ios: s || e || t, android: a }),
    support: {
      touch:
        (window.Modernizr && !0 === Modernizr.touch) ||
        !!(
          "ontouchstart" in window ||
          (window.DocumentTouch && document instanceof DocumentTouch)
        ),
      transforms3d:
        (window.Modernizr && !0 === Modernizr.csstransforms3d) ||
        "webkitPerspective" in (i = document.createElement("div").style) ||
        "MozPerspective" in i ||
        "OPerspective" in i ||
        "MsPerspective" in i ||
        "perspective" in i,
      flexbox: (function () {
        for (
          var e = document.createElement("div").style,
            a =
              "alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient".split(
                " "
              ),
            t = 0;
          t < a.length;
          t++
        )
          if (a[t] in e) return !0;
      })(),
      observer:
        "MutationObserver" in window || "WebkitMutationObserver" in window,
      passiveListener: (function () {
        var e = !1;
        try {
          var a = Object.defineProperty({}, "passive", {
            get: function () {
              e = !0;
            },
          });
          window.addEventListener("testPassiveListener", null, a);
        } catch (e) {}
        return e;
      })(),
      gestures: "ongesturestart" in window,
    },
    plugins: {},
  };
  var R =
    ((l.prototype = {
      addClass: function (e) {
        if (void 0 === e) return this;
        for (var a = e.split(" "), t = 0; t < a.length; t++)
          for (var s = 0; s < this.length; s++) this[s].classList.add(a[t]);
        return this;
      },
      removeClass: function (e) {
        for (var a = e.split(" "), t = 0; t < a.length; t++)
          for (var s = 0; s < this.length; s++) this[s].classList.remove(a[t]);
        return this;
      },
      hasClass: function (e) {
        return !!this[0] && this[0].classList.contains(e);
      },
      toggleClass: function (e) {
        for (var a = e.split(" "), t = 0; t < a.length; t++)
          for (var s = 0; s < this.length; s++) this[s].classList.toggle(a[t]);
        return this;
      },
      attr: function (e, a) {
        if (1 !== arguments.length || "string" != typeof e) {
          for (var t = 0; t < this.length; t++)
            if (2 === arguments.length) this[t].setAttribute(e, a);
            else
              for (var s in e)
                (this[t][s] = e[s]), this[t].setAttribute(s, e[s]);
          return this;
        }
        if (this[0]) return this[0].getAttribute(e);
      },
      removeAttr: function (e) {
        for (var a = 0; a < this.length; a++) this[a].removeAttribute(e);
        return this;
      },
      data: function (e, a) {
        if (void 0 !== a) {
          for (var t = 0; t < this.length; t++) {
            var s = this[t];
            s.dom7ElementDataStorage || (s.dom7ElementDataStorage = {}),
              (s.dom7ElementDataStorage[e] = a);
          }
          return this;
        }
        if (this[0]) {
          var i = this[0].getAttribute("data-" + e);
          return i
            ? i
            : this[0].dom7ElementDataStorage &&
              e in this[0].dom7ElementDataStorage
            ? this[0].dom7ElementDataStorage[e]
            : void 0;
        }
      },
      transform: function (e) {
        for (var a = 0; a < this.length; a++) {
          var t = this[a].style;
          t.webkitTransform =
            t.MsTransform =
            t.msTransform =
            t.MozTransform =
            t.OTransform =
            t.transform =
              e;
        }
        return this;
      },
      transition: function (e) {
        "string" != typeof e && (e += "ms");
        for (var a = 0; a < this.length; a++) {
          var t = this[a].style;
          t.webkitTransitionDuration =
            t.MsTransitionDuration =
            t.msTransitionDuration =
            t.MozTransitionDuration =
            t.OTransitionDuration =
            t.transitionDuration =
              e;
        }
        return this;
      },
      on: function (e, i, r, a) {
        function t(e) {
          var a = e.target;
          if (p(a).is(i)) r.call(a, e);
          else
            for (var t = p(a).parents(), s = 0; s < t.length; s++)
              p(t[s]).is(i) && r.call(t[s], e);
        }
        for (var s, n = e.split(" "), o = 0; o < this.length; o++)
          if ("function" == typeof i || !1 === i)
            for (
              "function" == typeof i && ((r = i), (a = arguments[2] || !1)),
                s = 0;
              s < n.length;
              s++
            )
              this[o].addEventListener(n[s], r, a);
          else
            for (s = 0; s < n.length; s++)
              this[o].dom7LiveListeners || (this[o].dom7LiveListeners = []),
                this[o].dom7LiveListeners.push({
                  listener: r,
                  liveListener: t,
                }),
                this[o].addEventListener(n[s], t, a);
        return this;
      },
      off: function (e, a, t, s) {
        for (var i = e.split(" "), r = 0; r < i.length; r++)
          for (var n = 0; n < this.length; n++)
            if ("function" == typeof a || !1 === a)
              "function" == typeof a && ((t = a), (s = arguments[2] || !1)),
                this[n].removeEventListener(i[r], t, s);
            else if (this[n].dom7LiveListeners)
              for (var o = 0; o < this[n].dom7LiveListeners.length; o++)
                this[n].dom7LiveListeners[o].listener === t &&
                  this[n].removeEventListener(
                    i[r],
                    this[n].dom7LiveListeners[o].liveListener,
                    s
                  );
        return this;
      },
      once: function (t, s, i, r) {
        var n = this;
        "function" == typeof s &&
          ((s = !1), (i = arguments[1]), (r = arguments[2])),
          n.on(
            t,
            s,
            function e(a) {
              i(a), n.off(t, s, e, r);
            },
            r
          );
      },
      trigger: function (a, t) {
        for (var s, e = 0; e < this.length; e++) {
          try {
            s = new window.CustomEvent(a, {
              detail: t,
              bubbles: !0,
              cancelable: !0,
            });
          } catch (e) {
            (s = document.createEvent("Event")).initEvent(a, !0, !0),
              (s.detail = t);
          }
          this[e].dispatchEvent(s);
        }
        return this;
      },
      transitionEnd: function (a) {
        var t,
          s = [
            "webkitTransitionEnd",
            "transitionend",
            "oTransitionEnd",
            "MSTransitionEnd",
            "msTransitionEnd",
          ],
          i = this;
        function r(e) {
          if (e.target === this)
            for (a.call(this, e), t = 0; t < s.length; t++) i.off(s[t], r);
        }
        if (a) for (t = 0; t < s.length; t++) i.on(s[t], r);
        return this;
      },
      width: function () {
        return this[0] === window
          ? window.innerWidth
          : 0 < this.length
          ? parseFloat(this.css("width"))
          : null;
      },
      outerWidth: function (e) {
        return 0 < this.length
          ? e
            ? this[0].offsetWidth +
              parseFloat(this.css("margin-right")) +
              parseFloat(this.css("margin-left"))
            : this[0].offsetWidth
          : null;
      },
      height: function () {
        return this[0] === window
          ? window.innerHeight
          : 0 < this.length
          ? parseFloat(this.css("height"))
          : null;
      },
      outerHeight: function (e) {
        return 0 < this.length
          ? e
            ? this[0].offsetHeight +
              parseFloat(this.css("margin-top")) +
              parseFloat(this.css("margin-bottom"))
            : this[0].offsetHeight
          : null;
      },
      offset: function () {
        if (0 < this.length) {
          var e = this[0],
            a = e.getBoundingClientRect(),
            t = document.body,
            s = e.clientTop || t.clientTop || 0,
            i = e.clientLeft || t.clientLeft || 0,
            t = window.pageYOffset || e.scrollTop,
            e = window.pageXOffset || e.scrollLeft;
          return { top: a.top + t - s, left: a.left + e - i };
        }
        return null;
      },
      css: function (e, a) {
        var t;
        if (1 === arguments.length) {
          if ("string" != typeof e) {
            for (t = 0; t < this.length; t++)
              for (var s in e) this[t].style[s] = e[s];
            return this;
          }
          if (this[0])
            return window.getComputedStyle(this[0], null).getPropertyValue(e);
        }
        if (2 !== arguments.length || "string" != typeof e) return this;
        for (t = 0; t < this.length; t++) this[t].style[e] = a;
        return this;
      },
      each: function (e) {
        for (var a = 0; a < this.length; a++) e.call(this[a], a, this[a]);
        return this;
      },
      html: function (e) {
        if (void 0 === e) return this[0] ? this[0].innerHTML : void 0;
        for (var a = 0; a < this.length; a++) this[a].innerHTML = e;
        return this;
      },
      text: function (e) {
        if (void 0 === e) return this[0] ? this[0].textContent.trim() : null;
        for (var a = 0; a < this.length; a++) this[a].textContent = e;
        return this;
      },
      is: function (e) {
        if (!this[0]) return !1;
        var a, t;
        if ("string" == typeof e) {
          var s = this[0];
          if (s === document) return e === document;
          if (s === window) return e === window;
          if (s.matches) return s.matches(e);
          if (s.webkitMatchesSelector) return s.webkitMatchesSelector(e);
          if (s.mozMatchesSelector) return s.mozMatchesSelector(e);
          if (s.msMatchesSelector) return s.msMatchesSelector(e);
          for (a = p(e), t = 0; t < a.length; t++)
            if (a[t] === this[0]) return !0;
          return !1;
        }
        if (e === document) return this[0] === document;
        if (e === window) return this[0] === window;
        if (e.nodeType || e instanceof l) {
          for (a = e.nodeType ? [e] : e, t = 0; t < a.length; t++)
            if (a[t] === this[0]) return !0;
          return !1;
        }
        return !1;
      },
      index: function () {
        if (this[0]) {
          for (var e = this[0], a = 0; null !== (e = e.previousSibling); )
            1 === e.nodeType && a++;
          return a;
        }
      },
      eq: function (e) {
        if (void 0 === e) return this;
        var a = this.length;
        return new l(
          a - 1 < e
            ? []
            : e < 0
            ? (a = a + e) < 0
              ? []
              : [this[a]]
            : [this[e]]
        );
      },
      append: function (e) {
        for (var a, t = 0; t < this.length; t++)
          if ("string" == typeof e) {
            var s = document.createElement("div");
            for (s.innerHTML = e; s.firstChild; )
              this[t].appendChild(s.firstChild);
          } else if (e instanceof l)
            for (a = 0; a < e.length; a++) this[t].appendChild(e[a]);
          else this[t].appendChild(e);
        return this;
      },
      prepend: function (e) {
        for (var a, t = 0; t < this.length; t++)
          if ("string" == typeof e) {
            var s = document.createElement("div");
            for (s.innerHTML = e, a = s.childNodes.length - 1; 0 <= a; a--)
              this[t].insertBefore(s.childNodes[a], this[t].childNodes[0]);
          } else if (e instanceof l)
            for (a = 0; a < e.length; a++)
              this[t].insertBefore(e[a], this[t].childNodes[0]);
          else this[t].insertBefore(e, this[t].childNodes[0]);
        return this;
      },
      insertBefore: function (e) {
        for (var a = p(e), t = 0; t < this.length; t++)
          if (1 === a.length) a[0].parentNode.insertBefore(this[t], a[0]);
          else if (1 < a.length)
            for (var s = 0; s < a.length; s++)
              a[s].parentNode.insertBefore(this[t].cloneNode(!0), a[s]);
      },
      insertAfter: function (e) {
        for (var a = p(e), t = 0; t < this.length; t++)
          if (1 === a.length)
            a[0].parentNode.insertBefore(this[t], a[0].nextSibling);
          else if (1 < a.length)
            for (var s = 0; s < a.length; s++)
              a[s].parentNode.insertBefore(
                this[t].cloneNode(!0),
                a[s].nextSibling
              );
      },
      next: function (e) {
        return 0 < this.length
          ? e
            ? this[0].nextElementSibling && p(this[0].nextElementSibling).is(e)
              ? new l([this[0].nextElementSibling])
              : new l([])
            : this[0].nextElementSibling
            ? new l([this[0].nextElementSibling])
            : new l([])
          : new l([]);
      },
      nextAll: function (e) {
        var a = [],
          t = this[0];
        if (!t) return new l([]);
        for (; t.nextElementSibling; ) {
          var s = t.nextElementSibling;
          (!e || p(s).is(e)) && a.push(s), (t = s);
        }
        return new l(a);
      },
      prev: function (e) {
        return 0 < this.length
          ? e
            ? this[0].previousElementSibling &&
              p(this[0].previousElementSibling).is(e)
              ? new l([this[0].previousElementSibling])
              : new l([])
            : this[0].previousElementSibling
            ? new l([this[0].previousElementSibling])
            : new l([])
          : new l([]);
      },
      prevAll: function (e) {
        var a = [],
          t = this[0];
        if (!t) return new l([]);
        for (; t.previousElementSibling; ) {
          var s = t.previousElementSibling;
          (!e || p(s).is(e)) && a.push(s), (t = s);
        }
        return new l(a);
      },
      parent: function (e) {
        for (var a = [], t = 0; t < this.length; t++)
          (!e || p(this[t].parentNode).is(e)) && a.push(this[t].parentNode);
        return p(p.unique(a));
      },
      parents: function (e) {
        for (var a = [], t = 0; t < this.length; t++)
          for (var s = this[t].parentNode; s; )
            (e && !p(s).is(e)) || a.push(s), (s = s.parentNode);
        return p(p.unique(a));
      },
      find: function (e) {
        for (var a = [], t = 0; t < this.length; t++)
          for (var s = this[t].querySelectorAll(e), i = 0; i < s.length; i++)
            a.push(s[i]);
        return new l(a);
      },
      children: function (e) {
        for (var a = [], t = 0; t < this.length; t++)
          for (var s = this[t].childNodes, i = 0; i < s.length; i++)
            e
              ? 1 === s[i].nodeType && p(s[i]).is(e) && a.push(s[i])
              : 1 === s[i].nodeType && a.push(s[i]);
        return new l(p.unique(a));
      },
      remove: function () {
        for (var e = 0; e < this.length; e++)
          this[e].parentNode && this[e].parentNode.removeChild(this[e]);
        return this;
      },
      add: function () {
        for (var e = 0; e < arguments.length; e++)
          for (var a = p(arguments[e]), t = 0; t < a.length; t++)
            (this[this.length] = a[t]), this.length++;
        return this;
      },
    }),
    (p.fn = l.prototype),
    (p.unique = function (e) {
      for (var a = [], t = 0; t < e.length; t++)
        -1 === a.indexOf(e[t]) && a.push(e[t]);
      return a;
    }),
    p);
  function l(e) {
    for (var a = 0, a = 0; a < e.length; a++) this[a] = e[a];
    return (this.length = e.length), this;
  }
  function p(e, a) {
    var t = [],
      s = 0;
    if (e && !a && e instanceof l) return e;
    if (e)
      if ("string" == typeof e) {
        var i,
          r,
          n = e.trim();
        if (0 <= n.indexOf("<") && 0 <= n.indexOf(">")) {
          var o = "div";
          for (
            0 === n.indexOf("<li") && (o = "ul"),
              0 === n.indexOf("<tr") && (o = "tbody"),
              (0 !== n.indexOf("<td") && 0 !== n.indexOf("<th")) || (o = "tr"),
              0 === n.indexOf("<tbody") && (o = "table"),
              0 === n.indexOf("<option") && (o = "select"),
              (r = document.createElement(o)).innerHTML = e,
              s = 0;
            s < r.childNodes.length;
            s++
          )
            t.push(r.childNodes[s]);
        } else
          for (
            i =
              a || "#" !== e[0] || e.match(/[ .<>:~]/)
                ? (a || document).querySelectorAll(e)
                : [document.getElementById(e.split("#")[1])],
              s = 0;
            s < i.length;
            s++
          )
            i[s] && t.push(i[s]);
      } else if (e.nodeType || e === window || e === document) t.push(e);
      else if (0 < e.length && e[0].nodeType)
        for (s = 0; s < e.length; s++) t.push(e[s]);
    return new l(t);
  }
  for (var i, r = ["jQuery", "Zepto", "Dom7"], n = 0; n < r.length; n++)
    window[r[n]] &&
      (function (e) {
        e.fn.swiper = function (a) {
          var t;
          return (
            e(this).each(function () {
              var e = new N(this, a);
              t = t || e;
            }),
            t
          );
        };
      })(window[r[n]]);
  (i = void 0 === R ? window.Dom7 || window.Zepto || window.jQuery : R) &&
    ("transitionEnd" in i.fn ||
      (i.fn.transitionEnd = function (a) {
        var t,
          s = [
            "webkitTransitionEnd",
            "transitionend",
            "oTransitionEnd",
            "MSTransitionEnd",
            "msTransitionEnd",
          ],
          i = this;
        function r(e) {
          if (e.target === this)
            for (a.call(this, e), t = 0; t < s.length; t++) i.off(s[t], r);
        }
        if (a) for (t = 0; t < s.length; t++) i.on(s[t], r);
        return this;
      }),
    "transform" in i.fn ||
      (i.fn.transform = function (e) {
        for (var a = 0; a < this.length; a++) {
          var t = this[a].style;
          t.webkitTransform =
            t.MsTransform =
            t.msTransform =
            t.MozTransform =
            t.OTransform =
            t.transform =
              e;
        }
        return this;
      }),
    "transition" in i.fn ||
      (i.fn.transition = function (e) {
        "string" != typeof e && (e += "ms");
        for (var a = 0; a < this.length; a++) {
          var t = this[a].style;
          t.webkitTransitionDuration =
            t.MsTransitionDuration =
            t.msTransitionDuration =
            t.MozTransitionDuration =
            t.OTransitionDuration =
            t.transitionDuration =
              e;
        }
        return this;
      }),
    "outerWidth" in i.fn ||
      (i.fn.outerWidth = function (e) {
        return 0 < this.length
          ? e
            ? this[0].offsetWidth +
              parseFloat(this.css("margin-right")) +
              parseFloat(this.css("margin-left"))
            : this[0].offsetWidth
          : null;
      })),
    (window.Swiper = N);
})(),
  "undefined" != typeof module
    ? (module.exports = window.Swiper)
    : "function" == typeof define &&
      define.amd &&
      define([], function () {
        return window.Swiper;
      });
