import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LayoutService } from '../../_metronic/layout';
import { NgbdTableComplete } from './table/table-complete';

type Tabs = 'Sidebar' | 'Header' | 'Toolbar';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
})
export class ContactsComponent implements OnInit {
  activeTab: Tabs = 'Sidebar';
  model: any;
  @ViewChild('form', { static: true }) form: NgForm;
  configLoading: boolean = false;
  resetLoading: boolean = false;
service: any;
  constructor(private layout: LayoutService) {}

  ngOnInit(): void {
    this.model = this.layout.getLayoutConfig(
      this.layout.getBaseLayoutTypeFromLocalStorage()
    );
  }

  setActiveTab(tab: Tabs) {
    this.activeTab = tab;
  }

  resetPreview(): void {
    this.resetLoading = true;
    this.layout.resetBaseConfig();
  }

  submitPreview(): void {
    this.configLoading = true;
    this.layout.saveBaseConfig(this.model); // it will refresh the page
  }


  
}
