import { FavoriteChangedEventArgs } from './favorite/favorite.component';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // imageUrl = "http://lorempixel.com/400/200";
  
  // post = {
  //   title: "Title",
  //   isFavorite: true
  // }

  // onFavoriteChanged(eventArgs: FavoriteChangedEventArgs) {
  //   console.log("Favorite changed: ", eventArgs);
  // }

  // tweet = {
  //   body: '...',
  //   likesCount: 10,
  //   isLiked: true
  // }

  // courses = [1, 2];

  // viewMode = 'somethingElse';


  // courses;

  // onAdd() {
  //   this.courses.push({ id: 4, name: 'course4' })
  // }

  // onRemove(courses) {
  //   let index = this.courses.indexOf(courses);
  //   this.courses.splice(index, 1);
  // }

  // onChange(course) {
  //   course.name = 'UPDATED';
  // }

  // loadCourses() {
  //   this.courses = [
  //     { id: 1, name: 'course1' },
  //     { id: 2, name: 'course2' },
  //     { id: 3, name: 'course3' }
  //   ];
  // }

  // trackCourse(index, course) {
  //   return course ? course.id : undefined;
  // }


  canSave = true;
}
