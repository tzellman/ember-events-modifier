import Service from '@ember/service';
import EmberObject from '@ember/object';
import Evented from '@ember/object/evented';

/**
 * Partial wrapper for Ember's Evented Mixin, enabling
 * a pure class-based derivation
 */
export default class EventsService extends Service {
    eventManager = EmberObject.extend(Evented).create();

    /**
     * Subscribes to events of the given name
     * @param name the name of the event
     * @param target optional target for this
     * @param method the method to call
     * @return {EventsService}
     */
    on(name, target, method) {
        this.eventManager.on(name, target, method);
        return this;
    }

    off(name, target, method) {
        this.eventManager.off(name, target, method);
        return this;
    }

    /**
     * Checks if subscriptions exist for the given name
     * @param name
     * @return {Promise<boolean> | boolean}
     */
    has(name) {
        return this.eventManager.has(name);
    }

    trigger(name, ...args) {
        this.eventManager.trigger(name, ...args);
    }
}
