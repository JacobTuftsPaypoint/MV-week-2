/*
https://www.schoolsobservatory.org/discover/quick/planet_age
=============================================================
||                  || Mercury || Venus || Earth  || Mars  ||
||------------------||---------||-------||--------||-------||
||   yearLength     || 88      || 225   || 365.25  || 687  ||
||   surfaceGravity || 0.38    || 0.91  || 1       || 0.38 ||

Create the object spaceStats.
This will have the following:
Properties - ageInEarthDays, weightInKG
Methods - setAgeInEarthDays(birthday) 
            birthday is a string in the format mm/dd/yyyy
            using today's date and the birthday date provided, work out the time in days. 
            set ageInEarthDays to this value
        - setWeightInKG(kg)
            set weightInKG using incoming argument value
        - weightOnMercury() 
        - ageOnMercury()
        - weightOnVenus()
        - ageOnVenus()
        - weightOnMars()
        - ageOnMars()

*/
const spaceStats = {
    ageInEarthDays : 0,
    weightInKG : 0,
    setAgeInEarthDays(birthday){
       const difference = new Date().getTime() - new Date(birthday).getTime();
       this.ageInEarthDays = difference/86400000
    },
    setWeightInKG(kg){
        this.weightInKG = kg
    },
    weightOnMercury(){
        return(this.weightInKG*0.38)
    },
    ageOnMercury(){
        return(this.ageInEarthDays/88)
    },
    weightOnVenus(){
        return(this.weightInKG*0.91)
    },
    ageOnVenus(){
        return(this.ageInEarthDays/225)
    },
    weightOnMars(){
        return(this.weightInKG*0.38)
    },
    ageOnMars(){
        return(this.ageInEarthDays/687)
    }

}

// Test command (in terminal) "npm run test:d2:hard:spaceFacts"
module.exports = { spaceStats };
