import {Component, HostListener, Input} from '@angular/core';
import {SectionModel} from '../../models/section.model';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})
export class SectionComponent {
  @Input() section: SectionModel;

  active = false;
  activeMenu = false;
  activeArrow = false;

  @HostListener('click', ['$event']) onClick(e): void {
    e.stopPropagation();
    this.active = !this.active;
    this.activeMenu = false;
  }

  onExpand(e): void {
    e.stopPropagation();
    this.activeArrow = !this.activeArrow;
    this.activeMenu = false;
    this.active = false;
  }

  onDropdown(e): void {
    e.stopPropagation();
    this.activeMenu = !this.activeMenu;
    this.active = false;
  }

  setBorderLeft(): object {
    if (this.section.color) {
      return {'border-left': `3px solid ${this.section.color}`};
    } else {
      return {};
    }
  }
}
