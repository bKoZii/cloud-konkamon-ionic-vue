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
              <ion-list-header>
                <ion-title class="ion-text-center">รายชื่อสมาชิก</ion-title>
              </ion-list-header>
              <ion-item-sliding v-for="data in memberData" :key="data.id">
                <ion-item @click="openModal(memberDetailModal, data)">
                  <ion-label>{{ data.title + " " + data.fName + " " + data.lName }}</ion-label>
                </ion-item>
                <ion-item-options>
                  <ion-item-option><ion-icon :icon="create"></ion-icon></ion-item-option>
                  <ion-item-option color="danger" @click="delMember(data)"><ion-icon :icon="trashBin"
                      color="light"></ion-icon></ion-item-option>
                </ion-item-options>
              </ion-item-sliding>
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
  IonItemSliding,
  IonItemOptions,
  IonItemOption,
  IonItem,
  IonListHeader,
  IonGrid,
  IonCol,
  IonRow,
  IonLabel,
  IonNote,
  alertController,
  modalController,
  useIonRouter,
} from "@ionic/vue";
import { create, personAdd, trashBin } from "ionicons/icons";
import { defineAsyncComponent, ref } from "vue";
import { deleteMember, memberRef } from "@/firebaseConfig";
import { useCollection } from "vuefire";
const addMemberModal = defineAsyncComponent(() => import("@/components/addMemberModal.vue"));
const memberDetailModal = defineAsyncComponent(() => import("@/components/memberDetailModal.vue"));
const editMemberModal = defineAsyncComponent(() => import("@/components/editMemberModal.vue"));
import { memberToast } from "@/utilFunctions";
const page = ref(IonPage);
const memberData = useCollection(memberRef, { wait: true });
const router = useIonRouter();

const openModal = async (modalComponent: any, props?: {}) => {
  const modal = await modalController.create({
    component: modalComponent,
    componentProps: {
      member: props || undefined
    },
    presentingElement: document.getElementById("memberPage") as HTMLElement,
    canDismiss: canDismiss,
    mode: "ios"
  });
  modal.present();
};

// const retrieveData = () => {
//   const unsubscribe = onSnapshot(itemsQuery, (snapshot: any) => {
//     const changes = snapshot.docChanges();
//     changes.forEach((change: any) => {
//       if (change.type === 'added') {
//         memberList.value.push(change.doc.data());
//       }
//       // Handle other types of changes if necessary
//     });
//   });
//   memberToast("d")
// }

const delMember = async (data: any) => {
  const alert = await alertController.create({
    mode: "ios",
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
              await memberToast(error.message);
            });
        },
      },
    ],
  });
  alert.present();
};

async function canDismiss(data?: any, role?: string) {
  return role !== "gesture";
}
</script>
