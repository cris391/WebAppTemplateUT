/// <reference types="chrome"/>
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  editorExtensionId = 'odijigegicopmlagdknbdeelggiocicj';

  constructor() { }

  ngOnInit() {
  }

  public stopRecorder() {
    chrome.runtime.sendMessage(this.editorExtensionId, { isRecordingStopped: false }, function (response) {
      if (!response) {
        console.log('no response');
        return;
      }
      if (!!response.isRecordingStopped && response.isRecordingStopped === true) {
        console.log('recording has stopped');
      } else {
        console.log('recording has not stopped');
      }
    });
  }

}
