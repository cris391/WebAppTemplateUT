import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  public isExtensionInstalled() {
    // The ID of the extension we want to talk to.
    const editorExtensionId = 'odijigegicopmlagdknbdeelggiocicj';

    // Make a simple request:
    chrome.runtime.sendMessage(editorExtensionId, { isRecordingExtensionInstalled: false }, function (response) {
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
}
