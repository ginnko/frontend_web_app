import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';

const render = (Component: any) => {
  ReactDOM.render(<Component />, document.getElementById('root'));
}

render(App);

if((module as any).hot) {
  (module as any).hot.accept('./app.tsx', () => {
    import('./app').then(module => {
      render(module.default)
    });
  })
}
