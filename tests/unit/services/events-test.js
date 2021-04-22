import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Service | events', function (hooks) {
    setupTest(hooks);

    test('it exists', function (assert) {
        const service = this.owner.lookup('service:events');
        assert.ok(service);
    });

    test('service functionality', function (assert) {
        assert.expect(1);
        const service = this.owner.lookup('service:events');
        service.on('foo', null, (value) => {
            assert.ok(value === 'bar', 'got expected result');
        });
        service.trigger('foo', 'bar');
    });
});
