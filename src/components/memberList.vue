<template>
  <ion-item-sliding v-if="data">
    <ion-item @click="openModal(memberDetailModal, data)">
      <ion-label>{{ data.title + " " + data.fName + " " + data.lName }}</ion-label>
    </ion-item>
    <ion-item-options>
      <ion-item-option @click="openModal(editMemberModal, data)"><ion-icon :icon="create"></ion-icon></ion-item-option>
      <ion-item-option color="danger" @click="delMember(data)"><ion-icon :icon="trashBin"
          color="light"></ion-icon></ion-item-option>
    </ion-item-options>
  </ion-item-sliding>
</template>
<script setup lang="ts">
import { IonItem, IonItemSliding, IonLabel, IonItemOptions, IonItemOption, alertController, IonIcon } from '@ionic/vue';
import { create, trashBin } from "ionicons/icons"
import { defineAsyncComponent } from 'vue';
import { deleteMember } from '@/firebaseConfig';
import { memberToast, openModal } from '@/utilFunctions';
import { MemberInterface } from '@/memberInterface';
const memberDetailModal = defineAsyncComponent(() => import("@/components/memberDetailModal.vue"));
const editMemberModal = defineAsyncComponent(() => import("@/components/editMemberModal.vue"));

defineProps<{
  data: MemberInterface
}>()

const delMember = async (data: any) => {
  const alert = await alertController.create({
    header: "ลบข้อมูลสมาชิก",
    subHeader: "คุณต้องการลบข้อมูลสมาชิกนี้หรือไม่?",
    message: data.title + " " + data.fName + " " + data.lName,
    buttons: [
      {
        text: "ยกเลิก",
        role: "cancel",
      },
      {
        text: "ยืนยัน",
        role: "destructive",
        handler: () => {
          deleteMember(data.id)
            .then(async (message) => {
              await memberToast(message);
            })
            .catch(async (error) => {
              await memberToast(error.message, 'danger');
            });
        },
      },
    ],
  });
  alert.present();
};
</script>
<style scoped>
ion-icon {
  width: 1.2rem;
  height: 1.2rem;
}
</style>