import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-device',
  templateUrl: './device.component.html',
  styleUrls: ['./device.component.less']
})
export class DeviceComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  refreshStatus(data) {
    console.log(data);
  }
}
