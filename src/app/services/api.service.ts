import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor() {}

  products: any[] = [];

  getProducts() {
    this.products = [
      {
        id: 1,
        name: 'AK-47 | Case Hardened',
        price: 399.08,
        description:
          'Case Hardened was added to the game on August 13, 2013, as part of The Arms Deal Collection, which was released alongside “The Arms Deal” update. The metal parts of the rifle are hardened and coated with blue, yellow and purple stains. The handguard and the buttstock are made of wood. The handle is painted solid brown. The quality of AK-47 | Case Hardened is Classified. The skin has a StatTrak option and belongs to the "Case Hardened" series. The main feature of the skin is a large number of pattern variations.',
        fileName: 'ak47casehardened.jpg',
        status: 'Available',
      },
      {
        id: 2,
        name: 'AWP | Dragon Lore',
        price: 418.947,
        description:
          'Dragon Lore was added to the game on July 1, 2014, as part of The Cobblestone Collection, which was released alongside the start of Operation Breakout. The body of the rifle is painted olive and adorned with an image of a dragon spitting fire. The body of the dragon is adorned with Celtic ornaments. A black-and-green checkered pattern is applied to the scope, the front part of the barrel and the back part of the buttstock. The quality of AWP | Dragon Lore is Covert. The skin has a souvenir option and is one of the most expensive skins in the game.',
        fileName: 'awpdragonlore.jpg',
        status: 'Not Available',
      },
      {
        id: 3,
        name: 'Desert Eagle | Blaze',
        price: 413.15,
        description:
          'Eagle Blaze was added to the game on August 14, 2013, as part of The Dust Collection, which was released alongside “The Arms Deal” update. As expensive as it is powerful, the Desert Eagle is an iconic pistol that is difficult to master but surprisingly accurate at long range. The body of the pistol is painted solid black. The front part of the slide is adorned with images of flames made in yellow and orange. The quality of Desert Eagle | Blaze is Restricted. The skin is not available with the StatTrak counter and has no souvenir option. The skin belongs to the "Blaze" series and is the most expensive skin for Desert Eagle.',
        fileName: 'deagleblaze.jpg',
        status: 'Avalaible',
      },
      {
        id: 4,
        name: 'FAMAS | Commemoration',
        price: 110.70,
        description: 'Commemoration was added to the game on October 18, 2019, as part of The CS20 Collection, which was released alongside the “Cache and Release” update. The skin was created by Ezikyl. The entire body of the rifle is coated with gold paint and adorned with an image of a world map imitating engraving. The counter-terrorists symbol surrounded by soldiers is located above the magazine. The buttstock is adorned with a list of 14 CS:GO maps. The handle, the magazine and some small parts of the rifle are not painted. The quality of FAMAS | Commemoration is Covert. The skin has a StatTrak option.',
        fileName: 'famasgold.jpg',
        status: 'Not Available',
      },
      {
        id: 5,
        name: 'SSG 08 | Death Strike',
        price: 221.95,
        description: 'Death Strike was added to the game on September 22, 2021, as part of The 2021 Dust 2 Collection, which was released alongside the start of Operation Riptide. The skin was created by Graff. The rifle’s body has been painted with an image of a black scorpion surrounded by streaming sands. The handle and individual parts of the buttstock are decorated with textured rubber pads. The scope remains unpainted. The quality of SSG 08 | Death Strike is Classified. The skin has a souvenir version.',
        fileName: 'ssg08deathstrike.jpg',
        status: 'Available',
      },
    ];
    return this.products;
  }

  getProduct(id: any) {
    const product = this.products.find((x) => x.id == id);
    return product;
  }
}
