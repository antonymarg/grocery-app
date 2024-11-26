import { type GroceryItem } from '@/api/types';
import EditButtons from '../EditButtons';

interface GroceryItemElementProps {
  item: GroceryItem;
  onItemClick: (itemId: GroceryItem['id']) => void;
}
const GroceryItemElement = ({ item, onItemClick }: GroceryItemElementProps) => {
  return (
    <div
      className={`
        ${
          item.pending
            ? 'bg-slate-900 hover:bg-slate-800 active:bg-slate-950'
            : 'bg-slate-600 hover:bg-slate-500 active:bg-slate-700'
        } 
        rounded-sm 
        p-4 
        flex 
        items-center 
        hover:cursor-pointer
    `}
      onClick={() => {
        onItemClick(item.id);
      }}
    >
      <span
        className={`text-base ${
          item.pending ? 'text-slate-50' : 'line-through text-gray-400'
        }`}
      >
        {item.name}
      </span>
      <EditButtons item={item} />
    </div>
  );
};

export default GroceryItemElement;
