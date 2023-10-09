import { useState } from 'react';

export function useModal(initialState: boolean) {
  const [isModalOpen, setIsModalOpen] = useState(initialState);

  function closeModal() {
    setIsModalOpen(false);
  }

  function openModal() {
    setIsModalOpen(true);
  }

  function toggleModal() {
    setIsModalOpen(previous => !previous);
  }

  return { isModalOpen, closeModal, openModal, toggleModal };
}
