import { Component } from '@angular/core';
import { Database, object, ref, set } from '@angular/fire/database';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  color: string='';
  color2: string='';
  color3: string='';
  color4: string='';
  color5: string='';
  color6: string=''; 

  on: boolean = true;
  on2: boolean=true;
  on3: boolean=true;
  on4: boolean=true;
  on5: boolean=true;
  on6: boolean=true;

  constructor(private database:Database) {}
  route:any;

  async enc(numero: number){
    if(numero==1)
    {
      this.on=!this.on;
      this.route = set(ref(this.database,'salon') , this.on); 
      
      const route = ref(this.database, 'salon');
      object(route).subscribe(attributes => {
        const valores_db = attributes.snapshot.val();
        console.log(valores_db);
      });

      this.color= this.on? 'background-color:   rgba(255, 255, 0, 0.5);':'background-color:  rgba(0, 0, 0, 0.5);';
    }
    if(numero==2)
    {
      this.on2=!this.on2;
      this.route = set(ref(this.database,'baño') , this.on2);
      
      const route = ref(this.database, 'baño');
      object(route).subscribe(attributes => {
        const valores_db = attributes.snapshot.val();
        console.log(valores_db);
      });
    
      this.color2= this.on2? 'background-color:   rgba(255, 255, 0, 0.5);':'background-color:  rgba(0, 0, 0, 0.5);';

    }
    if(numero==3)
    {
      this.on3=!this.on3;
      this.route = set(ref(this.database,'cocina') , this.on3); 
     
      const route = ref(this.database, 'cocina');
      object(route).subscribe(attributes => {
        const valores_db = attributes.snapshot.val();
        console.log(valores_db);
      });

      this.color3= this.on3? 'background-color:   rgba(255, 255, 0, 0.5);':'background-color:  rgba(0, 0, 0, 0.5);';

    }
    if(numero==4)
    {
      this.on4=!this.on4;
      this.route = set(ref(this.database,'habitacion3') , this.on4); 
    
      const route = ref(this.database, 'habitacion3');
      object(route).subscribe(attributes => {
        const valores_db = attributes.snapshot.val();
        console.log(valores_db);
      });
      this.color4= this.on4? 'background-color:   rgba(255, 255, 0, 0.5);':'background-color:  rgba(0, 0, 0, 0.5);';

    }
    if(numero==5)
    {
      this.on5=!this.on5;
      this.route = set(ref(this.database,'habitacion prin') , this.on5); 
    
      const route = ref(this.database, 'habitacion prin');
      object(route).subscribe(attributes => {
        const valores_db = attributes.snapshot.val();
        console.log(valores_db);
      });
      this.color5= this.on5? 'background-color:   rgba(255, 255, 0, 0.5);':'background-color:  rgba(0, 0, 0, 0.5);';

    }
    if(numero==6)
    {
      this.on6=!this.on6;
      this.route = set(ref(this.database,'habitacion2') , this.on5); 
      const route = ref(this.database, 'habitacion2');
      object(route).subscribe(attributes => {
        const valores_db = attributes.snapshot.val();
        console.log(valores_db);
      });
      this.color6= this.on6? 'background-color:   rgba(255, 255, 0, 0.5);':'background-color:  rgba(0, 0, 0, 0.5);';

    }
  }
}
