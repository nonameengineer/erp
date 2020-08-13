import {moduleMetadata, storiesOf} from '@storybook/angular';
import {RouterTestingModule} from '@angular/router/testing';
import {ListModule} from './list.module';
import {ListComponent} from './list.component';

storiesOf('app/modules/ListComponent', module).addDecorator(
    moduleMetadata({
      imports: [
        RouterTestingModule,
        ListModule,
      ],
    }),
).add('default', () => {
  return {
    component: ListComponent,
  };
});
