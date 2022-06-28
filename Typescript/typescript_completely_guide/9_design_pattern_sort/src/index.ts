import { NumberCollection } from './NumberCollection';
import { CharactersCollecion } from './CharactersCollection';
import { LinkedList } from './LinkedList';

const numberCollection = new NumberCollection([8, -2, 3, 0]);
numberCollection.sort();
console.log(numberCollection.data);

const charactersCollecion = new CharactersCollecion('asdQSDasdvfrvt');
console.log(charactersCollecion.collection);
charactersCollecion.sort();
console.log(charactersCollecion.collection);

const link = new LinkedList();
link.add(-1);
link.add(2);
link.add(-3);
link.add(6);
link.add(-5);
link.print();
// link.swap(0, 1);
// console.log(link.at(2));
link.sort();
link.print();
