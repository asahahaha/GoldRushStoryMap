//GEOG 384 - Assignment #1 - Fall 2022

var config = {
    style: 'mapbox://styles/essstherc/cl8sx5ndb006r15qlrn0srtrw',
    accessToken: 'pk.eyJ1IjoiZXNzc3RoZXJjIiwiYSI6ImNsN2pka2tsMzA4c3c0Mm9iZGxrbmI1d2gifQ.STj4zgpL2uKJ1GH325OGCQ',
    showMarkers: true,
    markerColor: '#000',
    theme: 'dark',
    use3dTerrain: false, //set true for enabling 3D maps.

    /*
    // Title, subtitle, and description elements were coded into a custom cover page in index.html
    title: 'The California Gold Rush',
    subtitle: 'An interactive map of key events throughout the California gold rush-an event that brought thousands of Chinese immigrants to the United States.',
    byline: 'By Elias Cohen, Joy Zhou, Keyu Wang, and Yanbing Chen',
    */
    footer: 'Source: “Background on the California Gold Rush.” Gold Rush: Background, https://web.archive.org/web/20080513205758/http://www.isu.edu/~trinmich/prback.html.<br/>\
    Bureau, US Census. “Census Publications.” Census.gov, 12 Sept. 2022, https://www.census.gov/library/publications.html. <br/>\
    “California Gold Rush, 1848-1864.” Learncalifornia.org - California Gold Rush, 1848-1864, 27 July 2011, https://web.archive.org/web/20110727033216/http://www.learncalifornia.org/doc.asp?id=118. <br/>\
    “California Gold Rush.” Encyclopædia Britannica, Encyclopædia Britannica, Inc., https://www.britannica.com/topic/California-Gold-Rush.<br/>\
    “Chinatown | the Story of Chinatown.” PBS, Public Broadcasting Service, https://www.pbs.org/kqed/chinatown/resourceguide/story.html#:~:text=In%201853%20the%20neighborhood%20was,fresh%20fruits%2C%20vegetables%20and%20flowers.<br/>\
    “Chinese Immigrants and the Gold Rush.” PBS, Public Broadcasting Service, https://www.pbs.org/wgbh/americanexperience/features/goldrush-chinese-immigrants/. <br/>\
    Kennedy, Lesley. “Building the Transcontinental Railroad: How 20,000 Chinese Immigrants Made It Happen.” History.com, A&E Television Networks, 10 May 2019, https://www.history.com/news/transcontinental-railroad-chinese-immigrants. <br/>\
    “Searching for the Gold Mountain  :  Chinese  :  Immigration and Relocation in U.S. History  :  Classroom Materials at the Library of Congress  :  Library of Congress.” The Library of Congress, https://www.loc.gov/classroom-materials/immigration/chinese/searching-for-the-gold-mountain/. <br/>\
    yaleartgallery. “In Search of Gold Mountain: Chinese Immigration and the California Gold Rush.” YouTube, YouTube, 4 Apr. 2022, https://www.youtube.com/watch?v=xWD1eBnl6Lg&t=838s.<br/>\
    ',
    chapters: [
        {
            // Starting point for the map
            id: 'start',
            hidden: true,
            location: {
                center: [-178.76466356370162, 35.412345542013995],
                zoom: 1.5,
                pitch: 0.0,
                bearing: 0.0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            // Sutter's Mill - the first location of found gold
            id: 'sutters-mill',
            alignment: 'left',
            hidden: false,
            title: '1848: Discovery of gold at Sutter\'s Mill',
            image: 'https://neogeoweb.ca/group4/Assignment_1/images/cover.jpg',
            description: 'On January 24, 1848, James Marshall found flakes of gold in the American River while working for John Sutter at his ranch in northern California. The two men tried to keep the discovery quiet, but it was soon leaked and news quickly spread that there was gold in the river, thus, sparking the great Gold Rush.',
            location: {
                center: [-120.8942, 38.7968],
                zoom: 12.0,
                pitch: 75.00,
                bearing: 25.00,
                speed: 0.5
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'forty-niners',
            alignment: 'right',
            hidden: false,
            title: '1849: Prospective miners begin westward move',
            image: 'https://neogeoweb.ca/group4/Assignment_1/images/49.jpg',
            description: 'As news spread that gold was in California, thousands of people (the majority of which were men) sought to travel there from all across America and the world. These gold-seekers were named the "forty-niners", after the year that they ventured out to the west coast. Of those who traveled across the continent, many people died from accidents, cholera, fever, and malnourishment. Approximately 1 in every 5 miners who traveled to California was dead within 6 months, and few of the survivors ended up extremely rich.',
            location: {
                center: [-94.7241, 	39.8507],
                zoom: 8.0,
                pitch: 72.5, // goes down from zenith of 0 degrees--75 degrees from it
                bearing: 135.0, // negative makes it rotate in opposite direction
                // flyTo and easeTo additional controls-
                // The two options below control the flight curve, making it move
                // slowly and zoom out almost completely before starting
                // to pan.
                    speed: 2, // make the flying slow
                    curve: 1, // change the speed at which it zooms out
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'oregon-trail',
            alignment: 'left',
            hidden: false,
            title: '1850-1858: Oregon Trail',
            image: '',
            description: '<iframe width="380" height="315" src="https://youtube.com/embed/ceaToIwi-Qk" title="YouTube video player" frameborder="0"'+
            ' allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> <br> The Great Plains allowed caravans a flexible route through the plains of the central United States. Upon reaching Fort Laramie at the border of Nebraska and Wyoming, the wagons had to beginning following a direct trail to navigate increasingly difficult topographies. Fort Laramie is thus considered the start of the “formal” Oregon trail.',
            location: {
                center: [	-104.5571, 42.2034],
                zoom: 6.5,
                pitch: 8.01,
                bearing: 0.00,
                speed: 0.1
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'california-diversion',
            alignment: 'left',
            hidden: false,
            title: "1850-1858: Oregon Trail",
            image: 'https://neogeoweb.ca/group4/Assignment_1/images/oregoncalifornia.jpg',
            description: "Wagons choosing to go to California would divert from the main trunk of the Oregon trail to follow the 'California Trail' along the raft river. This trail would lead to the gold mines of Northeastern California, right around where Sutton Mill was located. The California trail would cross through Nevada and across the Sierra Nevada mountains, unlike the more leisurely Oregon trail leading to Oregon City.",
            location: {
                center: [	-113.2390, 42.6032],
                zoom: 6.5,
                pitch: 8.01,
                bearing: 0.00,
                speed: 0.1
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'sacramento',
            alignment: 'left',
            hidden: false,
            title: '1850-1858: Oregon Trail',
            image: 'https://neogeoweb.ca/group4/Assignment_1/images/sacramento.jpg',
            description: 'Sacramento is considered to be the informal end of the california trail. This was the ending point for countless 49’ers who found gold fields in the surrounding area. Trips to Sacramento were time-sensitive: the city is bounded by the Sierra Nevada mountains which cannot be traversed past November. The San Francisco-Sacramento area would bloom in population as Europeans and Americans from the East set up camp and built families here.',
            location: {
                center: [-121.4944,38.5816],
                zoom: 6.50,
                pitch: 8.01,
                bearing: 0.00,
                speed: 0.1
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '1848-first-california-gold-to-china',
            alignment: 'left',
            hidden: false,
            title: '1848: First California Gold Arrives in Hong Kong',
            image: 'https://neogeoweb.ca/group4/Assignment_1/images/hongKongHarbour.png',
            description: "Gold leaves the country just as quickly. <br/><br/>In December of 1848, the first California gold arrives in Hong Kong and it's used to pay for a shipment of supplies that are coming from Hong Kong through Hawaii to San Francisco. \
            It's a guy who's working for the Hudson's Bay Company. <br/><br/> On that ship, also comes newspapers, which explain like, \"Hey, in California, they've already dug $4 million worth of gold out of the ground.\" <br/><br/>Just as quickly as news gets over to the West Coast, the Chinese are coming too.",
            location: {
                center: [114.17310, 22.28356],
                zoom: 11.77,
                pitch: 4.01,
                bearing: 0.00,
                speed:0.5
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '1848-pearl-river-delta',
            alignment: 'left',
            hidden: false,
            title: '1848-1849: Chinese Coming to Mine Gold',
            image: 'https://neogeoweb.ca/group4/Assignment_1/images/pearl-river-delta.jpeg',
            description: "Majority of the immigrants who are coming to mine gold from China are from this one area of Guangdong province in China, called the Pearl River Delta.",
            location: {
                center: [113.43319, 23.18251],
                zoom: 6.91,
                pitch: 0.00,
                bearing: 0.00,
                speed:0.5
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            onChapterEnter: [
            ],
            onChapterExit: []
        },
        {
            id: '1850-20percent-chinese-population',
            alignment: 'right',
            hidden: false,
            title: '1850: One Fifth of the Population',
            image: 'https://neogeoweb.ca/group4/Assignment_1/images/custom_house.jpeg',
            description: "Chinese miners tended to live in groups and work claims the Americans had abandoned. \
            In 1852, a year of serious crop failure in southern China, 20,026 Chinese flooded the San Francisco customs house. \
            <br/> The previous year only 2,716 had arrived. \
            <br/><br/>By the end of the 1850s, Chinese immigrants made up 1/5 of the population of the four counties that constituted the Southern Mines.",

            location: {
                center: [-122.40060, 37.79636 ],
                zoom: 18,
                pitch: 60,
                bearing: 20
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            onChapterEnter: [
              {
                // Zoom in on the 3d house
                   layer: 'custom-house-3D',
                   opacity: 1,
                   duration: 5000
               }
            ],
            onChapterExit: [

            ]
        },
        {
            id: 'Chinatown-01',
            alignment: 'right',
            hidden: false,
            title: '1850-1867: From streets to Chinatown',
            image: 'https://neogeoweb.ca/group4/Assignment_1/images/portsmouth-square1851.jpeg',
            description: '<br> At that time hundreds of Chinese strategically chose to locate their laundries, restaurants, and shops close to the center of the city, Portsmouth Square to cater to mining-related needs. They were established on or within a block of the square, and gradually branched out to Dupont and Kearny Streets. ',
            location: {
                center: [-122.4052, 37.7949],
                zoom: 15,
                pitch: 8.01,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            onChapterEnter: [{
                layer: 'Porstmouth Square',
                opacity: 1,
                duration: 5000
            }],
            onChapterExit: []
        },
        {
            id: 'Chinatown-02',
            alignment: 'right',
            hidden: false,
            title: '1850-1867: From streets to Chinatown',
            image: 'https://neogeoweb.ca/group4/Assignment_1/images/chinatown02.jpg',
            description: '<br> <br> As more Chinese immigrated to the United States, this area quickly grew to ten blocks, with California Street, Jackson Street, Stockton Street, Kearney Street, and Pacific Street forming its outermost perimeter. ',
            location: {
                center: [-122.4052, 37.7949],
                zoom: 14,
                pitch: 8.01,
                bearing: 0,
                speed:0.2,
                curve:1
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            onChapterEnter: [{
                layer: 'chinatownstreets',
                opacity: 0.5,
                duration: 5
            }],
            onChapterExit: []
        },
        {
            id: '1850-1867: Chinatown-03',
            alignment: 'left',
            hidden: false,
            title: 'From streets to Chinatown',
            image: 'https://neogeoweb.ca/group4/Assignment_1/images/Chinatown.png',
            description: '<br>In 1853 the neighborhood was given the name "Chinatown" by the press. <br> The atmosphere of early Chinatown was bustling and noisy with brightly colored lanterns, three-cornered yellow silk pennants denoting restaurants, calligraphy on sign boards, flowing costumes, hair in queues and the sound of Cantonese dialects. In this familiar neighborhood the immigrants found the security and solidarity to survive the racial and economic oppression of greater San Francisco.',
            location: {
                center: [-122.4052, 37.7949],
                zoom: 13,
                pitch: 8.01,
                bearing: 0.00,
                speed:0.5
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            onChapterEnter: [],
            onChapterExit: [{
                layer: 'Porstmouth Square',
                opacity: 0.19,
                duration: 5000
            }
        ]
        },
        {
            id: '1850-california-statehood',
            alignment: 'left',
            hidden: false,
            title: '1850: California Statehood',
            image: 'https://neogeoweb.ca/group4/Assignment_1/gifs/Animated_flag_of_California.gif',
            description: "In September, California was admitted as the 31st US state. Its population had skyrocketed to 90,000 people, and it was evident that the two migration routes from China and the East Coast had effected its powerful social, political, and economic influence. The population of California would only get bigger as a newer, safer mode of transportation allowed for a higher amount of migration across land: the railroad.",
            location: {
                center: [-119.98812745996653, 37.3581261218912],
                zoom: 4.0,
                pitch: 8.01,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '1862-omaha-transnational-railway',
            alignment: 'left',
            hidden: false,
            title: '1862: The Transcontinental Railroad is planned in the East',
            description: 'The Union Pacific transcontinental railroad, owned by Union Pacific Company, begins construction in Omaha, Nebraska.',
            image: 'https://neogeoweb.ca/group4/Assignment_1/images/eastern_railway.jpg',
            location: {
                center: [-95.9345, 41.2565],
                zoom: 12.52,
                pitch: 8.01,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '1862-sacramento-transnational-railway',
            alignment: 'left',
            hidden: false,
            title: '1862: The Transcontinental Railroad is planned in the West',
            description: "The Central Pacific Transnational railway, owned by the Central Pacific Company, begins construction in Sacramento, CA. In a joint effort with the Union Pacific Company, they aim to collectively create a 'transcontinental railroad' spanning the distance of the Oregon/California Trail.",
            image: 'https://neogeoweb.ca/group4/Assignment_1/images/Central_Pacific_Railway_Image.jpg',
            location: {
                center: [-121.4944,38.5816],
                zoom: 12.52,
                pitch: 8.01,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '1864-building-transnational-railway-1',
            alignment: 'right',
            hidden: false,
            title: '1864: Hiring Chinese Workers',
            image: 'http://neogeoweb.ca/group4/Assignment_1/images/ChineseWorker.jpeg',
            description: 'According to the Chinese Railroad Workers Project, Central Pacific started with a crew of 21 Chinese workers in January 1864. In January 1865, convinced that Chinese workers were capable, the railroad hired 50 Chinese workers and then 50 more. More Chinese immigrants began arriving in California, and two years later, about 90 percent of the workers were Chinese.',
            location: {
                center: [-121.4944,38.5816],
                zoom: 8.05,
                pitch: 20,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '1864-building-transnational-railway-2',
            alignment: 'center',
            hidden: false,
            title: '1864-1869: Building the Railroad',
            image: 'https://neogeoweb.ca/group4/Assignment_1/images/buildingrailroad.png',
            description: '<br/> A portion of the Sierra Nevada was comprised of cliffs, and the Chinese were frequently assigned the most perilous tasks. The Chinese labourers loaded their comrades with simple straw baskets, lowered the baskets via a pulley system 600 metres above the valley floor, punched holes in the rock, and then planted explosives. As soon as everything was in position, the Chinese workers above swiftly pulled up the ropes and lowered their partners. Chinese workers were frequently hurt by explosives or even died from falling off the cliff. <br/> learn more about <a href="https://www.theguardian.com/artanddesign/2019/jul/18/forgotten-by-society-how-chinese-migrants-built-the-transcontinental-railroad">Chinese workers</a>',
            location: {
                center: [-119.5742, 38.2692],
                zoom: 12.52,
                pitch: 0,
                bearing: 150
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '1864-building-transnational-railway-3',
            alignment: 'right',
            hidden: false,
            title: '1864-1869: Dangerous work',
            description: '<iframe width="380" height="315" src="https://www.youtube.com/embed/OspEUdi4a4g" title="YouTube video player" frameborder="0"'+
            ' allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> <br> The inclement weather also posed a significant threat to the Chinese workers. In the winter, the snow on the mountaintops was so deep that it could even bury the shacks. At night, workers crouched like moles in the tunnels to avoid the cold breeze. Occasionally, a surprise avalanche would swiftly push the entire shed to the mountain\'s base. Their bodies would not be discovered until the snow receded the next year.',
            location: {
                center: [-119.5742, 38.2692],
                zoom: 10,
                pitch: 40,
                bearing: 0.00,
                speed: 0.6
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            onChapterEnter: [],
            onChapterExit: []
        },

        {
            id: '1869-DONE-transnational-railway',
            alignment: 'left',
            hidden: false,
            title: '1869: Transcontinental Railroad Completed',
            image: 'https://neogeoweb.ca/group4/Assignment_1/images/promontory_summit.jpg',
            image: 'https://neogeoweb.ca/group4/Assignment_1/images/Union_Pacific_Railway_Image.jpg',
            description: 'In promontory summit, Utah, the last nail is driven into the ground, joining the two halves of the railroad--the Central Pacfic to the west and the Union Pacific to the East. The revolution of passanger rail had spread across the United States, leading to the decline of the oregon trail and a dramatic increase in migrants from the East.',
            location: {
                center: [-112.5468, 41.6198],
                zoom: 6.5,
                pitch: 8.01,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: '1870-significant-contribution',
            alignment: 'right',
            hidden: false,
            title: 'Significant Contribution',
            image: 'https://neogeoweb.ca/group4/Assignment_1/images/SigContribution.jpeg',
            description: "By 1870 there were 63,000 Chinese in U.S., 77% of whom were in California. <br/>That year, Chinese miners contributed more than $5 million to state's coffers through the Foreign Miners Tax, almost 1/4 of state's revenue.",
            location: {
                center: [-122.40570, 37.79474],
                zoom: 6,
                pitch:0,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: true,
            onChapterEnter: [],
            onChapterExit: []
        },

        {
            id: 'fun-fact',
            alignment: 'center',
            hidden: false,
            title: 'San Francisco today...',
            image: 'https://neogeoweb.ca/group4/Assignment_1/images/jiujinshan.png',
            description: "FUN FACT: Most Chinese translations of American city names are phonetic. The Chinese word for New York sounds very similar to the American way of saying \"New York.\" San Francisco, however, is unique. In Mandarin, it is called Jiu Jin Shan, meaning Old Gold Mountain, in reference to the gold rush!",
            rotateAnimation: true,
            onChapterEnter: [],
            onChapterExit: []
        }

    ]
};
