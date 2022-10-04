import Modifier from 'ember-modifier';
import { inject as service } from '@ember/service';
import { assert } from '@ember/debug';
import { next } from '@ember/runloop';

const modifierName = 'trigger-event';

export default class TriggerEventModifier extends Modifier {
    @service events;

    modify(element, positionalArgs) {
        assert(`You must provide at least 1 argument for {{${modifierName}}}`, positionalArgs.length > 0);
        const [eventName] = positionalArgs;
        assert(
            `You must provide a string as the first positional argument for {{${modifierName}}}`,
            typeof eventName === 'string' && eventName.length > 0
        );
        next(this, () => {
            this.events.trigger(eventName, ...positionalArgs.slice(1));
        });
    }
}
