```javascript
import React, { useEffect, useState } from 'react';

const VisualAids = ({ presentationData }) => {
  const [visualAids, setVisualAids] = useState([]);

  useEffect(() => {
    if (presentationData && presentationData.visualAids) {
      setVisualAids(presentationData.visualAids);
    }
  }, [presentationData]);

  const displayVisualAids = () => {
    return visualAids.map((aid, index) => (
      <div key={index} className="visual-aid">
        <img src={aid.url} alt={aid.description} />
        <p>{aid.description}</p>
      </div>
    ));
  };

  return (
    <div id="visual-aids-container">
      {displayVisualAids()}
    </div>
  );
};

export default VisualAids;
```