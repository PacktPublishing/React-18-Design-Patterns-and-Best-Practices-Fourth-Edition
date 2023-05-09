import React from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux';
import store from './store';
import Counter from './Counter';

createRoot(document.getElementById('root') as HTMLElement).render(
  <Provider store={store}>
    <Counter />
  </Provider>
)
