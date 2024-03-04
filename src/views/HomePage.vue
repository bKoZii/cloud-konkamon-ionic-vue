<template>
  <ion-page>
    <ion-header>
      <ion-toolbar color="primary" mode="ios">
        <ion-title>หน้าหลัก</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true" class="ion-padding">
      <ion-card>
        <img alt="Silhouette of mountains" src="/me1.jpg" />
        <ion-card-header>
          <ion-card-title>นาย กรกมล ศรีอ่อน</ion-card-title>
          <ion-card-subtitle>พรี่บิ๊กเองค้าบ</ion-card-subtitle>
        </ion-card-header>

        <ion-card-content>
          <p>นักศึกษา คณะวิทยาศาสตร์และเทคโนโลยี สาขาเทคโนโลยีสารสนเทศ</p>
        </ion-card-content>
      </ion-card>

    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonCard, IonCardHeader, IonCardContent, IonCardTitle, IonCardSubtitle } from '@ionic/vue';
</script>