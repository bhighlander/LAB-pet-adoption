//pets object array
const pets = [
  {
    id: 1,
    name: "Dusty",
    color: "Green",
    specialSkill: "Gives sincere apologies.",
    type: "cat",
    imageUrl:
      "https://vetmedcenterslc.com/wp-content/uploads/2022/04/cat-sneezing.jpg",
  },
  {
    id: 2,
    name: "Trouble",
    color: "Brown",
    specialSkill:
      "Just picks the tomatoes off of a sandwich instead of requesting a whole new sandwich.",
    type: "dino",
    imageUrl:
      "https://visittrivalley.com/wp-content/uploads/2020/10/Dino-Header-768x512-1-e1602603065544.jpg",
  },
  {
    id: 3,
    name: "Whiskers",
    color: "Yellow",
    specialSkill: "Can prove he is a real man by drinking whiskey.",
    type: "dino",
    imageUrl:
      "https://news.utexas.edu/wp-content/uploads/2018/06/dino_tongue-600x400-c-default.jpg",
  },
  {
    id: 4,
    name: "Coco",
    color: "Black",
    specialSkill: "Burps minimally.",
    type: "dog",
    imageUrl:
      "https://labyes.com/wp-content/uploads/2018/11/dreamstime_xl_74929292_baja-600x400.jpg",
  },
  {
    id: 5,
    name: "Spooky",
    color: "Brown",
    specialSkill: "Comfortable in the outdoors for up to eight hours.",
    type: "cat",
    imageUrl:
      "https://s1.1zoom.me/prev/559/Cats_Kittens_Ginger_color_558288_600x400.jpg",
  },
  {
    id: 6,
    name: "Tiger",
    color: "Black",
    specialSkill: "Can read (but cannot understand) Hebrew.",
    type: "dog",
    imageUrl:
      "https://static01.nyt.com/images/2022/05/10/science/28DOGS-BEHAVIOR1/28DOGS-BEHAVIOR1-articleLarge.jpg?quality=75&auto=webp&disable=upscale",
  },
  {
    id: 7,
    name: "Oreo",
    color: "Yellow",
    specialSkill: "Able to stop chewing ice or whistling on request.",
    type: "cat",
    imageUrl:
      "https://static01.nyt.com/images/2021/09/14/science/07CAT-STRIPES/07CAT-STRIPES-jumbo.jpg?quality=75&auto=webp",
  },
  {
    id: 8,
    name: "Ginger",
    color: "Grey",
    specialSkill: "Comfortable in the outdoors for up to eight hours.",
    type: "dino",
    imageUrl:
      "http://dickinsonmuseumcenter.com/wp-content/uploads/2022/11/Daspletosaurus-1400w-600x400.jpg",
  },
  {
    id: 9,
    name: "Sassy",
    color: "Brown",
    specialSkill: "Adept at talking self and others out of fights.",
    type: "cat",
    imageUrl: "https://www.1zoom.me/prev/306/305171.jpg",
  },
  {
    id: 10,
    name: "Sammy",
    color: "Blue",
    specialSkill: "Listens attentively to boring stories.",
    type: "cat",
    imageUrl: "https://www.1zoom.me/prev/322/321833.jpg",
  },
  {
    id: 11,
    name: "Coco",
    color: "Orange",
    specialSkill: "Can be around food without staring creepily at it.",
    type: "dino",
    imageUrl:
      "http://dickinsonmuseumcenter.com/wp-content/uploads/2021/01/Saurornitholestes_digging_Burrows_wahweap-600x400.jpg",
  },
  {
    id: 12,
    name: "Buster",
    color: "Green",
    specialSkill: "Does not use excessive acronyms.",
    type: "dog",
    imageUrl:
      "https://i.pinimg.com/originals/1f/30/8c/1f308c9c108a384b91b39430cc7312e9.jpg",
  },
  {
    id: 13,
    name: "Chester",
    color: "Red",
    specialSkill:
      "Expertly quotes and recognizes dialogue from early seasons of The Simpsons.",
    type: "dog",
    imageUrl:
      "https://ontariospca.ca/wp-content/uploads/2018/12/Adopting-shelter-dog-600x400.jpg",
  },
  {
    id: 14,
    name: "Samantha",
    color: "Brown",
    specialSkill: "Always up for dessert.",
    type: "cat",
    imageUrl: "https://www.1zoom.me/prev/281/280847.jpg",
  },
  {
    id: 15,
    name: "Coco",
    color: "Red",
    specialSkill: "Burps minimally.",
    type: "cat",
    imageUrl:
      "https://media.nature.com/lw767/magazine-assets/d41586-020-02779-3/d41586-020-02779-3_18481780.jpg",
  },
  {
    id: 16,
    name: "Smokey",
    color: "Brown",
    specialSkill: "Drives at a safe rate of speed in snow or rain.",
    type: "dino",
    imageUrl: "https://mmo.aiircdn.com/452/62d7db9b99c94.jpg",
  },
  {
    id: 17,
    name: "Muffin",
    color: "Yellow",
    specialSkill:
      "Does not freak out if you haven’t seen his favorite movie (The Big Lebowski).",
    type: "cat",
    imageUrl:
      "https://reviewed-com-res.cloudinary.com/image/fetch/s--MINrQ7hE--/b_white,c_fill,cs_srgb,f_auto,fl_progressive.strip_profile,g_center,h_400,q_auto,w_600/https://reviewed-production.s3.amazonaws.com/attachment/c4fd322e79ae4bb4/Ben%20Cat%202.jpg",
  },
  {
    id: 18,
    name: "Salem",
    color: "Brown",
    specialSkill: "Proficient in air guitar",
    type: "dino",
    imageUrl:
      "https://www.westchesterfamily.com/wp-content/uploads/2022/04/BZ_Westchester_Advertorial3_600x400.png",
  },
  {
    id: 19,
    name: "Callie",
    color: "Blue",
    specialSkill: "Listens attentively to boring stories.",
    type: "dog",
    imageUrl:
      "https://media.istockphoto.com/id/539984562/photo/dog-playing-with-toy-or-bone.jpg?s=612x612&w=0&k=20&c=ZCAfdGOX4QVFFtxV0twzW7-Rsny4YlVMaoeZxjNx-m8=",
  },
  {
    id: 20,
    name: "Spooky",
    color: "Black",
    specialSkill: "Uses litter box at appropriate hours.",
    type: "cat",
    imageUrl: "https://s1.1zoom.me/prev/587/Cats_Glance_586120_600x400.jpg",
  },
  {
    id: 21,
    name: "Miss kitty",
    color: "Red",
    specialSkill: "Owns a Nintendo Power Glove.",
    type: "dino",
    imageUrl:
      "https://dinopark-bayern.de/app/uploads/2022/06/rocky_unedited-600x400.jpg",
  },
  {
    id: 22,
    name: "Snuggles",
    color: "Orange",
    specialSkill: "Is comfortable with jokes about his receding hairline.",
    type: "cat",
    imageUrl:
      "https://i.hurimg.com/i/hdn/75/600x400/5da6e153d3806c18308e2120.jpg",
  },
  {
    id: 23,
    name: "Buddy",
    color: "Red",
    specialSkill: "Enjoys fine wine.",
    type: "dog",
    imageUrl:
      "http://1.bp.blogspot.com/-VjM0CmtN-vU/T7YX-LXa09I/AAAAAAAADA0/Vt1oGWEG0lw/s1600/sheepdog+border+collie+shakes+off+water+funny+picture+photo+pulling+faces+raspberry+tongue.jpg",
  },
  {
    id: 24,
    name: "George",
    color: "Brown",
    specialSkill:
      "Participates in karaoke but does not force others to go out to karaoke.",
    type: "dog",
    imageUrl:
      "https://static01.nyt.com/images/2019/06/17/science/17DOGS/17DOGS-articleLarge.jpg?quality=75&auto=webp&disable=upscale",
  },
  {
    id: 25,
    name: "Salem",
    color: "Red",
    specialSkill: "Knows the words to 4 rap songs.",
    type: "cat",
    imageUrl:
      "https://www.balisafarimarinepark.com/wp-content/uploads/2019/03/What-animals-belong-to-the-cat-family-600x400.jpg?p=8636",
  },
  {
    id: 26,
    name: "Bubba",
    color: "Yellow",
    specialSkill: "Cleans himself.",
    type: "dog",
    imageUrl:
      "https://www.thetrendywhippet.co.uk/wp-content/uploads/2016/11/IMG_1651-600x400.jpg",
  },
  {
    id: 27,
    name: "Chloe",
    color: "Green",
    specialSkill: "Admits he is wrong",
    type: "dino",
    imageUrl:
      "https://assets.creationmuseum.org/img/pages/1703-DinoDen-TwoCard.jpg",
  },
  {
    id: 28,
    name: "Nala",
    color: "Purple",
    specialSkill: "Dances when he has to.",
    type: "cat",
    imageUrl:
      "https://static01.nyt.com/images/2019/09/04/business/04chinaclone-01/merlin_160087014_de761d9a-4360-402d-a15b-ddeff775760d-articleLarge.jpg?quality=75&auto=webp&disable=upscale",
  },
  {
    id: 29,
    name: "Oscar",
    color: "Green",
    specialSkill:
      "Gives hugs with appropriate pressure and for the right length of time.",
    type: "cat",
    imageUrl: "http://img.izismile.com/img/img2/20090219/cats_02.jpg",
  },
  {
    id: 30,
    name: "Lucy",
    color: "Red",
    specialSkill: "Doesn’t get weirded out by the word “moist.”",
    type: "dino",
    imageUrl:
      "https://st.depositphotos.com/1829921/4920/i/450/depositphotos_49200069-stock-photo-realistic-model-of-dinosaur-tyrannosaurus.jpg",
  },
];

