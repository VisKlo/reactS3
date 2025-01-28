import { create } from "zustand";

export interface ICartItem {
    id: number;
    name: string;
    price: number;
}

interface ICartStore {
    items: ICartItem[];
    addItem: (item: ICartItem) => void;
    removeItem: (id: number) => void;
    clearCart: () => void;
}

export const useCartStore = create<ICartStore>((set) => ({
    items: [],

    addItem: (item: ICartItem) => set((state) => {
        const existingItem = state.items.find((ICartItem) => ICartItem.id === item.id);
        if (!existingItem) {
            return { items: [...state.items, item] };
        }
        return state;
    }),

    removeItem: (id: number) => set((state) => ({
        items: state.items.filter((items) => items.id !== id),
    })),

    clearCart: () => set({ items: [] }),
}));