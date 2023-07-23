import { Injectable } from "@angular/core";
import { Ad } from "./ad.model";
import { RestDataSource } from "./rest.datasource";

@Injectable()
export class AdRepository{

    private AdList: Ad[] = [];
    listReady: boolean = false;

    constructor(private datasource: RestDataSource){}

    getAds(): Ad[]{
        return this.AdList
    }

    setAds(){
        this.datasource.getInvetoryList().subscribe(data => {
            this.AdList = data;
            this.listReady = true;
        });
    }

}