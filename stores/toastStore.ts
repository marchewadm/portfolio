import { defineStore } from "pinia";

type ToastType = "success" | "error";

export const useToastStore = defineStore("toastStore", () => {
  const isToastOpen = ref(false);
  const toastMessage = ref("");
  const toastType = ref<ToastType>("success");

  function $reset() {
    isToastOpen.value = false;
    toastMessage.value = "";
    toastType.value = "success";
  }

  function showToast(message: string, type?: ToastType) {
    isToastOpen.value = true;
    toastMessage.value = message;
    toastType.value = type || "success";
  }

  return {
    isToastOpen,
    toastMessage,
    toastType,
    $reset,
    showToast,
  };
});
