import { useState } from 'react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { addItem } from '@/api/methods';

const AddItemForm = () => {
  const houseId = '30mbch3OK8K4370UV7iC';
  const [text, setText] = useState('');

  const onClick = () => {
    addItem(
      {
        id: Date.now().toString(),
        name: text,
        pending: true,
      },
      houseId
    );
    setText('');
  };
  return (
    <div className="flex gap-2">
      <Input value={text} onChange={(e) => setText(e.target.value)} />
      <Button onClick={onClick}>Add Item</Button>
    </div>
  );
};

export default AddItemForm;
