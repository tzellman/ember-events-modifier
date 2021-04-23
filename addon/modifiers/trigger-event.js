import Modifier from 'ember-modifier';
import { inject as service } from '@ember/service';
import { assert } from '@ember/debug';
import { next } from '@ember/runloop';

const modifierName = 'trigger-event';

export default class TriggerEventModifier extends Modifier {
    @service events;

    didReceiveArguments() {
        assert(`You must provide at least 1 arguments for {{${modifierName}}}`, this.args.positional.length > 0);
        const eventName = this.args.positional[0];
        assert(
            `You must provide a string as the first positional argument for {{${modifierName}}}`,
            typeof eventName === 'string' && eventName.length > 0
        );
        next(this, () => {
            this.events.trigger(eventName, ...this.args.positional.slice(1));
        });
    }
}
