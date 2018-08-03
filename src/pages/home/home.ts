import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { WeatherProvider } from '../../providers/weather/weather';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  weather:any;
  location:{
    city:String;
    country:String;
  };

  constructor(public navCtrl: NavController, private weatherProvider: WeatherProvider) {

  }

  ionViewWillEnter(){
    this.location = {
      city: 'Kurunegala',
      country: 'LK'
    }

    this.weatherProvider.getWeather(this.location.city,this.location.country).subscribe(weather => {
      //console.log(weather);
      this.weather = weather.current_observation;
    });
  }

}
