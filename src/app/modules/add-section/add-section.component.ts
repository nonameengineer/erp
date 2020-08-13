import {Component, OnInit} from '@angular/core';
import {Location} from '@angular/common';
import {FormBuilder, Validators} from '@angular/forms';
import {MenuService} from '../../services/menu/menu.service';
import {SectionModel} from '../../models/section.model';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-add-section',
  templateUrl: './add-section.component.html',
  styleUrls: ['./add-section.component.scss'],
})
export class AddSectionComponent implements OnInit {
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
    this.name = this.route.snapshot.paramMap.get('name');
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
