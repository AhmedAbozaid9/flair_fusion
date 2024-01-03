import { toast } from "react-toastify";

const useToast = () => {
  const showToast = (message) => {
    toast.success(message, {
      className: "toast-success",
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  return {
    showToast,
  };
};

export default useToast;
