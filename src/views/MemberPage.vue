<template>
  <ion-page ref="page">
    <ion-header>
      <ion-toolbar color="primary" mode="ios">
        <ion-title>สมาชิก</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-grid>
        <ion-row class="ion-justify-content-center">
          <ion-col size="12" size-lg="6">
            <ion-list>
              <ion-list-header>
                <ion-title>รายชื่อสมาชิก</ion-title>
              </ion-list-header>
              <ion-item-sliding v-for="data in a" :key="data">
                <ion-item>
                  <ion-label>{{ data }}</ion-label>
                </ion-item>
                <ion-item-options>
                  <ion-item-option>Favorite</ion-item-option>
                  <ion-item-option color="danger">Delete</ion-item-option>
                </ion-item-options>
              </ion-item-sliding>
            </ion-list>
          </ion-col>
        </ion-row>
      </ion-grid>
    </ion-content>
    <ion-fab slot="fixed" vertical="top" horizontal="end">
      <ion-fab-button color="tertiary" id="open-modal">
        <ion-icon :icon="personAdd"></ion-icon>
      </ion-fab-button>
    </ion-fab>
    <ion-modal
      ref="modal"
      trigger="open-modal"
      :can-dismiss="canDismiss"
      :presenting-element="page.$el"
      mode="ios"
    >
      <ion-header>
        <ion-toolbar>
          <ion-title>เพิ่มข้อมูลสมาชิก</ion-title>
          <ion-buttons slot="end">
            <ion-button @click="dismiss">
              <ion-icon :icon="close"></ion-icon
            ></ion-button>
          </ion-buttons>
        </ion-toolbar>
      </ion-header>
      <ion-content class="ion-padding ion-text-center">
        <ion-title>Coming Soon...</ion-title>
      </ion-content>
    </ion-modal>
  </ion-page>
</template>

<script setup lang="ts">
import {
  IonFab,
  IonButton,
  IonButtons,
  IonModal,
  IonFabButton,
  IonIcon,
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonList,
  IonItemSliding,
  IonItemOptions,
  IonItemOption,
  IonItem,
  IonLabel,
  IonListHeader,
  IonGrid,
  IonCol,
  IonRow,
} from "@ionic/vue";
import { close, personAdd } from "ionicons/icons";
import { ref } from "vue";

const a: string[] = ["นาย กรกมล ศรีอ่อน", "นาย พรี่บิ๊ก จ้า", "นาย ใครหว่า"];
const page = ref(IonPage);
const modal = ref(IonModal);

function dismiss() {
  modal.value.$el.dismiss();
}

async function canDismiss(data?: any, role?: string) {
  return role !== "gesture";
}
</script>
