<script>
import { storeToRefs } from "pinia";
import { reactive } from "vue";
import HeaderComponent from "./components/HeaderComponent.vue";
import NotificationItem from "./components/NotificationItem.vue";
import { useNotificationStore } from "./stores";
export default {
  name: "App",
  components: {
    HeaderComponent,
    NotificationItem,
  },
  setup() {
    const notificationStore = useNotificationStore();
    const { notifications } = reactive(storeToRefs(notificationStore));

    return { notifications };
  },
};
</script>

<template>
  <main>
    <div class="container bg-neutral-100">
      <header-component />
      <notification-item
        v-for="notification in notifications"
        :key="notification.id"
        :notification="notification"
      />
    </div>
  </main>
</template>

<style lang="scss">
@import "@/assets/styles/app.scss";
</style>
