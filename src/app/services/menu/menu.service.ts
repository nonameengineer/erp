import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {SectionModel} from '../../models/section.model';
import {ItemModel} from '../../models/item.model';

export const MENU_KEY_LOCAL_STORAGE = 'menu';

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  menu = new BehaviorSubject<SectionModel[]>([]);

  constructor(private http: HttpClient) { }

  getMenu(): Observable<SectionModel[]> {
    return this.http.get<SectionModel[]>('./assets/menu.json');
  }

  saveMenuInStorage(): void {
    localStorage.setItem(MENU_KEY_LOCAL_STORAGE,
      JSON.stringify(this.menu.getValue()));
  }

  getMenuFromStorage(): SectionModel[] {
    return JSON.parse(localStorage.getItem(MENU_KEY_LOCAL_STORAGE));
  }

  // CREATE

  addMenuSection(model: SectionModel, name = ''): void {
    const menu = this.menu.getValue();
    if (name) {
      for (let i = 0; i < menu.length; i++) {
        this.findNestedSectionAdd(menu[i], menu, name, i, model);
      }
    } else {
      menu.push(model);
    }
    this.saveMenuInStorage();
  }

  findNestedSectionAdd(obj, parent, value, i, model: SectionModel): void {
    if (obj.name === value) {
      const index = parent.indexOf(obj);
      if (index > -1) {
        parent[index].sections.push(model);
      }
    }
    if (obj && obj.sections && obj.sections.length > 0) {
      for (let j = 0; j < obj.sections.length; j++) {
        this.findNestedSectionAdd(obj.sections[j], obj.sections, value, j, model);
      }
    }
    if (obj && obj.items && obj.items.length > 0) {
      for (let j = 0; j < obj.items.length; j++) {
        this.findNestedSectionAdd(obj.items[j], obj.items, value, j, model);
      }
    }
  }

  addMenuItem(model: ItemModel, name = ''): void {
    const menu = this.menu.getValue();
    if (name) {
      for (let i = 0; i < menu.length; i++) {
        this.findNestedItemAdd(menu[i], menu, name, i, model);
      }
    }
    this.saveMenuInStorage();
  }

  findNestedItemAdd(obj, parent, value, i, model): void {
    if (obj.name === value) {
      const index = parent.indexOf(obj);
      parent[index].items.push(model);
    }
    if (obj && obj.sections && obj.sections.length > 0) {
      for (let j = 0; j < obj.sections.length; j++) {
        this.findNestedItemAdd(obj.sections[j], obj.sections, value, j, model);
      }
    }
    if (obj && obj.items && obj.items.length > 0) {
      for (let j = 0; j < obj.items.length; j++) {
        this.findNestedItemAdd(obj.items[j], obj.items, value, j, model);
      }
    }
  }

  // UPDATE

  getMenuSection(name: string): SectionModel {
    const menu = this.menu.getValue();
    let result = null;
    if (name) {
      for (let i = 0; i < menu.length; i++) {
        result = this.findNestedSection(menu[i], menu, name, i);
        console.log(result);
      }
    }
    return result;
  }

  findNestedSection(obj, parent, value, i): SectionModel {
    if (obj.name === value) {
      const index = parent.indexOf(obj);
      console.log(index);
      console.log(obj);
      if (index > -1) {
        return obj;
      } else {
        return null;
      }
    }
    if (obj && obj.sections && obj.sections.length > 0) {
      for (let j = 0; j < obj.sections.length; j++) {
        this.findNestedSection(obj.sections[j], obj.sections, value, j);
      }
    }
    if (obj && obj.items && obj.items.length > 0) {
      for (let j = 0; j < obj.items.length; j++) {
        this.findNestedSection(obj.items[j], obj.items, value, j);
      }
    }
  }

  // DELETE

  removeMenuItem(name, inItems = false): void {
    const menu = this.menu.getValue();
    for (let i = 0; i < menu.length; i++) {
      this.findNestedRemove(menu[i], menu, name, i);
    }
    this.saveMenuInStorage();
  }

  findNestedRemove(obj, parent, value, i): void {
    if (obj.name === value) {
      parent.splice(i, 1);
    }
    if (obj && obj.sections && obj.sections.length > 0) {
      for (let j = 0; j < obj.sections.length; j++) {
        this.findNestedRemove(obj.sections[j], obj.sections, value, j);
      }
    }
    if (obj && obj.items && obj.items.length > 0) {
      for (let j = 0; j < obj.items.length; j++) {
        this.findNestedRemove(obj.items[j], obj.items, value, j);
      }
    }
  }
}
