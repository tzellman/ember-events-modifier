import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Modifier | trigger-event', function (hooks) {
    setupRenderingTest(hooks);

    test('simple event with no arguments', async function (assert) {
        assert.expect(1);
        const service = this.owner.lookup('service:events');
        service.on('foo', null, (value) => {
            assert.strictEqual(value, 'bar', 'got expected result');
        });
        await render(hbs`<div {{trigger-event "foo" "bar"}}></div>`);
        await render(hbs`<div {{trigger-event "bar" "baz"}}></div>`);
    });

    test('renders with arguments', async function (assert) {
        assert.expect(3);
        const service = this.owner.lookup('service:events');
        service.on('foo', null, (value) => {
            assert.strictEqual(value, 'bar', 'got expected result');
        });
        service.on('bar', null, (...args) => {
            assert.strictEqual(args.length, 3);
            assert.deepEqual(args, ['link', 'zelda', 'ganon']);
        });
        await render(hbs`<div {{trigger-event "foo" "bar"}}></div>`);
        await render(hbs`<div {{trigger-event "bar" "link" "zelda" "ganon"}}></div>`);
    });
});
