import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';
import { Blog } from 'src/app/models/blog';
import { Router } from '@angular/router';
import { BlogService } from 'src/app/servoces/blog.service';
import { CommonService } from 'src/app/servoces/common.service';
import { NgForm } from '@angular/forms';
import { AddblogComponent } from '../addblog/addblog.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  @Input('is_addbutton_display') is_addbutton_display: boolean;
  @ViewChild(AddblogComponent) addblogComponent: AddblogComponent;

  constructor() {}
  
  ngOnInit(): void {
  }

  public onShow(): void {
    this.addblogComponent.openModal();
  }
}
