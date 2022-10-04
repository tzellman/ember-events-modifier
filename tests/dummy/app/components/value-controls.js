import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

export default class ValueDisplayComponent extends Component {
    @service events;
    @tracked clicked = 0;

    @action
    onClick() {
        this.clicked++;
        this.events.trigger('valueSet', this.clicked);
    }

    @action
    resetValue() {
        this.clicked = 0;
        this.events.trigger('valueSet', this.clicked);
    }
}
