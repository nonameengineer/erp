import { Component, OnInit } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {Location} from '@angular/common';
import {MenuService} from '../../services/menu/menu.service';
import {ActivatedRoute, Router} from '@angular/router';
import {SectionModel} from '../../models/section.model';

@Component({
  selector: 'app-edit-section',
  templateUrl: './edit-section.component.html',
  styleUrls: ['./edit-section.component.scss']
})
export class EditSectionComponent implements OnInit {
  name: string;

  form = this.fb.group({
    name: ['', Validators.required],
    items: [[]],
    sections: [[]],
    color: ['']
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
    const model = this.menuService.getMenuSection(this.name);
    console.log(model);
    if (model) {
      this.form.setValue(model);
    }
    this.form.valueChanges.subscribe(x => console.log(x));
  }

  onSave(): void {
    if (this.name) {
      this.menuService.addMenuSection(this.form.value as SectionModel, this.name);
    } else {
      this.menuService.addMenuSection(this.form.value as SectionModel);
    }
    this.router.navigate(['/']);
  }
}
