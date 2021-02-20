import {Select} from './select/select';
import './select/styles.scss';
const select = new Select('#select', {
    placeholder: 'Choose element please',
    selectedId: 2,
    data: [
        {id: 1, value: 'Cat'},
        {id: 2, value: 'Dog'},
        {id: 3, value: 'Mouse'},
        {id: 4, value: 'Elephant'},
        {id: 5, value: 'Maryna'}
    ],
    onSelect(item) {
        console.log('Selected item', item);
    }
});

window.s = select;