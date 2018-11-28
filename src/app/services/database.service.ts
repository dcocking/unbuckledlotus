import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor(private db: AngularFireDatabase) { 
    console.log('database service starting');
    // this.getAppNameFromService();
  }

  getAppNameFromService() {
    let refPath = 'v1/global/appname';
    let item = this.db.object(refPath);
    item.valueChanges().subscribe((appname)=>{
      console.log(appname);
    })
  }

  getAppName() {
    let refPath = 'v1/global/appname';
    let databaseObject = this.db.object(refPath);
    return databaseObject;
  }

}
