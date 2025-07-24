import { create } from 'zustand';

const useStore = create((set) => ({
  apiData: null,
  loading: false,
  error: null,
  fetchData: async () => {
    set({ loading: true, error: null });
    try {
      const response = await fetch('/api/data');
      const data = await response.json();
      set({ apiData: data });
    } catch (err) {
      set({ error: err.message });
    } finally {
      set({ loading: false });
    }
  }
}));

export default useStore;