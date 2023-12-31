import { Component, OnInit } from "@angular/core"
import { Router, ActivatedRoute } from "@angular/router"
import { Product } from "../product.model"
import { ProductService } from "../product.service"

@Component({
  selector: "./product-update.component.ts",
  templateUrl: "./product-update.component.html",
  styleUrls: ["./product-update.component.css"],
})
export class ProductUpdateComponent implements OnInit {
  product: Product

  constructor(
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get("id")
    if (id !== null) {
      this.productService.readById(id).subscribe((product) => {
        this.product = product
      })
    }
  }

  updateProduct(): void {
    this.productService.update(this.product).subscribe(() => {
      this.productService.showMessage("Produto atualizado com sucesso!")
      this.router.navigate(["/product"])
    })
  }

  cancel(): void {
    this.router.navigate(["/product"])
  }
}
