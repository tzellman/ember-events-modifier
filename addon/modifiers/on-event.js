import { assert } from '@ember/debug';
import { registerDestructor } from '@ember/destroyable';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
import Modifier from 'ember-modifier';

const modifierName = 'on-event';

const cleanup = (instance) => {
    const { eventName, events } = instance;
    if (eventName) {
        events.off(eventName, instance, instance._handler);
    }
};

export default class OnEventModifier extends Modifier {
    @service events;
    @tracked eventName;
    @tracked handler;

    modify(element, positionalArgs) {
        assert(`You must provide at least 2 arguments for {{${modifierName}}}`, positionalArgs.length > 1);
        const [eventName, handler] = positionalArgs;
        assert(
            `You must provide a string as the first positional argument for {{${modifierName}}}`,
            typeof eventName === 'string' && eventName.length > 0
        );
        this.eventName = eventName;
        this.handler = handler;
        this.events.on(this.eventName, this, this._handler);
        registerDestructor(this, cleanup);
    }

    _handler() {
        this.handler(...arguments);
    }
}