//function to render selected cards to dom

const renderToDom = (divId, htmlToRender) => {
  const selectedDiv = document.querySelector(divId);
  selectedDiv.innerHTML = htmlToRender;
};

const cardSelect = (array) => {
  let domString = "";
  for (const pet of array) {
    domString += `<div class="card" style="width: 18rem;"><h2>${pet.name}</h2>
    <img src="${pet.imageUrl}" class="card-img-top" alt="${pet.name}">
    <div class="card-body">
      <p class="card-text">${pet.color}</p>
      <p class="card-text">${pet.specialSkill}</p>
    </div>
    <div class="card-body">${pet.type}</div>
    <button type="button" class="btn" id="delete--${pet.id}">Delete</button>
  </div>`;
  }
  renderToDom("#cardTarget", domString);
};

// filter pets by type using type buttons
const filter = (array, petType) => {
  const petArray = [];

  for (const pet of array) {
    if (pet.type === petType) {
      petArray.push(pet);
    }
  }
  return petArray;
};

const showCats = document.querySelector("#cats");
const showDogs = document.querySelector("#dogs");
const showDinos = document.querySelector("#dinos");
const showAll = document.querySelector("#allPets");

showCats.addEventListener("click", () => {
  const cats = filter(pets, "cat");
  cardSelect(cats);
});

