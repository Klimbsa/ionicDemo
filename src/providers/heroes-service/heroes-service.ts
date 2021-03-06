import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the HeroesServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class HeroesServiceProvider {

	heroes:any;

  	constructor(public http: HttpClient) {
    	console.log('Hello HeroesServiceProvider Provider');
  	}

  	getAllHeroes(forceReload:boolean){
  		if(forceReload){
        	this.heroes = [
			    {
			        "realname": "Bruce Wayne",
			        "name": "Batman",
			        "cover": "https://avatarfiles.alphacoders.com/442/44272.jpg",
			        "editor": "DC",
			        "movies": 
			       	[
			            {"title": "The Dark Knight Rises", "releaseDate":"2012-07-05"},
			            {"title": "The Dark Knight", "releaseDate":"2008-08-13"},
			            {"title": "Batman Begins", "releaseDate":"2005-06-15"}
			        ]
			    },
			    {
			      	"realname": "Clark Kent",
			        "name": "Superman",
			        "cover": "http://classicmarvelforever.com/cms/assets/images/profiles/comic_book/Superman5.png",
			        "editor": "DC",
			        "movies": 
			       	[
			            {"title": "Batman v Superman", "releaseDate":"2016-07-05"},
			            {"title": "Man of Steel", "releaseDate":"2013-08-13"}
			        ]
			    },
			    {
			        "realname": "Matt Murdock",
			        "name": "Daredevil",
			        "cover": "https://vignette.wikia.nocookie.net/p__/images/7/7b/IMG_6702.jpg/revision/latest?cb=20170912160050&path-prefix=protagonist",
			        "editor": "Marvel",
			        "movies": 
			       	[
			          	{"title": "Daredevil : The Movie", "releaseDate":"2003-07-05"}
			        ]
			    }
			]
		}

		return this.heroes;
	}
}
