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

  transform(KEYBOARDLIST: Content[], type?: string): Content[]{
    
    if (this.keyboards.filter(type)){
      return this.keyboards;
    }else{
      return this.keyboards;
    }
  }

  /*
transform(KEYBOARDLIST: Content[], type?: string): Content[] {
    return this.keyboards.filter((keyboard: { title: any; type: string; }) => {
      console.log("Keyboard: ", keyboard.title, " is a ", keyboard.type, "keyboard.");
      return type ? keyboard.type === type : (!keyboard.type || keyboard.type === '');
    });
  }
*/

}
