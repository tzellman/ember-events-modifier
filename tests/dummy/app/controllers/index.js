import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class IndexController extends Controller {
    @service events;
    @tracked hasClicked = false;

    @action
    resetValue() {
        this.hasClicked = false;
        this.events.trigger('valueReset');
    }
}
