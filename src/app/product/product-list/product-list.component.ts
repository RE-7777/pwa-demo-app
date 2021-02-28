import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Observable } from 'rxjs';


import { Product } from 'src/app/class/product';
import { products } from '../../products';
import { ProductService } from '../shared/product.service';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  // products$: Observable<Product[]>;
  // productsRef: AngularFireList<Product>;
  products: any;

  constructor(private db: AngularFireDatabase, private productService:ProductService) { 
    // this.productsRef = db.list('/product');
    // this.products$ = this.productsRef.valueChanges();
  }

  ngOnInit(): void {
    const productsObservable　=　this.productService.getProducts();
    // productsObservable.pipe(
    //   ():any => {
    //     console.log("async function")
    //   }
    // )

    productsObservable.subscribe(
      (data) => { 
        this.products = data;
        console.log(this.products);
      },
      (err) => { console.error('something wrong occurred ' + err) },
      () => { console.log('done') }
    )
  }

  addProduct() :void { 
      // this.productsRef.push(new Product({name: 'product2', description: 'entry2'}));       
  }


}
