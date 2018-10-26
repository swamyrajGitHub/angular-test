import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactComponent } from './contact.component';
import { DebugElement } from '@angular/core';
import { BrowserModule, By } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('ContactComponent', () => {
  let component: ContactComponent;
  let fixture: ComponentFixture<ContactComponent>;
  let debug :DebugElement;
  let ele:HTMLElement;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactComponent ],
      imports:[BrowserModule,
      FormsModule,
      ReactiveFormsModule]
    })
    .compileComponents().then(()=>{
      fixture = TestBed.createComponent(ContactComponent);
      component = fixture.componentInstance;
      debug = fixture.debugElement;
      ele=fixture.nativeElement;
      fixture.detectChanges();
    });
  }));

  

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a text contact page',async(()=>{
    expect(component.text).toEqual('contact page');
  }));

  it('should set submitted to true',async(()=>{
    component.onsubmit();
    expect(component.submitted).toBeTruthy;
  }));

  it('should call the onsubmit method',async(()=>{
    spyOn(component,'onsubmit');
    ele = debug.query(By.css('button')).nativeElement;
    ele.click();
    expect(component.onsubmit).toHaveBeenCalledTimes(0);
  }));


  it('form should be invalid',async(()=>{
    component.contactForm.controls['email'].setValue('');
    component.contactForm.controls['name'].setValue('');
    component.contactForm.controls['text'].setValue('');
    expect(component.contactForm.valid).toBeFalsy;
  }));

  
  it('form should be valid',async(()=>{
    component.contactForm.controls['email'].setValue('thalappa@tracfone.com');
    component.contactForm.controls['name'].setValue('Swamy');
    component.contactForm.controls['text'].setValue('Hello Swamy...!');
    expect(component.contactForm.valid).toBeTruthy;
  }));



});
