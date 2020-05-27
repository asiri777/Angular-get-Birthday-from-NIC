import { Component, VERSION, OnInit } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  nic: string;
  birthday: string;

  getBirthday() {
    let birthYear: number;
    let noOfDays: number;
    let tempBirthDay: Date;
    let gender: string;
    let nicNo = this.nic;

    nicNo = nicNo.length === 10 ? "19" + nicNo : nicNo;

    birthYear = +nicNo.substring(0, 4);
    noOfDays = +nicNo.substring(4, 7);

    noOfDays = noOfDays > 500 ? noOfDays - 500 : noOfDays;
    gender = noOfDays > 500 ? "F" : "M";

    if (!this.checkLeapYear(birthYear) && noOfDays > 60) {
      noOfDays -= 1;
    }

    tempBirthDay = new Date(`${birthYear}-01-01`);
    tempBirthDay.setDate(noOfDays);

    this.birthday = tempBirthDay.toDateString();
  }

  checkLeapYear(year) {
    return year % 100 === 0 ? year % 400 === 0 : year % 4 === 0;
  }
}
