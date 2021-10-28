import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Service | events', function (hooks) {
    setupTest(hooks);

    test('it exists', function (assert) {
        const service = this.owner.lookup('service:events');
        assert.ok(service);
    });

    test('service functionality', function (assert) {
        assert.expect(3);
        const service = this.owner.lookup('service:events');
        service.on('foo', null, (value) => {
            assert.strictEqual(value, 'bar', 'got expected result');
        });
        assert.ok(service.has('foo'));
        assert.notOk(service.has('bar'));
        service.trigger('foo', 'bar');
    });
});
