import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ClassGetter } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  availableLanguages: Array<string>;

  constructor(private translateService: TranslateService){ }

  ngOnInit() {
    this.availableLanguages = this.translateService.getLangs();
  }

  switchLang(lang: string) {
    this.translateService.use(lang);
  }

}
