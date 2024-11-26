import { db } from '.';
import { GroceryItem } from './types';
import { updateDoc, doc, deleteField } from 'firebase/firestore';

const addItem = async (item: GroceryItem, houseId: string) => {
  try {
    const key = `items.${item.id}`;
    await updateDoc(doc(db, 'houses', houseId), {
      [key]: item,
    });
  } catch (e) {
    console.error('Error adding document: ', e);
  }
};

const removeItem = async (itemId: string, houseId: string) => {
  try {
    const key = `items.${itemId}`;
    await updateDoc(doc(db, 'houses', houseId), {
      [key]: deleteField(),
    });
  } catch (e) {
    console.error('Error removing document: ', e);
  }
};

const toggleItem = async (item: GroceryItem, houseId: string) => {
  try {
    const key = `items.${item.id}`;
    await updateDoc(doc(db, 'houses', houseId), {
      [key]: {
        ...item,
        pending: !item.pending,
      },
    });
  } catch (e) {
    console.error('Error toggling item: ', e);
  }
};

export { addItem, removeItem, toggleItem };
