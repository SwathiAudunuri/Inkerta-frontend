import { Inject, Injectable, Renderer2 } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class ThemingService {

  constructor() { }
  selectedTheme = 'materia';
  insertedElement: any;
  theme1='theme-default.css';

  setTheme(themes:any){

//  const spans = document.querySelector('.NgxEditor__MenuBar')
//    const spans1 = document.querySelector('.NgxEditor')

//    //console.log(spans)
//     this.renderer.setStyle(spans,'flex-wrap','wrap')
//     this.renderer.setStyle(spans1,'height','200px')
// let link: HTMLLinkElement = this.dom.createElement('link');
// link.setAttribute('rel', 'canonical');
// this.dom.head.appendChild(link);
// link.setAttribute('href',"none");


  
const y=document.querySelector("head")
//console.log(y)

const x=document.createElement("link")  
x.setAttribute("rel","stylesheet")
if(themes){
  this.theme1=themes
}
x.setAttribute("href",this.theme1)
//console.log(x)
if(y){
y.appendChild(x)
}
//console.log(y)



}
}