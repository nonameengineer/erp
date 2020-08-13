import {moduleMetadata, storiesOf} from '@storybook/angular';
import {RouterTestingModule} from '@angular/router/testing';
import {AddPositionModule} from './add-position.module';
import {AddPositionComponent} from './add-position.component';

storiesOf('app/modules/AddPositionComponent', module).addDecorator(
    moduleMetadata({
      imports: [
        RouterTestingModule,
        AddPositionModule,
      ],
    }),
).add('default', () => {
  return {
    component: AddPositionComponent,
  };
});
