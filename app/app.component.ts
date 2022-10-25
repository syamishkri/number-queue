import { OnInit, Component } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/compat/database';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-ticket-number-system';

  constructor(public counterService: AngularFireDatabase) { 
  
  }

  ngOnInit(): void {
    // let counter1 = this.counterService.object("/counter1").valueChanges().subscribe((value) => {console.log(value)});
    // let counter2 = this.counterService.object("/counter2").valueChanges().subscribe((value) => {console.log(value)});
    // let counter3 = this.counterService.object("/counter3").valueChanges().subscribe((value) => {console.log(value)});
    // let counter4 = this.counterService.object("/counter4").valueChanges().subscribe((value) => {console.log(value)});

  //   console.log("C1: "+counter1);
  //   console.log("C2: "+counter2);
  //   console.log("C3: "+counter3);
  //   console.log("C4: "+counter4);
  }
}
