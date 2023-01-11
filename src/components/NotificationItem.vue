<script>
import { ref } from "vue";
import { useNotificationStore } from "@/stores";
import DynamicImage from "./DynamicImage.vue";

export default {
  name: "NotificationItem",
  components: {
    DynamicImage,
  },
  props: {
    notification: {
      type: Object,
      required: false,
    },
  },
  setup(props) {
    const notificationStore = useNotificationStore();

    let avatarSrc = ref(`avatar-${props.notification.profile.avatar}.webp`);
    let profileImgSrc = ref(`image-${props.notification.image}.webp`);

    const markAsRead = (id) => {
      notificationStore.markAsRead(id);
    };

    return { avatarSrc, profileImgSrc, markAsRead };
  },
};
</script>

<template>
  <div
    @click="notification.unread && markAsRead(notification.id)"
    class="item flex flex-direction-row"
    title="Click on mark as read"
    :class="[
      { 'bg-neutral-300 | unread': notification.unread },
      { 'has-private-message': notification.private },
    ]"
  >
    <div>
      <div class="avatar">
        <dynamic-image :image="avatarSrc" :alt="notification.profile.name" />
      </div>
    </div>
    <div class="flex flex-direction-column">
      <div class="comment">
        <p v-html="notification.text"></p>
      </div>
      <div class="time text-neutral-600">{{ notification.time }} ago</div>
      <div
        class="private-message text-neutral-800"
        v-if="notification.private"
        v-html="notification.message"
      ></div>
    </div>
    <div class="profile-image" v-if="notification.comment">
      <dynamic-image :image="profileImgSrc" :alt="notification.profile.name" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/styles/notification-item.scss";
</style>
