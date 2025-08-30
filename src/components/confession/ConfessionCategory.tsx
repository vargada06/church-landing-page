import React, { ReactNode } from 'react';

type ConfessionCategoryProps = {
  title: string;
  children: ReactNode;
};

const ConfessionCategory: React.FC<ConfessionCategoryProps> = ({ title, children }) => {
  return (
    <div className="mb-8 last:mb-0">
      {title && (
        <div className="bg-reformalt-accent text-white py-4 px-6">
          <h3 className="text-2xl font-bold">{title}</h3>
        </div>
      )}
      <div>{children}</div>
    </div>
  );
};

export default ConfessionCategory;
