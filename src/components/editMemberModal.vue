<template>
  <ion-header>
    <ion-toolbar>
      <ion-title>แก้ไขข้อมูลสมาชิก</ion-title>
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
    <ion-button expand="block" class="ion-margin-top" @click="updateData()"
      :disabled="isMemberUnchanged">บันทึก</ion-button>
  </ion-content>
</template>
<script setup lang="ts">
import { updateMember } from "@/firebaseConfig";
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
import { computed, ref } from "vue";

const props = defineProps({
  member: Object,
});

const member = ref({
  ...props.member,
});

const oldMember = ref({ ...member.value });

const isMemberUnchanged = computed(() => {
  return JSON.stringify(member.value) === JSON.stringify(oldMember.value);
});

const customAlertOptions = {
  header: "คำนำหน้า",
  subHeader: "กรุณาเลือกเพียงหนึ่งรายการ",
};

const updateData = async () => {
  const memberObject: Object = member.value;
  dialogDismiss();
  try {
    await updateMember(member.value.id, memberObject)
      .then(async (message: string) => {
        await memberToast(message);
      })
      .catch(async (error: string) => {
        await memberToast(error);
      });
  } catch (e: any) {
    console.error(e.message);
  }
};

const dialogDismiss = () => modalController.dismiss();
</script>
