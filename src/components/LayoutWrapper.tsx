"use client";

import { createContext, useContext, useState, ReactNode } from "react";

// Define context type
type ModalContextType = {
  showModal: boolean;
  setShowModal: (value: boolean) => void;
};

// Create context
const ModalContext = createContext<ModalContextType | undefined>(undefined);

// Wrapper component that provides context
export function LayoutWrapper({ children }: { children: ReactNode }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <ModalContext.Provider value={{ showModal, setShowModal }}>
      {children}
    </ModalContext.Provider>
  );
}

// Custom hook
export function useModal() {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useModal must be used within a LayoutWrapper");
  }
  return context;
}
