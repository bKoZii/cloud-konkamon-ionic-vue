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
      <ion-button fill="clear" @click="personalInfoModal"><ion-icon :icon="person"
          slot="start"></ion-icon>ข้อมูลส่วนตัว</ion-button>
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
  IonButton,
  IonIcon,
  modalController
} from "@ionic/vue";
import { person } from "ionicons/icons";
import { defineAsyncComponent } from 'vue';
const myPersonalInfo = defineAsyncComponent(() => import("@/components/home/myPersonalInfo.vue"))
const personalInfoModal = async () => {
  const modal = await modalController.create({
    component: myPersonalInfo
  })
  modal.present()
}
</script>
