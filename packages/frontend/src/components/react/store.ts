import { atom } from 'nanostores';

export const $isEditMode = atom<boolean>(false);

export function setEditMode(value: boolean) {
  $isEditMode.set(value);
}
