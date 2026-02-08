import { create } from "zustand";

type ContactState = {
  isSubmitting: boolean;
  isSuccess: boolean;
  error: string | null;
  setSubmitting: (val: boolean) => void;
  setSuccess: (val: boolean) => void;
  setError: (err: string | null) => void;
  reset: () => void;
};

export const useContactStore = create<ContactState>((set) => ({
  isSubmitting: false,
  isSuccess: false,
  error: null,
  setSubmitting: (val) => set({ isSubmitting: val }),
  setSuccess: (val) => set({ isSuccess: val }),
  setError: (err) => set({ error: err }),
  reset: () => set({ isSubmitting: false, isSuccess: false, error: null }),
}));
