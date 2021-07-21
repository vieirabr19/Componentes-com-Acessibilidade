import { Component, Input, OnInit, Output, EventEmitter, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

import { UniqueIdService } from './../../service/unique-id.service';

@Component({
  selector: 'app-yes-no-button-group',
  templateUrl: './yes-no-button-group.component.html',
  styleUrls: ['./yes-no-button-group.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => YesNoButtonGroupComponent)
    }
  ]
})
export class YesNoButtonGroupComponent implements OnInit, ControlValueAccessor {
  @Input() value: string = null;
  @Input() label: string = '';
  @Output() valueChange = new EventEmitter<string>();
  id: string = null; 
  options = YesNoButtonGroupOptions;
  onChange = (value: string) => {};
  onTouched = () => {};

  constructor(private uniqueIdService: UniqueIdService) {
    this.id = uniqueIdService.generateUniqueIdWithPrefix('yes-no-button-group');
  }

  ngOnInit(): void {
  }

  writeValue(value: string): void {
    this.value = value;
    this.onChange(this.value);
    this.valueChange.emit(value);
  }

  registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }
  
  setDisabledState?(isDisabled: boolean): void {
    throw new Error('Method not implemented.');
  }

  activate(value: string){
    this.writeValue(value);
  }
}

enum YesNoButtonGroupOptions {
  YES = 'yes',
  NO = 'no'
}
