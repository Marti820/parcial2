import { Component, OnInit } from '@angular/core';
import { Anime } from '../anime';
import { AnimeService } from '../anime.service';
@Component({
  selector: 'app-anime-list',
  templateUrl: './anime-list.component.html',
  styleUrls: ['./anime-list.component.css']
})
export class AnimeListComponent implements OnInit {
  animes: Array<Anime>=[]
  selected = false;
  selecteAnime!: Anime
  total_esp = 0
  rating_prom = 0
  constructor(private animeService: AnimeService) { }
  getAnimes(): void {
    this.animeService.getAnimes().subscribe((animes) => {
      this.animes = animes;
      //console.log(animes)
      //this.datos(animes)
    });
  }
  datos():void {
    const total_esp = 0
    for (let index = 0; index < this.animes.length; index++) {
      total_esp + this.animes[index].episode;
    }
    this.total_esp = total_esp
  }
  datos2():void {
    const total_esp = 0
    for (let index = 0; index < this.animes.length; index++) {
      total_esp + this.animes[index].Rating;
    }
    this.rating_prom = total_esp/this.animes.length
  }
  onSelected(anime: Anime): void {
    this.selected = true;
    this.selecteAnime = anime;
  }
  ngOnInit() {
    this.getAnimes();
    this.selected =false
    //console.log(this.animes[0])
    this.datos()
  }
}
