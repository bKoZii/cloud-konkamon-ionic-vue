<template>
  <ion-page>
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar slot="bottom" color="primary">
        <ion-tab-button tab="home" href="/tabs/home">
          <ion-icon aria-hidden="true" :icon="home" />
          <ion-label>Home</ion-label>
        </ion-tab-button>
        <ion-tab-button tab="member" href="/tabs/member">
          <ion-icon aria-hidden="true" :icon="people" />
          <ion-label>Member</ion-label>
        </ion-tab-button>
        <!-- <ion-tab-button tab="project" href="/tabs/project"> -->
        <ion-tab-button tab="project" id="present-alert">
          <ion-icon aria-hidden="true" :icon="document" />
          <ion-label>Project</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
  <ion-alert
    trigger="present-alert"
    header="Project"
    message="Coming Soon..."
    :buttons="['รับทราบ']"
  ></ion-alert>
</template>

<script setup lang="ts">
import {
  IonTabBar,
  IonAlert,
  IonTabButton,
  IonTabs,
  IonLabel,
  IonIcon,
  IonPage,
  IonRouterOutlet,
} from "@ionic/vue";
import { document, home, people } from "ionicons/icons";
</script>
