<template>
  <header class="flex align-items-center justify-content-space-between">
    <div class="flex align-items-center">
      <h1 class="fw-bold fs-900">Notifications</h1>
      <span class="bg-primary-700 text-neutral-100 fw-bold" v-if="allNotificationsIsReaded">
        {{ notificationsCount }}
      </span>
    </div>
    <div>
      <a
        href="#"
        @click="markAllAsRead()"
        class="fs-600 text-neutral-800 text-decoration-none fw-regular"
      >
        {{ allNotificationsIsReaded ? "Mark al as read" : "Mark all as unread" }}
      </a>
    </div>
  </header>
</template>

<script>
import { useNotificationStore } from "@/stores";
import { storeToRefs } from "pinia";

export default {
  setup() {
    const notificationStore = useNotificationStore();
    const { allNotificationsIsReaded, notificationsCount } = storeToRefs(notificationStore);

    const markAllAsRead = () => {
      notificationStore.markAllAsRead(!allNotificationsIsReaded.value);
    };

    return { markAllAsRead, notificationsCount, allNotificationsIsReaded };
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/header.scss";
</style>
