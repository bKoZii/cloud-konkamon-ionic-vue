<template>
  <ion-header>
    <ion-toolbar>
      <ion-title>เพิ่มข้อมูลสมาชิก</ion-title>
      <ion-buttons slot="end">
        <ion-button @click="dialogDismiss()">
          <ion-icon :icon="close"></ion-icon></ion-button>
      </ion-buttons>
    </ion-toolbar>
  </ion-header>
  <ion-content class="ion-padding">
    <ion-item>
      <ion-select label="คำนำหน้า" v-model="member.title" cancel-text="ยกเลิก" ok-text="บันทึก" justify="space-between"
        :interface-options="customAlertOptions" label-placement="floating">
        <ion-select-option value="นาย" aria-selected="true">นาย</ion-select-option>
        <ion-select-option value="นาง">นาง</ion-select-option>
        <ion-select-option value="นางสาว">นางสาว</ion-select-option>
      </ion-select>
    </ion-item>
    <ion-item>
      <ion-input label="ชื่อ" type="text" v-model="member.fName" placeholder="กรุณาป้อนข้อมูล"
        label-placement="floating"></ion-input>
    </ion-item>
    <ion-item>
      <ion-input label="นามสกุล" type="text" v-model="member.lName" placeholder="กรุณาป้อนข้อมูล"
        label-placement="floating"></ion-input>
    </ion-item>
    <ion-item>
      <ion-input label="อีเมลล์" type="email" v-model="member.email" placeholder="กรุณาป้อนข้อมูล"
        label-placement="floating"></ion-input>
    </ion-item>
    <ion-item>
      <ion-input label="เบอร์โทร" type="tel" v-model="member.phoneNum" placeholder="กรุณาป้อนข้อมูล"
        label-placement="floating"></ion-input>
    </ion-item>
    <ion-item>
      <ion-input label="Line ID" type="text" v-model="member.lineID" label-placement="floating"
        placeholder="กรุณาป้อนข้อมูล"></ion-input>
    </ion-item>
    <ion-item>
      <ion-textarea label="ที่อยู่" placeholder="กรุณาป้อนข้อมูล" label-placement="floating"
        v-model="member.address"></ion-textarea>
    </ion-item>
    <ion-button expand="block" class="ion-margin-top" @click="sendData()"
      :disabled="!member.fName || !member.lName">บันทึก</ion-button>
    <ion-button expand="block" :disabled="isMemberDataEmpty" fill="clear" @click="clearMember()">Reset
      Form</ion-button>
  </ion-content>
</template>
<script setup lang="ts">
import { addMember } from "@/firebaseConfig";
import { memberToast } from "@/utilFunctions";
import {
  IonButton,
  IonButtons,
  IonIcon,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonItem,
  IonInput,
  IonSelect,
  IonSelectOption,
  IonTextarea,
  modalController,
} from "@ionic/vue";
import { close } from "ionicons/icons";
import { computed, ref } from 'vue';
import { Timestamp } from "firebase/firestore";
import { MemberInterface } from "@/memberInterface";

const member = ref<MemberInterface>({} as unknown as MemberInterface)
const customAlertOptions = {
  header: 'คำนำหน้า',
  subHeader: 'กรุณาเลือกเพียงหนึ่งรายการ',
};

const sendData = async () => {
  member.value.dateAdded = Timestamp.now().toMillis().toString()
  dialogDismiss();

  try {
    await addMember({ ...member.value }).then(async (message: string) => {
      await memberToast(message);
    }).catch(async (error: string) => {
      await memberToast("ERROR: " + error);
    });
  } catch (e: any) {
    console.error("Error Adding Member: ", e);
    await memberToast("ERROR: " + e.message)
  }
};

const dialogDismiss = () => modalController.dismiss();

const clearMember = () => {
  const clearedMember = {
    ...member.value,
    ...Object.keys(member.value).reduce(
      (acc, key) => ({ ...acc, [key]: "" }),
      {}
    ),
  };
  member.value = clearedMember;
};

const isMemberDataEmpty = computed(() => {
  return Object.values(member.value).every((value: any) => value.trim() === "");
});

</script>