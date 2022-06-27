import { Sorter } from './Sorter';
import { NumberCollection } from './NumberCollection';
import { CharactersCollecion } from './CharactersCollection';
import { LinkedList } from './LinkedListCollection';

const numberCollection = new NumberCollection([8, -2, 3, 0]);
const sorter = new Sorter(numberCollection);
sorter.sort();
console.log(numberCollection.data);

const charactersCollecion = new CharactersCollecion('asdQSDasdvfrvt');
const charactersSorter = new Sorter(charactersCollecion);
console.log(charactersCollecion.collection);
charactersSorter.sort();
console.log(charactersCollecion.collection);
