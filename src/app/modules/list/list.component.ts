import {Component, OnInit} from '@angular/core';
import {MenuService} from '../../services/menu/menu.service';
import {Observable} from 'rxjs';
import {SectionModel} from '../../models/section.model';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  menu$: Observable<SectionModel[]>;
  menu: SectionModel[];

  constructor(
      private menuService: MenuService
  ) { }

  drop(event: CdkDragDrop<SectionModel[]>): void {
    moveItemInArray(this.menu, event.previousIndex, event.currentIndex);
    this.menuService.menu.next(this.menu);
    this.menuService.saveMenuInStorage();
  }

  ngOnInit(): void {
    const menuFromStorage = this.menuService.getMenuFromStorage();
    if (menuFromStorage && menuFromStorage.length > 0) {
      this.menu = menuFromStorage;
      this.menuService.menu.next(this.menu);
    } else {
      this.menu$ = this.menuService.getMenu();
      this.menu$.subscribe((menu: SectionModel[]) => {
        this.menu = menu;
        this.menuService.menu.next(this.menu);
        this.menuService.saveMenuInStorage();
      });
    }
  }
}
