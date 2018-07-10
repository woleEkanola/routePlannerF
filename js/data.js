const drivers= [
    {
        name: 'Adamu',
        routes: [
            {
                driver: 'Adamu',
                id: 'adamu1',
                name: 'Addide',
                address: 'Ojaoba  Lagos',
                coords: { lat: 6.5536, lng: 3.3567 },
                iconImage: 'https://firebasestorage.googleapis.com/v0/b/reacttenuapp.appspot.com/o/customer.svg?alt=media&token=cf0a5610-3bf9-4933-83d9-a022aefaffad',
                label: '1'       
               
            },
            {
                driver: 'Adamu',
                id: 'adamu2',
                name: 'Blencho Supermart',
                address: 'Akowonjo Roundabout Lagos',
                coords: { lat: 6.2536, lng: 3.3267 },
                iconImage: 'https://firebasestorage.googleapis.com/v0/b/reacttenuapp.appspot.com/o/customer.svg?alt=media&token=cf0a5610-3bf9-4933-83d9-a022aefaffad',       
               label: '2'
            },
            {
                driver: 'Adamu',
                id: 'adamu3',
                name: 'Ikeja City Mall',
                address: 'Ikeja City Mall Alausa Lagos',
                coords: { lat: 6.8536, lng: 3.4567 },
                iconImage: 'https://firebasestorage.googleapis.com/v0/b/reacttenuapp.appspot.com/o/customer.svg?alt=media&token=cf0a5610-3bf9-4933-83d9-a022aefaffad',       
               label:'3'
            },

        ],
        timeline: [
            {
                start: new Date(0, 0, 0, 8, 30, 0),
                stop: new Date(0, 0, 0, 9, 00, 0)
            },
            {
                start: new Date(0, 0, 0, 9, 20, 0),
                stop: new Date(0, 0, 0, 10, 50, 0)
            },
            {
                start: new Date(0, 0, 0, 11, 10, 0),
                stop: new Date(0, 0, 0, 11, 40, 0)
            },
            {
                start: new Date(0, 0, 0, 12, 00, 0),
                stop: new Date(0, 0, 0, 12, 30, 0)
            },
        ]
        
    },
    {
        name: 'Femi',
        routes: [
            {
                driver:'Femi',
                label: '1',
                id: 'femi1',
                name: 'Shoprite',
                address: 'Ikeja City Mall Alausa Lagos',
                coords: { lat: 6.296, lng: 3.4567 },
                iconImage: 'https://firebasestorage.googleapis.com/v0/b/reacttenuapp.appspot.com/o/distributor.svg?alt=media&token=b4d34434-d10b-4e8a-932d-8e776a7c796f'       
               
            },
            {
                driver:'Femi',
                label: '2',
                id: 'femi2',
                name: 'Agege Market',
                address: 'Agege Lagos',
                coords: { lat: 6.9536, lng: 3.2267 },
                iconImage: 'https://firebasestorage.googleapis.com/v0/b/reacttenuapp.appspot.com/o/distributor.svg?alt=media&token=b4d34434-d10b-4e8a-932d-8e776a7c796f'       
               
            },
            {
                driver:'Femi',
                label: '3',
                id: 'femi3',
                name: 'Iya Risi Super Stores',
                address: 'Alaba International Market Lagos',
                coords: { lat: 6.1536, lng: 3.3567 },
                iconImage: 'https://firebasestorage.googleapis.com/v0/b/reacttenuapp.appspot.com/o/distributor.svg?alt=media&token=b4d34434-d10b-4e8a-932d-8e776a7c796f'       
               
            },

        ],
        timeline: [
            {
                start: new Date(0, 0, 0, 8, 30, 0),
                stop: new Date(0, 0, 0, 9, 00, 0)
            },
            {
                start: new Date(0, 0, 0, 9, 20, 0),
                stop: new Date(0, 0, 0, 10, 50, 0)
            },
            {
                start: new Date(0, 0, 0, 11, 10, 0),
                stop: new Date(0, 0, 0, 11, 40, 0)
            },
            {
                start: new Date(0, 0, 0, 12, 00, 0),
                stop: new Date(0, 0, 0, 12, 30, 0)
            },
        ]
        
    },



]

var columns= []

drivers.map(dr=>{
    for(let i=0; i<dr.timeline.length; i++){
let t= []
t.push(dr.name)
var routeNum= i + 1

t.push(routeNum.toString())
t.push(dr.timeline[i].start)
t.push(dr.timeline[i].stop)
columns.push(t)
    }
})

console.log(columns)