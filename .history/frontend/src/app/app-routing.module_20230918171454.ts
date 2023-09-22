import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {HomeComponent} from './views/home/home.component';
import { ProductCrudComponent } from './views/product-crud/product-crud.component';
import { ProductCreateComponent } from './components/product/product-create/product-create.component';

import { }

// nessa parte importei as pastas onde estão os components, e foi criado as rotas usando o path
// O PATH na prática é usado para permitir a execução dos comandos em qualquer pasta que esteja, sem precisar ser a pasta raíz do comando.

const routes: Routes = [
  {
    path: "", // é a rota raiz
    component: HomeComponent,
  },
  {
    path: "product", //quando clicar no component products
    component: ProductCrudComponent,
  },
  {
    path: "product/create",
    component: ProductCreateComponent,
  },
  {
    path: "product/update/:id",
    component: ProductUpdateComponent,
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
