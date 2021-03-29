const images = [
	{
		setId: 1,
		setName: "test-set-name-1",
		setDesc: "test set description 1",
		exampleImg:
			"https://raw.githubusercontent.com/michal-krawczyk10/mi-calles/master/src/assets/img/1/P1520447.jpg",
		pics: [
			{
				imgId: 1001,
				imgUrl:
					"https://raw.githubusercontent.com/michal-krawczyk10/mi-calles/master/src/assets/img/1/P1520447.jpg",
				imgDesc: "test pic 1001",
				imgLocal: "test local 1001",
			},
			{
				imgId: 1002,
				imgUrl:
					"https://raw.githubusercontent.com/michal-krawczyk10/mi-calles/master/src/assets/img/1/P1520452.jpg",
				imgDesc: "test pic 1002",
				imgLocal: "test local 1002",
			},
			{
				imgId: 1003,
				imgUrl:
					"https://raw.githubusercontent.com/michal-krawczyk10/mi-calles/master/src/assets/img/1/P1520455.jpg",
				imgDesc: "test pic 1003",
				imgLocal: "test local 1003",
			},
		],
	},
	{
		setId: 2,
		setName: "test set name 2",
		setDesc: "test set description 2",
		exampleImg:
			"https://raw.githubusercontent.com/michal-krawczyk10/mi-calles/master/src/assets/img/2/P1520463.jpg",
		pics: [
			{
				imgId: 2001,
				imgUrl:
					"https://raw.githubusercontent.com/michal-krawczyk10/mi-calles/master/src/assets/img/2/P1520463.jpg",
				imgDesc: "test pic 2001",
				imgLocal: "test local 2001",
			},
			{
				imgId: 2002,
				imgUrl:
					"https://github.com/michal-krawczyk10/mi-calles/blob/master/src/assets/img/2/P1520465.jpg?raw=true",
				imgDesc: "test pic 2002",
				imgLocal: "test local 2002",
			},
		],
	},
	{
		setId: 3,
		setName: "test set name 3",
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
		setName: "test set name 4",
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
