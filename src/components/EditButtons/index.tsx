import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Ellipsis, Pencil, Save, Trash } from 'lucide-react';
import { removeItem } from '@/api/methods';
import { GroceryItem } from '@/api/types';

const houseId = '30mbch3OK8K4370UV7iC';

const EditButtons = ({ item }: { item: GroceryItem }) => {
  const [status, setStatus] = useState<'default' | 'expand' | 'save'>(
    'default'
  );

  if (status === 'default')
    return (
      <Button
        className="ml-auto"
        onClick={(e) => {
          e.stopPropagation();
          setStatus('expand');
        }}
      >
        <Ellipsis />
      </Button>
    );

  if (status === 'expand')
    return (
      <div className="flex gap-1 ml-auto">
        <Button
          variant="outline"
          onClick={(e) => {
            e.stopPropagation();
            setStatus('save');
          }}
        >
          <Pencil />
        </Button>
        <Button
          variant="outline"
          onClick={(e) => {
            e.stopPropagation();
            removeItem(item.id, houseId);
          }}
        >
          <Trash />
        </Button>
      </div>
    );

  if (status === 'save')
    return (
      <Button
        className="ml-auto"
        onClick={(e) => {
          e.stopPropagation();
          setStatus('default');
        }}
      >
        <Save />
      </Button>
    );
};
export default EditButtons;
