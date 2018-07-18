import { DataTransactionService } from './services/data-transaction.service';
import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
    imports: [],
    declarations: [HeaderComponent, FooterComponent, NavbarComponent, SidebarComponent, PageNotFoundComponent],
    exports: [HeaderComponent, FooterComponent, NavbarComponent, SidebarComponent],
    providers: [DataTransactionService]
})

export class CoreModule {}
