import { Component, ComponentFactoryResolver, Input, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { DataTableContentTextComponent } from './data-table-content-text/data-table-content-text.component';
import { DataTableContentDateComponent } from './data-table-content-date/data-table-content-date.component';
import { DataTableContentBooleanComponent } from './data-table-content-boolean/data-table-content-boolean.component';
import { DataTableContentEditComponent } from './data-table-content-edit/data-table-content-edit.component';
import { DataTableContentViewComponent } from './data-table-content-view/data-table-content-view.component';
import { DataTableContentCurrencyComponent } from './data-table-content-currency/data-table-content-currency.component';
import { DataTableContentBaseComponent } from './data-table-content-base/data-table-content-base.component';

@Component({
  selector: 'fdn-data-table-content',
  templateUrl: './data-table-content.component.html'
})
export class DataTableContentComponent implements OnInit {
  @Input() contentType!: string;
  @Input() content!: string;
  @Input() fontColor!: string;
  /**
   * Date format
   * e.g. 'dd/MM/yyyy', 'yyyy-MM-dd'
   *
   */
  @Input() dateFormat!: string;
  /**
   * Currency code
   * e.g. 'BRL', 'CAD', 'USD'
   *
   */
  @Input() currencyCode!: string;
  /**
   * Logic to navigate of the application
   *
   */
  @Input() goToUrl!: (path: string, isNewTab: boolean) => void;
  /**
   * Translated text of 'Edit in the same tab'
   *
   */
  @Input() editInTheSameTabTranslatedText: string = 'Edit in the same tab';
  /**
   * Translated text of 'Edit in other tab'
   *
   */
  @Input() editInOtherTabTranslatedText: string = 'Edit in other tab';
  /**
   * Translated text of 'View in the same tab'
   *
   */
  @Input() viewInTheSameTabTranslatedText: string = 'View in the same tab';
  /**
   * Translated text of 'View in other tab'
   *
   */
  @Input() viewInOtherTabTranslatedText: string = 'View in other tab';

  @ViewChild('container', {read: ViewContainerRef, static: true})

  private container!: ViewContainerRef;

  readonly typeToComponentMapper: {[key: string]: any} = {
    contentText: DataTableContentTextComponent,
    contentDate: DataTableContentDateComponent,
    contentBoolean: DataTableContentBooleanComponent,
    contentEdit: DataTableContentEditComponent,
    contentView: DataTableContentViewComponent,
    contentCurrency: DataTableContentCurrencyComponent
  };

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {
  }

  ngOnInit() {
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.getComponentForType(this.contentType));
    const viewContainerRef = this.container;
    viewContainerRef.clear();
    const componentRef = viewContainerRef.createComponent(componentFactory);
    const componentRefInstance = <DataTableContentBaseComponent>componentRef.instance;
    componentRefInstance.contentType = this.contentType;
    componentRefInstance.content = this.content;
    componentRefInstance.fontColor = this.fontColor;
    componentRefInstance.dateFormat = this.dateFormat;
    componentRefInstance.currencyCode = this.currencyCode;
    componentRefInstance.goToUrl = this.goToUrl;
    componentRefInstance.editInTheSameTabTranslatedText = this.editInTheSameTabTranslatedText;
    componentRefInstance.editInOtherTabTranslatedText = this.editInOtherTabTranslatedText;
    componentRefInstance.viewInTheSameTabTranslatedText = this.viewInTheSameTabTranslatedText;
    componentRefInstance.viewInOtherTabTranslatedText = this.viewInOtherTabTranslatedText;
  }

  private getComponentForType(type: string): any {
    return this.typeToComponentMapper[type];
  }
}
