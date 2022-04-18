import { Component } from '@angular/core';
import { Content } from './helper-files/content-interface';
import { LogUpdateService } from './log-update.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Q_Whiston_Keyboards';

  constructor(private logUpdateService: LogUpdateService, private logService: LogUpdateService) {

  }

  ngOnInit(): void {
    this.logService.init();
  }
}
