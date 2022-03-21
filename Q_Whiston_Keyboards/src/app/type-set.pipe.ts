import { Input, Pipe, PipeTransform } from '@angular/core';
import { ContentCardComponent } from './content-card/content-card.component';
import { ContentListComponent } from './content-list/content-list.component';
import { Content } from './helper-files/content-interface';

@Pipe({
  name: 'typeSet'
})
export class TypeSetPipe implements PipeTransform {

  @Input() 
  keyboards: any;

  transform(keyboards: Content[], type?: string): Content[] {
    return keyboards.filter(keyboard => {
      console.log("Keyboard name: ", keyboard.title, " type is set to ", keyboard.type);
      return type ? keyboard.type === type : (!keyboard.type || keyboard.type === '');
    });
  }

}
