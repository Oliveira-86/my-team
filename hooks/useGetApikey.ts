import { create } from 'zustand'

interface ApikeyStore {
  isLoggedIn: boolean
  logout: () => void
  loggin: () => void
}

const useApikey = create<ApikeyStore>((set) => ({
  isLoggedIn: false,
  logout: () => set({ isLoggedIn: false }),
  loggin: () => set({ isLoggedIn: true }),
}))

export default useApikey
