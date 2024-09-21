import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';

import { VideoModalComponent } from './video-modal.component';

describe('VideoModalComponent', () => {
  let component: VideoModalComponent;
  let fixture: ComponentFixture<VideoModalComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoModalComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VideoModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display video when videoSrc is defined', () => {
    component.videoSrc = 'https://example.com/video.mp4';
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('video')).toBeTruthy();
  });

  it('should display message when videoSrc is undefined', () => {
    component.videoSrc = undefined;
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('p').textContent).toContain('No video available');
  });
});
