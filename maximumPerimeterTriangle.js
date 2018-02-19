function maximumPerimeterTriangle(l) {
    let sorted = l.sort((a,b) => a - b);
    for(i = l.length - 3; i >=0; i--){
        let sideA = sorted[i];
        let sideB = sorted[i+1];
        let sideC = sorted[i+2];
        if(sideA + sideB > sideC){
            return [sideA, sideB, sideC];
        }
    }
    return [-1];
}
