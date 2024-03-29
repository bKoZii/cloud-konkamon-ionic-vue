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
      <ion-button fill="clear" href="https://github.com/bKoZii"><ion-icon :icon="logoGithub"></ion-icon></ion-button>
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
  IonIcon
} from "@ionic/vue";
import { logoGithub } from "ionicons/icons";
</script>
