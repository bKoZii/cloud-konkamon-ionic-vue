<template>
  <ion-header>
    <ion-toolbar>
      <ion-title>ข้อมูลสมาชิก</ion-title>
      <ion-buttons slot="end">
        <ion-button @click="dialogDismiss()">
          <ion-icon :icon="close"></ion-icon></ion-button>
      </ion-buttons>
    </ion-toolbar>
  </ion-header>
  <ion-content class="ion-padding">
    <ion-list>
      <ion-item>
        <ion-icon :icon="person" slot="start"></ion-icon>
        <ion-label>
          {{ member.title + " " + member.fName + " " + member.lName }}
        </ion-label>
      </ion-item>
      <ion-item>
        <ion-icon aria-hidden="true" :icon="mail" slot="start"></ion-icon>
        <ion-label>{{ member.email }}</ion-label>
      </ion-item>
      <ion-item>
        <ion-icon :icon="call" slot="start"></ion-icon>
        <ion-label>{{ member.phoneNum }}</ion-label>
      </ion-item>
      <ion-item>
        <ion-icon src="/logoLine.svg" slot="start"></ion-icon>
        <ion-label>{{ member.lineID }}</ion-label>
      </ion-item>
      <ion-item>
        <ion-icon :icon="home" slot="start"></ion-icon>
        <ion-label>{{ member.address }}</ion-label>
      </ion-item>
    </ion-list>
  </ion-content>
</template>

<script setup lang="ts">
import { MemberInterface } from "@/memberInterface";
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonList,
  IonItem,
  IonLabel,
  IonButtons,
  IonButton,
  IonIcon,
  modalController,
} from "@ionic/vue";

import { close, home, mail, person, call } from "ionicons/icons";

const { member } = defineProps<{ member: MemberInterface }>();
const dialogDismiss = () => modalController.dismiss();

</script>
<style>
ion-icon {
  color: var(--ion-color-primary)
}
</style>