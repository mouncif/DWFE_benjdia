import { Injectable } from '@angular/core';
import { User } from '../_model/user';
import { HttpClient } from '@angular/common/http';
import { Produit } from '../_model/Produit';
import { Client } from '../_model/client';
import { Fournisseur } from '../_model/fournisseur';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private user_url :string = "http://localhost:3000/users";
  private article_url :string = "http://localhost:3000/fournisseur";
  private annonce_url :string="http://localhost:3000/client";
  private reclamation_url ="http://localhost:3000/cproduit";
  private weather :string = "http://api.openweathermap.org/data/2.5/weather?q=beni%20mellal&appid=b3fa6d2303d0eb6b1a20dd3626a5177b";
  private user:User; 
  private article:Produit;
  private annonce:Fournisseur;
  private contact:Client;
  constructor(private http: HttpClient) { }
  public sendGetRequest(){
    return this.http.get(this.article_url);
  }
  public sendGetRequestofAnnonce(){
    return this.http.get(this.annonce_url);
  }
 /* findAllUsers(){
    return this.http.get<Compte[]>(this.user_url);
  }
  findAllmails(){
    return this.http.get<Contact[]>(this.reclamation_url);
  }
  findAllArticles(){
    return this.http.get<Article[]>(this.article_url);
  }
  findAllAnnonces(){
    return this.http.get<Annonce[]>(this.annonce_url);
  }
  deleteArticle(id: number){
    return this.http.delete<Article>(this.article_url+`/${id}`);
  }
  deleteAnnonce(id: number){
    return this.http.delete<Annonce>(this.annonce_url+`/${id}`);
  }
  createArticle(article: Article){
    return this.http.post<Article>(this.article_url, article);
  }
  createAnnonce(annonce: Annonce){
    return this.http.post<Annonce>(this.annonce_url, annonce);
  }
  updateArticle(article: Article){
    return this.http.put<Article>(this.article_url + `/${article.id}`, article);
  }
  getMailInfo(contact: Contact){
    return this.http.put<Contact>(this.reclamation_url + `/${this.contact.id}`, contact);
  }
  updateAnnonce(annonce: Annonce){
    return this.http.put<Annonce>(this.annonce_url + `/${annonce.id}`, annonce);
  }
  setter(article: Article){
    this.article = article;
  }
  setterAnnonce(annonce: Annonce){
    this.annonce = annonce;
  }
  setterContact(contact: Contact){
    this.contact = contact;
  }
  getter(){
    return this.article;
  }
  getterMail(){
    return this.contact;
  }
  getterAnnonce(){
    return this.annonce;
  }*/
  getWeather(){
    return this.http.get(this.weather);
  }
}
