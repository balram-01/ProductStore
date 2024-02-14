import { RefObject } from "react";
// @ts-ignore
let toastRef: RefObject<Toast> | null = null; // Reference to the Toast component
// @ts-ignore
const setToastRef = (ref: RefObject<Toast>) => {
    toastRef = ref;
};

const showSuccessToast = (text: string, duration: number = 2000) => {
    if (toastRef?.current) {
        toastRef.current.show({
            type: 'success',
            text: text,
            duration: duration,
        });
    }
};

const showErrorToast = (text: string, duration: number = 2000) => {
    if (toastRef?.current) {
        toastRef.current.show({
            type: 'error',
            text: text,
            duration: duration,
        });
    }
};

const showWarningToast = (text: string, duration: number = 2000) => {
    if (toastRef?.current) {
        toastRef.current.show({
            type: 'warning',
            text: text,
            duration: duration,
        });
    }
};

export { setToastRef, showSuccessToast, showWarningToast, showErrorToast }