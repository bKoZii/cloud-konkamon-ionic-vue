<template>
  <ion-card>
    <ion-card-header>
      <ion-card-title>ชิ้นงานประจำรายวิชา</ion-card-title>
    </ion-card-header>
    <ion-card-content>
      <p>
        ชิ้นงานต่อไปนี้เป็นชิ้นงาน Ionic ประจำรายวิชา 0232430865
        การพัฒนาคลาวด์แอปพลิเคชัน
      </p>
      <ion-list>
        <ion-item>
          <ion-icon :icon="globeOutline" color="primary" class="ion-margin-end"></ion-icon>
          <ion-label>Angular Website
            <div>
              <ion-icon :icon="logoAngular" color="danger" class="ion-margin-end"></ion-icon>
            </div>
          </ion-label>

          <ion-button fill="clear" href="https://github.com/bKoZii/cloud-konkamon-bootstrap"><ion-icon
              :icon="logoGithub"></ion-icon></ion-button>
          <ion-button fill="clear" href="https://konkamon-angular.web.app/"><ion-icon
              :icon="globeOutline"></ion-icon></ion-button>
        </ion-item>
        <ion-item>
          <ion-icon :icon="phonePortraitOutline" color="primary" class="ion-margin-end" id="hover-trigger"></ion-icon>
          <ion-label>Ionic + Angular App
            <div>
              <ion-icon :icon="logoIonic" color="secondary" class="ion-margin-end"></ion-icon>
              <ion-icon :icon="logoAngular" color="danger"></ion-icon>
            </div>
          </ion-label>
          <ion-button fill="clear" href="https://github.com/bKoZii/cloud-konkamon-ionic"><ion-icon
              :icon="logoGithub"></ion-icon></ion-button>
          <ion-button fill="clear" href="https://konkamon-ionic.web.app"><ion-icon
              :icon="globeOutline"></ion-icon></ion-button>
        </ion-item>
      </ion-list>
    </ion-card-content>
  </ion-card>
</template>
<script setup lang="ts">
import {
  IonCard,
  IonCardHeader,
  IonCardContent,
  IonCardTitle,
  IonButton,
  IonIcon,
  IonList,
  IonItem,
  IonLabel,
} from "@ionic/vue";
import {
  globeOutline,
  logoAngular,
  logoGithub,
  logoIonic,
  phonePortraitOutline,
} from "ionicons/icons";
</script>
