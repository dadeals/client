import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clothing-shoes-main',
  templateUrl: './clothing-shoes-main.component.html',
  styleUrls: ['./clothing-shoes-main.component.css']
})
export class ClothingShoesMainComponent implements OnInit {

  public womenTopItems = [
    { name: "T-Shirts", pic: "assets/nav-title-image/clothing/tshirt.jpg" },
  { name: "Casual Tops", pic: "assets/nav-title-image/clothing/tshirt.jpg" },
  { name: "Jackets", pic: "assets/nav-title-image/clothing/tshirt.jpg" },
  { name: "Hoodies", pic: "assets/nav-title-image/clothing/tshirt.jpg" },
  { name: "Singlets", pic: "assets/nav-title-image/clothing/tshirt.jpg" },
  { name: "Cardigans", pic: "assets/nav-title-image/clothing/tshirt.jpg" }
  ];

  public womenDressItems = [
    { name: "Long Dresses", pic: "assets/nav-title-image/clothing/tshirt.jpg" },
  { name: "Short Dressess", pic: "assets/nav-title-image/clothing/tshirt.jpg" },
  { name: "Pulatases", pic: "assets/nav-title-image/clothing/tshirt.jpg" }
  ];

  public womenBottomItems = [
    { name: "Skirts", pic: "assets/nav-title-image/clothing/tshirt.jpg" },
  { name: "Shorts", pic: "assets/nav-title-image/clothing/tshirt.jpg" },
  { name: "Leggings", pic: "assets/nav-title-image/clothing/tshirt.jpg" },
  { name: "Lava Lavas", pic: "assets/nav-title-image/clothing/tshirt.jpg" },
  { name: "Socks", pic: "assets/nav-title-image/clothing/tshirt.jpg" },
  { name: "Tights", pic: "assets/nav-title-image/clothing/tshirt.jpg" }
  ];

  public menTopItems = [
    { name: "T-Shirts", pic: "assets/nav-title-image/clothing/tshirt.jpg" },
  { name: "Singlets", pic: "assets/nav-title-image/clothing/tshirt.jpg" },
  { name: "Shirts", pic: "assets/nav-title-image/clothing/tshirt.jpg" },
  { name: "Polos", pic: "assets/nav-title-image/clothing/tshirt.jpg" },
  { name: "Alohas", pic: "assets/nav-title-image/clothing/tshirt.jpg" },
  { name: "Jackets", pic: "assets/nav-title-image/clothing/tshirt.jpg" },
  { name: "Hoodies", pic: "assets/nav-title-image/clothing/tshirt.jpg" }

  ];

  public menSetItems = [
    { name: "Men's Basketball Sets", pic: "assets/nav-title-image/clothing/tshirt.jpg" },
  { name: "Suit Sets", pic: "assets/nav-title-image/clothing/tshirt.jpg" }
  ];

  public menBottomItems = [
    { name: "Lava Lavas", pic: "assets/nav-title-image/clothing/tshirt.jpg" },
  { name: "Dress Shorts", pic: "assets/nav-title-image/clothing/tshirt.jpg" },
  { name: "Shorts", pic: "assets/nav-title-image/clothing/tshirt.jpg" },
  { name: "Socks", pic: "assets/nav-title-image/clothing/tshirt.jpg" }
  ];


  public kidTopItems = [
    { name: "Kid's T-Shirts", pic: "assets/nav-title-image/clothing/tshirt.jpg" },
  { name: "Kid's Shirts", pic: "assets/nav-title-image/clothing/tshirt.jpg" },
  { name: "Kid's Alohas", pic: "assets/nav-title-image/clothing/tshirt.jpg" },
  { name: "Kid's Hoodies", pic: "assets/nav-title-image/clothing/tshirt.jpg" }
  ];

  public kidDressItems = [
    { name: "Kid's Dresses", pic: "assets/nav-title-image/clothing/tshirt.jpg" },
  { name: "Kid's Pulatases", pic: "assets/nav-title-image/clothing/tshirt.jpg" }
  ];

  public kidBottomItems = [
    { name: "Kid's Shorts", pic: "assets/nav-title-image/clothing/tshirt.jpg" },
  { name: "Kid's Skirts", pic: "assets/nav-title-image/clothing/tshirt.jpg" },
  { name: "Kid's Lava Lavas", pic: "assets/nav-title-image/clothing/tshirt.jpg" },
  { name: "Kid's Dress Shorts", pic: "assets/nav-title-image/clothing/tshirt.jpg" }
  ];

  public kidSetItems = [
    { name: "Kid's Suit Sets", pic: "assets/nav-title-image/clothing/tshirt.jpg" },
  { name: "Kid's Basketball Sets", pic: "assets/nav-title-image/clothing/tshirt.jpg" },
  ];

  public hatItems = [{ name: "Lady's Hats", pic: "assets/nav-title-image/clothing/tshirt.jpg" },
  { name: "Caps", pic: "assets/nav-title-image/clothing/tshirt.jpg" },
  { name: "Bucket Hats", pic: "assets/nav-title-image/clothing/tshirt.jpg" },
  { name: "Kid's Hats", pic: "assets/nav-title-image/clothing/tshirt.jpg" }
  ];

  public underwears = [{ name: "Women's Underwears", pic: "assets/nav-title-image/clothing/tshirt.jpg" },
  { name: "Bras", pic: "assets/nav-title-image/clothing/tshirt.jpg" },
  { name: "Men's Underwears", pic: "assets/nav-title-image/clothing/tshirt.jpg" },
  { name: "Kid's Underwears", pic: "assets/nav-title-image/clothing/tshirt.jpg" },
  ];

  public accessories = [{ name: "Bandanas", pic: "assets/nav-title-image/clothing/tshirt.jpg" },
  { name: "Ties & Bow Ties", pic: "assets/nav-title-image/clothing/tshirt.jpg" },
  { name: "Scarfs", pic: "assets/nav-title-image/clothing/tshirt.jpg" }
  ];

  constructor() { }

  ngOnInit() {
  }

}
