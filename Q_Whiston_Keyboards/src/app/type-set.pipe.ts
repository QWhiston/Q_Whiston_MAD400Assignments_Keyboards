import { Input, Pipe, PipeTransform } from '@angular/core';
import { ContentCardComponent } from './content-card/content-card.component';
import { ContentListComponent } from './content-list/content-list.component';

@Pipe({
  name: 'typeSet'
})
export class TypeSetPipe implements PipeTransform {

  @Input() 
  keyboards: any;

  transform(type: string | null){
    
    if (this.keyboards.filter(type)){
      return this.keyboards;
    }else{
      return this.keyboards;
    }

  }

}
