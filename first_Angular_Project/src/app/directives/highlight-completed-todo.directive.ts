import { Directive, ElementRef, Input, Renderer2, effect } from '@angular/core';
import { signal, WritableSignal } from '@angular/core';

@Directive({
  selector: '[appHighlightCompletedTodo]',
  standalone: true
})
export class HighlightCompletedTodoDirective {
  // We’ll use a signal to reactively watch the value
  private _isCompleted = signal(false);

  @Input({ required: true })
  set appHighlightCompletedTodo(value: boolean) {
    this._isCompleted.set(value);
  }

  constructor(private el: ElementRef, private renderer: Renderer2) {
    // Watch for changes using an effect
    effect(() => {
      const completed = this._isCompleted();
     if (completed) {
      this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', '#e8f5e9');
      this.renderer.setStyle(this.el.nativeElement, 'borderLeft', '5px solid #2e7d32');
      this.renderer.setStyle(this.el.nativeElement, 'color', '#2e7d32');
      this.renderer.setStyle(this.el.nativeElement, 'textDecoration', 'line-through');
    } else {
      this.renderer.removeStyle(this.el.nativeElement, 'backgroundColor');
      this.renderer.removeStyle(this.el.nativeElement, 'borderLeft');
      this.renderer.removeStyle(this.el.nativeElement, 'color');
      this.renderer.removeStyle(this.el.nativeElement, 'textDecoration');
    }
    });
  }
}
