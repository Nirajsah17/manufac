
// Add the gamma in existing object
function addGammaProperty(entry) {
    return {
        ...entry,
        "Gamma": (entry["Ash"] * entry["Hue"]) / entry["Magnesium"]
    };
}

// Calculate mean of given propertyname
function calculateMean(data, propertyName) {
    const totalSum = data.reduce((sum, entry) => sum + Number(entry[propertyName]), 0);
    const count = data.length;
    return count > 0 ? totalSum / count : null;
}

// Calculate median of given propertyname
function calculateMedian(data, propertyName) {
    const sortedData = data.slice().sort((a, b) => Number(a[propertyName]) - Number(b[propertyName]));
    const count = sortedData.length;

    if (count % 2 === 0) {
        const mid1 = Number(sortedData[count / 2 - 1][propertyName]);
        const mid2 = Number(sortedData[count / 2][propertyName]);
        return (mid1 + mid2) / 2;
    } else {
        return Number(sortedData[Math.floor(count / 2)][propertyName]);
    }
}

// Calculate Mode of given propertyname
function calculateMode(data, propertyName) {
    const frequencyMap = {};
    data.forEach(entry => {
        const value = Number(entry[propertyName]);
        frequencyMap[value] = (frequencyMap[value] || 0) + 1;
    });

    const maxFrequency = Math.max(...Object.values(frequencyMap));
    const modeValues = Object.keys(frequencyMap).filter(key => frequencyMap[key] === maxFrequency);
    return modeValues;
}

/**
 * 
 * @param {Array} data array of object  
 * @param {string} propertyName 
 * @param {string} classProperty 
 * @returns {object} having mean median and mode in an object.
 */
function calculateClassWiseStatistics(data, propertyName, classProperty) {
    const classValues = [...new Set(data.map(entry => entry[classProperty]))];

    const result = {};
    classValues.forEach(classValue => {
        // Filter by classproperty
        const classData = data.filter(entry => entry[classProperty] === classValue);

        const mean = calculateMean(classData, propertyName);
        const median = calculateMedian(classData, propertyName);
        let mode = calculateMode(classData, propertyName);
        let _mode = 0;
        for(let num of mode){
            _mode+=Number(num);
        }
        mode = (_mode/mode.length);
        result[classValue] = { mean, median, mode };
    });

    return result;
}

export default calculateClassWiseStatistics;
export {
    calculateClassWiseStatistics,
    addGammaProperty
}