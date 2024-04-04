<template>
  <div>
    <ion-card>
      <ion-img src="/me-rmutsv-square.webp" alt="Konkamon Sion" />
      <ion-card-header>
        <ion-card-title>นาย กรกมล ศรีอ่อน</ion-card-title>
        <ion-card-subtitle>บิ๊ก</ion-card-subtitle>
      </ion-card-header>
      <ion-card-content>
        <p>นักศึกษา มหาวิทยาลัยเทคโนโลยีราชมงคลศรีวิชัย คณะวิทยาศาสตร์และเทคโนโลยี แผนกเทคโนโลยีสารสนเทศ</p>
      </ion-card-content>
      <myPersonalInfo />
    </ion-card>
  </div>
</template>
<script setup lang="ts">
import {
  IonImg,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
} from "@ionic/vue";
import { defineAsyncComponent } from 'vue';
const myPersonalInfo = defineAsyncComponent(() => import("@/components/home/myPersonalInfo.vue"))
</script>


<style scoped>
#myPersonalInfo ion-icon {
  color: var(--ion-color-primary);
  margin-right: clamp(0.5rem, 0.8rem, max(1rem));
}
</style>
