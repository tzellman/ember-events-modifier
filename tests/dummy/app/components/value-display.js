import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

export default class ValueDisplayComponent extends Component {
    @tracked value;
}
