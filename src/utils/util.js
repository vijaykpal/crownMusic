export const getMinuteFromMilliSec = (milli) => {
    let minutes = 0;
    if(milli){
        minutes = Math.round(milli/(1000 * 60));
    }
    return minutes;
}

export const fetchData = async (url) => {
    let result = {
        success: false,
        data: []
    };
    try{
        let responseJson = await fetch(url);
        let response = await responseJson.json();
        if(response && response.results && response.results.length){
            result.success = true;
            result.data = response.results;
        }
    }
    catch(err){
        result.success = false;
        result.data = [];
        console.log('Fetch error: ', err)
    }
    
    return result;
}