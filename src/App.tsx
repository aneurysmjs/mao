import * as React from 'react';

import './assets/scss/styles.scss';

declare namespace JSX {
  interface IntrinsicElements {
    foo: { requiredProp: string; optionalProp?: number }
  }
}

function App() {
  return (
    <section>
      <div className="mt-3">
        Trofologic
      </div>
    </section>
  );
}

export default App;
