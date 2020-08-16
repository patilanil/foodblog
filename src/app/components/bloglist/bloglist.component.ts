import { Component, OnInit } from '@angular/core';
import { BlogService } from 'src/app/servoces/blog.service';
import { CommonService } from 'src/app/servoces/common.service';

@Component({
  selector: 'app-bloglist',
  templateUrl: './bloglist.component.html',
  styleUrls: ['./bloglist.component.css']
})


export class BloglistComponent implements OnInit {

  public blog_list;
  constructor(private blogService: BlogService,
    private commonService: CommonService) { }

  ngOnInit(): void {

    this.getAllBlogs();
    this.commonService.blogAdded_Observable.subscribe(response => {
      this.getAllBlogs();
    })
  }

  getAllBlogs(){
  	this.blogService.getBlogs().subscribe(result => {
  		console.log('result is ', result);
  		this.blog_list = result;
  	});
  }

  public deleteBlog(blogid): void {
    this.blogService.deleteBlog(blogid).subscribe(res =>{
      this.commonService.notifyBlogAddition();
    });
  }

  

}
