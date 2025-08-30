import React, { forwardRef } from 'react';

const FRInput = forwardRef((props, ref) => {
  return <input type="text" ref={ref} />;
});

export default FRInput;
