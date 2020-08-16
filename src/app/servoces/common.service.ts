import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  public blogAdded_Observable = new Subject();
  constructor() { }

  notifyBlogAddition(){
		this.blogAdded_Observable.next();
	}
}
