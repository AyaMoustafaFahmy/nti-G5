import { Component, OnInit } from '@angular/core';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-newsfeed',
  templateUrl: './newsfeed.component.html',
  styleUrls: ['./newsfeed.component.css']
})
export class NewsfeedComponent implements OnInit {
  newPost = {content:'', numOfLikes:0, numOfShares:0, comments:[]}
  posts : any = []
  post :any ={content:''}
  commentsFlag=false
  constructor(private _post:PostsService) { }

  ngOnInit(): void {
    this.getAllPosts()
  }

  getAllPosts(){
    this._post.getUserPosts().subscribe(
      (response)=>{
        // console.log(response)
        this.posts = response
      },
      (error)=>{
        console.log(error)
      },
      ()=>{console.log('finish')}
    )
  }
  addPost(userForm){
    this._post.addPost(this.newPost).subscribe(res=>{
      console.log(res)
      this.posts.push(res.data)
userForm.reset()
    })
  }
changeCommentsFlag(){ this.commentsFlag=!this.commentsFlag}
}
