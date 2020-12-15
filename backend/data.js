import bcrypt from 'bcryptjs';

const data = {
    users: [
        {
       name: 'Jessica Clarice',
       email: 'HBIC@inCharge.org',
       password: bcrypt.hashSync('myPassword1234', 8),
       isAdmin: true
        },
        {
        name: 'SuperUSer',
        email: 'superUser@user.shop',
        password: bcrypt.hashSync('userPassWord1234', 8),
        isAdmin: false
        }

    ],

    albums: [
        {
            
            artists:'Ween',
            AlbumTitle:'The Pod',
            Genre:'Psychedelic',
            copiesOnHand:'20',
            AlbumRelease:'1991-09-20',
            AlbumCost:'8',
            TrackAmount:'23',
            ProducerFName:'Dean and Gene',
            ProducerLName:'Ween',
            InPrint:true,
            image:'/images/Covers/ThePod.jpeg',
            rating:'5.0',
            numReviews:'0'
        },
        {
         
            artists:'Brian Eno',
            AlbumTitle:'Taking Tiger Mountain(By Strategy)',
            Genre:'Experimental',
            copiesOnHand:'15',
            AlbumRelease:'1974-11-01',
            AlbumCost:'9',
            TrackAmount:'10',
            ProducerFName:'Brian',
            ProducerLName:'Eno',
            InPrint:true,
            image:'/images/Covers/TakingTigerMountain.jpg',
            rating:'5.0',
            numReviews:'6'
        },
        {
         
            artists:'Frank Zappa',
            AlbumTitle:'Lumpy Gravy',
            Genre:'Experimental',
            copiesOnHand:'5',
            AlbumRelease:'1967-08-07',
            AlbumCost:'5',
            TrackAmount:'10',
            ProducerFName:'Frank',
            ProducerLName:'Zappa',
            InPrint:true,
            image:'/images/Covers/LumpyGravy.jpg',
            rating:'3.5',
            numReviews:'0'
        },
        {
         
            artists:'Patricia Taxxon',
            AlbumTitle:'Astral',
            Genre:'Ambient',
            copiesOnHand:'8',
            AlbumRelease:'2019-01-26',
            AlbumCost:'2',
            TrackAmount:'7',
            ProducerFName:'Patricia',
            ProducerLName:'Taxxon',
            InPrint:true,
            image:'/images/Covers/Astral.jpg',
            rating:'1.0',
            numReviews:'0'
        },
        {
          
            artists:'Syd Barrett',
            AlbumTitle:'Barrett',
            Genre:'Rock',
            copiesOnHand:'3',
            AlbumRelease:'1970-11-14',
            AlbumCost:'6',
            TrackAmount:'11',
            ProducerFName:'David',
            ProducerLName:'Gilmour',
            InPrint:false,
            image:'/images/Covers/Barrett.jpg',
            rating:'5.0',
            numReviews:'0'
        },
        {
       
            artists:'Miles Davis',
            AlbumTitle:'On the Corner',
            Genre:'Experimental',
            copiesOnHand:'18',
            AlbumRelease:'1972-10-11',
            AlbumCost:'10',
            TrackAmount:'4',
            ProducerFName:'Ted',
            ProducerLName:'Macero',
            InPrint:true,
            image:'/images/Covers/OnTheCorner.jpg',
            rating:'4.0',
            numReviews:'0'
        },
        {
         
            artists:'Ween',
            AlbumTitle:'Pure Guava',
            Genre:'Rock',
            copiesOnHand:'12',
            AlbumRelease:'1992-11-10',
            AlbumCost:'6',
            TrackAmount:'19',
            ProducerFName:'Dean and Gene',
            ProducerLName:'Ween',
            InPrint:true,
            image:'/images/Covers/PureGuava.jpg',
            rating:'5.0',
            numReviews:'0'
        },
        {
        
            artists:'Blur',
            AlbumTitle:'Think Tank',
            Genre:'Rock',
            copiesOnHand:'10',
            AlbumRelease:'2003-05-05',
            AlbumCost:'10',
            TrackAmount:'13',
            ProducerFName:'William',
            ProducerLName:'Orbit',
            InPrint:true,
            image:'/images/Covers/ThinkTank.jpg',
            rating:'5.0',
            numReviews:'99'
        },
        {
        
            artists:'Patricia Taxxon',
            AlbumTitle:'Cicada',
            Genre:'Ambient',
            copiesOnHand:'3',
            AlbumRelease:'2017-12-15',
            AlbumCost:'5',
            TrackAmount:'7',
            ProducerFName:'Patricia',
            ProducerLName:'Taxxon',
            InPrint:true,
            image:'/images/Covers/Cicada.jpg',
            rating:'5.0',
            numReviews:'0'
        },
        {
          
            artists:'King Gizzard and the Wizard Lizard',
            AlbumTitle:'Flying Microtonal Bananna',
            Genre:'Experimental',
            copiesOnHand:'3',
            AlbumRelease:'2017-02-24',
            AlbumCost:'5',
            TrackAmount:'9',
            ProducerFName:'Stu',
            ProducerLName:'Mackenzie',
            InPrint:true,
            image:'/images/Covers/FlyingMicrotonalBanana.jpg',
            rating:'5.0',
            numReviews:'0'
        },
        {
         
            artists:'David Bowie',
            AlbumTitle:'Station to Station',
            Genre:'Multi',
            copiesOnHand:'7',
            AlbumRelease:'1967-01-23',
            AlbumCost:'6',
            TrackAmount:'6',
            ProducerFName:'Harry',
            ProducerLName:'Maslin',
            InPrint:true,
            image:'/images/Covers/StationToStation.jpg',
            rating:'5.0',
            numReviews:'33'
        },
        {
         
            artists:'Bjork',
            AlbumTitle:'Debut',
            Genre:'Multi',
            copiesOnHand:'16',
            AlbumRelease:'1993-07-05',
            AlbumCost:'9',
            TrackAmount:'11',
            ProducerFName:'Nellee',
            ProducerLName:'Hooper',
            InPrint:true,
            image:'/images/Covers/Debut.jpg',
            rating:'3.5',
            numReviews:'3'
        },
        {
        
            artists:'Bjork',
            AlbumTitle:'Post',
            Genre:'Multi',
            copiesOnHand:'14',
            AlbumRelease:'1995-06-13',
            AlbumCost:'11',
            TrackAmount:'11',
            ProducerFName:'Bjork',
            ProducerLName:'Guðmundsdóttir',
            InPrint:true,
            image:'/images/Covers/Post.png',
            rating:'4.5',
            numReviews:'0'
        },
        {
         
            artists:'Kanye West',
            AlbumTitle:'Life of Pablo',
            Genre:'Hip Hop',
            copiesOnHand:'6',
            AlbumRelease:'2016-02-14',
            AlbumCost:'15',
            TrackAmount:'20',
            ProducerFName:'Kanye',
            ProducerLName:'West',
            InPrint:true,
            image:'/images/Covers/LifeOfPablo.jpg',
            rating:'4.0',
            numReviews:'0'
        },
        {
       
            artists:'Kanye West',
            AlbumTitle:'808s and Heartbreak',
            Genre:'Hip Hop',
            copiesOnHand:'0',
            AlbumRelease:'2008-11-24',
            AlbumCost:'13',
            TrackAmount:'12',
            ProducerFName:'Kanye',
            ProducerLName:'West',
            InPrint:true,
            image:'/images/Covers/808sAndHeatbreak.jpg',
            rating:'3.5',
            numReviews:'0'
        },
        {
        
            artists:'Pink Floyd',
            AlbumTitle:'Meddle',
            Genre:'Psychedelic',
            copiesOnHand:'18',
            AlbumRelease:'1971-10-31',
            AlbumCost:'4',
            TrackAmount:'6',
            ProducerFName:'Pink',
            ProducerLName:'Floyd',
            InPrint:true,
            image:'/images/Covers/Meddle.jpg',
            rating:'4.0',
            numReviews:'0'
        },
        {
         
            artists:'Pink Floyd',
            AlbumTitle:'Piper at the Gates of Dawn',
            Genre:'Psychedelic',
            copiesOnHand:'8',
            AlbumRelease:'1967-08-04',
            AlbumCost:'11',
            TrackAmount:'11',
            ProducerFName:'Norman',
            ProducerLName:'Smith',
            InPrint:true,
            image:'/images/Covers/PiperAtTheGatesOfDawn.jpg',
            rating:'5.0',
            numReviews:'0'
        },
        {
          
            artists:'Gorillaz',
            AlbumTitle:'Demon Days',
            Genre:'Multi',
            copiesOnHand:'4',
            AlbumRelease:'2005-05-15',
            AlbumCost:'7.99',
            TrackAmount:'16',
            ProducerFName:'Danger',
            ProducerLName:'Mouse',
            InPrint:true,
            image:'/images/Covers/DemonDays.jpg',
            rating:'2.5',
            numReviews:'0'
        },
        {
       
            artists:'Gorillaz',
            AlbumTitle:'D Sides',
            Genre:'Multi',
            copiesOnHand:'3',
            AlbumRelease:'2007-11-19',
            AlbumCost:'8.99',
            TrackAmount:'11',
            ProducerFName:'Danger',
            ProducerLName:'Mouse',
            InPrint:true,
            image:'/images/Covers/D-sides.jpg',
            rating:'3.5',
            numReviews:'0'
        },
        {
          
            artists:'Frank Zappa',
            AlbumTitle:'One Size Fits All',
            Genre:'Multi',
            copiesOnHand:'12',
            AlbumRelease:'1975-05-25',
            AlbumCost:'12',
            TrackAmount:'9',
            ProducerFName:'Frank',
            ProducerLName:'Zappa',
            InPrint:false,
            image:'/images/Covers/OneSizeFitsAll.jpg',
            rating:'3.5',
            numReviews:'0'
        },
        {
    
            artists:'Radiohead',
            AlbumTitle:'Ok Computer',
            Genre:'Experimental',
            copiesOnHand:'20',
            AlbumRelease:'1997-06-16',
            AlbumCost:'10.99',
            TrackAmount:'12',
            ProducerFName:'Nigel',
            ProducerLName:'Godrich',
            InPrint:true,
            image:'/images/Covers/OkComputer.jpg',
            rating:'5.0',
            numReviews:'0'
        },
        {
       
            artists:'Radiohead',
            AlbumTitle:'King of Limbs',
            Genre:'Country',
            copiesOnHand:'9',
            AlbumRelease:'2011-02-18',
            AlbumCost:'3.99',
            TrackAmount:'8',
            ProducerFName:'Nigel',
            ProducerLName:'Godrich',
            InPrint:false,
            image:'/images/Covers/KingOfLimbs.jpg',
            rating:'4.5',
            numReviews:'0'
        },
        {
       
            artists:'Todd Rundgren',
            AlbumTitle:'A Wizard, A True Star',
            Genre:'Rock',
            copiesOnHand:'2',
            AlbumRelease:'1973-03-02',
            AlbumCost:'7.99',
            TrackAmount:'19',
            ProducerFName:'Todd',
            ProducerLName:'Rundgren',
            InPrint:true,
            image:'/images/Covers/AWizardATrueStar.jpg',
            rating:'5.0',
            numReviews:'0'
        },
        {
         
            artists:'Todd Rundgren',
            AlbumTitle:'Faithful',
            Genre:'Rock',
            copiesOnHand:'5',
            AlbumRelease:'1976-04-01',
            AlbumCost:'13.99',
            TrackAmount:'12',
            ProducerFName:'Todd',
            ProducerLName:'Rundgren',
            InPrint:true,
            image:'/images/Covers/Faithful.jpg',
            rating:'3.0',
            numReviews:'0'
        },
        {
      
            artists:'Roxy Music',
            AlbumTitle:'Roxy Music',
            Genre:'Experimental',
            copiesOnHand:'1',
            AlbumRelease:'1972-06-16',
            AlbumCost:'7.99',
            TrackAmount:'9',
            ProducerFName:'Roxy',
            ProducerLName:'Music',
            InPrint:true,
            image:'/images/Covers/RoxyMusic.jpg',
            rating:'5.0',
            numReviews:'0'
        },
        {
        
            artists:'Roxy Music',
            AlbumTitle:'For Your Pleasure',
            Genre:'Experimental',
            copiesOnHand:'4',
            AlbumRelease:'1972-03-23',
            AlbumCost:'12.99',
            TrackAmount:'8',
            ProducerFName:'Roxy',
            ProducerLName:'Music',
            InPrint:true,
            image:'/images/Covers/ForYourPleasure.jpg',
            rating:'4.0',
            numReviews:'0'
        },
        {
          
            artists:'Scott Walker',
            AlbumTitle:'Scott 4',
            Genre:'Soul',
            copiesOnHand:'7',
            AlbumRelease:'1969-11-01',
            AlbumCost:'4.99',
            TrackAmount:'10',
            ProducerFName:'John',
            ProducerLName:'Franz',
            InPrint:true,
            image:'/images/Covers/Scott4.jpg',
            rating:'4.0',
            numReviews:'12'
        },
        {
    
            artists:'Scott Walker',
            AlbumTitle:'Nite Flights',
            Genre:'Experimental',
            copiesOnHand:'0',
            AlbumRelease:'1978-07-01',
            AlbumCost:'12.99',
            TrackAmount:'10',
            ProducerFName:'Scott',
            ProducerLName:'Walker',
            InPrint:true,
            image:'/images/Covers/NiteFlights.jpeg',
            rating:'2.5',
            numReviews:'0'
        },
        {
        
            artists:'Can',
            AlbumTitle:'Tago Mago',
            Genre:'Experimental',
            copiesOnHand:'0',
            AlbumRelease:'1971-02-01',
            AlbumCost:'6.99',
            TrackAmount:'7',
            ProducerFName:'The band',
            ProducerLName:'CAN',
            InPrint:true,
            image:'/images/Covers/TagoMago.jpg',
            rating:'2.5',
            numReviews:'12'
        },
        {
        
            artists:'Can',
            AlbumTitle:'Ege Bamyasi',
            Genre:'Experimental',
            copiesOnHand:'14',
            AlbumRelease:'1972-11-01',
            AlbumCost:'11.99',
            TrackAmount:'7',
            ProducerFName:'The band',
            ProducerLName:'CAN',
            InPrint:true,
            image:'/images/Covers/EgeBamyasi.jpg',
            rating:'3.5',
            numReviews:'2'
        },
        {
          
            artists:'Blur',
            AlbumTitle:'13',
            Genre:'Rock',
            copiesOnHand:'19',
            AlbumRelease:'1999-03-15',
            AlbumCost:'19.99',
            TrackAmount:'13',
            ProducerFName:'William',
            ProducerLName:'Orbit',
            InPrint:true,
            image:'/images/Covers/13.jpg',
            rating:'4.0',
            numReviews:'3'
        },
        {
            
            artists:'The Talking Heads',
            AlbumTitle:'Fear of Music',
            Genre:'Funk',
            copiesOnHand:'16',
            AlbumRelease:'1979-08-03',
            AlbumCost:'5.99',
            TrackAmount:'11',
            ProducerFName:'Brian',
            ProducerLName:'Eno',
            InPrint:true,
            image:'/images/Covers/FearofMusic.jpg',
            rating:'3.5',
            numReviews:'0'
        },
        {
          
            artists:'The Talking Heads',
            AlbumTitle:'Remain in Light',
            Genre:'Experimental',
            copiesOnHand:'11',
            AlbumRelease:'1980-10-08',
            AlbumCost:'11',
            TrackAmount:'8',
            ProducerFName:'Brian',
            ProducerLName:'Eno',
            InPrint:true,
            image:'/images/Covers/RemainInLight.jpg',
            rating:'2.5',
            numReviews:'0'
        },
        {
           
            artists:'Janes Addiction',
            AlbumTitle:'Nothings Shocking',
            Genre:'Rock',
            copiesOnHand:'4',
            AlbumRelease:'1988-08-23',
            AlbumCost:'7.99',
            TrackAmount:'11',
            ProducerFName:'Dave',
            ProducerLName:'Jerden',
            InPrint:true,
            image:'/images/Covers/NothingsShocking.jpg',
            rating:'3.5',
            numReviews:'0'
        },
        {
         
            artists:'Janes Addiction',
            AlbumTitle:'Ritual de la Habitual',
            Genre:'Rock',
            copiesOnHand:'16',
            AlbumRelease:'1990-08-21',
            AlbumCost:'10.99',
            TrackAmount:'9',
            ProducerFName:'Dave',
            ProducerLName:'Jerden',
            InPrint:true,
            image:'/images/Covers/RitualDeLaHabitual.jfif',
            rating:'2.5',
            numReviews:'0'
        },
        {
         
            artists:'Show is the Rainbow',
            AlbumTitle:'Aw Nutz',
            Genre:'Experimental',
            copiesOnHand:'9',
            AlbumRelease:'2018-03-03',
            AlbumCost:'8',
            TrackAmount:'9',
            ProducerFName:'Darren',
            ProducerLName:'Keen',
            InPrint:false,
            image:'/images/Covers/AwNutz.jpg',
            rating:'5.0',
            numReviews:'0'
        },
        {
          
            artists:'Syd Barrett',
            AlbumTitle:'The Madcap Laughs',
            Genre:'Psychedelic',
            copiesOnHand:'11',
            AlbumRelease:'1970-01-03',
            AlbumCost:'9',
            TrackAmount:'13',
            ProducerFName:'David',
            ProducerLName:'Gilmour',
            InPrint:true,
            image:'/images/Covers/MadcapLaughs.jpg',
            rating:'5.0',
            numReviews:'0'
        },
        {
          
            artists:'Brian Eno',
            AlbumTitle:'Another Green World',
            Genre:'Experimental',
            copiesOnHand:'20',
            AlbumRelease:'1975-09-01',
            AlbumCost:'10',
            TrackAmount:'14',
            ProducerFName:'Brian',
            ProducerLName:'Eno',
            InPrint:true,
            image:'/images/Covers/AnotherGreenWorld.jpg',
            rating:'3.5',
            numReviews:'44'
        },
        {
          
            artists:'David Bowie',
            AlbumTitle:'Low',
            Genre:'Rock',
            copiesOnHand:'11',
            AlbumRelease:'1977-01-14',
            AlbumCost:'10',
            TrackAmount:'10',
            ProducerFName:'Tony',
            ProducerLName:'Visconti',
            InPrint:true,
            image:'/images/Covers/Low.jpg',
            rating:'5.0',
            numReviews:'2'
        },
        {
           
            artists:'Miles Davis',
            AlbumTitle:'Bitches Brew',
            Genre:'Jazz',
            copiesOnHand:'17',
            AlbumRelease:'1970-03-30',
            AlbumCost:'10',
            TrackAmount:'6',
            ProducerFName:'Teo',
            ProducerLName:'Macero',
            InPrint:true,
            image:'/images/Covers/BitchesBrew.jpg',
            rating:'4.0',
            numReviews:'5'
        },
        {
            
            artists:'King Gizzard and the Wizard Lizard',
            AlbumTitle:'Nonagon Infinity',
            Genre:'Rock',
            copiesOnHand:'13',
            AlbumRelease:'2016-04-29',
            AlbumCost:'15',
            TrackAmount:'9',
            ProducerFName:'Wayne',
            ProducerLName:'Gordon',
            InPrint:true,
            image:'/images/Covers/NonagonInfinity.jpg',
            rating:'3.0',
            numReviews:'4'
        },

    ],
};

export default data;
