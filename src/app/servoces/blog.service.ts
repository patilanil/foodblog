import { Injectable } from '@angular/core';
import { Blog } from '../models/blog';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';



const URLS = {
  BLOGS: environment.server_url + 'blogs'
}

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  private readonly image_path = '/assets/food.jpg';

  constructor(private http: HttpClient) { }

  public getBlogs() {
    return this.http.get(URLS.BLOGS);
  }

  public getBlogDetails(blogid) {
    let httpOptions = new HttpParams();
    httpOptions = httpOptions.append('id', blogid.toString());
    return this.http.get<any>(URLS.BLOGS, { params: httpOptions });
  }

  public addBlog(post: Blog) {
    return this.http.post(URLS.BLOGS, {
      title: post.title,
      description: post.description,
      image: this.image_path
    })
  }

  public updateBlog(post: Blog, blogid) {
    return this.http.put(URLS.BLOGS + '/' + blogid, {
      title: post.title,
      description: post.description,
      image: this.image_path
    })
  }

  public deleteBlog(blogid) {
    let httpOptions = new HttpParams();
    httpOptions = httpOptions.append('id', blogid.toString());
    return this.http.delete(URLS.BLOGS + '/' + blogid);
  }
}
