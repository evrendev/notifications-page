import { defineStore } from "pinia";

export const useNotificationStore = defineStore("notificationStore", {
  state: () => ({
    notifications: [
      {
        id: 0,
        profile: {
          name: "Mark Webber",
          avatar: "mark-webber",
        },
        text: "<strong>Mark Webber</strong> reacted to your recent post <strong>My first tournament today!</strong>",
        time: "1m",
        unread: true,
        private: false,
        comment: false,
        image: null,
        message: null,
      },
      {
        id: 1,
        profile: {
          name: "Angela Gray",
          avatar: "angela-gray",
        },
        text: "<strong>Angela Gray</strong> followed you",
        time: "5m",
        unread: true,
        private: false,
        comment: false,
        image: null,
        message: null,
      },
      {
        id: 2,
        profile: {
          name: "Jacob Thompson",
          avatar: "jacob-thompson",
        },
        text: "<strong>Jacob Thompson</strong> has joined your group <strong class='text-primary-700'>Chess Club</strong>",
        time: "1 day",
        unread: true,
        private: false,
        comment: false,
        image: null,
        message: null,
      },
      {
        id: 3,
        profile: {
          name: "Rizky Hasanuddin",
          avatar: "rizky-hasanuddin",
        },
        text: "<strong>Rizky Hasanuddin</strong> sent you a private message",
        time: "5 days",
        unread: false,
        private: true,
        comment: false,
        image: null,
        message:
          "Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game.",
      },
      {
        id: 4,
        profile: {
          name: "Kimberly Smith",
          avatar: "kimberly-smith",
        },
        text: "<strong>Kimberly Smith</strong> commented on your picture",
        time: "1 week",
        unread: false,
        private: false,
        comment: true,
        image: "chess",
        message: null,
      },
      {
        id: 5,
        profile: {
          name: "Nathan Peterson",
          avatar: "nathan-peterson",
        },
        text: "<strong>Nathan Peterson</strong> reacted to your recent post <strong>5 end-game strategies to increase your win rate</strong>",
        time: "2 week",
        unread: false,
        private: false,
        comment: false,
        image: null,
        message: null,
      },
      {
        id: 6,
        profile: {
          name: "Anna Kim",
          avatar: "anna-kim",
        },
        text: "<strong>Anna Kim</strong> left the group <strong class='text-primary-700'>Chess Club</strong>",
        time: "2 weeks",
        unread: false,
        private: false,
        comment: false,
        image: null,
        message: null,
      },
    ],
  }),
  actions: {
    markAsRead(id) {
      const notification = this.notifications.find((notification) => notification.id == id);
      if (notification) notification.unread = false;
    },
    markAllAsRead(value) {
      this.notifications.forEach((notification) => (notification.unread = value));
    },
  },
  getters: {
    allNotificationsIsReaded() {
      return this.notifications.some((notification) => notification.unread == true);
    },
  },
});
