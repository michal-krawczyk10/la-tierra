const images = [
	{
		setId: 1,
		setName: "animals",
		setDesc: "portraits of our distant relatives",
		exampleImg:
			"https://github.com/michal-krawczyk10/mi-calles/blob/master/src/assets/img/animals/P1510716.jpg?raw=true",
		pics: [
			{
				imgId: 1001,
				imgUrl:
					"https://github.com/michal-krawczyk10/mi-calles/blob/master/src/assets/img/animals/P1020650.jpg?raw=true",
				imgDesc: "highland cow",
				imgLocal: "Scotland",
			},
			{
				imgId: 1002,
				imgUrl:
					"https://github.com/michal-krawczyk10/mi-calles/blob/master/src/assets/img/animals/038.jpg?raw=true",
				imgDesc: "toucan",
				imgLocal: "Brazil",
			},
			{
				imgId: 1003,
				imgUrl:
					"https://github.com/michal-krawczyk10/mi-calles/blob/master/src/assets/img/animals/P1210773.jpg?raw=true",
				imgDesc: "magellanic penguin",
				imgLocal: "Chile",
			},
			{
				imgId: 1004,
				imgUrl:
					"https://github.com/michal-krawczyk10/mi-calles/blob/master/src/assets/img/animals/P1300936.jpg?raw=true",
				imgDesc: "monkey",
				imgLocal: "Bolivia",
			},
			{
				imgId: 1005,
				imgUrl:
					"https://github.com/michal-krawczyk10/mi-calles/blob/master/src/assets/img/animals/P1310437.jpg?raw=true",
				imgDesc: "llamas",
				imgLocal: "Bolivia",
			},
			{
				imgId: 1006,
				imgUrl:
					"https://github.com/michal-krawczyk10/mi-calles/blob/master/src/assets/img/animals/P1390286.jpg?raw=true",
				imgDesc: "sea lion",
				imgLocal: "Peru",
			},
			{
				imgId: 1007,
				imgUrl:
					"https://github.com/michal-krawczyk10/mi-calles/blob/master/src/assets/img/animals/P1400356.jpg?raw=true",
				imgDesc: "horse",
				imgLocal: "Colombia",
			},
			{
				imgId: 1007,
				imgUrl:
					"https://github.com/michal-krawczyk10/mi-calles/blob/master/src/assets/img/animals/P1510716.jpg?raw=true",
				imgDesc: "cat",
				imgLocal: "Croatia",
			},
		],
	},
	{
		setId: 2,
		setName: "landscapes",
		setDesc: "beauty of our planet",
		exampleImg:
			"https://github.com/michal-krawczyk10/mi-calles/blob/master/src/assets/img/landscapes/P1380109.jpg?raw=true",
		pics: [
			{
				imgId: 2001,
				imgUrl:
					"https://github.com/michal-krawczyk10/mi-calles/blob/master/src/assets/img/landscapes/P1380109.jpg?raw=true",
				imgDesc: "Salkantay Trail",
				imgLocal: "Peru",
			},
			{
				imgId: 2002,
				imgUrl:
					"https://github.com/michal-krawczyk10/mi-calles/blob/master/src/assets/img/landscapes/1.jpg?raw=true",
				imgDesc: "Iguaçu Falls",
				imgLocal: "Brazil / Argentina",
			},
		],
	},
	{
		setId: 3,
		setName: "people",
		setDesc: "test set description 3",
		exampleImg:
			"https://raw.githubusercontent.com/michal-krawczyk10/mi-calles/master/src/assets/img/2/P1520463.jpg",
		pics: [
			{
				imgId: 3001,
				imgUrl:
					"https://raw.githubusercontent.com/michal-krawczyk10/mi-calles/master/src/assets/img/2/P1520463.jpg",
				imgDesc: "test pic 3001",
				imgLocal: "test local 3001",
			},
			{
				imgId: 3002,
				imgUrl:
					"https://github.com/michal-krawczyk10/mi-calles/blob/master/src/assets/img/2/P1520465.jpg?raw=true",
				imgDesc: "test pic 3002",
				imgLocal: "test local 3002",
			},
		],
	},
	{
		setId: 4,
		setName: "cities",
		setDesc: "test set description 4",
		exampleImg:
			"https://raw.githubusercontent.com/michal-krawczyk10/mi-calles/master/src/assets/img/2/P1520463.jpg",
		pics: [
			{
				imgId: 4001,
				imgUrl:
					"https://raw.githubusercontent.com/michal-krawczyk10/mi-calles/master/src/assets/img/2/P1520463.jpg",
				imgDesc: "test pic 4001",
				imgLocal: "test local 4001",
			},
			{
				imgId: 4002,
				imgUrl:
					"https://github.com/michal-krawczyk10/mi-calles/blob/master/src/assets/img/2/P1520465.jpg?raw=true",
				imgDesc: "test pic 4002",
				imgLocal: "test local 4002",
			},
		],
	},

	// TEMPLATE
	// {
	// 	setId: "",
	// 	setName: "",
	//  setDesc: "",
	// 	exampleImg: "",

	// 	pics: [
	// 		{
	// 			imgId: "",
	// 			imgUrl: "",
	// 			imgDesc: "",
	// 			imgLocal: "",
	// 		},
	// 	],
	// },
];

const randomSet = images[Math.floor(Math.random() * images.length)];
const randomPics = randomSet.pics;
const randomImg = randomPics[Math.floor(Math.random() * randomPics.length)];

// const randomImg = random

// const sets =
export { randomImg };
export { images };

// export { sets };
