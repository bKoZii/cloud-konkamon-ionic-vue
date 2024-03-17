<template>
  <div>
    <ion-card>
      <ion-img alt="Silhouette of mountains" src="/me-rmutsv-square.jpg" />
      <ion-card-header>
        <ion-card-title>นาย กรกมล ศรีอ่อน</ion-card-title>
        <ion-card-subtitle>บิ๊ก</ion-card-subtitle>
      </ion-card-header>
      <ion-card-content>
        <p>นักศึกษา คณะวิทยาศาสตร์และเทคโนโลยี สาขาเทคโนโลยีสารสนเทศ</p>
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
