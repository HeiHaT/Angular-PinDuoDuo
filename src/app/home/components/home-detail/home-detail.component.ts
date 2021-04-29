import { Component, OnInit } from '@angular/core';
import { Channel, ImageSlider } from 'src/app/shared';
import { ActivatedRoute } from '_@angular_router@11.2.11@@angular/router';
import { HomeService } from '../../services';

@Component({
  selector: 'app-home-detail',
  templateUrl: './home-detail.component.html',
  styleUrls: ['./home-detail.component.css']
})
export class HomeDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute, private server: HomeService) { }
  selectedTabLink;
  sliders: ImageSlider[] = [];
  channels: Channel[] = [];
  ngOnInit(): void {
    this.sliders = this.server.getBanners();
    this.channels = this.server.getChannels();

    this.route.paramMap.subscribe(params => {
     this.selectedTabLink = params.get('tablink');
     console.log(params.get('tablink'));
    });
  }

}