showDogs.addEventListener("click", () => {
  const dogs = filter(pets, "dog");
  cardSelect(dogs);
});

showDinos.addEventListener("click", () => {
  const dinos = filter(pets, "dino");
  cardSelect(dinos);
});

showAll.addEventListener("click", () => {
  cardSelect(pets);
});

//create new pet using form

const createPet = (event) => {
  event.preventDefault();

  const name = document.querySelector("#name");
  const color = document.querySelector("#color");
  const specialSkill = document.querySelector("#skill");
  const type = document.querySelector("#type");
  const imageUrl = document.querySelector("#image");

  const newPet = {
    id: pets.length + 1,
    name: name.value,
    color: color.value,
    specialSkill: specialSkill.value,
    type: type.value,
    imageUrl: imageUrl.value,
  };

  pets.push(newPet);
  console.log(pets);
  cardSelect(pets);
};

const addPet = document.querySelector("#submit");
addPet.addEventListener("click", createPet);


//deleting card 

cardTarget.addEventListener ("click", (event) => {
  if (event.target.id.includes("delete")){
  
  const [trash, petId] = event.target.id.split("--");
  
  const petIndex = pets.findIndex((obj) => obj.id === Number(petId));
  pets.splice(petIndex, 1);
  
  cardSelect(pets);
  
  }
  });
  
//default to all pets card view on load

  const defaultView = () => {
  cardSelect(pets);
  };

defaultView(pets);
