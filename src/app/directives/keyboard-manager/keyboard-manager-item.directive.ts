import { Directive, ElementRef, EventEmitter, Output } from "@angular/core";

@Directive({
  selector: '[appKmItem]'
})
export class KeyboardManagerItemDirective{
  @Output() focused = new EventEmitter<void>();

  constructor(private elementRef: ElementRef<HTMLElement>){}

  focus(){
    this.elementRef.nativeElement.focus();
    this.focused.emit();
  }

  isFocused(): boolean{
    return this.elementRef.nativeElement === document.activeElement;
  }

}