import App from './app/client/app';
import ReactDOM from 'react-dom';
import { Links } from './imports/collections/links';

Meteor.startup( () => {
  ReactDOM.render(<App />, document.getElementById('container'));
});