<template>
  <ion-header>
    <ion-toolbar>
      <ion-title>ข้อมูลสมาชิก - {{ fullName }}</ion-title>
      <ion-buttons slot="end">
        <ion-button @click="dialogDismiss()">
          <ion-icon :icon="close"></ion-icon></ion-button>
      </ion-buttons>
    </ion-toolbar>
  </ion-header>
  <ion-content>
    <ion-list :inset="true">
      <ion-item>
        <ion-label>
          <ion-note color="medium">ชื่อ</ion-note><br />
          <ion-text>
            {{ member?.fName }}
          </ion-text>
        </ion-label>
        <ion-label>
          <ion-note color="medium">นามสกุล</ion-note><br />
          <ion-text>
            {{ member?.lName }}
          </ion-text>
        </ion-label>
      </ion-item>
      <ion-item>
        <ion-label>
          <ion-note color="medium">อีเมลล์</ion-note><br />
          <ion-text>
            {{ member?.email }}
          </ion-text>
        </ion-label>
      </ion-item>
      <ion-item>
        <ion-label>
          <ion-note color="medium">เบอร์โทรศัพท์</ion-note><br />
          <ion-text>
            {{ member?.phoneNum }}
          </ion-text>
        </ion-label>
        <ion-label>
          <ion-note color="medium">LINE ID</ion-note><br />
          <ion-text>
            {{ member?.lineID }}
          </ion-text>
        </ion-label>
      </ion-item>
      <ion-item>
        <ion-label>
          <ion-note color="medium">ที่อยู่</ion-note><br />
          <ion-text>
            {{ member?.address }}
          </ion-text>
        </ion-label>
      </ion-item>
    </ion-list>
  </ion-content>
</template>

<script setup lang="ts">
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonList,
  IonItem,
  IonLabel,
  IonText,
  IonNote,
  IonButtons,
  IonButton,
  IonIcon,
  modalController,
} from "@ionic/vue";
import { defineProps } from "vue";
import { close } from "ionicons/icons";
const props = defineProps({
  member: Object
});
const fullName =
  props.member?.title + " " + props.member?.fName + " " + props.member?.lName;

const dialogDismiss = () => modalController.dismiss();
</script>
