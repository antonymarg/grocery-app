import { useEffect, useState } from 'react';
import { doc, onSnapshot } from 'firebase/firestore';
import { db } from './api';
import { toggleItem } from './api/methods';
import { type GroceryItem } from './api/types';
import GroceryItemElement from './components/GroceryItemElement';
import AddItemForm from './components/AddItemForm';

const sortItems = (a: GroceryItem, b: GroceryItem) => {
  if (a.pending && !b.pending) return -1;
  if (!a.pending && b.pending) return 1;
  return a.id > b.id ? 1 : -1;
};

function App() {
  const [groceryList, setGroceryList] = useState<GroceryItem[]>([]);
  const houseId = '30mbch3OK8K4370UV7iC';

  useEffect(() => {
    const unsub = onSnapshot(doc(db, 'houses', houseId), (doc) => {
      const items = doc.data()?.items;
      if (!items) return;
      const groceryItems = Object.values(items) as GroceryItem[];
      const sortedItems = groceryItems.sort(sortItems);
      setGroceryList(sortedItems);
    });
    return () => unsub();
  }, []);

  return (
    <div className="p-24">
      <div className="w-100 flex flex-col gap-4 max-w-md align-center">
        <span className="text-2xl text-slate-600">Grocery List</span>
        <AddItemForm />
        <div className="flex gap-1 flex-col w-100">
          {groceryList.map((item) => (
            <GroceryItemElement
              key={item.id}
              item={item}
              onItemClick={() => {
                toggleItem(item, houseId);
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
