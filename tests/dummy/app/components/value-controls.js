import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';

export default class ValueDisplayComponent extends Component {
    @service events;
    @tracked clicked = 0;

    @action
    onClick() {
        this.clicked++;
        this.events.trigger('valueSet', this.clicked);
    }
}
