import { create } from 'zustand'

const defaultVales = {
  id: "",
  title: "",
};

interface IRenameModal {
  isOpen: boolean;
  initialValues: typeof defaultVales;
  onOpen: (id: string, title: string) => void;
  onClose: () => void;
}

export const useRenameModal = create<IRenameModal>((set) => ({
  isOpen: false,
  onOpen: (id, title) => set({
    isOpen: true,
    initialValues: {
      id, title
    }
  }),
  onClose: () => set({
    isOpen: false,
    initialValues: defaultVales
  }),
  initialValues: defaultVales
}))
