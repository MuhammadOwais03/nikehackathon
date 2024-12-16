import React from 'react';

interface CardProps {
  title: string;
  price: number;
  imageSrc: string;
}

const Card: React.FC<CardProps> = ({ title, price, imageSrc }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <img src={imageSrc} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="text-lg font-bold">{title}</h2>
        <p className="text-gray-700">{price}</p>
      </div>
    </div>
  );
};

export default Card;