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
            <ion-card>
              <ion-img alt="Silhouette of mountains" src="/me-rmutsv-square.jpg" />
              <ion-card-header>
                <ion-card-title>นาย กรกมล ศรีอ่อน</ion-card-title>
                <ion-card-subtitle>บิ๊ก</ion-card-subtitle>
              </ion-card-header>
              <ion-card-content>
                <p>
                  นักศึกษา คณะวิทยาศาสตร์และเทคโนโลยี สาขาเทคโนโลยีสารสนเทศ
                </p>
              </ion-card-content>
              <ion-button fill="clear" href="https://github.com/bKoZii"><ion-icon
                  :icon="logoGithub"></ion-icon></ion-button>
            </ion-card>
          </ion-col>
          <ion-col size="12" size-lg="6" size-md="8">
            <ion-card>
              <ion-card-header>
                <ion-card-title>ชิ้นงานประจำรายวิชา</ion-card-title>
              </ion-card-header>
              <ion-card-content>
                <p>
                  ชิ้นงานต่อไปนี้เป็นชิ้นงาน Ionic ประจำรายวิชา 0232430865 การพัฒนาคลาวด์แอปพลิเคชัน
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
                    <ion-icon :icon="phonePortraitOutline" color="primary" class="ion-margin-end"
                      id="hover-trigger"></ion-icon>
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
          </ion-col>
        </ion-row>
      </ion-grid>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonCard,
  IonCardHeader,
  IonCardContent,
  IonCardTitle,
  IonCardSubtitle,
  IonGrid,
  IonRow,
  IonCol,
  IonImg,
  IonButton,
  IonIcon,
  IonList,
  IonItem,
  IonLabel,
  IonNote
} from "@ionic/vue";
import { globeOutline, logoAngular, logoGithub, logoIonic, logoVue, phonePortraitOutline } from "ionicons/icons";

</script>

<style scoped>
#bootstrapIcon {
  color: #5E1675;
}
</style>