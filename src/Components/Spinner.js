import React from 'react';

export const Spinner = () => {
  return (
    <div>
      <div className="p-5 spinner-border" role="status">
        <span class="sr-only"></span>
      </div>
      <h5 className='p-2'>Searching for results...</h5>
    </div>
    )
};
