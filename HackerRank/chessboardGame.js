function chessboardGame(x, y) {
    x=x%4; 
    y=y%4;
    if((y==0)||(y==3)||(x==0)||(x==3)){
        return "First";
    }
    return "Second";
}
