import { create } from 'zustand';

export const UserLocation = create((set) => ({
  userLocation: {
    latitude: 0,
    longitude: 0
  },
  updateUserLocation: (updatedLocation) => set({ userLocation: updatedLocation }),
}));
