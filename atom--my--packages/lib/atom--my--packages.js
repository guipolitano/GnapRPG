'use babel';

import Atom-y-ackagesView from './atom--my--packages-view';
import { CompositeDisposable } from 'atom';

export default {

  atom-y-ackagesView: null,
  modalPanel: null,
  subscriptions: null,

  activate(state) {
    this.atom-y-ackagesView = new Atom-y-ackagesView(state.atom-y-ackagesViewState);
    this.modalPanel = atom.workspace.addModalPanel({
      item: this.atom-y-ackagesView.getElement(),
      visible: false
    });

    // Events subscribed to in atom's system can be easily cleaned up with a CompositeDisposable
    this.subscriptions = new CompositeDisposable();

    // Register command that toggles this view
    this.subscriptions.add(atom.commands.add('atom-workspace', {
      'atom--my--packages:toggle': () => this.toggle()
    }));
  },

  deactivate() {
    this.modalPanel.destroy();
    this.subscriptions.dispose();
    this.atom-y-ackagesView.destroy();
  },

  serialize() {
    return {
      atom-y-ackagesViewState: this.atom-y-ackagesView.serialize()
    };
  },

  toggle() {
    console.log('Atom-y-ackages was toggled!');
    return (
      this.modalPanel.isVisible() ?
      this.modalPanel.hide() :
      this.modalPanel.show()
    );
  }

};
