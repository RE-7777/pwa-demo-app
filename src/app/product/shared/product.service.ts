import{ Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { of } from 'rxjs';

@Injectable()
export class ProductService{

    constructor(private http:HttpClient){}
    
    getProducts():Observable<any>{
        console.log('start getProducts')
        return  this.http.get('/products')
    }

    getProductById(productId: string):Observable<any>{
        // debugger
        return this.http.get('/products/' + productId);
    }
}