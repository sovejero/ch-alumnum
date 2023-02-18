import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { Router, NavigationStart, Event as NavigationEvent } from '@angular/router';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit, OnDestroy {
 @Output() toggled = new EventEmitter<boolean>();
 
  private event$;
  public title = new Subject<string>;
  
  constructor(private router: Router) {
    this.event$=this.router.events.subscribe(
          (event: NavigationEvent) => {
            if(event instanceof NavigationStart) {
              this.title.next(event.url.replace('/',''));
            }
          });
  }
  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.event$.unsubscribe();
  }

}
