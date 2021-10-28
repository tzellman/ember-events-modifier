import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Modifier | on-event', function (hooks) {
    setupRenderingTest(hooks);

    test('simple event with no arguments', async function (assert) {
        assert.expect(1);
        this.set('value', false);
        await render(hbs`<div {{on-event "foo" (fn (mut this.value) true)}}></div>`);
        const service = this.owner.lookup('service:events');
        service.trigger('foo');
        assert.ok(this.value);
    });

    test('event with arguments', async function (assert) {
        assert.expect(2);
        this.set('handleEvent', (...args) => {
            assert.strictEqual(args.length, 3);
            assert.deepEqual(args, ['link', 'zelda', 'ganon']);
        });
        await render(hbs`<div {{on-event "foo" this.handleEvent}}></div>`);
        const service = this.owner.lookup('service:events');
        service.trigger('foo', 'link', 'zelda', 'ganon');
    });
});
