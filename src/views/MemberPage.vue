<template>
  <ion-page ref="page" id="memberPage">
    <ion-header id="memberHeader">
      <ion-toolbar color="primary" mode="ios">
        <ion-title>สมาชิก</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-grid>
        <ion-row class="ion-justify-content-center">
          <ion-col size="12" size-lg="5" size-md="10">
            <ion-list>
              <ion-title class="ion-text-center">รายชื่อสมาชิก</ion-title>
              <MemberList v-for="data in memberData" :key="data.id" :data="data" />
            </ion-list>
            <ion-note>(ดึงข้อมูลจาก Firestore)</ion-note>
          </ion-col>
        </ion-row>
      </ion-grid>
      <ion-fab slot="fixed" vertical="top" horizontal="end" :edge="true">
        <ion-fab-button color="tertiary" @click="openModal(addMemberModal)">
          <ion-icon :icon="personAdd"></ion-icon>
        </ion-fab-button>
      </ion-fab>
    </ion-content>
  </ion-page>
</template>
<style scoped>
ion-item-option {
  width: 3em;

}

ion-item-option ion-icon {
  width: 1.2rem;
  height: 1.2rem;
}
</style>
<script setup lang="ts">
import {
  IonFab,
  IonFabButton,
  IonIcon,
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonList,
  IonGrid,
  IonCol,
  IonRow,
  IonNote,
} from "@ionic/vue";
import { personAdd } from "ionicons/icons";
import { defineAsyncComponent } from 'vue';
import { memberRef } from "@/firebaseConfig";
const addMemberModal = defineAsyncComponent(() => import("@/components/addMemberModal.vue"));
const MemberList = defineAsyncComponent(() => import("@/components/memberList.vue"));
import { openModal } from "@/utilFunctions";
import { useCollection } from 'vuefire';
import { MemberInterface } from "@/memberInterface";
const memberData = useCollection<MemberInterface>(memberRef, { wait: true });
</script>
