import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import WProofreaderSDK from '@webspellchecker/wproofreader-sdk-js';

@Component({
  selector: 'app-rich-text-editor',
  standalone: true,
  imports: [],
  templateUrl: './rich-text-editor.component.html',
  styleUrl: './rich-text-editor.component.scss'
})
export class RichTextEditorComponent implements AfterViewInit {
  @ViewChild('richTextEditor', { static: false }) richTextEditor!: ElementRef;
  private instance: any | undefined;

  ngAfterViewInit(): void {
    this.InitilizeSpellChecker();
  }

  private InitilizeSpellChecker() {
    WProofreaderSDK.init({
      container: this.richTextEditor.nativeElement,
      autoSearch: true,
      autoDestroy: true,
      enforceAI: true,
      serviceId: 'UBgnDLE6pdiqtYB',
      enableGrammar: true,
      actionItems: ['ignoreAll', 'addWord'],
      disableOptionsStorage: true,
      theme: 'custom',
      suggestionsCount: 5,
      ignoreClasses: ['btnComponent_Attached', 'Comp_Heading_Attached', 'compLbl', 'Comp_Heading_Detail'],
      onLoad: (instance: any) => {
        this.instance = instance;
      },
      onAddWordToUserDictionary: (word: string, instance: any) => { 
        
      },
      onErrorRequest: function(data: any, instance: any) {
          // data - an object with information about an error.
          // instance - a WEBSPELLCHECKER instance.
          console.log("On Error")
      },
      onStatistics: (data: any, instance: any) => {
      },
    });
  }
}
