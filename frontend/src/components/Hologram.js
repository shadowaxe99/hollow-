```javascript
import React, { useEffect } from 'react';
import { initThreeJs, create3DModel } from '../utils/threejsHelpers';

const Hologram = () => {
  useEffect(() => {
    const container = document.getElementById('hologram-display');
    const threeJsScene = initThreeJs(container);
    create3DModel(threeJsScene);
  }, []);

  return (
    <div id="hologram-display" style={{ width: '100%', height: '100%' }}></div>
  );
};

export default Hologram;
```