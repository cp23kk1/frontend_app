import React, { CSSProperties } from 'react';
import { useDraggable } from '@dnd-kit/core';
import { CSS } from '@dnd-kit/utilities';
import { TDraggable } from './type';

export function Draggable({ id, children, data }: TDraggable) {
  const { attributes, listeners, setNodeRef, transform, isDragging } =
    useDraggable({
      id: id,
      data: data
    });

  const style: CSSProperties = {
    // Outputs `translate3d(x, y, 0)`
    transform: CSS.Translate.toString(transform),
    transition: isDragging ? '' : 'transform .25s ease'
  };

  return (
    <div ref={setNodeRef} style={style} {...listeners} {...attributes}>
      {children}
    </div>
  );
}
