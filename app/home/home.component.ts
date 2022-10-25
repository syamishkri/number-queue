import { AnimateTimings } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/compat/database';
import { VirtualTimeScheduler } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  counterOne: any;
  counterTwo: any;
  counterThree: any;
  counterFour: any;

  numOne: any;
  numTwo: any;
  numThree: any;
  numFour: any;

  last_num: any;
  serving_num: any;
  next_num:any;
  totalNum: any;

  new_num: any;
  counter1svc: any;
  counterNum: any;

  nextNumArr: any = [];

  constructor(public homeService: AngularFireDatabase) { 
    this.homeService.object("/counter1").valueChanges().subscribe((value) => {this.counterOne = value});
    this.homeService.object("/counter2").valueChanges().subscribe((value) => {this.counterTwo = value});
    this.homeService.object("/counter3").valueChanges().subscribe((value) => {this.counterThree = value});
    this.homeService.object("/counter4").valueChanges().subscribe((value) => {this.counterFour = value});

    this.homeService.object("/last_num").valueChanges().subscribe((value) => {this.last_num = value});
    this.homeService.object("/next_num").valueChanges().subscribe((value) => {this.next_num = value});
    this.homeService.object("/serving_num").valueChanges().subscribe((value) => {this.serving_num = value});

    this.homeService.object("/totalNum").valueChanges().subscribe((value) => {this.totalNum = value});

    this.homeService.object("/counterNum").valueChanges().subscribe((value) => {this.counterNum = value});

    this.homeService.object("/numOne").valueChanges().subscribe((value) => {this.numOne = value});
    this.homeService.object("/numTwo").valueChanges().subscribe((value) => {this.numTwo = value});
    this.homeService.object("/numThree").valueChanges().subscribe((value) => {this.numThree = value});
    this.homeService.object("/numFour").valueChanges().subscribe((value) => {this.numFour = value});
  
    // console.log("counter "+this.counterNum)

  }

  generateNum(){
    this.totalNum++;
    console.log("total tickets issued: "+this.totalNum)

    this.last_num++;
    let last_numsvc = this.homeService.object("/");
    last_numsvc.update({"last_num":this.last_num})

    this.new_num = this.last_num

    this.nextNumArr[this.totalNum] = this.last_num

    console.log(this.nextNumArr)
    
    // this.homeService.database.ref("/last_num").update(this.new_num)
  }

  ngOnInit(): void {
    // this.counterTwo = Number(this.counterTwo)
    // console.log("Counter 2: "+this.counterTwo)
  }

}
