import Modifier from 'ember-modifier';
import { inject as service } from '@ember/service';
import { assert } from '@ember/debug';
import { tracked } from '@glimmer/tracking';

const modifierName = 'on-event';

export default class OnEventModifier extends Modifier {
    @service events;
    @tracked eventName;

    get handler() {
        return this.args.positional[1];
    }

    didReceiveArguments() {
        assert(`You must provide at least 2 arguments for {{${modifierName}}}`, this.args.positional.length > 1);
        let eventName = this.args.positional[0];
        assert(
            `You must provide a string as the first positional argument for {{${modifierName}}}`,
            typeof eventName === 'string' && eventName.length > 0
        );
        this.eventName = eventName;
        this.events.on(this.eventName, this, this._handler);
    }

    willRemove() {
        if (this.eventName) {
            this.events.off(this.eventName, this, this._handler);
        }
    }

    _handler() {
        this.handler(...arguments);
    }
}
