import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExampleComponent } from './example/example.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms';
import { ChildComponent } from './child/child.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { SkillsComponent } from './skills/skills.component';
import { RouterModule,Routes } from '@angular/router';
import { TestService } from './test.service';
import { AboutcardComponent } from './aboutcard/aboutcard.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductsService } from './products.service';

const routes:Routes=[
  {path:"",component:HomeComponent},
  {path:"about",component:AboutComponent},
   {path:"skills",component:SkillsComponent},
   {path:"aboutcard/:id",component:AboutcardComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    ExampleComponent,
    HeaderComponent,
    FooterComponent,
    ChildComponent,
    HomeComponent,
    AboutComponent,
    SkillsComponent,
    AboutcardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule
    ],
  providers: [TestService,ProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
