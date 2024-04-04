<template>
  <ion-header>
    <ion-toolbar>
      <ion-title>ข้อมูลส่วนตัว</ion-title>
      <ion-buttons slot="end">
        <ion-button @click="modalController.dismiss()">
          <ion-icon :icon="close"></ion-icon></ion-button>
      </ion-buttons>
    </ion-toolbar>
  </ion-header>
  <ion-content class="ion-padding">
    <ion-list>
      <ion-item><ion-icon src="/fingerprint.svg" slot="start"></ion-icon>366202360058</ion-item>
      <ion-item><ion-icon :icon="person" slot="start"></ion-icon>นาย กรกมล ศรีอ่อน - ชื่อเล่น: บิ๊ก</ion-item>
      <ion-item><ion-icon :icon="mail" slot="start"></ion-icon>konkamon.si@rmutsvmail.com</ion-item>
      <ion-item><ion-icon :icon="people" slot="start"></ion-icon>IT212</ion-item>
      <ion-item>
        <ion-icon :icon="school" slot="start"></ion-icon>
        สาขาเทคโนโลยีสารสนเทศ คณะวิทยาศาสตร์และเทคโนโลยี<br />มหาวิทยาลัยเทคโนโลยีราชมงคลศรีวิชัย
      </ion-item>
      <ion-item><ion-icon :icon="logoGithub" slot="start"></ion-icon><a href="https://github.com/bKoZii" target="_blank"
          rel="noopener noreferrer">bKoZii</a></ion-item>
    </ion-list>
  </ion-content>
</template>
<script setup lang="ts">
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonList,
  IonButton,
  IonButtons,
  IonIcon,
  IonItem,
  IonContent,
  modalController,
} from "@ionic/vue";
import { close, logoGithub, mail, people, person, school } from "ionicons/icons";
</script>
<style scoped>
ion-icon {
  color: var(--ion-color-primary);
  margin-right: clamp(0.5rem, 0.8rem, max(1rem));
}
</style>
