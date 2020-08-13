import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {Location} from '@angular/common';
import {MenuService} from '../../services/menu/menu.service';
import {ActivatedRoute, Router} from '@angular/router';
import {ItemModel} from '../../models/item.model';

@Component({
  selector: 'app-edit-position',
  templateUrl: './edit-position.component.html',
  styleUrls: ['./edit-position.component.scss']
})
export class EditPositionComponent implements OnInit {
  name: string;

  form = this.fb.group({
    name: ['', Validators.required],
    sale: ['', Validators.required]
  });

  constructor(
    private location: Location,
    private fb: FormBuilder,
    private menuService: MenuService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  onCancel(): void {
    this.location.back();
  }

  ngOnInit(): void {
    // TODO: Get Item and Save after Edit
    this.name = this.route.snapshot.paramMap.get('name');
  }

  onSave(): void {
    if (this.name) {
      this.menuService.addMenuItem(this.form.value as ItemModel, this.name);
    } else {
      this.menuService.addMenuItem(this.form.value as ItemModel);
    }
    this.router.navigate(['/']);
  }
}
