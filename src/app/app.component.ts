/// <reference types="chrome"/>
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // The ID of the extension we want to talk to.
  extensionId = 'odijigegicopmlagdknbdeelggiocicj';
  title = 'app';

  constructor() {
    this.sendMessageToRecorder('encrypted_and_encoded', 'sahjadsjh322jajfsjak232');
    this.sendMessageToRecorder('crypto_iv', '321312142121');
    this.sendMessageToRecorder('testerName', 'Paul Smith');
    this.sendMessageToRecorder('testerEmail', 'psmith@co.com');
    this.sendMessageToRecorder('testId', '123');
  }

  public startRecorder() {
    chrome.runtime.sendMessage(this.extensionId, { isRecordingStarted: false }, function (response) {
      if (!response) {
        console.log('no response');
        return;
      }
      if (!!response.isRecordingStarted && response.isRecordingStarted === true) {
        console.log('recording has started');
      } else {
        console.log('recording has not started');
      }
    });
  }

  public isExtensionInstalled() {
    chrome.runtime.sendMessage(this.extensionId, { isRecordingExtensionInstalled: false }, function (response) {
      if (!response) {
        console.log('no response');
        return false;
      }
      if (!!response.isRecordingExtensionInstalled && response.isRecordingExtensionInstalled === true) {
        console.log('extension is installed :)');
        return true;
      } else {
        console.log('extension is not installed');
        return false;
      }
    });
  }

  public sendMessageToRecorder(key, message) {
    chrome.runtime.sendMessage(this.extensionId, { [key]: message }, function (response) {
      if (!!response) {
        console.log(response);
      } else {
        console.log('no response');
      }
    });
  }
}

