import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { Client } from '../_model/client';
import { Fournisseur } from '../_model/fournisseur';
import { Produit } from '../_model/produit';
import { User } from '../_model/user';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['../app.component.scss','./dashboard.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DashboardComponent implements OnInit {
  dataService: any;

  constructor() { }

  countProduit: Produit[] = [];
  countFournisseur: Fournisseur[] = [];
  CurrentCityTemp: number = 0;
  skyState : string = '';
  todayDate: number = 0;
  todayDateName: string = '';
  users: User[]=[];
  ngOnInit() {
    this.todayDate = Date.now();
    //this.getStatictics();
    this.getCurrentDate();
    this.dataService.getWeather().subscribe((res) => {
      this.CurrentCityTemp = res['main']['temp'] - 273.15;
      this.skyState = res['weather'][0]["description"];
    });
  }

/*
  getStatictics(){
    this.dataService.findAllUsers().subscribe((Comptes: Compte[]) => {
      this.countUsers = Comptes;
      console.log(this.countUsers);
    });
    this.dataService.findAllArticles().subscribe((articles: Article[]) => {
      this.countArticles = articles;
      console.log(this.countUsers);
    });
    this.dataService.findAllAnnonces().subscribe((annonces: Annonce[]) => {
      this.countAnnonces = annonces;
      console.log(this.countUsers);
    });
  }*/
  getCurrentDate(){
    let nowDate = new Date();
    let weekdays = new Array(7);
    weekdays[0] = "Dimanche";
    weekdays[1] = "Lundi";
    weekdays[2] = "Mardi";
    weekdays[3] = "Mercredi";
    weekdays[4] = "Jeudi";
    weekdays[5] = "Vendredi";
    weekdays[6] = "samedi";
    this.todayDateName = weekdays[nowDate.getDay()];
  }

}
