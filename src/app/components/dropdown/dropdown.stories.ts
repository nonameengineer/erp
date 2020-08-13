import {moduleMetadata, storiesOf} from '@storybook/angular';
import {RouterTestingModule} from '@angular/router/testing';
import {DropdownModule} from './dropdown.module';
import {DropdownComponent} from './dropdown.component';

storiesOf('app/components/DropdownComponent', module).addDecorator(
    moduleMetadata({
      imports: [
        RouterTestingModule,
        DropdownModule,
      ],
    }),
).add('default', () => {
  return {
    component: DropdownComponent,
  };
});
