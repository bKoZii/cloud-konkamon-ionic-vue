<template>
  <ion-card>
    <ion-card-header>
      <ion-card-title>ชิ้นงานอื่นๆ</ion-card-title>
    </ion-card-header>
    <ion-card-content>
      <ion-list>
        <ion-item>
          <ion-icon :icon="phonePortraitOutline" color="primary" class="ion-margin-end"></ion-icon>
          <ion-label>
            Ionic + Vue
            <div>
              <ion-icon :icon="logoIonic" color="secondary" class="ion-margin-end"></ion-icon>
              <ion-icon :icon="logoVue" color="success" class="ion-margin-end"></ion-icon>
            </div>
          </ion-label>
          <ion-button fill="clear" href="https://github.com/bKoZii/cloud-konkamon-ionic-vue"><ion-icon
              :icon="logoGithub"></ion-icon></ion-button>
          <ion-button fill="clear" href="https://konkamon-ionic-vue.web.app"><ion-icon
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
  logoGithub,
  logoIonic,
  phonePortraitOutline,
  logoVue,
} from "ionicons/icons";
</script>
