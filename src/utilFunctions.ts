import {
  IonPage,
  isPlatform,
  modalController,
  toastController,
} from "@ionic/vue";
import { checkmarkCircle } from "ionicons/icons";

export const memberToast = async (msg: string, color?: string) => {
  const toast = await toastController.create({
    message: msg,
    duration: 1500,
    position: "top",
    color: color || "success",
    icon: checkmarkCircle,
  });
  await toast.present();
};
export const openModal = async (
  modalComponent?: any,
  props?: object,
  presentingElmt?: typeof IonPage
) => {
  const memberModal = await modalController.create({
    component: modalComponent,
    componentProps: props ? { member: props } : undefined,
    // canDismiss: canDismiss,
    presentingElement:
      isPlatform("ios") && presentingElmt
        ? (presentingElmt.value.$el as HTMLElement)
        : undefined,
  });
  memberModal.present();
};
