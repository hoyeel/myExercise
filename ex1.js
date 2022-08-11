const data = [
    {
        "name": "Hong Kong",
        "topLevelDomain": [
            ".hk"
        ],
        "alpha2Code": "HK",
        "alpha3Code": "HKG",
        "callingCodes": [
            "852"
        ],
        "capital": "City of Victoria",
        "altSpellings": [
            "HK",
            "香港"
        ],
        "region": "Asia",
        "subregion": "Eastern Asia",
        "population": 7324300,
        "latlng": [
            22.25,
            114.16666666
        ],
        "demonym": "Chinese",
        "area": 1104.0,
        "gini": 53.3,
        "timezones": [
            "UTC+08:00"
        ],
        "borders": [
            "CHN"
        ],
        "nativeName": "香港",
        "numericCode": "344",
        "currencies": [
            {
                "code": "HKD",
                "name": "Hong Kong dollar",
                "symbol": "$"
            }
        ],
        "languages": [
            {
                "iso639_1": "en",
                "iso639_2": "eng",
                "name": "English",
                "nativeName": "English"
            },
            {
                "iso639_1": "zh",
                "iso639_2": "zho",
                "name": "Chinese",
                "nativeName": "中文 (Zhōngwén)"
            }
        ],
        "translations": {
            "de": "Hong Kong",
            "es": "Hong Kong",
            "fr": "Hong Kong",
            "ja": "香港",
            "it": "Hong Kong",
            "br": "Hong Kong",
            "pt": "Hong Kong",
            "nl": "Hongkong",
            "hr": "Hong Kong",
            "fa": "هنگ‌کنگ"
        },
        "flag": "https://restcountries.eu/data/hkg.svg",
        "regionalBlocs": [],
        "cioc": "HKG"
    }
]
let hk=data[0];

for(let key in hk){
    if(hk[key] instanceof Array) {
        if((key.toLowerCase()==="currencies") || (key.toLowerCase()==="languages")){
            for(objectKey of hk[key]){
                for(objectItem in objectKey){
                    console.log(key[0].toUpperCase()+key.substring(1) +"_"+objectItem+": " +objectKey[objectItem]);
                }
            }
        }else if(key.toLowerCase()==="translations"){
            for(objectKey in hk[key]){
                console.log(key[0].toUpperCase()+key.substring(1) +"_"+objectKey+": " +hk[key][objectKey]);
            }
        }else{
            console.log(key[0].toUpperCase()+key.substring(1) + ": " + hk[key].join(","))
        }
    }else if(typeof hk[key] ==='string'){
        console.log(key[0].toUpperCase()+key.substring(1) + ": " + hk[key]);
    }
}