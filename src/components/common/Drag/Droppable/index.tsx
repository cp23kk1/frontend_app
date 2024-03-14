import React from 'react';
import { useDroppable } from '@dnd-kit/core';
import { TDropable } from './type';

export function Droppable({ id, children, className, style, data }: TDropable) {
  const { isOver, setNodeRef } = useDroppable({
    id: id === undefined ? '' : id,
    data: data
  });

  return (
    <span
      className={className}
      style={{ opacity: isOver ? 1 : 0.5, ...style }}
      ref={setNodeRef}
    >
      {children}
    </span>
  );
}
