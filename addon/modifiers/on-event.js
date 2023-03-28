import { assert } from '@ember/debug';
import { registerDestructor } from '@ember/destroyable';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
import Modifier from 'ember-modifier';

const modifierName = 'on-event';

const cleanup = (instance) => {
    const { eventNames, events } = instance;
    for (const eventName of eventNames ?? []) {
        events.off(eventName, instance, instance._handler);
    }
};

export default class OnEventModifier extends Modifier {
    @service events;
    @tracked eventNames;
    @tracked handler;

    modify(element, positionalArgs) {
        assert(`You must provide at least 2 arguments for {{${modifierName}}}`, positionalArgs.length > 1);
        const [eventNameOrNames, handler] = positionalArgs;
        const eventNames = Array.isArray(eventNameOrNames) ? eventNameOrNames : [eventNameOrNames];
        assert(
            `You must provide a string or array of strings as the first positional argument for {{${modifierName}}}`,
            eventNames.every((eventName) => typeof eventName === 'string' && eventName.length > 0)
        );
        this.eventNames = eventNames;
        this.handler = handler;
        for (const eventName of this.eventNames) {
            this.events.on(eventName, this, this._handler);
        }
        registerDestructor(this, cleanup);
    }

    _handler() {
        this.handler(...arguments);
    }
}
