import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../environments/environment';
import { Post } from '../Models/Post'
@Injectable({
  providedIn: 'root'
})
export class CurdService {
  constructor(private httpclient: HttpClient) { }

  public Getusers() {
    return this.httpclient.get<Post[]>(environment.app_url)
  }
  public postPost(item: any) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${environment.headres_key}`
    });
    const reqoptionheaders = { headers: headers }
    return this.httpclient.post(`https://gorest.co.in/public/v2/posts`, item, reqoptionheaders)
  }

  public DeletePost(id: number) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${environment.headres_key}`
    });
    const reqoptionheaders = { headers: headers }
    return this.httpclient.delete(environment.app_url + '/' + id, reqoptionheaders)
  }
  public updatePost(id: number) {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${environment.headres_key}`
    });
    const reqoptionheaders = { headers: headers }
    return this.httpclient.put(environment.app_url + '/' + id, reqoptionheaders)
  }
}
