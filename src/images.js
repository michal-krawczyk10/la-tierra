const images = [
	{
		setID: 1,
		setName: "",
		exampleImage:
			"https://raw.githubusercontent.com/michal-krawczyk10/mi-calles/master/src/assets/img/1/P1520447.jpg",
		pics: [
			{
				imgId: 1001,
				imgUrl:
					"https://raw.githubusercontent.com/michal-krawczyk10/mi-calles/master/src/assets/img/1/P1520447.jpg",
				imgDesc: "test pic",
				imgLocal: "test local",
			},
			{
				imgId: 1002,
				imgUrl:
					"https://raw.githubusercontent.com/michal-krawczyk10/mi-calles/master/src/assets/img/1/P1520452.jpg",
				imgDesc: "test pic",
				imgLocal: "test local",
			},
			{
				imgId: 1003,
				imgUrl:
					"https://raw.githubusercontent.com/michal-krawczyk10/mi-calles/master/src/assets/img/1/P1520455.jpg",
				imgDesc: "test pic",
				imgLocal: "test local",
			},
		],
	},
	{
		setID: 2,
		setName: "test set Name",
		exampleImage:
			"https://raw.githubusercontent.com/michal-krawczyk10/mi-calles/master/src/assets/img/2/P1520463.jpg",
		pics: [
			{
				imgId: 2001,
				imgUrl:
					"https://raw.githubusercontent.com/michal-krawczyk10/mi-calles/master/src/assets/img/2/P1520463.jpg",
				imgDesc: "test pic",
				imgLocal: "test local",
			},
			{
				imgId: 2002,
				imgUrl:
					"https://github.com/michal-krawczyk10/mi-calles/blob/master/src/assets/img/2/P1520465.jpg?raw=true",
				imgDesc: "test pic",
				imgLocal: "test local",
			},
		],
	},

	// TEMPLATE
	// {
	// 	setID: "",
	// 	setName: "",
	// 	exampleImage: "",

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

export { randomImg };
export { images };
