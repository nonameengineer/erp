import {Component, forwardRef, OnInit} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';

@Component({
  selector: 'app-color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ColorPickerComponent),
      multi: true,
    },
  ],
})
export class ColorPickerComponent implements ControlValueAccessor {
  colors: string[] = [
    '#FFAF8E',
    '#3AD7FF',
    '#FFB515',
    '#5EFAD2',
    '#CDDDCA',

    '#FD6C36',
    '#0092FF',
    '#FBED9A',
    '#32B69B',
    '#345B7E',

    '#ED368C',
    '#5151C2',
    '#FD98BC',
    '#B7EEE3',
    '#E9BEF8',

    '#9C0D64',
    '#002894',
    '#FC4242',
    '#C5D16C',
    '#73349F'
  ];

  value;
  private onModelChange;
  private onTouch;

  focused: string;

  registerOnChange(fn): void {
    this.onModelChange = fn;
  }

  registerOnTouched(fn): void {
    this.onTouch = fn;
  }

  writeValue(value: string): void {
    this.value = value;
  }

  onChange(value: string): void {
    this.value = value;
    this.onModelChange(value);
  }

  onBlur(value: string): void {
    this.focused = '';
  }

  onFocus(value: string): void {
    this.focused = value;
    this.onTouch();
  }
}
