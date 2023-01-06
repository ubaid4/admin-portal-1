import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[darbakPassword]'
})
export class DarbakPasswordDirective {

  constructor(private el: ElementRef, private renderer: Renderer2) {
    // console.log('yes im running password directive');
    // console.log('here is elm');
    
    // console.log(this.el);
    // // HostListener('click') myClick(){ };

   }
   @HostListener('click', ['$event']) onClick() {
    // console.info();
console.log('clicked');
// console.log(this.el.nativeElement.children[0].children[0].classList);

if(this.el.nativeElement.children[0].children[0].classList.contains("fa-eye-slash")){
  this.el.nativeElement.children[0].children[0].classList.remove('fa-eye-slash')
  this.el.nativeElement.children[0].children[0].classList.add('fa-eye')
  this.el.nativeElement.previousElementSibling.setAttribute("type","Text")
}
else{
  this.el.nativeElement.children[0].children[0].classList.remove('fa-eye') 
  this.el.nativeElement.children[0].children[0].classList.add('fa-eye-slash')
  this.el.nativeElement.previousElementSibling.setAttribute("type","Password")

}


    // this.el.nativeElement.classList.toggle('is-open');

    // var content = this.el.nativeElement.nextElementSibling;
    // if (content.style.maxHeight) {
    //   // accordion is currently open, so close it
    //   content.style.maxHeight = null;
    // } else {
    //   // accordion is currently closed, so open it
    //   content.style.maxHeight = content.scrollHeight + "px";

    // }
  }

}
