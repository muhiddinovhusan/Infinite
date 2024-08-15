import React, { useState } from 'react';

const ReviewsCard = ({ name, comment }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const previewText = comment.slice(0, 450);

  return (
    <div className='w-[336px] h-auto pt-4 px-4 pb-4 flex-shrink-0 border'>
      <div className='w-full h-full'>
        <p className='mb-1 text-xs text-[#b3b3b3]'>01.08.2024</p>
        <h1 className='mb-6 font-medium'>{name}</h1>
        <p className='text-sm'>
          {isExpanded || comment.length <= 450
            ? comment
            : `${previewText}${comment.length > 150 ? '...' : ''}`}
        </p>
        <button
          className={`  ${comment.length <=450 ? 'hidden':'text-[#E1AF93] mt-2'}`}
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {isExpanded  ? '' : 'Читать полностью'}
        </button>
      </div>
    </div>
  );
};

export default ReviewsCard;