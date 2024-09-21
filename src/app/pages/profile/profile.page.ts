import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  fullName: string = '';
  location: string = ''; 
  email: string = '';
  profilePic: string = ''; // Add this line to store the profile picture
  followers: number = 513;
  likes: number = 6533;

  constructor() {}

  ngOnInit() {
    const userData = JSON.parse(localStorage.getItem('user') || '{}');
    this.fullName = userData.fullName || 'Sebastian Balboa';
    this.location = userData.address || 'Peru, Lima'; 
    this.email = userData.email || '';
    this.profilePic = userData.profilePic || 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWs0LhskvcZ7D9rmQMyu43syvJlKZUR5ucmQ&s'; // Retrieve profile picture
  }
}
