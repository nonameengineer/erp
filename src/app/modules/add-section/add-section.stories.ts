import {moduleMetadata, storiesOf} from '@storybook/angular';
import {RouterTestingModule} from '@angular/router/testing';
import {AddSectionModule} from './add-section.module';
import {AddSectionComponent} from './add-section.component';

storiesOf('app/modules/AddSectionComponent', module).addDecorator(
    moduleMetadata({
      imports: [
        RouterTestingModule,
        AddSectionModule,
      ],
    }),
).add('default', () => {
  return {
    component: AddSectionComponent,
  };
});
