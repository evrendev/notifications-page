import {
  _ as l,
  s as Z,
  o,
  c as i,
  a as n,
  t as d,
  b as v,
  p as m,
  e as w,
  r as k,
  f as b,
  n as L,
  g,
  h as p,
  F as M,
  i as I,
  j as h,
  k as T,
  l as U,
} from "../chunks/vendor-573cf8d3.js";
import { u } from "../chunks/common-929c865c.js";
const C = {
    setup() {
      const e = u(),
        { allNotificationsIsReaded: a, notificationsCount: t } = Z(e);
      return {
        markAllAsRead: () => {
          e.markAllAsRead(!a.value);
        },
        notificationsCount: t,
        allNotificationsIsReaded: a,
      };
    },
  },
  P = (e) => (m("data-v-6226d107"), (e = e()), w(), e),
  z = { class: "flex align-items-center justify-content-space-between" },
  V = { class: "flex align-items-center" },
  j = P(() => n("h3", { class: "fw-bold fs-900" }, "Notifications", -1)),
  Y = { key: 0, class: "bg-primary-700 text-neutral-100 fw-bold" };
function B(e, a, t, A, r, s) {
  return (
    o(),
    i("header", z, [
      n("div", V, [
        j,
        A.allNotificationsIsReaded ? (o(), i("span", Y, d(A.notificationsCount), 1)) : v("", !0),
      ]),
      n("div", null, [
        n(
          "a",
          {
            href: "#",
            onClick: a[0] || (a[0] = (c) => A.markAllAsRead()),
            class: "fs-600 text-neutral-800 text-decoration-none fw-regular",
          },
          d(A.allNotificationsIsReaded ? "Mark al as read" : "Mark all as unread"),
          1,
        ),
      ]),
    ])
  );
}
const E = l(C, [
    ["render", B],
    ["__scopeId", "data-v-6226d107"],
  ]),
  H =
    "data:image/webp;base64,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",
  F =
    "data:image/webp;base64,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",
  O =
    "data:image/webp;base64,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",
  X =
    "data:image/webp;base64,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",
  D =
    "data:image/webp;base64,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",
  x =
    "data:image/webp;base64,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",
  N =
    "data:image/webp;base64,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",
  S =
    "data:image/webp;base64,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",
  q = {
    name: "DynamicImage",
    props: { image: { type: String, required: !0 }, alt: { type: String, required: !1 } },
    setup(e) {
      return {
        src: new URL(
          Object.assign({
            "../assets/images/avatar-angela-gray.webp": H,
            "../assets/images/avatar-anna-kim.webp": F,
            "../assets/images/avatar-jacob-thompson.webp": O,
            "../assets/images/avatar-kimberly-smith.webp": X,
            "../assets/images/avatar-mark-webber.webp": D,
            "../assets/images/avatar-nathan-peterson.webp": x,
            "../assets/images/avatar-rizky-hasanuddin.webp": N,
            "../assets/images/image-chess.webp": S,
          })[`../assets/images/${e.image}`],
          self.location,
        ).href,
      };
    },
  },
  J = ["src", "alt"];
function G(e, a, t, A, r, s) {
  return o(), i("img", { src: A.src, alt: t.alt }, null, 8, J);
}
const K = l(q, [["render", G]]);
const W = {
    name: "NotificationItem",
    components: { DynamicImage: K },
    props: { notification: { type: Object, required: !1 } },
    setup(e) {
      const a = u();
      let t = k(`avatar-${e.notification.profile.avatar}.webp`),
        A = k(`image-${e.notification.image}.webp`);
      return {
        avatarSrc: t,
        profileImgSrc: A,
        markAsRead: (s) => {
          a.markAsRead(s);
        },
      };
    },
  },
  R = { class: "avatar" },
  _ = { class: "flex flex-direction-column" },
  $ = { class: "comment" },
  tt = ["innerHTML"],
  et = { class: "time text-neutral-600" },
  at = ["innerHTML"],
  At = { key: 0, class: "profile-image" };
function nt(e, a, t, A, r, s) {
  const c = g("dynamic-image");
  return (
    o(),
    i(
      "div",
      {
        onClick: a[0] || (a[0] = (f) => t.notification.unread && A.markAsRead(t.notification.id)),
        class: L([
          "item flex flex-direction-row",
          [
            { "bg-neutral-300 | unread": t.notification.unread },
            { "has-private-message": t.notification.private },
          ],
        ]),
        title: "Click on mark as read",
      },
      [
        n("div", null, [
          n("div", R, [
            b(c, { image: A.avatarSrc, alt: t.notification.profile.name }, null, 8, [
              "image",
              "alt",
            ]),
          ]),
        ]),
        n("div", _, [
          n("div", $, [n("p", { innerHTML: t.notification.text }, null, 8, tt)]),
          n("div", et, d(t.notification.time) + " ago", 1),
          t.notification.private
            ? (o(),
              i(
                "div",
                {
                  key: 0,
                  class: "private-message text-neutral-800",
                  innerHTML: t.notification.message,
                },
                null,
                8,
                at,
              ))
            : v("", !0),
        ]),
        t.notification.comment
          ? (o(),
            i("div", At, [
              b(c, { image: A.profileImgSrc, alt: t.notification.profile.name }, null, 8, [
                "image",
                "alt",
              ]),
            ]))
          : v("", !0),
      ],
      2,
    )
  );
}
const ot = l(W, [
  ["render", nt],
  ["__scopeId", "data-v-d63ee27b"],
]);
const it = {
    name: "App",
    components: { HeaderComponent: E, NotificationItem: ot },
    setup() {
      const e = u(),
        { notifications: a } = p(Z(e));
      return { notifications: a };
    },
  },
  st = { class: "container bg-neutral-100" };
function rt(e, a, t, A, r, s) {
  const c = g("header-component"),
    f = g("notification-item");
  return (
    o(),
    i("main", null, [
      n("div", st, [
        b(c),
        (o(!0),
        i(
          M,
          null,
          I(
            A.notifications,
            (y) => (o(), h(f, { key: y.id, notification: y }, null, 8, ["notification"])),
          ),
          128,
        )),
      ]),
    ])
  );
}
const ct = l(it, [["render", rt]]),
  Q = T();
Q.use((e) => {
  const a = e.store.$id,
    t = { serialize: JSON.stringify, deserialize: JSON.parse },
    A = t.deserialize(window.localStorage.getItem(a));
  A && e.store.$patch(A),
    e.store.$subscribe((r, s) => {
      window.localStorage.setItem(a, t.serialize(s));
    });
});
const lt = U(ct);
lt.use(Q).mount("#app");
