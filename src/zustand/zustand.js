import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

export const useStore = create(
    persist(
        (set) => ({
            searchTerm: '',
            setSearchTerm: (e) => set(() => ({ searchTerm: e })),

            searchTermClose: false,
            setSearchTermClose: () => set((state) => ({ searchTermClose: !state.searchTermClose })),

            productMelayangHeader: false,
            setProductMelayangHeader: (e) => set(() => ({ productMelayangHeader: e })),

            isIntersecting: false,
            setIsIntersecting: (e) => set(() => ({ isIntersecting: e })),

            openFormData: false,
            setOpenFormData: () => set((state) => ({ openFormData: !state.openFormData })),
        }),
        {
            name: 'food-storage', // name of the item in the storage (must be unique)
            storage: createJSONStorage(() => localStorage), // (optional) by default, 'localStorage' is used
        },)
);
