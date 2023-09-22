import { Component, OnInit } from "@angular/core"
import { Product } from "./../product.model"
import { ProductService } from "../product.service"

@Component({
  selector: "app-product-read",
  templateUrl: "./product-read.component.html",
  styleUrls: ["./product-read.component.css"],
})
export class ProductReadComponent implements OnInit {
  product: Product[] = [] // Inicialize a propriedade com um array vazio
  displayedColumns = ['id', 'name', 'price', 'action']

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.read().subscribe((product) => {
      this.product = product
    })
  }
}
