import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList, AngularFireObject } from '@angular/fire/compat/database';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {

  counterOne: any;
  counterTwo: any;
  counterThree: any;
  counterFour: any;

  numOne: any;
  numTwo: any;
  numThree: any;
  numFour: any;

  statusOne: any;
  statusTwo: any;
  statusThree: any;
  statusFour: any;

  last_num: any;
  next_num: any;
  serving_num: any;
  totalNum: any;
  counterNum: any

  // counterArr: any = [];
  // nextNumArr: any = [];

  constructor(public counterService: AngularFireDatabase) { 
    this.counterService.object("/counter1").valueChanges().subscribe((value) => {this.counterOne = value});
    this.counterService.object("/counter2").valueChanges().subscribe((value) => {this.counterTwo = value});
    this.counterService.object("/counter3").valueChanges().subscribe((value) => {this.counterThree = value});
    this.counterService.object("/counter4").valueChanges().subscribe((value) => {this.counterFour = value});
    
    this.counterService.object("/last_num").valueChanges().subscribe((value) => {this.last_num = value});
    this.counterService.object("/next_num").valueChanges().subscribe((value) => {this.next_num = value});
    this.counterService.object("/serving_num").valueChanges().subscribe((value) => {this.serving_num = value});

    this.counterService.object("/numOne").valueChanges().subscribe((value) => {this.numOne = value});
    this.counterService.object("/numTwo").valueChanges().subscribe((value) => {this.numTwo = value});
    this.counterService.object("/numThree").valueChanges().subscribe((value) => {this.numThree = value});
    this.counterService.object("/numFour").valueChanges().subscribe((value) => {this.numFour = value});
    // this.counterService.object("/counterNum").valueChanges().subscribe((value) => {this.counterNum = value});
  
    // console.log("counter "+this.counterNum)

  }

  counterStatus(value: any, counter: any){
    // 1 - offline, 2 - complete, 3 - next, 4 - online

    console.log("status "+value+", counter "+counter)
    if(counter==1){
      let updateStatus = this.counterService.object("/");
      updateStatus.update({"counter1":value})
    }

    else if(counter==2){
      let updateStatus = this.counterService.object("/");
      updateStatus.update({"counter2":value})
    }

    else if(counter==3){
      let updateStatus = this.counterService.object("/");
      updateStatus.update({"counter3":value})
    }

    else if(counter==4){
      let updateStatus = this.counterService.object("/");
      updateStatus.update({"counter4":value})
    }

  }

  callNext (value: any, status: any, counter: any){
    value++
    console.log("serving "+value)

    if(value>this.last_num){
      // console.log("exceeded number")
      alert("the last number was "+this.last_num)
    }

    if(counter==1 && value<=this.last_num){
      let updateStatus = this.counterService.object("/");
      updateStatus.update({"counter1":status})

      let updateCounterNum = this.counterService.object("/");
      updateCounterNum.update({"numOne":value})

      let updateServingNum = this.counterService.object("/");
      updateServingNum.update({"serving_num":value})
    }

    else if(counter==2 && value<=this.last_num){
      let updateStatus = this.counterService.object("/");
      updateStatus.update({"counter2":status})

      let updateCounterNum = this.counterService.object("/");
      updateCounterNum.update({"numTwo":value})

      let updateServingNum = this.counterService.object("/");
      updateServingNum.update({"serving_num":value})
    }

    else if(counter==3 && value<=this.last_num){
      let updateStatus = this.counterService.object("/");
      updateStatus.update({"counter3":status})

      let updateCounterNum = this.counterService.object("/");
      updateCounterNum.update({"numThree":value})

      let updateServingNum = this.counterService.object("/");
      updateServingNum.update({"serving_num":value})
    }

    else if(counter==4 && value<=this.last_num){
      let updateStatus = this.counterService.object("/");
      updateStatus.update({"counter4":status})

      let updateCounterNum = this.counterService.object("/");
      updateCounterNum.update({"numFour":value})

      let updateServingNum = this.counterService.object("/");
      updateServingNum.update({"serving_num":value})
    }

    // let updateNextNum = this.counterService.object("/");
    // updateNextNum.update({"next_num":value})

    // this.nextNumArr[this.totalNum] = this.next_num
    // console.log(this.nextNumArr)
  }

  ngOnInit(): void {
    // console.log("Counter Num: "+this.counterNum)
  }

}
