// store/useStore.ts
import {create} from 'zustand';

interface SharedState {
  image: string | File | null | Blob; // Store image as base64 string or Blob URL
  setImage: (image: string | File | Blob) => void; // Function to update the image
  isAdmin: boolean; // State to track if the user is an admin
  setAdmin: (isAdmin: boolean) => void; // Function to update the isAdmin state
  reset: () => void; // Function to reset the state 
}

export const useStore = create<SharedState>((set) => ({
  image: null,
  setImage: (image) => set({ image }), // Set the image in state
  isAdmin: false,
  setAdmin: (isAdmin) => set({ isAdmin }), // Set the isAdmin state
  reset: () => set({ image: null, isAdmin: false }), // Reset the state
}));

export const useStoreMember = create<SharedState>((set) => ({
  image: null,
  setImage: (image) => set({ image }), // Set the image in state
  isAdmin: false,
  setAdmin: (isAdmin) => set({ isAdmin }), // Set the isAdmin state
  reset: () => set({ image: null, isAdmin: false }), // Reset the state
}));