<template>
  <ion-page id="mainPage">
    <ion-header>
      <ion-toolbar color="primary" mode="ios">
        <ion-title>หน้าหลัก</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-grid :fixed="true">
        <ion-row class="ion-justify-content-center">
          <ion-col size="12" size-lg="4" size-md="8">
            <myInfo />
          </ion-col>
          <ion-col size="12" size-lg="6" size-md="8">
            <assignmentsCard />
            <otherWorkCard />
          </ion-col>
        </ion-row>
      </ion-grid>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
const myInfo = defineAsyncComponent(() => import("@/components/home/myInfo.vue"));
const assignmentsCard = defineAsyncComponent(() => import("@/components/home/assignmentsCard.vue"));
const otherWorkCard = defineAsyncComponent(() => import("@/components/home/otherWorkCard.vue"));
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonGrid,
  IonRow,
  IonCol,
} from "@ionic/vue";
import { defineAsyncComponent } from "vue";

</script>

<style scoped>
#bootstrapIcon {
  color: #5E1675;
}
</style>