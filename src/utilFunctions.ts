import { toastController } from "@ionic/vue";
import { checkmarkCircle } from "ionicons/icons";

export const memberToast = async (msg: string, color: string = 'success') => {
  const toast = await toastController.create({
    message: msg,
    duration: 1500,
    position: "top",
    color: color,
    icon: checkmarkCircle,
  });
  await toast.present();
};