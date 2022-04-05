# Custom Boundary Geocoding w/ Turf.js & Geocod.io

Read my [dev.to write-up](https://dev.to/adamkatora/geocoding-against-custom-geography-with-geocodio-turfjs-54o3) for this piece.  

## Data
* [NYC City Council Districts GeoJSON](https://www1.nyc.gov/site/planning/data-maps/open-data/districts-download-metadata.page)

## Requirements  
* Account & API Key from [Geocod.io](https://www.geocod.io/)
    * Their free tier has 2,500 free lookups each day, more than enough for dev and small hobby projects

## Getting started  

Install requirements:
```bash
npm install
```

Copy the `.env.example` to a new `.env` file, and add your API Key.  

Update line 9 to include the address you want to gecode inside the `geocoder.geocode('YOUR_ADDRESS_HERE')` call.  

## Other Addresses to test:  
`City Hall Park, New York, NY 10007` - NYC City Hall - District 1  
`140 Carder Rd, New York, NY 10004` - Taco Vista, Governor's Island - District 1  
`20 W 34th St, New York, NY 10001` - Empire State Building - District 4  
`200 Central Park West, New York, NY 10024` - American Musuem of Natural History - District 6  
