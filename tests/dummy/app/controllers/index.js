import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { TrackedArray } from 'tracked-built-ins';

export default class IndexController extends Controller {
    @service events;
    @tracked hasClicked = false;
    handledEvents = new TrackedArray([]);

    @action
    resetValue() {
        this.hasClicked = false;
        this.events.trigger('valueReset');
    }

    @action
    trackEvent(...args) {
        if (args.length) {
            this.handledEvents.push(`Set value to ${args[0]}`);
        } else {
            this.handledEvents.push(`Reset value`);
        }
    }
}
