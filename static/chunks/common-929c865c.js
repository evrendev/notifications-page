import { d as n } from "./vendor-573cf8d3.js";
const s = n("notificationStore", {
  state: () => ({
    notifications: [
      {
        id: 0,
        profile: { name: "Mark Webber", avatar: "mark-webber" },
        text: "<strong>Mark Webber</strong> reacted to your recent post <strong>My first tournament today!</strong>",
        time: "1m",
        unread: !0,
        private: !1,
        comment: !1,
        image: null,
        message: null,
      },
      {
        id: 1,
        profile: { name: "Angela Gray", avatar: "angela-gray" },
        text: "<strong>Angela Gray</strong> followed you",
        time: "5m",
        unread: !0,
        private: !1,
        comment: !1,
        image: null,
        message: null,
      },
      {
        id: 2,
        profile: { name: "Jacob Thompson", avatar: "jacob-thompson" },
        text: "<strong>Jacob Thompson</strong> has joined your group <strong class='text-primary-700'>Chess Club</strong>",
        time: "1 day",
        unread: !0,
        private: !1,
        comment: !1,
        image: null,
        message: null,
      },
      {
        id: 3,
        profile: { name: "Rizky Hasanuddin", avatar: "rizky-hasanuddin" },
        text: "<strong>Rizky Hasanuddin</strong> sent you a private message",
        time: "5 days",
        unread: !1,
        private: !0,
        comment: !1,
        image: null,
        message:
          "Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game.",
      },
      {
        id: 4,
        profile: { name: "Kimberly Smith", avatar: "kimberly-smith" },
        text: "<strong>Kimberly Smith</strong> commented on your picture",
        time: "1 week",
        unread: !1,
        private: !1,
        comment: !0,
        image: "chess",
        message: null,
      },
      {
        id: 5,
        profile: { name: "Nathan Peterson", avatar: "nathan-peterson" },
        text: "<strong>Nathan Peterson</strong> reacted to your recent post <strong>5 end-game strategies to increase your win rate</strong>",
        time: "2 week",
        unread: !1,
        private: !1,
        comment: !1,
        image: null,
        message: null,
      },
      {
        id: 6,
        profile: { name: "Anna Kim", avatar: "anna-kim" },
        text: "<strong>Anna Kim</strong> left the group <strong class='text-primary-700'>Chess Club</strong>",
        time: "2 weeks",
        unread: !1,
        private: !1,
        comment: !1,
        image: null,
        message: null,
      },
    ],
  }),
  actions: {
    markAsRead(e) {
      const a = this.notifications.find((t) => t.id == e);
      a && (a.unread = !1);
    },
    markAllAsRead(e) {
      this.notifications.forEach((a) => (a.unread = e));
    },
  },
  getters: {
    allNotificationsIsReaded() {
      return this.notifications.some((e) => e.unread == !0);
    },
    notificationsCount() {
      return this.notifications.filter((e) => e.unread == !0).length;
    },
  },
});
export { s as u };
