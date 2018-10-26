import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserComponent } from './user.component';
import { UserService } from '../services/user-service';

class MockUserService { 
  authenticated = false;

  isAuthenticated() {
    return this.authenticated;
  }
}



describe('UserComponent', () => {
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserComponent ],
      providers:[UserService]
    })
    .compileComponents().then(()=> {
      fixture = TestBed.createComponent(UserComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => { 
    expect(component).toBeTruthy();
  });

  it('should have one user', () => { 
    expect(component.users.length).toEqual(1);
  });


  it('html should render one user', () => { 
    const ele = fixture.nativeElement.queryselector('p');
    expect(ele.innerText).toContain('user1');
  });
});
