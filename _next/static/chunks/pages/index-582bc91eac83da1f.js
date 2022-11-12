(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [405],
  {
    8946: function (e, n, t) {
      "use strict";
      t.r(n),
        t.d(n, {
          SECTIONS: function () {
            return Vn;
          },
          __N_SSG: function () {
            return Yn;
          },
          default: function () {
            return Kn;
          },
        });
      var o = t(9499),
        r = t(5152),
        i = t.n(r),
        a = t(7294),
        c = t(4294),
        l = t(4393),
        s = t(320),
        d = t(4141),
        p = t(7247),
        u = d.ZP.div.withConfig({
          displayName: "Flex",
          componentId: "sc-zk1z52-0",
        })(
          ["display:flex;", ""],
          (0, p.qC)(p.$_, p.Dh, p.Cg, p.bK, p.GQ, p.FK)
        ),
        f = t(4730),
        h = t(6835),
        m = t(9920),
        g = t(5893),
        y = ["open", "show", "color", "onClick", "animationProps"];
      function b(e, n) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          n &&
            (o = o.filter(function (n) {
              return Object.getOwnPropertyDescriptor(e, n).enumerable;
            })),
            t.push.apply(t, o);
        }
        return t;
      }
      function v(e) {
        for (var n = 1; n < arguments.length; n++) {
          var t = null != arguments[n] ? arguments[n] : {};
          n % 2
            ? b(Object(t), !0).forEach(function (n) {
                (0, o.Z)(e, n, t[n]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : b(Object(t)).forEach(function (n) {
                Object.defineProperty(
                  e,
                  n,
                  Object.getOwnPropertyDescriptor(t, n)
                );
              });
        }
        return e;
      }
      var x = d.ZP.button.withConfig({
          displayName: "BurgerButton__Button",
          componentId: "sc-6xlpos-0",
        })([
          "display:block;background-color:transparent;outline:none;cursor:pointer;width:40px;border:none;padding:0;margin:0;transition:all ease-in 0.5s;",
        ]),
        j = d.ZP.svg.withConfig({
          displayName: "BurgerButton__Svg",
          componentId: "sc-6xlpos-1",
        })(["transition:all ease-in 0.5s;"]),
        w = (0, a.forwardRef)(function (e, n) {
          var t = e.open,
            o = e.show,
            r = void 0 === o || o,
            i = e.color,
            c = void 0 === i ? "#fafafa" : i,
            l = e.onClick,
            s = e.animationProps,
            d = (0, f.Z)(e, y),
            p = (0, a.useRef)(),
            u = (function (e) {
              var n = e.play,
                t = e.animationProps,
                o = (0, m.useSpring)(function () {
                  return v({ width: "0%" }, t);
                }),
                r = (0, h.Z)(o, 2),
                i = r[0];
              return (
                (0, r[1])(
                  v(n ? { width: "100%", delay: 2e3 } : { width: "0%" }, t)
                ),
                i
              );
            })({ play: r, animationProps: s }),
            b = (0, m.useSpring)({
              transform: t
                ? "translate(10px, 4px) rotate(45deg)"
                : "translate(2px, 19px) rotate(0deg)",
            }),
            w = (0, m.useSpring)({
              transform: t
                ? "translate(5px, 32px) rotate(-45deg)"
                : "translate(2px, 31px) rotate(0deg)",
            });
          return (0,
          g.jsx)(x, v(v({ onClick: l, ref: n }, d), {}, { children: (0, g.jsxs)(j, { width: "40", height: "32", viewBox: "0 0 44 44", fill: c, xmlns: "http://www.w3.org/2000/svg", ref: p, children: [(0, g.jsx)(m.animated.rect, { height: "4", rx: "2", style: v(v({}, b), u) }), (0, g.jsx)(m.animated.rect, { height: "4", rx: "2", style: v(v({}, w), u) })] }) }));
        }),
        O = t(4680),
        P = t(1472),
        k = [
          "transition",
          "type",
          "blendMode",
          "color",
          "fontWeight",
          "fontFamily",
          "fontSize",
          "animate",
          "hover",
          "children",
        ],
        C = ["children"];
      function S(e, n) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          n &&
            (o = o.filter(function (n) {
              return Object.getOwnPropertyDescriptor(e, n).enumerable;
            })),
            t.push.apply(t, o);
        }
        return t;
      }
      function Z(e) {
        for (var n = 1; n < arguments.length; n++) {
          var t = null != arguments[n] ? arguments[n] : {};
          n % 2
            ? S(Object(t), !0).forEach(function (n) {
                (0, o.Z)(e, n, t[n]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : S(Object(t)).forEach(function (n) {
                Object.defineProperty(
                  e,
                  n,
                  Object.getOwnPropertyDescriptor(t, n)
                );
              });
        }
        return e;
      }
      var _ = function (e) {
          var n,
            t = e.transition,
            o = e.type,
            r = void 0 === o ? "h1" : o,
            i = e.blendMode,
            a = void 0 === i ? "normal" : i,
            c = e.color,
            l =
              void 0 === c
                ? null === (n = s.r.colors) || void 0 === n
                  ? void 0
                  : n.primary
                : c,
            p = e.fontWeight,
            u = e.fontFamily,
            h = e.fontSize,
            m = (e.animate, e.hover),
            y = e.children,
            b = (0, f.Z)(e, k),
            v = (0, P.animated)(
              (0, d.ZP)(r).withConfig({
                displayName: "Text__StyledAndAnimated",
                componentId: "sc-6xey42-0",
              })(
                [
                  "transition:",
                  ";font-size:",
                  ";color:",
                  ";font-weight:",
                  ";margin:0px;mix-blend-mode:",
                  ";font-family:",
                  ";@media ",
                  "{font-size:",
                  ";}&:hover{",
                  "}",
                ],
                t,
                null !== h && void 0 !== h ? h : O.Rq[r].mobile,
                l,
                null !== p && void 0 !== p ? p : O.Rq[r].fontWeight,
                a,
                null !== u && void 0 !== u ? u : O.Rq[r].family,
                O.Uh.desktop,
                null !== h && void 0 !== h ? h : O.Rq[r].desktop,
                m
              )
            );
          return (0, g.jsx)(v, Z(Z({}, b), {}, { children: y }));
        },
        D = function (e) {
          var n = e.children,
            t = (0, f.Z)(e, C);
          return (0, g.jsx)(_, Z(Z({}, t), {}, { children: n }));
        },
        z = t(415),
        E = (0, d.ZP)(z.E.div).withConfig({
          displayName: "Box",
          componentId: "sc-9yahyz-0",
        })(["display:block;", ""], (0, p.qC)(p.$_, p.Dh, p.Cg, p.bK, p.FK)),
        I = t(4928);
      (0, P.animated)(
        d.ZP.div.withConfig({
          displayName: "Logo__Container",
          componentId: "sc-63knk7-0",
        })([
          "position:relative;height:100%;overflow:hidden;cursor:pointer;display:flex;justify-content:center;align-items:center;",
        ])
      ),
        (0, P.animated)(
          d.ZP.div.withConfig({
            displayName: "Logo__TextContainer",
            componentId: "sc-63knk7-1",
          })([
            "width:100%;height:100%;line-height:110px;color:black;font-size:8em;font-weight:800;will-change:transform,opacity;overflow:hidden;",
          ])
        ),
        (0, P.animated)(
          d.ZP.div.withConfig({
            displayName: "Logo__Text",
            componentId: "sc-63knk7-2",
          })([
            "overflow:hidden;color:white;font-size:1.7rem;font-family:Circular;",
          ])
        ),
        d.ZP.section.withConfig({
          displayName: "Section__Wrapper",
          componentId: "sc-1320a5x-0",
        })(["", ""], function (e) {
          var n = e.top;
          return "\n  position: absolute;\n  right: 0;\n  top: ".concat(
            n,
            "vh;\n  width: 100%;\n  height: 100vh;\n  z-index: 9;\n"
          );
        }),
        d.ZP.div.withConfig({
          displayName: "LiquidEffect__Container",
          componentId: "sc-jncz18-0",
        })(
          [
            ":root{--background:#f8f8f8;--dark:#303032;--liquid:blue;}div{position:relative;background:#000;border:0.25rem solid #000;height:8rem;width:8rem;outline:0;overflow:hidden;}div::after{background:#fff;content:'EJEMPLO';height:100%;width:100%;display:flex;align-items:center;justify-content:center;}div::before{content:'';z-index:-1;position:absolute;bottom:-50%;left:-50%;height:200%;width:200%;background-color:",
            ";border-radius:35%;animation:spin 6s ease-in-out infinite;}@keyframes spin{0%{transform:translateY(0) rotate(0deg);}100%{transform:translateY(-100%) rotate(400deg);}}",
          ],
          s.r.colors.orange
        );
      var N = function (e) {
          var n = e.ref,
            t = e.onMouseOver,
            o = void 0 === t ? function (e) {} : t,
            r = e.onMouseOut,
            i = void 0 === r ? function (e) {} : r,
            c = (0, a.useRef)();
          return (
            (0, a.useEffect)(
              function () {
                var e,
                  t = null !== (e = n.current) && void 0 !== e ? e : c.current;
                if (t)
                  return (
                    t.addEventListener("mouseover", o),
                    t.addEventListener("mouseout", i),
                    function () {
                      t.removeEventListener("mouseover", o),
                        t.removeEventListener("mouseout", i);
                    }
                  );
              },
              [c, n]
            ),
            c
          );
        },
        L = t(1485),
        M = function () {
          return (0, L.iP)().width < 834;
        },
        F = t(8075),
        R = function (e) {
          var n = null !== e && void 0 !== e ? e : {},
            t = n.ref,
            o = n.onScroll,
            r = void 0 === o ? function () {} : o,
            i = (0, F.lh)().scroll,
            c = (0, a.useState)(0),
            l = c[0],
            s = c[1],
            d = function (e) {
              r(e), s(e);
            };
          return (
            (0, a.useEffect)(
              function () {
                t
                  ? null === t ||
                    void 0 === t ||
                    t.addEventListener("scroll", function (e) {
                      var n = e.currentTarget,
                        t = null === n || void 0 === n ? void 0 : n.scrollTop,
                        o =
                          (null === n || void 0 === n
                            ? void 0
                            : n.scrollHeight) -
                          (null === n || void 0 === n
                            ? void 0
                            : n.clientHeight);
                      d((100 * t) / o);
                    })
                  : i
                  ? null === i ||
                    void 0 === i ||
                    i.on("scroll", function (e) {
                      var n = e.limit,
                        t = (e.scroll.y / n.y) * 100;
                      d(t);
                    })
                  : document.addEventListener("scroll", function (e) {
                      var n = e.target.documentElement,
                        t = null === n || void 0 === n ? void 0 : n.scrollTop,
                        o =
                          (null === n || void 0 === n
                            ? void 0
                            : n.scrollHeight) -
                          (null === n || void 0 === n
                            ? void 0
                            : n.clientHeight);
                      d((100 * t) / o);
                    });
              },
              [t, i]
            ),
            { progress: l, locomotiveScroll: i }
          );
        },
        T = t(1248),
        B = t.n(T),
        A = function (e) {
          var n = M(),
            t = function (e) {
              return n ? e >= 13 && e <= 34 : e >= 14 && e <= 34;
            };
          return "undefined" === typeof e
            ? function (e) {
                return t(e);
              }
            : t(e);
        },
        W = function (e) {
          var n = e.lottieRef,
            t = (0, a.useRef)(),
            o = A();
          return (
            (0, a.useEffect)(
              function () {
                return (
                  (t.current = B().loadAnimation({
                    container: n.current,
                    renderer: "svg",
                    loop: !1,
                    autoplay: !1,
                    path: "/marplacodeanimation.json",
                  })),
                  function () {
                    var e;
                    null === (e = t.current) || void 0 === e || e.destroy();
                  }
                );
              },
              [t.current]
            ),
            function (e) {
              !(function (e) {
                var n,
                  o,
                  r = e.duration,
                  i = void 0 === r ? 1e3 : r,
                  a = e.scroll,
                  c =
                    null === (n = t.current) || void 0 === n
                      ? void 0
                      : n.totalFrames,
                  l = (c / 100) * ((100 * a) / (i / 100));
                null === (o = t.current) ||
                  void 0 === o ||
                  o.goToAndStop(l >= c ? c : l, !0);
              })({ scroll: e }),
                (function (e) {
                  var t = e.scroll;
                  o(t)
                    ? n.current.classList.add("black")
                    : n.current.classList.remove("black");
                })({ scroll: e });
            }
          );
        },
        q = function (e) {
          var n = e.containerRef,
            t = e.contentRef,
            o = (0, a.useRef)(),
            r = (0, a.useRef)(),
            i = !M(),
            c = function (e) {
              var n = e.containerRef,
                t = e.contentRef,
                o = e.mouseX,
                r = e.mouseY,
                i = 0,
                a = 0,
                c = n.getBoundingClientRect(),
                l = 0.6 * c.width;
              (function (e, n, t, o) {
                var r = e - t,
                  i = n - o;
                return Math.hypot(r, i);
              })(
                o + window.scrollX,
                r + window.scrollY,
                c.left + c.width / 2,
                c.top + c.height / 2
              ) < l
                ? ((i = 0.2 * (o + window.scrollX - (c.left + c.width / 2))),
                  (a = 0.2 * (r + window.scrollY - (c.top + c.height / 2))),
                  (n.style.transform = "translate3d("
                    .concat(i, "px, ")
                    .concat(a, "px, 0)")),
                  t &&
                    (t.style.transform = "translate3d("
                      .concat(i / 4, "px, ")
                      .concat(a / 4, "px, 0)")))
                : ((n.style.transform = "translate3d(0, 0, 0)"),
                  t && (t.style.transform = "translate3d(0, 0, 0)"));
            };
          return (
            (0, a.useEffect)(
              function () {
                var e,
                  a,
                  l =
                    null !==
                      (e = null === n || void 0 === n ? void 0 : n.current) &&
                    void 0 !== e
                      ? e
                      : o.current,
                  s =
                    null !==
                      (a = null === t || void 0 === t ? void 0 : t.current) &&
                    void 0 !== a
                      ? a
                      : r.current,
                  d = function (e) {
                    var n = e.clientX,
                      t = e.clientY;
                    c({ containerRef: l, contentRef: s, mouseX: n, mouseY: t });
                  };
                if (l && i)
                  return (
                    l.addEventListener("mousemove", d),
                    function () {
                      l.removeEventListener("mousemove", d);
                    }
                  );
              },
              [o, r, n, t, i]
            ),
            { containerRef: o, contentRef: r }
          );
        },
        H = [
          "href",
          "children",
          "primaryColor",
          "secondaryColor",
          "selected",
          "fontSize",
          "selectedTextColor",
          "onClick",
        ];
      function V(e, n) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          n &&
            (o = o.filter(function (n) {
              return Object.getOwnPropertyDescriptor(e, n).enumerable;
            })),
            t.push.apply(t, o);
        }
        return t;
      }
      function U(e) {
        for (var n = 1; n < arguments.length; n++) {
          var t = null != arguments[n] ? arguments[n] : {};
          n % 2
            ? V(Object(t), !0).forEach(function (n) {
                (0, o.Z)(e, n, t[n]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : V(Object(t)).forEach(function (n) {
                Object.defineProperty(
                  e,
                  n,
                  Object.getOwnPropertyDescriptor(t, n)
                );
              });
        }
        return e;
      }
      var X = d.ZP.span.withConfig({
          displayName: "Button__Text",
          componentId: "sc-gho6jd-0",
        })(["", ""], function (e) {
          var n = e.primaryColor,
            t = e.secondaryColor;
          return "\n\n  display: block;\n\n  &::before,\n  &::after {\n    content: attr(data-text);\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    color: "
            .concat(
              null !== n && void 0 !== n ? n : s.r.colors.primary,
              ";\n    white-space: nowrap;\n    transform: translate3d(-50%, -50%, 0);\n    transition: all 0.65s "
            )
            .concat(
              s.r.transitions.easeOutCirc,
              ";\n  }\n\n  &::after {\n    color: "
            )
            .concat(
              null !== t && void 0 !== t ? t : s.r.colors.secondary,
              ";\n    transform: translate3d(-50%, 140%, 0);\n  }\n"
            );
        }),
        Y = d.ZP.button.withConfig({
          displayName: "Button__StyledButton",
          componentId: "sc-gho6jd-1",
        })(["", ""], function (e) {
          var n,
            t,
            o = e.primaryColor,
            r = e.secondaryColor,
            i = e.fontSize,
            a = void 0 === i ? "15px" : i,
            c = (e.isHover, e.isActive),
            l = e.checkboxMode,
            d = e.buttonStyles,
            p = e.selectedTextColor;
          return "\n  font-family: LibreFranklin;\n  font-size: "
            .concat(
              a,
              ";\n  position: relative;\n  display: inline-flex;\n  justify-content: center;\n  padding: 1em 2em;\n  max-width: 300px;\n  max-height: 75px;\n  font-weight: 200;\n  line-height: 1.25;\n  letter-spacing: 0.025em;\n  color: "
            )
            .concat(
              null !== o && void 0 !== o ? o : s.r.colors.primary,
              ";\n  background: "
            )
            .concat(
              null !== r && void 0 !== r ? r : s.r.colors.secondary,
              ";\n  border: 0.5px solid #cccccc;\n  border-radius: 50px;\n  user-select: none;\n  cursor: pointer;\n  overflow: hidden;\n  transition: all 0.75s "
            )
            .concat(function (e) {
              return e.theme.transitions.easeOutCirc;
            }, ";\n\n  /* Text wrapper */\n  > span {\n    z-index: 100;\n    position: relative;\n    color: transparent;\n  }\n\n  &:hover {\n    border-color: #cccccc;\n\n    ")
            .concat(
              X,
              " {\n      &::before {\n        transform: translate3d(-50%, -300%, 0);\n      }\n\n      &::after {\n        color: "
            )
            .concat(
              l
                ? null !== o && void 0 !== o
                  ? o
                  : s.r.colors.primary
                : null !== (n = null !== p && void 0 !== p ? p : r) &&
                  void 0 !== n
                ? n
                : s.r.colors.secondary,
              ";\n        transform: translate3d(-50%, -50%, 0);\n      }\n    }\n  }\n\n  "
            )
            .concat(
              c
                ? "\n    border-color: #cccccc;\n\n    "
                    .concat(
                      X,
                      " {\n      &::before {\n        transform: translate3d(-50%, -300%, 0);\n      }\n\n      &::after {\n        color: "
                    )
                    .concat(
                      null !== (t = null !== p && void 0 !== p ? p : r) &&
                        void 0 !== t
                        ? t
                        : s.r.colors.secondary,
                      ";\n        transform: translate3d(-50%, -50%, 0);\n      }\n    }\n\n     &:hover {\n\n    "
                    )
                    .concat(X, " {\n   \n      &::after {\n        color: ")
                    .concat(p, ";\n      }\n    }\n  }\n  ")
                : "",
              "\n\n\n  "
            )
            .concat(d, "\n");
        }),
        G = d.ZP.div.withConfig({
          displayName: "Button__Fill",
          componentId: "sc-gho6jd-2",
        })(["", ""], function (e) {
          var n = e.primaryColor,
            t = e.isActive;
          return "\n  z-index: 10;\n  position: absolute;\n  top: -50%;\n  left: -25%;\n  width: 150%;\n  height: 250%;\n  display: block;\n  border-radius: 50%;\n  background: "
            .concat(
              null !== n && void 0 !== n ? n : s.r.colors.primary,
              ";\n  pointer-events: none;\n  transform: translate3d(0, "
            )
            .concat(
              t ? 10 : 80,
              "%, 0);\n  transition: all 0.5s cubic-bezier(0.19, 1, 0.22, 1);\n"
            );
        }),
        K = (0, a.forwardRef)(function (e, n) {
          var t = e.href,
            o = e.children,
            r = e.primaryColor,
            i = e.secondaryColor,
            c = e.selected,
            l = e.fontSize,
            s = e.selectedTextColor,
            d = e.onClick,
            p = (0, f.Z)(e, H),
            u = (0, a.useRef)(),
            h = (0, a.useRef)(),
            m = (0, a.useRef)(),
            y = "boolean" === typeof c;
          return (
            N({
              ref: h,
              onMouseOver: function (e) {
                return (
                  !y &&
                  void (m.current.style.transform = "translate3d(0, 10%, 0)")
                );
              },
              onMouseOut: function (e) {
                return (
                  !y &&
                  void (m.current.style.transform = "translate3d(0, -100%, 0)")
                );
              },
            }),
            q({ containerRef: h, contentRef: u }),
            (0, g.jsxs)(
              Y,
              U(
                U(
                  {
                    ref: h,
                    href: t,
                    primaryColor: r,
                    secondaryColor: i,
                    selectedTextColor: s,
                    isActive: c,
                    fontSize: l,
                    checkboxMode: y,
                    onClick: d,
                  },
                  p
                ),
                {},
                {
                  children: [
                    (0, g.jsx)("span", {
                      ref: u,
                      children: (0, g.jsx)(X, { "data-text": o, children: o }),
                    }),
                    (0, g.jsx)(G, { ref: m, isActive: c, primaryColor: r }),
                  ],
                }
              )
            )
          );
        }),
        $ = t(6893),
        J = ["arrowAnimationProps", "circleAnimationProps", "rotation"];
      function Q(e, n) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          n &&
            (o = o.filter(function (n) {
              return Object.getOwnPropertyDescriptor(e, n).enumerable;
            })),
            t.push.apply(t, o);
        }
        return t;
      }
      function ee(e) {
        for (var n = 1; n < arguments.length; n++) {
          var t = null != arguments[n] ? arguments[n] : {};
          n % 2
            ? Q(Object(t), !0).forEach(function (n) {
                (0, o.Z)(e, n, t[n]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : Q(Object(t)).forEach(function (n) {
                Object.defineProperty(
                  e,
                  n,
                  Object.getOwnPropertyDescriptor(t, n)
                );
              });
        }
        return e;
      }
      var ne = (0, d.ZP)(P.animated.div).withConfig({
          displayName: "ArrowButton__Container",
          componentId: "sc-fjnwzl-0",
        })(["", ""], function (e) {
          e.rotation;
          var n = e.width,
            t = void 0 === n ? 72 : n,
            o = e.height,
            r = void 0 === o ? 72 : o;
          return "\n  position: relative;\n  color: inherit;\n  border-radius: 100px;\n  cursor: pointer;\n  width: "
            .concat(t, "px;\n  height: ")
            .concat(
              r,
              "px;\n  display: flex;\n  justify-content: center;\n  mix-blend-mode: difference;\n  justify-content: center;\n  align-items: center;\n  border: 1px solid rgba(255, 255, 255, 0.25);\n"
            );
        }),
        te = (0, d.ZP)((0, P.animated)($.bTu)).withConfig({
          displayName: "ArrowButton__Arrow",
          componentId: "sc-fjnwzl-1",
        })([""]),
        oe = function (e) {
          var n = e.arrowAnimationProps,
            t = e.circleAnimationProps,
            o = e.rotation,
            r = (0, f.Z)(e, J),
            i = (0, I.useSpring)(
              ee(
                {
                  from: {
                    transform: "translateX(0) rotate(".concat(o, "deg)"),
                  },
                  to: {
                    transform: "translateX(90%) rotate(".concat(o, "deg)"),
                  },
                  loop: !0,
                  delay: 600,
                  config: { tension: 120, friction: 14 },
                },
                n
              )
            ),
            c = (0, I.useSpring)(
              ee(
                {
                  from: {
                    border: "1px solid rgba(255, 255, 255, 0.25)",
                    transform: "rotate(".concat(o, "deg)"),
                  },
                  to: {
                    border: "1px solid rgba(255, 255, 255, 0.99)",
                    transform: "rotate(".concat(o, "deg)"),
                  },
                  loop: !0,
                  delay: 600,
                  config: { tension: 120, friction: 14 },
                },
                t
              )
            ),
            l = (0, a.useRef)();
          return (
            q({ containerRef: l }),
            (0, g.jsx)(
              ne,
              ee(
                ee({ style: c }, r),
                {},
                {
                  ref: l,
                  children: (0, g.jsx)(te, {
                    color: "white",
                    size: 15,
                    style: i,
                  }),
                }
              )
            )
          );
        },
        re = ["delay", "play"];
      function ie(e, n) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          n &&
            (o = o.filter(function (n) {
              return Object.getOwnPropertyDescriptor(e, n).enumerable;
            })),
            t.push.apply(t, o);
        }
        return t;
      }
      var ae = (0, P.animated)(
          d.ZP.div.withConfig({
            displayName: "Line__StyledLine",
            componentId: "sc-15yvabf-0",
          })(["", ""], function (e) {
            var n = e.color,
              t = void 0 === n ? "#4657646b" : n,
              o = e.height,
              r = void 0 === o ? 1 : o,
              i = e.blendMode,
              a = void 0 === i ? "normal" : i;
            return "\n    background-color: "
              .concat(t, ";\n    mix-blend-mode: ")
              .concat(a, ";\n    width: 0%;\n    height: ")
              .concat(r, "px;\n    ");
          })
        ),
        ce = function (e) {
          var n = e.delay,
            t = void 0 === n ? 0 : n,
            r = e.play,
            i = void 0 !== r && r,
            a = (0, f.Z)(e, re),
            c = (0, P.useSpring)({ width: i ? "100%" : "0%", delay: t });
          return (0, g.jsx)(
            ae,
            (function (e) {
              for (var n = 1; n < arguments.length; n++) {
                var t = null != arguments[n] ? arguments[n] : {};
                n % 2
                  ? ie(Object(t), !0).forEach(function (n) {
                      (0, o.Z)(e, n, t[n]);
                    })
                  : Object.getOwnPropertyDescriptors
                  ? Object.defineProperties(
                      e,
                      Object.getOwnPropertyDescriptors(t)
                    )
                  : ie(Object(t)).forEach(function (n) {
                      Object.defineProperty(
                        e,
                        n,
                        Object.getOwnPropertyDescriptor(t, n)
                      );
                    });
              }
              return e;
            })({ style: c }, a)
          );
        },
        le = d.ZP.div.withConfig({
          displayName: "Spacer",
          componentId: "sc-1eo5lk1-0",
        })(["", ""], function (e) {
          var n = e.vertical,
            t = e.horizontal;
          return "\nwidth: ".concat(t, ";\nheight: ").concat(n, ";\n");
        }),
        se = d.ZP.button.withConfig({
          displayName: "OpenButton__Button",
          componentId: "sc-1usp8c7-0",
        })([
          "display:block;background-color:transparent;outline:none;cursor:pointer;width:40px;border:none;padding:0;margin:0;",
        ]),
        de = function (e) {
          var n = e.open,
            t = e.onClick,
            o = (0, m.useSpring)({
              transform: n
                ? "translate(40px, 23px) rotate(180deg)"
                : "translate(20px, 0px) rotate(90deg)",
            }),
            r = (0, m.useSpring)({ transform: "translate(0px, 20px)" });
          return (0, g.jsx)(se, {
            onClick: t,
            children: (0, g.jsxs)("svg", {
              width: "20",
              height: "20",
              viewBox: "0 0 40 40",
              fill: "#000",
              children: [
                (0, g.jsx)(m.animated.rect, {
                  height: "3",
                  rx: "2",
                  width: "100%",
                  style: o,
                }),
                (0, g.jsx)(m.animated.rect, {
                  height: "3",
                  rx: "2",
                  width: "100%",
                  style: r,
                }),
              ],
            }),
          });
        },
        pe = ["show", "color1", "color2", "onClick", "children"];
      function ue(e, n) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          n &&
            (o = o.filter(function (n) {
              return Object.getOwnPropertyDescriptor(e, n).enumerable;
            })),
            t.push.apply(t, o);
        }
        return t;
      }
      function fe(e) {
        for (var n = 1; n < arguments.length; n++) {
          var t = null != arguments[n] ? arguments[n] : {};
          n % 2
            ? ue(Object(t), !0).forEach(function (n) {
                (0, o.Z)(e, n, t[n]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : ue(Object(t)).forEach(function (n) {
                Object.defineProperty(
                  e,
                  n,
                  Object.getOwnPropertyDescriptor(t, n)
                );
              });
        }
        return e;
      }
      var he = d.ZP.a.withConfig({
          displayName: "Link__Container",
          componentId: "sc-hakxyg-0",
        })([
          "position:relative;cursor:pointer;display:inline-block;text-decoration:none;",
        ]),
        me = function (e) {
          var n = e.show,
            t = e.color1,
            o = void 0 === t ? "white" : t,
            r = e.color2,
            i = void 0 === r ? "black" : r,
            c = e.onClick,
            l = void 0 === c ? function () {} : c,
            s = e.children,
            d = (0, f.Z)(e, pe),
            p = (0, a.useState)(!1),
            h = p[0],
            m = p[1];
          return (0, g.jsx)("div", {
            children: (0, g.jsxs)(
              he,
              fe(
                fe(
                  {
                    onClick: l,
                    onMouseOver: function () {
                      return m(!0);
                    },
                    onMouseLeave: function () {
                      return m(!1);
                    },
                  },
                  d
                ),
                {},
                {
                  children: [
                    "function" === typeof s ? s({ hover: h }) : s,
                    (0, g.jsx)(ce, { color: o, play: n }),
                    (0, g.jsx)(u, {
                      position: "absolute",
                      bottom: 0,
                      width: "100%",
                      children: (0, g.jsx)(ce, {
                        color: i,
                        height: 2,
                        play: h,
                      }),
                    }),
                  ],
                }
              )
            ),
          });
        },
        ge = ["type"];
      function ye(e, n) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          n &&
            (o = o.filter(function (n) {
              return Object.getOwnPropertyDescriptor(e, n).enumerable;
            })),
            t.push.apply(t, o);
        }
        return t;
      }
      function be(e) {
        for (var n = 1; n < arguments.length; n++) {
          var t = null != arguments[n] ? arguments[n] : {};
          n % 2
            ? ye(Object(t), !0).forEach(function (n) {
                (0, o.Z)(e, n, t[n]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : ye(Object(t)).forEach(function (n) {
                Object.defineProperty(
                  e,
                  n,
                  Object.getOwnPropertyDescriptor(t, n)
                );
              });
        }
        return e;
      }
      var ve = d.ZP.input.withConfig({
          displayName: "TextField__StyledTextField",
          componentId: "sc-pmt8go-0",
        })([
          "font-family:'LibreFranklin';font-weight:200;font-size:16px;outline:0;color:#fff;padding:15px 0px 15px 8px;border:0px;background:none;margin:0px;display:block;min-width:0px;width:100%;opacity:0.5;transition:all ease-in 3s;&::placeholder{color:#fff;opacity:0.8;}&:hover{&::placeholder{opacity:1;}}",
        ]),
        xe = d.ZP.textarea.withConfig({
          displayName: "TextField__StyledTextAreaField",
          componentId: "sc-pmt8go-1",
        })([
          "font-family:'LibreFranklin';font-weight:200;font-size:16px;outline:0;color:#fff;padding:15px 0px 15px 8px;border:0px;background:none;margin:0px;display:block;min-width:0px;width:100%;opacity:0.5;resize:none;transition:all ease-in 3s;&::placeholder{color:#fff;opacity:0.8;}&:hover{&::placeholder{opacity:1;}}",
        ]),
        je = function (e) {
          var n = e.type,
            t = void 0 === n ? "text" : n,
            o = (0, f.Z)(e, ge),
            r = (0, a.useState)(!1),
            i = r[0],
            c = r[1];
          return (0, g.jsxs)(u, {
            flexDirection: "column",
            position: "relative",
            children: [
              "text" === t
                ? (0, g.jsx)(
                    ve,
                    be(
                      {
                        type: "text",
                        onMouseOver: function () {
                          return c(!0);
                        },
                        onMouseLeave: function () {
                          return c(!1);
                        },
                      },
                      o
                    )
                  )
                : (0, g.jsx)(
                    xe,
                    be(
                      {
                        rows: "6",
                        autocomplete: "off",
                        onMouseOver: function () {
                          return c(!0);
                        },
                        onMouseLeave: function () {
                          return c(!1);
                        },
                      },
                      o
                    )
                  ),
              (0, g.jsx)(ce, { color: "rgb(255,255,255,25%)", play: !0 }),
              (0, g.jsx)(u, {
                position: "absolute",
                bottom: 0,
                width: "100%",
                children: (0, g.jsx)(ce, {
                  color: "rgb(255,255,255,35%)",
                  height: 2,
                  play: i,
                }),
              }),
            ],
          });
        },
        we = d.ZP.div.withConfig({
          displayName: "Shadow",
          componentId: "sc-1f1ve4p-0",
        })(["", ""], function (e) {
          var n = e.blur,
            t = void 0 === n ? 3 : n,
            o = e.zIndex,
            r = void 0 === o ? -2 : o,
            i = e.height;
          return "\n  width: 100%;\n  height: "
            .concat(
              void 0 === i ? "100%" : i,
              ";\n  position: absolute;\n  backdrop-filter: blur("
            )
            .concat(t, "px);\n  top: 0;\n  left: 0;\n  z-index: ")
            .concat(
              r,
              ";\n  background-image: linear-gradient(#00000000, #000000);\n"
            );
        }),
        Oe = [
          "show",
          "effect",
          "rotation",
          "blendMode",
          "animationProps",
          "height",
          "position",
          "transitionDelay",
          "texts",
          "onChange",
        ];
      function Pe(e, n) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          n &&
            (o = o.filter(function (n) {
              return Object.getOwnPropertyDescriptor(e, n).enumerable;
            })),
            t.push.apply(t, o);
        }
        return t;
      }
      function ke(e) {
        for (var n = 1; n < arguments.length; n++) {
          var t = null != arguments[n] ? arguments[n] : {};
          n % 2
            ? Pe(Object(t), !0).forEach(function (n) {
                (0, o.Z)(e, n, t[n]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : Pe(Object(t)).forEach(function (n) {
                Object.defineProperty(
                  e,
                  n,
                  Object.getOwnPropertyDescriptor(t, n)
                );
              });
        }
        return e;
      }
      var Ce = function (e) {
        e.show;
        var n = e.effect,
          t = void 0 === n ? "left" : n,
          o = e.rotation,
          r = void 0 === o ? 0 : o,
          i = e.blendMode,
          c = void 0 === i ? "normal" : i,
          l = e.animationProps,
          s = e.height,
          d = void 0 === s ? 200 : s,
          p = e.position,
          u = void 0 === p ? null : p,
          m = e.transitionDelay,
          y = void 0 === m ? 4e3 : m,
          b = e.texts,
          v = e.onChange,
          x = void 0 === v ? function () {} : v,
          j = (0, f.Z)(e, Oe),
          w = "left" === t ? "-100%" : "right" === t ? "100%" : "0%",
          O = (0, a.useState)(0),
          k = O[0],
          C = O[1],
          S = (0, P.useSpring)(function () {
            return ke(
              {
                from: {
                  transform: "translate("
                    .concat(w, ",-")
                    .concat(b.length * d, "px ) rotate(")
                    .concat(r, "deg)"),
                },
              },
              l
            );
          }),
          Z = (0, h.Z)(S, 2),
          _ = Z[0],
          D = Z[1];
        return (
          (0, a.useEffect)(
            function () {
              if ("number" !== typeof u) {
                var e = k >= b.length - 1 ? 0 : -1 === k ? b.length - 1 : k + 1,
                  n = setInterval(function () {
                    return C(e);
                  }, y);
                return function () {
                  return clearInterval(n);
                };
              }
              var t = null === u ? b.length * d : 0 === u ? 0 : -u * d;
              D(
                ke(
                  {
                    transform: "translate(0px, ".concat(t, "px)  rotate(0deg)"),
                  },
                  l
                )
              );
            },
            [u, k]
          ),
          (0, a.useEffect)(
            function () {
              var e = null === k ? b.length * d : 0 === k ? 0 : -k * d;
              D(
                ke(
                  {
                    transform: "translate(0px, ".concat(e, "px)  rotate(0deg)"),
                  },
                  l
                )
              ),
                x(k);
            },
            [k]
          ),
          (0, g.jsx)(
            P.animated.div,
            ke(
              ke(
                {
                  style: {
                    color: "white",
                    overflow: "hidden",
                    mixBlendMode: c,
                    position: "relative",
                    height: "".concat(d, "px"),
                    width: "100%",
                  },
                },
                j
              ),
              {},
              {
                children: (0, g.jsx)(P.animated.div, {
                  style: ke(ke({}, _), {}, { position: "absolute" }),
                  children: b.map(function (e, n) {
                    return (0,
                    g.jsx)(P.animated.div, { style: { height: "".concat(d, "px") }, children: e });
                  }),
                }),
              }
            )
          )
        );
      };
      d.ZP.button.withConfig({
        displayName: "TextButton__StyledButton",
        componentId: "sc-6xp2fa-0",
      })(["", ""], function (e) {
        var n = e.width;
        return "\n  background: transparent;\n  padding: 20px;\n  color: inherit;\n  border: 0px;\n  font: inherit;\n  cursor: pointer;\n  width: ".concat(
          void 0 === n ? 250 : n,
          "px;\n  outline: inherit;\n  color: white;\n\n  background-image: linear-gradient(#1095c1 0 0);\n  background-size: 200% .08em;\n  background-position: 200% 100%;\n  background-repeat: no-repeat;\n  transition: background-size .3s, background-position .3s .3s;\n\n  &:hover {\n    transition: background-size .3s .3s, background-position .3s;\n    background-size: 200% 100%;\n    background-position: 100% 100%;\n  }\n"
        );
      });
      var Se = [
        "href",
        "children",
        "primaryColor",
        "secondaryColor",
        "selected",
        "fontSize",
        "onClick",
      ];
      function Ze(e, n) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          n &&
            (o = o.filter(function (n) {
              return Object.getOwnPropertyDescriptor(e, n).enumerable;
            })),
            t.push.apply(t, o);
        }
        return t;
      }
      function _e(e) {
        for (var n = 1; n < arguments.length; n++) {
          var t = null != arguments[n] ? arguments[n] : {};
          n % 2
            ? Ze(Object(t), !0).forEach(function (n) {
                (0, o.Z)(e, n, t[n]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : Ze(Object(t)).forEach(function (n) {
                Object.defineProperty(
                  e,
                  n,
                  Object.getOwnPropertyDescriptor(t, n)
                );
              });
        }
        return e;
      }
      var De = d.ZP.span.withConfig({
          displayName: "Chip__Container",
          componentId: "sc-1ex0338-0",
        })(["", ""], function (e) {
          var n = e.primaryColor,
            t = e.secondaryColor,
            o = e.fontSize;
          return "\n  font-family: LibreFranklin;\n  font-size: "
            .concat(
              void 0 === o ? "15px" : o,
              ";\n  display: inline-flex;\n  justify-content: center;\n  padding: 8px 12px;\n  max-width: 300px;\n  max-height: 75px;\n  font-weight: 200;\n  line-height: 1.25;\n  letter-spacing: 0.025em;\n  color: "
            )
            .concat(
              null !== n && void 0 !== n ? n : s.r.colors.secondary,
              ";\n  background: "
            )
            .concat(
              null !== t && void 0 !== t ? t : s.r.colors.primary,
              ";\n  border: 0.5px solid #cccccc;\n  border-radius: 50px;\n  user-select: none;\n  overflow: hidden;\n  transition: all 0.75s "
            )
            .concat(function (e) {
              return e.theme.transitions.easeOutCirc;
            }, ";\n\n");
        }),
        ze = (0, a.forwardRef)(function (e, n) {
          e.href;
          var t = e.children,
            o =
              (e.primaryColor,
              e.secondaryColor,
              e.selected,
              e.fontSize,
              e.onClick,
              (0, f.Z)(e, Se));
          return (0, g.jsx)(De, _e(_e({}, o), {}, { ref: n, children: t }));
        });
      d.ZP.div.withConfig({
        displayName: "TextSplitterScroll__Container",
        componentId: "sc-1a5e9hu-0",
      })([
        "display:inline-block;font-size:16px;color:#000;font-family:LibreFranklin;",
      ]);
      function Ee(e, n) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          n &&
            (o = o.filter(function (n) {
              return Object.getOwnPropertyDescriptor(e, n).enumerable;
            })),
            t.push.apply(t, o);
        }
        return t;
      }
      function Ie(e) {
        for (var n = 1; n < arguments.length; n++) {
          var t = null != arguments[n] ? arguments[n] : {};
          n % 2
            ? Ee(Object(t), !0).forEach(function (n) {
                (0, o.Z)(e, n, t[n]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : Ee(Object(t)).forEach(function (n) {
                Object.defineProperty(
                  e,
                  n,
                  Object.getOwnPropertyDescriptor(t, n)
                );
              });
        }
        return e;
      }
      var Ne = function (e) {
        var n = e.show,
          t = void 0 === n || n,
          o = e.effect,
          r = void 0 === o ? "left" : o,
          i = e.rotation,
          c = void 0 === i ? 0 : i,
          l = e.blendMode,
          s = void 0 === l ? "normal" : l,
          d = e.animationProps,
          p = e.containerProps,
          u = e.children,
          f = "left" === r ? "-100%" : "right" === r ? "100%" : "0%",
          m = "top" === r ? "-100%" : "bottom" === r ? "100%" : "0%",
          y = (0, P.useSpring)(function () {
            return Ie(
              {
                from: {
                  transform: "translate("
                    .concat(f, ",")
                    .concat(m, " ) rotate(")
                    .concat(c, "deg)"),
                },
              },
              d
            );
          }),
          b = (0, h.Z)(y, 2),
          v = b[0],
          x = b[1];
        return (
          (0, a.useEffect)(
            function () {
              x(
                Ie(
                  t
                    ? { transform: "translate(0px, 0px)  rotate(0deg)" }
                    : {
                        transform: "translate("
                          .concat(f, ",")
                          .concat(m, " ) rotate(")
                          .concat(c, "deg)"),
                      },
                  d
                )
              );
            },
            [t, x]
          ),
          (0, g.jsx)(
            P.animated.div,
            Ie(
              Ie(
                {
                  style: {
                    color: "white",
                    overflow: "hidden",
                    mixBlendMode: s,
                  },
                },
                p
              ),
              {},
              {
                children: (0, g.jsx)(P.animated.div, { style: v, children: u }),
              }
            )
          )
        );
      };
      var Le = t(9477),
        Me = t(425);
      Le.MathUtils.damp,
        (0, Me.sj)({
          clicked: null,
          urls: [
            7, 8, 9, 1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6,
          ].map(function (e) {
            return "/img/".concat(e, ".jpeg");
          }),
        }),
        new Le.LineBasicMaterial({ color: "white" }),
        new Le.BufferGeometry().setFromPoints([
          new Le.Vector3(0, -0.5, 0),
          new Le.Vector3(0, 0.5, 0),
        ]);
      var Fe = (0, d.ZP)(P.animated.div).withConfig({
          displayName: "Menu__Container",
          componentId: "sc-46cln0-0",
        })(["padding:", ";"], s.r.spacing.small),
        Re = (0, d.ZP)(P.animated.nav).withConfig({
          displayName: "Menu__Nav",
          componentId: "sc-46cln0-1",
        })([
          "display:flex;align-items:center;ul{margin:0;padding:0;cursor:pointer;}span{color:#000;font-size:8px;font-family:Inter;font-weight:100;}",
        ]),
        Te = (0, d.ZP)(P.animated.li).withConfig({
          displayName: "Menu__Li",
          componentId: "sc-46cln0-2",
        })([
          "list-style:none;position:relative;a{transition:all 0.5s cubic-bezier(0,0,0.2,1);color:rgba(164,167,183,1);font-family:LibreFranklin;font-size:50px;font-weight:200;text-decoration:none;line-height:1.3;&:after{content:attr(data-text);display:block;position:absolute;font-weight:100;color:#fff;transform:skewY(7deg);transition:transform 2s cubic-bezier(0.19,1,0.22,1);transform-origin:left top;top:105%;}&:hover{font-weight:900;:after{color:#000;top:10%;transform:skewY(0deg);}}}.line{position:absolute;transition:all ease-in-out 0.3s;top:90%;left:100%;height:1px;width:80px;background:#0f6dc5d6;mix-blend-mode:difference;}&:hover{.line{left:-50%;}}",
        ]),
        Be = [
          { name: "Home", link: "home" },
          { name: "Services", link: "services" },
          { name: "Works", link: "works" },
          { name: "Contact", link: "contact" },
        ],
        Ae = function (e) {
          var n = e.show,
            t = e.onClick,
            o = function (e) {
              t(e);
            };
          return (0, g.jsxs)(Fe, {
            children: [
              (0, g.jsxs)(Ne, {
                show: n,
                effect: "top",
                blendMode: "difference",
                children: [
                  (0, g.jsx)(le, { vertical: s.r.spacing.medium }),
                  (0, g.jsx)(D, { type: s.r.fonts.span, children: "Menu" }),
                  (0, g.jsx)(le, { vertical: s.r.spacing.small }),
                ],
              }),
              (0, g.jsx)(Re, {
                children: (0, g.jsx)("ul", {
                  children: Be.map(function (e, t) {
                    return (0, g.jsx)(
                      Te,
                      {
                        children: (0, g.jsxs)(Ne, {
                          show: n,
                          effect: "top",
                          animationProps: { delay: 200 * t },
                          children: [
                            (0, g.jsx)("div", {
                              children: (0, g.jsxs)("span", {
                                children: [t + 1, "."],
                              }),
                            }),
                            (0, g.jsx)("a", {
                              onClick: function () {
                                return o(t);
                              },
                              "data-text": e.name,
                              children: e.name,
                            }),
                            (0, g.jsx)("div", { className: "line" }),
                          ],
                        }),
                      },
                      t
                    );
                  }),
                }),
              }),
              (0, g.jsx)(le, { vertical: s.r.spacing.large }),
              (0, g.jsxs)(Ne, {
                show: n,
                animationProps: { delay: n ? 350 : 0 },
                effect: "top",
                blendMode: "difference",
                children: [
                  (0, g.jsx)(D, {
                    type: s.r.fonts.span,
                    children: "Get in touch",
                  }),
                  (0, g.jsx)(me, {
                    show: n,
                    href: "mailto:hello@marplacode.com",
                    children: (0, g.jsx)(D, {
                      type: s.r.fonts.span,
                      fontSize: "16px",
                      children: "hello@marplacode.com",
                    }),
                  }),
                ],
              }),
            ],
          });
        },
        We = d.ZP.header.withConfig({
          displayName: "Navigation__NavigationContainer",
          componentId: "sc-1riyhlg-0",
        })(["", ""], function (e) {
          e.show;
          var n = e.open;
          return "\n    position: fixed;\n    top: 0;\n    left: 0;\n    z-index: 10;\n    // background: "
            .concat(
              n ? "#FFF" : "transparent",
              ";\n    backdrop-filter: blur(10px);\n    transition: all cubic-bezier(0, 0, 0.2, 1) 0.5s;\n    width: 100%;\n    min-height: 4em;\n    max-height: 100%;\n\n    @media "
            )
            .concat(O.Uh.desktop, " {\n      // width: ")
            .concat(n ? "50vh" : "0px", "; \n    }\n\n");
        }),
        qe = d.ZP.div.withConfig({
          displayName: "Navigation__Backdrop",
          componentId: "sc-1riyhlg-1",
        })(["", ""], function (e) {
          var n = e.open;
          return "\n  transition: all cubic-bezier(0, 0, 0.04, 1) 0.5s;\n  background: white;\n  width: 100%;\n  height: 100vh;\n  position: absolute;\n  top: 0px;\n  transform: "
            .concat(
              n ? "translateX(0%)" : "translateX(100%)",
              ";  \n  will-change: transform;\n  z-index: -1;\n\n  @media "
            )
            .concat(O.Uh.desktop, " {\n    width: 100%;\n    transform: ")
            .concat(n ? "translateX(55%)" : "translateX(100%)", ";  \n  }\n\n");
        }),
        He = (0, m.animated)(
          d.ZP.div.withConfig({
            displayName: "Navigation__ProgressLine",
            componentId: "sc-1riyhlg-2",
          })(["", ""], function (e) {
            var n = e.color,
              t = void 0 === n ? "#FFF" : n,
              o = e.height,
              r = void 0 === o ? 0.5 : o,
              i = e.width,
              a = void 0 === i ? 0 : i,
              c = e.opacity,
              l = void 0 === c ? 0 : c;
            e.blendMode;
            return "\n    background-color: "
              .concat(t, ";\n    width: ")
              .concat(a, "%;\n    opacity: ")
              .concat(
                l,
                "%;\n    transition: all ease-in-out 0.5s;\n    height: "
              )
              .concat(r, "px;\n    ");
          })
        ),
        Ve = d.ZP.div.withConfig({
          displayName: "Navigation__Lottie",
          componentId: "sc-1riyhlg-3",
        })(["", ""], function (e) {
          e.open;
          return "\n\n  path {\n    transition: color ease-in 0.5s;\n  }\n\n  &.black path { \n    transition: fill ease-in 0.5s;\n    fill: #000;\n  }\n  \n \n";
        }),
        Ue = function () {
          var e = (0, a.useState)(!1),
            n = e[0],
            t = e[1],
            o =
              ((0, c.Z)(function (e) {
                return e.scrollTo;
              }),
              (0, c.Z)(function (e) {
                return e.domReady;
              })),
            r = M(),
            i = (0, a.useRef)(),
            l = W({ lottieRef: i }),
            d = R({ onScroll: l }),
            p = d.locomotiveScroll,
            f = d.progress,
            h = A(f),
            m = function () {
              var e = !n;
              t(e), c.Z.setState({ navigationState: e });
            };
          return (0, g.jsxs)(We, {
            open: n,
            showFull: !0,
            children: [
              (0, g.jsx)(qe, {
                open: n,
                children: (0, g.jsx)(u, {
                  pl: { _: "45px", md: "98px" },
                  pr: { _: "30px", md: "98px" },
                  children: (0, g.jsx)(Ae, {
                    show: n,
                    onClick: function (e) {
                      m(), p.scrollTo("#".concat(Object.keys(Vn)[e]));
                    },
                  }),
                }),
              }),
              (0, g.jsxs)(u, {
                justifyContent: "space-between",
                height: "4em",
                pl: {
                  _: s.r.spacing.horizontal.mobile,
                  md: s.r.spacing.horizontal.desktop,
                },
                pr: {
                  _: s.r.spacing.horizontal.mobile,
                  md: s.r.spacing.horizontal.desktop,
                },
                children: [
                  (0, g.jsx)(u, {
                    alignItems: "center",
                    children: (0, g.jsx)(Ne, {
                      animationProps: { delay: 3e3 },
                      children: (0, g.jsx)(Ve, {
                        ref: i,
                        style: {
                          width: r ? 100 : 150,
                          height: r ? 30 : 100,
                          color: "#000",
                          visibility: r && n ? "hidden" : "visible",
                        },
                      }),
                    }),
                  }),
                  (0, g.jsx)(w, {
                    color: h || n ? "black" : "white",
                    open: n,
                    animationProps: { delay: 2800 },
                    onClick: m,
                  }),
                ],
              }),
              !n &&
                (0, g.jsx)(He, {
                  color: h ? "black" : "white",
                  width: 100,
                  opacity: o ? 35 : 0,
                }),
              n && (0, g.jsx)(we, { height: "100vh" }),
            ],
          });
        },
        Xe = ["children"];
      function Ye(e, n) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          n &&
            (o = o.filter(function (n) {
              return Object.getOwnPropertyDescriptor(e, n).enumerable;
            })),
            t.push.apply(t, o);
        }
        return t;
      }
      function Ge(e) {
        for (var n = 1; n < arguments.length; n++) {
          var t = null != arguments[n] ? arguments[n] : {};
          n % 2
            ? Ye(Object(t), !0).forEach(function (n) {
                (0, o.Z)(e, n, t[n]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : Ye(Object(t)).forEach(function (n) {
                Object.defineProperty(
                  e,
                  n,
                  Object.getOwnPropertyDescriptor(t, n)
                );
              });
        }
        return e;
      }
      var Ke = (0, d.ZP)(u).withConfig({
          displayName: "Container__ContainerStyled",
          componentId: "sc-1f708lu-0",
        })(["", ""], function (e) {
          var n = e.shadow,
            t = e.blur,
            o = void 0 === t ? 3 : t,
            r = e.gradient;
          return "\n\n  ".concat(
            n
              ? "\n    background-image: "
                  .concat(
                    void 0 === r ? "linear-gradient(#00000000, #000000)" : r,
                    ";\n    backdrop-filter: blur("
                  )
                  .concat(o, "px);")
              : "",
            "\n  \n"
          );
        }),
        $e = function (e) {
          var n = e.children,
            t = (0, f.Z)(e, Xe);
          return (0, g.jsx)(
            Ke,
            Ge(
              Ge(
                {
                  flexDirection: "column",
                  justifyContent: "center",
                  pl: {
                    _: O.ZP.spacing.horizontal.mobile,
                    md: O.ZP.spacing.horizontal.desktop,
                  },
                  pr: {
                    _: O.ZP.spacing.horizontal.mobile,
                    md: O.ZP.spacing.horizontal.desktop,
                  },
                  height: "100%",
                },
                t
              ),
              {},
              { children: n }
            )
          );
        },
        Je = d.ZP.div.withConfig({
          displayName: "Landing__IndicatorContainer",
          componentId: "sc-15634sd-0",
        })([
          "width:100%;height:100%;position:absolute;top:0px;left:0px;z-index:-1;display:flex;flex-direction:column;justify-content:flex-end;",
        ]),
        Qe = [
          {
            name: "Digital Studio",
            description: "creating next gen web/mobile",
          },
          {
            name: "best-in-class",
            description: "experiences and technologies",
          },
          {
            name: "Hand Crafted",
            description: "building refined visual outputs",
          },
        ],
        en = function () {
          (0, a.useCallback)(function (e) {
            e < 12 && c.Z.setState({ videoUrl: "/videos/liquid.mp4" });
          }, []);
          var e = R({}),
            n = e.progress,
            t = e.locomotiveScroll,
            o = (0, a.useState)(!1),
            r = (o[0], o[1]),
            i = Qe.map(function (e) {
              var n = e.name,
                t = e.description;
              return (0,
              g.jsxs)(g.Fragment, { children: [(0, g.jsx)(D, { fontFamily: "LibreFranklin", fontWeight: "lighter", fontSize: "42px", children: n }), (0, g.jsx)(D, { type: s.r.fonts.p, color: "grey", fontWeight: "lighter", children: t })] });
            }),
            l = !0;
          return (0, g.jsx)(g.Fragment, {
            children: (0, g.jsx)($e, {
              shadow: !0,
              id: Vn.landing,
              "data-scroll": !0,
              "data-scroll-sticky": !0,
              "data-scroll-speed": "3",
              children: (0, g.jsx)(u, {
                flexDirection: "column",
                justifyContent: { _: "flex-end", md: "center" },
                height: "100vh",
                position: "relative",
                pb: { _: "100px" },
                zIndex: 1,
                children: (0, g.jsxs)(u, {
                  children: [
                    (0, g.jsxs)(u, {
                      flexDirection: "column",
                      "data-scroll": !0,
                      "data-scroll-speed": "3",
                      children: [
                        (0, g.jsx)(Ne, {
                          effect: "bottom",
                          animationProps: { delay: 2e3, minWidth: "400px" },
                          show: l,
                          children: (0, g.jsx)(Ce, {
                            texts: i,
                            height: 110,
                            transitionDelay: 5e3,
                            onChange: function (e) {
                              n <= 15 &&
                                c.Z.setState({ letter: Qe[e].name[0] });
                            },
                          }),
                        }),
                        (0, g.jsx)(u, { height: "48px" }),
                        (0, g.jsx)(Ne, {
                          animationProps: {
                            delay: 2400,
                            onResolve: function () {
                              return r(!0);
                            },
                          },
                          containerProps: { "data-scroll": "true" },
                          effect: "top",
                          show: l,
                          children: (0, g.jsx)(u, {
                            p: { md: 10 },
                            children: (0, g.jsx)(K, {
                              fontSize: "20px",
                              onClick: function () {
                                null === t ||
                                  void 0 === t ||
                                  t.scrollTo("#".concat(Vn.contact));
                              },
                              children: "Start project",
                            }),
                          }),
                        }),
                      ],
                    }),
                    (0, g.jsx)(Je, {
                      children: (0, g.jsx)(u, {
                        justifyContent: { _: "flex-end", md: "center" },
                        pr: { _: s.r.spacing.small },
                        pb: { _: "20%", md: "10%" },
                        children: (0, g.jsx)(Ne, {
                          animationProps: {
                            from: {
                              opacity: 0,
                              transform: "translate(0,-100%)",
                            },
                            to: { opacity: 1, transform: "translate(0,0%)" },
                            delay: 2600,
                            onResolve: function () {
                              setTimeout(function () {
                                return c.Z.setState({ domReady: !0 });
                              }, 1e3);
                            },
                          },
                          effect: "top",
                          show: l,
                          children: (0, g.jsx)(u, {
                            p: { md: "20px" },
                            children: (0, g.jsx)(oe, {
                              height: 55,
                              width: 55,
                              onClick: function () {
                                return null === t || void 0 === t
                                  ? void 0
                                  : t.scrollTo("#".concat(Vn.whyus));
                              },
                              "data-scroll-speed": "3",
                              "data-scroll-delay": "0.5",
                            }),
                          }),
                        }),
                      }),
                    }),
                  ],
                }),
              }),
            }),
          });
        },
        nn = t(7812),
        tn = (0, P.animated)(
          d.ZP.div.withConfig({
            displayName: "ServicesList__Content",
            componentId: "sc-juo3fc-0",
          })(["", ""], function (e) {
            var n = e.open;
            return "\n  z-index:  "
              .concat(
                n ? "1" : "-1",
                ";\n  transition: all ease-in-out 0.5s;\n  height: "
              )
              .concat(n ? "300px" : "0px", ";\n  opacity: ")
              .concat(n ? "100%" : "0%", ";\n  // display: ")
              .concat(n ? "block" : "none", ";\n");
          })
        ),
        on = (0, P.animated)(
          d.ZP.div.withConfig({
            displayName: "ServicesList__Item",
            componentId: "sc-juo3fc-1",
          })(["", ""], function (e) {
            e.open;
            return "\n  display: flex;\n  justify-content: space-between;\n  cursor: pointer;\n";
          })
        ),
        rn = function (e) {
          var n = e.open,
            t = e.delay,
            o = e.children,
            r = (0, P.useSpring)({ opacity: n ? 1 : 0, delay: t });
          return (0, g.jsx)(P.animated.div, { style: r, children: n && o });
        },
        an = function (e) {
          var n = e.play,
            t = e.services,
            o = e.onChange,
            r = void 0 === o ? function () {} : o,
            i = (0, a.useState)(t),
            c = i[0],
            l = i[1];
          return (0, g.jsx)(u, {
            flexDirection: "column",
            justifyContent: "center",
            children: c.map(function (e, t) {
              var o = e.title,
                i = e.open,
                a = e.content,
                d = e.description,
                p = void 0 === d ? "" : d;
              return (0, g.jsxs)(u, {
                flexDirection: "column",
                children: [
                  (0, g.jsxs)(on, {
                    onClick: function () {
                      return (function (e) {
                        var n = (0, nn.Z)(c).map(function (n, t) {
                          return (n.open = t === e && !n.open), r(), n;
                        });
                        l(n);
                      })(t);
                    },
                    children: [
                      (0, g.jsx)(D, {
                        type: s.r.fonts.h3,
                        fontWeight: "200",
                        fontSize: "27px",
                        color: "#000",
                        children: o,
                      }),
                      (0, g.jsx)(de, { open: i }),
                    ],
                  }),
                  (0, g.jsx)(le, { vertical: s.r.spacing.tiny }),
                  (0, g.jsx)(ce, { delay: 500, play: n }),
                  (0, g.jsx)(tn, {
                    open: i,
                    children: (0, g.jsxs)(u, {
                      p: s.r.spacing.small,
                      flexDirection: "column",
                      height: "100%",
                      children: [
                        (0, g.jsx)("div", {
                          children: (0, g.jsx)(D, {
                            fontSize: "16px",
                            fontFamily: "Circular",
                            fontWeight: "normal",
                            color: "#777777",
                            children: p,
                          }),
                        }),
                        (0, g.jsx)(E, {
                          pt: s.r.spacing.small,
                          children: a.map(function (e, n) {
                            return (0,
                            g.jsx)(E, { display: "inline-block", p: s.r.spacing.small, children: (0, g.jsx)(rn, { open: i, delay: 100 * n, children: (0, g.jsx)(ze, { children: e }) }) });
                          }),
                        }),
                      ],
                    }),
                  }),
                  (0, g.jsx)(le, { vertical: s.r.spacing.small }),
                ],
              });
            }),
          });
        },
        cn = ["colors1", "colors2", "children"];
      function ln(e, n) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          n &&
            (o = o.filter(function (n) {
              return Object.getOwnPropertyDescriptor(e, n).enumerable;
            })),
            t.push.apply(t, o);
        }
        return t;
      }
      function sn(e) {
        for (var n = 1; n < arguments.length; n++) {
          var t = null != arguments[n] ? arguments[n] : {};
          n % 2
            ? ln(Object(t), !0).forEach(function (n) {
                (0, o.Z)(e, n, t[n]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : ln(Object(t)).forEach(function (n) {
                Object.defineProperty(
                  e,
                  n,
                  Object.getOwnPropertyDescriptor(t, n)
                );
              });
        }
        return e;
      }
      var dn = (0, d.ZP)(P.animated.article).withConfig({
          displayName: "GlowText__Container",
          componentId: "sc-6kh4ll-0",
        })(["", ""], function () {
          return "\n\tbackground: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);\n\tbackground-size: 200% 200%;\n  transition: all .5s ease;\n\tanimation: gradient 5s ease infinite;\n  -webkit-background-clip: text;\n  -webkit-text-fill-color: transparent;\n  text-shadow: 0px 0px transparent;\n  cursor: pointer;\n  display: inline;\n\n  @keyframes gradient {\n    0% {\n      background-position: 0% 50%;\n    }\n    50% {\n      background-position: 100% 50%;\n    }\n    100% {\n      background-position: 0% 50%;\n    }\n  }\n\n  &:hover {\n    background: linear-gradient(-45deg, #52ee9e, #3cbbe7, #d523c8, #e23237);\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent;\n    text-shadow: 0px 0px transparent;\n    cursor: pointer;\n    display: inline;\n  }\n\n\n";
        }),
        pn = d.ZP.h1.withConfig({
          displayName: "GlowText__Text",
          componentId: "sc-6kh4ll-1",
        })(["", ""], function () {
          return "\n    color: black;\n    margin: 0;\n    font-weight: normal;\n    font-size: 60px\n";
        }),
        un = function (e) {
          e.colors1, e.colors2;
          var n = e.children,
            t = (0, f.Z)(e, cn);
          return (0, g.jsx)(dn, {
            children: (0, g.jsx)(pn, sn(sn({}, t), {}, { children: n })),
          });
        },
        fn = [
          {
            title: "Product design",
            description:
              "Once we have an idea of your needs, a research and design process begins to gain deep knowledge about the business, users and world context.\nWith that data in mind, we\u2019re able to design a structurally, visually and technically better solution.",
            content: ["research", "UI/UX", "prototyping", "ux copywriting"],
            open: !1,
          },
          {
            title: "Web/Mobile",
            description:
              "Our development process is not only about producing a high quality product at the end but also about creating something which will make the user want to come back for more. \n    Through our work we have found that a really good experience knows how to tell a story but an awesome one lets the user fully immerse themselves in it and experience it.",
            content: [
              "SEO",
              "creative development",
              "Nextjs, React/Native",
              "Vercel",
            ],
            open: !1,
          },
          {
            title: "Consulting",
            description:
              "Driven by innovation and human behavior, our agency is changing the way brands connect with audiences in a digital world. Discover why market leaders choose our solutions.",
            content: ["creative", "digital strategy", "MVP", "integrations"],
            open: !1,
          },
        ],
        hn = function () {
          (0, c.Z)(function (e) {
            return e.scroll;
          }),
            (0, c.Z)(function (e) {
              return e.domReady;
            });
          var e = (0, a.useState)(!1),
            n = e[0],
            t = e[1];
          return (0, g.jsx)($e, {
            bg: "white",
            "data-scroll": !0,
            "data-scroll-speed": "2",
            "data-scroll-target": "#landing",
            id: Vn.whyus,
            children: (0, g.jsxs)(u, {
              flexDirection: { _: "column", md: "row" },
              pb: { _: "180px", md: "360px" },
              pt: { _: "180px", md: "360px" },
              children: [
                (0, g.jsxs)(u, {
                  flexDirection: "column",
                  width: { md: "560px" },
                  children: [
                    (0, g.jsx)(D, {
                      type: O.ZP.fonts.p,
                      color: "#000",
                      children: "Our approach",
                    }),
                    (0, g.jsx)(u, { height: O.ZP.spacing.small }),
                    (0, g.jsx)(un, {
                      fontSize: { _: "40px", md: "60px" },
                      children: "Creative",
                    }),
                    (0, g.jsx)(D, {
                      type: O.ZP.fonts.h3,
                      color: "#000",
                      children: "development studio",
                    }),
                    (0, g.jsx)(u, { height: O.ZP.spacing.small }),
                    (0, g.jsx)(D, {
                      type: O.ZP.fonts.p,
                      color: "#465764",
                      children:
                        "We focus on making the essence of your project visible through high-level design and development.",
                    }),
                  ],
                }),
                (0, g.jsx)(u, { width: { md: O.ZP.spacing.large } }),
                (0, g.jsx)(u, {
                  width: { md: "50%" },
                  pt: "100px",
                  flexDirection: "column",
                  justifyContent: "center",
                  children: (0, g.jsx)(an, {
                    play: !0,
                    services: fn,
                    onChange: function () {
                      return t(!n);
                    },
                  }),
                }),
              ],
            }),
          });
        },
        mn = [
          {
            name: "beton",
            videoUrl: "/videos/blue.mp4",
            description:
              "Beton is an Argentinian construction firm making buildings possible since 1960s. Its mission is to provide the best value with quality and flexibility in an offer that meets the needs of their\n     clients, thats why we developed this creative landing experience showing the whole contruction process from beginning to end",
            url: "https://beton.marplacode.com",
            isSelected: !1,
          },
          {
            name: "firpodrawing",
            videoUrl: "/videos/wave2.mp4",
            description:
              "Creative landing development aimed to showcase the artist's talen throug best-in-class design and motion animations",
            url: "https://firpodrawings.marplacode.com",
            isSelected: !1,
          },
          {
            name: "audiojourney",
            videoUrl: "/videos/wave.mp4",
            description:
              "Here we explore the boundaries of web technologies (react/webGL/node) creating an audio journey \n    in wich the user is able to create a 3D sound enviroment and move throught it using mobile gyroscope, its a mobile only experience best suited for headphones, allowing to generate sounds and play with them",
            url: "https://audiojourney.marplacode.com",
            isSelected: !1,
          },
          {
            name: "clean-app",
            videoUrl: "/videos/liquidd.mp4",
            url: "https://www.behance.net/gallery/126504683/Cleanapp-UX-UI-Case-Study",
            description:
              "With clean-app we want to create a platform that reinterprets and therefore disrupts the whole laundry industry, Our goal is to create a friendly yet professional Mobile app for user\n     - Design & development\n    ",
            isSelected: !1,
          },
        ],
        gn = function () {
          var e = (0, c.Z)(function (e) {
              return e.scroll;
            }),
            n = (0, a.useState)(mn),
            t = n[0],
            o = (n[1], (0, a.useState)(0)),
            r = o[0],
            i = o[1],
            l = R(e) >= 22,
            s = t.map(function (e) {
              var n = e.description,
                t = e.url;
              return (0,
              g.jsxs)(g.Fragment, { children: [(0, g.jsx)(D, { type: O.ZP.fonts.p, fontSize: "17px", color: "grey", children: n }), (0, g.jsx)(le, { vertical: O.ZP.spacing.small }), (0, g.jsx)(me, { show: !0, color1: "grey", color2: "white", href: t, target: "_blank", children: (0, g.jsx)(D, { type: O.ZP.fonts.span, color: "grey", hover: { color: "white" }, fontSize: "16px", transition: "all .5s cubic-bezier(0.45, 0.05, 0.55, 0.95)", children: "View more" }) })] });
            }),
            d = t.map(function (e) {
              var n = e.name;
              return (0,
              g.jsx)(D, { fontFamily: "LibreFranklin", fontWeight: "lighter", fontSize: "42px", children: n });
            }),
            p = function (e) {
              var n,
                o,
                r = e >= t.length - 1 ? 0 : -1 === e ? t.length - 1 : e;
              c.Z.setState({
                letter:
                  null === (n = t[r]) || void 0 === n ? void 0 : n.name[0],
                videoUrl:
                  null === (o = t[r]) || void 0 === o ? void 0 : o.videoUrl,
                changeCameraEffect: !0,
              }),
                i(r);
            };
          return (
            (0, a.useEffect)(
              function () {
                var e;
                l &&
                  c.Z.setState({
                    letter:
                      null === (e = t[0]) || void 0 === e ? void 0 : e.name[0],
                  });
              },
              [l]
            ),
            (0, g.jsxs)($e, {
              minHeight: "750px",
              pt: "200px",
              pb: "180px",
              shadow: !0,
              blur: 0,
              position: "relative",
              id: Vn.works,
              children: [
                (0, g.jsx)(u, {
                  position: "absolute",
                  top: { _: "40%", md: "50%" },
                  left: {
                    _: O.ZP.spacing.small,
                    md: O.ZP.spacing.horizontal.desktop,
                  },
                  children: (0, g.jsx)(oe, {
                    rotation: "90",
                    arrowAnimationProps: { loop: !1 },
                    circleAnimationProps: {
                      delay: 2e3,
                      from: { border: "0.5px solid rgb(255 255 255 / 61%)" },
                      to: { border: "0.5px solid rgb(255 255 255 / 100%)" },
                    },
                    onClick: function () {
                      return p(r + 1);
                    },
                  }),
                }),
                (0, g.jsx)(u, {
                  position: "absolute",
                  top: { _: "40%", md: "50%" },
                  right: {
                    _: O.ZP.spacing.small,
                    md: O.ZP.spacing.horizontal.desktop,
                  },
                  children: (0, g.jsx)(oe, {
                    rotation: "-90",
                    arrowAnimationProps: { loop: !1 },
                    circleAnimationProps: {
                      delay: 2e3,
                      from: { border: "0.5px solid rgb(255 255 255 / 61%)" },
                      to: { border: "0.5px solid rgb(255 255 255 / 100%)" },
                    },
                    onClick: function () {
                      return p(r - 1);
                    },
                  }),
                }),
                (0, g.jsxs)(u, {
                  flexDirection: "column",
                  width: "300px",
                  children: [
                    (0, g.jsx)(D, {
                      type: O.ZP.fonts.h1,
                      fontWeight: "bold",
                      children: "Selected",
                    }),
                    (0, g.jsx)(u, {
                      justifyContent: "space-around",
                      children: (0, g.jsx)(D, {
                        type: O.ZP.fonts.h2,
                        fontFamily: "LibreFranklin",
                        fontWeight: "lighter",
                        children: "works",
                      }),
                    }),
                  ],
                }),
                (0, g.jsx)(u, {
                  width: "100%",
                  pl: { md: "160px" },
                  pt: { _: "300px", md: "125px" },
                  children: (0, g.jsx)(u, {
                    width: "100%",
                    children: (0, g.jsxs)(u, {
                      width: "400px",
                      flexDirection: "column",
                      children: [
                        (0, g.jsx)(Ce, {
                          animationProps: { delay: 500 },
                          position: r,
                          texts: d,
                          height: 72,
                        }),
                        (0, g.jsx)(Ce, {
                          animationProps: { delay: 500 },
                          position: r,
                          texts: s,
                        }),
                      ],
                    }),
                  }),
                }),
              ],
            })
          );
        },
        yn = t(7536),
        bn = t(8193),
        vn = d.ZP.span.withConfig({
          displayName: "Footer__MadeWithLove",
          componentId: "sc-1g2tb1x-0",
        })([
          "display:flex;flex-direction:column;align-items:center;font-size:16px;color:#000;font-weight:lighter;mix-blend-mode:normal;font-family:LibreFranklin;",
        ]),
        xn = function () {
          (0, c.Z)(function (e) {
            return e.scroll;
          });
          var e = (0, c.Z)(function (e) {
              return e.domReady;
            }),
            n = (0, yn.cI)({});
          n.control, n.handleSubmit, n.formState;
          return (0, g.jsx)(u, {
            height: "100%",
            bg: "#FFF",
            p: O.ZP.spacing.small,
            flexDirection: "column",
            pt: O.ZP.spacing.medium,
            pb: O.ZP.spacing.medium,
            position: "relative",
            "data-scroll": !0,
            "data-scroll-delay": ".5",
            "data-scroll-speed": "2",
            "data-scroll-target": "#contact",
            children: (0, g.jsxs)(u, {
              flexDirection: "column",
              alignItems: "center",
              children: [
                (0, g.jsx)("div", {
                  "data-scroll": !0,
                  "data-scroll-speed": "2",
                  children: (0, g.jsx)(D, {
                    type: O.ZP.fonts.span,
                    fontSize: "30px",
                    color: "#000",
                    children: "Have an idea?",
                  }),
                }),
                (0, g.jsx)(le, { vertical: O.ZP.spacing.tiny }),
                (0, g.jsx)("div", {
                  "data-scroll": !0,
                  "data-scroll-speed": "2",
                  "data-scroll-delay": "0.5",
                  children: (0, g.jsx)(me, {
                    show: e,
                    href: "mailto:hello@marplacode.com",
                    color1: "grey",
                    color2: "black",
                    children: (0, g.jsx)(D, {
                      type: O.ZP.fonts.span,
                      color: "#000",
                      fontSize: "16px",
                      children: "hello@marplacode.com",
                    }),
                  }),
                }),
                (0, g.jsx)(le, { vertical: O.ZP.spacing.large }),
                (0, g.jsxs)(vn, {
                  "data-scroll": !0,
                  "data-scroll-speed": "3",
                  "data-scroll-delay": "0.8",
                  children: [
                    (0, g.jsx)(bn.M_L, {}),
                    (0, g.jsx)(me, {
                      show: e,
                      color1: "grey",
                      color2: "black",
                      onClick: function () {
                        return window.open(
                          "https://www.google.com/maps/place/Mar+del+Plata,+Buenos+Aires+Province/@-38.0174831,-57.7409625,11z/data=!3m1!4b1!4m5!3m4!1s0x9584d94d19d34209:0xdd9670804bfed126!8m2!3d-38.0054771!4d-57.5426106"
                        );
                      },
                      children: (0, g.jsx)(D, {
                        type: O.ZP.fonts.span,
                        color: "#000",
                        fontSize: "16px",
                        children: "Mar del Plata",
                      }),
                    }),
                  ],
                }),
              ],
            }),
          });
        },
        jn = ["name", "control", "rules", "defaultValue"];
      function wn(e, n) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          n &&
            (o = o.filter(function (n) {
              return Object.getOwnPropertyDescriptor(e, n).enumerable;
            })),
            t.push.apply(t, o);
        }
        return t;
      }
      var On = function (e) {
          var n = e.name,
            t = e.control,
            r = e.rules,
            i = e.defaultValue,
            a = (0, f.Z)(e, jn),
            c = (0, yn.bc)({ name: n, control: t, rules: r, defaultValue: i }),
            l = c.field,
            s = l.value,
            d = l.onChange;
          c.fieldState.error;
          return (0, g.jsx)(
            je,
            (function (e) {
              for (var n = 1; n < arguments.length; n++) {
                var t = null != arguments[n] ? arguments[n] : {};
                n % 2
                  ? wn(Object(t), !0).forEach(function (n) {
                      (0, o.Z)(e, n, t[n]);
                    })
                  : Object.getOwnPropertyDescriptors
                  ? Object.defineProperties(
                      e,
                      Object.getOwnPropertyDescriptors(t)
                    )
                  : wn(Object(t)).forEach(function (n) {
                      Object.defineProperty(
                        e,
                        n,
                        Object.getOwnPropertyDescriptor(t, n)
                      );
                    });
              }
              return e;
            })({ name: n, value: s, onChange: d }, a)
          );
        },
        Pn = ["name", "label", "control", "rules", "defaultValue"];
      function kn(e, n) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          n &&
            (o = o.filter(function (n) {
              return Object.getOwnPropertyDescriptor(e, n).enumerable;
            })),
            t.push.apply(t, o);
        }
        return t;
      }
      function Cn(e) {
        for (var n = 1; n < arguments.length; n++) {
          var t = null != arguments[n] ? arguments[n] : {};
          n % 2
            ? kn(Object(t), !0).forEach(function (n) {
                (0, o.Z)(e, n, t[n]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : kn(Object(t)).forEach(function (n) {
                Object.defineProperty(
                  e,
                  n,
                  Object.getOwnPropertyDescriptor(t, n)
                );
              });
        }
        return e;
      }
      var Sn = d.ZP.div.withConfig({
          displayName: "FormCheckbox__Container",
          componentId: "sc-g24zx1-0",
        })(["display:inline-block;input{display:none;}", ""], (0, p.qC)(p.Dh)),
        Zn = function (e) {
          var n = e.name,
            t = e.label,
            o = e.control,
            r = e.rules,
            i = e.defaultValue,
            a = void 0 !== i && i,
            c = (0, f.Z)(e, Pn),
            l = (0, yn.bc)({
              name: n,
              control: o,
              rules: r,
              defaultValue: a,
            }).field,
            s = l.value,
            d = l.onChange;
          return (0, g.jsxs)(Sn, {
            m: { _: "6px", md: "12px" },
            children: [
              (0, g.jsx)("input", { value: s, name: n, type: "checkbox" }),
              (0, g.jsx)(
                K,
                Cn(
                  Cn(
                    {
                      selected: s,
                      onClick: function () {
                        return d(!s);
                      },
                      selectedTextColor: "black",
                      secondaryColor: "rgba(255, 255, 255, 0.06)",
                    },
                    c
                  ),
                  {},
                  { children: t }
                )
              ),
            ],
          });
        },
        _n = ["name", "label", "control", "rules", "defaultValue"];
      function Dn(e, n) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          n &&
            (o = o.filter(function (n) {
              return Object.getOwnPropertyDescriptor(e, n).enumerable;
            })),
            t.push.apply(t, o);
        }
        return t;
      }
      function zn(e) {
        for (var n = 1; n < arguments.length; n++) {
          var t = null != arguments[n] ? arguments[n] : {};
          n % 2
            ? Dn(Object(t), !0).forEach(function (n) {
                (0, o.Z)(e, n, t[n]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : Dn(Object(t)).forEach(function (n) {
                Object.defineProperty(
                  e,
                  n,
                  Object.getOwnPropertyDescriptor(t, n)
                );
              });
        }
        return e;
      }
      var En = d.ZP.div.withConfig({
          displayName: "FormRadio__Container",
          componentId: "sc-emptj2-0",
        })(["display:inline-block;input{display:none;}", ""], (0, p.qC)(p.Dh)),
        In = function (e) {
          var n = e.name,
            t = e.label,
            o = e.control,
            r = e.rules,
            i = e.defaultValue,
            a = void 0 !== i && i,
            c = (0, f.Z)(e, _n),
            l = (0, yn.bc)({
              name: n,
              control: o,
              rules: r,
              defaultValue: a,
            }).field,
            s = l.value,
            d = l.onChange;
          return (0, g.jsxs)(En, {
            m: { _: "6px", md: "12px" },
            children: [
              (0, g.jsx)("input", { value: t, name: n, type: "radio" }),
              (0, g.jsx)(
                K,
                zn(
                  zn(
                    {
                      selected: s === t,
                      onClick: function () {
                        return d(t);
                      },
                      selectedTextColor: "black",
                      secondaryColor: "rgba(255, 255, 255, 0.06)",
                    },
                    c
                  ),
                  {},
                  { children: t }
                )
              ),
            ],
          });
        },
        Nn =
          (d.ZP.div.withConfig({
            displayName: "CheckboxController__Container",
            componentId: "sc-1o24acu-0",
          })(
            ["display:inline-block;input{display:none;}", ""],
            (0, p.qC)(p.Dh)
          ),
          t(2673)),
        Ln = t(196),
        Mn = function (e) {
          var n = e.show,
            t = e.message,
            o = e.error,
            r = void 0 === o || o;
          return (0, g.jsx)(E, {
            style: { overflow: "hidden" },
            pt: O.ZP.spacing.small,
            pl: O.ZP.spacing.small,
            children: (0, g.jsx)(E, {
              animate: { y: n ? "0%" : "-200%" },
              children: (0, g.jsx)(D, {
                type: O.ZP.fonts.span,
                color: r ? "#e73c3c" : "#3ce78c",
                children: t,
              }),
            }),
          });
        },
        Fn = function () {
          var e,
            n,
            t,
            o,
            r = (0, yn.cI)({
              defaultValues: {
                budget: "",
                company: "",
                email: "",
                ideas: { web: !1, mobile: !1, landing: !1, product: !1 },
                message: "",
                name: "",
              },
            }),
            i = r.reset,
            a = r.control,
            c = r.handleSubmit,
            l = r.formState.errors,
            s = (0, Nn.D)(
              function (e) {
                return Ln.Z.post("/api/email/send", e);
              },
              {
                onSuccess: function () {
                  return i();
                },
              }
            );
          return (0, g.jsx)("form", {
            onSubmit: function (e) {
              e.preventDefault();
            },
            children: (0, g.jsxs)(u, {
              flexDirection: "column",
              children: [
                (0, g.jsx)(D, { type: O.ZP.fonts.span, children: "Name*" }),
                (0, g.jsx)(On, {
                  control: a,
                  name: "name",
                  placeholder: "Hello...",
                  enterkeyhint: "next",
                  rules: { required: "What's your name?" },
                }),
                (0, g.jsx)(Mn, {
                  show:
                    null === l ||
                    void 0 === l ||
                    null === (e = l.name) ||
                    void 0 === e
                      ? void 0
                      : e.message,
                  message: "What's your name?",
                }),
                (0, g.jsx)(le, { vertical: "62px" }),
                (0, g.jsx)(D, {
                  type: O.ZP.fonts.span,
                  children: "Company name",
                }),
                (0, g.jsx)(On, {
                  control: a,
                  name: "company",
                  placeholder: "or website?",
                  enterkeyhint: "next",
                }),
                (0, g.jsx)(le, { vertical: "62px" }),
                (0, g.jsx)(D, { type: O.ZP.fonts.span, children: "Email*" }),
                (0, g.jsx)(On, {
                  control: a,
                  name: "email",
                  inputmode: "email",
                  placeholder: "Where can we reply?",
                  enterkeyhint: "next",
                  rules: {
                    required:
                      "We need your email to reach out to you \ud83d\ude4f",
                    pattern: {
                      message: "Email format is not valid",
                      value:
                        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                    },
                  },
                }),
                (0, g.jsx)(Mn, {
                  show:
                    null === l ||
                    void 0 === l ||
                    null === (n = l.email) ||
                    void 0 === n
                      ? void 0
                      : n.message,
                  message:
                    "We need your email to reach out to you \ud83d\ude4f",
                }),
                (0, g.jsx)(le, { vertical: "62px" }),
                (0, g.jsxs)(u, {
                  flexDirection: "column",
                  children: [
                    (0, g.jsx)(D, {
                      type: O.ZP.fonts.span,
                      children: " What's in your mind?",
                    }),
                    (0, g.jsx)(le, { vertical: "32px" }),
                    (0, g.jsxs)("div", {
                      children: [
                        (0, g.jsx)(Zn, {
                          name: "ideas.web",
                          label: "Web development",
                          control: a,
                        }),
                        (0, g.jsx)(Zn, {
                          name: "ideas.mobile",
                          label: "Mobile",
                          control: a,
                        }),
                        (0, g.jsx)(Zn, {
                          name: "ideas.landing",
                          label: "Creative Landing",
                          control: a,
                        }),
                        (0, g.jsx)(Zn, {
                          name: "ideas.product",
                          label: "Product Design",
                          control: a,
                        }),
                      ],
                    }),
                    (0, g.jsx)(le, { vertical: "16px" }),
                    (0, g.jsx)(ce, { play: !0 }),
                  ],
                }),
                (0, g.jsx)(le, { vertical: "62px" }),
                (0, g.jsx)(D, { type: O.ZP.fonts.span, children: "Budget*" }),
                (0, g.jsx)(le, { vertical: "32px" }),
                (0, g.jsxs)("div", {
                  children: [
                    (0, g.jsx)(In, {
                      name: "budget",
                      label: "5k",
                      rules: { required: "How much are you willing to pay?" },
                      control: a,
                    }),
                    (0, g.jsx)(In, {
                      name: "budget",
                      label: "10k",
                      rules: { required: "How much are you willing to pay?" },
                      control: a,
                    }),
                    (0, g.jsx)(In, {
                      name: "budget",
                      label: "20k",
                      rules: { required: "How much are you willing to pay?" },
                      control: a,
                    }),
                    (0, g.jsx)(In, {
                      name: "budget",
                      label: ">30k",
                      rules: { required: "How much are you willing to pay?" },
                      control: a,
                    }),
                  ],
                }),
                (0, g.jsx)(le, { vertical: "16px" }),
                (0, g.jsx)(ce, { play: !0 }),
                (0, g.jsx)(Mn, {
                  show:
                    null === (t = l.budget) || void 0 === t
                      ? void 0
                      : t.message,
                  message: "How much are you willing to pay?",
                }),
                (0, g.jsx)(le, { vertical: "62px" }),
                (0, g.jsx)(D, { type: O.ZP.fonts.span, children: "Message*" }),
                (0, g.jsx)(On, {
                  control: a,
                  name: "message",
                  placeholder: "I want to build something beautiful",
                  enterkeyhint: "next",
                  rules: {
                    required: "tell us something about your idea \ud83e\udd18",
                  },
                  type: "textarea",
                }),
                (0, g.jsx)(Mn, {
                  show:
                    null === l ||
                    void 0 === l ||
                    null === (o = l.message) ||
                    void 0 === o
                      ? void 0
                      : o.message,
                  message: "tell us something about your idea \ud83e\udd18",
                }),
                (0, g.jsx)(le, { vertical: O.ZP.spacing.medium }),
                (0, g.jsx)(u, {
                  width: "100%",
                  justifyContent: "flex-end",
                  children: (0, g.jsxs)(E, {
                    p: { md: 10 },
                    children: [
                      (0, g.jsx)(u, {
                        justifyContent: "flex-end",
                        children: (0, g.jsx)(K, {
                          fontSize: "20px",
                          secondaryColor: "rgba(255, 255, 255, 0.06)",
                          selectedTextColor: "black",
                          type: "submit",
                          onClick: c(function (e) {
                            s.mutate({
                              sender: {
                                name: "contact form",
                                email: "marplacode@gmail.com",
                                password: "iexazvgeskdjuriz",
                              },
                              recipient: { email: "hello@marplacode.com" },
                              subject: "Work inquiry!",
                              content: "Name: "
                                .concat(e.name, "\n                Company: ")
                                .concat(e.company, "\n                Email: ")
                                .concat(e.email, "\n                Budget: ")
                                .concat(e.budget, "\n                Ideas: ")
                                .concat(
                                  Object.keys(e.ideas)
                                    .map(function (n) {
                                      return !!e.ideas[n] && n;
                                    })
                                    .filter(function (e) {
                                      return e;
                                    }),
                                  "\n                Message: "
                                )
                                .concat(e.message),
                            });
                          }),
                          children: "Submit",
                        }),
                      }),
                      (0, g.jsx)(Mn, {
                        error: !1,
                        show: s.isSuccess,
                        message:
                          "Message sent! We'll contact you soon \ud83d\ude4c",
                      }),
                    ],
                  }),
                }),
              ],
            }),
          });
        },
        Rn = function () {
          return (0, g.jsxs)("div", {
            children: [
              (0, g.jsx)($e, {
                bg: "#1A1D22",
                minHeight: "1000px",
                pt: "110px",
                pb: "300px",
                display: "block",
                id: Vn.contact,
                "data-scroll": !0,
                "data-scroll-sticky": !0,
                position: "relative",
                children: (0, g.jsx)(u, {
                  children: (0, g.jsxs)(u, {
                    width: { md: "60%" },
                    children: [
                      (0, g.jsxs)(u, {
                        flexDirection: "column",
                        children: [
                          (0, g.jsx)(D, {
                            type: O.ZP.fonts.h1,
                            blendMode: "difference",
                            children: "Say hi!",
                          }),
                          (0, g.jsx)(le, { vertical: O.ZP.spacing.tiny }),
                          (0, g.jsx)(D, {
                            fontFamily: "LibreFranklin",
                            fontSize: "40px",
                            fontWeight: "300",
                            color: "#808690",
                            children: "Tell us about your idea",
                          }),
                          (0, g.jsx)(le, { vertical: O.ZP.spacing.large }),
                          (0, g.jsx)(Fn, {}),
                        ],
                      }),
                      (0, g.jsx)(le, { vertical: O.ZP.spacing.medium }),
                    ],
                  }),
                }),
              }),
              (0, g.jsx)(xn, {}),
            ],
          });
        },
        Tn = ["isLoading"];
      function Bn(e, n) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          n &&
            (o = o.filter(function (n) {
              return Object.getOwnPropertyDescriptor(e, n).enumerable;
            })),
            t.push.apply(t, o);
        }
        return t;
      }
      function An(e) {
        for (var n = 1; n < arguments.length; n++) {
          var t = null != arguments[n] ? arguments[n] : {};
          n % 2
            ? Bn(Object(t), !0).forEach(function (n) {
                (0, o.Z)(e, n, t[n]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : Bn(Object(t)).forEach(function (n) {
                Object.defineProperty(
                  e,
                  n,
                  Object.getOwnPropertyDescriptor(t, n)
                );
              });
        }
        return e;
      }
      var Wn = d.ZP.div.withConfig({
          displayName: "ColorLoader__Container",
          componentId: "sc-ptynnz-0",
        })(["", ""], function (e) {
          e.primaryColor, e.secondaryColor;
          return "\n\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 11;\n\n  .bg1 {\n    position: absolute;\n    transform-origin: top;\n    width: 100%;\n    height: 100%;\n    top: 0;\n    left: 0;\n    background-color: #FFF;\n    transition: 1.6s;\n    transition-timing-function: cubic-bezier(0,.89,.41,1);\n    z-index: 101;\n    transition-delay: .8s;\n  }\n\n  .bg2 { \n    position: absolute;\n    transform-origin: top;\n    width: 100%;\n    height: 100%;\n    top: 0;\n    left: 0;\n    background-color: #000;\n    transition: 1.6s;\n    transition-timing-function: cubic-bezier(0,.89,.41,1);\n    z-index: 102;\n    transition-delay: .5s;\n  }\n\n  &.isLoaded  {\n    visibility: hidden;\n  }\n\n  &.isLoaded .bg1 {\n      transform: translateY(-100%);\n  }\n  &.isLoaded .bg2 {\n      transform: translateY(-100%);\n  }\n}\n\n";
        }),
        qn = function (e) {
          var n = e.isLoading,
            t = void 0 === n || n,
            o = (0, f.Z)(e, Tn),
            r = (0, a.useRef)();
          return (
            (0, a.useEffect)(
              function () {
                t || r.current.classList.add("isLoaded");
              },
              [t, r]
            ),
            (0, g.jsxs)(
              Wn,
              An(
                An({}, o),
                {},
                {
                  ref: r,
                  children: [
                    (0, g.jsx)("div", { className: "bg1" }),
                    (0, g.jsx)("div", { className: "bg2" }),
                  ],
                }
              )
            )
          );
        };
      t(8453);
      function Hn(e, n) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          n &&
            (o = o.filter(function (n) {
              return Object.getOwnPropertyDescriptor(e, n).enumerable;
            })),
            t.push.apply(t, o);
        }
        return t;
      }
      var Vn,
        Un = i()(
          function () {
            return Promise.resolve().then(t.bind(t, 4393));
          },
          {
            ssr: !1,
            loadableGenerated: {
              webpack: function () {
                return [4393];
              },
            },
          }
        ),
        Xn = d.ZP.section.withConfig({
          displayName: "pages__Section",
          componentId: "sc-17dyu89-0",
        })(["", ""], function (e) {
          e.height;
          return "\n";
        }),
        Yn = !0;
      !(function (e) {
        (e.landing = "landing"),
          (e.whyus = "whyus"),
          (e.works = "works"),
          (e.contact = "contact");
      })(Vn || (Vn = {}));
      var Gn = function (e) {
        var n = (0, a.useRef)(null),
          t = (0, c.Z)(function (e) {
            return e.videoUrl;
          }),
          o = (0, a.useRef)(null);
        return (
          (0, a.useEffect)(
            function () {
              n.current && c.Z.setState({ video: n });
            },
            [n]
          ),
          (0, g.jsxs)(g.Fragment, {
            children: [
              (0, g.jsx)(qn, { isLoading: !1 }),
              (0, g.jsx)(F.a5, {
                options: {
                  smooth: !0,
                  tablet: { smooth: !0 },
                  smartphone: { smooth: !1 },
                },
                containerRef: o,
                children: (0, g.jsxs)("main", {
                  "data-scroll-container": !0,
                  ref: o,
                  children: [
                    (0, g.jsx)(Ue, {}),
                    (0, g.jsx)(Xn, {
                      "data-scroll-section": !0,
                      children: (0, g.jsx)(en, {}),
                    }),
                    (0, g.jsx)(Xn, {
                      "data-scroll-section": !0,
                      children: (0, g.jsx)(hn, {}),
                    }),
                    (0, g.jsx)(Xn, {
                      "data-scroll-section": !0,
                      children: (0, g.jsx)(gn, {}),
                    }),
                    (0, g.jsx)(Xn, {
                      "data-scroll-section": !0,
                      style: { background: "white" },
                      children: (0, g.jsx)(Rn, {}),
                    }),
                  ],
                }),
              }),
              (0, g.jsx)("video", {
                loop: !0,
                autoPlay: !0,
                hidden: !0,
                muted: !0,
                preload: "auto",
                playsInline: !0,
                ref: n,
                src: t,
              }),
            ],
          })
        );
      };
      (Gn.canvasProps = l.canvasProps),
        (Gn.r3f = function (e) {
          return (0, g.jsx)(
            Un,
            (function (e) {
              for (var n = 1; n < arguments.length; n++) {
                var t = null != arguments[n] ? arguments[n] : {};
                n % 2
                  ? Hn(Object(t), !0).forEach(function (n) {
                      (0, o.Z)(e, n, t[n]);
                    })
                  : Object.getOwnPropertyDescriptors
                  ? Object.defineProperties(
                      e,
                      Object.getOwnPropertyDescriptors(t)
                    )
                  : Hn(Object(t)).forEach(function (n) {
                      Object.defineProperty(
                        e,
                        n,
                        Object.getOwnPropertyDescriptor(t, n)
                      );
                    });
              }
              return e;
            })({}, e)
          );
        });
      var Kn = Gn;
    },
    4393: function (e, n, t) {
      "use strict";
      t.r(n),
        t.d(n, {
          canvasProps: function () {
            return P;
          },
          default: function () {
            return k;
          },
        });
      var o = t(6864),
        r = t(7294),
        i = t(9499),
        a = t(4730),
        c = t(9477),
        l = t(6625),
        s = t(4294),
        d = t(5893),
        p = [
          "hasVideo",
          "interactive",
          "play",
          "children",
          "onLeave",
          "onHover",
        ];
      function u(e, n) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          n &&
            (o = o.filter(function (n) {
              return Object.getOwnPropertyDescriptor(e, n).enumerable;
            })),
            t.push.apply(t, o);
        }
        return t;
      }
      function f(e) {
        for (var n = 1; n < arguments.length; n++) {
          var t = null != arguments[n] ? arguments[n] : {};
          n % 2
            ? u(Object(t), !0).forEach(function (n) {
                (0, i.Z)(e, n, t[n]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : u(Object(t)).forEach(function (n) {
                Object.defineProperty(
                  e,
                  n,
                  Object.getOwnPropertyDescriptor(t, n)
                );
              });
        }
        return e;
      }
      var h = function (e) {
          var n = e.hasVideo,
            t = void 0 === n || n,
            o = e.interactive,
            i = e.play,
            u = void 0 !== i && i,
            h = e.children,
            m = void 0 === h ? "TEXT" : h,
            g = e.onLeave,
            y = void 0 === g ? function () {} : g,
            b = e.onHover,
            v = void 0 === b ? function () {} : b,
            x = (0, a.Z)(e, p),
            j = (0, s.Z)(function (e) {
              return null === e || void 0 === e ? void 0 : e.video;
            }),
            w = (0, r.useState)(!1),
            O = (w[0], w[1], (0, r.useState)("/fonts/AkiraOutline.otf")),
            P = O[0],
            k = O[1];
          return (
            (0, r.useEffect)(
              function () {
                var e;
                u && (null === (e = j.current) || void 0 === e || e.play());
              },
              [m, j, u]
            ),
            (0, d.jsxs)(
              l.x,
              f(
                f(
                  {
                    font: P,
                    fontSize: 1,
                    letterSpacing: -0.06,
                    onPointerDown: function () {},
                    onPointerLeave: function () {
                      o && k("/fonts/AkiraOutline.otf"), y();
                    },
                    onPointerOver: function () {
                      o && k("/fonts/AkiraSuperBold.otf"), v();
                    },
                  },
                  x
                ),
                {},
                {
                  children: [
                    m,
                    t &&
                      (0, d.jsx)("meshBasicMaterial", {
                        toneMapped: !1,
                        children: (0, d.jsx)("videoTexture", {
                          attach: "map",
                          args: [
                            null === j || void 0 === j ? void 0 : j.current,
                          ],
                          encoding: c.sRGBEncoding,
                        }),
                      }),
                  ],
                }
              )
            )
          );
        },
        m = t(6835),
        g = t(5769),
        y = t(7768),
        b = ["surface", "normalSurface"];
      function v(e, n) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          n &&
            (o = o.filter(function (n) {
              return Object.getOwnPropertyDescriptor(e, n).enumerable;
            })),
            t.push.apply(t, o);
        }
        return t;
      }
      function x(e) {
        for (var n = 1; n < arguments.length; n++) {
          var t = null != arguments[n] ? arguments[n] : {};
          n % 2
            ? v(Object(t), !0).forEach(function (n) {
                (0, i.Z)(e, n, t[n]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : v(Object(t)).forEach(function (n) {
                Object.defineProperty(
                  e,
                  n,
                  Object.getOwnPropertyDescriptor(t, n)
                );
              });
        }
        return e;
      }
      var j = function (e) {
          var n = e.surface,
            t = void 0 === n ? "/models/textures/SurfaceImperfections.jpg" : n,
            o = e.normalSurface,
            r =
              void 0 === o
                ? "/models/textures/SurfaceImperfections_normal.jpg"
                : o,
            i = (0, a.Z)(e, b),
            c = (0, g.m)([t, r]),
            l = (0, m.Z)(c, 2),
            s = l[0],
            p = l[1];
          return (0, d.jsx)(
            y.r,
            x(
              x({ resolution: 1024, args: [8, 8] }, i),
              {},
              {
                children: function (e, n) {
                  return (0, d.jsx)(
                    e,
                    x(
                      {
                        color: "#f0f0f0",
                        metalness: 0,
                        roughnessMap: s,
                        normalMap: p,
                        normalScale: [2, 2],
                      },
                      n
                    )
                  );
                },
              }
            )
          );
        },
        w = function () {
          var e = (0, s.Z)(function (e) {
              return e.domReady;
            }),
            n = (0, s.Z)(function (e) {
              return e.letter;
            });
          return (0, d.jsxs)(d.Fragment, {
            children: [
              e &&
                (0, d.jsx)(h, {
                  font: "/fonts/AkiraSuperBold.otf",
                  position: [0, 1.4, -4],
                  fontSize: 2,
                  play: e,
                  children: n,
                }),
              (0, d.jsx)(j, {
                mirror: 1,
                blur: [500, 100],
                mixBlur: 12,
                mixStrength: 1.5,
                rotation: [-Math.PI / 2, 0, Math.PI / 2],
                position: [0, 0.4, -4],
              }),
            ],
          });
        },
        O = t(5804),
        P = {
          gl: { alpha: !1 },
          pixelRatio: [1, 1.5],
          camera: { dpr: [1, 1.5], position: [0, 0, 15], fov: 15, zoom: 0.2 },
        };
      var k = function (e) {
        return (
          (0, o.Z)({}, e),
          (function () {
            var e = (0, r.useState)(function () {
                return new c.Vector3();
              })[0],
              n = (0, s.Z)(function (e) {
                return e.domReady;
              }),
              t = (0, s.Z)(function (e) {
                return e.changeCameraEffect;
              }),
              o = (0, O.w)(),
              i = o.size,
              a = (o.viewport, i.width < 700);
            (0, O.x)(function (o) {
              o.clock.elapsedTime < 6 &&
                o.camera.position.lerp(
                  e.set(a ? 0 : -1.3, 0.2, n ? 0.001 : 3),
                  0.05
                ),
                o.clock.elapsedTime >= 6 &&
                  (t
                    ? (o.camera.position.z < 17 &&
                        o.camera.position.lerp(
                          e.set(
                            o.camera.position.x,
                            o.camera.position.y,
                            o.camera.position.z + 17
                          ),
                          0.05
                        ),
                      o.camera.position.z >= 16 &&
                        s.Z.setState({ changeCameraEffect: !1 }))
                    : o.camera.position.lerp(
                        e.set(
                          a ? 0.3 * Math.sin(o.clock.elapsedTime) : -1.7,
                          o.camera.position.y,
                          0.3 * Math.sin(o.clock.elapsedTime)
                        ),
                        0.05
                      ));
            });
          })(),
          (0, d.jsxs)(d.Fragment, {
            children: [
              (0, d.jsx)("fog", {
                attach: "fog",
                color: "black",
                near: 5,
                far: 15,
              }),
              (0, d.jsx)("ambientLight", {}),
              (0, d.jsx)(r.Suspense, {
                fallback: null,
                children: (0, d.jsx)("group", {
                  position: [0, -1, 0],
                  children: (0, d.jsx)(w, {}),
                }),
              }),
            ],
          })
        );
      };
    },
    8312: function (e, n, t) {
      (window.__NEXT_P = window.__NEXT_P || []).push([
        "/",
        function () {
          return t(8946);
        },
      ]);
    },
  },
  function (e) {
    e.O(0, [737, 617, 296, 612, 18, 774, 888, 179], function () {
      return (n = 8312), e((e.s = n));
      var n;
    });
    var n = e.O();
    _N_E = n;
  },
]);
