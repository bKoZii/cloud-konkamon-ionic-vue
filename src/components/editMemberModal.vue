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
      <ion-select label="คำนำหน้า" v-model="editedMember.title" cancel-text="ยกเลิก" ok-text="บันทึก"
        justify="space-between" :interface-options="customAlertOptions" label-placement="floating">
        <ion-select-option value="นาย" aria-selected="true">นาย</ion-select-option>
        <ion-select-option value="นาง">นาง</ion-select-option>
        <ion-select-option value="นางสาว">นางสาว</ion-select-option>
      </ion-select>
    </ion-item>
    <ion-item>
      <ion-input label="ชื่อ" type="text" v-model="editedMember.fName" placeholder="กรุณาป้อนข้อมูล"
        label-placement="floating"></ion-input>
    </ion-item>
    <ion-item>
      <ion-input label="นามสกุล" type="text" v-model="editedMember.lName" placeholder="กรุณาป้อนข้อมูล"
        label-placement="floating"></ion-input>
    </ion-item>
    <ion-item>
      <ion-input label="อีเมลล์" type="email" v-model="editedMember.email" placeholder="กรุณาป้อนข้อมูล"
        label-placement="floating"></ion-input>
    </ion-item>
    <ion-item>
      <ion-input label="เบอร์โทร" type="tel" v-model="editedMember.phoneNum" placeholder="กรุณาป้อนข้อมูล"
        label-placement="floating"></ion-input>
    </ion-item>
    <ion-item>
      <ion-input label="Line ID" type="text" v-model="editedMember.lineID" label-placement="floating"
        placeholder="กรุณาป้อนข้อมูล"></ion-input>
    </ion-item>
    <ion-item>
      <ion-textarea label="ที่อยู่" placeholder="กรุณาป้อนข้อมูล" label-placement="floating"
        v-model="editedMember.address"></ion-textarea>
    </ion-item>
    <ion-button expand="block" class="ion-margin-top" @click="updateData()"
      :disabled="isMemberUnchanged">บันทึก</ion-button>
  </ion-content>
</template>
<script setup lang="ts">
import { updateMember } from "@/firebaseConfig";
import { MemberInterface } from "@/memberInterface";
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
import { Timestamp } from "firebase/firestore";
import { close } from "ionicons/icons";
import { computed, ref } from 'vue';

const memberProp = defineProps<{
  member: MemberInterface
}>()

const editedMember = ref({ ...memberProp.member });
const oldMember = ref({ ...editedMember.value });
defineExpose({ editedMember });

const isMemberUnchanged = computed(() => {
  return JSON.stringify(editedMember.value) === JSON.stringify(oldMember.value)
});

const customAlertOptions = {
  header: "คำนำหน้า",
  subHeader: "กรุณาเลือกเพียงหนึ่งรายการ",
};

const updateData = async () => {
  dialogDismiss();
  editedMember.value.dateEdited = Timestamp.now().toMillis().toString()
  try {
    await updateMember(memberProp.member.id, editedMember.value)
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
