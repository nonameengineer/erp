import {Component, HostListener, Input, OnInit} from '@angular/core';
import {ItemModel} from '../../models/item.model';
import {MenuService} from '../../services/menu/menu.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  @Input() item: ItemModel;

  active = false;
  activeMenu = false;
  activeArrow = false;

  @HostListener('click', ['$event']) onClick(e): void {
    e.stopPropagation();
    this.active = !this.active;
  }

  constructor(private menuService: MenuService) { }

  ngOnInit(): void {
  }

  onExpand(e): void {
    e.stopPropagation();
    this.activeArrow = !this.activeArrow;
  }

  onDropdown(e): void {
    e.stopPropagation();
    this.activeMenu = !this.activeMenu;
  }
}
