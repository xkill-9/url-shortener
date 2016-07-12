import React, {Component} from 'react';
import Header from './components/header/header';
import LinkCreate from './components/link-create/link-create';
import LinkList from './components/link-list/link-list';

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <LinkCreate />
        <LinkList />
      </div>
    )
  }
}