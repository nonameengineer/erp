import {ItemModel} from './item.model';

export class SectionModel {
  items: ItemModel[] = [];
  name: string;
  sections: SectionModel[];
  color?: string;
}
