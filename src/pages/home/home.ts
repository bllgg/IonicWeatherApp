import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { WeatherProvider } from '../../providers/weather/weather';
import { Storage } from '@ionic/storage';

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

  constructor(
    public navCtrl: NavController,
    private weatherProvider: WeatherProvider,
    private storage: Storage) {

  }

  ionViewWillEnter(){
    //*
    this.storage.get('location').then((val) => {
      if(val != null){
        this.location = JSON.parse(val);
      }else{
        this.location = {
          city : 'Colombo',
          country : 'LK'
        }
      }

      this.weatherProvider.getWeather(this.location.city)
        .subscribe(weather => {
          this.weather = weather.current_observation;
        });
    });
    //*/

    /*
    this.location = {
      city: 'Kurunegala',
      country: 'LK'
    }

    this.weatherProvider.getWeather(this.location.city).subscribe(weather => {
      //console.log(weather);
      this.weather = weather.current_observation;
    });
    */
  }

}
