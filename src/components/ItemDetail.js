import React from 'react';
import { useParams } from 'react-router-dom';

const items = [
  { id: 1, name: 'Item 1', description: 'Description of Item 1' },
  { id: 2, name: 'Item 2', description: 'Description of Item 2' },
  { id: 3, name: 'Item 3', description: 'Description of Item 3' },
];

const Item1 = () => {
  const { itemId } = useParams();
  const item = items.find(i => i.id === parseInt(itemId));

  if (!item) {
    return <div>Item not found</div>;
  }

  return (
    <div>
      <h1>{item.name}</h1>
      <p>{item.description}</p>
    </div>
  );
};

export default Item1;
