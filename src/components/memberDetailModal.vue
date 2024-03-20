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
  <ion-content>
    <ion-list :inset="true">
      <ion-item>
        <ion-label>
          <ion-note color="medium">คำนำหน้า</ion-note><br />
          <ion-text>
            {{ member.title }}
          </ion-text>
        </ion-label>
        <ion-label>
          <ion-note color="medium">ชื่อเต็ม</ion-note><br />
          <ion-text>
            {{ member.fName }}
          </ion-text>
        </ion-label>
        <ion-label>
          <ion-note color="medium">นามสกุล</ion-note><br />
          <ion-text>
            {{ member.lName }}
          </ion-text>
        </ion-label>
      </ion-item>
      <ion-item>
        <ion-label>
          <ion-note color="medium">อีเมลล์</ion-note><br />
          <ion-text>
            {{ member.email }}
          </ion-text>
        </ion-label>
      </ion-item>
      <ion-item>
        <ion-label>
          <ion-note color="medium">เบอร์โทรศัพท์</ion-note><br />
          <ion-text>
            {{ member.phoneNum }}
          </ion-text>
        </ion-label>
        <ion-label>
          <ion-note color="medium">LINE ID</ion-note><br />
          <ion-text>
            {{ member.lineID }}
          </ion-text>
        </ion-label>
      </ion-item>
      <ion-item>
        <ion-label>
          <ion-note color="medium">ที่อยู่</ion-note><br />
          <ion-text>
            {{ member.address }}
          </ion-text>
        </ion-label>
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
  IonText,
  IonNote,
  IonButtons,
  IonButton,
  IonIcon,
  modalController,
} from "@ionic/vue";
import { close } from "ionicons/icons";
import { ref } from "vue";

const memberProps = defineProps({
  member: {
    type: Object as () => MemberInterface,
    required: true,
  },
});

const member = ref({
  ...memberProps.member,
});

const dialogDismiss = () => modalController.dismiss();
</script>