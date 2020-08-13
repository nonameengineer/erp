import {Component, Input, OnInit} from '@angular/core';
import {MenuService} from '../../services/menu/menu.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
})
export class DropdownComponent {
  @Input() name;
  @Input() type = 'section';

  constructor(
    private menuService: MenuService,
    private router: Router
  ) { }

  onAddPosition(e): void {
    e.stopPropagation();
    this.router.navigateByUrl(`/add-position/${this.name}`);
  }

  onAddSection(e): void {
    e.stopPropagation();
    this.router.navigateByUrl(`/add-section/${this.name}`);
  }

  onEdit(e): void {
    e.stopPropagation();
    if (this.type === 'section') {
      this.router.navigateByUrl(`/edit-section/${this.name}`);
    } else {
      this.router.navigateByUrl(`/edit-section/${this.name}`);
    }
  }

  onRemove(e): void {
    e.stopPropagation();
    this.menuService.removeMenuItem(this.name);
  }
}
